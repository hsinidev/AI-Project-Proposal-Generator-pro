# ✨ AI Project Proposal Generator

> **Powered by Google Gemini AI & Developed by HSINI MOHAMED**

[![Live Demo](https://img.shields.io/badge/🚀_Live_Demo-Build.doodax.com-blue?style=for-the-badge)](https://build.doodax.com/)

An enterprise-grade, SEO-optimized web application that instantly drafts structured, persuasive project proposals. By leveraging the advanced capabilities of the **Gemini 2.5 Flash** model, this tool transforms basic project goals into professional documentation in seconds.

---

## 🚀 Live Demo

Check out the live application here: **[Build.doodax.com](https://build.doodax.com/)**

---

## 🌟 Key Features

*   **🧠 Advanced AI Engine:** Utilizes Google's Gemini 2.5 Flash model for high-speed, context-aware text generation.
*   **🌌 Immersive UI:** Features a custom-built, multi-colored particle starfield background with nebula effects.
*   **📄 Structured Output:** Automatically formats proposals into Executive Summary, Scope, Deliverables, Timeline, and Budget.
*   **📱 Fully Responsive:** Optimized for all devices with a mobile-first design philosophy using Tailwind CSS.
*   **🔍 SEO Optimized:** Includes full JSON-LD Schema markup, Open Graph tags, and a 3500+ word internal SEO guide.
*   **⚖️ Legal Compliance:** Includes built-in modal templates for Privacy Policy, Terms of Service, and DMCA notices.

---

## 📂 Project Structure

```bash
ai-proposal-generator/
├── public/                 # Static assets
│   ├── favicon.svg         # App Icon
│   ├── robots.txt          # SEO Crawling rules
│   └── sitemap.xml         # Site Map
├── components/             # React Components
│   ├── icons/              # SVG Icons
│   ├── Layout.tsx          # Main Wrapper (Footer, Header, Background)
│   ├── Modal.tsx           # Reusable Modal System
│   ├── ProposalForm.tsx    # Main Logic & Form Input
│   ├── SeoArticleModalContent.tsx # SEO Long-form content
│   └── Starfield.tsx       # Canvas Animation
├── services/
│   └── geminiService.ts    # Google GenAI Integration
├── App.tsx                 # Entry Component
├── index.html              # HTML shell & Meta Tags
├── types.ts                # TypeScript Definitions
└── vite.config.ts          # Build Configuration
```

---

## 🛠️ Technology Stack

*   **Frontend:** React 19, TypeScript
*   **Styling:** Tailwind CSS
*   **AI Integration:** @google/genai SDK
*   **Build Tool:** Vite

---

## ⚙️ Installation

1.  **Clone the repository**
    ```bash
    git clone https://github.com/hsinidev/ai-proposal-generator.git
    ```
2.  **Install Dependencies**
    ```bash
    npm install
    ```
3.  **Environment Setup**
    Create a `.env` file and add your API key:
    ```bash
    API_KEY=your_google_api_key
    ```
4.  **Run Locally**
    ```bash
    npm run dev
    ```

---

## 📬 Contact & Support

**Developed by HSINI MOHAMED**

*   **Website:** [doodax.com](http://doodax.com)
*   **GitHub:** [@hsinidev](https://github.com/hsinidev)
*   **Email:** [hsini.web@gmail.com](mailto:hsini.web@gmail.com)

---

*© 2023 Doodax.com. All Rights Reserved.*
