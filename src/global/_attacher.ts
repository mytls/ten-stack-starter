// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const _attacher = (handler: (...handlerProps: any) => any) => {
  // eslint-disable-next-line @typescript-eslint/ban-types
  return handler as () => {};
};
