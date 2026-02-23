# Notes app: https://notesapp-dv6x.onrender.com

A full stack application for managing personal notes, with google authentication and CRUD functionality.

## Features
- OAuth 2.0 authentication: Secure login via google accounts.
- Cross environment support: Build in support for both production and development environments.
- CRUD: Users can manage their own notes through:
  - Create: Save new notes to the database
  - Read: View all their notes
  - Update: Edit their notes
  - Delete: Delete their notes
- Cloud deployment: Configured for hosting on render with automated deployment

## Tech stack
- Frontend: React, Axios.
- Backend: Node.js, Express.js
- Databas: Mongodb Atlas
- Auth: Google OAuth 2.0 using Passport.js
- Hosting: Render

## API documentation

### Authentication
| Method | Endpoint | Description |
| :--- | :--- | :--- |
| **GET** | `/auth/google` | Initiates Google OAuth consent screen. |
| **GET** | `/auth/google/callback` | Handles exchange of codes for user profile. |
| **GET** | `/api/logout` | Terminates the current session. |
| **GET** | `/api/current_user` | Returns the authenticated user's data. |

### Notes (CRUD)
| Method | Endpoint | Description | Request Body |
| :--- | :--- | :--- | :--- |
| **GET** | `/api/notes` | Fetches all notes for the logged-in user. | N/A |
| **POST** | `/api/notes` | Creates a new note. | `{ "title": "...", "content": "..." }` |
| **PUT** | `/api/notes/:id` | Updates an existing note. | `{ "title": "...", "content": "..." }` |
| **DELETE** | `/api/notes/:id` | Deletes a specific note by ID. | N/A |
