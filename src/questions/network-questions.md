---
title: Network Questions
layout: layouts/page.njk
permalink: /questions/network-questions/index.html
---

* Traditionally, why has it been better to serve site assets from multiple domains?

It's because browsers usually have limits on the number of concurrent downloads from a domain at a moment. So, serving assets from multiple domains can increase the concurrent level.

* Do your best to describe the process from the time you type in a website's URL to it finishing loading on your screen.


* What are the differences between Long-Polling, Websockets and Server-Sent Events?

Long-polling opens an HTTP request and remains open until an update is received. Upon receiving an update, a new request is immediately opened awaiting the next update. Server-sent events(SSE) rely on a long-lived HTTP connection, where updates are continuously sent to the client.

WebSockets (via WS) The WebSocket protocol allows for constant, bi-directional communication between the server and client. For this test, Primus is used to abstract multiple implementations of the protocol. This method uses the WS implementation.
WebSockets (via Engine.IO) Same as the WS method, powered by the Engine.IO implementation.
WebSockets (via Faye) Same as the WS method, powered by the Faye implementation.
WebSockets (via SockJS) Same as the WS method, powered by the SockJS implementation.

https://aquil.io/articles/a-comparison-between-websockets-server-sent-events-and-polling#:~:text=Long%2Dpolling%20opens%20an%20HTTP,opened%20awaiting%20the%20next%20update.&text=Server%2Dsent%20events(SSE),continuously%20sent%20to%20the%20client.


* Explain the following request and response headers:
  * Diff. between Expires, Date, Age and If-Modified-...
  * Do Not Track
  * Cache-Control
  * Transfer-Encoding
  * ETag
  * X-Frame-Options

* What are HTTP methods? 

HTTP defines a set of request methods to indicate the desired action to be performed for a given resource. Although they can also be nouns, these request methods are sometimes referred to as HTTP verbs.

List all HTTP methods that you know, and explain them.

The primary or most commonly-used HTTP methods are POST, GET, PUT, PATCH, and DELETE. These methods correspond to create, read, update, and delete (or CRUD) operations, respectively.


* What is domain pre-fetching and how does it help with performance?

A DNS Prefetch is a resource hint to make a DNS lookup for a domain the browser has not yet determined needs to be made. This can improve performance because when the browser does need to make a request for a resource, the DNS lookup for that domain has already occurred.

* What is a CDN and what is the benefit of using one?

A CDN can ensure that a network has a high data threshold. A large number of users can thus access the network at the same time without delays. By enabling a high traffic flow, CDN allows people from all over the world to access your website simultaneously.

https://www.colocationamerica.com/blog/cdn-advantages-and-disadvantages#:~:text=A%20CDN%20can%20ensure%20that,to%20access%20your%20website%20simultaneously.
