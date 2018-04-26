import styled from 'styled-components';

export const Content = styled.div`
  background-color: #a7e5c1;
  border-radius: 8px;
  height: 100%;
  opacity: ${({ active }) => (active ? '1' : '0.5')};
`;
