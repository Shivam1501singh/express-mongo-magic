# Sweet Shop Inventory Management

A modern sweet shop inventory management application built with React and TypeScript.

## Features

- **User Authentication**: Login and registration system with admin/user roles
- **Inventory Management**: Add, edit, and delete sweets (admin only)
- **Shopping Cart**: Add items to cart, manage quantities, and checkout
- **Search & Filter**: Search sweets by name and filter by category
- **Stock Alerts**: Visual indicators for low stock items
- **Dashboard Statistics**: View total products, inventory value, and stock alerts

## Tech Stack

- **Frontend**: React 18 + TypeScript
- **Styling**: Tailwind CSS + shadcn/ui components
- **State Management**: React hooks with localStorage persistence
- **Build Tool**: Vite
- **Icons**: Lucide React

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

## Default Users

| Username | Password | Role  |
|----------|----------|-------|
| admin    | admin    | Admin |
| user     | user     | User  |

## Project Structure

```
src/
├── components/       # UI components
│   ├── ui/          # shadcn/ui components
│   ├── Dashboard.tsx
│   ├── LoginForm.tsx
│   ├── Cart.tsx
│   ├── SweetCard.tsx
│   └── SweetForm.tsx
├── hooks/           # Custom React hooks
│   ├── useAuth.ts
│   ├── useCart.ts
│   └── useSweets.ts
├── pages/           # Page components
├── types/           # TypeScript types
└── lib/             # Utility functions
```

## License

MIT
