# LCOA Website

**Visit:** [https://www.url.com](https://www.url.com)

This website has been designed and built for LCOA. It consists of a publicly-accessible webpage for general information and a restricted webpage for members to access more confidential information.

## Technologies Used

**Frontend:**
- [Next.js](https://nextjs.org/) for routing and server-side rendering
- [Tailwind CSS](https://tailwindcss.com/) for styling
- [Lucide Icons](https://lucide.dev/) for icons

**Backend:**
- [Amazon Web Services](https://aws.amazon.com/) for hosting and more

**Other:**
- [GitHub](https://github.com/) for version control

## Project Structure

```
.
├── app
│   ├── portal
│   │   ├── page.tsx            // Main portal page
│   │   ├── account
│   │   │   └── page.tsx        // Account management page
│   │   ├── committee
│   │   │   └── page.tsx        // Committee page
│   │   ├── files
│   │   │   └── page.tsx        // Files page for downloads
│   │   ├── announcement
│   │   │   └── page.tsx        // Single announcement details page
│   ├── auth
│   │   ├── page.tsx
│   │   ├── delete-account
│   │   │   └── page.tsx        // Delete account page
│   │   ├── logout
│   │   │   └── page.tsx        // Logout page
│   │   ├── register
│   │   │   └── page.tsx        // Registration page
│   │   ├── reset-password
│   │   │   └── page.tsx        // Reset password page
│   ├── components
│   │   ├── AuthCard.tsx        // Card component for authentication processes
│   │   ├── Carousel.tsx        // Component for home page slideshow carousel
│   │   ├── footer.tsx          // Footer component
│   │   ├── LinkCard.tsx        // Card component for quick links and files
│   │   └── MainSection.tsx     // Component for sections of home page
│   │   ├── navbar.tsx          // Navbar component
│   │   ├── PersonCard.tsx      // Card component for committee members
│   │   ├── portalnavbar.tsx    // Portal Navbar component
├── public                      // Static assets (images, PDFs, etc.)
│   ├── img
│   │   ├── user-profile.jpg    // Placeholder profile images
│   │   ├── img-1.jpg           // 1st slideshow image
│   │   ├── img-2.jpg           // 2nd slideshow image
│   │   ├── img-3.jpg           // 3rd slideshow image
│   ├── files                   // PDF documents for files section
│   │   ├── blank.pdf
├── README.md                   // Project documentation
├── package.json                // Dependencies and scripts
├── tailwind.config.ts          // Tailwind configuration
└── next.config.ts              // Next.js configuration

```

## Getting Started

**1. Clone the Repository**
```
git clone https://github.com/dan-08smith/lcoa-v2.0.git
cd your-repo-name
```

**2. Install Dependencies**
```
npm install
# or
yarn install
```

**3. Run the Development Server**
```
npm run dev
# or
yarn dev
```

**4. Access the Site**

Open [http://localhost:3000](http://localhost:3000) in your browser to view the project.

**5. Build for Deployment**

Create an optimised build for deployment.
```
npm run build
```