module.exports = ({ config }) => {
    config.module.rules.push({
        test: /\.stories\.jsx?$/,
        loaders: [require.resolve('@storybook/addon-storysource/loader')],
        enfore: 'pre'
    })

    return config
}