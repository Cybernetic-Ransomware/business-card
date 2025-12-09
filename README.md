# ⚡ Aleksander Marszałkiewicz - Netrunner Portfolio

![System Status](https://img.shields.io/website?url=https%3A%2F%2Fcr-business-card-single.statichost.page%2F&up_message=ONLINE&down_message=OFFLINE&style=for-the-badge&label=SYSTEM&color=00FF9F)
![Tech Stack](https://img.shields.io/badge/SVELTE_KIT-FF3E00?style=for-the-badge&logo=svelte&logoColor=white)
![TypeScript](https://img.shields.io/badge/TYPESCRIPT-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Tailwind](https://img.shields.io/badge/TAILWIND_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)

> *"High-performance backend logic wrapped in a neon-noir digital experience."*

## 🌐 Transmission Incoming

Welcome to my digital node. This is a **single-page business card (wizytówka)** and portfolio designed with a **Neon Cyberpunk** aesthetic. It serves as a gateway to my professional career as a Backend Python Developer, showcasing my skills in automation, cloud ecosystems, and open-source contributions.

Unlike standard corporate portfolios, this project treats the UI as a terminal into my "Tech DNA"—fast, responsive, and visually distinct.

## 🔮 Key Features

- **Cyberpunk UI/UX:** A dark, immersive interface featuring Neo Emerald highlights (`#00FF9F`), Hyper Blue gradients, and "scanline" aesthetics.
- **Interactive Thermal Katana:** A custom-built, interactive Svelte component allowing users to slice through bamboo with mouse gestures—a nod to precision and sharpness in coding.
- **Tech DNA & Timeline:** Visualized experience path and technology stack (Python, FastAPI, Docker, AWS).
- **Responsive Design:** Optimized for desktop "Netrunners" but fully functional on mobile devices.

## 🛠️ Tech Stack & Architecture

Built on the **FARM** stack principles, adapted for the frontend:

- **Framework:** [SvelteKit](https://kit.svelte.dev/) (Svelte 5 Runes)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
- **Language:** TypeScript
- **Bundler:** Vite
- **Linting:** ESLint + Prettier

## 🚀 Initialization (Dev Mode)

To jack into the system locally:

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/Cybernetic-Ransomware/business-card.git
    cd wz
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Start the development server:**
    ```bash
    npm run dev
    ```

4.  **Open your browser:**
    Navigate to `http://localhost:5173` to view the live signal.

## 🏗️ Build for Production

To compile the source code for deployment:

```bash
npm run build
```

To preview the production build locally:

```bash
npm run preview
```

## ☁️ Deployment (statichost.eu)

This project is optimized for **statichost.eu**. You have two primary ways to deploy:

### Option A: Git Integration (Recommended)
Connect your GitHub repository directly in the statichost.eu panel.
1.  Push your code to the repository.
2.  Statichost will detect the changes, run `npm install` and `npm run build` automatically.
3.  **Build Command:** `npm run build`
4.  **Output Directory:** `build`

### Option B: ZIP Upload (Manual)
If you prefer to build locally and upload the artifact:
1.  Run the build command locally:
    ```bash
    npm run build
    ```
2.  Go to the `build/` directory created in your project root.
3.  **Compress the contents** of the `build/` folder (index.html, _app, etc.) into a `.zip` file.
4.  Upload this `.zip` file directly to the statichost.eu dashboard.

## 📂 Project Structure

```text
src/
├── lib/
│   ├── components/      # UI Elements (Hero, Katana, Timeline)
│   ├── assets/          # Static assets (Favicons, images)
│   └── index.ts         # Library exports
├── routes/
│   ├── +layout.svelte   # Global layout (Matrix/Grid backgrounds)
│   └── +page.svelte     # Main entry point (Single Page Architecture)
└── app.css              # Global Tailwind & Cyberpunk Utility Classes
```

## 🎨 Design System

The visual identity follows the **"Neon Cyberpunk Brief"**:

| Element | Color | Hex |
| :--- | :--- | :--- |
| **Highlight / Glow** | Neo Emerald | `#00FF9F` |
| **Headers** | Hyper Blue | `#1A8CFF` |
| **Accents** | Ember Orange | `#FF7B2A` |
| **Background** | Void Black | `#05060A` |

---
