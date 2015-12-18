---
layout: post
title: Making the move to Jekyll
date: 2015-11-30 
type: post
published: true
status: publish
categories:
- Blog
tags: []
image: /images/blog/blog-wp-jekyll.jpg
description: At the end of 2015 I decided migrate my site from WordPress to Jekyll. In this article I discuss why and how I made the move.
---

<p>Lately I've been in the mood to explore different things and try different ways of building web sites. I'm always looking at how I can improve user experience and increase page speed loading time. I've also wanted to move away from traditional CMS platforms for a while now also. So I did some research and found <a href="http://jekyllrb.com/" target="_blank">Jekyll</a> and is primarily used by the good people at GitHub.</p>

<h3>My WordPress Issues</h3>
<p>
Originally my site was built using WordPress and had all of these great features that I could use and this wide varaity of plugins at my disposal that could accomplish just about anything. But I didn't need all of that. Everything I do I code from scratch, for the most part. With my WordPress site I had to use security plugins to keep hackers at bay and it worked for the most part, but I was tired of getting emails saying someone from this IP has been blacklisted for trying to access a dirctory that does not exist (I had my admin directory renamed and they were trying to access wp-admin).
</p>
<p>
With search engine optimization being a concern to me I also noticed that page speed for my site was rather slow. I sat down one evening and began to think, which can be rather dangerous sometimes, what is causeing my site to slow down? It's pretty basic, text, images, and a background video. There's a database, and a ton of exra php scripting that comes with WordPress. Then the information on each page has to be served up from the database WordPress uses and that takes up time as well. that's when I decided I'm going to build a static site, but it would not make sense to building it in just HTML5, CSS3, and Javascript... there would be a lot of repition and if I have to make a global change I would have to do it to every single file across the entire site... and that's not very efficient. Jekyll was the perfect answer.
</p>
<h3>The Migration Process</h3>
<p>
The migration process was quite simple. Since the basic file structure is similar between Jekyll and WordPress determining where to put what code where was really easy. Jekyll uses the same head/footer concept as WordPress, there is a file called header as well but that's more for like your visual site header, like where your navigation and everything would be held if you have a top nav like I do. You can create pages easily an after some shrt reading on the documentation site you can set up the config file and front matter like you want it really easy.
</p>
<p>
The hardest part for me was picking up the <a href="http://liquidmarkup.org/" target="_blank">Liquid Markup Language</a>. It is very similar to php and is required if you want some sort of dynamicness to your site, such as listing posts and having different variables but some of the syntax is different. Also remembering to name your posts with the date first was something that took me some time to get used to as well but easily remembered after a few blog postings.
</p>
<p>
One key thing to remember with Jekyll is, you cannot use php. Jekyll is a static site generator so php will not work so you hae to use an external service for contact forms and what not. Currently what I am using is the <a href="" target="_blank">marketing automation software, Leadsius</a>. I really enjoy it, gives me insights to the visitors coming to my site, I am able to to put them into a lead nurture stream to keep my name in front of them and I also use it for my newsletter. Did I Mention for a single user it's free?
</p>
<h3>Conclusion</h3>
<p>
Since moving my site over to Jekyll there have been some challenges. Automating deployment to my server, I haven't figured that one out yet, but I'm working on it... Limitations with my hosting provider. Automatic posting to social media when I publish a new blog post or portfolio post. Those are my primary challenges, just automation of certain tasks.
</p>
<p>
Overall my site speed has increase dramitally from 6.2s load time to 2.4s load time. The amount of HTTP requests drop from over 70 to less than 10, and since Jekyll is built locally on my machine (I run a mac), I can open up spoghtlight and search for one of my blogs if I need to reference it when I don't have an internet connection. Finally no more eamils about people trying to hack my site... There's no database for them to corrupt, there's no injection script they can run, and I know my site will always be up, as long as my server is up.
</p>
<p>
I will soon be coming out with a video series on migrating from WordPress to Jekyll also using Gulp automation, so be looking for that coming up after the new year.
</p>
<h4>TL;DR: </h4>
<p>
I moved away from WordPress to Jekyll because Jekyll is static and takes a database out of the questions which makes my site faster and much more secure against hackers.
</p>