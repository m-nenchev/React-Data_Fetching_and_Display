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