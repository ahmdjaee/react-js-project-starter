import { ACTION } from "@/lib/action";

export const INITIAL_STATE = {
  data: {},
  message: null,
  loading: false,
  errors: null,
  success: false,
  failed: false,
};

export function authReducer(state, action) {
  switch (action.type) {
    case ACTION.CHANGE: {
      return {
        ...state,
        [action.name]: action.value,
      };
    }
    case ACTION.START: {
      return {
        ...state,
        loading: true,
      };
    }
    case ACTION.SUCCESS: {
      return {
        ...state,
        loading: false,
        success: true,
        data: action.data,
      };
    }
    case ACTION.SET_DATA: {
      return {
        ...state,
        data: action.data,
      };
    }
    case ACTION.RESET_DATA: {
      return {
        ...state,
        data: {},
      };
    }
    case ACTION.REFETCH: {
      return {
        ...state,
        refetch: !state.refetch,
      };
    }
    case ACTION.FAILED: {
      return {
        ...state,
        loading: false,
        success: false,
        failed: true,
        errors: action.errors,
      };
    }
    case ACTION.RESET_STATE: {
      return INITIAL_STATE;
    }
    default:
      return state;
  }
}
