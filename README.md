
React Data Fetching and Display with TypeScript
-----------------------------------------------------------------------------------------------------------------------------

A modular React + TypeScript application that fetches and displays user data from an external API. The business logic is cleanly separated from UI components for better maintainability and reusability.


🚀 Features
---------------------------------------------------
Data fetching from JSONPlaceholder

Displays loading and error states

Reusable UserCard component for each user

Separated data service logic in a dedicated file

TypeScript interfaces for strong typing
---------------------------------------------------------------------------------------------------------------
🧱 Project Structure
graphql
Копиране
Редактиране
src/
├── App.tsx               # Main app logic and state management
├── main.tsx              # Entry point
│
├── components/
│   ├── UserCard.tsx      # Displays single user
│   └── UserList.tsx      # Displays a list of users
│
├── services/
│   └── userService.ts    # Contains fetchUsers function (business logic)
│
├── types/
│   └── User.ts           # TypeScript User interface

🧠 Component Overview
-------------------------------------------------------------------------------------------------------
App.tsx: Handles state (loading, error, users) and fetch logic using useEffect

UserList.tsx: Receives an array of users and renders UserCard for each

UserCard.tsx: Displays a single user's name and email

userService.ts: Handles the API call using fetch

User.ts: Defines the User interface with id, name, email, company, city, Username

📦 Installation & Running
--------------------------------------------------------------------------------------------------------
cd React-Data_Fetching_and_Display

Install dependencies:
--------------------------------------------------------------------------------------------------------
npm install

Run development server:
---------------------------------------------------------------------------------------------------------
npm run dev

Open in browser: http://localhost:5173
---------------------------------------------------------------------------------------------------------
🔧 Technologies Used
React

TypeScript

Vite

JSONPlaceholder API


✅ Type Definition
----------------------------------------------------------------------------------------------------------
types/User.ts


📂 Example: services/userService.ts
---------------------------------------------------------------------------------------------------------------
import type{ User } from '../types/User';

export const fetchUsers = async (): Promise<User[]> => {
  try {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }
    const data: User[] = await res.json();
    return data;
  } catch (error) {
    console.error('Error fetching users:', error);
    throw error;
  }
};

Future Enhancements
---------------------------------------------------------------------------------------------------
Add search/filter by user name

Display more user info (phone, website, etc.)

Add pagination or infinite scroll

Use Axios instead of fetch

Add loading spinner instead of plain text.

----------------------------------------------------------------------------------------------------


