import '@storybook/addon-storysource/register'

module.exports = ({ config }) => {
    config.module.rules.push({
        test: /\.story\.js?$/,
        loaders: [require.resolve('@storybook/addon-storysource/loader')],
        enfore: 'pre'
    })

    return config
}