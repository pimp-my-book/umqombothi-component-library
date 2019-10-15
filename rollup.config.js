import babel from 'rollup-plugin-babel'
import svg from 'rollup-plugin-svg'
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
        svg()
    ]
}