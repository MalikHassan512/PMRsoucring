export const logIn = userInfo => {
  return {
    type: 'LOG_IN',
    payload: userInfo,
  };
};

export const logOut = () => {
  return {
    type: 'LOG_OUT',
  };
};
