# 🤖 AI Interview Web App

An intelligent web application that conducts mock interviews based on user-input skills and experience. Built with a modern tech stack to deliver a smooth, responsive, and secure experience.

## 🛠️ Tech Stack

- ⚛️ **React** – Frontend UI library
- 🟦 **TypeScript** – Type-safe JavaScript
- 🎨 **Tailwind CSS** – Utility-first CSS framework
- 🧩 **Shadcn UI** – Pre-styled UI components
- 🔥 **Firebase** – Backend services (Firestore, Hosting, Functions)
- 🔐 **Clerk Auth** – Authentication and user management
- 🧠 **OpenAI API (or custom AI logic)** – For intelligent interview questioning and evaluation

## 🚀 Features

- 🔐 **User Authentication** via Clerk (Sign up, Login, Session Management)
- 🧑‍💼 **User Profiles** – Add personal info, skills, experience
- 🧠 **AI-Conducted Interviews** – Dynamic questions based on profile
- 📊 **Response Evaluation** – Analyze and score user answers
- 📂 **Result Dashboard** – View performance and feedback
- 🧾 **Resume Builder** – Create and export professional resumes
- 📱 **Responsive Design** – Optimized for desktop and mobile

## 📦 Installation

```bash
git clone https://github.com/rudranarayan-01/AI-Interview
cd AI-Interview
npm install
```

## ⚙️ Setup

### 1. Firebase

- Create a Firebase project
- Enable Firestore, Authentication, and Functions
- Replace Firebase config in `/firebase/config.ts`

### 2. Clerk

- Create a Clerk app at [https://clerk.dev](https://clerk.dev)
- Set environment variables:

```bash
VITE_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
VITE_CLERK_SECRET_KEY=your_clerk_secret_key
```

### 3. Environment Variables

```bash
VITE_FIREBASE_API_KEY=your_api
VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_firebase_storage_bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
VITE_FIREBASE_APP_ID=your_app_id
VITE_OPENAI_API_KEY=your_openai_api_key
```

## 🧑‍💻 Scripts

```bash
npm run dev       # Start local development server
npm run build     # Build production-ready app
npm run preview   # Preview production build
```

## 🖼️ UI Components

Designed using **Shadcn UI** with **Tailwind CSS** for seamless styling.

- Custom Buttons, Inputs, Dialogs
- Loading Indicators, Toasts
- Dashboard Layouts and Interview Panels


## 📄 License

MIT License

## 🙌 Contributors

Built with ❤️ by [Rudranarayan Sahu](https://github.com/rudranarayan-01)

## 🔗 Links

- 🔥 Live Demo: [your-live-url.com](https://ai-inter.netlify.app/)
- 🧠 LinkedIn: [Rudranarayan on LinkedIn](https://linkedin.com/in/rudranarayan-sahu-b7b9a6244/)
- 🌐 Portfolio: [akash0101.pythonanywhere.com](https://akash0101.pythonanywhere.com/)

Happy Coding 