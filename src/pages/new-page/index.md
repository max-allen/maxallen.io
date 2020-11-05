---
title: Untitled
date: "2020-13-11"
---

A temp markdown file.

I joined NYT this past summer, so at the time of writing I'm just shy
of having been at the company for 5 months. The company writes a lot of JS on both
the client and server. As JS is dynamically-typed (assuming non-use of TypeScript/Flow), it's
not uncommon for me to encounter type errors in prod. 9 times out of 10 the faulty statement 
performed exactly as expected when initially authored, and its fragility only surfaced when an unsuspecting developer made changes elsewhere that had downstream effects on the application. In the case of type errors, this occurs when the developer makes incorrect assumptions about the program types.

There are a number of ways this can happen, but one of the most common ways I've seen recently is through use of functions with
inconsistent type signatures. By type signature, I'm referring to the type of the function's return value. This is not an accurate definition in the strictest
sense – type signatures generally describe the types of a function's inputs _in addition_ to the types of its outputs, but because JS is dynamically-typed
we're limited in our ability to control the types of arguments passed to the function. However, with type-safe practices, we're in a much better position to
control the type of a function's return value.

At the time of writing, I believe all functions should have a consistent type signature, and following this practice will go a long way toward reducing type errors
from occurring at runtime. Here's an example (adpated from a codebase I've worked in recently) that illustrates the problem this solves:

```js
const subscriptions = [
  { id: 1, active: false, subscriptionType: 'current', cancelDate: undefined },
  { id: 2, active: true, subscriptionType: 'legacy', cancelDate: '2020-12-15' }
]

const inactiveSubscriptions = [
  { id: 1, active: false, subscriptionType: 'current', cancelDate: undefined },
  { id: 2, active: false, subscriptionType: 'legacy', cancelDate: '2020-12-15' }
]

const activeWrongType = [
  { id: 1, active: true, subscriptionType: 'current', cancelDate: undefined },
  { id: 2, active: false, subscriptionType: 'legacy', cancelDate: '2020-12-15' }
]

const getActiveSubscription = (subscriptions = []) => subscriptions.find(sub => sub.active)

const formatCancelDate = (date = '') => date.replace('-', '.')

const getLegacySubscriptionCancelDate = (user = {}) => {
  const activeSubscription = getActiveSubscription(user.subscriptions)
  
  return (
    activeSubscription && 
    activeSubscription.subscriptionType === 'legacy' && 
    activeSubscription.cancelDate
  )
}
```

Here, `getLegacySubscriptionCancelDate` takes a user object, retrieves the user's active subscription if one exists, and returns
the cancellation date of the subscription.

Notice the expression belonging to the return statement. Because the `&&` operator returns the left-hand expression if it's value is falsy
and the right-hand expression otherwise, `activeSubcription && activeSubcription.type === 'legacy' && activeSubscription.cancelDate`
can evaluate to the types `undefined`, `Boolean`, or `String`. While this inconsistency may appear benign, consider what can happen when we
make incorrect assumptions about the return value of `getLegacySubscriptionCancelDate`:

```js
const subscriptions = [
  { id: 1, active: true, type: 'experimental', cancelDate: undefined },
  { id: 2, active: false, type: 'legacy', cancelDate: '2020-12-15' }
]

const user = { subscriptions }

const cancelDate = getLegacySubscriptionCancelDate(user) // -> returns false

const formatCancelDate = (date = '') => date.replace('-', '.') // This throws a TypeError!

formatCancelDate(cancelDate)
```

In the example above, we define a simple function expression and assign it to `formatCancelDate`. We assume `getLegacySubscriptionCancelDate` either
returns no value (`undefined`) or the cancellation date as a string, but in this case it returns a `Boolean`! The active subscription has the value
`'expermiental'` for `subscriptionType`, so the expression `activeSubscription.subscriptionType === 'legacy'` in `getLegacySubscriptionCancelDate`
evaluates to false and is returned.


