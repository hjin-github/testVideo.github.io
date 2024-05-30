import { VideoContainer } from '@component/index.style';
import { NppElementProps } from '@type/index';
import ReactPlayer from 'react-player';

interface ReactPlayerCompoProps extends NppElementProps {
  targetSrc: string;
  options: { playing: boolean; loop: boolean; muted: boolean; width: number; height: number };
}

const ReactPlayerCompo = ({ targetSrc, options, setNextStep }: ReactPlayerCompoProps) => {
  return (
    <VideoContainer>
      <ReactPlayer url={targetSrc} {...options} onEnded={setNextStep} />
    </VideoContainer>
  );
};

export default ReactPlayerCompo;
