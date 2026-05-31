# Tj's Miscellany — Deployment Guide

## Cloudflare Pages Deployment

### Method 1: Direct Upload (Fastest)
1. Log in to https://dash.cloudflare.com
2. Go to **Workers & Pages** → **Create application** → **Pages** → **Upload assets**
3. Create a new project named `tjs-miscellany`
4. Drag and drop the entire `tjs-miscellany` folder (or zip it first)
5. Click **Deploy site**

### Method 2: Git Integration (Recommended for ongoing updates)
1. Push this folder to a GitHub or GitLab repository
2. In Cloudflare Pages, choose **Connect to Git**
3. Select your repository
4. **Build settings:**
   - Framework preset: `None`
   - Build command: *(leave blank)*
   - Build output directory: `/` (or `.`)
5. Click **Save and Deploy**

### Custom Domain
After deployment, add your custom domain under:
**Pages project** → **Custom domains** → **Set up a custom domain**

## File Structure

```
tjs-miscellany/
├── .eleventy.js          ← Eleventy configuration
├── package.json          ← npm package metadata
├── src/                  ← all your content goes in here
│   ├── _includes/        ← layouts and templates
│   │   └── base.njk      ← your main page template
│   ├── posts/            ← blog posts go here
│   ├── reviews/          ← reviews go here
│   │   ├── books/
│   │   └── art/
│   ├── index.njk         ← homepage
│   ├── about.njk
│   ├── blog.njk
│   ├── book-reviews.njk
│   ├── art-reviews.njk
│   └── items.njk
├── css/
│   └── style.css
├── js/
│   ├── components.js
│   └── main.js
└── images/
```


## Replacing Placeholder Images
Images use `https://picsum.photos` for placeholders. To replace:
1. Add your images to an `images/` folder
2. Update `src` attributes in each HTML file
3. Recommended sizes: hero 900×700, cards 600×400, portraits 600×750

## Fonts
Loaded from Google Fonts (requires internet connection):
- Cinzel Decorative — display / titles
- Cormorant Garamond — body text
- IM Fell English — italics / pull quotes
- Raleway — navigation / labels
