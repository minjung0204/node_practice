const express = require("express");
const app = express();

app.listen(8080, () => {
    console.log("8080번 포트에서 서버 가동 중");
})

app.get("/", (요청, 응답) => {
    응답.send("반갑다");
})