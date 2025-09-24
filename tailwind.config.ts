const config = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/shared/**/*.{js,ts,jsx,tsx,mdx}',
    './src/entities/**/*.{js,ts,jsx,tsx,mdx}',
    './src/features/**/*.{js,ts,jsx,tsx,mdx}',
    './src/widgets/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
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
          500: '#DF6556',
        },
        gray: {
          100: '#F2F3F3',
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
        body: '14px',
        caption: '12px',
      },
      fontWeight: {
        bold: '700',
        medium: '600',
        regular: '400',
      },
      shadow: {
        lg: '0 12px 24px 0 rgba(0, 0, 0, 0.2)',
        basic: '0 4px 16px 0 rgba(0, 0, 0, 0.08)',
        sm: '0 2px 4px 0 rgba(0, 0, 0, 0.04)',
      },
    },
  },
  plugins: [],
};

module.exports = config;
