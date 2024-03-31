# Currency Converter

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

### Create Custom Hooks

- Creating a custom hook is very easy.
- It's just a function like "useCurrencyInfo.js".
- Here, we used useEffect hook and in dependency array we mentioned "currency" variable.
- Hence, whenever user changes the currency, the component will re-render and show updated value.
- In our custom hook, we are fetching data from an api.
