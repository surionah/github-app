import {
  useState,
  useEffect
} from 'react';
import {
  Spinner
} from 'react-bootstrap';
import axios from 'axios';

import PageTitle from '../components/title';
import PageDescription from '../components/description';
import InfiniteScrollList from '../components/infinite-scroll-list';
import CONSTANTS from '../constants/constants';

function Users() {

  const [isLoading, setIsLoading] = useState(true);
  const [usersList, setUsersList] = useState([]);
  const [lastItemId, setLastItemId] = useState(0);

  async function loadUsers() {
    try {
      const usersResult = await axios.get(`${process.env.REACT_APP_BASE_URL}users`, { params: { since: lastItemId, per_page: CONSTANTS.ITEMS_LENGTH } });
      setUsersList([...usersList, ...usersResult.data]);
    } catch(e) {
      console.error(e);
    }
  }

  useEffect(() => {
    loadUsers();
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (usersList.length > 0) {
      setLastItemId(usersList[usersList.length - 1].id);
      setIsLoading(false);
    }
  }, [usersList]);

  return (
    <>
      <PageTitle content="Users" />
      <PageDescription content="In this page you could find the registered users on Github." />
      {
        isLoading
        ? <div className="d-flex justify-content-center">
            <Spinner animation="border" role="status" />
          </div>
        : <InfiniteScrollList list={usersList} itemNameAttribute="login" fetchData={loadUsers} />
      }
    </>
  );
}

export default Users;