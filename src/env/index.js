export const recoverEnv = () => {
  const { VUE_APP_API } = process.env;

  return {
    VUE_APP_API,
  };
};
