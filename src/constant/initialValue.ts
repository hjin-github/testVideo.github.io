import { ContentType } from '@type/index';

// export const initialNppArr: ContentType[] = [
//   { type: 'image', src: '/image/1.jpg' },
//   { type: 'video', src: '/video/4.mp4' },
//   { type: 'image', src: '/image/2.jpg' },
//   { type: 'video', src: '/video/5.mp4' },
//   { type: 'video', src: '/video/6.mp4' },
// ];

export const BASE_CDN_URL: string = 'https://s3.codemon.xyz/hj';

export const LOCALHOST_API_URL: string = '/api';

export const initialCDNNppArr: ContentType[] = [
  { type: 'image', src: `${LOCALHOST_API_URL}/images/09bab3ccbcc5d7faded21.jpg`, name: 's3_1.jpg', order: 1 },
  { type: 'video', src: `${LOCALHOST_API_URL}/videos/c55c5e8631046eb9781e5.mp4`, name: 's3_2.mp4', order: 2 },
  { type: 'image', src: `${LOCALHOST_API_URL}/images/3394b72ba7dd65403f0d9.png`, name: 's3_3.png', order: 3 },
  { type: 'video', src: `${LOCALHOST_API_URL}/videos/55c5e8631046eb9781e57.mp4`, name: 's3_4.mp4', order: 4 },
  { type: 'video', src: `${LOCALHOST_API_URL}/videos/8fbb966b3ef2d50e63f87.mp4`, name: 's3_5.mp4', order: 5 },
  { type: 'video', src: `${LOCALHOST_API_URL}/videos/1501b17be0ea9296cf8b6.mp4`, name: 's3_6.mp4', order: 6 },
];
