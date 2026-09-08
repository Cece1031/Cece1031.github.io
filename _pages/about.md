---
layout: home
permalink: /
title: "Qingni Wang · Trustworthy AI"
excerpt: "Research in trustworthy AI, uncertainty quantification, and computer use agents."
redirect_from:
  - /about/
  - /about.html
---

<section class="hero" aria-labelledby="hero-title">
  <div class="hero-copy">
    <p class="eyebrow"><span class="status-dot"></span> A LITTLE CURIOSITY. A LOT OF POSSIBILITY.</p>
    <h1 id="hero-title">Qingni Wang<span class="chinese-name" lang="zh">王清霓 <span> / Celia</span></span></h1>
    <p class="hero-statement">Towards AI we can <em>trust.</em></p>
    <p class="hero-description">Exploring uncertainty, reliability, and the next generation of intelligent agents.</p>
    <p class="affiliation">Incoming PhD student <span aria-hidden="true">↗</span><br><strong>University of California, Santa Barbara</strong></p>
    <div class="hero-actions"><a class="button button-primary" href="#publications">Explore my research <span aria-hidden="true">↗</span></a><a class="text-link" href="mailto:{{ site.author.email }}">Say hello <span aria-hidden="true">↗</span></a></div>
    <div class="social-links" aria-label="Social profiles">{% include social-links.html %}</div>
  </div>
  <figure class="hero-portrait">
    <div class="portrait-orbit orbit-one" aria-hidden="true"></div><div class="portrait-orbit orbit-two" aria-hidden="true"></div>
    <div class="portrait-frame"><img src="{{ site.author.avatar | relative_url }}" alt="Qingni Wang in the mountains" width="1280" height="1975" fetchpriority="high"></div>
    <span class="portrait-star" aria-hidden="true">✳</span>
    <figcaption><span class="tiny-line" aria-hidden="true"></span> Researcher. Explorer. Cat person.</figcaption>
  </figure>
</section>

<section id="about-me" class="section about-section" aria-labelledby="about-title">
  <div class="section-heading"><p class="eyebrow">01 / A LITTLE INTRODUCTION</p><h2 id="about-title">Curiosity, with <em>purpose.</em></h2></div>
  <div class="about-copy">
    <p>I’m <strong>Qingni Wang (Celia)</strong>, a Master’s student in Computer Science at the <strong>University of Electronic Science and Technology of China (UESTC)</strong>, and an incoming PhD student at <strong>UC Santa Barbara</strong>, advised by <a href="https://eric-xw.github.io" target="_blank" rel="noopener noreferrer">Prof. Xin Eric Wang</a> and <a href="https://buyuheng.github.io" target="_blank" rel="noopener noreferrer">Prof. Yuheng Bu</a>.</p>
    <p>My research centers on making AI systems more reliable: understanding what models don’t know, controlling risk, and building trustworthy computer use agents.</p>
    <p>Previously, I received my Bachelor’s degree in Electronic Information Science and Technology from <strong>China University of Mining and Technology</strong> (2019–2023). I also visited <strong>Southern University of Science and Technology</strong> (June–October 2024), working with <a href="https://scholar.google.com/citations?user=PcmyXHMAAAAJ&hl=en" target="_blank" rel="noopener noreferrer">Prof. Feng Zheng</a>.</p>
    <div class="interest-tags" aria-label="Research interests"><span>Uncertainty Quantification</span><span>Conformal Prediction & Risk Control</span><span>Hallucination in QA</span><span>Trustworthy Computer Use Agents</span></div>
    <p class="collaboration-note"><span class="status-dot" aria-hidden="true"></span> Always open to thoughtful collaborations & academic conversations.</p>
  </div>
</section>

<section id="publications" class="section publications-section" aria-labelledby="publications-title">
  <div class="section-topline"><div class="section-heading"><p class="eyebrow">02 / SELECTED WORK</p><h2 id="publications-title">Research & <em>publications.</em></h2></div><a class="text-link" href="{{ site.author.googlescholar }}" target="_blank" rel="noopener noreferrer">Google Scholar <span aria-hidden="true">↗</span></a></div>
  <p class="section-note">Selected conference & workshop papers <span>† Equal contribution</span></p>
  <div class="publication-list">
    {% for paper in site.data.publications %}
    <article class="publication">
      <div class="paper-number" aria-hidden="true">0{{ forloop.index }}</div>
      <div class="paper-content"><div class="paper-meta"><span class="venue">{{ paper.venue }}</span>{% if paper.distinction %}<span class="distinction">{{ paper.distinction }}</span>{% endif %}</div><h3><a href="{{ paper.url }}" target="_blank" rel="noopener noreferrer">{{ paper.title }}</a></h3><p class="paper-authors">{{ paper.authors }}</p></div>
      <a class="paper-link" href="{{ paper.url }}" target="_blank" rel="noopener noreferrer" aria-label="Read {{ paper.title | escape }}">Paper <span aria-hidden="true">↗</span></a>
    </article>
    {% endfor %}
  </div>
</section>

<div class="updates-grid section">
  <section id="news" aria-labelledby="news-title"><div class="section-heading"><p class="eyebrow">03 / ALONG THE WAY</p><h2 id="news-title">Latest <em>news.</em></h2></div><ol class="news-list">{% for item in site.data.news limit:3 %}<li><span class="news-date">{{ item.date }}</span><p>{{ item.text }}</p></li>{% endfor %}</ol><details class="news-archive"><summary>Earlier updates <span aria-hidden="true">+</span></summary><ol class="news-list">{% for item in site.data.news offset:3 %}<li><span class="news-date">{{ item.date }}</span><p>{{ item.text }}</p></li>{% endfor %}</ol></details></section>
  <section class="service-section" aria-labelledby="service-title"><div class="section-heading"><p class="eyebrow">04 / GIVING BACK</p><h2 id="service-title">Academic <em>service.</em></h2></div><p class="muted">Contributing to the research community.</p><ul class="service-list"><li><span>ICLR</span><span>2026</span></li><li><span>ACL</span><span>2025</span></li><li><span>EMNLP</span><span>2025</span></li><li><span>ACM Multimedia</span><span>2025</span></li></ul></section>
</div>

<section id="beyond" class="section beyond-section" aria-labelledby="beyond-title"><div class="beyond-copy"><p class="eyebrow">05 / OFF THE CLOCK</p><h2 id="beyond-title">A softer side <em>of life.</em></h2><p>Beyond papers and experiments, there’s Bingbing (饼饼), my very cute cat and a little source of everyday joy.</p><span class="handwritten">Meet my favorite little companion <span aria-hidden="true">↗</span></span></div><figure class="cat-photo"><img src="{{ '/assets/bing.jpg' | relative_url }}" alt="Bingbing, a golden cat with big green eyes, sitting in a carrier" width="1280" height="1216" loading="lazy"><figcaption>Bingbing / 饼饼 <span aria-hidden="true">♡</span></figcaption></figure></section>

<section id="contact" class="contact-section section" aria-labelledby="contact-title"><div><p class="eyebrow">06 / LET’S CONNECT</p><h2 id="contact-title">Good ideas start<br>with a <em>conversation.</em></h2><p>Research, collaboration, or simply a hello —<br>I’d love to hear from you.</p><a class="contact-email" href="mailto:{{ site.author.email }}">{{ site.author.email }} <span aria-hidden="true">↗</span></a><div class="social-links">{% include social-links.html %}</div></div><aside class="visitor-card" aria-labelledby="visitor-title"><p class="eyebrow">A SMALL, CONNECTED WORLD</p><h3 id="visitor-title">Hello, from everywhere.</h3><div id="visitor-globe" class="visitor-globe" data-map-id="{{ site.visitor_map_id | escape }}"><p id="visitor-status" class="visitor-status" role="status">The visitor globe will appear here.</p></div><p class="visitor-caption">Thank you for stopping by.<br><a href="https://clustrmaps.com/site/cece1031.github.io" target="_blank" rel="noopener noreferrer">Visitor map by ClustrMaps <span aria-hidden="true">↗</span></a></p><noscript><p>Enable JavaScript to view the visitor globe.</p></noscript></aside></section>
