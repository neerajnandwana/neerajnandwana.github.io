# Personal Static Website with Eleventy

This repository contains the source code for a personal static website built with [Eleventy (11ty)](https://www.11ty.dev/), a modern static site generator.

## Features

*   **Profile Page**: Displays a personal bio, photo, skills, and contact links.
*   **Portfolio Section**: Showcases past work with a gallery-like feel.
*   **Projects Page**: Provides detailed entries for various projects, including tech stacks and links.
*   **Blog**: A Markdown-based blog with support for tags and SEO-friendly metadata.
*   **Automated Deployment**: Built and deployed via GitHub Actions to GitHub Pages.

## Why Eleventy?

Eleventy was chosen for its flexibility, speed, and simplicity. It allows for easy content creation using Markdown and Nunjucks templating, and it doesn't impose a rigid structure, making customization straightforward.

## Getting Started

Follow these instructions to get a local copy up and running for development and content creation.

### Prerequisites

*   **Node.js and npm**: Eleventy is a Node.js project. Download and install Node.js (which includes npm) if you haven't already: [https://nodejs.org/](https://nodejs.org/) (LTS version recommended).

### Installation

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/your-username/your-repo-name.git
    cd your-repo-name
    ```

2.  **Install dependencies:**
    This project uses npm to manage dependencies specified in `package.json`.
    ```bash
    npm install
    ```

### Running Locally

To build the site and serve it locally with hot-reloading:

```bash
npm start
```

This will typically make the site available at `http://localhost:8080`. Eleventy will watch for changes and rebuild automatically.

### Building for Production

To just build the site without serving it (outputs to the `_site` directory):

```bash
npm run build
```

## Adding and Editing Content

Content is primarily written in Markdown. The site uses Eleventy's directory structure and data cascade.

### 1. Profile (`pages/profile.md`)

*   Edit `pages/profile.md` to update your bio, skills, and contact information.
*   Replace the placeholder image at `assets/images/profile.jpg` with your actual photo.

### 2. Portfolio Items

*   **Landing Page**: `pages/portfolio.md` (you might want to update the intro text here).
*   **Adding a new item**:
    1.  Create a new Markdown file in the `content/portfolio/` directory (e.g., `content/portfolio/new-item.md`).
    2.  Use the structure from `content/portfolio/sample-item.md` as a template, including front matter for title, description, date, image, etc.
    3.  Add your images to `assets/images/` and link them in the front matter or content.
    *(To automatically list items on the main portfolio page, you'll need to implement Eleventy collections in `pages/portfolio.md` - see Eleventy documentation for `collections.all` or custom collections using tags).*

### 3. Project Entries

*   **Landing Page**: `pages/projects.md`.
*   **Adding a new project**:
    1.  Create a new Markdown file in `content/projects/` (e.g., `content/projects/new-project.md`).
    2.  Follow the structure of `content/projects/sample-project.md`, ensuring front matter for title, description, date, tech_stack, URLs, etc., is included.
    *(Similar to the portfolio, use Eleventy collections to list projects automatically on `pages/projects.md`)*.

### 4. Blog Posts

*   **Landing Page**: `pages/blog.md`.
*   **Adding a new blog post**:
    1.  Create a new Markdown file in `content/blog/` (e.g., `content/blog/my-new-post.md`).
    2.  Use the front matter structure from `content/blog/sample-post.md` (layout, title, description, date, tags).
    3.  Write your content using Markdown.
    *(Blog posts with the correct layout/tags should automatically appear on the blog listing page if you set up collections. The sample `pages/blog.md` currently has a manual link).*

## Customization

### Styling

*   Basic styles are in `assets/css/style.css`. You can modify this file or add more CSS files and link them in the `_includes/layouts/base.njk` head section.

### Layouts

*   HTML structure and layouts are in the `_includes/` directory:
    *   `_includes/layouts/base.njk`: The main site template.
    *   `_includes/layouts/post.njk`: Specific layout for blog posts.
    *   `_includes/partials/nav.njk`: Site navigation.
*   These files use the Nunjucks templating language.

### Configuration

*   Global site settings (like site title, author name) can be changed in `_data/metadata.json`.
*   Eleventy's core configuration is in `.eleventy.js`. You can add more filters, shortcodes, collections, and customize how Eleventy builds your site here.

## Deployment

This site is configured for automated deployment to GitHub Pages using GitHub Actions. Any push to the `main` branch will trigger a rebuild and deployment.

You will need to configure GitHub Pages in your repository settings:
1.  Go to your repository on GitHub.
2.  Click on "Settings" -> "Pages".
3.  Under "Build and deployment", select "GitHub Actions" as the source.

## Contributing

Contributions, issues, and feature requests are welcome. (If this were an open-source project). For a personal site, you can remove or modify this section.

## License

This project is licensed under the MIT License - see the `LICENSE` file for details (You'll need to create a `LICENSE` file if you want one).
