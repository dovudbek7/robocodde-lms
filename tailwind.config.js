/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ios: {
          blue:   '#007AFF',
          green:  '#34C759',
          orange: '#FF9500',
          red:    '#FF3B30',
          purple: '#AF52DE',
          gray1:  '#F2F2F7',
          gray2:  '#E5E5EA',
          gray3:  '#C7C7CC',
          gray4:  '#8E8E93',
          label:  '#1C1C1E',
          label2: '#3A3A3C',
        },
      },
      fontFamily: {
        sans: ['-apple-system', 'BlinkMacSystemFont', 'SF Pro Display', 'Segoe UI', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
