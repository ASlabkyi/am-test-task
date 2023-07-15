import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;

  padding-top: 20px;

  img {
    max-height: 400px;
  }
  p {
    font-size: 1.5rem;
    margin: 0.5rem 0;
  }

  h2 {
    font-size: 24px;
    margin-bottom: 0.5rem;
  }

  h4 {
    font-size: 1.2rem;
    margin-top: 1rem;
  }
`;
