import styled from '@emotion/styled';

export const Item = styled.li`
  display: flex;
  justify-content: center;
  padding-top: 30vh;
  padding-bottom: 30vh;

  img {
    max-height: 400px;
  }

  a {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;

    color: #333;
    text-decoration: none;
    cursor: pointer;
    transition: color 0.2s ease-in-out;

    &:hover {
      color: #ff4500;
    }
  }

  h2 {
    font-size: 24px;
    margin-bottom: 0.5rem;
  }
`;
