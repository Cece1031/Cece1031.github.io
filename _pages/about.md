---
layout: home
permalink: /
title: "Qingni Wang | Homepage"
excerpt: "Incoming PhD student at UC Santa Barbara researching trustworthy AI, uncertainty quantification, and computer use agents."
redirect_from:
  - /about/
  - /about.html
---

<aside class="profile" aria-label="Profile">
  <img class="profile-photo" src="{{ site.author.avatar | relative_url }}" alt="Qingni Wang" width="1280" height="1975">
  <h1>Qingni Wang</h1>
  <p class="name-cn" lang="zh">王清霓 <span>· Celia</span></p>
  <p class="profile-role">Incoming PhD Student<br><strong>UC Santa Barbara</strong></p>
  <p class="profile-location">Chengdu, China → Santa Barbara, CA</p>

  <div class="profile-links">
    {% include social-links.html %}
  </div>

  <div class="visitor-mini">
    <p>Visitors</p>
    <div id="visitor-globe" class="visitor-globe" data-map-id="{{ site.visitor_map_id | escape }}">
      <span id="visitor-status" role="status">Loading visitor map…</span>
    </div>
    <a href="https://clustrmaps.com/site/cece1031.github.io" target="_blank" rel="noopener noreferrer">View visitor map ↗</a>
  </div>
</aside>

<div id="content" class="content">
  <section id="about" class="content-section about">
    <h2>About Me</h2>
    <p>I am <strong>Qingni Wang (Celia)</strong>, a Master’s student in Computer Science at the <strong>University of Electronic Science and Technology of China (UESTC)</strong>. I will join the <strong>University of California, Santa Barbara (UCSB)</strong> as a PhD student, advised by <a href="https://eric-xw.github.io" target="_blank" rel="noopener noreferrer">Prof. Xin Eric Wang</a> and <a href="https://buyuheng.github.io" target="_blank" rel="noopener noreferrer">Prof. Yuheng Bu</a>.</p>
    <p>Previously, I received my Bachelor’s degree from <strong>China University of Mining and Technology (CUMT)</strong> and visited <strong>Southern University of Science and Technology (SUSTECH)</strong>, supervised by <a href="https://scholar.google.com/citations?user=PcmyXHMAAAAJ&hl=en" target="_blank" rel="noopener noreferrer">Prof. Feng Zheng</a>.</p>
    <p class="research-line"><strong>Research interests:</strong> uncertainty quantification, conformal prediction and risk control, hallucination in question answering, and trustworthy computer use agents.</p>
    <p class="open-note">Open to collaborations and academic discussions — feel free to reach out.</p>
  </section>

  <section id="news" class="content-section">
    <h2>News</h2>
    <ul class="news-list">
      {% for item in site.data.news %}
      <li><time>{{ item.date }}</time><span>{{ item.text }}</span></li>
      {% endfor %}
    </ul>
  </section>

  <section id="publications" class="content-section">
    <div class="section-heading-row">
      <h2>Publications</h2>
      <a href="{{ site.author.googlescholar }}" target="_blank" rel="noopener noreferrer">Google Scholar ↗</a>
    </div>
    <p class="section-note">† Equal contribution</p>
    <ol class="publication-list">
      {% for paper in site.data.publications %}
      <li>
        <p class="paper-title">{{ paper.title }}</p>
        <p class="paper-authors">{{ paper.authors }}</p>
        <p class="paper-venue"><strong>{{ paper.venue }}</strong>{% if paper.distinction %} · <span>{{ paper.distinction }}</span>{% endif %} <a href="{{ paper.url }}" target="_blank" rel="noopener noreferrer">[Paper]</a></p>
      </li>
      {% endfor %}
    </ol>
  </section>

  <section id="service" class="content-section">
    <h2>Academic Services</h2>
    <ul class="service-list">
      <li>International Conference on Learning Representations <span>ICLR 2026</span></li>
      <li>Annual Meeting of the Association for Computational Linguistics <span>ACL 2025</span></li>
      <li>Conference on Empirical Methods in Natural Language Processing <span>EMNLP 2025</span></li>
      <li>ACM International Conference on Multimedia <span>MM 2025</span></li>
    </ul>
  </section>

  <section class="content-section more">
    <div>
      <h2>More About Me</h2>
      <p>I have a very cute cat named Bingbing (饼饼).</p>
    </div>
    <img src="{{ '/assets/bing.jpg' | relative_url }}" alt="Bingbing, Qingni's golden cat" width="1280" height="1216" loading="lazy">
  </section>
</div>
