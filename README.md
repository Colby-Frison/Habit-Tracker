# Habit Tracker

A modern habit tracking application built with Next.js, Node.js, and PostgreSQL.

## Tech Stack

- **Frontend**: Next.js with TypeScript
- **Styling**: Tailwind CSS
- **State Management**: Redux Toolkit
- **Backend**: Node.js
- **Database**: PostgreSQL with Prisma ORM
- **Deployment**: Vercel

## Project Structure

```
src/
├── app/                    # Next.js app directory (routes)
│   ├── layout.tsx         # Root layout (imports from frontend)
│   └── page.tsx           # Home page (imports from frontend)
├── backend/
│   ├── services/          # Backend services
│   │   ├── habitService.ts    # Habit-related database operations
│   │   └── supabase.ts       # Supabase client configuration
│   ├── types/            # Backend type definitions
│   └── utils/            # Backend utilities
└── frontend/
    ├── components/        # React components
    │   ├── layouts/      # Layout components
    │   │   └── layout.tsx    # Root layout with metadata
    │   └── pages/        # Page components
    │       └── page.tsx      # Home page component
    ├── hooks/            # Custom React hooks
    ├── services/         # Frontend services
    ├── styles/           # CSS styles
    │   └── globals.css      # Global styles and Tailwind imports
    ├── types/           # Frontend type definitions
    └── utils/           # Frontend utilities
```

### Directory Explanations

- **src/app/**: Next.js app router directory. Contains route files that import and use components from the frontend directory.
  
- **src/backend/**:
  - `services/`: Contains backend logic and database interactions
  - `types/`: TypeScript interfaces and types for backend data
  - `utils/`: Helper functions and utilities for backend operations

- **src/frontend/**:
  - `components/`: React components organized by function
    - `layouts/`: Page layouts and structural components
    - `pages/`: Main page components
  - `hooks/`: Custom React hooks for shared functionality
  - `services/`: Frontend-specific services (API calls, data processing)
  - `styles/`: CSS and styling files
  - `types/`: TypeScript interfaces for frontend data
  - `utils/`: Helper functions for frontend operations

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Set up your PostgreSQL database and update the `.env` file with your database URL:
   ```
   DATABASE_URL="postgresql://user:password@localhost:5432/habit-tracker?schema=public"
   ```

3. Set up your Supabase project and add the credentials to `.env`:
   ```
   NEXT_PUBLIC_SUPABASE_URL="your-supabase-url"
   NEXT_PUBLIC_SUPABASE_ANON_KEY="your-supabase-anon-key"
   ```

4. Run database migrations:
   ```bash
   npx prisma migrate dev
   ```

5. Start the development server:
   ```bash
   npm run dev
   ```

6. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Development Guidelines

- Place new components in the appropriate directory under `src/frontend/components/`
- Keep backend logic separate in `src/backend/`
- Use TypeScript types/interfaces for all data structures
- Follow the established pattern of separating concerns between frontend and backend
- Add new routes by creating directories in `src/app/`

## Features

- Create and track daily habits
- View habit completion statistics
- Responsive design for mobile and desktop
- Clean and intuitive user interface

## Contributing

1. Create feature branches from `main`
2. Follow the established directory structure
3. Ensure all TypeScript types are properly defined
4. Test your changes locally before submitting a PR