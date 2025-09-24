const colors = {
  white: '#FFFFFF',
  primary: {
    100: '#E6EBF2',
    200: '#C2CCDA',
    300: '#9DAEC2',
    400: '#6D829F',
    500: '#365075',
    600: '#1B2C44',
    700: '#162538',
    800: '#101B29',
    900: '#0F1C2E',
  },
  lime: {
    400: '#e8fb86',
    500: '#bef264',
    600: '#a2e635',
    700: '#64a30d',
    800: '#1a2e05',
    900: '#022c22',
  },
  neutral: {
    100: '#F5F7FA',
    200: '#E9EDF2',
    300: '#D8DEE6',
    400: '#C1C9D6',
    500: '#9AA5B8',
    600: '#6B7689',
    700: '#4A5566',
  },
  support: {
    success: '#22C55E',
    warning: '#FACC15',
    danger: '#EF4444',
    info: '#3B82F6',
  },
  black: {
    600: '#1E293B',
    700: '#18181B',
    800: '#0F1115',
    900: '#000000',
  },
} as const;

const fontFamily = {
  sans: {
    regular: 'HostGrotesk_400Regular',
    medium: 'HostGrotesk_500Medium',
    semiBold: 'HostGrotesk_600SemiBold',
  },
} as const;

const fontSize = {
  xs: 12,
  sm: 14,
  base: 16,
  lg: 20,
  xl: 24,
  '2xl': 28,
  '3xl': 32,
} as const;

export const theme = {
  colors,
  fontFamily,
  fontSize,
} as const;
