import axios, { AxiosResponse } from "axios";
import { NextRouter } from "next/router";
import { lessonEndpoints } from "../api";
import { isResponseModel } from "../helpers";
import { IResponseModel } from "../interfaces";
import { customPages } from "../routes";
import { getConfigsWithAccessToken } from "../api/index";
import { AuthorizationRoutes } from "../routes/AuthorizationRoutes";
import {
  ActivateLessonModel,
  DeactivateLessonModel,
  UpdateLessonModel,
  CreateLessonModel,
} from "../models";
import { toast } from "react-toastify";

export default class LessonController {
  private readonly accessToken: string;
  private readonly router: NextRouter;

  constructor(accessToken: string, router: NextRouter) {
    this.accessToken = accessToken;
    this.router = router;
  }

  getLessons = async (page: number, size: number, isActivated: boolean) => {
    try {
      const {
        data: { body, result },
      }: AxiosResponse<IResponseModel> = await axios.get(
        lessonEndpoints.getLessons(page, size, isActivated),
        getConfigsWithAccessToken(this.accessToken)
      );

      if (result === 200) {
        return body;
      }
    } catch (error: any) {
      if (isResponseModel(error?.response?.data)) {
        if (error.response.data.result === 401) {
          return error.response.data;
        } else {
          toast.error(error.response.data.message);
        }
        return;
      } else {
        this.router.push(customPages.error);
        return;
      }
    }
  };

  getHighlightedLessons = async (page: number, size: number) => {
    try {
      const {
        data: { body, result },
      }: AxiosResponse<IResponseModel> = await axios.get(
        lessonEndpoints.getHighlightedLessons(page, size),
        getConfigsWithAccessToken(this.accessToken)
      );

      if (result === 200) {
        return body;
      }
    } catch (error: any) {
      if (isResponseModel(error?.response?.data)) {
        if (error.response.data.result === 401) {
          this.router.push(AuthorizationRoutes.logout);
        } else {
          toast.error(error.response.data.message);
        }
        return;
      } else {
        this.router.push(customPages.error);
        return;
      }
    }
  };

  createLesson = async (createLessonModel: CreateLessonModel) => {
    const t = toast.loading("Creating lesson...", { toastId: "loading" });
    try {
      const {
        data: { body, result },
      }: AxiosResponse<IResponseModel> = await axios.post(
        lessonEndpoints.createLesson,
        createLessonModel,
        getConfigsWithAccessToken(this.accessToken)
      );

      if (result === 200) {
        toast.update(t, {
          render: "Lesson Added",
          type: "success",
          isLoading: false,
        });
        return body;
      }
    } catch (error: any) {
      if (isResponseModel(error?.response?.data)) {
        if (error.response.data.result === 401) {
          this.router.push(AuthorizationRoutes.logout);
        } else {
          toast.update(t, {
            render: error.response.data.message,
            type: "error",
            isLoading: false,
          });
        }
        return;
      } else {
        this.router.push(customPages.error);
        return;
      }
    }
  };

  uploadThumbnail = async (lessonId: string) => {
    const t = toast.loading("Uploading thumbnail...", { toastId: "loading" });
    try {
      const {
        data: { body, result },
      }: AxiosResponse<IResponseModel> = await axios.post(
        lessonEndpoints.uploadthumbnail(lessonId),
        getConfigsWithAccessToken(this.accessToken)
      );

      if (result === 200) {
        toast.update(t, {
          render: "Thumbnail Uploaded",
          type: "success",
          isLoading: false,
        });
        return body;
      }
    } catch (error: any) {
      if (isResponseModel(error?.response?.data)) {
        if (error.response.data.result === 401) {
          this.router.push(AuthorizationRoutes.logout);
        } else {
          toast.update(t, {
            render: error.response.data.message,
            type: "error",
            isLoading: false,
          });
        }
        return;
      } else {
        this.router.push(customPages.error);
        return;
      }
    }
  };

  updateLesson = async (
    lessonId: string,
    updateLessonModel: UpdateLessonModel
  ) => {
    const t = toast.loading("Updating lesson...", { toastId: "loading" });
    try {
      const {
        data: { body, result },
      }: AxiosResponse<IResponseModel> = await axios.post(
        lessonEndpoints.updateLesson(lessonId),
        updateLessonModel,
        getConfigsWithAccessToken(this.accessToken)
      );

      if (result === 200) {
        toast.update(t, {
          render: "Lesson Updated",
          type: "success",
          isLoading: false,
        });
        return body;
      }
    } catch (error: any) {
      if (isResponseModel(error?.response?.data)) {
        if (error.response.data.result === 401) {
          this.router.push(AuthorizationRoutes.logout);
        } else {
          toast.update(t, {
            render: error.response.data.message,
            type: "error",
            isLoading: false,
          });
        }
        return;
      } else {
        this.router.push(customPages.error);
        return;
      }
    }
  };

  activateLesson = async (
    lessonId: string,
    activateLessonModel: ActivateLessonModel
  ) => {
    const t = toast.loading("Activating lesson...", { toastId: "loading" });
    try {
      const {
        data: { body, result },
      }: AxiosResponse<IResponseModel> = await axios.put(
        lessonEndpoints.activateLesson(lessonId),
        activateLessonModel,
        getConfigsWithAccessToken(this.accessToken)
      );

      if (result === 200) {
        toast.update(t, {
          render: "Lesson Activated",
          type: "success",
          isLoading: false,
        });
        return body;
      }
    } catch (error: any) {
      if (isResponseModel(error?.response?.data)) {
        if (error.response.data.result === 401) {
          this.router.push(AuthorizationRoutes.logout);
        } else {
          toast.update(t, {
            render: error.response.data.message,
            type: "error",
            isLoading: false,
          });
        }
        return;
      } else {
        this.router.push(customPages.error);
        return;
      }
    }
  };

  deactivateLessons = async (
    lessonId: string,
    deactivateLessonModel: DeactivateLessonModel
  ) => {
    const t = toast.loading("Deactivating lesson...", { toastId: "loading" });
    try {
      const {
        data: { body, result },
      }: AxiosResponse<IResponseModel> = await axios.put(
        lessonEndpoints.deactivateLesson(lessonId),
        deactivateLessonModel,
        getConfigsWithAccessToken(this.accessToken)
      );

      if (result === 200) {
        toast.update(t, {
          render: "Lesson Deactivated",
          type: "success",
          isLoading: false,
        });
        return body;
      }
    } catch (error: any) {
      if (isResponseModel(error?.response?.data)) {
        if (error.response.data.result === 401) {
          this.router.push(AuthorizationRoutes.logout);
        } else {
          toast.update(t, {
            render: error.response.data.message,
            type: "error",
            isLoading: false,
          });
        }
        return;
      } else {
        this.router.push(customPages.error);
        return;
      }
    }
  };
}
