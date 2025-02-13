const path = require("path");

module.exports = {
    // 웹팩 실행 모드
    mode: "development",
    // 진입점 경로
    entry: {
        main: "./src/index.js",
    },
    // 번들링한 결과물 지정
    output: {
        filename: "[name].js",
        path: path.resolve(__dirname, "dist"),
    },
};
