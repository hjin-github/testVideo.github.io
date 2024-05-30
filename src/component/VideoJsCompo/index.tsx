import { NppElementProps } from '@type/index';
import { memo, useEffect, useRef } from 'react';
import videojs from 'video.js';
import 'video.js/dist/video-js.css';
import { VideoContainer } from '../index.style';

export interface VideoJsCompoProps extends NppElementProps {
  options: {
    autoplay: boolean;
    muted: boolean;
    loop: boolean;
    controls: boolean;
    responsive: boolean;
    fluid: boolean;
    sources: {
      src: string;
      type: string;
    }[];
  };
}

const VideoJsCompo = ({ options, setNextStep }: VideoJsCompoProps) => {
  const videoRef = useRef<HTMLDivElement>(null);
  const playerRef = useRef<any | null>();
  const playerCleanUp = (cb?: () => void) => {
    // cb: cleanup간 실행 시킬 callback 함수 (optional)
    const player = playerRef.current; // player instance
    if (player && !player.isDisposed()) {
      // player clean up
      player.dispose();
      playerRef.current = null;
      if (cb) {
        cb();
      }
    }
  };

  const handlePlayerReady = (player: any) => {
    playerRef.current = player;

    // You can handle player events here, for example:
    player.on('waiting', () => {});

    player.on('dispose', () => {});

    player.on('ended', setNextStep);
  };

  useEffect(() => {
    playerCleanUp();
    if (!playerRef.current) {
      const videoElement = document.createElement('video-js');

      videoElement.classList.add('vjs-big-play-centered');
      videoRef.current?.append(videoElement);

      const player = (playerRef.current = videojs(videoElement, options, () => {
        handlePlayerReady(player);
      }));

      return;
    }

    const player = playerRef.current;

    player.autoplay(options.autoplay);
    player.src(options.sources);
  }, [options, videoRef]);

  return (
    <VideoContainer data-vjs-player>
      <div ref={videoRef} />
    </VideoContainer>
  );
};

export default memo(VideoJsCompo);
