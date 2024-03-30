# Mini Context

- Login functionality and other complex tasks made easy by using Context API.
- Need for Context API or Redux.
- Context API setup
- How one component can update data and other component can use that updated data.

#### Problem

- In multiple level nested components, it is very difficult to transfer data between Root-component(OuterMost component) and the Smallest-child-component(InnerMost component) by using Props.
- Hence, we use Context API or Redux.
- They help in managing data and states and make them accessible for all other components.

#### Context API

- A context is a store that holds all the data that needs to be accessed by the components of an App.
- This eliminates the need for passing the data through Prop between multiple components or components in hierarchy.
- Any component can read or write data at any time, directly from the context(store).

#### Setup

_Step-1_ : Create UserContext.js to store data

```javascript
const UserContext = React.createContext();

export default UserContext;
```

_Step-2_ : Create UserContextProvider.jsx to access and change the data in Context(store)

```javascript
import { useState } from "react";
import UserContext from "./UserContext";

const UserContextProvider = ({ children }) => {
	const [user, setUser] = useState(null);
	return (
		// giving access of user and setUser(change user data) to children.
		<UserContext.Provider value={{ user, setUser }}>
			{children}
		</UserContext.Provider>
	);
};

export default UserContextProvider;
```

_Step-3_ : Make components aware about the UserContext(store)

- Wrap all components (ie. in App.jsx) inside UserContextProvider to make them aware about the data in UserContext(store).

```javascript
import Login from "./components/Login";
import Profile from "./components/Profile";

function App() {
	return (
		<UserContextProvider>
			<h1>React video for Context API</h1>
			<Login />
			<Profile />
		</UserContextProvider>
	);
}

export default App;
```

#### Retrieve and Update Context Data by using "useContext" Hook

- By using "useContext" hook we can read and update values({user, setUser}) stored inside a Context(store).
- In a component, we want to update value, so firstly we extract setUser from UserContext

```javascript
// We can have multiple context's each for different functionality.
// Hence, we need to specify from which context(UserContext) we want to extract {setUser}.
const { setUser } = useContext(UserContext);
```

- Now we can use "setUser" in that component.
- eg. In the same component, we are setting new {username and password} in "setUser" who's value gets updated in UserContext for other components to access.

```javascript
const handleSubmit = (e) => {
	e.preventDefault();
	setUser({ username, password });
};
```

- And then we are reading those {username, password} in a different component
- eg. In Profile.jsx component we are reading updated user field and showing username from it.

```javascript
function Profile() {
	// Extracting "user" from UserContext(store)
	const { user } = useContext(UserContext);

	if (!user) return <h1>Not logged in</h1>;
	return (
		<div>
			<!-- Showing the username from "user" -->
			<h1>Profile : {user.username}</h1>
		</div>
	);
}
```
