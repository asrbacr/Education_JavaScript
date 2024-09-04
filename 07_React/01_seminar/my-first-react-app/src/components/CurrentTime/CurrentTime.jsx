export const CurrentTime = () => {
  return <h2 className="time-style">Текущее время: {new Date().toLocaleTimeString()}</h2>;
};
