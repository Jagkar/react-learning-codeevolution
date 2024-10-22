import React from 'react';
import styled from 'styled-components';

// const StyledButton = styled.button`
//   padding: 10px 20px;
//   font-size: 16px;
//   border: none;
//   cursor: pointer;
//   background-color: ${props => props.isRed ? 'red' : 'blue'};
//   color: white;
//   &:hover {
//     opacity: 0.8;
//   }
//   &:disabled {
//     background-color: grey;
//     cursor: not-allowed;
//   }
// `;

// const Button = ({ isActive, isDisabled, isRed }) => {
//   return (
//     <StyledButton isRed={isRed} disabled={isDisabled}>
//       {isActive ? 'Active' : 'Click Me'}
//     </StyledButton>
//   );
// };

// export default Button;
const StyledButton = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  border-radius: 4px;
  border: none;
  cursor: pointer;
  color: white;
  
  /* Dynamically change background color based on props */
  background-color: ${props => props.isDisabled ? 'gray' : (props.isRed ? 'red' : 'blue')};
  
  /* Apply styles for hover when not disabled */
  &:hover {
    opacity: ${props => props.isDisabled ? 1 : 0.8};
  }
`;

const Button = ({ isRed, isDisabled }) => (
  <StyledButton isRed={isRed} isDisabled={isDisabled} disabled={isDisabled}>
    {isDisabled ? 'Disabled Button' : 'Click Me'}
  </StyledButton>
);

export default Button;
