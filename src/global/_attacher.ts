// eslint-disable-next-line @typescript-eslint/no-explicit-any
const _attacher = (handler: (...handlerProps: any) => any) => {
  // eslint-disable-next-line @typescript-eslint/ban-types
  return handler as () => {};
};

export default _attacher;
