const path = require('path')
module.exports = function ({ config }) {
    config.module.rules.push({
        test: /\.story\.js?$/,
        loaders: [require.resolve('@storybook/addon-storysource/loader')],
        enforce: 'pre',
        include: [path.resolve(__dirname, '../src/components/*')]
    })

    return config
}