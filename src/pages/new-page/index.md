---
title: Untitled
date: "2020-13-11"
---

A temp markdown file.

I joined NYT this past summer, so at the time of writing I'm just shy
of having been at the company for 5 months. The company writes a lot of JS on both
the client and server. As JS is dynamically-typed (assuming non-use of TypeScript/Flow), it's
not uncommon for me to encounter type errors in prod. 9 times out of 10 the faulty statement was perfectly fine when initially authored, and its fragility only surfaced when an unsuspecting developer made changes elsewhere that had downstream effects on the application. In the case of type errors, this occurs when the developer makes incorrect assumptions about the program types.

There are a number of ways this can happen, but one of the most common ways I've seen recently is through misuse of functions with
inconsistent type signatures. 

```js
const getActiveSubscription = (subscriptions = []) => subscriptions.find(sub => sub.active)

const getSubscriberCancelDate = subscriptions => {
  const activeSubscription = getActiveSubscription(subscriptions)
  
  return (
    activeSubscription && 
    activeSubscription.type === 'foo' && 
    activeSubscription.cancelDate
  )
}
```