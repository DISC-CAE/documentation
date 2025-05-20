---
sidebar_position: 2
---

# Overview

Below is the overview of how **DISC-CAE** fits together.

| Layer          | Main tech                  | Responsibility                          |
|----------------|---------------------------|------------------------------------------|
| UI             | React 18 + styled-components | Renders user interface & pages        |
| Routing        | React Router DOM           | Handles frontend navigation              |
| API Server     | Node.js + Express          | Serves API endpoints, handles auth, business logic |
| Database/Auth  | Supabase (PostgreSQL)      | Data storage and user authentication     |
| Testing        | Jest                       | Automated testing (backend)              |
| Hosting        | (User-defined: e.g. Vercel, Heroku) | Deploys frontend/backend to the web |

---

# Key directories
```
frontend/
src/ → React pages & components
public/ → Static assets (favicon, manifest, etc.)
.env → (Not committed) Environment variables
```
```
backend/
src/ → Express routes, controllers, middleware
.env → (Not committed) Environment variables
```
```
docs/ → Markdown documentation (this site)
```