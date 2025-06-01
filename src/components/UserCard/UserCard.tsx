import type{ User } from '../../types/User';
import './UserCard.css';

interface UserCardProps {
  user: User;
}
const UserCard: React.FC<UserCardProps> = ({ user }) => {
  return (
    <div className='wrapper-card'>
       <div className='user-card'>
            <h1>Еmployee information card</h1>
            <p><span>Company:</span> {user.company?.name ?? 'N/A'}</p>
            <p><span>City:</span> {user.address?.city ?? 'N/A'}</p>
            <p><span>Name:</span> {user.name || 'No name provided'}</p>
            <p><span>Email:</span> {user.email || 'No email provided'}</p>
            <p><span>Username:</span>  {user.username || 'No username provided'}</p>
            <p></p>
       </div>
    </div>
  );
};
export default UserCard;