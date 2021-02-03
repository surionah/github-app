import { useState, useEffect } from 'react';
import {
  Spinner
} from 'react-bootstrap';
import axios from 'axios';
import InfiniteScrollList from '../components/infinite-scroll-list';

function Users() {

  const [isLoading, setIsLoading] = useState(true);
  const [usersList, setUsersList] = useState([]);

  async function loadUsers() {
    try {
      const usersResult = await axios.get('https://api.github.com/users');
      setUsersList(usersResult.data);
      setIsLoading(false);
    } catch(e) {
      console.error(e);
    }
  }

  useEffect(() => {
    loadUsers();
  }, [])

  return (
    <>
    {
      isLoading
      ? <div className="d-flex justify-content-center">
          <Spinner animation="border" role="status" />
        </div>
      : <InfiniteScrollList list={usersList} itemNameAttribute="login" />
    }
    </>
  );
}

export default Users;