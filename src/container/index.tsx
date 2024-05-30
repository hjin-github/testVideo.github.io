import { useNavigate } from 'react-router-dom';
import { ExplainContainer, IndexContainer } from './index.style';
import useGetContents from '@/core/hooks/useGetContents';

const Index = () => {
  const { isContentQueryLoading } = useGetContents();
  return isContentQueryLoading ? <LoadingLayout /> : <ResultLayout />;
};

export default Index;

const ResultLayout = () => {
  const navigate = useNavigate();

  return (
    <IndexContainer>
      <ExplainContainer>
        <button onClick={() => navigate('/videotagplayer')}>Html Video Tag</button>
      </ExplainContainer>
      <ExplainContainer>
        <button onClick={() => navigate('/videoplayer')}>VideoJS</button>
      </ExplainContainer>
      <ExplainContainer>
        <button onClick={() => navigate('/reactplayer')}>ReactPlayer</button>
      </ExplainContainer>
    </IndexContainer>
  );
};

const LoadingLayout = () => {
  return <div>Loading</div>;
};
