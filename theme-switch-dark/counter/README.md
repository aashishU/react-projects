# Learn about basics of useState hook.

### React bundles up the data that is changed (like in setCounter), multiple setCounter will not effect the result because all the setCounter updating the value of counter together and not One by One.

eg. const addValue = () => {
    // react bundles up values and hence it doesn't instantly updated.
    // hence the value will increase only by 1.
        setCounter(counter + 1);
        setCounter(counter + 1);
};

### To achieve instant value update for individual setCounter, we need to use the callback option of setCounter function.

#### setCounter((prevVaule) => prevValue - 1);

eg. function removeValue() {
    // to update values instantly we use callback function of setCounter
    // now the values decrease by 2.
        setCounter((prevCount) => prevCount - 1);
        setCounter((prevCount) => prevCount - 1);
}
