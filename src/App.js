import React, { useState, useEffect } from "react";
import {ThemeProvider} from "styled-components";
import { GlobalStyles } from "./components/Globalstyle";
import { lightTheme, darkTheme } from "./components/Themes"
import Main from './pages/Main';

const App = () => {
   const [theme, setTheme] = useState('light');
   const themeToggler = () => {
      theme === 'light' ? setTheme('dark') : setTheme('light')
   }


   return (
      <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
         <>
            <GlobalStyles/>
            <section id="main_container">
               <Main />
            </section>
         </>
         <button onClick={themeToggler}>Toggle Theme</button>

      </ThemeProvider>
  );
}

export default App;
