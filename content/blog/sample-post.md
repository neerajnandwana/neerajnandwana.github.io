---
layout: layouts/post.njk
title: My First Blog Post - A Sample Article
description: This is a sample blog post to demonstrate the setup of the blog section in Eleventy.
date: 2023-10-26 # Use YYYY-MM-DD format for dates
tags: ["tech", "eleventy", "sample", "tutorial"]
author: Your Name # Optional: if you want to specify per post
permalink: /blog/sample-post/index.html # Optional: custom permalink, or let Eleventy generate from file structure
# eleventyExcludeFromCollections: false # Ensure it's included in collections
---

## {{ title }}

Welcome to this sample blog post! This file demonstrates how you can create blog content using Markdown.

### Getting Started

Eleventy makes it easy to manage blog posts. You just create Markdown files in your posts directory (e.g., `content/blog/`), and Eleventy, along with your layouts, will render them into HTML pages.

### Front Matter is Key

The section at the top of this file (between the `---` lines) is called "front matter." It's written in YAML and provides metadata for your post:

*   `layout`: Specifies which layout file to use (e.g., `layouts/post.njk`).
*   `title`: The title of your post, used in the `<title>` tag and often displayed on the page.
*   `description`: A short summary, good for SEO and for previews.
*   `date`: The publication date. Eleventy can sort posts by this.
*   `tags`: Keywords or categories for your post. These can be used to create tag pages or filter content.

### Writing in Markdown

You can use all the standard Markdown features:

*   **Bold** and *italic* text
*   Lists, like this one
*   [Links](https://www.11ty.dev/)
*   `inline code`
*   ```html
    <p>And code blocks too!</p>
    ```
*   Blockquotes:
    > This is a blockquote.

Happy blogging!
