Here's the updated `README.md` with placeholders for images for each feature. You can replace the placeholder links with the actual image URLs for each feature.

---

# **Taskydocs - Task Manager App**

**Taskydocs** is a task management application that helps you organize and keep track of your tasks. The app allows users to create, edit, delete, and complete tasks. It also features a search bar to filter tasks, theme switching (light/dark), and responsive design.

## **Features:**

### 1. **Task Management**:
- **Add, Edit, Delete Tasks**: 
  - Add new tasks with a title, description, priority, and due date.
  - Edit or delete tasks as needed.
  - Tasks can be marked as completed, and their status can be updated.
     ![Task Management](https://github.com/user-attachments/assets/922bf04f-7a14-4877-9de8-ac319a2fe4be)
  
  ![image](https://github.com/user-attachments/assets/587fade5-edbd-4dc9-90d4-32abcfb0e70d)


  

  <!-- Add your image link here -->

- **Set Priorities**: 
  - Assign priority levels to each task (High, Medium, Low).
  
  ![Set Priorities](link-to-priority-image.png)  <!-- Add your image link here -->
   ![Task Management] ![image](https://github.com/user-attachments/assets/9f1a492a-ffa2-4833-9af7-77e12169ae5d)

- **Due Dates**: 
  - Assign due dates to tasks, and view tasks based on their due dates (Upcoming, Overdue, Completed).
  
  ![Due Dates](link-to-due-date-image.png)  <!-- Add your image link here -->
   ![Task Management] ![image](https://github.com/user-attachments/assets/9f1a492a-ffa2-4833-9af7-77e12169ae5d)

### 2. **Search Functionality**:
- **Search Tasks**: 
  - Easily search through tasks by title or description.
  - Searched tasks will smoothly transition to the center of the page for visibility.
  
  ![Search Functionality](link-to-search-feature-image.png)  <!-- Add your image link here -->

### 3. **Theme Toggle**:
- **Light and Dark Themes**: 
  - Switch between light and dark themes using a sun/moon icon. The app's background color and text color will adjust accordingly.
  
  ![Theme Toggle](link-to-theme-toggle-image.png)  <!-- Add your image link here -->

### 4. **Responsive Design**:
- **Mobile, Tablet, and Desktop Friendly**: 
  - The app adjusts seamlessly for different screen sizes, ensuring a great user experience across devices.
  
  ![Responsive Design](link-to-responsive-design-image.png)  <!-- Add your image link here -->

---

## **Tech Stack:**
- **Frontend**: React, CSS
- **State Management**: Context API
- **Icons**: React Icons.
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

1. Fork this repository.
2. Clone your forked repository.
3. Create a new branch (`git checkout -b feature-name`).
4. Make changes and commit them (`git commit -am 'Add new feature'`).
5. Push to the branch (`git push origin feature-name`).
6. Create a pull request.


## **Acknowledgments:**

- React for providing a flexible UI framework.
- React Icons for providing the sun/moon icons for theme switching.
- Local Storage API for persisting tasks.

