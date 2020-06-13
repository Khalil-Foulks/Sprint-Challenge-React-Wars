# Answers

1. What is React JS and what problems does it solve? Support your answer with concepts introduced in class and from your personal research on the web.

React is a JavaScript library built by Facebook that is used to build single page applications. One of the problems that React solves is making code DRY. Different UI portions of React are seperated by components. This makes it easier to reuse a block of code. One example is a container component which can store styles for a particular element.

1. Describe component state.

 The component state starts at a default value and usually changes as a user interacts with the app. 

1. Describe props.

Props is unmutable. Props allows you to pass information from one component to another.

1. What are side effects, and how do you sync effects in a React component to changes of certain state or props?

A side effect is anything that affects something outside the scope of the function being executed. A side effect can cause a component to return a different output for the same state and props. You sync effects using the useEffect hook.