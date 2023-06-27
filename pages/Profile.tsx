import { useState, useEffect } from 'react';
import styles from '../styles/profile.module.css';

const Profile = (): JSX.Element => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const fetchUser = async () => {
      const response = await fetch('../api/users'); // Replace with your API endpoint
      const data = await response.json();
      setUser(data[0]); // Assuming you want to display the first user from the API response
    };

    fetchUser();
  }, []);

  const updateUser = async (updatedUser: User) => {
    try {
      const response = await fetch('../api/users', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedUser),
      });

      if (response.ok) {
        const data = await response.json();
        setUser(data);
        console.log('User updated successfully');
      } else {
        console.log('Failed to update user');
      }
    } catch (error) {
      console.error('Error updating user:', error);
    }
  };

  const deleteUser = async () => {
    try {
      const response = await fetch('/api/users', {
        method: 'DELETE',
      });

      if (response.ok) {
        setUser(null);
        console.log('User deleted successfully');
      } else {
        console.log('Failed to delete user');
      }
    } catch (error) {
      console.error('Error deleting user:', error);
    }
  };

  return (
    <div className={styles.profileContainer}>
      {user ? (
        <div>
          <h2>{`${user.name} ${user.surname}`}</h2>
          <p>Email: {user.email}</p>
          <p>Phone: {user.phone}</p>
          <p>Address: {user.address}</p>
          <p>Street Cred: {user.streetCred}</p>
          <p>{user.active}</p>

          <form
            className={styles.updateForm}
            onSubmit={(e) => {
              e.preventDefault();
              const updatedUser: User = {
                ...user,
                name: e.target.name.value,
                surname: e.target.surname.value,
                email: e.target.email.value,
                phone: e.target.phone.value,
                address: e.target.address.value,
                streetCred: parseFloat(e.target.streetCred.value),
                active: e.target.active.value,
              };
              updateUser(updatedUser);
            }}
          >
            <input type="text" name="name" defaultValue={user.name} placeholder="Name" required />
            <input type="text" name="surname" defaultValue={user.surname} placeholder="Surname" required />
            <input type="email" name="email" defaultValue={user.email} placeholder="Email" required />
            <input type="tel" name="phone" defaultValue={user.phone} placeholder="Phone" required />
            <input type="text" name="address" defaultValue={user.address} placeholder="Address" required />
            <input type="number" step="0.1" name="streetCred" defaultValue={user.streetCred} placeholder="Street Cred" required />
            <input type="text" name="active" defaultValue={user.active} placeholder="Active" disabled/>
            <button type="submit">Update</button>
          </form>

          <button className={styles.deleteButton} onClick={deleteUser}>
            Delete
          </button>
        </div>
      ) : (
        <p>Loading user data...</p>
      )}
    </div>
  );
};

export default Profile;

interface User {
    name: string;
    surname: string;
    email: string;
    phone: string;
    address: string;
    streetCred: number;
    active: string;
  }