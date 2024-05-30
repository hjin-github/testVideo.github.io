import { lazy } from 'react';
import GlobalLayout from '@container/_layout';
import VideoTagPlayer from '@container/videotagplayer';

const Index = lazy(() => import('@container/index'));
const ReactPlayer = lazy(() => import('@container/reactplayer/index'));
const VideoPlayer = lazy(() => import('@container/videoplayer/index'));

export const routes = [
  {
    path: '/',
    element: <GlobalLayout />,
    children: [
      { path: '/', element: <Index /> },
      { path: '/reactplayer', element: <ReactPlayer /> },
      { path: '/videoplayer', element: <VideoPlayer /> },
      { path: '/videotagplayer', element: <VideoTagPlayer /> },
    ],
  },
];

export const pages = [
  { route: '/' },
  { route: '/reactplayer' },
  { route: '/videoplayer' },
  { route: '/videotageplayer' },
];
