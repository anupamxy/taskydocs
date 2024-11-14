Here’s a detailed `README.md` for your project, which is a **Task Manager App** that supports themes, search functionality, and task management features:

---

# **Taskydoce - Task Manager App**

**Taskify** is a task management application that helps you organize and keep track of your tasks. The app allows users to create, edit, delete, and complete tasks. It also features a search bar to filter tasks, theme switching (light/dark), and responsive design.

## **Features:**
- **Task Management**:
  - Add, edit, and delete tasks
  - Mark tasks as completed or incomplete
  - Set priorities for tasks (High, Medium, Low)
  - Set due dates for tasks
  - View tasks by status (Upcoming, Overdue, Completed)
  
- **Search Functionality**:
  - Search tasks by title or description
  - Highlight searched task with smooth transition animation
  
- **Theme Toggle**:
  - Switch between light and dark themes with a sun/moon icon

- **Responsive Design**:
  - Fully responsive design that works on mobile, tablet, and desktop devices

## **Tech Stack:**
- **Frontend**: React, CSS
- **State Management**: Context API
- **Icons**: React Icons (`FaSun`, `FaMoon`)
- **Local Storage**: Stores tasks locally on the user's device

## **Installation Instructions:**

1. Clone the repository to your local machine:

```bash
git clone https://github.com/your-username/taskify.git
cd taskify
```

2. Install the dependencies using npm:

```bash
npm install
```

3. Start the development server:

```bash
npm start
```

4. Open your browser and navigate to `http://localhost:3000` to see the app in action.

## **Usage:**

- **Adding a Task**: 
  - Enter task details (title, description, priority, due date) in the form and click "Add Task".
  
- **Editing a Task**: 
  - Click the edit icon (✏️) to make changes to a task's title, description, priority, or due date.
  
- **Completing a Task**: 
  - Mark a task as complete by clicking the checkbox. Completed tasks will be highlighted with a green background.
  
- **Deleting a Task**: 
  - Click the delete icon (❌) to remove a task from the list.

- **Search**: 
  - Type in the search bar to filter tasks by their title or description. The searched task will smoothly transition to the center of the page.
  
- **Theme Toggle**: 
  - Click the sun/moon icon to switch between light and dark themes. The background color and text will adjust accordingly.

## **Screenshots:**

### Light Theme:
![Light Theme](link-to-screenshot-light-theme.png)

### Dark Theme:
![Dark Theme](link-to-screenshot-dark-theme.png)

## **File Structure:**

```bash
├── src/
│   ├── components/                # Reusable UI components
│   │   ├── TodoForm.js            # Form for adding tasks
│   │   ├── TodoItem.js            # Represents each task
│   │   ├── Search.js              # Search functionality
│   ├── context/                   # Context for state management
│   │   └── TodoContext.js         # Context for managing tasks
│   ├── App.js                     # Main App component
│   ├── App.css                    # Global styles
├── package.json                   # Project dependencies and scripts
└── README.md                      # Project documentation
```

## **Contributing:**

1. Created my new repo
2. Added readme and basic templeate feature
3. Create a new branch (`git checkout -b feature-name`).
4. Make changes and commit them (`git commit -am 'Add new feature'`).
5. Push to the branch (`git push origin feature-name`).
6. Create a pull request.


## **Acknowledgments:**

- React for providing a flexible UI framework.
- React Icons for providing the sun/moon icons for theme switching.
- Local Storage API for persisting tasks.

---

This `README.md` covers all the key details about your project, from features to installation instructions. You can further customize it by adding screenshots or links for a more comprehensive guide.

