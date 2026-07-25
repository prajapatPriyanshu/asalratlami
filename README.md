# 🌶️ Asal Ratlami Sev Bhandar - Website

A complete, responsive, and modern website for **Asal Ratlami Sev Bhandar** — an authentic Ratlami Namkeen shop located on Naroda Road, Ahmedabad.

---

## 📁 Project Structure

```
asal-ratlami-sev-bhandar-website/
├── index.html          # Main HTML file
├── css/
│   └── style.css       # Complete responsive stylesheet
├── js/
│   └── main.js         # Interactive JavaScript
└── README.md           # This file
```

---

## ✨ Features

- **Fully Responsive** — Looks great on desktop, tablet, and mobile
- **Mobile Navigation** — Hamburger menu with smooth animations
- **Scroll Animations** — Elements fade in as you scroll
- **Interactive Contact Form** — With validation and success notifications
- **Google Maps Embed** — Shows shop location on Naroda Road
- **SEO Optimized** — Meta tags, structured headings, semantic HTML
- **Fast Loading** — Minimal dependencies, optimized CSS
- **Accessibility** — ARIA labels, keyboard navigation, reduced motion support
- **Sticky Navigation** — Navbar changes on scroll
- **Back to Top Button** — Appears after scrolling down

---

## 🚀 How to Host This Website

### Option 1: GitHub Pages (FREE & Recommended)

1. Create a new repository on [GitHub](https://github.com)
2. Upload all files (`index.html`, `css/`, `js/`) to the repository
3. Go to **Settings → Pages**
4. Select branch `main` and folder `/ (root)`
5. Your site will be live at `https://yourusername.github.io/repo-name`

### Option 2: Netlify (FREE)

1. Go to [Netlify](https://www.netlify.com)
2. Drag and drop the website folder onto the Netlify dashboard
3. Your site goes live instantly with a free `.netlify.app` domain
4. You can also connect your custom domain for free

### Option 3: Vercel (FREE)

1. Go to [Vercel](https://vercel.com)
2. Import your GitHub repository or drag-and-drop the folder
3. Deploy instantly with a free `.vercel.app` domain

### Option 4: Any Web Hosting (cPanel/Shared Hosting)

1. Extract the ZIP file
2. Upload all files to your `public_html` folder via FTP or File Manager
3. Your site is live at your domain

### Option 5: Run Locally

Simply double-click `index.html` to open it in your browser, or use a local server:

```bash
# Using Python
python -m http.server 8000

# Using Node.js (if you have npx)
npx serve .

# Using PHP
php -S localhost:8000
```

Then open `http://localhost:8000` in your browser.

---

## 🎨 Customization Guide

### Change Phone Number
Edit `index.html` and update all instances of `+91 98765 43210` with your actual number.

### Change Address
Update the address in the Location section of `index.html`.

### Add Real Photos
Replace the emoji placeholders in the product cards with actual `<img>` tags:

```html
<div class="product-image">
    <img src="images/ratlami-sev.jpg" alt="Ratlami Sev">
    <div class="product-badge spicy">SPICY</div>
</div>
```

### Change Prices
Update the prices in the product cards within `index.html`.

### Add More Products
Copy any `.product-card` div and modify the content.

### Change Colors
Edit the CSS variables at the top of `css/style.css`:

```css
:root {
    --primary: #92400e;      /* Main brand color */
    --accent: #f59e0b;       /* Button/highlight color */
    --bg-warm: #fffbeb;      /* Background color */
}
```

---

## 📱 Responsive Breakpoints

| Breakpoint | Width | Layout Changes |
|------------|-------|----------------|
| Mobile | < 480px | Single column, stacked nav |
| Tablet | < 768px | 2-column grids, hamburger menu |
| Desktop | < 1024px | Full layout, hover effects |
| Large | > 1400px | Max-width container, larger fonts |

---

## 🔧 Browser Support

- ✅ Chrome / Edge (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Opera (latest)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

---

## 📄 License

This website was created for **Asal Ratlami Sev Bhandar**.
Feel free to modify and use for your business.

---

Made with ❤️ for Asal Ratlami Sev Bhandar, Ahmedabad
