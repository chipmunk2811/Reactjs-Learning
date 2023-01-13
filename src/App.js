import "./App.css";
// Buổi 1
import Buoi1 from './Buoi1/Buoi1';

// Buổi 2
import Buoi2 from "./Buoi2/Buoi2";


// Buổi 3
import Buoi3 from "./Buoi3/Buoi3";

// Buôi 4
import Buoi4 from "./Buoi4/Cart";

// Buổi 5-6
import Buoi5 from "./Buoi5_6/user-management-html/User_Managenment.js"

// Buổi 6: Code hết phần props và cài đặt Redux

// Buổi 6-7
import Buoi7 from "./Buoi6_7/user-management-redux/User_Managenment_Redux";

// Buổi 8
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Buoi8 from "./Buoi8/Buoi8";
import Home from "./Home/Home";
import Buoi9 from "./Buoi9/FormValidation/index.jsx";
import LifeCircle from "./Buoi9/Lifecircle/LifeCircle";




function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<Home />}>
          <Route path="Buoi1" element={<Buoi1 />}></Route>
          <Route path="Buoi2" element={<Buoi2 />}></Route>
          <Route path="Buoi3" element={<Buoi3 />}></Route>
          <Route path="Buoi4" element={<Buoi4 />}></Route>
          <Route path="Buoi5" element={<Buoi5 />}></Route>
          <Route path="Buoi7" element={<Buoi7 />}></Route>
          <Route path="Buoi8" element={<Buoi8 />}></Route>
          <Route path="Buoi9-1" element={<Buoi9 />}></Route>
          <Route path="Buoi9-2" element={<LifeCircle />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
