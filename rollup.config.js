import babel from 'rollup-plugin-babel'
import svg from 'rollup-plugin-svg'
import css from 'rollup-plugin-css-only'
import postcss from 'rollup-plugin-postcss'
var tailwindcss = require('tailwindcss')

export default {
    input: 'src/index.js',
    output: {
        file: 'build/index.js',
        format: 'cjs'
    },
    external: ['react'],
    plugins: [
        babel({
            exclude: 'node_modules/**'
        }),
        svg(),
        css({ output: 'build/umqobothi.css' }),
        postcss({
            plugins: [
                tailwindcss('./tailwind.config.js'),
                require('autoprefixer'),
            ]
        })
    ]
}