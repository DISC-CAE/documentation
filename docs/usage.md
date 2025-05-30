---
sidebar_position: 4
---

# Usage

## Frontend

- Start: `npm start`
- Test: `npm test`
- Build: `npm run build`

## Backend

- Start: `npm run dev`
- Test: `npm test`

## Deleting Initiatives from the Backend

When you delete an initiative from the frontend, the frontend calls the `deleteInitiative` function, which sends a request to the backend.  
The backend then deletes the initiative using the Supabase ORM.

**How it works:**
- The frontend triggers the delete by calling `deleteInitiative`.
- The backend handles this request in [`src/controllers/caeController.js`](https://github.com/DISC-CAE/backend/blob/main/src/controllers/caeController.js), lines 336–394.
- The backend uses Supabase's ORM to remove the initiative from the database.

**To delete an initiative directly via the backend API:**
1. Send a `DELETE` request to the appropriate endpoint (e.g., `/api/initiatives/:id`).
2. The backend will handle the deletion and respond with a success or error message.
> **Warning:** There is no undo for this action. Double-check before deleting.
- For more details, see the [controller code](https://github.com/DISC-CAE/backend/blob/main/src/controllers/caeController.js#L336-L394).

## Editing Home Page Text

To change the writing that appears on the frontend home page:

1. Open the frontend project folder.
2. Navigate to `src/pages/home/Home.jsx` (or the corresponding file for your home page).
3. Locate the text you want to edit inside the JSX markup. It will usually be inside elements like `<h1>` or `<p>`.
4. Edit the text as needed.