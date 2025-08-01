# Full-Stack Workflow Automation SaaS 🚀

![Next.js](https://img.shields.io/badge/Next.js-14-black?style=for-the-badge&logo=next.js&logoColor=white)
![Prisma](https://img.shields.io/badge/Prisma-3982CE?style=for-the-badge&logo=prisma&logoColor=white)
![Stripe](https://img.shields.io/badge/Stripe-626CD9?style=for-the-badge&logo=stripe&logoColor=white)
![Clerk](https://img.shields.io/badge/Clerk-8C52FF?style=for-the-badge&logo=clerk&logoColor=white)
![Neon](https://img.shields.io/badge/Neon-0EED9A?style=for-the-badge&logo=neon&logoColor=black)

A complete B2C SaaS application that allows users to build powerful automation workflows, connecting their favorite apps like Google Drive, Slack, Discord, and Notion.

What makes this project unique? **All third-party connections were built from scratch!** 😉 We intentionally avoided pre-built integration libraries to demonstrate the deep engineering required to handle OAuth, webhooks, and API interactions in a real-world product.

![placeholder](https://aceternity.com/images/products/image/remix-run-template.png)
*(Image: Placeholder for a screenshot of the workflow builder)*

---

## ✨ Features

### 🤖 Core Automation
* **Automation Flows**: Create powerful, multi-step automation workflows.
* **Trigger & Action System**: Define a trigger event (e.g., new file in Google Drive) and a sequence of actions that follow.
* **Custom Notifications**: Send custom messages to Slack and Discord channels or users.
* **Database Integration**: Automatically create new entries in a Notion database as part of a flow.

### 🎨 Advanced Workflow Builder UI
* **Drag & Drop Interface**: An intuitive, node-based canvas for building workflows.
* **Infinite Canvas**: Never run out of space for your complex automations.
* **Mini Map**: Easily navigate large and complex workflows.
* **Redesigned Nodes**: Beautiful and clear nodes to represent triggers and actions.
* **Expandable Sidebar**: A draggable and expandable sidebar for managing nodes and settings.
* **Stunning UI**: Built with **Aceternity UI** and **Shadcn UI** for a modern, best-in-class user experience.
* **Light & Dark Mode**: Seamlessly switch between themes.

### 💼 SaaS & Platform
* **Stripe Subscriptions**: Charge users with recurring monthly subscriptions.
* **Credit-Based Billing**: Implement a pay-as-you-go model where users consume credits for actions.
* **Secure Authentication**: User sign-up, sign-in, and management powered by Clerk.
* **Google Drive Integration**: Connect a user's Google Drive and watch for file changes in real-time.
* **Functioning Landing Page**: A beautiful, responsive landing page to attract customers.

---

## 🛠️ Tech Stack

* **Framework**: Next.js 14 (with App Router)
* **Language**: TypeScript
* **Styling**: Tailwind CSS
* **UI Components**: Aceternity UI, Shadcn UI
* **Database ORM**: Prisma
* **Database**: Neon (Serverless Postgres)
* **Authentication**: Clerk
* **Payments**: Stripe
* **File Uploads**: Uploadcare
* **Local Development**: `ngrok` for testing webhooks

---

## 🚀 Getting Started

### Prerequisites
* Node.js & npm
* A Clerk account for authentication.
* A Google Cloud Platform project with OAuth credentials enabled.
* A Stripe account with API keys.
* A Neon account for the database.
* An Uploadcare account for file handling.

### Installation

1.  **Clone the repository:**
    ```bash
    git clone <your-repository-url>
    cd <repository-name>
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Setup environment variables:**
    Create a `.env.local` file in the root and add the necessary API keys and secrets from the services listed in the prerequisites.

    ```env
    # Clerk
    NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
    CLERK_SECRET_KEY=

    # Stripe
    STRIPE_SECRET_KEY=
    NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=

    # Neon Database
    DATABASE_URL=

    # Google OAuth
    GOOGLE_CLIENT_ID=
    GOOGLE_CLIENT_SECRET=

    # etc...
    ```

4.  **Run the development server:**
    ```bash
    npm run dev
    ```
    The application will be available at `http://localhost:3000`.

---
