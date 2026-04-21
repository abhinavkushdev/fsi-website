# Fraud Shield India - Professional Business Website

A modern, fully responsive, professional business website for Fraud Shield India - a cybersecurity and fraud awareness company. Built with HTML, CSS, and vanilla JavaScript.

## 🎯 Features

### Design & UI
- **Modern Professional Design** - Dark theme with blue accents for a professional look
- **Fully Responsive** - Works perfectly on mobile, tablet, and desktop devices
- **Smooth Animations** - Fade-in, slide, and hover effects throughout
- **Modern Fonts** - Google Fonts (Poppins & Inter) for typography
- **Font Awesome Icons** - Professional icon library for visual enhancement

### Navigation & UX
- **Sticky Navigation Bar** - Always accessible with smooth scrolling
- **Mobile Menu Toggle** - Hamburger menu for mobile devices with smooth transitions
- **Active Navigation Links** - Highlights current section as you scroll
- **Smooth Page Scrolling** - Smooth scroll behavior for all navigation links

### Sections
1. **Hero Section** - Attractive headline with CTA button and animated background
2. **About Us** - Company mission, vision, and statistics
3. **Services** - 6 service offerings with icons and descriptions
4. **Features** - 6 key features highlighting why to choose the company
5. **Contact** - Contact information and form with validation
6. **Footer** - Social media links and quick navigation

### Form Features
- **Real-time Validation** - Validates as user types and on blur
- **Comprehensive Error Handling** - Specific error messages for each field
- **EmailJS Integration** - Sends contact form submissions directly to your inbox
- **Success & Failure Feedback** - Clear status message for both sent and failed requests
- **Field Validation**:
  - Name: 3+ characters, letters only
  - Email: Valid email format
  - Phone: Optional, validates format if provided
  - Subject: Required dropdown selection
  - Message: 10-5000 characters

### Interactive Elements
- **Mobile Menu Toggle** - Full-screen navigation for mobile devices
- **Scroll to Top Button** - Appears after scrolling down the page
- **Intersection Observer** - Lazy loading animations for performance
- **Keyboard Accessibility** - ESC key to close mobile menu
- **Hover Effects** - Cards lift and change styling on hover

### Performance & SEO
- **Semantic HTML** - Proper heading hierarchy and semantic tags
- **Meta Tags** - Description, keywords, and author meta information
- **SEO-Friendly Structure** - Proper use of headings and alt attributes
- **Optimized Code** - Minified CSS and vanilla JavaScript (no frameworks)
- **Accessibility** - ARIA labels and keyboard navigation support
- **Print Styles** - Optimized print layout

### Browser Support
- Chrome/Edge (Latest)
- Firefox (Latest)
- Safari (Latest)
- Mobile browsers
- Supports users with reduced motion preferences

## 📁 File Structure

```
fsi-website/
├── index.html      # HTML structure and semantic markup
├── style.css       # Complete styling and responsive design
├── script.js       # JavaScript functionality
└── README.md       # This file
```

## 🚀 Getting Started

### Quick Start
1. Extract the files to your desired location
2. Open `index.html` in your web browser
3. That's it! No installation or build process required

### With VS Code
1. Open the folder in VS Code
2. Install "Live Server" extension (optional but recommended)
3. Right-click `index.html` → "Open with Live Server"
4. Your website will open in the browser with auto-refresh on file changes

### Manual Server (Python)
```bash
# Python 3
python -m http.server 8000

# Then open: http://localhost:8000
```

## 💻 Usage

### Navigation
- Click on navigation links to scroll to sections smoothly
- On mobile, tap the hamburger menu icon to open the navigation
- Active section is highlighted in the navbar

### Contact Form
- Fill in the form fields with your information
- Real-time validation shows error messages immediately
- Submit the form to send the message (client-side for now)
- Success message appears after successful submission

### Customization

#### Change Colors
Edit the CSS variables in `style.css`:
```css
:root {
    --primary-color: #0066cc;        /* Main blue */
    --secondary-color: #00d9ff;      /* Cyan accent */
    --bg-dark: #0f172a;              /* Dark background */
    /* ... more variables */
}
```

#### Change Company Information
Edit text in relevant sections in `index.html`:
- Company name and description in hero section
- About content in the about section
- Services descriptions in the services section
- Contact information in the contact section
- Social media links in the footer

#### Change Fonts
Replace font URLs in `index.html`:
```html
<link href="https://fonts.googleapis.com/css2?family=YourFont:wght@400;700&display=swap" rel="stylesheet">
```

## 🔧 Technical Details

### HTML
- Semantic HTML5 structure
- Proper heading hierarchy (h1 → h2 → h3)
- Form with proper labels and ARIA attributes
- Mobile viewport meta tag
- Open Graph meta tags for social sharing

### CSS
- CSS Grid and Flexbox for layout
- Mobile-first responsive design
- CSS custom properties (variables) for theming
- CSS animations and transitions
- No CSS framework (vanilla CSS only)
- Print media queries
- Accessibility-friendly colors and contrast

### JavaScript
- Vanilla JavaScript (no frameworks or dependencies)
- Event delegation for efficiency
- Form validation with regex patterns
- EmailJS client-side form submission
- Intersection Observer for animations
- Mobile menu toggle functionality
- Smooth scrolling implementation
- Keyboard accessibility (ESC key support)

## 📱 Responsive Breakpoints

- **Desktop**: 1200px+ (full layout)
- **Tablet**: 768px - 1199px (adjusted spacing)
- **Mobile**: 480px - 767px (stacked layout)
- **Small Mobile**: Below 480px (minimal padding)
- **Extra Small**: 320px and below (compact layout)

## ✨ Advanced Features

### Animations
- **Fade In Up** - Elements fade and slide up on scroll
- **Fade In Down** - Header elements fade and slide down
- **Float Animation** - Background shapes float smoothly
- **Hover Effects** - Cards lift and colors change

### Performance
- No external JavaScript libraries
- Optimized CSS with minimal reflows/repaints
- Intersection Observer for lazy animations
- Efficient event handling with delegation
- Small file sizes (< 50KB combined)

### Accessibility
- Semantic HTML structure
- ARIA labels for form inputs
- Keyboard navigation support
- Color contrast meets WCAG standards
- Reduced motion media queries
- Proper link focus states

## 🔐 Security

- Input validation and sanitization
- No direct DOM manipulation with user input
- Safe CSS handling
- No eval() or dynamic code execution
- Follows OWASP best practices

## 🎨 Design System

### Color Palette
- **Primary Blue**: #0066cc (main actions)
- **Cyan Accent**: #00d9ff (highlights)
- **Dark Background**: #0f172a (main background)
- **Darker Background**: #0a0e1a (secondary background)
- **Light Text**: #e0e7ff (primary text)
- **Muted Text**: #94a3b8 (secondary text)

### Typography
- **Headlines**: Poppins (bold, 700-800 weight)
- **Body Text**: Inter (regular, 400-600 weight)

### Spacing System
- Base unit: 1rem (16px)
- Sections: 6rem padding (vertical)
- Containers: Max 1200px width

## 📞 Contact Form Integration

This project is integrated with EmailJS and submits form data from the frontend.

### Configured Keys
- Public Key: `-g92D7sGubq8Ykbxm`
- Service Key: `service_fsi`
- Template Key: `template_0vzlhzl`

### Template Parameters Sent
The contact form sends these values to EmailJS:
- `from_name`
- `from_email`
- `reply_to`
- `phone`
- `subject`
- `subject_label`
- `message`
- `to_name`

### ⚠️ IMPORTANT: Fixing Missing Form Values in Emails

If you see only "Name: Email: Message:" without values in your inbox, your EmailJS template is missing variable interpolation.

**Problem**: Template shows labels only, not the actual form values.  
**Solution**: Use `{{variable_name}}` syntax for each field in your EmailJS template.

### EmailJS Template Setup (Step-by-Step)

1. Go to your [EmailJS Dashboard](https://dashboard.emailjs.com/)
2. Click on **Email Templates** → Select your `template_0vzlhzl` template
3. In the **Email Body** section, replace all content with the template below

### Complete EmailJS Email Body Template
Copy and paste this entire text into your EmailJS template's **Email Body** field:

```text
New contact form submission from Fraud Shield India website

========================
SENDER INFORMATION
========================
Name: {{from_name}}
Email: {{from_email}}
Phone: {{phone}}

========================
INQUIRY DETAILS
========================
Subject: {{subject_label}}

MESSAGE
========================

{{message}}

========================

Reply-To: {{reply_to}}
To: {{to_name}}
```

### What Each Variable Contains
- `{{from_name}}` - Visitor's full name
- `{{from_email}}` - Visitor's email address
- `{{reply_to}}` - Reply-to email (same as from_email)
- `{{phone}}` - Visitor's phone number (or "Not provided")
- `{{subject}}` - Subject category code (inquiry, support, sales, partnership, other)
- `{{subject_label}}` - Human-readable subject (General Inquiry, Technical Support, etc.)
- `{{message}}` - Full message text
- `{{to_name}}` - Your team name (Fraud Shield India Team)

### After Updating the Template
1. Save the template in EmailJS dashboard
2. Test by submitting the contact form again
3. Check your inbox — you should now see all form values populated

### Verification Checklist
- ✅ Template contains `{{from_name}}` not just "Name:"
- ✅ Template contains `{{from_email}}` not just "Email:"
- ✅ Template contains `{{message}}` not just "Message:"
- ✅ All variable names are enclosed in double curly braces: `{{variable}}`
- ✅ Template saved in EmailJS dashboard

## 🚀 Deployment

### Netlify
1. Connect your Git repository
2. Set build command: `(none)`
3. Set publish directory: `./`
4. Deploy!

### GitHub Pages
1. Push to GitHub repository
2. Go to Settings → Pages
3. Select main branch as source
4. Your site is live at `username.github.io/repo-name`

### Traditional Hosting
1. Upload all files to your web hosting
2. No build process or installation needed
3. Works immediately

## 📊 Browser DevTools

Open DevTools (F12) to:
- Test responsive design with device emulation
- Check console for logs and errors
- Inspect CSS and DOM structure
- Test form validation

## 🐛 Troubleshooting

### Mobile menu not working
- Ensure JavaScript is enabled
- Check browser console for errors
- Verify script.js is loaded

### Form validation not showing
- Check console for JavaScript errors
- Ensure CSS is loaded properly
- Test with different browser

### Smooth scrolling not working
- Check browser support (all modern browsers supported)
- Verify html { scroll-behavior: smooth; } in CSS
- Test with different link targets

## 📈 Future Enhancements

- Backend API integration for form submission
- Email notifications for contact form
- Blog/News section
- Client testimonials
- Pricing table
- Animated counters for statistics
- Lightbox/Modal for media
- Multi-language support
- Dark mode toggle
- Search functionality

## 📄 License

This website template is created for Fraud Shield India and is ready for commercial use.

## 👨‍💻 Support

For any issues or customization needs:
1. Check this README for solutions
2. Review browser console for error messages
3. Test with different browsers
4. Check responsive design with DevTools

## ✅ Quality Checklist

- ✅ Fully responsive design (mobile, tablet, desktop)
- ✅ Fast loading performance (no external dependencies)
- ✅ SEO optimized (semantic HTML, meta tags)
- ✅ Accessible design (WCAG compliant)
- ✅ Professional appearance (modern dark + blue theme)
- ✅ Form validation (client-side)
- ✅ Mobile menu toggle
- ✅ Smooth scrolling navigation
- ✅ Hover effects and animations
- ✅ Well-commented code
- ✅ Security best practices

---

**Version**: 1.0.0  
**Last Updated**: 2026-04-18  
**Created for**: Fraud Shield India

Enjoy your professional business website! 🛡️
