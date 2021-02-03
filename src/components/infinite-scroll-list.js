import ItemList from './item-list';

function InfiniteScrollList({list, itemNameAttribute}) {
  return (
    list.map(item =>
      <ItemList
        name={item[itemNameAttribute]}
        itemId={item.id}
        imageUrl={item.avatar_url || './repo_icon.png'}
      />
    )
  );
}

export default InfiniteScrollList;