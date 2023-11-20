import { Routes, Route } from "react-router-dom";
import Home from "./routes/home/home";
import Authentication from "./routes/authentication/authentication";
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
        <Route path="/auth" element={<Authentication />} />
      </Route>
    </Routes>
  );
};

export default App;
