const webpack = require("webpack");
const buildMetadata = require("./BuildMetadata.js");

const HtmlWebpackPlugin = require("html-webpack-plugin");
const ConsoleLogOnBuildWebpackPlugin = require("./ConsoleLogOnBuildWebpackPlugin.js");

module.exports = {
    mode: "development",
    entry: {
        main: "./src/index.js",
    },
    output: {
        filename: "[name].js",
        // webpack4 에서는 WebpackCleanPlugin 이 필요했지만,
        // webpack5 에서는 output.clean 옵션을 사용
        clean: true,
    },
    module: {
        // loaders
        rules: [],
    },
    plugins: [
        /**
         * 플러그인은 빌드과정에서 다양한 기능을 추가할 수 있게 해준다.
         * (vs 로더는 개별 파일을 해석하고 변환하는 과정에 관여한다)
         * 플러그인은 번들 최적화, 에셋 관리, 환경 변수 주입 등 다양한 역할을 한다.
         */
        new ConsoleLogOnBuildWebpackPlugin(),
        /**
         * webpack.BannerPlugin()
         * 번들 파일에 빌드 정보를 주석으로 추가한다
         * banner 옵션에 문자열을 넣어 빌드 정보를 추가할 수 있다
         * 함수를 넣어 빌드 정보를 동적으로 생성할 수도 있다
         * https://webpack.kr/plugins/banner-plugin/
         */
        new webpack.BannerPlugin({
            banner: buildMetadata(),
        }),
        /**
         * webpack.DefinePlugin()
         * 빌드 타임에 전역 상수를 주입할 수 있다
         * 기본적으로 process.env.NODE_ENV 환경변수에는 webpack.config 의 mode 값을 주입한다
         * 코드가 아닌 값을 주입할때에는 JSON.stringify() 를 사용한다
         */
        new webpack.DefinePlugin({
            // API_BASE_URL: "https://api.example.com", : "https://api.example.com" 문자열이 들어가는것이 아닌 https://api.example.com 이 주입되게 된다.
            API_BASE_URL: process.env.NODE_ENV === "production" ? JSON.stringify("https://api.example.com") : JSON.stringify("https://dev-api.example.com"),
        }),
        /**
         * HtmlWebpackPlugin()
         * 번들된 JS 파일을 HTML 파일에 자동으로 주입한다
         * https://webpack.kr/plugins/html-webpack-plugin/
         */
        new HtmlWebpackPlugin({
            template: "./index.html",
            templateParameters: {},
            minify:
                process.env.NODE_ENV === "production"
                    ? {
                          collapseWhitespace: true,
                          removeComments: true,
                      }
                    : false,
        }),
    ],
};
