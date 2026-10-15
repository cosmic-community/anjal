# Anjal Portfolio

![App Preview](https://imgix.cosmicjs.com/4ffa0e90-c851-11f1-a3c9-bf78c9330c52-autopilot-photo-1498050108023-c5249f4df085-1792038698481.jpeg?w=1200&h=630&fit=crop&auto=format,compress)

A modern, responsive developer portfolio built with Next.js 16 and Cosmic. Showcases projects, skills, work experience, and contact information with a clean, professional design.

## Features

- 🏠 Dynamic hero section powered by Contact Info content
- 🚀 Featured Projects grid + full Projects index with detail pages
- 🖼️ Screenshot galleries, rich-text project details, tech stack chips
- 🛠️ Skills grouped by category with proficiency indicators
- 💼 Work Experience timeline with "Present" role support
- ✉️ Contact section with mailto and social links
- 📱 Mobile-first, dark/light friendly responsive design
- 🔍 SEO metadata on every page

## Clone this Project

Want to create your own version of this project with all the content and structure? Clone this Cosmic bucket and code repository to get started instantly:

[![Clone this Project](https://img.shields.io/badge/Clone%20this%20Project-29abe2?style=for-the-badge&logo=cosmic&logoColor=white)](https://app.cosmicjs.com/projects/new?clone_bucket=6ad056edeeb1ef41f555c014&clone_repository=6ad05894eeb1ef41f555c0a1)

## Prompts

This application was built using the following prompts to generate the content structure and code:

### Content Model Prompt

> "Create content models for a developer portfolio with projects (including screenshots, tech stack, and live URLs), skills, and work experience.
>
> User instructions: A developer portfolio with projects, skills, work experience, and contact info"

### Code Generation Prompt

> "Build a Next.js application for a creative portfolio called "Anjal". The content is managed in Cosmic CMS with the following object types: skills, projects, work-experience, contact-info. Create a beautiful, modern, responsive design with a homepage and pages for each content type.
>
> User instructions: A modern, responsive developer portfolio website for Anjal powered by existing Cosmic content. Pages/sections: Home hero using Contact Info (full name, headline, location, available-for-work badge, GitHub/LinkedIn links); Featured Projects grid (projects with featured switch) linking to project detail pages at /projects/[slug] showing short description, rich-text details, screenshots gallery, tech stack (related skills), live URL and repo URL buttons; Projects index page; Work Experience timeline (company, role, logo, start/end dates or 'Present' for current role, rich-text description, technologies chips); Skills section grouped by category (Frontend, Backend, Database, DevOps, Tools) with emoji icon and proficiency level; Contact section with email mailto link and social links. Clean, professional design with dark/light friendly styling, smooth hover effects, mobile-first layout, SEO metadata."

The app has been tailored to work with your existing Cosmic content structure and includes all the features requested above.

## Technologies

- [Next.js 16](https://nextjs.org/docs) — App Router, Server Components
- [Cosmic](https://www.cosmicjs.com/docs) — Headless CMS
- TypeScript
- Tailwind CSS (with `@tailwindcss/typography` for rich-text content)

## Getting Started

### Prerequisites
- [Bun](https://bun.sh/) installed
- A Cosmic account with this bucket's content

### Installation

```bash
bun install
```

Set up your environment variables (see Environment Variables section below), then run:

```bash
bun run dev
```

Visit `http://localhost:3000`.

## Cosmic SDK Examples

```typescript
import { cosmic } from '@/lib/cosmic'

// Fetch all projects with related skills resolved
const { objects: projects } = await cosmic.objects
  .find({ type: 'projects' })
  .props(['id', 'slug', 'title', 'metadata'])
  .depth(1)

// Fetch a single project by slug
const { object: project } = await cosmic.objects
  .findOne({ type: 'projects', slug: 'my-project' })
  .depth(1)
```

## Cosmic CMS Integration

This app reads from four object types in your bucket:
- **skills** — name, category, proficiency, icon
- **projects** — short_description, details, screenshots, tech_stack (related skills), live_url, repo_url, featured
- **work-experience** — company, role, company_logo, start_date, current_role, end_date, description, technologies
- **contact-info** — full_name, headline, email, location, github_url, linkedin_url, available_for_work

All content is fetched server-side and rendered via React Server Components for optimal performance and SEO.

## Deployment Options

### Vercel
1. Push this repository to GitHub
2. Import the project in [Vercel](https://vercel.com/new)
3. Add the environment variables below
4. Deploy

### Netlify
1. Push this repository to GitHub
2. Import the project in [Netlify](https://app.netlify.com/)
3. Set build command to `bun run build` and publish directory to `.next`
4. Add the environment variables below
5. Deploy

Set these environment variables on your hosting platform:
```
COSMIC_BUCKET_SLUG=your-bucket-slug
COSMIC_READ_KEY=your-read-key
COSMIC_WRITE_KEY=your-write-key
```
<!-- README_END -->