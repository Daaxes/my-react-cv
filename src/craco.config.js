module.exports = {
    style: {
      postcss: {
        plugins: [
          require('autoprefixer'),
          require('tailwindcss'), // Include this line if you are using Tailwind CSS
        ],
      },
    },
  };