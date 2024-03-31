# Password Generator

- In this project we are generating password of length from 5 to 35.
- We have options to include numbers and symbols as well.
- We also have a copy button to copy generated password to the clipboard.
- Every time something changes, ie. select or deselect number | select or deselect symbols, the re-render of component triggers automatically.

#### Hooks Used

- useState
- useCallback
- useEffect
- useRef : (step1) refer the input field we want to highlight(ie. password field)
  (step2) use this reference to highlight the text of that field in a different function.

#### Other important tricks

- Generate password with numbers and symbols as options.
- Highlighting the text field using "passwordRef.current?.select()"
- Copy text to the clipboard using "window.navigator.clipboard.writeText(password)"
