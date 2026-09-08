"""Package the validated Jekyll homepage as a self-contained Sites Worker.

Run after `bundle exec jekyll build`. GitHub Pages still uses Jekyll directly.
Only assets consumed by this homepage are included in the private preview.
"""
import base64
import json
import mimetypes
from pathlib import Path

root = Path(__file__).resolve().parents[1]
source = root / "_site"
paths = [
    "index.html", "about.html", "about/index.html", "sitemap.xml",
    "assets/css/home.css", "assets/js/theme.js", "assets/mountain.jpg",
    "assets/bing.jpg", "images/cat-tab-safari-v5.png",
    "images/cat-mask-v1.svg",
    "images/cat-favicon-16-v3.png", "images/cat-favicon-32-v3.png",
    "images/cat-favicon-v2.ico",
    "images/cat-touch-v3.png", "images/cat-icon-192-v3.png",
    "images/cat-icon-512-v3.png", "images/site.webmanifest",
    "favicon.ico", "public/cat-og-v3.png",
    "assets/fonts/fa-solid-900.woff2", "assets/fonts/fa-brands-400.woff2",
    "assets/fonts/academicons.woff",
]
assets = {}
for name in paths:
    data = (source / name).read_bytes()
    assets["/" + name] = {
        "type": mimetypes.guess_type(name)[0] or "application/octet-stream",
        "body": base64.b64encode(data).decode("ascii"),
    }
visitor_map_url = "https://s01.flagcounter.com/map/OpEY/size_t/txt_765783/border_EADFEA/pageviews_1/viewers_3/flags_0/"
worker = "const assets = " + json.dumps(assets, separators=(",", ":")) + ";\n"
worker += "const visitorMapUrl = " + json.dumps(visitor_map_url) + ";\n"
worker += r'''
export default {
  async fetch(request) {
    if (!['GET', 'HEAD'].includes(request.method)) {
      return new Response('Method not allowed', {status: 405, headers: {Allow: 'GET, HEAD'}});
    }
    const url = new URL(request.url);
    if (url.pathname === '/visitor-map.png') {
      const upstream = await fetch(visitorMapUrl);
      if (!upstream.ok) return new Response('Visitor map unavailable', {status: 502});
      return new Response(request.method === 'HEAD' ? null : upstream.body, {
        headers: {'Content-Type': 'image/png', 'Cache-Control': 'public, max-age=300'}
      });
    }
    if (url.pathname === '/about' || url.pathname === '/about/' || url.pathname === '/about.html') {
      return Response.redirect(url.origin + '/', 301);
    }
    const path = url.pathname === '/' ? '/index.html' : url.pathname;
    const asset = assets[path];
    if (!asset) return new Response('Page not found', {status: 404});
    let bytes = Uint8Array.from(atob(asset.body), c => c.charCodeAt(0));
    if (asset.type === 'text/html' || asset.type === 'application/xml') {
      const text = new TextDecoder().decode(bytes)
        .replaceAll('https://cece1031.github.io', url.origin)
        .replaceAll(visitorMapUrl, url.origin + '/visitor-map.png');
      bytes = new TextEncoder().encode(text);
    }
    return new Response(request.method === 'HEAD' ? null : bytes, {
      headers: {
        'Content-Type': asset.type + (/^(text\/|application\/(javascript|xml))/.test(asset.type) ? '; charset=utf-8' : ''),
        'Cache-Control': asset.type === 'text/html' ? 'no-cache' : 'public, max-age=3600',
        'X-Content-Type-Options': 'nosniff'
      }
    });
  }
};
'''
destination = root / "dist/server/index.js"
destination.parent.mkdir(parents=True, exist_ok=True)
destination.write_text(worker)
print(f"Packaged {len(assets)} validated files ({destination.stat().st_size:,} bytes).")
