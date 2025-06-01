import { useEffect, useState } from 'react';
import type{ User } from './types/User';
import UserList from './components/UserList/UserList';
import './App.css';
import { fetchUsers } from './services/userService';
const App: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const loadUsers = async () => {
    try {
      const data = await fetchUsers();
      setUsers(data);
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError('Unknown error occurred.');
      }
    }finally {
    setLoading(false);
  } 
  };
  useEffect(() => {
  setLoading(true);
  loadUsers();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className='app'>
      <UserList users={users} />
    </div>
  );
};

export default App;