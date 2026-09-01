# 🌍 RPG Tutor by Hizaki Labs

RPG Tutor is an advanced, AI-driven language learning platform designed to immerse users in highly specific, real-world conversational scenarios. Rather than focusing on rigid vocabulary drills, this application forces users to navigate dynamic, unscripted roleplays with an AI NPC. Upon completing a scenario, a secondary AI agent acts as a strict grammarian, analyzing the user's chat transcript to provide a comprehensive feedback report, specific structural corrections, and localized vocabulary suggestions.

## 🚀 Core Features

* **Massive Scenario Library:** Over 100 meticulously crafted scenarios ranging from everyday travel logistics (e.g., navigating a Tokyo hotel) and complex technical workplace interactions (e.g., pitching Data-Oriented Game Engine Architecture) to completely absurd, comedic situations.
* **Dynamic Language Selection:** Every scenario supports multiple target languages. Users can dynamically swap the primary conversational language directly from the scenario card before initializing the chat.
* **Real-Time NPC Roleplay:** Powered by Groq's high-speed inference engine, the AI stays strictly in character, responding rapidly in the target language without breaking the fourth wall or providing premature English translations.
* **Automated Tutor Review:** A specialized post-scenario API route analyzes the exact transcript, scores the user's conversational fluency, and generates a structured Markdown report detailing grammatical errors and natural phrasing alternatives.
* **Hizaki Labs Design Language:** Fully responsive, modern user interface built with Tailwind CSS v4, utilizing the official Hizaki Labs typography (`Inter` and `Space Grotesk`) and brand color palette.

## 🛠️ Technology Stack

* **Framework:** Next.js 16.3 (App Router)
* **Frontend:** React, Tailwind CSS v4
* **AI Integration:** Groq SDK
* **Language Model:** `openai/gpt-oss-20b` (Routing both conversational NPC logic and strict grammatical analysis)
* **Deployment:** Vercel

## ⚙️ Local Environment Setup

To run this application locally, you must configure your Groq API credentials to enable the AI inference engines.

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Ajxrhaider/rpg-tutor.git
   cd rpg-tutor
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Configure Environment Variables:** 
   Create a `.env.local` file in the root directory and add your Groq API key:
   ```
   GROQ_API_KEY=gsk_your_api_key_here
   ```

4. **Start the development server:**
   ```bash
   npm run dev
   ```
   Open http://localhost:3000 in your browser to launch the application.

## 🗄️ Project Architecture

* **`app/page.tsx`:** The primary frontend application containing the global state, dynamic filtering system, and the expansive 100+ scenario grid.
* **`components/ChatInterface.tsx`:** The active roleplay UI that handles user inputs and manages the state of the ongoing conversation transcript.
* **`components/FeedbackReport.tsx`:** The post-scenario UI that parses and renders the Markdown-based grammatical corrections.
* **`app/api/chat/route.ts`:** The backend Next.js Route Handler responsible for maintaining the NPC persona and interacting with the Groq API during active roleplay.
* **`app/api/review/route.ts`:** The backend Next.js Route Handler that processes the final chat transcript and prompts the AI to act as a strict language tutor.
* **`lib/prompts.ts`:** The centralized repository containing the highly engineered system prompts that enforce the AI's strict behavioral constraints.

## 👨‍💻 About Hizaki Labs

This project is developed and maintained by John Hizaki (Ajxrhaider). Hizaki Labs is a comprehensive tech solutions and creative production hub specializing in web design, software engineering, AI integration, and digital media production.

* **GitHub:** [@Ajxrhaider](https://github.com/Ajxrhaider)
* **Portfolio:** [Hizaki Labs](https://hizaki.dev)