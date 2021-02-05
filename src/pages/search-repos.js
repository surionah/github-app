import {
  useState,
  useEffect,
  useContext
} from 'react';
import { Spinner } from 'react-bootstrap';
import axios from 'axios';

import PageTitle from '../components/title';
import PageDescription from '../components/description';
import InfiniteScrollList from '../components/infinite-scroll-list';
import Search from '../components/search';
import AppContext from '../context/app-context';

function SearchRepos() {

  const appContext = useContext(AppContext);
  const [reposList, setReposList] = useState(null);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false)

  async function loadRepos() {
    if (appContext.criteria !== '') {
      setIsLoading(true);
      try {
        const usersResult = await axios.get
          (`${process.env.REACT_APP_BASE_URL}repositories?q=${appContext.criteria} in:name&per_page=10&page=${page}`);
        const nonRepeatedList = new Set([...reposList, ...usersResult.data.items]);
        setReposList(Array.from(nonRepeatedList));
        setIsLoading(false);
      } catch(e) {
        console.error(e);
      }
    }
  }

  useEffect(() => {
    reposList && reposList.length === 0 ? setPage(1) : setPage(page + 1);
    // eslint-disable-next-line
  }, [reposList])

  useEffect(() => {
    page === 1 && loadRepos();
    // eslint-disable-next-line
  }, [page])

  useEffect(() => {
    appContext.criteria = '';
    // eslint-disable-next-line
  }, [])

  return (
    <>
      <PageTitle content="Repositories" />
      <PageDescription content="In this page you can search for created repositories on Github." />
      <Search search={() => setReposList([])} />
      {
        isLoading && (
          <div className="d-flex justify-content-center">
            <Spinner animation="border" role="status" />
          </div>
        )
      }
      <InfiniteScrollList
        list={reposList}
        itemNameAttribute="name"
        fetchData={loadRepos}
      />
    </>
  );
}

export default SearchRepos;
