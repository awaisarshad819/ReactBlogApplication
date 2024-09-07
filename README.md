# React Blog Application

This repository contains the front-end code for a **Blog Application** built using **React.js**. It is a fully functional application with user authentication, CRUD operations for managing blogs, and seamless integration with the **Appwrite** backend for handling blog data.

## Features

1. **Home, About, Blogs, and Contact Pages**:

   - Fully designed and functional **Home**, **About**, **Blogs**, and **Contact** pages.
   - Navigation via React Router for seamless page transitions.

2. **Header and Footer Components**:

   - Reusable **Header** and **Footer** components displayed on all pages.

3. **Routing (React Router)**:

   - Client-side routing with **React Router** to navigate between different pages.
   - Public and private routes to handle authenticated and unauthenticated users.

4. **Redux for State Management**:

   - **Redux Toolkit** used to manage global state.
   - **Slices** created for handling authentication, blogs, and user-specific data.
   - Redux **Store** to manage blog posts and user session.

5. **Dashboard for Blog Management**:

   - **CRUD Operations**: Logged-in users can create, read, update, and delete their own blog posts.
   - Blog management system for authenticated users with a simple and intuitive UI.

6. **User Authentication**:

   - **Login** and **Signup** functionality to authenticate users.
   - Protected routes for authenticated users to access the dashboard.
   - JWT-based token management for user sessions.

7. **Backend Integration with Appwrite**:
   - **Appwrite** backend is used to manage blogs and users.
   - Separated service layer to handle all API calls and backend interactions (e.g., creating and fetching blogs).
8. **Backend Service Handling**:
   - All backend communication is done through a **separate service layer** for a clean and modular codebase.
   - API service handles all CRUD operations, authentication, and user management.

## Technologies Used

- **React.js**: Front-end framework
- **Redux Toolkit**: State management
- **React Router**: Client-side routing
- **Tailwind CSS**: Styling
- **Appwrite**: Backend for blog management and user authentication
- **Axios**: For making HTTP requests
- **JavaScript (ES6+)**: Core language

## Key Features Breakdown

- **Home Page**: Overview of the blog application.
- **About Page**: Information about the application.
- **Blogs Page**: Lists all published blogs.
- **Contact Page**: Contact form to get in touch.
- **Dashboard**: Manage blogs for authenticated users with options to add, update, delete, and view blogs.

## Authentication & Authorization

- **Login**: Existing users can log in using their email and password.
- **Signup**: New users can register and start posting blogs.
- **Protected Routes**: Certain routes are only accessible to authenticated users (e.g., the dashboard).
- **Logout**: Users can securely log out, clearing their session and tokens.

## Future Enhancements

- **Commenting System**: Allow users to comment on blog posts.
- **Search and Filter**: Add search functionality to filter blogs.
- **User Profile**: A profile page for users to manage their account settings.
- **Improved SEO**: Implement better SEO practices to improve search engine visibility.

## License

This project is licensed under the MIT License.

## Contact

- **Name**: Muhammad Awais Arshad
- **GitHub**: [awaisarshad819](https://github.com/awaisarshad819)
- **Email**: [awaisarshad819@gmail.com](mailto:awaisarshad819@gmail.com)
- **LinkedIn**: [Muhammad Awais Arshad](https://www.linkedin.com/in/muhammadawais-arshad/)

Thank you for checking out this project!
