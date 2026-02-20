# Portfolio Website Guide

## Overview
A modern, minimal, and interactive bilingual portfolio website for Arsham Khayatzadeh, Product/UI-UX Designer.

## Features

### ✨ Key Features
- **Bilingual Support**: Fully functional English (LTR) and Persian (RTL) language switching
- **Admin Panel**: Complete CRUD functionality for managing projects, skills, and experiences
- **Responsive Design**: Works seamlessly across all devices
- **Modern Animations**: Smooth micro-interactions using Motion (Framer Motion)
- **Data Persistence**: Uses localStorage to save all admin changes

### 📄 Pages
1. **Home** - Hero section with name, title, and contact info
2. **About** - Detailed bio and professional stats
3. **Experience** - Work history with achievements at IranHotelOnline
4. **Skills** - Categorized skills with visual strength indicators
5. **Projects** - Portfolio showcase (managed via admin panel)
6. **Contact** - Contact information with social links
7. **Admin Panel** - Manage all portfolio content

## Admin Panel

### Access
- Navigate to `/admin` or click "Admin" button in navigation
- **Demo Password**: `admin123`

### Features
- ✅ Add new projects with title, description, image URL, and link
- ✅ Edit existing projects
- ✅ Delete projects
- ✅ All changes are saved to localStorage automatically

## Language Switching
Click the language toggle button (🌐) in the navigation to switch between English and Persian.

## Customization Guide

### Update Contact Information

1. **Email**: Edit in `/src/app/pages/Contact.tsx`
   - Update: `arsham.kz770@gmail.com` to your email
   
2. **Phone**: Edit in `/src/app/pages/Contact.tsx`
   - Update: `+98 XXX XXX XXXX` to your phone

3. **Social Links**: Edit in `/src/app/pages/Contact.tsx`
   - **LinkedIn**: Update `https://linkedin.com/in/yourprofile`
   - **Dribbble**: Update `https://dribbble.com/yourprofile`

### Add/Update Skills

Skills are stored in `/src/app/contexts/DataContext.tsx` in the `initialSkills` array.

### Add/Update Experience

Experiences are stored in `/src/app/contexts/DataContext.tsx` in the `initialExperiences` array.

### Color Scheme

The website uses a minimal monochrome palette:
- Primary: Black (#000000)
- Background: White (#FFFFFF) / Gray-50 (#F9FAFB)
- Accent: Gray tones for contrast

To change colors, edit the Tailwind classes in components:
- `bg-black` → Background color
- `text-black` → Text color
- `border-gray-200` → Border color

## Technologies Used

- **React 18** - UI framework
- **TypeScript** - Type safety
- **React Router** - Navigation
- **Tailwind CSS 4** - Styling
- **Motion (Framer Motion)** - Animations
- **Lucide React** - Icons
- **localStorage** - Data persistence

## File Structure

```
/src/app/
├── contexts/
│   ├── LanguageContext.tsx   # Bilingual support
│   └── DataContext.tsx        # Data management & storage
├── components/
│   └── Navigation.tsx         # Main navigation
├── pages/
│   ├── Home.tsx              # Landing page
│   ├── About.tsx             # About page
│   ├── Experience.tsx        # Work experience
│   ├── Skills.tsx            # Skills showcase
│   ├── Projects.tsx          # Portfolio projects
│   ├── Contact.tsx           # Contact information
│   └── Admin.tsx             # Admin panel
└── App.tsx                   # Main app with routing
```

## Local Storage Data

The app stores data in localStorage under these keys:
- `language` - Selected language (en/fa)
- `projects` - Array of portfolio projects
- `skills` - Array of skill categories
- `experiences` - Array of work experiences

To reset data, open browser console and run:
```javascript
localStorage.clear()
```

## Next Steps - Supabase Integration

For cloud-based data persistence and sharing across devices, you can integrate Supabase:

### Benefits:
- ✅ Access admin panel from anywhere
- ✅ Real-time sync across devices
- ✅ Image upload and storage
- ✅ Secure authentication
- ✅ No data loss when clearing browser cache

**Note**: Figma Make is not meant for collecting PII or securing sensitive data. Use Supabase for better data management and persistence.

Would you like me to help set up Supabase integration for cloud storage?

## Design Philosophy

The website follows **Modern Minimalism** principles:
- Clean typography with Inter font (English) and Vazirmatn (Persian)
- Generous whitespace
- Subtle animations that enhance UX
- Focus on content and readability
- Smooth transitions and hover states

## Animations

All animations use Motion (Framer Motion) for:
- Page transitions
- Element entrance animations
- Hover effects
- Skill progress bars
- Mobile menu

## Responsive Breakpoints

- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Performance

- Minimal dependencies
- Optimized animations
- Lazy loading ready
- Fast navigation with React Router

---

**Built with ❤️ for Arsham Khayatzadeh**
