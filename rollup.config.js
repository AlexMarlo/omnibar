import path from 'path';
import typescript from 'rollup-plugin-typescript';

export default {
    entry: path.resolve(__dirname, 'src', 'index.tsx'),
    format: 'cjs',
    dest: path.resolve(__dirname, 'dist', 'lib.js'),
    plugins: [
        typescript({
            typescript: require('typescript'),
        }),
    ],
    external: ['react']
};
