import styled, { keyframes } from 'styled-components';

const pulse = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: .2;
  }
`;

export const Spinner = styled.div`
  animation: ${pulse} 1s linear infinite alternate;
  text-align: center;
  margin: 100px 0;

  &::before {
    font-family: monospace;
    content: "⏳";
    font-size: 100px;
    opacity: .2;
  }
`;
