
export const sleep = async (ms = 2000) => {
  return new Promise<void>(resolve => {
    setTimeout(() => {
      resolve();
    }, ms);
  });
};
