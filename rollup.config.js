import babel from 'rollup-plugin-babel'
import svg from 'rollup-plugin-svg'
import css from 'rollup-plugin-css-only'
import postcss from 'rollup-plugin-postcss'
var tailwindcss = require('tailwindcss')

export default {
    input: 'src/index.js',
    output: [
        {
            file: 'dist/index.cjs.js',
            format: 'cjs'
        }, {
            file: 'dist/index.es.js',
            format: 'es'
        }
        , {
            file: 'dist/index.umd.js',
            format: 'umd',
            name: 'umqombothi'
        }
    ],
    external: ['react', 'react-bootstrap', 'styled-components', 'prop-types'],
    plugins: [
        babel({
            exclude: 'node_modules/**'
        }),
        svg(),
        css({ output: 'dist/umqombothi.css' }),
        postcss({
            plugins: [
                tailwindcss('./tailwind.config.js'),
                require('autoprefixer'),
            ]
        })
    ]
}