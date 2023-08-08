import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import {resolve} from 'path'
import dts from 'vite-plugin-dts';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        react(),
        dts({
            insertTypesEntry: true,
        }),
    ],
    build: {
        sourcemap: false,
        lib: {
            entry: resolve(__dirname, 'lib/index.ts'),
            name: "react-declarative-render",
            formats: ['es', 'umd', 'cjs'],
            fileName: (format) => `react-declarative-render.${format}.js`
        },
        rollupOptions: {
            external: ['react', 'react-dom'],
            output: {
                globals: {
                    'react': 'React',
                    'react-dom': 'ReactDOM',
                }
            }
        }
    }
})
