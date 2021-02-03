import { useState, useEffect } from 'react';
import {
  Spinner
} from 'react-bootstrap';
import axios from 'axios';

import PageTitle from '../components/title';
import PageDescription from '../components/description';
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
      <PageTitle content="Users" />
      <PageDescription content="In this app you could find the registered users on Github." />
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