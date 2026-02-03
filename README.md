# Multi-Step Registration Form

A multi-step registration form built with Next.js 16 and React 19, featuring form validation, localStorage persistence, and image upload.

## Features

- 3-step registration flow with validation
- First name, last name, username (Step 1)
- Email, phone, password with confirmation (Step 2)
- Date of birth and profile image upload (Step 3)
- Real-time validation with error messages
- Data persistence across steps via localStorage
- Responsive design (mobile and desktop)

## Getting Started

### Prerequisites

- Node.js 18+
- npm

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build

```bash
npm run build
npm start
```

## Deployment

### Vercel (Recommended)

1. Push the repository to GitHub
2. Go to [vercel.com](https://vercel.com) and import the repository
3. Vercel will auto-detect Next.js and deploy

### Manual Deployment

```bash
npm run build
npm start
```

## Tech Stack

- Next.js 16
- React 19
- Tailwind CSS 4
- Turbopack
