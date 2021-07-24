---
title: Network Questions
layout: layouts/page.njk
permalink: /questions/network-questions/index.html
---

* Traditionally, why has it been better to serve site assets from multiple domains?

It's because browsers usually have limits on the number of concurrent downloads from a domain at a moment. So, serving assets from multiple domains can increase the concurrent level.

* Do your best to describe the process from the time you type in a website's URL to it finishing loading on your screen.


QUORA : 

Answer 1 :: Step 1 --> Get the ip address of the URL.

To Get the IP address for http://www.quora.com, the steps are
a) System checks the browser cache. Browser caches the DNS data for some time.
b) If IP address[DNS data for http://www.quora.com] is not found in browser cahe, system will check the OS cache. [in windows gethostbyname system call is made]
c) If IP address[DNS data for http://www.quora.com] is not found in OS cache, then request continues to DNS cache maintained by the router.
d) If DNS data for http://www.quora.com is not found then seach moves to next level where DNS cache of your Internet Service Provider.
e) If the DNS data is not found in ISP's DNS cache, then ISP's DNS server perform DNS query to search for the required DNS data.


Step 2>> Once browser gets the IP address it opens TCP connection and sends HTTP request to the web server.

Step 3>> The web server will handle the request [it happens in multiple steps] and send the HTTP response to the client/browser.

Step 4>> The browser parse the HTML docuemnt and render it.


This is basically summary of what happend when we type an URL and hit enter.

For more detail you can refer this link :-
http://igoro.com/archive/what-really-happens-when-you-navigate-to-a-url/

ANSWER 2 :: What are the series of steps that happen when a URL is requested from the address field of a browser?
Originally Answered: What are the series of steps that happen when an URL is requested from the address tab of a browser?
This is a question whose answer could grow into an entire course on networking, so here's a version that only details some of the cases. There could probably be followup questions.


The browser extracts the domain name from the URL.
The browser queries DNS for the IP address of the URL. Generally, the browser will have cached domains previously visited, and the operating system will have cached queries from any number of applications. If neither the browser nor the OS have a cached copy of the IP address, then a request is sent off to the system's configured DNS server. The client machine knows the IP address for the DNS server, so no lookup is necessary.
The request sent to the DNS server is almost always smaller than the maximum packet size, and is thus sent off as a single packet. In addition to the content of the request, the packet includes the IP address it is destined for in its header. Except in the simplest of cases (network hubs), as the packet reaches each piece of network equipment between the client and server, that equipment uses a routing table to figure out what node it is connected to that is most likely to be part of the fastest route to the destination. The process of determining which path is the best choice differs between equipment and can be very complicated.
The is either lost (in which case the request fails or is reiterated), or makes it to its destination, the DNS server.
If that DNS server has the address for that domain, it will return it. Otherwise, it will forward the query along to DNS server it is configured to defer to. This happens recursively until the request is fulfilled or it reaches an authoritative name server and can go no further. (If the authoritative name server doesn't recognize the domain, the response indicates failure and the browser generally gives an error like "Can't find the server at www.lkliejafadh.com".) The response makes its way back to the client machine much like the request traveled to the DNS server.
Assuming the DNS request is successful, the client machine now has an IP address that uniquely identifies a machine on the Internet. The web browser then assembles an HTTP request, which consists of a header and optional content. The header includes things like the specific path being requested from the web server, the HTTP version, any relevant browser cookies, etc. In the case in question (hitting Enter in the address bar), the content will be empty. In other cases, it may include form data like a username and password (or the content of an image file being uploaded, etc.)
This HTTP request is sent off to the web server host as some number of packets, each of which is routed in the same was as the earlier DNS query. (The packets have sequence numbers that allow them to be reassembled in order even if they take different paths.) Once the request arrives at the webserver, it generates a response (this may be a static page, served as-is, or a more dynamic response, generated in any number of ways.) The web server software sends the generated page back to the client.
Assuming the response HTML and not an image or data file, then the browser parses the HTML to render the page. Part of this parsing and rendering process may be the discovery that the web page includes images or other embedded content that is not part of the HTML document. The browser will then send off further requests (either to the original web server or different ones, as appropriate) to fetch the embedded content, which will then be rendered into the document as well.

See also:

http://en.wikipedia.org/wiki/Domain_Name_System
http://en.wikipedia.org/wiki/Routing
http://en.wikipedia.org/wiki/Web_server
http://en.wikipedia.org/wiki/HTML


* What are the differences between Long-Polling, Websockets and Server-Sent Events?

Long-polling opens an HTTP request and remains open until an update is received. Upon receiving an update, a new request is immediately opened awaiting the next update. Server-sent events(SSE) rely on a long-lived HTTP connection, where updates are continuously sent to the client.

WebSockets (via WS) The WebSocket protocol allows for constant, bi-directional communication between the server and client. For this test, Primus is used to abstract multiple implementations of the protocol. This method uses the WS implementation.
WebSockets (via Engine.IO) Same as the WS method, powered by the Engine.IO implementation.
WebSockets (via Faye) Same as the WS method, powered by the Faye implementation.
WebSockets (via SockJS) Same as the WS method, powered by the SockJS implementation.

https://aquil.io/articles/a-comparison-between-websockets-server-sent-events-and-polling#:~:text=Long%2Dpolling%20opens%20an%20HTTP,opened%20awaiting%20the%20next%20update.&text=Server%2Dsent%20events(SSE),continuously%20sent%20to%20the%20client.

* What are request and response headers?

Request headers contain more information about the resource to be fetched, or about the client requesting the resource. Response headers hold additional information about the response, like its location or about the server providing it

https://www.geeksforgeeks.org/http-headers/
The HTTP headers are used to pass additional information between the clients and the server through the request and response header. All the headers are case-insensitive, headers fields are separated by colon, key-value pairs in clear-text string format. The end of the header section denoted by an empty field header. There are a few header fields that can contain the comments. And a few headers can contain quality(q) key-value pairs that separated by an equal sign. 

There are four kinds of headers context-wise: 
 

General Header: This type of headers applied on Request and Response headers both but with out affecting the database body.
Request Header: This type of headers contains information about the fetched request by the client.
Response Header: This type of headers contains the location of the source that has been requested by the client.
Entity Header: This type of headers contains the information about the body of the resources like MIME type, Content-length.
Headers can also be categorized according to how proxies handle them: 
 

Connection
Keep-Alive
Proxy-Authenticate
Proxy-Authorization
TE
Trailer
Transfer-Encoding
Authentication 


* Explain the following request and response headers:

  * Diff. between Expires, Date, Age and If-Modified-...

The Expires header contains the date/time after which the response is considered stale. Invalid dates, like the value 0, represent a date in the past and mean that the resource is already expired. If there is a Cache-Control header with the max-age or s-maxage directive in the response, the Expires header is ignored.

The Date general HTTP header contains the date and time at which the message was originated.

The Age header contains the time in seconds the object has been in a proxy cache. ... If it is Age: 0 , it was probably just fetched from the origin server; otherwise It is usually calculated as a difference between the proxy's current date and the Date general header included in the HTTP response.

The If-Modified-Since HTTP header indicates the time for which a browser first downloaded a resource from the server. This helps to determine whether the resource has changed or not, since the last time it was accessed.


  * Do Not Track


Do Not Track (DNT) was a proposed HTTP header field, designed to allow internet users to opt-out of tracking by websites—which includes the collection of data regarding a user's activity across multiple distinct contexts, and the retention, use, or sharing of data derived from that activity outside the context in which


  * Cache-Control


Cache-control is an HTTP header used to specify browser caching policies in both client requests and server responses. Policies include how a resource is cached, where it's cached and its maximum age before expiring (i.e., time to live).


  * Transfer-Encoding

  Transfer-Encoding is a hop-by-hop header, that is applied to a message between two nodes, not to a resource itself. Each segment of a multi-node connection can use different Transfer-Encoding values. If you want to compress data over the whole connection, use the end-to-end Content-Encoding header instead.

  What is HTTP Encoding?
Content encoding is mainly used to compress the message data without losing information about the origin media type. ... Note that the original media/content type is specified in the Content-Type header, and that the Content-Encoding applies to the representation, or "coded form", of the data.

  * ETag

  What is HTTP ETag header?
The ETag HTTP response header is an identifier for a specific version of a resource. It lets caches be more efficient and save bandwidth, as a web server does not need to resend a full response if the content has not changed. ... They might also be set to persist indefinitely by a tracking server.

What is ETag in a web service?
An ETag (entity tag) is an HTTP response header returned by an HTTP/1.1 compliant web server used to determine change in content at a given URL. We can use ETags for two things – caching and conditional requests. The ETag value can be thought of as a hash computed out of the bytes of the Response body.

What is the use of ETag?
An entity tag (ETag) is an HTTP header used for Web cache validation and conditional requests from browsers for resources. Etags use persistent identification elements (PIE) that have been tagged to the user's browser.

What is ETag header vulnerability?
The remote web server is affected by an information disclosure vulnerability due to the ETag header providing sensitive information that could aid an attacker, such as the inode number of requested files.


  * X-Frame-Options

  What is X-Frame-options headers?
The X-Frame-Options header enables you to specify whether or not a browser should be allowed to render a page in a <frame> , <iframe> , or <object> as follows: DENY : Page cannot be displayed in a frame.

	Should I use X-Frame-options?
HTTP security headers provide yet another layer of security by helping to mitigate attacks and security vulnerabilities by telling your browser how to behave. ... It is recommended that you use the X-Frame-Options header on pages which should not be allowed to render a page in a frame.


There are two main ways to prevent clickjacking: Sending the proper Content Security Policy (CSP) frame-ancestors directive response headers that instruct the browser to not allow framing from other domains. ... Employing defensive code in the UI to ensure that the current frame is the most top level window.

* What are HTTP methods? 

HTTP defines a set of request methods to indicate the desired action to be performed for a given resource. Although they can also be nouns, these request methods are sometimes referred to as HTTP verbs.

List all HTTP methods that you know, and explain them.

The primary or most commonly-used HTTP methods are POST, GET, PUT, PATCH, and DELETE. These methods correspond to create, read, update, and delete (or CRUD) operations, respectively.


* What is domain pre-fetching and how does it help with performance?

A DNS Prefetch is a resource hint to make a DNS lookup for a domain the browser has not yet determined needs to be made. This can improve performance because when the browser does need to make a request for a resource, the DNS lookup for that domain has already occurred.

* What is a CDN and what is the benefit of using one?

A CDN can ensure that a network has a high data threshold. A large number of users can thus access the network at the same time without delays. By enabling a high traffic flow, CDN allows people from all over the world to access your website simultaneously.

https://www.colocationamerica.com/blog/cdn-advantages-and-disadvantages#:~:text=A%20CDN%20can%20ensure%20that,to%20access%20your%20website%20simultaneously.
