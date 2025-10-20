import { PluginAPI } from 'tailwindcss/plugin';

const config = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/shared/**/*.{js,ts,jsx,tsx,mdx}',
    './src/entities/**/*.{js,ts,jsx,tsx,mdx}',
    './src/features/**/*.{js,ts,jsx,tsx,mdx}',
    './src/widgets/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '912px',
      xl: '1024px',
    },
    extend: {
      colors: {
        background: '#ffffff',
        foreground: '#040E11',
        primary: {
          100: '#F0FBFF',
          300: '#CFF1FF',
          500: '#A4E5FF',
          700: '#73D6FF',
          900: '#40BBED',
        },
        negative: {
          900: '#DC5545',
        },
        positive: {
          900: '#3AAB63',
        },
        gray: {
          100: '#EAECED',
          300: '#CDCFCF',
          500: '#9B9FA0',
          700: '#4F5658',
          900: '#040E11',
        },
      },
      fontFamily: {
        sans: ['var(--font-pretendard)', 'sans-serif'],
      },
      fontSize: {
        title: ['22px', { lineHeight: '1.4', fontWeight: '700' }],
        subtitle: '18px',
        bodytitle: '16px',
        body: '14px',
        caption: '12px',
      },
      fontWeight: {
        bold: '700',
        medium: '600',
        regular: '400',
      },
      boxShadow: {
        lg: '0 12px 24px 0 rgba(0, 0, 0, 0.2)',
        basic: '0 4px 16px 0 rgba(0, 0, 0, 0.08)',
        sm: '0 2px 4px 0 rgba(0, 0, 0, 0.04)',
        drawer: '0 -12px 40px 0 rgba(0, 0, 0, .12)',
      },
    },
  },
  plugins: [
    function ({ addUtilities }: PluginAPI) {
      const newUtilities = {
        '.no-scrollbar': {
          '-ms-overflow-style': 'none', // IE, Edge
          'scrollbar-width': 'none', // Firefox
        },
        '.no-scrollbar::-webkit-scrollbar': {
          display: 'none', // Chrome, Safari, Edge
        },
        '.no-scrollbar-x': {
          overflowX: 'scroll',
        },
        '.no-scrollbar-x::-webkit-scrollbar:horizontal': {
          display: 'none',
        },
        '.no-scrollbar-y': {
          overflowY: 'scroll',
        },
        '.no-scrollbar-y::-webkit-scrollbar:vertical': {
          display: 'none',
        },
        '.no-spinner': {
          /* Firefox */
          '-moz-appearance': 'textfield',
          /* Modern Browsers */
          appearance: 'none',
        },
        '.no-spinner::-webkit-outer-spin-button, .no-spinner::-webkit-inner-spin-button': {
          /* Webkit browsers */
          '-webkit-appearance': 'none',
          margin: '0',
        },
      };
      addUtilities(newUtilities);
    },
  ],
};

module.exports = config;
