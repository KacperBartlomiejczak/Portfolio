# Portfolio

Personal portfolio website built with Next.js, emphasizing performance, responsive design, and smooth animations.

## Tech Stack

- **Framework:** Next.js 16 (React 19)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4, `clsx`, `tailwind-merge`
- **Animations:** Framer Motion
- **UI Components:** Radix UI (Dialog, Label), Lucide React
- **Form Handling:** React Hook Form
- **Internationalization:** `next-intl`
- **Email Delivery:** EmailJS, Nodemailer
- **Markdown Parsing:** `marked`

## Features

- Fully responsive design using Tailwind CSS.
- Smooth page transitions and micro-interactions with Framer Motion.
- Internationalization support.
- Contact form integration with email delivery.
- Dynamic project showcasing.

## Getting Started

### Prerequisites

Ensure you have [Node.js](https://nodejs.org/) (v20+ recommended) and `pnpm` installed.

### Installation

1. Clone the repository:

   ```bash
   git clone <repository-url>
   ```

2. Navigate into the directory:

   ```bash
   cd Portfolio-1
   ```

3. Install dependencies:
   ```bash
   pnpm install
   ```

### Running the Development Server

Start the application locally:

```bash
pnpm dev
```

The application will be available at `http://localhost:3000`.

### Building for Production

To create an optimized production build:

```bash
pnpm build
```

To start the built application:

```bash
pnpm start
```

## Environment Variables

Create a `.env.local` file in the root of your project and configure the necessary environment variables required for EmailJS/Nodemailer and any other external services.

```env
# Example environment variables
# NEXT_PUBLIC_EMAILJS_SERVICE_ID=
# NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=
# NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=
```

## Available Scripts

- `pnpm dev` - Starts the development server.
- `pnpm build` - Builds the application for production.
- `pnpm start` - Starts the production server.
- `pnpm lint` - Runs ESLint to check for code quality.
- `pnpm analyze` - Builds the application and analyzes the bundle size.
