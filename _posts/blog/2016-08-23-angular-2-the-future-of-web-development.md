---
layout: post
title: Angular 2, the Future of Web Development
date: 2016-08-23
type: post
published: true
status: publish
categories:
- Blog
tags: []
image: /images/blog/angular-2-the-future-of-web-development.jpg
description: Angular 2 is providing a new standard in web development, I see this framework as the future and the new standard to the was sites will be built.
---

<p>Not so long ago Angular 1 came out and it was pretty easy to understand for those that new javascript and it was easy to control a website's front end. Angular 2 is even better. Using TypeScript and being able to be compiled to ES6 javascript this is a wonderful framework that helps teach you Object Oriented programing principals as well as provides a high quality web application. Learning Angular 2 at this point in time is not as easy as some other established frameworks. At the time of this writing Angular 2 is still in beta and is on Release Candidate 5 (RC5). Most things are pretty stable in the fact that functions not going to change much before Angular 2 is officially released but there are still some other bugs being worked out and there are some dependencies that I believe they are trying to add into the Angular 2 package. That being said I have spent a lot of time learning Angular 2 and I think I've got the basics down pretty good.</p>

<h3>Search Engine Problems</h3>
<p>As a front-end web developer and SEO specialist I see many ups and downs with Angular 2. Angular 2 apps are single page web applications that can wreak havoc on SEO. Content is dynamically loaded and not available in the DOM for search engine spiders to crawl. There are not really any "internal" links, just routes to another component to display data. You can, however, set up deep link routes to display the appropriate data but I don't know exactly how that will affect SEO at this point in time. My concern is will sitemaps have to be generated manually, I'm sure you can set up a component to fetch all of the route links but again, not sure how that works with parameter based links such as blog posts where you have /blog/:blogName or /blog/:id or how ever you like your linking structure. If that has to be done manually, I can honestly see that being a pain to maintain. Like I said, I'm sure there's a nicer way to do it but I haven't figured it out yet.</p>

<h3>Better User Experience</h3>
<p>Staying on SEO for a brief minute, the one thing I can say about Angular 2 web apps is it makes sites faster. Being that it is a single page application, you only have to make a few http requests. Data is served when you need it, and you can make a super lightweight site which increases load time which makes both mobile and desktop search engines happy. Off of SEO, for user experience, like I said Angular 2 sites are pretty lightweight, modular and the only things that have to load when you click throughout the site are the components that need to load, everything else stays. For instance, and I'll use some Angular 2 terminology while explaining, a component can be a block of html, so think your header or your footer. 9 times out of 10 those can stay static, they're not going change (usually). The only thing that's going to change is the main content area. So on a normal site when you click on a link you have to reload the entire page and do multiple HTTP requests to get your logo, or your images, or your css/js files and it slows down your site. With Angular 2, you can assign components their own individual css that load ONLY when that component is called and the only thing that changes is that main content area. You do not have to reload your logo, your global css file, just what’s being changed in the main content area. This is what makes Angular 2 so great, the ability to modularly load recourses only when they need to be loaded.</p>

<h3>Learning Angular 2</h3>
<p>There are some really great resources to learning Angular 2, the one I recommend is the tutorials on <a href="http://angular.io" target="_blank">Angular IO</a> which is the official site for Angular 2. Outside of that, everything else can be unreliable as most tutorials were made within the last calendar year but so much has changed since Angular 2 RC1 to now RC5 and for all I know they could have an RC6 in which something major changes. I can tell you from the tutorials I have followed, they go from <pre><code>import { Component } from 'angular2/core';</code></pre> to <pre><code>import { Component } from '@angular/core';</code></pre>. Small things like that can mean the difference from your app working to you pulling your hair out because you're following an older tutorial.</p>

<p>I am by no means an expert on Angular 2, but I don't think there are that many just yet as it hasn't been officially released. My personal goal is to pioneer this space and take advantage of this wonderful framework as I see the potential it has to create great experiences on the web and it has been fun to learn. I urge you to check out <a href="http://angular.io" target="_blank">the Angular 2 official site</a> and start learning.</p>

<p>If you have any questions, please ask in the comments section below and I will try to answer them as best as I can.<br>
Thanks<br>
Jonathon Harrelson</p>