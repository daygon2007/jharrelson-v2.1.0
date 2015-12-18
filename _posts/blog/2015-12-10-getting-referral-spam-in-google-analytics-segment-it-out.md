---
layout: post
title: Getting Referral Spam in Analytics? Segment it out.
date: 2015-12-14
type: post
published: true
status: publish
categories:
- Blog
tags: []
image: /images/blog/blog-getting-referral-spam.jpg
description: Most Web Marketers use Google Analytics to get some of their metrics. Recently metrics have been skewed due to referral spam. See how I segment them out.
---

<h3>The Problem</h3>
<p>Google Analytics is an essential tool for web marketers. Recently I and many others have reported the amount referral spam from various websites (See Below). To the untrained eye, just see the ammount of visitors and the ammout of page views, you would think your site traffic is doing fantasic but it really is not.</p>

<a href="{{ site.url }}/images/blog/GA-unsegmented-referral-spam-lg.jpg" class="fancybox"><img src="{{ site.url }}/images/blog/GA-unsegmented-referral-spam-sm.jpg" rel="Unsegmented Google Analytics Referral Spam"></a>

<p>The above image shows referral traffic for my site (Note: I have been filtering out some domains using .htaccess). 90% of that traffic is from spammy referral sites.</p>

<h3>Solution Number One</h3>
<p>One solution I have done within my google analytics, is <a href="https://analytics.google.com/analytics/web/template?uid=57Vm0vPqSlGA9B3gmAIBzg" target="_blank">I have created a segment</a> that filters out all traffic that was on my site for less than a second. This filters out bots and all fake traffic. Even if someone "pogo's"" your page they should be on there for at least 1 second. Just as a side note to this section, you should be segmenting your data anyways in order to make more sense of it.</p>

<a href="{{ site.url }}/images/blog/GA-segmented-referral-spam-lg.jpg" class="fancybox"><img src="{{ site.url }}/images/blog/GA-segmented-referral-spam-sm.jpg" rel="Segmented Google Analytics Referral Spam"></a>

<p>As you can see there is much less referral traffic and how much referral spam can skew metrics.</p>

<h3>Solution Number 2</h3>
<p>As the old addage goes, "there's more than one way to skin a cat", so is the case with referral spam. Building upon what I eluded to above, you can use your .htaccess file to block referral traffic as well. I have included, below, a small snippet you can use in your .htaccess to blok some of the biggest offenders. The bad thing about using your .htaccess is you constantly have to keep updatinging it to keep blocking referrals.</p>
<pre><code>
<IfModule mod_rewrite.c> 
RewriteEngine On
RewriteCond %{HTTP_REFERER} ^https?://([^.]+\.)*buttons-for-website\.com [NC]
RewriteCond %{HTTP_REFERER} ^https?://([^.]+\.)*semalt\.com [NC]
RewriteCond %{HTTP_REFERER} ^https?://([^.]+\.)*simple-share-buttons\.com [NC]
RewriteCond %{HTTP_REFERER} ^https?://([^.]+\.)*googlsucks\.com [NC]
RewriteCond %{HTTP_REFERER} ^https?://([^.]+\.)*darodar\.com [NC]
RewriteCond %{HTTP_REFERER} ^https?://([^.]+\.)*pornhum-forum\.ga [NC]
RewriteCond %{HTTP_REFERER} ^https?://([^.]+\.)*free-share-buttons\.com [NC]
RewriteCond %{HTTP_REFERER} ^https?://([^.]+\.)*theguardlan\.com [NC]
RewriteCond %{HTTP_REFERER} ^https?://([^.]+\.)*get-free-traffic-now\.com [NC]
RewriteCond %{HTTP_REFERER} ^https?://([^.]+\.)*buttons-for-your-website\.com [NC]
RewriteCond %{HTTP_REFERER} ^https?://([^.]+\.)*hulfingtonpost\.com [NC]
RewriteCond %{HTTP_REFERER} ^https?://([^.]+\.)*best-seo-offer\.com [NC]
RewriteCond %{HTTP_REFERER} ^https?://([^.]+\.)*best-seo-solution\.com [NC]
RewriteCond %{HTTP_REFERER} ^https?://(site[0-9]+\.)?social-buttons\.com [NC]
RewriteRule .* - [F]
</IfModule>
</code></pre>
<p>Though I'm not 100% this method works, I do not see any of these referrers show up in my analytics reports.</p>

<h3>Other Solutions</h3>
<p>I have not done this nor, nor do I have the desire to, but I've seen people create filters and exclude bots that way. I wouldn't reccomend this as it's just as cumbersome as maintaining your .htaccess file. I've read there are more ways to handle the situation but I prefer my first solution because filtering everything out that spent less than a second on my site I can see my quality traffic. Is it the best way? Probably not but it's the way that works for me and what I need my data for.</p>

<h3>In Conclusion</h3>
<p>Referral spam in Google Analytics is a huge problem skewing metrics for everyone. With a few simple steps you can filter out the crud and get to the data you actually want. If you have any questions or suggestions, please let me know in the comments below.</p>