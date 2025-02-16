const path = require("path");

module.exports = {
    mode: "development",
    entry: {
        main: "./src/index.js",
    },
    output: {
        filename: "[name].js",
        path: path.resolve(__dirname, "dist"),
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: [path.resolve("./loader.js")],
            },
            {
                test: /\.css$/,
                // use 에 배열을 설정하면 "뒤에서 부터 앞으로" 로더가 동작한다
                use: [
                    /**
                     * [style-loader]
                     * CSS 를 DOM 에 추가하는 로더
                     * CSS 파일을 읽어서 style 태그로 만들어 head 태그 안에 삽입한다
                     */
                    "style-loader",
                    /**
                     * [css-loader]
                     * 진입점으로 부터 JS 모듈 탐색 중 CSS 파일이 import 된 것을 찾으면,
                     * CSS 를 모듈로 변환하는 작업을 진행한다
                     */
                    "css-loader",
                ],
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                type: "asset",
                parser: {
                    dataUrlCondition: {
                        maxSize: 8 * 1024,
                    },
                },
            },
        ],
    },
};
