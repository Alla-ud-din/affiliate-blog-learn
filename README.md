# GoodFinds — Amazon Affiliate Blog Template

A clean, fast, SEO-optimized Next.js affiliate blog with Tailwind CSS.  
Designed for Pinterest traffic, static generation, and easy content management.

---

## 🚀 Quick Start

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

---

## 📝 How to Add New Posts

All posts live in the `/posts` directory as `.json` files.

**Create a new file:** `/posts/my-post-slug.json`

The filename becomes the URL: `/posts/my-post-slug`

### Post JSON Structure

```json
{
  "title": "Post Title Here",
  "date": "2024-12-01",
  "category": "Home Office",
  "excerpt": "Short summary shown on the homepage card (1-2 sentences).",
  "coverImage": "/images/my-cover.jpg",
  "description": "Longer intro paragraph shown at the top of the post page.",
  "metaDescription": "SEO meta description, 150-160 characters recommended.",
  "products": [
    {
      "name": "Product Name",
      "image": "/images/product-image.jpg",
      "affiliateLink": "https://www.amazon.com/dp/ASIN?tag=YOURTAG-20",
      "price": "$49",
      "badge": "Best Pick"
    }
  ]
}
```

**Image tips:**
- Place images in `/public/images/`
- Reference them as `/images/filename.jpg`
- Or use external URLs (e.g. Unsplash, Amazon CDN)

**Markdown posts:**  
You can also use `.md` files with frontmatter for posts with long-form body content.

---

## 🔗 How to Add Affiliate Links

1. Sign up at [Amazon Associates](https://affiliate-program.amazon.com/)
2. Get your **Associate Tag** (e.g. `yourblog-20`)
3. For each product, find its ASIN (in the Amazon URL: `/dp/ASIN`)
4. Build your link: `https://www.amazon.com/dp/ASIN?tag=yourblog-20`
5. Replace `AFFILIATE_LINK` in your JSON file with the real link

**Pro tip:** Use Amazon's SiteStripe bar when logged in to generate links quickly.

---

## 🚢 Deploy to Vercel

1. Push your code to GitHub (or GitLab / Bitbucket)
2. Go to [vercel.com](https://vercel.com) → "New Project" → Import your repo
3. Vercel auto-detects Next.js — no config needed
4. Click **Deploy**

Every push to `main` triggers an automatic rebuild and redeploy.

**Custom domain:** In Vercel → Project Settings → Domains → add your domain.

---

## 🎨 Customize Branding

### Colors
Edit `tailwind.config.js` → `theme.extend.colors.brand`:

```js
brand: {
  500: '#c77d28',  // ← Change this to your primary color
  // ...other shades
}
```

You can use [Tailwind Shades](https://www.tailwindshades.com/) to generate a full palette from one hex color.

### Fonts
1. Go to [Google Fonts](https://fonts.google.com/) and pick your fonts
2. Update the `@import` URL in `styles/globals.css`
3. Update the `<link>` in `pages/_document.js`
4. Update `fontFamily` in `tailwind.config.js`:

```js
fontFamily: {
  display: ['"Your Display Font"', 'serif'],
  body: ['"Your Body Font"', 'sans-serif'],
}
```

### Site Name & Tagline
- **Navbar:** `components/Navbar.js` → `SITE_NAME`
- **Footer:** `components/Footer.js` → `SITE_NAME`
- **SEO component:** `components/SEO.js` → `SITE_NAME` and `SITE_URL`
- **Homepage:** `pages/index.js` → `HERO_TITLE` and `SITE_TAGLINE`

### Navigation Links
Edit `NAV_LINKS` in `components/Navbar.js`.

---

## 📁 File Structure

```
affiliate-blog/
├── components/
│   ├── AffiliateDisclosure.js   # FTC disclosure banner
│   ├── Footer.js
│   ├── Layout.js
│   ├── Navbar.js
│   ├── PostCard.js              # Homepage post cards
│   ├── ProductCard.js           # Product recommendation cards
│   └── SEO.js                   # Head meta tags
├── lib/
│   └── posts.js                 # Post file reader utility
├── pages/
│   ├── _app.js
│   ├── _document.js
│   ├── index.js                 # Homepage
│   ├── about.js
│   ├── categories.js
│   ├── disclose.js              # Affiliate disclosure page
│   ├── 404.js
│   └── posts/
│       └── [slug].js            # Dynamic post pages
├── posts/                       # ← Add your post JSON files here
│   ├── best-ergonomic-office-chairs.json
│   ├── best-kitchen-knives-home-cooks.json
│   └── best-travel-backpacks.json
├── public/
│   └── images/                  # ← Put your images here
├── styles/
│   └── globals.css
├── next.config.js
├── tailwind.config.js
└── package.json
```

---

## 🔍 SEO Tips

- Keep `metaDescription` between 150-160 characters
- Use keyword-rich slugs (filenames): `best-ergonomic-office-chairs.json`
- Add a `coverImage` to every post for Pinterest Open Graph previews
- The `excerpt` is shown on cards and should be compelling (1-2 sentences)

---

## 📌 Pinterest Optimization

- Use **tall images** (2:3 ratio, e.g. 1000×1500px) for covers
- Add your site to [Pinterest for Developers](https://developers.pinterest.com/) to enable Rich Pins
- Add this meta tag to `components/SEO.js` after verification:
  ```html
  <meta name="p:domain_verify" content="YOUR_CODE_HERE" />
  ```
