import styled from 'styled-components';

export const TitleCompo = styled.div`
  position: absolute;
  z-index: 1000;

  width: 100vw;
  height: 100vh;
  margin: 0;
  padding: 0;

  font-size: 10rem;
  color: #fff;
`;

export const MainContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100vw;
  height: 100vh;
`;

export const ExplainContainer = styled.div`
  font-size: 2rem;
  line-height: 150%;

  > button {
    font-size: 2rem;
  }
`;

export const IndexContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  height: 100vh;
  width: 100vw;
`;
