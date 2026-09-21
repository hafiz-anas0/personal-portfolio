# Hafiz Anas Majid — Personal Portfolio

A modern, responsive developer portfolio built with **Next.js, TypeScript, Tailwind CSS, MongoDB, and JWT authentication**.

The portfolio showcases my skills, projects, professional experience, education, certifications, and contact information, with a focus on **AI, full-stack development, MERN, and modern web technologies**.

🌐 **Live Website:** https://hafizanasmajid.vercel.app/

---

## ✨ Features

* 🎨 Modern, responsive portfolio design
* ⚡ Built with Next.js App Router
* 📱 Fully responsive across desktop, tablet, and mobile
* 🔐 JWT-based authentication
* 👤 User signup and login
* 🚪 Secure logout functionality
* 🍪 HTTP-only authentication cookies
* 🗄️ MongoDB database integration
* 📄 Resume download
* 🖼️ Project image gallery/modal
* 🧭 Smooth section navigation
* 📌 Active navigation section detection
* 🔍 SEO optimized
* 🗺️ Dynamic sitemap
* 🤖 Robots.txt
* 🌐 Open Graph metadata
* 🎯 Custom favicon
* 📊 Google Search Console integration
* 🚀 Deployed with Vercel

---

## 🛠️ Tech Stack

### Frontend

* **Next.js 16**
* **React**
* **TypeScript**
* **Tailwind CSS**
* **Lucide React**
* **Next/Image**
* **Next/Font**

### Backend

* **Next.js API Routes**
* **Node.js**
* **MongoDB**
* **Mongoose**
* **JWT**
* **bcryptjs**

### Development & Deployment

* **Git**
* **GitHub**
* **Vercel**
* **ESLint**
* **Google Search Console**

---

## 📂 Project Structure

```text
personal-portfolio/
│
├── public/
│   ├── images/
│   ├── resume/
│   │   └── Hafiz_Muhammad_Anas_Majid.pdf
│   ├── favicon.ico
│   ├── apple-touch-icon.png
│   └── ...
│
├── src/
│   │
│   ├── app/
│   │   ├── api/
│   │   │   ├── auth/
│   │   │   │   ├── login/
│   │   │   │   ├── logout/
│   │   │   │   ├── me/
│   │   │   │   └── signup/
│   │   │   │
│   │   │   └── test/
│   │   │
│   │   ├── login/
│   │   ├── signup/
│   │   ├── robots.ts
│   │   ├── sitemap.ts
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   ├── not-found.tsx
│   │   └── globals.css
│   │
│   ├── components/
│   │   ├── auth/
│   │   ├── layout/
│   │   ├── sections/
│   │   └── ui/
│   │
│   ├── context/
│   │   └── AuthContext.tsx
│   │
│   ├── data/
│   │   └── ...
│   │
│   ├── lib/
│   │   └── mongodb.ts
│   │
│   ├── models/
│   │   └── User.ts
│   │
│   └── services/
│       └── auth.ts
│
├── .env.local
├── .gitignore
├── eslint.config.mjs
├── next.config.ts
├── package.json
├── postcss.config.mjs
├── tsconfig.json
└── README.md
```

---

## 🔐 Authentication

The portfolio includes a complete authentication flow designed to demonstrate full-stack development capabilities.

### Signup

Users can create an account using:

* Full name
* Email address
* Password
* Password confirmation

Passwords are hashed before being stored in MongoDB using **bcryptjs**.

### Login

Users can authenticate using their email and password.

The backend:

1. Validates the request.
2. Finds the user in MongoDB.
3. Compares the password using bcrypt.
4. Generates a JWT.
5. Stores the JWT in an HTTP-only cookie.
6. Returns the authenticated user's information.

### Logout

The logout endpoint removes the authentication cookie and clears the user session on the client.

### Authentication Context

The application uses a React `AuthContext` to maintain authentication state throughout the application.

It handles:

* Current user
* Authentication loading state
* User session checking
* Logout
* Refreshing user information

---

## 🗄️ Database

MongoDB is used to store user information.

The project uses **Mongoose** for database modeling and connection management.

Example user structure:

```text
User
├── _id
├── name
├── email
├── password
└── timestamps
```

The MongoDB connection is handled through:

```text
src/lib/mongodb.ts
```

---

## 🔑 Environment Variables

Create a `.env.local` file in the project root:

```env
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
```

### Important

Never commit `.env.local` or any secret credentials to GitHub.

Make sure it is included in `.gitignore`:

```gitignore
.env*
```

For production deployment, add the same environment variables through your Vercel project's environment variable settings.

---

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/hafiz-anas0/personal-portfolio.git
```

Navigate into the project:

```bash
cd personal-portfolio
```

---

### 2. Install dependencies

```bash
npm install
```

---

### 3. Configure environment variables

Create:

```text
.env.local
```

Add:

```env
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
```

---

### 4. Start the development server

```bash
npm run dev
```

Open:

```text
http://localhost:3000
```

---

## 🧪 Available Scripts

### Development

```bash
npm run dev
```

Starts the Next.js development server.

### Production Build

```bash
npm run build
```

Creates an optimized production build.

### Production Server

```bash
npm run start
```

Starts the application using the production build.

### Lint

```bash
npm run lint
```

Runs ESLint to identify code-quality and style issues.

---

## 🌐 Deployment

The project is deployed using **Vercel**.

### Production URL

https://hafizanasmajid.vercel.app/

The deployment is connected to the GitHub repository, so changes pushed to the production branch can be automatically deployed by Vercel.

### Production Environment Variables

The following variables must be configured in Vercel:

```text
MONGODB_URI
JWT_SECRET
```

---

## 🔎 SEO

The portfolio includes several SEO features to improve discoverability by search engines.

### Included

* Page title
* Meta description
* Open Graph metadata
* Social sharing image
* Canonical production URL
* `robots.txt`
* XML sitemap
* Google Search Console verification
* Structured metadata

The project is also associated with relevant professional keywords such as:

* Hafiz Anas Majid
* Hafiz Muhammad Anas Majid
* AI Developer
* Full-Stack Developer
* MERN Stack Developer
* Next.js Developer
* React Developer
* Machine Learning
* Generative AI
* P2P Clouds
* ML Bench

### Sitemap

```text
https://hafizanasmajid.vercel.app/sitemap.xml
```

### Robots

```text
https://hafizanasmajid.vercel.app/robots.txt
```

---

## 📱 Responsive Design

The portfolio is designed to work across:

* Desktop
* Laptop
* Tablet
* Mobile

The navigation automatically adapts to smaller screens with a mobile menu.

---

## 🎨 Design

The design focuses on:

* Minimalism
* Clean typography
* High contrast
* Modern UI
* Subtle animations
* Responsive layouts
* Professional developer branding

The visual identity uses the **HAM.** monogram:

```text
HAM.
```

with a blue accent representing the dot.

---

## 📄 Resume

The portfolio provides a downloadable resume directly from the website.

The resume is stored in:

```text
public/resume/
```

and can be accessed through the Resume button in the navigation.

---

## 🖼️ Project Gallery

Projects can contain multiple screenshots.

The portfolio includes an interactive image modal with:

* Previous/next navigation
* Keyboard arrow navigation
* Escape-to-close
* Image counter
* Responsive image display

---

## 📌 Main Sections

The homepage contains:

### Hero

Introduction and developer branding.

### About

Background, interests, and development focus.

### Skills

Technologies and development skills.

### Projects

Selected development and AI projects.

### Experience

Professional and internship experience.

### Education

Academic background.

### Certifications

Relevant certifications and courses.

### Contact

Ways to get in touch.

---

## 💼 Professional Focus

My current development interests include:

* Artificial Intelligence
* Generative AI
* Machine Learning
* Full-Stack Development
* MERN Stack
* Next.js
* React
* Node.js
* MongoDB
* REST APIs
* AI-powered applications
* LLM integration

---

## 📈 Future Improvements

Planned improvements include:

* [ ] Custom domain
* [ ] Contact form with email delivery
* [ ] Analytics
* [ ] Dark mode
* [ ] Blog / technical writing section
* [ ] More AI-powered portfolio features
* [ ] Additional project case studies
* [ ] Improved accessibility
* [ ] Performance optimization

---

## 👨‍💻 About Me

I'm **Hafiz Muhammad Anas Majid**, a Computer Science student and AI & Full-Stack Developer focused on building modern web applications and integrating AI/ML capabilities into practical software products.

My development experience includes **Next.js, React, Node.js, MongoDB, Firebase, Tailwind CSS, Python, Machine Learning, and Generative AI**.

I enjoy building complete products—from designing the frontend and developing APIs to integrating databases, authentication, and AI services.

---

## 🔗 Connect With Me

**Portfolio**

https://hafizanasmajid.vercel.app/

**LinkedIn**

https://linkedin.com/in/hafiz-m-anas-majid-256359300

**GitHub**

https://github.com/hafiz-anas0

**Email**

[hafizanasmajid2006@gmail.com](mailto:hafizanasmajid2006@gmail.com)

---

## 📜 License

This project is primarily a personal portfolio and branding project.

The source code is publicly available for learning and reference, but personal content, branding, images, resume, and other personal assets should not be reused without permission.

---

## ⭐ Acknowledgements

Built with:

* Next.js
* React
* TypeScript
* Tailwind CSS
* MongoDB
* Mongoose
* JWT
* Vercel

---

**Built by Hafiz Muhammad Anas Majid**

HAM.
