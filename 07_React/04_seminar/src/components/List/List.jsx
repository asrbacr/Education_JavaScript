export const List = ({ items, renderItem }) => {
  return <ul>{items.map(renderItem)}</ul>;
};
