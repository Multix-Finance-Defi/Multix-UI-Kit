import styled from "styled-components";
import Button from "../../components/Button/Button";

const MenuButton = styled(Button)`
  color: ${({ theme }) => theme.colors.text};
  ${({ theme }) => theme.mediaQueries.md}{
    margin: 0.4rem 0 0 0; 
  }
  padding: 0 8px;  
  border-radius: 8px;
`;
MenuButton.defaultProps = {
  variant: "text",
  size: "sm",
};

export default MenuButton;
