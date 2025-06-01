import type{ User } from '../../types/User';
import UserCard from '../UserCard/UserCard';

interface UserListProps {
  users: User[];
}
const UserList: React.FC<UserListProps> = ({ users }) => {
  return (
    <div>
      {users.map((user) => (
        <UserCard key={user.id} user={user} />
      ))}
    </div>
  );
};
export default UserList;