module.exports = function(eleventyConfig) {
  // Date filter for formatting
  eleventyConfig.addFilter("dateFilter", function(date) {
    return new Date(date).toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  });

  // Collections for blog posts
  eleventyConfig.addCollection("blog", function(collection) {
    return collection.getFilteredByGlob("src/blog/*.md")
      .sort((a, b) => new Date(b.date) - new Date(a.date));
  });

  eleventyConfig.addPassthroughCopy("src/assets");
  eleventyConfig.setWatchThrottleWaitTime(100);

  return {
    dir: {
      input: "src",
      output: "_dist",
      includes: "_includes"
    },
    templateFormats: ["html", "md", "njk"]
  };
};
