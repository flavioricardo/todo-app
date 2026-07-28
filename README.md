# To-Do App

This project is a To-Do list application created with React. It allows users to add, filter, mark as completed, and remove tasks. The app also supports theme switching (light/dark) and language selection (Portuguese/English).

**Live:** https://flavioricardo.github.io/todo-app/

## Technologies Used

- **React + Vite**: JavaScript library for building user interfaces, bundled with Vite.
- **Gestalt**: UI component library developed by Pinterest.
- **Firebase**: Authentication and Firestore for cloud persistence when logged in.
- **LocalStorage**: Fallback persistence in the user's browser.
- **Vitest + React Testing Library**: Unit tests.

## Available Scripts

In the project directory, you can run:

### `npm run dev`

Runs the app in development mode with Vite.\
Open [http://localhost:5173](http://localhost:5173) to view it in your browser.

### `npm test`

Runs the Vitest test suite.

### `npm run build`

Builds the app for production to the `dist` folder.

### `npm run deploy`

Publishes the production build to GitHub Pages (`gh-pages` branch).

## To-Do App Features

- **Add Tasks**: Allows adding new tasks with a category and text.
- **Mark as Completed**: Allows marking tasks as completed or not completed.
- **Filter Tasks**: Allows filtering tasks by all, completed, or pending.
- **Search Tasks**: Allows searching tasks by text.
- **Clear Completed Tasks**: Allows removing all tasks that have been marked as completed.
- **Due Dates & Priorities**: Tasks support due dates and priority levels.
- **Theme Switching**: Allows toggling between light and dark themes.
- **Language Selection**: Allows toggling between Portuguese and English languages.
- **Cloud Sync**: Tasks sync to Firestore when authenticated (Firebase Auth).

## Project Structure

- **src/components/TodoApp/**: Main component of the application.
- **src/main.jsx**: Entry point of the React application.

Project state and pending items: [STATE.md](./STATE.md)

## How It Works

The To-Do App uses `useState` to manage the state of tasks, theme, language, etc. `useEffect` is used to persist the state in `localStorage` and retrieve the saved state when the app is loaded.

### Add Task

The `addTask` function adds a new task to the `tasks` state and saves it in `localStorage`.

### Mark as Completed

The `toggleTaskCompletion` function toggles the completion state of a specific task.

### Clear Completed Tasks

The `clearCompletedTasks` function removes all tasks that have been marked as completed.

### Filter and Search Tasks

The `filteredTasks` function filters tasks based on the search term and filter status (all, completed, pending).