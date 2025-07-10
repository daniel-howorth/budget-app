# Budget Tracker App

A clean, modular budgeting app built with React. This app allows users to create budgets, track categorized and miscellaneous expenses, and view overall spending.

---

## Features

- Create and delete **budgets** and associated **expenses**
- Record **miscellaneous (uncategorized)** expenses
- Real-time calculation of **expenditures vs. budget limits**
- Track total expenditure
- Data saved and persists between sessions
- Dynamic UI with modals, progress bars, and responsive layout
- Accessible components and keyboard-friendly navigation

---

## Tech Stack

- **React** (with hooks & contexts)
- **CSS Modules** for scoped styling
- **Vite** for fast development builds
- Unstyled components from **HeadlessUI** and **Radix Primitives**

---

## Key Technical Decisions

### Component Composition

- Reusable, low-level components such as `LabeledInput`, `CardActions`, and `PrimaryButton` used to compose new components, demonstrating **composition over inheritance**.
- Components are small, focused, and declarative — following React best practices.

### Context-Based State Management

- Budget and modal logic is managed via **context providers**, decoupling UI presentation from state.
- Promotes clean separation of concerns and centralised state management.

### Immutable State Updates

- Budgets saved as plain data in state and are updated immutably via **pure utility functions**.
- Avoids mutation bugs and encourages maintainability.

### Declarative Logic

- Data transformations, such as calculating total budget expenditure and overall expenditure, are performed using **declarative utility functions**, not internal object methods.
- This aligns with React's declarative paradigm, and promotes functional programming over OOP.

### Unstyled Component Libraries

- Unstyled Modal and Progress Bar components, with baked in accessbility, were used from the **HeadlessUI** and **Radix Primitives** libraries.
- This promotes code reuse, and ensures accessibility for keyboard and screen-reader users.

### Defensive Programming

- Functions include safeguards to handle unexpected inputs or edge cases (e.g., optional chaining, type checks, default fallbacks), improving app robustness.

---

## Key Learnings

This project reinforced major frontend concepts:

- The importance of **keeping state immutable and serializable**
- How **declarative, functional logic** supports clean, maintainable code
- Shifted from **OOP-centric thinking** to the **functional programming model**
- The benefits of **composable UI** for scalable design
- How React's **Context API** facilitates **Separation of Concerns**
