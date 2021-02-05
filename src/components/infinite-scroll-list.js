import PropTypes from 'prop-types';
import styled from 'styled-components';
import InfiniteScroll from 'react-infinite-scroll-component';
import { Spinner } from 'react-bootstrap';
import ItemList from './item-list';

const ListContainer = styled.div`
  display: block
  overflow-y: auto;
  padding: 1rem;
  border: gray solid 2px;
  border-radius: 5px;
`;

const Separator = styled.div`
  background-color: white;
  height: 0.5rem;
`;

function InfiniteScrollList({list, itemNameAttribute, fetchData}) {

  return (
    <>
      {
        list && list.length > 0 && 
          <ListContainer>
            <InfiniteScroll
              dataLength={list.length}
              next={fetchData}
              hasMore={true}
              loader={
                <div className="d-flex justify-content-center">
                  <Spinner animation="border" role="status" />
                </div>
              }
            >
              {
                list.map(item =>
                  <div key={item.id}>
                    <ItemList
                      name={item[itemNameAttribute]}
                      pageUrl={item.html_url}
                      imageUrl={item.avatar_url || '../repo_icon.png'}
                    />
                    <Separator />
                  </div>
                )
              }
            </InfiniteScroll>
          </ListContainer>
      }
    </>
  );
}

InfiniteScrollList.propTypes = {
  list: PropTypes.array,
  itemNameAttribute: PropTypes.string.isRequired,
  fetchData: PropTypes.func.isRequired
}

export default InfiniteScrollList;