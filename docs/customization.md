# Personal homepage

The homepage remains a GitHub Pages-compatible Jekyll site. Its layout is
`_layouts/home.html`, content is `_pages/about.md`, and styles and behavior are
`assets/css/home.css` and `assets/js/home.js`.

## Social profiles

Set `author.twitter` and `author.linkedin` in `_config.yml` to your verified
profile URL (or username). Both the hero and contact section update together.
An empty value hides that link; the site never invents a profile address.

## Publications and news

Edit `_data/publications.yml` and `_data/news.yml`. News older than the first
three entries lives in the accessible “Earlier updates” disclosure.
Original academic claims and dates are retained from the prior homepage.

## Visitor map

The compact left-column widget uses the account-free Flag Counter map configured
as `visitor_map_url` and `visitor_map_stats_url` in `_config.yml`. It is a plain
image rather than a JavaScript embed, so it works on GitHub Pages and still
shows a useful fallback alt label if the third-party image cannot load.

## Build

With the original bundle installed, run `bundle exec jekyll build` or
`bundle exec jekyll serve`. The original Gemfile and lockfile are preserved.
Dependencies pinned in the original lockfile need a compatible Ruby environment.

## Link preview

`public/og.png` was generated with the built-in ImageGen tool. Brief: a white
landscape social card, fine dusty pink and lavender elliptical lines, dark
editorial serif name “Qingni Wang”, subtitle “Trustworthy AI · Uncertainty
Quantification”, and “cece1031.github.io”. Metadata uses the site's configured
canonical URL.
