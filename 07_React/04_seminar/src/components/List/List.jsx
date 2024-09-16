export const List = ({ items, renderItem }) => {
  return <ul>{items.map(renderItem)}</ul>;
};

// export const List = ({items, renderItem}) => {
//   return (
//     <ul>
//       {items.map((item, i) => (
//         <li key={i}>{renderItem(item)}</li>
//       ))}
//     </ul>
//   );
// }
