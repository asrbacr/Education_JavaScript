const Button = ({ children, handlerClick = () => {} }) => {
  return (
      <button onClick={handlerClick}>{children}</button>
    )
};

export default Button;