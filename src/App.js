import { Routes, Route } from "react-router-dom";
import Home from "./routes/home/home";
import SignIn from "./routes/signIn/sign-in";
import Navigation from "./routes/navigation/navigation";

const Shop = () => {
  return (
    <div>
      <div>
        <h1>Thid is shop page</h1>
      </div>
    </div>
  );
};
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/Sign-in" element={<SignIn />} />
      </Route>
    </Routes>
  );
};

export default App;
