const eleventySass = require("eleventy-sass");
const Image = require("@11ty/eleventy-img");

module.exports = function(eleventyConfig) {
  
  // Add Sass plugin
  eleventyConfig.addPlugin(eleventySass);
  eleventyConfig.addPassthroughCopy("src/scripts");
  eleventyConfig.addPassthroughCopy("src/images");

  // Define a shortcode for images
  eleventyConfig.addNunjucksAsyncShortcode("image", async (src, alt, widths, formats, className) => {
    let metadata = await Image(src, {
      widths: widths || [300, 600],
      formats: formats || ["jpeg", "webp"],
      urlPath: "/images/",
      outputDir: "./dist/images/",
    });

    let imageAttributes = {
      alt,
      sizes: "(min-width: 30em) 50vw, 100vw",
      loading: "lazy",
      decoding: "async",
      class: className // Allow passing class name here
    };

    // Return image HTML
    return Image.generateHTML(metadata, imageAttributes);
  });

  eleventyConfig.addCollection("jobs", function(collectionApi) {
    const jobsData = require("./src/_data/jobs.js");
    return jobsData;
  });

  return {
    dir: {
      input: "src",
      output: "dist",
      includes: "_includes"
    }
  };
};