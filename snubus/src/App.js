import { BrowserRouter, Route, Routes } from "react-router-dom";
import View5511Bus from "./routes/View5511Bus";
import View5513Bus from "./routes/View5513Bus";
import ViewGwanak02Bus from "./routes/ViewGwanak02Bus";
import Main from "./routes/Main";
import "bootstrap/dist/css/bootstrap.css";
import React, { useState } from "react";
import { ConfigProvider } from "antd";

// 카카오맵이 화면에 표시됐는지 판별하는 state를 Context API로 하위 컴포넌트에 전달
export const isMapPrintContext = React.createContext();

function App() {
  // 카카오맵이 화면에 표시됐는지 판별하는 state
  const [isMapPrint, setIsMapPrint] = useState(false);
  return (
    <div style={{ backgroundColor: "black" }}>
      {/* antd 커스터마이징 */}
      <ConfigProvider
        theme={{
          components: {
            Carousel: {
              arrowSize: 30,
              dotActiveWidth: 40,
              dotWidth: 50,
              dotHeight: 7,
            },
            Timeline: {
              tailColor: "white",
              itemPaddingBottom: 50,
            },
          },
        }}
      >
        <isMapPrintContext.Provider value={[isMapPrint, setIsMapPrint]}>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Main />}></Route>
              <Route path="/5511" element={<View5511Bus />}></Route>
              <Route path="/5513" element={<View5513Bus />}></Route>
              <Route path="/gwanak02" element={<ViewGwanak02Bus />}></Route>
            </Routes>
          </BrowserRouter>
        </isMapPrintContext.Provider>
      </ConfigProvider>
    </div>
  );
}

export default App;
