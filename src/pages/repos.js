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

  async function loadUsers() {
    try {
      const reposResult = await axios.get('https://api.github.com/repositories');
      setReposList(reposResult.data);
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
      <PageTitle content="Repositories" />
      <PageDescription content="In this page you could find the created repositories on Github." />
      {
        isLoading
        ? <div className="d-flex justify-content-center">
            <Spinner animation="border" role="status" />
          </div>
        : <InfiniteScrollList list={reposList} itemNameAttribute="name" />
      }
    </>
  );
}

export default Repos;