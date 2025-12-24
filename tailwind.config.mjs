/**
 * @type { import('tailwindcss').Config }
 */
export default {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    theme: {
        extend: {
            colors: {
                primary: {
                    DEFAULT: '#2563eb',
                    dark: '#1e40af',
                },
                bg: {
                    DEFAULT: '#fafafa',
                    secondary: '#ffffff',
                },
                text: {
                    DEFAULT: '#1e293b',
                    muted: '#64748b',
                },
                border: {
                    DEFAULT: '#e2e8f0',
                },
            },
            fontFamily: {
                sans: ['Inter', 'system-ui', 'sans-serif'],
                pixel: ['Silkscreen', 'monospace'],
            },
        },
    },
    plugins: [],
}