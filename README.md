# Childhood in Labour Archive

Archive website documenting child labour through paintings, photography, articles, and other records.

## Run Locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Current Routes

- `/` homepage
- `/archive` main archive (search + category filter)
- `/resources` all source links together on one page
- `/explore` redirects to `/archive`
- `/about` placeholder
- `/contact` placeholder

## Image Folders

Place images in:

- `public/images/home`
- `public/images/photography`
- `public/images/painting`
- `public/images/articles`
- `public/images/others`

Simple naming format:

- `photo-1.jpg`, `photo-2.jpg`
- `painting-1.jpg`, `painting-2.jpg`
- `article-1.jpg`
- `other-1.jpg`

## Content Rules

- Photograph entries in archive show only artist name as text metadata.
- Resources page keeps all links together (visually grouped by category).

## Deployment (Vercel)

```bash
vercel login
vercel
vercel --prod
```
