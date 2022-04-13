module.exports = {
  style: {
    sass: {
      loaderOptions: {
        additionalData: `
          @import "src/styles/abstracts/_variables.scss";
          @import "src/styles/abstracts/_utilities.scss";
        `,
      },
    },
  },
};