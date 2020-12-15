const moment = require('moment');

module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy("images");
    eleventyConfig.addPassthroughCopy("css");
    eleventyConfig.addPassthroughCopy("js");
    eleventyConfig.addFilter("dateToCzechFormat", function(value) {
      return moment(value).format("D. M. YYYY");
    });

    return {
        dir: {
          input: ".",
          includes: "_includes",
          data: "_data",
          output: "_site"
        }
      };
    };