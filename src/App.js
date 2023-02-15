import { BrowserRouter, Routes, Route } from "react-router-dom";
import Test from "./pages/Test"
import Home from "./pages/Home"
import { ThemeProvider } from '@aws-amplify/ui-react';

function App() {

  return (
    <ThemeProvider><BrowserRouter>
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
