module.exports = {
  theme: {
    extend: {
      backgroundImage: {
        'radial-gradient': 'radial-gradient(125% 125% at 50% 10%, #000 40%, #63e 100%)',
      },
      animation: {
        'spin-slow': 'spin 8s linear infinite',
        'border-flow': 'borderFlow 2s linear infinite',
      },
      keyframes: {
        borderFlow: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(200%)' },
        },
      },
    },
  },
  plugins: [],
};