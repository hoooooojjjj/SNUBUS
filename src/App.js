import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./routes/Main/Main";
import React, { useEffect, useState } from "react";
import { ConfigProvider } from "antd";
import View from "./routes/View/View";
import Contact from "./routes/Contact/Contact";
import NotFound from "./routes/NotFound/NotFound";
import Intro from "./routes/Intro/Intro";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

// Create a client
const queryClient = new QueryClient();

// 카카오맵이 화면에 표시됐는지 판별하는 state를 Context API로 하위 컴포넌트에 전달
export const isMapPrintContext = React.createContext();

function App() {
  // 카카오맵이 화면에 표시됐는지 판별하는 state
  const [isMapPrint, setIsMapPrint] = useState(false);

  return (
    <div style={{ backgroundColor: "#1a1919" }}>
      <Analytics />
      <SpeedInsights />
      <QueryClientProvider client={queryClient}>
        {/* antd 커스터마이징 */}
        <ConfigProvider
          theme={{
            components: {
              Carousel: {
                arrowSize: 40,
                dotActiveWidth: 40,
                dotWidth: 50,
                dotHeight: 7,
              },
              Timeline: {
                tailColor: "white",
                tailWidth: 3,
                itemPaddingBottom: 50,
                dotBg: "#1a1919",
              },
            },
          }}
        >
          <isMapPrintContext.Provider value={[isMapPrint, setIsMapPrint]}>
            <BrowserRouter>
              <Routes>
                <Route path="*" element={<NotFound />}></Route>
                <Route path="/" element={<Intro />}></Route>
                <Route path="/view/:id" element={<View />}></Route>
                <Route path="/contact" element={<Contact />}></Route>
                <Route path="/main" element={<Main />}></Route>
              </Routes>
            </BrowserRouter>
          </isMapPrintContext.Provider>
        </ConfigProvider>
      </QueryClientProvider>
    </div>
  );
}

export default App;
