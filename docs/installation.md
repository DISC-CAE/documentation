---
sidebar_position: 3
---

# Installation

This section covers how to install and set up both the frontend and backend of DISC-CAE.

## Prerequisites

- [Node.js](https://nodejs.org/en/download/) (version 18 or above)
- [npm](https://www.npmjs.com/get-npm) (comes with Node.js)
- Git (for cloning repositories)

---

## Frontend Installation

1. **Clone the repository:**
  ```
  git clone https://github.com/DISC-CAE/frontend.git
  cd frontend
  ```


2. **Install dependencies:**
  ```
  npm install
  ```

---

## Backend Installation

1. **Clone the repository:**
  ```
  git clone https://github.com/DISC-CAE/backend.git
  cd backend
  ```


2. **Install dependencies:**
  ```
  npm install
  ```
---

## Starting the Project

- **Frontend:**  
In the `frontend` directory, run:
```
npm start
```
This will start the React development server.  
Open [http://localhost:3000](http://localhost:3000) in your browser to view the app.

- **Backend:**  
In the `backend` directory, run:
```
npm start
```
This will start the backend server (by default, often on [http://localhost:5000](http://localhost:5000) or another port-check your terminal output).

## Database Schema

Below is the current backend database schema for DISC-CAE:

![Database schema for backend setup](/img/backend-setup.png)

- **metrics**: Stores metric records and links to initiatives.
- **initiatives**: Contains initiative details, linked to programs.
- **programs**: List of programs.
- **program_passwords**: Stores passwords for programs.
- **user_roles**: User roles per program.
- **auth.users**: User authentication (managed by Supabase).


---

## Set up environment variables:
- Create a `.env` file in the backend root with:
  ```
  SUPABASE_URL=supabase_url
  SUPABASE_KEY=supabase_key
  DATABASE_URL=database_url
  ```
---

**Next:** See [Usage](usage.md) for how to run and test the apps.