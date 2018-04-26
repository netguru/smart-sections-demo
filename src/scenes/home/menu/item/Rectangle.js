import styled from 'styled-components';

export const Rectangle = styled.div`
  height: 24px;
  flex: 1 1 auto;
  font-size: 12px;
  background: ${({ active }) => (active ? '#73BF93' : '#c4c4c4')};
  border-radius: 4px;
  color: rgba(0, 0, 0, 0.6);
  display: flex;
  align-items: center;
  font-family: sans-serif;
  padding: 0 6px;
`;
