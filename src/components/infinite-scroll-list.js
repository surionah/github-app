import ItemList from './item-list';
import styled from 'styled-components';

const Separator = styled.div`
  background-color: white;
  height: 0.5rem;
`;

function InfiniteScrollList({list, itemNameAttribute}) {
  return (
    list.map(item =>
      <div key={item.id}>
        <ItemList
          name={item[itemNameAttribute]}
          imageUrl={item.avatar_url || './repo_icon.png'}
        />
        <Separator />
      </div>
    )
  );
}

export default InfiniteScrollList;