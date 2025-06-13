// import React from "react";

// const ThemeContext = React.createContext();

// export default ThemeContext


import { createContext, useState } from 'react';

export const ThemeContext = createContext();

export function ThemeProvider({ children }) {
    const [theme, setTheme] = useState('light');

    console.log("Initial Theme State:", theme); // Should print "light" when app loads

    const toggleTheme = () => {
        setTheme(prevTheme => (prevTheme === "light" ? "dark" : "light"));
        console.log("Theme toggled, new state:", theme); // Should print new theme state
    };

    return (
        <ThemeContext.Provider value={[theme, toggleTheme]}>
            {children}
        </ThemeContext.Provider>
    );
}
