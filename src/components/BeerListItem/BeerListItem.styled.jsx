import styled from '@emotion/styled';

export const Item = styled.li`
  display: flex;
  justify-content: center;
  padding-top: 30vh;
  padding-bottom: 30vh;
  text-align: center;

  width: 230px;

  img {
    max-height: 100%;
    overflow: hidden;
  }

  a {
    color: #333;
    text-decoration: none;
    cursor: pointer;
    transition: color 0.2s ease-in-out;

    &:hover {
      color: #e53935;
    }
  }

  h2 {
    font-size: 24px;
    margin-bottom: 0.5rem;
  }
`;

export const ItemWrapper = styled.div`
  padding: 10px;
  border-radius: 10px;
  height: 510px;
  width: 200px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;

  transition: background 0.2s ease-in-out;
`;

export const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 400px;
`;
