const initialState = {
  code: 'vendor',
};

const userTypeReducer = (state = initialState, {type, payload}) => {
  switch (type) {
    case 'SETUSERTYPE': {
      return {
        code: payload,
      };
    }

    default: {
      return state;
    }
  }
};

export default userTypeReducer;
