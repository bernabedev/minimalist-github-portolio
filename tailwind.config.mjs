/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {},
    colors: {
      primary: {
        DEFAULT: '#000',
        foreground: '#fff'
      },
      muted: {
        foreground: '#999'
      },
      blue: {
        50: '#edf2ff',
        100: '#dfe6ff',
        200: '#c5d2ff',
        300: '#a2b3ff',
        400: '#7c8afd',
        500: '#696ef7',
        600: '#4840eb',
        700: '#3c32d0',
        800: '#312ca7',
        900: '#2d2b84',
        950: '#1b194d'
      },
      green: {
        50: '#effef7',
        100: '#d9ffee',
        200: '#b6fcdc',
        300: '#69f7b9',
        400: '#3deba0',
        500: '#14d380',
        600: '#0aaf68',
        700: '#0c8954',
        800: '#0f6c45',
        900: '#0f583b',
        950: '#01321f'
      },
      purple: {
        50: '#faf5ff',
        100: '#f4e8ff',
        200: '#ebd5ff',
        300: '#dbb4fe',
        400: '#c485fb',
        500: '#b769f7',
        600: '#9a34e9',
        700: '#8423cd',
        800: '#7022a7',
        900: '#5c1d86',
        950: '#3e0863'
      },
      yellow: {
        50: '#fcfde9',
        100: '#f7fcc5',
        200: '#f4f98f',
        300: '#f5f769',
        400: '#f1eb1e',
        500: '#e1d211',
        600: '#c2a70c',
        700: '#9b7a0d',
        800: '#806013',
        900: '#6d4e16',
        950: '#402a08'
      },
      black: {
        DEFAULT: '#000'
      },
      white: '#fff'
    },
    borderColor: {
      DEFAULT: '#ddd',
      white: '#fff',
      black: '#000',
      blue: '#696ef7'
    }
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
