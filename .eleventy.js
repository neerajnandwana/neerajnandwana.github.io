module.exports = function(eleventyConfig) {
  // Set human readable date format
  eleventyConfig.addFilter("readableDate", dateObj => {
    return new Date(dateObj).toLocaleDateString('en-US', {
      year: 'numeric', month: 'long', day: 'numeric'
    });
  });

  // Passthrough copy for static assets
  // The string "assets" is a glob, so it will copy the entire assets directory
  eleventyConfig.addPassthroughCopy("assets");
  // eleventyConfig.addPassthroughCopy("admin"); // for Netlify CMS (optional) // I'm commenting this out as it's optional

  // Markdown library configuration (optional, if you want to customize it)
  // const markdownIt = require("markdown-it");
  // const markdownItAttrs = require("markdown-it-attrs");
  // eleventyConfig.setLibrary("md", markdownIt({
  //   html: true,
  //   breaks: true,
  //   linkify: true
  // }).use(markdownItAttrs));

  eleventyConfig.addShortcode("year", () => `${new Date().getFullYear()}`);

  return {
    dir: {
      input: ".", // Source files directory
      includes: "_includes", // For layouts, partials
      data: "_data", // For global data files
      output: "_site" // Output directory
    },
    passthroughFileCopy: true,
    templateFormats: ["md", "njk", "html"], // File extensions to process
    markdownTemplateEngine: "njk", // Use Nunjucks for Markdown files
    htmlTemplateEngine: "njk", // Use Nunjucks for HTML files
    dataTemplateEngine: "njk", // Use Nunjucks for data files
  };
};
