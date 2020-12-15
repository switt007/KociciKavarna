---
layout: layout.liquid
---

<section class="brown-cat between">
    <div class="container">
        <div class="global-headline">
            <div class="animate-top">
                <h2 class="sub-headline">
                    <span class="first-letter">A</span>ktuality
                </h2>
            </div>
        </div>
    </div>
</section>

{% for novinka in novinky %}
<section class="news">
    <div class="container">
        <div class="info">
            <div class="description animate-left">
                <div class="global-headline">
                    <h3>{{ novinka.created | dateToCzechFormat }}</h3>
                    <div class="asterisk"><i class="fas fa-askerisk"></i></div>
                </div>
                <p>{{ novinka.text }}</p>            
            </div>
        </div>
    </div>
</section>
{% endfor %}

