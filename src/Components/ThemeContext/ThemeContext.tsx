import React, { useState } from "react";

type Theme = 'light' | 'dark';
type ThemeContext = { theme: Theme; toggleTheme: () => void };

const savedTheme = localStorage.getItem('theme');
  
export const ThemeContext = React.createContext<ThemeContext>(
    {} as ThemeContext
);

export const ThemeProvider = ({ children }: any) => {

    const [theme, setTheme] = useState<Theme>('light');

    const toggleTheme = () => {

        if (theme === 'light') {
            setTheme('dark');
            localStorage.setItem('theme', 'dark');
            document.body.className = 'dark';
        } else {
            setTheme('light');
            localStorage.setItem('theme', 'light');
            document.body.className = 'light';
        }
    };
  
    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};