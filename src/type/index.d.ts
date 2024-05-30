export interface NppElementProps {
  setNextStep: () => void;
}

export interface ContentType {
  type: 'image' | 'video';
  src: string;
  name: string;
  order: number;
}
