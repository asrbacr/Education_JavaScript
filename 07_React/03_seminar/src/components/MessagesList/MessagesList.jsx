import { PropTypes } from 'prop-types';
import Massage from '../Message/Message';


export const MessagesList = ({ messages }) => {
  return (
    <ul>
      {messages.map(({ id, text }) => (
        <Massage key={id} text={text}/>
      ))}
    </ul>
  );
};

// MessagesList.propTypes = {
//   messages: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.number.isRequired,
//       text: PropTypes.string.isRequired,
//     })
//   ).isRequired,
// };