module.exports = function(eleventyConfig) {

  // Copy static files straight through unchanged
  eleventyConfig.addPassthroughCopy("css");
  eleventyConfig.addPassthroughCopy("js");
  eleventyConfig.addPassthroughCopy("images");

  return {
    dir: {
      input: "src",        // your source files live here
      output: "_site",     // eleventy builds into here
      includes: "_includes" // templates and layouts live here
    }
  };
};