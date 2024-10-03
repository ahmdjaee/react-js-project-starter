import { ACTION } from "@/lib/action";
import { removeUserAndToken, setUserAndToken } from "@/service/auth";
import { request } from "@/service/request";

const authAction = (dispatch) => {
  return {
    loginOrRegister: async (url, formData) => {
      dispatch({ type: ACTION.START });
      const data = await request.post(url, formData);

      if (data.success) {
        setUserAndToken(data.data);
        dispatch({
          type: ACTION.SUCCESS,
          data: data.data,
        });
      } else {
        dispatch({
          type: ACTION.FAILED,
          errors: data.errors,
        });
      }
    },

    updateCurrentUser: async (url, formData) => {
      dispatch({ type: ACTION.START });
      const data = await request.patch(url, formData);

      if (data.success) {
        setUserAndToken(data.data);
        dispatch({
          type: ACTION.SUCCESS,
          data: data.data,
        });
      } else {
        dispatch({
          type: ACTION.FAILED,
          errors: data.errors,
        });
      }
    },

    logout: async (url, formData) => {
      dispatch({ type: ACTION.START });
      const data = await request.delete(url, formData);

      if (data.success) {
        removeUserAndToken();
        dispatch({
          type: ACTION.SUCCESS,
          data: data.data,
        });
      } else {
        dispatch({
          type: ACTION.FAILED,
          errors: data.errors,
        });
      }
    },

    resetState: () => {
      dispatch({ type: ACTION.RESET_STATE });
    },
  };
};

export { authAction };
