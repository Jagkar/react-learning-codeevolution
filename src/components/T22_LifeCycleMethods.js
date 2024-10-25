// when We create a component. The component goes through several stages in its lifecycles. These stages are: Mounting, Updating, and Unmounting.
// The methods that we can use to access these stages are called lifecycle methods.
// React provides us built in methods that we can overwrite at particular stages in the lifecycle of a component.
// These methods dont exist on a functional component, only on class components.
// with the introduction of hooks, we can use lifecycle methods in functional components as well.

// The lifecycle of a component is divided into four parts:
// 1. Mounting: When an instance of a component is being created and inserted into the DOM.
// 2. Updating: When a component is being re-rendered as a result of changes to either its props or state.
// 3. Unmounting: When a component is being removed from the DOM.
// 4. Error Handling: When there is an error during rendering, in a lifecycle method, or in the constructor of any child component.

// During the mounting phase, we have four methods:
// constructor, static getDerivedStateFromProps, render, componentDidMount

// During the updating phase, we have five methods:
// static getDerivedStateFromProps, shouldComponentUpdate, render, getSnapshotBeforeUpdate, componentDidUpdate

// During the unmounting phase, we have one method:
// componentWillUnmount

// During the error handling phase, we have two methods:
// static getDerivedStateFromError, componentDidCatch

// The most commonly used lifecycle methods are:
// componentDidMount, componentDidUpdate, componentWillUnmount