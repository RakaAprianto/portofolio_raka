# Portfolio Website - Quick Start Guide

## 🚀 Quick Commands

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## 📝 Customization Checklist

### 1. Personal Information

- [ ] Update name in `src/lib/data.ts`
- [ ] Update email address
- [ ] Update bio and role
- [ ] Update social media links

### 2. Projects

- [ ] Add your project images to `public/images/`
- [ ] Update project descriptions
- [ ] Add GitHub/demo links
- [ ] Update tech stack tags

### 3. Styling

- [ ] Customize colors in `tailwind.config.ts`
- [ ] Adjust gradient colors if needed
- [ ] Test responsive design on different devices

### 4. Images

Replace placeholder images in `public/images/`:

- iglassclean.jpg
- iglassclean-web.jpg
- bengkel-las.jpg
- perpustakaan.jpg
- masjid.jpg
- sentiment.jpg

### 5. Deploy

- [ ] Push to GitHub
- [ ] Deploy to Vercel/Netlify
- [ ] Test production build
- [ ] Update social links

## 🎨 Color Scheme

Current theme uses:

- Primary: Blue (#3B82F6)
- Secondary: Cyan (#22D3EE)
- Background: Dark Navy (#0a0e27) to Black
- Text: White/Gray

## 📱 Browser Support

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)

## 🆘 Troubleshooting

### Build errors

```bash
rm -rf node_modules package-lock.json
npm install
```

### 3D not working

3D components are disabled on mobile for performance.

### Animations laggy

Check browser hardware acceleration is enabled.

## 📧 Support

For issues or questions:

- Check documentation in README.md
- Review component files for inline comments
- Test in different browsers
