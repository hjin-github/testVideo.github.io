import { MainContainer, TitleCompo } from '@container/index.style';
import NppVideoJs from '@layout/NppVideoJs';

const VideoJsPage = () => {
  return (
    <MainContainer>
      <TitleCompo> Video.js</TitleCompo>
      <NppVideoJs />
    </MainContainer>
  );
};

export default VideoJsPage;
