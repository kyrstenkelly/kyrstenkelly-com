---
title: How the Undefined URL Found a Hostname
date: 2019-07-30
description: "A strange story about using StackOverflow-sourced hacks."
slug: undefined-url-found-a-hostname
---

We wanted to verify if a url was either one of our allowed redirect domains, or just a relative path. 

We were using this solution, which can be found on StackOverflow within seconds of googling "javascript url get hostname" (as the [accepted answer](https://stackoverflow.com/a/736970/11294434)...from _2012 mind you_).

```js
function getHostname(url: string): string {
  const urlParser = document.createElement('a');
  urlParser.href = url;
  return urlParser.hostname;
}
```

We had this in our code for 3 years. It "worked fine". 

We used that helper method in our `redirect` function and went on our way:

```js
function redirect(url) {
    const hostname = getHostname(url);
    const pattern = new RegExp(
        '(^|\\.)' + config.ALLOWED_REDIRECT_DOMAIN + '$',
        'i'
    );
    // !hostname implies that it's a relative url
    if (!hostname || pattern.test(hostname)) {
        // Do the redirect
    }  
    // Redirect instead to our fallback URL
}
```

You would think that if you accidentally passed `undefined` to this method, that it would not get a hostname, and would therefore continue on to our fallback redirect. 

But no! Using this `<a>` tag hack doesn't work like you would expect. Here's what happens when you give it an undefined href:
```js
const linkElement = document.createElement('a');
linkElement.href = undefined;
console.log(linkElement.hostname);
// "localhost"
```

Wait, what? How is there even a host name? Let's see what it _thinks_ the href is:
```js
console.log(linkElement.href)
// "http://localhost:8080/undefined"
```

🤦🏻‍♀️...For some reason, it interpreted `undefined` as a string, and assumed we were passing in a relative URL. 


Long story short, it's better to use the [`URL`](https://developer.mozilla.org/en-US/docs/Web/API/URL/URL) method instead. The second most popular, [much more modern answer](https://stackoverflow.com/a/24006120/11294434) to that original StackOverflow is the way to go. 

Now our code reads:
```js
function redirect(url) {
    // Wrap in a try because URL will throw an error
    // if you pass it an invalid URL
    try {
        const validURL = new URL(url);
        const hostname = validURL.hostname;
        const hostnameRegex = new RegExp(
            `${config.ALLOWED_REDIRECT_DOMAIN}$`
        );
        if (hostnameRegex.test(hostname)) {
            // Do the redirect
        }
    } catch {
        // Use our fallback redirect
    }
}
```

If you're creating a random document element in the middle of your JavaScript...you're probably doing it wrong. 
