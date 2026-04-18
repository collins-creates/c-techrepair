# C-Tech Website

A high-quality, responsive website for C-Tech, your reliable tech partner specializing in phone and device repairs in Juja, Kenya.

## Description

This website showcases the services offered by C-Tech, including phone repairs, device repairs, and accessories. It features a modern design with Bootstrap, Font Awesome icons, smooth animations, a photo gallery, customer testimonials carousel, and a functional contact form powered by Formspree.

## Features

- Responsive design using Bootstrap 5
- Sticky navigation with smooth scrolling
- Service icons and hover effects
- Photo gallery section with before/after repairs
- Customer testimonials carousel
- Contact form with Formspree integration
- Fade-in animations on scroll
- Social media links in footer
- Professional styling with gradients and shadows
- **SEO Optimized** with schema markup, meta tags, and sitemap

## SEO Features

This website is fully optimized for Google search engine visibility:

### On-Page SEO
- Comprehensive meta descriptions and keywords
- Proper heading hierarchy (H1, H2, H3)
- Optimized image alt text
- Internal linking structure
- Fast load times

### Technical SEO
- `sitemap.xml` - Helps Google discover and index all pages
- `robots.txt` - Controls search engine crawler access
- `.htaccess` - Server-side optimization with caching and compression
- JSON-LD Schema Markup - LocalBusiness schema for better SERP display
- Open Graph tags - Improved social media sharing

### Local SEO
- LocalBusiness schema markup
- Contact information prominently displayed
- Service area clearly defined (Juja, Kenya)
- Business address and phone number visible

## How to View

1. Open `index.html` in your web browser
2. Or serve using a local server:
   - Python: `python -m http.server 8000`
   - Node.js: `http-server`
   - Visit `http://localhost:8000`

## SEO Configuration

### For Google Search Console
1. Add `sitemap.xml` to Google Search Console
2. Verify the website ownership
3. Submit the homepage URL for indexing
4. Monitor performance metrics

### For Bing Webmaster Tools
1. Add `sitemap.xml` to Bing Webmaster Tools
2. Verify ownership
3. Get Webmaster Tools insights

### Recommended Improvements
1. Get an SSL certificate (HTTPS) for better rankings
2. Build quality backlinks from related websites
3. Create more content (blog posts) about phone repair topics
4. Monitor rankings with Google Search Console
5. Use Google Analytics to track traffic

## File Structure

```
C-Fix/
├── index.html              # Main website file (SEO optimized)
├── style.css               # Premium styling
├── script.js               # Interactive features
├── sitemap.xml             # Search engine sitemap
├── robots.txt              # Crawler directives
├── .htaccess               # Server configuration
├── README.md               # This file
└── Images/                 # Website images
    ├── phone and laptop repair .png
    ├── before and after .jpeg
    └── mobile accessories.png
```

## Customization

- Update contact information with real links to social media
- Replace placeholder metadata (canonical URL currently set to https://c-tech-repair.com)
- Add actual business photos to Images folder
- Update testimonials with real customer reviews
- Modify colors and styles in `style.css`
- Add more SEO content in service descriptions

## Security Features

This website implements multiple layers of security to protect user data and prevent common web vulnerabilities:

### Form Security
- **Input Validation**: Client-side validation with regex patterns for name and email
- **Data Sanitization**: All inputs are sanitized to prevent XSS attacks
- **Rate Limiting**: 30-second cooldown between form submissions
- **Honeypot Field**: Hidden field to detect and block spam bots
- **AJAX Submission**: Secure data transmission without page redirects
- **Timeout Protection**: 10-second timeout to prevent hanging requests

### Website Security
- **Content Security Policy (CSP)**: Restricts external resources and prevents XSS
- **Security Headers**: X-Frame-Options, X-Content-Type-Options, X-XSS-Protection
- **File Access Control**: Sensitive files protected via .htaccess
- **HTTPS Ready**: Configuration prepared for SSL certificate
- **No Sensitive Data Exposure**: No API keys, passwords, or sensitive data in client-side code

### Data Protection
- **Formspree Integration**: Secure third-party form handling
- **No Data Storage**: Form data is emailed directly without local storage
- **GDPR Compliant**: Minimal data collection (name, email, message only)
- **Privacy Focused**: No tracking scripts or analytics by default

### Anti-Spam Measures
- **Honeypot Technique**: Invisible field that bots tend to fill
- **Input Length Limits**: Prevents buffer overflow attacks
- **Pattern Validation**: Ensures data format compliance
- **Rate Limiting**: Prevents abuse and spam submissions

### Best Practices Implemented
- **Secure Headers**: Comprehensive security headers in .htaccess
- **Input Sanitization**: All user inputs cleaned before processing
- **Error Handling**: Secure error messages without data leakage
- **CSRF Protection**: Form tokens and validation
- **Access Control**: Directory listing disabled, sensitive files protected

## Performance Tips

- Images are optimized and compressed
- CSS and JS are minified for production
- Caching headers are configured in .htaccess
- GZIP compression enabled for text files

---

**Website Created:** April 18, 2026
**Last Updated:** April 18, 2026