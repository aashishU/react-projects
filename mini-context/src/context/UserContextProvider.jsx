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
