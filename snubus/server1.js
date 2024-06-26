const express = require("express");
const bodyParser = require("body-parser");
const fs = require("fs");
const cors = require("cors"); // cors 모듈 추가

const app = express();
const port = 5001;

app.use(bodyParser.json());
app.use(cors()); // 모든 Origin에 대해 CORS 허용 설정

app.post("/api/save-json", (req, res) => {
  const jsonData = req.body.data;

  // 예시: 파일로 저장
  fs.writeFile("savedState.json", jsonData, (err) => {
    if (err) {
      console.error("파일 저장 중 오류가 발생했습니다.", err);
      res.status(500).send("파일 저장 중 오류가 발생했습니다.");
      return;
    }
    console.log("JSON 데이터가 파일에 성공적으로 저장되었습니다.");
    res.send("JSON 데이터가 파일에 성공적으로 저장되었습니다.");
  });
});

app.listen(port, () => {
  console.log(`서버가 http://localhost:${port} 에서 실행 중입니다.`);
});
