# useReducer Template

This project is used by myself a learning tool and reference for the useReducer hook in React

Based on the video by Web Dev Simplified

(Learn useReducer In 20 Minutes)[https://www.youtube.com/watch?v=kK_Wqx3RnHk]

## Notes:

---

Q: What is the purpose of the useReducer hook?

A: The useReducer Hook is used to store and update states, just like the useState Hook but makes it easier for more complex states. It’s a way to control how the state will change. State can only change based on the predefined actions set up in the reducer function.

---

Q: What does useReducer return?

A: An array with the state and the dispatch function

---

Q:What 2 arguments does useReducer take?

A: The reducer function and the initialState

---

Q: What will the state returned by useReducer be set to

A: The value of the state will be the initial state passed as the second argument to useReducer

---

Q: What is the dispatch function?

A: The dispatch function is what will be used to call the reducer function that modifies the state.

---

Q: What is the reducer function?

A: The reducer function is what is used by the dispatch function to modify the state

---

Q: What 2 arguments does the reducer function take?

A: state and action

---

Q: What is the state that the reducer function receives?

A: The first argument is the current state (where our state is currently at)

---

Q: What is the action argument that the reducer function receives

A: The second argument is the action that will be passed into the dispatch function. Whatever we call the dispatch with will be sent to the action parameter and the reducer is going to return the updated state based on the action received from the dispatch

---

Q: What is the benefit of setting up the ACTIONS object with the actions as properties?

A: The benefit of this is that we will have autocomplete and we don't have to worry about misspelling a string. If we misspell one of the object properties we'll get a warning
