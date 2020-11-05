# Accessibility

---

### Vestibular disorders

- The vestibular system is the inner ear + part of the brain that deals with **balance**.
- If you feel dizzy, this is your vestibular system feeding you _bad information_.
- Some people have **vestibular disorders**

---

- The most common vestibular disorder: vertigo
- For some people, motion makes them ill: migraines, nausea, malaise.
- We don't want to make people sick!

---

### prefers-reduced-motion

A media query that users set to request less motion / animations

```css
@media (prefers-reduced-motion: no-preference) {
  .my-class {
    animation: bounceAround 300ms infinite;
  }
}
```

---

#### Reduce motion settings

import settingsMac from "./assets/settings_mac.png";
import settingsWin from "./assets/settings_windows.png";

<div style={{ display: "flex", justifyContent: "space-between" }}>
  <img src={settingsWin} style={{ width: "45%" }} />
  <img src={settingsMac} style={{ width: "45%" }} />
</div>

<!-- https://osxdaily.com/2018/12/17/how-reduce-motion-mac-disable-animations/ -->

---

### Exercises

Use the `prefers-reduced-motion` media query to gate these animations

---

```jsx live=true split=[70,30]
const Demo = ({ children = "Hello" }) => {
  return (
    <Button>
      <Surface>{children}</Surface>
      <Shadow />
    </Button>
  );
};

const Button = styled.button`
  position: relative;
  width: 300px;
  height: 80px;
  background: transparent;
  border: none;
`;

const ButtonLayer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  border-radius: 4px;
`;

const Surface = styled(ButtonLayer)`
  z-index: 2;
  background: hotpink;
  color: white;
  text-shadow: 1px 1px 2px mediumvioletred;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 32px;
  transition: transform 400ms cubic-bezier(0, 0.68, 0.67, 1.09);

  &:hover {
    transform: translate(-10px, -10px);
  }
`;

const Shadow = styled(ButtonLayer)`
  position: absolute;
  z-index: 1;
  width: 100%;
  height: 100%;
  border-radius: 4px;
  background: #ccc;
`;

render(<Demo />);
```

---

```jsx live=true split=[80,20]
const Demo = ({ children = "Hello" }) => {
  return <Ball />;
};

const bounce = keyframes`
  from {
    transform: translateY(0px);
  }
  to {
    transform: translateY(-300px);
  }
`;

const Ball = styled.button`
  position: relative;
  width: 90px;
  height: 90px;
  background: red;
  border-radius: 50%;
  border: none;
  animation: ${bounce} 600ms alternate ease-out infinite;
`;

render(<Demo />);
```

---

```jsx live=true split=[80,20]
const Demo = ({ children = "Hello" }) => {
  const [enabled, setEnabled] = React.useState(false);
  return (
    <Wrapper onClick={() => setEnabled(!enabled)}>
      <Ball
        style={{
          transform: `translateX(${enabled ? "100%" : "0%"})`,
          background: enabled ? "blue" : "gray",
        }}
      />
    </Wrapper>
  );
};

const Wrapper = styled.button`
  position: relative;
  width: 88px;
  height: 48px;
  padding: 2px;
  background: transparent;
  border: 2px solid #ccc;
  border-radius: 30px;
  outline: none;

  &:focus {
    border-color: blue;
  }
`;

const Ball = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 20px;
  transition: transform 250ms, background 400ms;
`;
render(<Demo />);
```

---

## From within JS

What if our animation is done with React Spring?

There's no CSS transition involved!

---

This is a way to get the accessibility setting in JavaScript

```js
const mediaQuery = window.matchMedia("(prefers-reduced-motion: no-preference)");

console.log(mediaQuery.matches);
```

---

# Immediate

React Spring exposes a prop, `immediate`, which can be used to disable animations:

```js
const style = React.useSpring({
  // this spring oscillates between colors.
  color: isGreen ? "green" : "yellow",

  // Set this to `true` to disable the animation:
  immediate: true,
});
```

---

### Exercises

Disable animation based on media query.

---

https://codesandbox.io/s/compassionate-bush-3tv15

```js live=true split=[70,30]
const Card = ({ isVisible, children }) => {
  const style = useSpring({
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? "translateY(0px)" : "translateY(10px)",
  });

  return <Wrapper style={style}>{children}</Wrapper>;
};

const Wrapper = styled(animated.div)`
  box-shadow: 3px 3px 6px black;
  border-radius: 10px;
  padding: 50px;
`;

const App = () => {
  const [showCard, setShowCard] = React.useState(true);

  return (
    <div style={{ textAlign: "center" }}>
      <button onClick={() => setShowCard(!showCard)}>Show Card</button>
      <br />
      <br />
      <Card isVisible={showCard}>Hello World</Card>
    </div>
  );
};

render(<App />);
```

---

https://codesandbox.io/s/late-wildflower-7njue

```jsx live=true split=[65,35]
const Demo = ({ children = "Hello" }) => {
  const [mousePos, setMousePos] = React.useState({ x: 0, y: 0 });

  React.useEffect(() => {
    const handleMove = (ev) => {
      setMousePos({
        x: ev.clientX,
        y: ev.clientY,
      });
    };

    window.addEventListener("mousemove", handleMove);

    return () => {
      window.removeEventListener("mousemove", handleMove);
    };
  }, []);

  const { x, y } = mousePos;

  const style = useSpring({
    transform: `translate(${x}px, ${y}px)`,
    config: {
      tension: 300,
      friction: 13,
    },
  });

  return <Ball style={style} />;
};

const Ball = styled(animated.button)`
  position: fixed;
  top: -45px;
  left: -45px;
  width: 90px;
  height: 90px;
  background: red;
  border-radius: 50%;
  border: none;
  pointer-events: none;
`;

render(<Demo />);
```
