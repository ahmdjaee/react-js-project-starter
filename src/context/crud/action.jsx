import { ACTION } from "@/lib/action";
import { request } from "@/service/request";
import { router } from "@/router/routes";

const crudAction = (dispatch) => {
  return {
    getList: async (url) => {
      dispatch({ type: ACTION.START, keyState: "list" });
      const data = await request.get(url);

      if (data?.success) {
        dispatch({
          type: ACTION.SUCCESS,
          keyState: "list",
          data: data?.data,
        });
      } else {
        dispatch({
          type: ACTION.FAILED,
          keyState: "list",
          data: [],
        });
      }
    },

    post: async (url, formData, navigateUrl) => {
      dispatch({ type: ACTION.START, keyState: "action" });
      const data = await request.post(url, formData);

      if (data.success) {
        if (navigateUrl) router.navigate(navigateUrl, { replace: true });
        dispatch({
          type: ACTION.SUCCESS,
          keyState: "action",
          data: data.data,
        });
      } else {
        dispatch({
          type: ACTION.FAILED,
          keyState: "action",
          errors: data.errors,
        });
      }
    },

    postWithFile: async (url, formData, navigateUrl) => {
      dispatch({ type: ACTION.START, keyState: "action" });
      const data = await request.postWithFile(url, formData);

      if (data.success) {
        if (navigateUrl) router.navigate(navigateUrl, { replace: true });
        dispatch({
          type: ACTION.SUCCESS,
          keyState: "action",
          data: data.data,
        });
      } else {
        dispatch({
          type: ACTION.FAILED,
          keyState: "action",
          errors: data.errors,
        });
      }
    },

    put: async (url, formData, navigateUrl) => {
      dispatch({ type: ACTION.START, keyState: "action" });
      const data = await request.put(url, formData);

      if (data.success) {
        if (navigateUrl) router.navigate(navigateUrl, { replace: true });
        dispatch({
          type: ACTION.SUCCESS,
          keyState: "action",
          data: data.data,
        });
      } else {
        dispatch({
          type: ACTION.FAILED,
          keyState: "action",
          errors: data.errors,
        });
      }
    },

    putWithFile: async (url, formData, navigateUrl) => {
      dispatch({ type: ACTION.START, keyState: "action" });
      const data = await request.putWithFile(url, formData);

      if (data.success) {
        if (navigateUrl) router.navigate(navigateUrl, { replace: true });
        dispatch({
          type: ACTION.SUCCESS,
          keyState: "action",
          data: data.data,
        });
      } else {
        dispatch({
          type: ACTION.FAILED,
          keyState: "action",
          errors: data.errors,
        });
      }
    },

    patch: async (url, formData, navigateUrl) => {
      dispatch({ type: ACTION.START, keyState: "action" });
      const data = await request.patch(url, formData);

      if (data.success) {
        if (navigateUrl) router.navigate(navigateUrl, { replace: true });
        dispatch({
          type: ACTION.SUCCESS,
          keyState: "action",
          data: data.data,
        });
      } else {
        dispatch({
          type: ACTION.FAILED,
          keyState: "action",
          errors: data.errors,
        });
      }
    },

    delete: async (url, formData, navigateUrl) => {
      dispatch({ type: ACTION.START, keyState: "action" });
      const data = await request.delete(url, formData);

      if (data.success) {
        if (navigateUrl) router.navigate(navigateUrl, { replace: true });
        dispatch({
          type: ACTION.SUCCESS,
          keyState: "action",
          data: data.data,
        });
        dispatch({ type: ACTION.REFETCH });
      } else {
        dispatch({
          type: ACTION.FAILED,
          keyState: "action",
          errors: data.errors,
        });
      }
    },

    resetState: () => {
      dispatch({ type: ACTION.RESET_STATE });
    },

    setData: (data) => {
      dispatch({ type: ACTION.SET_DATA, data });
    },
  };
};

export { crudAction };
