import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home"
import { withAuthenticator } from '@aws-amplify/ui-react';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default withAuthenticator(App);
