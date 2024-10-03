import { ACTION } from "@/lib/action";
import { INITIAL_STATE } from "./state";

export function crudReducer(state, action) {
  const { keyState } = action;
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
        [keyState]: {
          ...state[keyState],
          loading: true,
        },
      };
    }
    case ACTION.SUCCESS: {
      return {
        ...state,
        [keyState]: {
          loading: false,
          success: true,
          data: action.data,
          links: action.links,
          meta: action.meta,
        },
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
        [keyState]: {
          ...state[keyState],
          loading: false,
          success: false,
          failed: true,
          errors: action.errors,
        },
      };
    }
    case ACTION.RESET_ACTION: {
      return {
        ...state,
        [keyState]: {
          ...INITIAL_STATE[keyState],
        },
      };
    }
    case ACTION.RESET_LIST: {
      return {
        ...state,
        [keyState]: {
          ...state[keyState],
          data: [],
        },
      };
    }
    case ACTION.RESET_STATE: {
      return INITIAL_STATE;
    }
    default:
      return state;
  }
}
