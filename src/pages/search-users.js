import {
  useState,
  useEffect,
  useContext
} from 'react';
import axios from 'axios';

import PageTitle from '../components/title';
import PageDescription from '../components/description';
import InfiniteScrollList from '../components/infinite-scroll-list';
import Search from '../components/search';
import AppContext from '../context/app-context';

function SearchUsers() {

  const appContext = useContext(AppContext);
  const [usersList, setUsersList] = useState(null);
  const [page, setPage] = useState(1);

  async function loadUsers() {
    if (appContext.criteria !== '') {
      try {
        const usersResult = await axios
          .get(`${process.env.REACT_APP_BASE_URL}users?q=${appContext.criteria} in:login&per_page=10&page=${page}`);
        const nonRepeatedList = new Set([...usersList, ...usersResult.data.items]);
        setUsersList(Array.from(nonRepeatedList));
      } catch(e) {
        console.error(e);
      }
    }
  }

  useEffect(() => {
    usersList && usersList.length === 0 ? setPage(1) : setPage(page + 1);
    // eslint-disable-next-line
  }, [usersList])

  useEffect(() => {
    page === 1 && loadUsers();
    // eslint-disable-next-line
  }, [page])

  useEffect(() => {
    appContext.criteria = '';
    // eslint-disable-next-line
  }, [])

  return (
    <>
      <PageTitle content="Users" />
      <PageDescription content="In this page you can saerch for registered users on Github." />
      <Search search={() => setUsersList([])} />
      <InfiniteScrollList
        list={usersList}
        itemNameAttribute="login"
        fetchData={loadUsers}
      />
    </>
  );
}

export default SearchUsers;