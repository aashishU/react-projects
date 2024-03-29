# React Router

#### Package used - React-Router-Dom

- Read about it on (https://reactrouter.com)
- Outlet is a special component given by react-router-dom that represents the content of every page.
- It is used to define a common layout of our application that remains the same.
- We created a Layout.jsx file to define a layout that will remain same throughout the app.

```
  eg. Layout.jsx file

  <Header />
  <Outlet /> // this represents all the content that we will put on different pages.
  <Footer />
```

#### useLoaderData Hook from react-router-dom

- It is very important hook and used to pre-process data.
- Here we are fetching data from api (pre-processing) in advance to improve the response time of the page.

#### NavLink from react-router-dom

- In className, NavLink provide special arguments {isActive, isPending}
- By using "isActive" we can eg. highlight the specific navigation link when we are on that page.
- Learn about "NavLink" and how they are better than normal "Link".

#### How to create Dynamic Routes

- First learn about Route-nesting.
- `<Route path="user" element={<User />}>`  
   `<Route path=":userId" element={<User />}/>`  
  `</Route>`
- To create a dynamic route use ":" and after that a variable. eg. :userId.
- The value of "userId" will be in Params

#### useParams Hook from react-router-dom

- First create a dynamic route. eg. :userId.
- Now the value of this dynamic route can be obtained by using useParams hook.
- `const { userId } = useParams()`

#### Packages used to create Routes

- Route
- RouterProvider
- createBrowserRouter
- createRoutesFromElements
