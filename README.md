# Projects and topics we learned from them.

#### Counter => basic working of useState hook.

#### tailwind-props

(1) How to integrate TailwindCSS to React project.

(2) Working with Props => In component(Card.jsx)

- pass Props to the function as parameter.
- destructure them in individual properties.
- In parent component (App.jsx), pass the props <Card name={name}/>

#### Rainbow buttons are given to change the background color accordingly.

- Using react hook "useState" to change background color.
  // using useState hook
- const [color, setColor] = useState('default value')
- here "color" is a variable and "setColor" is the function used to change the value of variable "color".
- Because we need to implement the color-change instantaneously, hence we will the "setColor" function as a callback.
- This will update the DOM (ie. bg-color) as soon as the button is clicked.
