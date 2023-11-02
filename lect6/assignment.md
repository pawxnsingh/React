# What is useState() and why we used it
`useState` is a function provided by React, a popular JavaScript library for building user interfaces. It is used to manage and update the state of a component in a React application. State in React represents any data that should be saved and can change over time, typically data that needs to be displayed or manipulated in the user interface.

Here's why `useState` is important and when you should use it:

1. **Managing Component State:** React is designed around the concept of a unidirectional data flow, where the state of a component is stored and managed in one central place, making it easier to maintain and update the user interface. `useState` allows you to declare state variables within a functional component.

2. **Functional Components:** Before React introduced hooks, state management was primarily handled by class components. With the introduction of hooks, particularly `useState`, you can manage component state within functional components, which is more concise and easier to understand for many developers.

3. **Reactive Updates:** When you use `useState`, React takes care of keeping your component up to date. When the state changes, React will automatically re-render your component with the updated state values.

4. **Functional Updates:** You can use a function as the argument for `useState` to update state based on the previous state. This helps in scenarios where you need to update state based on the previous state value to avoid race conditions or stale state.

Here's a basic example of how to use `useState`:

```jsx
import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
    </div>
  );
}
```

In this example, `useState` is used to initialize a state variable `count` with an initial value of `0`. The `setCount` function is used to update the state, and it triggers a re-render when the state changes. In this way, you can create interactive user interfaces that respond to user actions.

You should use `useState` whenever you need to manage and update the state of a component in a React application. Common use cases include handling form input values, controlling the visibility of elements, tracking user interactions, and more. It's a fundamental part of building dynamic and interactive React applications.