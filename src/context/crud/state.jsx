const INITIAL_KEY_STATE = {
  data: {},
  message: null,
  loading: false,
  errors: null,
  success: false,
  failed: false,
};

const INITIAL_STATE = {
  list: {
    data: [],
    links: null,
    meta: null,
    message: null,
    loading: false,
    error: null,
    success: false,
    failed: false,
  },
  data: {},
  refetch: false,
  action: INITIAL_KEY_STATE,
};

export { INITIAL_STATE, INITIAL_KEY_STATE };
