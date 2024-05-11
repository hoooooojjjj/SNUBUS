import { BrowserRouter, Route, Routes } from "react-router-dom";
import View5511Bus from "./routes/View5511Bus";
import View5513Bus from "./routes/View5513Bus";
import Main from "./routes/Main";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />}></Route>
          <Route path="/5511" element={<View5511Bus />}></Route>
          <Route path="/5513" element={<View5513Bus />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
