import styled from 'styled-components';

export const Dot = styled.div`
  width: 16px;
  height: 16px;
  background: ${({ active }) => (active ? '#73BF93' : '#c4c4c4')};
  border-radius: 100%;
  margin: 0 9px 0 0;
`;
