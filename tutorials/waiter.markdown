# Waiter

Using waiter.

## Show

Show a waiter with default options.
If `id` is `null` then the waiter is full screen.

```js
// default
waiter.show({
  id: null, 
  html: '<div class="container--box"><div class="boxxy"><div class="spinner spinner--1"></div></div></div>', 
  color: '#333e48', 
  hideOnRender: false, 
  hideOnError: false, 
  hideOnSilentError: false, 
  image: null,
  fadeOut: false,
  ns: null,
  onShown: setWaiterShownInput,
  onHidden: setWaiterHiddenInput
});
```

## Hide

Hide the waiter, `onHidden` is a callback function to run when
the waiter is hidden.

```js
waiter.hide(id, onHidden)
```

## Update

Update the `html` content of the waiter.

```js
waiter.update(id, html)
```
