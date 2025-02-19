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
            /**
             * loader 는 module.rules 에 배열형태로 설정한다
             * loader 는 각 파일을 해석하고 변환한다
             * {
             *      test: 로더가 처리해야할 파일들의 정규표현식
             *      use: 해당 파일들에 적용할 로더 명시
             *      (로더는 배열로 설정 가능. 배열을 설정하면 "뒤에서 부터 앞으로" 로더가 동작한다)
             * }
             */
            {
                test: /\.js$/,
                use: [path.resolve("./loader.js")],
            },
            {
                test: /\.css$/,
                use: [
                    /**
                     * [style-loader]
                     * CSS 를 DOM 에 추가하는 로더
                     * CSS 코드는 CSSOM 형태로 변환되어야 브라우저가 이해할 수 있다
                     * - inline script 로 넣거나
                     * - style 태그로 넣거나
                     * - link 태그로 넣거나
                     * - CSSOM 으로 변환해서 넣거나 ...
                     * style-loader 는 CSS 파일을 읽어서 style 태그로 만들어 head 태그 안에 삽입한다
                     */
                    "style-loader",
                    /**
                     * [css-loader]
                     * 자바스크립트에서 CSS 파일을 모듈로 불러올 수 있다
                     * 진입점으로 부터 JS 모듈 탐색 중 CSS 파일이 import 된 것을 찾으면,
                     * CSS 를 모듈로 변환하는 작업을 진행한다
                     */
                    "css-loader",
                ],
            },
            /**
             * Webpack5 부터 이미지 로드시 file-loader 대신 asset 모듈을 사용한다
             * https://webpack.js.org/guides/asset-management/
             */
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
