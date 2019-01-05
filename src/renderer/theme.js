const colors = {
  grey1: '#999',
  grey2: '#e0e0e0',
  grey3: '#f6f6f6',
  black: '#525a5b',
  white: '#fff',
};

const lightColors = {
  grey1: lighten('#999'),
  grey2: lighten('#e0e0e0'),
  grey3: lighten('#f6f6f6'),
  black: lighten('#525a5b'),
  white: lighten('#fff'),
}

const measuring = {
  unit: 'px',
  fontSize: 14,
  width: 320,
  height: 34,
  icon: 20,
  logo: 80,
  avatar: 32,
  search: 180,
  letterSpacing: 17,
};

const defaultTheme = {
  colors,
  measuring,
  colorPlaceholder: colors.grey2,

  border: `1${measuring.unit} solid ${colors.grey1}`,
  borderRadius: `3${measuring.unit}`,

  background: 'linear-gradient(180deg, rgba(0, 0, 0, 0.05) 0 %, rgba(0, 0, 0, 0) 100 %)',
};

const lightTheme = {
  lightColors
}

export default { defaultTheme, lightTheme };
