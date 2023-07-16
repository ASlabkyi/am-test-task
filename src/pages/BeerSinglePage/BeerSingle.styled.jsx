import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;

  padding-top: 20px;

  img {
    max-height: 100%;
    overflow: hidden;
  }
  p {
    font-size: 1.5rem;
    margin: 0.5rem 0;
    width: 90vh;
    text-align: center;
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

export const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 400px;
`;
