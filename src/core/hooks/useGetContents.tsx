import { useQuery } from '@tanstack/react-query';
import { addContents } from '../state/store/contentStore';
import { getData } from '../api/core';
import type { ContentType } from '@type/index';

function useGetContents() {
  const { data, isSuccess, isLoading } = useQuery({
    queryKey: ['contentsAll'],
    queryFn: async () => {
      const resArr: ContentType[] = await getData('/');

      for (const i of resArr) {
        const { type, name, order } = i;
        await getBlob(type, `/${type}/${name}`, name, order);
      }

      return resArr;
    },
  });

  const getBlob = async (type: 'image' | 'video', targetSrc: string, name: string, order: number) => {
    try {
      const blob = await fetch(targetSrc).then((r) => r.blob());

      const url = window.URL.createObjectURL(blob);
      addContents({ type: type, src: url, name: name, order: order });

      return { type: type, src: url, name: name, order: order };
    } catch (error: unknown) {
      console.error('Failed to fetch blob', error);
    }
  };

  return {
    contentsQuery: data,
    getBlob,
    isContentQuerySuccess: isSuccess,
    isContentQueryLoading: isLoading,
  };
}

export default useGetContents;
