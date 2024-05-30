import { NppElementProps } from '@type/index';
import { useEffect } from 'react';
import { ImageContainer } from './index.style';

interface ImageCompoProps extends NppElementProps {
  targetSrc: string;
}

const ImageCompo = ({ targetSrc, setNextStep }: ImageCompoProps) => {
  useEffect(() => {
    const id = setTimeout(setNextStep, 5000);

    return () => {
      clearTimeout(id);
    };
  }, []);

  return <ImageContainer src={targetSrc} alt={''} />;
};

export default ImageCompo;
