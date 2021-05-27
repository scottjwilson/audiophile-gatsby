// $color-primary: #d87d4a;
// $color-primary-light: #fbaf85;
// $color-dark: #141414;
// $color-white: #fff;
// $color-gray-100: #fafafa;
// $color-gray-200: #f1f1f1;
// $color-gray-300: #c4c4c4;
// $color-gray-400: #9e9e9e;
// $color-gray-500: #434343;

export const colors = {
  primary: {
    base: "#d87d4a",
    light: "#fbaf85",
    dark: "#141414",
  },
  gray: {
    one: "#fafafa",
    two: "#f1f1f1",
    three: "#c4c4c4",
    four: "#9e9e9e",
    five: "#434343",
  },

  black: {
    base: "#141414",
    light: "#4b4e57",
    blue: "#2e3246",
  },
  red: {
    base: "#801515",
    light: "#ff0000",
    dark: "#550000",
  },
  background: {
    light: "#3e5fbc",
    dark: "#031B4D",
  },
};
// },

export const maxWidth = {
  xs: `max-width: 18rem`,
  sm: `max-width: 24rem`,
  md: `max-width: 28rem`,
  lg: `max-width: 32rem`,
  xl: `max-width: 36rem`,
  twox: `max-width: 42rem`,
  threex: `max-width: 48rem`,
  fourx: `max-width: 56rem`,
  fivex: `max-width: 64rem`,
  sixx: `max-width: 72rem`,
};

export const shadow = {
  card: "0 20px 30px rgba(0, 0, 0, 0.1)",
  image: "0 15px 25px rgba(0, 0, 0, 0.1)",
  suggestion: "0 -5px 30px rgba(0,0,0,0.2)",
  footer: "0 -3px 26px rgba(0,0,0,0.5)",
  feature: {
    big: {
      default: "0 40px 40px rgba(0, 0, 0, 0.2)",
      hover: "0 50px 50px rgba(0, 0, 0, 0.1)",
    },
    small: {
      default: "0 15px 25px rgba(0, 0, 0, 0.2)",
      hover: "0 40px 45px rgba(0, 0, 0, 0.1)",
    },
  },
  text: {
    small: "0 5px 10px rgba(0, 0, 0, 0.25)",
    big: "0 15px 20px rgba(0, 0, 0, 0.13)",
  },
};

export const gradient = {
  // eslint-disable-next-line
  leftToRight: `linear-gradient(-45deg, ${colors.background.light} 0%, ${colors.background.dark} 100%)`,
  // eslint-disable-next-line
  rightToLeft: `linear-gradient(45deg, ${colors.background.light} 0%, ${colors.background.dark} 100%)`,
  // eslint-disable-next-line
  red: `linear-gradient(45deg, ${colors.red.light} 0%, ${colors.red.dark} 100%)`,
};

export const transition = {
  easeInOutCubic: "cubic-bezier(0.645, 0.045, 0.355, 1)",
  easeOutBack: "cubic-bezier(0.175, 0.885, 0.32, 1.275)",
  duration: "0.4s",
};

export const devices = {
  xs: `(min-width: 400px)`,
  sm: `(min-width: 640px)`,
  md: `(min-width: 768px)`,
  lg: `(min-width: 1024px)`,
  xl: `(min-width: 1170px)`,
};

// sm @media (min-width: 640px) { ... }
// md @media (min-width: 768px) { ... }
// lg	@media (min-width: 1024px) { ... }
// xl	@media (min-width: 1280px) { ... }
// 2xl	@media (min-width: 1536px) { ... }

export const theme = {
  colors,
  gradient,
  shadow,
  devices,
  maxWidth,

  fontFamily: {
    // eslint-disable-next-line
    body: `Roboto,-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'`,
    // eslint-disable-next-line
    heading: `Source Sans Pro, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'`,
  },
  layout: {
    article: "46rem",
    base: "70rem",
    big: "83.33333rem",
  },
  borderRadius: {
    default: "0.4rem",
    round: "100rem",
  },
  transitions: {
    default: {
      duration: transition.duration,
      timing: transition.easeInOutCubic,
      transition: `all ${transition.duration} ${transition.easeInOutCubic}`,
    },
    boom: {
      duration: transition.duration,
      timing: transition.easeOutBack,
      transition: `all ${transition.duration} ${transition.easeOutBack}`,
    },
    headroom: {
      transition: "all 0.25s ease-in-out",
    },
  },
};

export default theme;
