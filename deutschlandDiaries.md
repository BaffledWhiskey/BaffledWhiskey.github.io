---
layout: default
title: "Deutschland Diaries - "
---
<div class="topicHeaderL">
<h2>Deutschland Diaries <img src="/assets/germanflag.png" style="width: 50px; height: auto; padding-bottom: 8px;"/></h2>
</div>
<br><br>

<div class="container-fluid padding">
<div class="row text-center padding">
{% for blogPost in site.deutschlandDiaries %}

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