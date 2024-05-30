import { ContentType } from '@type/index';
import { create } from 'zustand';

interface ContentStoreTypes {
  contentArr: ContentType[];
}

export const useContentStore = create<ContentStoreTypes>(() => ({
  contentArr: [],
}));

const setContentStore = useContentStore.setState;
const getContentStore = useContentStore.getState;
const sortLambda = (a: ContentType, b: ContentType) => {
  return a.order - b.order;
};
export const findName = (newContent: ContentType) => {
  return getContentStore().contentArr.find((content) => content.name === newContent.name);
};

export const setContentsArr = (contents: ContentType[]) => {
  setContentStore(() => ({ contentArr: [...contents.sort(sortLambda)] }));
};

export const addContents = (content: ContentType) => {
  const storeArr = getContentStore().contentArr;
  if (findName(content)) {
    return;
  }
  const resArr = [...storeArr, content].sort(sortLambda);

  setContentStore(() => ({ contentArr: resArr }));
};

export const subContents = (content: ContentType) => {
  const idx = getContentStore().contentArr.indexOf(content);
  if (idx === -1) {
    return;
  }

  setContentStore((state) => {
    return { contentArr: state.contentArr.splice(idx, 1) };
  });
};
