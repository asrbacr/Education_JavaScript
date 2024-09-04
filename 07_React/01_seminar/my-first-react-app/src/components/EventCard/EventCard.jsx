export const EventCard = ({ name, date, location }) => {
  return (
    <div className="card">
      <h4>Событие: {name}</h4>
      <p>Пройдёт: {date}</p>
      <p>Место проведения: {location}</p>
    </div>
  );
};
