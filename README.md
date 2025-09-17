# 🎓 E-Learning - Online Courses Platform

A feature-rich online courses platform built with **Next.js**, **ShadCN UI**, **Prisma**, **PostgreSQL**, and powerful modern tools. This project enables users to register, browse courses, watch content, and purchase courses securely, while instructors can manage their content and interact with students. It includes authentication, course videos, reviews, comments, categories, cart functionality, responsive UI, and much more. — with a clean UI, advanced animations, and full authentication.

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
- **Payments:** Stripe Integration (simulated)
- **Charts & Visualization:** recharts
- **Animations & Motion:** GSAP
- **SEO + Accessibility:** Structured metadata, semantic components, responsive design
- **UX Enhancements:** Toasts, Spinners, SEO
- **Extra UI/UX Libraries:**
  - SwiperJS (carousel for courses)
  - React Toastify
  - EmailJS (contact page)

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
- Search for Courses
- Course reviews and comments system
- Instructor dashboard for managing courses

### 🛒 Cart & Checkout
- Add/remove courses from cart
- Dynamic checkout page
- Billing info form with validation

### 🧠 User Experience
- Responsive and accessible UI with **ShadCN** components
- Reusable `Container` layout component
- Scroll effects & parallax animations (`GSAP`)
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

---

## 🔐 Authentication Details

- **Password hashing:** `bcrypt`
- **Token generation:** `jsonwebtoken` (Node) & `jose` (Edge Runtime)
- **Secure Cookies** for token storage
- **Edge-compatible Middleware** with `jose` to authorize protected routes

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
[🔗 View Live Demo](https://ahmed-academy.vercel.app)

## 📸 Screenshots

  #### Visitor Home Page
   <img src="./public/preview/1.webp" >
  <br /> 

   <img src="./public/preview/2.webp" >
  <br /> 

  #### Categories
   <img src="./public/preview/3.webp" >
  <br /> 

  #### Courses
   <img src="./public/preview/4.webp" >
  <br /> 

  #### Instructors
   <img src="./public/preview/5.webp" >
  <br /> 

  #### Instructor Profile
   <img src="./public/preview/6.webp" >
  <br /> 

  #### Course Details
   <img src="./public/preview/7.webp" >
  <br /> 

  #### Course & Instructor Reviews
   <img src="./public/preview/8.webp" >
  <br /> 

  #### Cart
   <img src="./public/preview/9.webp" >
  <br /> 

  #### Checkout
   <img src="./public/preview/10.webp" >
  <br /> 

  #### Sign Up
   <img src="./public/preview/11.webp" >
  <br /> 

  #### About us Stats 
   <img src="./public/preview/12.webp" >
  <br /> 

  #### Course Videos
   <img src="./public/preview/13.webp" >
  <br /> 

  #### Course Comments
   <img src="./public/preview/14.webp" >
  <br /> 

  #### Home Page after Login
   <img src="./public/preview/15.webp" >
  <br /> 

  #### User Profile
   <img src="./public/preview/16.webp" >
  <br /> 

  #### Admin Dashboard
   <img src="./public/preview/17.webp" >
  <br /> 

  #### Admin Courses Control
   <img src="./public/preview/18.webp" >
  <br /> 

  #### Instructors Info
   <img src="./public/preview/19.webp" >
  <br /> 

  #### Manage All Reviews & Comments 
   <img src="./public/preview/20.webp" >
  <br /> 

  #### Instructor Dashboard
   <img src="./public/preview/21.webp" >
