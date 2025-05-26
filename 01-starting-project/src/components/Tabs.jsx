const Tabs = ({ children, button, ButtonContainer = "menu" }) => {
  return (
    <div>
      <ButtonContainer>{button}</ButtonContainer>
      {children}
    </div>
  );
};

export default Tabs;
