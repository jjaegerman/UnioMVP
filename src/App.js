import { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Test from "./pages/Test"
import Home from "./pages/Home"
import { ThemeProvider } from '@aws-amplify/ui-react';

function App() {
  const theme = {
    //other colors D8CA98 - stronger background, 782C26 - attention
    name: 'my-theme',
    tokens: {
      colors: {
        font: {
          interactive: { value: '#0E67B4' },
          secondary: { value: '#434D4C'},
          active: {value: '#0E67B4' },
          focus: {value: '#0E67B4'}
        },
        background: {
          quaternary: { value: "#F7F3E8"},
          tertiary: {value: "#C2CCBE"},
          secondary: {value: '#f7fbfe'}
        },
        border: {
          secondary: {value: "#F7F3E8"},
        }
      },
    },
  };

  useEffect(() => {
    document.title = "Unio"
  }, []);
  
  return (
    <ThemeProvider theme={theme}><BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="test" element={<Test />} />
        </Route>
      </Routes>
    </BrowserRouter></ThemeProvider>
  );
}

export default App;
