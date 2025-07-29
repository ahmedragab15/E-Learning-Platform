# 🎓 E-Learning - Online Courses Platform

A feature-rich online courses platform built with **Next.js**, **ShadCN UI**, **Prisma**, **PostgreSQL**, and powerful modern tools. This project enables users to register, browse courses, watch content, and purchase courses securely, while instructors can manage their content and interact with students. It includes authentication, course videos, reviews, comments, categories, cart functionality, responsive UI, and much more. — with a clean UI, advanced animations, and full authentication.

> 🚧 **Note:** This project is still a **Work in Progress**. I'm actively developing new features and refining the UI.

---

## 🚀 Tech Stack

- **Frontend:** Next.js (App Router), TypeScript, Tailwind CSS, ShadCN UI, 
- **Backend:** Prisma ORM, PostgreSQL
- **Forms & Validation:** React Hook Form, Zod
- **Authentication:**
  - Email/password (JWT, bcrypt, cookies)
  - Google OAuth
  - Role-based auth (User / Instructor / Admin)
- **State Management:** Redux Toolkit + Redux Persist
- **Media & Assets:** Cloudinary or ImageKit (images/videos), WebP Compression
- **Payments:** Stripe Integration (simulated)
- **Charts & Visualization:** Chart.js
- **Animations & Motion:** GSAP, Lenis, Anime.js, Smooth UI
- **SEO + Accessibility:** Structured metadata, semantic components, responsive design
- **Internationalization:** i18next
- **UX Enhancements:** Confetti 🎉, Toasts, Spinners, SEO, Fallback UIs
- **Extra UI/UX Libraries:**
  - SwiperJS (carousel for courses)
  - React Toastify
  - EmailJS (contact page)
  - React Select Country List

---

## 🧩 Key Features

### 🔐 Authentication
- Register, login with form validation (`React Hook Form` + `Zod`)
- Password hashing using `bcrypt`
- JWT token-based auth (persisted in cookies)
- Google OAuth integration
- Protected routes via Edge Middleware using `jose`

### 📚 Courses
- Course categories and filtering
- Dynamic course listings with real data from PostgreSQL
- Course details page with video content and metadata
- Course reviews and comments system
- Instructor dashboard for managing courses

### 🛒 Cart & Checkout
- Add/remove courses from cart
- Dynamic checkout page
- Billing info form with validation
- Stripe payment simulation
- Confetti effect on successful checkout

### 🧠 User Experience
- Responsive and accessible UI with **ShadCN** components
- Reusable `Container` layout component
- Scroll effects & parallax animations (`react-parallax-tilt`, `react-scroll-parallax`, `typed.js`, `GSAP/Lenis/Anime.js`)
- Loading states and fallback UIs (`ldr`, `spinner`, etc.)
- Image optimization & conversion to `.webp`
- Dynamic sliders for courses using `Swiper.js`
- Toast notifications with `react-toastify`

### 👨‍🏫 Instructor Features
- Role-based routing (user vs instructor)
- Account settings page
- Ability to become an instructor
- Course content management
- Comment moderation panel

### ⚙️ Dev & Infrastructure
- PostgreSQL + Prisma for DB and schema
- Seed data generation using `faker`
- Slugified URLs for course details
- Redux Toolkit for global state + `redux-persist`
- Google Cloud or ImageKit/Cloudinary for image and video storage
- Email integration for contact page (`emailjs`)
- SEO-friendly metadata and fallback support
- Internationalization with `i18next`

---

## 🔐 Authentication Details

- **Password hashing:** `bcrypt`
- **Token generation:** `jsonwebtoken` (Node) & `jose` (Edge Runtime)
- **Secure Cookies** for token storage
- **Edge-compatible Middleware** with `jose` to authorize protected routes

📌 _Note: We use `jose` instead of `jsonwebtoken` in `middleware.ts` because the Edge Runtime doesn’t support Node-specific modules like `crypto`. `jose` works perfectly with Web APIs._

---

## 🛠 Development Setup

```bash
# 1. Clone the repo
git clone https://github.com/ahmedragab15/E-Learning-Platform
cd E-Learning-Platform

# 2. Install dependencies
npm install

# Setup environment variables (.env)
# POSTGRES_URL, JWT_SECRET, GOOGLE_CLIENT_ID, GOOGLE_SECRET, etc.

# 3. Set up PostgreSQL and Prisma
npx prisma generate
npx prisma migrate dev --name init
npx prisma db push
npx prisma db seed

# 4. Start the dev server
npm run dev
```

## 🌍 Live Demo
🚧 Coming Soon...

## 📸 Screenshots
🚧 Coming Soon...

## 📬 Contact
Feel free to connect or contribute!

- Ahmed Ragab
- Frontend Developer
- ragabahmed154@gmail.com
- https://ahmedragab.netlify.app/