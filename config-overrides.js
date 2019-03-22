//const { override, fixBabelImports } = require('customize-cra');
const { override, fixBabelImports, addLessLoader,addWebpackAlias } = require('customize-cra');
const path = require("path");

module.exports = override(
    fixBabelImports('import', {
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: true,
    }),
    addLessLoader({
        javascriptEnabled: true,
    }),
    addWebpackAlias({
        '@': path.resolve(__dirname, "src/")
    }),
);