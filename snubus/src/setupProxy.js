const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/bus_api",
    createProxyMiddleware({
      target: "http://ws.bus.go.kr/api/rest/buspos/getBusPosByRouteSt",
      pathRewrite: {
        // bus_api로 시작되는 url을 자동 인식 -> 프록시 처리, /bus_api는 ""로 대체됨
        "^/bus_api": "",
      },
      changeOrigin: true,
    })
  );
};
