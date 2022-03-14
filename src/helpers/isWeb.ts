const isWeb = (): boolean => {
  return typeof document !== 'undefined';
};

export default isWeb;
