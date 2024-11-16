# About Project
The Task Manager is a web application designed that allows users to manage their tasks effectively. It provides a user-friendly interface for creating, editing, deleting, and marking tasks as complete or incomplete.The application aims to enhance productivity by enabling users to prioritize their tasks and categorize them based on various criteria.

# Functionalities of a Task Manager
**1). Task Creation:** Users can add new tasks with specific details such as title and description.<br/>

**2). Task Editing:** Existing tasks can be modified to update their details.<br/>

**3). Task Deletion:** Users can remove tasks that are no longer needed.<br/>

**4). Task Status Management:** Tasks can be marked as completed or inprogress, allowing users to track their progress.<br/>

**5). Task Filtering:** Users can filter tasks based on their status (e.g., all, completed, inprogress).

# Prerequisites
Before we begin, ensure we have the following installed on your machine:<br/>
* Node.js (Recommended: LTS version)<br/>
* npm (Node package manager) or yarn (Alternative to npm)

# Setup and launch process
**1). Clone the Repository**<br/>
       Open your terminal and run the following command to clone the repository:<br/>
       ```
       
       git clone https://github.com/RN18o/Task-Manager.git
       
       ```<br/>

       
**2). Navigate to the Project Directory**<br/>
       Change into the project directory:
       ```
       cd Task-Manager
       ```<br/>

       
**3). Install Dependencies **<br/>
       Install the necessary packages using npm:
       ```
       npm install
       or
       yarn install
       ```<br/>

       
**4). Start the Development Server**<br/>
       After installing the dependencies, you can start the development server with:<br/>
       ```
       npm run dev
       or 
       yarn run dev
       ```<br/>

       
**5). Access the Application**<br/>
      Open your web browser and navigate to:<br/>
      ```
      http://localhost:5173/dashboard
      ```<br/>
      You should see the Task Manager application running.

# Assumptions

**1). User Interface Simplicity:** It was assumed that users prefer a straightforward and intuitive interface for task management. Therefore, the design focused on minimalism, ensuring that users can easily navigate through tasks without unnecessary complexity.<br/>

**2). Single User Functionality:** The application was developed with the assumption that it would primarily serve a single user at a time. This means that features like user authentication and multi-user task management were not implemented, simplifying the overall architecture.<br/>

**3). No Backend Integration:** The initial version of the application assumed that it would operate without a backend server or database. Instead, tasks would be stored in memory or local storage, which simplifies data persistence but limits scalability and multi-device access.<br/>

**4). Local State Management:** The decision to use React's useState for managing task data was based on the assumption that the application would not require complex state management solutions like Redux or Context API. This choice aimed to keep the implementation lightweight and easy to understand for beginners.<br/>

**5). Responsive Design:** The application was designed with the assumption that it would be used on desktop browsers primarily. While responsiveness was considered, mobile optimization was not a primary focus during development. 

# ScreenShot 
![2024-11-16 (1)](https://github.com/user-attachments/assets/e6a6597f-45f8-4f24-9b03-f163ba223d90)








# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
