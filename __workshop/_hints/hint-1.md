Here's how to accomplish the springy effect:

```js
const props = useSpring({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  position: "absolute",
  transform: "scale(1)",
  from: {
    transform: "scale(0)",
  },
  config: {
    tension: 200,
    friction: 12,
  },
});
```

Your values might be different for `tension` and `friction`, and that's OK! Pick whichever values you like best =)
