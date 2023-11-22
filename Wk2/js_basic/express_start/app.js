const express = require("express");     // express 가져오기
const app = express();                  // app이라는 친구 만들기 - 서버 역할

app.set("port", 3000);      // 포트를 3000번으로 지정하라고 세팅.
app.get("/", (req, res) =>  {   // 인자와 콜백함수를 줌. get이란? - http 메소드 중 하나. ex) GET(조회), POST(생성), PUT(통째로 수정), PATCH(일부분 수정), DELETE
    res.send("Hello World");    // http에서 오고 가는 req, res를 의미하는 것.
});

app.listen(app.get("port"), () => { // 얘가 있어야 서버가 열림.
    console.log(`${app.get("port")}번 포트에서 대기 중`);
});

