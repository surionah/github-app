import ItemList from './item-list';
import styled from 'styled-components';
import InfiniteScroll from 'react-infinite-scroll-component';

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
    <ListContainer>
      <InfiniteScroll
        dataLength={list.length}
        next={fetchData}
        hasMore={true}
        loader={<h4>Loading...</h4>}
      >
        {
          list.map(item =>
            <div key={item.id}>
              <ItemList
                name={item[itemNameAttribute]}
                imageUrl={item.avatar_url || '../repo_icon.png'}
              />
              <Separator />
            </div>
          )
        }
      </InfiniteScroll>
    </ListContainer>
    
  );
}

export default InfiniteScrollList;