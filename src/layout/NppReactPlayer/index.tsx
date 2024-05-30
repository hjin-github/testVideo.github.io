import { useState } from 'react';
import { NppContainer } from '../index.style';
import ImageCompo from '@component/ImageCompo';
import ReactPlayerCompo from '@component/ReactPlayerCompo';
import { useContentStore } from '@/core/state/store/contentStore';

const NppReactPlayer = () => {
  const { contentArr } = useContentStore();
  const [contentIdx, setContentIdx] = useState<number>(0);

  const reactPlayerOptions = { playing: true, loop: false, muted: true, width: 100, height: 100 };

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
        <ReactPlayerCompo
          targetSrc={contentArr[contentIdx].src}
          options={reactPlayerOptions}
          setNextStep={setNextStep}
        />
      )}
    </NppContainer>
  );
};

export default NppReactPlayer;
