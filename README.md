# To-Do App

This project is a To-Do list application created with React. It allows users to add, filter, mark as completed, and remove tasks. The app also supports theme switching (light/dark) and language selection (Portuguese/English).

## Technologies Used

- **React**: JavaScript library for building user interfaces.
- **Gestalt**: UI component library developed by Pinterest.
- **LocalStorage**: Used to persist data in the user's browser.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## To-Do App Features

- **Add Tasks**: Allows adding new tasks with a category and text.
- **Mark as Completed**: Allows marking tasks as completed or not completed.
- **Filter Tasks**: Allows filtering tasks by all, completed, or pending.
- **Search Tasks**: Allows searching tasks by text.
- **Clear Completed Tasks**: Allows removing all tasks that have been marked as completed.
- **Theme Switching**: Allows toggling between light and dark themes.
- **Language Selection**: Allows toggling between Portuguese and English languages.

## Project Structure

- **src/components/TodoApp/TodoApp.js**: Main component of the application that contains all the logic and user interface.
- **src/index.js**: Entry point of the React application.

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