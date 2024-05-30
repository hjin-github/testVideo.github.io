import { useEffect, useRef, useState } from 'react';
import { NppContainer } from '../index.style';
import ImageCompo from '@component/ImageCompo';
import { useContentStore } from '@/core/state/store/contentStore';

const NppVideoTag = () => {
  const { contentArr } = useContentStore();
  const videoRef = useRef<HTMLVideoElement>(null);
  const [contentIdx, setContentIdx] = useState<number>(0);

  const setNextStep = () => {
    setContentIdx((prev) => {
      if (contentIdx === contentArr.length - 1) {
        return 0;
      }

      return prev + 1;
    });
  };

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.addEventListener('ended', setNextStep);
    }
  }, []);

  return (
    <NppContainer>
      {contentArr[contentIdx].type === 'image' ? (
        <ImageCompo targetSrc={contentArr[contentIdx].src} setNextStep={setNextStep} />
      ) : (
        <video autoPlay ref={videoRef} src={contentArr[contentIdx].src} />
      )}
    </NppContainer>
  );
};

export default NppVideoTag;
