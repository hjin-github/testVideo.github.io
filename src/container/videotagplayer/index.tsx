import { MainContainer, TitleCompo } from '@container/index.style';
import NppVideoTag from '@layout/Npp\bVideoTag';

const VideoTagPlayer = () => {
  return (
    <MainContainer>
      <TitleCompo>Video Tag</TitleCompo>
      <NppVideoTag />
    </MainContainer>
  );
};

export default VideoTagPlayer;
