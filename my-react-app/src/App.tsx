import { Route, Routes } from "react-router";
import Home from "../src/pages/Homepage/Homepage"
import Login from "./pages/SignUp/page";
import Signin from "./components/SignInComponent/signin";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login/>}/>
      <Route path="/home" element={<Home/>}/>
      <Route path="/signin" element={<Signin/>}/>
    </Routes>
  );
}

export default App;