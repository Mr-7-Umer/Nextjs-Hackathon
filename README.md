# **Furniro - Modern Furniture eCommerce Website**

## **Overview**

Furniro is a modern, responsive eCommerce web application designed for furniture shopping. It features a clean and minimalistic design with smooth navigation and functionality, ensuring an excellent user experience. The website includes a homepage, shop page, product listings, contact page, and footer with quick links and essential company information.

---

## **Features**

- **Responsive Design**: Fully responsive and mobile-friendly layout for seamless browsing across all devices.
- **Home Section**: Beautiful hero section with a modern and minimalistic design.
- **Shop Page**:
  - Product listings with images, names, descriptions, and prices.
  - Pagination for browsing products in chunks.
- **Contact Page**:
  - User-friendly contact form with fields for name, email, subject, and message.
  - Displays essential contact details like address, phone number, and working hours.
- **Footer**:
  - Includes company address, quick links, and newsletter subscription.
  - Key benefits (e.g., high quality, warranty protection, free shipping, and 24/7 support).
- **Optimized Performance**: Tailwind CSS for fast and efficient styling.
- **Reusable Components**: Modular and reusable components to ensure scalability and maintainability.
- **Cross-Browser Compatibility**: Tested across modern browsers.

---

## **Technology Stack**

- **Frontend Framework**: [Next.js](https://nextjs.org/) - for server-side rendering and optimized performance.
- **CSS Framework**: [Tailwind CSS](https://tailwindcss.com/) - for modern and efficient styling.
- **Icons**: React Icons for enhanced visual elements.
- **Image Optimization**: Next.js Image component for better performance.
- **Deployment**: Ready for deployment to platforms like Vercel, Netlify, or any static hosting service.

---

## **Project Structure**

```
FURNIRO
├── public/
│   ├── images/ (Product and UI-related images)
├── src/
│   ├── components/
│   │   ├── Header.tsx (Navigation bar)
│   │   ├── Footer.tsx (Footer with links and details)
│   │   ├── Hero.tsx (Hero section for homepage)
│   │   ├── Products.tsx (Product grid section)
│   │   ├── ShopBlowHero.tsx (Shop filters and sorting options)
│   │   ├── Slides.tsx (Carousel or slide component)
│   │   ├── SubHero.tsx (Subsections for highlighting content)
│   ├── app/
│   │   ├── contact/ (Contact page folder with contact.tsx)
│   │   ├── shop/ (Shop page folder with shop.tsx)
│   ├── globals.css (Global styles with Tailwind CSS)
├── README.md (Project documentation)
├── package.json (Dependencies and scripts)
```

---

## **Getting Started**

### Prerequisites
Ensure you have the following installed on your machine:
- [Node.js](https://nodejs.org/) (version 16 or higher)
- npm or yarn package manager

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/furniro.git
   cd furniro
   ```
2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Run the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open the app in your browser:
   ```
   http://localhost:3000
   ```

---

## **Deployment**

To deploy the application:
1. Build the production-ready files:
   ```bash
   npm run build
   # or
   yarn build
   ```

2. Start the production server:
   ```bash
   npm start
   # or
   yarn start
   ```

3. Deploy to platforms like [Vercel](https://vercel.com/) or [Netlify](https://www.netlify.com/).

---

## **Screenshots**

### **Homepage**
![Homepage](./public/images/homepage-screenshot.png)

### **Shop Page**
![Shop Page](./public/images/shop-screenshot.png)

### **Contact Page**
![Contact Page](./public/images/contact-screenshot.png)

---

## **Future Improvements**

- Add user authentication for personalized shopping experiences.
- Enhance product filtering and sorting options.
- Implement payment gateway integration for checkout.
- Add customer reviews and ratings for products.
- Create an admin panel for managing products and orders.

---

## **Contributing**

We welcome contributions from the community! To contribute:
1. Fork the repository.
2. Create a new branch:
   ```bash
   git checkout -b feature-name
   ```
3. Commit your changes:
   ```bash
   git commit -m "Add new feature"
   ```
4. Push the changes:
   ```bash
   git push origin feature-name
   ```
5. Open a pull request.

---

## **License**

This project is licensed under the [MIT License](./LICENSE).

---

## **Contact**

For queries or support, feel free to reach out:
- **Email**: support@furniro.com
- **Website**: [Furniro Official Website](https://furniro.com)
- **Phone**: +1 (123) 456-7890

---

Thank you for checking out Furniro! ✨
