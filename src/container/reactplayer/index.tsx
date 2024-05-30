import { MainContainer, TitleCompo } from '@container/index.style';
import NppReactPlayer from '@layout/NppReactPlayer';

const ReactPlayerPage = () => {
  return (
    <MainContainer>
      <TitleCompo>React-player</TitleCompo>
      <NppReactPlayer />
    </MainContainer>
  );
};

export default ReactPlayerPage;
