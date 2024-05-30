import { useState } from 'react';
import { NppContainer } from '../index.style';
import ImageCompo from '@component/ImageCompo';
import VideoJsCompo from '@component/VideoJsCompo';
import { useContentStore } from '@/core/state/store/contentStore';

const NppVideoJs = () => {
  const { contentArr } = useContentStore();
  const [contentIdx, setContentIdx] = useState<number>(0);

  const videoJsOptions = {
    autoplay: true,
    muted: true,
    loop: false,
    controls: false,
    responsive: true,
    fluid: true,
    sources: [
      {
        src: contentArr[contentIdx].src,
        type: 'video/mp4',
      },
    ],
  };

  const setNextStep = () => {
    setContentIdx((prev) => {
      if (contentIdx === contentArr.length - 1) {
        return 0;
      }

      return prev + 1;
    });
  };

  return (
    <NppContainer>
      {contentArr[contentIdx].type === 'image' ? (
        <ImageCompo targetSrc={contentArr[contentIdx].src} setNextStep={setNextStep} />
      ) : (
        <VideoJsCompo options={videoJsOptions} setNextStep={setNextStep} />
      )}
    </NppContainer>
  );
};

export default NppVideoJs;
