# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

# Healthcare Appointment Booking System

## 🛠 Tools & Libraries Used

### Core Technologies
- **React** (v18+) - Frontend framework
- **React Router** (v6) - Client-side routing
- **Context API** - State management
- **CSS Modules** - Component-scoped styling

### UI Components
- **React Icons** - Icon library
- **date-fns** - Date formatting utilities

### Development Tools
- **JSON Server** - Mock backend API
- **Faker.js** - Mock data generation

## 🧩 Challenges Faced & Solutions

### 1. Complex Form Validation
**Challenge**: Implementing comprehensive client-side validation for appointment booking while maintaining good UX.

**Solution**:
- Created custom validation hooks
- Implemented real-time field validation
- Added clear error messaging with visual feedback
- Prevented invalid form submissions

### 2. Responsive Calendar View
**Challenge**: Displaying doctor availability across different screen sizes.

**Solution**:
- Developed mobile-first calendar component
- Implemented CSS Grid for flexible layout
- Added touch-friendly time slot selection
- Optimized performance with memoization

### 3. State Management
**Challenge**: Sharing booking data across multiple components.

**Solution**:
- Created AppContext for global state
- Designed efficient reducer logic
- Implemented local storage persistence
- Optimized re-renders with useMemo

### 4. Mock Data Integration
**Challenge**: Generating realistic doctor data with varied availability.

**Solution**:
- Used Faker.js for profile generation
- Created custom availability algorithm
- Implemented JSON Server endpoints
- Added error simulation for testing