

# **Taskydocs - Task Manager App**

**Taskydocs** is a task management application that helps you organize and keep track of your tasks. The app allows users to create, edit, delete, and complete tasks. It also features a search bar to filter tasks, theme switching (light/dark), and responsive design.

## **Features:**

### 1. **Task Management**:
- **Add, Edit, Delete Tasks**: 
  - Add new tasks with a title, description, priority, and due date.
  - Edit or delete tasks as needed.
  - Tasks can be marked as completed, and their status can be updated.
     ![Task Management](https://github.com/user-attachments/assets/922bf04f-7a14-4877-9de8-ac319a2fe4be)
    ![Task Management] ![image](https://github.com/user-attachments/assets/9f1a492a-ffa2-4833-9af7-77e12169ae5d)
  
  


  

  <!-- Add your image link here -->

- **Set Priorities**: 
  - Assign priority levels to each task (High, Medium, Low).
  - ![image](https://github.com/user-attachments/assets/587fade5-edbd-4dc9-90d4-32abcfb0e70d)
  
   <!-- Add your image link here -->
   

- **Due Dates**: 
  - Assign due dates to tasks, and view tasks based on their due dates (Upcoming, Overdue, Completed).
  
   <!-- Add your image link here -->
  ![image](https://github.com/user-attachments/assets/eaddca91-aacd-4af7-96b8-5e317fb6d7f5)


### 2. **Search Functionality**:
- **Search Tasks**: 
  - Easily search through tasks by title or description.
  - Searched tasks will smoothly transition to the center of the page for visibility.
  
 
  ![image](https://github.com/user-attachments/assets/c01b7ec0-6564-4105-9d6c-58f0a034e7bf)


### 3. **Theme Toggle**:
- **Light and Dark Themes**: 
  - Switch between light and dark themes using a sun/moon icon. The app's background color and text color will adjust accordingly.
  
![image](https://github.com/user-attachments/assets/4c18f58d-f9cb-4f2a-be46-72b798aa85a3)


### 4. **Responsive Design**:
- **Mobile, Tablet, and Desktop Friendly**: 
  - The app adjusts seamlessly for different screen sizes, ensuring a great user experience across devices.
  
  ![image](https://github.com/user-attachments/assets/63cfd1d4-04f0-4775-a3b3-f819f9afaf2d)


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

