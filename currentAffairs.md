---
layout: default
title: "Current Affairs - "
---

<h2>Current Affairs</h2>
<br><br>

<div class="container-fluid padding">
<div class="row text-center padding">
{% assign sorted = site.currentAffairs | reverse %}
{% for blogPost in sorted %}

<div class="col-xs-12 col-sm-6 col-md-4">
            <div class="imageText padding">
                <a href="{{blogPost.url}}" class="hvr-grow-shadow">
                <img src="assets/{{blogPost.imageurl}}" class="img-fluid">
                <span class="title"><h4>{{blogPost.title}}</h4></span>
                </a>
            </div>
                    
</div>


{% endfor %}
</div>
</div>