# Enter/Exit animations

---

### What if we want something to _fade in on mount_?

---

import FadeDemo from "./FadeDemo";

<FadeDemo />

---

How would you solve this?

---

### Keyframe animations

Part of CSS, not React:

```css
@keyframes fadeIn {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}

.wrapper {
  animation: fadeIn 500ms;
}
```

---

### In styled-components

Super similar!

```js
import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;

const Wrapper = styled.div`
  animation: ${fadeIn} 500ms;
`;
```

---

# Exercise

Add a fade-in animation

---

https://codesandbox.io/s/vigorous-snyder-x3px9

```js live=true split=[70,30]
const App = ({ children = "hello" }) => {
  return <Wrapper>{children}</Wrapper>;
};

const Wrapper = styled.div`
  padding: 40px;
  box-shadow: 0px 5px 30px rgba(0, 0, 0, 0.2);
  border-radius: 16px;
`;

render(<Demos.AnimationEx3 />);
// render(<App />)
```

---

https://codesandbox.io/s/keen-tharp-nkleq

```js live=true split=[70,30]
const App = () => {
  return <Wrapper>🛸</Wrapper>;
};

const Wrapper = styled.div`
  font-size: 72px;
`;

render(<Demos.AnimationEx4 />);
// render(<App />)
```

---

### What about exit animations?

What if you need to animate something as it unmounts?

---

### Short answer: Don't.

It's usually not worth the trouble.

---

### Longer answer: Use a tool

[`react-transition-group`](https://reactcommunity.org/react-transition-group/) exists to solve this problem.

But seriously, maybe just don't.
