import { createContext, useContext } from 'react';

// Creating a context(store)
export const ThemeContext = createContext({
    themeMode: "light",
    darkTheme: () => { },
    lightTheme: () => { },
});

// Making all children components aware about the existence of the above context.
export const ThemeProvider = ThemeContext.Provider;

// Creating Custom Hook that specifies the context we are using, beforehand.
// Now we don't need to write "const { data } = useContext(Context_name)" whenever we need to use the data from context(store).
// We can directly access the data by using our Custom Hook.
export default function useTheme() {
    return useContext(ThemeContext);
}