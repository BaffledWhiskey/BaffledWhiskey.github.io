---
layout: default
title: "Mary Stenson - "
---

<h2>Mary Stenson</h2>
<br><br>

<div class="container-fluid padding">
<div class="row text-center padding">
{% assign posts = "" | split: ',' %}
{% for collection in site.collections %}
{% assign name = collection.label %}
{% assign posts = posts | concat: site[name] %}
{% endfor %}
{% assign sorted = posts | sort: 'date' | reverse %}
{% for blogPost in sorted %}
{% if blogPost.layout == "blogpost" or blogPost.layout == "deutchBlog" %}
{% if blogPost.authorID == "mS1" %}

<div class="col-xs-12 col-sm-6 col-md-4">
            <div class="imageText padding">
                <a href="{{blogPost.url}}" class="hvr-grow-shadow">
                <img src="/assets/{{blogPost.imageurl}}" class="img-fluid">
                <span class="title"><h4>{{blogPost.title}}</h4></span>
                </a>
            </div>
                    
</div>

{% endif %}
{% endif %}
{% endfor %}
</div>
</div>