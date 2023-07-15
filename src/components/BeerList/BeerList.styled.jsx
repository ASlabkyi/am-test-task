import styled from '@emotion/styled';

export const BeerListContainer = styled.ul`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 1rem;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const DeleteButton = styled.button`
  position: absolute;
  width: 100%;
  padding: 25px 30px;
  cursor: pointer;
  background-color: #ff3b30;
  color: #fff;
  font-size: 25px;
  border: none;
  border-radius: 4px;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #e53935;
  }

  opacity: ${({ isVisible }) => (isVisible ? 1 : 0)};
  transition: opacity 0.3s ease;
`;
