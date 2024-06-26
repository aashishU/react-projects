# Projects and their Overview

## Counter

- Performs basic working of useState hook.
- Whenever the state changes, the component and it's children re-renders.

## tailwind-props

(1) How to integrate TailwindCSS to React project.

(2) Working with Props => In component(Card.jsx)

- pass Props to the function as parameter.
- destructure them in individual properties.
- In parent component (App.jsx), pass the props <Card name={name}/>

## Rainbow buttons are given to change the background color accordingly.

- Using react hook "useState" to change background color.
  // using useState hook
- const [color, setColor] = useState('default value')
- here "color" is a variable and "setColor" is the function used to change the value of variable "color".
- Because we need to implement the color-change instantaneously, hence we will the "setColor" function as a callback.
- This will update the DOM (ie. bg-color) as soon as the button is clicked.

## Password Generator

- In this project we are generating password of length from 5 to 35.
- We have options to include numbers and symbols as well.
- We also have a copy button to copy generated password to the clipboard.
- Every time something changes, ie. select or deselect number | select or deselect symbols, the re-render of component triggers automatically.

## Currency Converter

- User can convert an amount in one currency into another using this app.
- Currency exchange rates are always updated and this data is fetched from an api on the go.
- We have created a custom hook "useCurrencyInfo" to fetch latest exchange rates data from the api.
- InputBox is a re-usable component that we have used twice in our app ->

  | From currency |
  | ------------- |
  | To currency   |

- States are introduced and maintained at the top most component (ie. App.jsx)
- Also have swap functionality.
- To get all the types of currencies available, we used "const options = Object.keys(currencyInfo)".
- Here the different currency types sent by the api are keys and the exchange rate are there values (ie. key-value pairs).
- Also "convert" button will run the convert() function that converts the currency into desired/selected currency.

## React Router

- Create Layout file.
- Create routes and dynamic routes.
- Create layouts.
- Use of NavLink.
- Extract id from params by using "useParams" hook.
- Pre-loading data (fetching data from an api in advance).

## Mini Context

- Login functionality and other complex tasks made easy by using Context API.
- Need for Context API or Redux.
- Context API setup
- How one component can update data and other component can use that updated data.

_Context API_

- A context is a store that holds all the data that needs to be accessed by the components of an App.
- This eliminates the need for passing the data through Prop between multiple components or components in hierarchy.
- Any component can read or write data at any time, directly from the context(store).

## Theme Switch to Dark Mode

- Here we have created a card.
- The theme of the card can be toggled between dark and light mode by using Context API.
- This is a better way to write code for Context than what we did in "mini-context".
- Refer this program when creating and using Context.

**Better way to create and use Context**

- In mini-context project, we learned how to create and use Context.
- But here we learn a better way to create and use Context in an Application.

**How to create and use Context**

_Step 1_ : Create "theme.js" file inside "context" folder.

- Here we have  
  (1) Created a new Context.  
  (2) Made all children components aware about the existence of that context.  
  (3) Created a Custom Hook (eg. useTheme) that specifies what context we are using, beforehand.

**If the concept is not clear... Watch the video again**

- [Tutorial Link](https://www.youtube.com/watch?v=4DqAvWonPAg)
- timeStamp: 6:55:15

## Todo Context Local

- It's a Todo list project, in which user can add, edit, delete or taskComplete a todo.
- We have used Context API to create Context(store).
- We have utilized the Local Storage as well.

---

_Source_ : [Complete react course with 10 projects](https://www.youtube.com/watch?v=4DqAvWonPAg)

- Special Thanks to Hitesh Chaudhary for this great course.

---
