# YEngineers

This is the Fullstack Application for YEngineers, built with MongoDB, Express.js, ReactJS, and Node.js. The application helps administrators manage children, parents, groups, programs, attendance, and payments for educational activities in a structured and efficient way.
---

##  Frontend Repository
The frontend for this project is available here: [YEngineers Frontend Repository](https://github.com/Choucheneeee/Young-Engineers-Front.git)

---

##  Live Demo
Access the application here: https://young-engineers-front-git-chouchene-choucheneeees-projects.vercel.app/login
---

## Project Timeline

This project was completed within an impressive 12-hour timeframe through efficient collaboration and a clear division of responsibilities:

**Frontend Development:**


    -Ahmed Baya: Responsible for UI/UX design and implementation of specific frontend components and pages.
    -Dheker Kraiem: Contributed to UI/UX design and developed additional frontend pages.
**Backend Development (MVC Architecture) and Partial Frontend**:

    -Rayen Ben Hassen: Implemented the backend logic using the MVC architecture and made 
    the frontend dynamic by integrating backend data.
    -Chouchen Med Amine: Developed core backend features following the MVC pattern, 
    dynamically integrated frontend components with backend data, and ensured seamless connectivity.
    
**Deployment**:

        Chouchen Med Amine: Managed and executed the deployment of the full-stack application.(Frontend,Backend,Database)

---

##  Default Admin User
To log in as the default administrator, use the following credentials:

    Email: admin@gmail.com
    Password: 12345
---
## Features

### Admin Features
- Manage programs: create, update, delete, and assign groups to programs.
- Manage groups: create, update, delete, and schedule groups.
- Manage children: create, update, delete profiles and assign to parents and groups.
- Track attendance: mark and view attendance for sessions.
- Payment management: record payments and generate financial reports.
- Parent account management: create and manage parent accounts linked to children.

### Parent Features
- View linked children's profiles, attendance, and progress.
- Monitor payments and program progression.
- See earned stickers and completed models.

---

## Tech Stack
- **Frontend Framework:** ReactJS
- **Backend Framework:** Node.js/Express.js
- **Database:** MongoDB/Atlas
- **Environment Variables Management:** dotenv
- **Authentication:** bcryptjs, jsonwebtoken
- **Middleware:** body-parser, cors

---

## Installation

### Prerequisites
- Node.js installed on your system.
- MongoDB installed or a MongoDB URI (cloud/local).

### Steps to Install

1. Clone the repository:
   ```bash
   git clone https://github.com/Choucheneeee/Young-Engineers-back.git
   cd Young-Engineers-Front
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory and add the following:
   ```env
   PORT=5001
   MONGO_URI=mongodb://localhost:27017/YEngineers
   JWT_SECRET=your_secret_key
   ```

4. Start the server in development mode:
   ```bash
   nodemon
   ```

---


## API Endpoints

### Authentication
| Method | Endpoint         | Description        |
|--------|------------------|--------------------|
| POST   | `/api/auth/login`  | User login         |
| POST   | `/api/auth/register` | Admin/parent registration |

### Users
| Method | Endpoint          | Description        |
|--------|-------------------|--------------------|
| GET    | `/api/users`      | Get all users      |
| POST   | `/api/users`      | Create a user      |
| PUT    | `/api/users/:id`  | Update a user      |
| DELETE | `/api/users/:id`  | Delete a user      |

### Children
| Method | Endpoint            | Description                  |
|--------|---------------------|------------------------------|
| GET    | `/api/children`     | Get all children             |
| POST   | `/api/children`     | Create a child profile       |
| PUT    | `/api/children/:id` | Update a child profile       |
| DELETE | `/api/children/:id` | Delete a child profile       |

### Groups
| Method | Endpoint         | Description             |
|--------|------------------|-------------------------|
| GET    | `/api/groups`    | Get all groups          |
| POST   | `/api/groups`    | Create a group          |
| PUT    | `/api/groups/:id`| Update a group          |
| DELETE | `/api/groups/:id`| Delete a group          |

### Programs
| Method | Endpoint           | Description             |
|--------|--------------------|-------------------------|
| GET    | `/api/programs`    | Get all programs        |
| POST   | `/api/programs`    | Create a program        |
| PUT    | `/api/programs/:id`| Update a program        |
| DELETE | `/api/programs/:id`| Delete a program        |

---

## Contributing

1. Fork the repository.
2. Create a new branch: `git checkout -b feature-name`.
3. Make your changes and commit them: `git commit -m 'Add feature'`.
4. Push to the branch: `git push origin feature-name`.
5. Submit a pull request.

---


## License

This project is licensed under the MIT License. See the `LICENSE` file for more information.

---


## Contact

For questions or feedback, please contact:
- **Email**: chouchene.amine.etud@gmail.com
