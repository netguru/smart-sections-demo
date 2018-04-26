import styled from 'styled-components';

export const Rectangle = styled.div`
  height: 24px;
  width: 165px;
  background: ${({ active }) => (active ? '#73BF9' : '#c4c4c4')};
  border-radius: 4px;
`;
