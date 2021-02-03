import { useState, useEffect } from 'react';
import {
  Spinner
} from 'react-bootstrap';
import axios from 'axios';

import PageTitle from '../components/title';
import PageDescription from '../components/description';
import InfiniteScrollList from '../components/infinite-scroll-list';

function Repos() {

  const [isLoading, setIsLoading] = useState(true);
  const [reposList, setReposList] = useState([]);
  const [lastItemId, setLastItemId] = useState(1);

  async function loadRepos() {
    try {
      const reposResult = await axios.get('https://api.github.com/repositories', { params: { since: lastItemId } });
      setReposList([...reposList, ...reposResult.data]);
    } catch(e) {
      console.error(e);
    }
  }

  useEffect(() => {
    loadRepos();
  }, []);

  useEffect(() => {
    if (reposList.length > 0) {
      setLastItemId(reposList[reposList.length - 1].id);
      setIsLoading(false);
    }
  }, [reposList]);

  return (
    <>
      <PageTitle content="Repositories" />
      <PageDescription content="In this page you could find the created repositories on Github." />
      {
        isLoading
        ? <div className="d-flex justify-content-center">
            <Spinner animation="border" role="status" />
          </div>
        : <InfiniteScrollList list={reposList} itemNameAttribute="name" fetchData={loadRepos} />
      }
    </>
  );
}

export default Repos;