# CV AI Chatbot & Project Showcase

This is a full-stack portfolio application built with Next.js, designed to showcase my skills and projects in an interactive and engaging way. It features an intelligent AI chatbot that can answer questions about my CV and a dynamic gallery to display my development work.

[![CV AI Chatbot Demo](https://placehold.co/800x400.png?text=Project+Screenshot)](https://your-live-demo-url.com)

## ✨ Features

- **AI-Powered CV Chatbot:** An intelligent assistant, powered by Google's Gemini model via Genkit, that can answer questions about my professional background, skills, and experience.
- **Dynamic Project Showcase:** A clean and modern interface to display a portfolio of projects. Project data is managed via a simple JSON file and served through a Genkit flow, making it easy to update.
- **Responsive & Modern UI:** A sleek, synthwave-inspired theme built with ShadCN UI components and Tailwind CSS, ensuring a great user experience on all devices.
- **Full-Stack Architecture:** Built from the ground up using a modern, full-stack approach with the Next.js App Router.

## 🚀 Tech Stack

- **Framework:** [Next.js](https://nextjs.org/) (App Router)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **UI Components:** [ShadCN UI](https://ui.shadcn.com/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **AI Integration:** [Genkit (Google's Generative AI Toolkit)](https://firebase.google.com/docs/genkit)
- **Deployment:** Ready for deployment on platforms like Vercel or Firebase Hosting.

## 📦 Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

- [Node.js](https://nodejs.org/en/) (version 18 or higher is recommended)
- `npm`, `yarn`, or `pnpm` package manager

### Installation & Setup

1.  **Clone the repository:**
    ```sh
    git clone https://github.com/ishay60/cv-ai-chat.git
    cd cv-ai-chat
    ```

2.  **Install dependencies:**
    ```sh
    npm install
    ```

3.  **Set up environment variables:**
    Create a file named `.env.local` in the root of your project and add your Google AI API key:
    ```env
    GEMINI_API_KEY=your_google_ai_api_key_here
    ```

4.  **Run the development server:**
    ```sh
    npm run dev
    ```

The application will be available at `http://localhost:9002`.

## 📂 Project Structure

```
.
├── src
│   ├── app/                # Next.js pages and layouts
│   │   ├── (main)/
│   │   │   ├── page.tsx    # Main CV chatbot page
│   │   │   └── projects/   # Project showcase page
│   │   └── layout.tsx
│   │
│   ├── ai/                 # Genkit AI flows and configuration
│   │   ├── flows/
│   │   └── genkit.ts
│   │
│   ├── components/         # Reusable React components
│   │   ├── ui/             # ShadCN UI components
│   │   └── ...
│   │
│   ├── data/               # Static data, like projects.json
│   │
│   └── lib/                # Utility functions
│
├── public/                 # Static assets
└── ...                     # Configuration files
```

This structured and informative README should make your project shine on GitHub. Let me know if you'd like any adjustments