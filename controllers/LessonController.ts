import { getAllLessonsUrl, getHighlightedLessonsUrl } from "./../api/LessonApi";
import axios, { AxiosResponse } from "axios";
import { NextRouter } from "next/router";
import toast from "react-hot-toast";
import { categoryEndpoints, lessonEndpoints } from "../api";
import { isResponseModel } from "../helpers";
import { IResponseModel } from "../interfaces";
import { customPages } from "../routes";
import { getConfigsWithAccessToken } from "../api/index";
import { AuthorizationRoutes } from "../routes/AuthorizationRoutes";
import EditCategoryModel from "../models/EditCategoryModel";
import CreateLessonModel from "../models/CreateLessonModel";
import UpdateLessonModel from "../models/UpdateLessonModel";
import { ActivateLessonModel, DeactivateLessonModel } from "../models";

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
        getAllLessonsUrl(page, size, isActivated),
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
        getHighlightedLessonsUrl(page, size),
        getConfigsWithAccessToken(this.accessToken)
      );

      if (result === 200) {
        return body;
      }
    } catch (error: any) {
      if (isResponseModel(error?.response?.data)) {
        if (error.response.data.result === 401) {
          this.router.push(AuthorizationRoutes.login);
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
    try {
      const {
        data: { body, result },
      }: AxiosResponse<IResponseModel> = await axios.post(
        lessonEndpoints.createLesson,
        createLessonModel,
        getConfigsWithAccessToken(this.accessToken)
      );

      if (result === 200) {
        return body;
      }
    } catch (error: any) {
      if (isResponseModel(error?.response?.data)) {
        if (error.response.data.result === 401) {
          this.router.push(AuthorizationRoutes.login);
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

  uploadThumbnail = async (lessonId: string) => {
    try {
      const {
        data: { body, result },
      }: AxiosResponse<IResponseModel> = await axios.post(
        lessonEndpoints.uploadthumbnail(lessonId),
        getConfigsWithAccessToken(this.accessToken)
      );

      if (result === 200) {
        return body;
      }
    } catch (error: any) {
      if (isResponseModel(error?.response?.data)) {
        if (error.response.data.result === 401) {
          this.router.push(AuthorizationRoutes.login);
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

  updateLesson = async (
    lessonId: string,
    updateLessonModel: UpdateLessonModel
  ) => {
    try {
      const {
        data: { body, result },
      }: AxiosResponse<IResponseModel> = await axios.post(
        lessonEndpoints.updateLesson(lessonId),
        updateLessonModel,
        getConfigsWithAccessToken(this.accessToken)
      );

      if (result === 200) {
        return body;
      }
    } catch (error: any) {
      if (isResponseModel(error?.response?.data)) {
        if (error.response.data.result === 401) {
          this.router.push(AuthorizationRoutes.login);
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

  activateLesson = async (
    lessonId: string,
    activateLessonModel: ActivateLessonModel
  ) => {
    try {
      const {
        data: { body, result },
      }: AxiosResponse<IResponseModel> = await axios.put(
        lessonEndpoints.activateLesson(lessonId),
        activateLessonModel,
        getConfigsWithAccessToken(this.accessToken)
      );

      if (result === 200) {
        return body;
      }
    } catch (error: any) {
      if (isResponseModel(error?.response?.data)) {
        if (error.response.data.result === 401) {
          this.router.push(AuthorizationRoutes.login);
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

  deactivateLessons = async (
    lessonId: string,
    deactivateLessonModel: DeactivateLessonModel
  ) => {
    try {
      const {
        data: { body, result },
      }: AxiosResponse<IResponseModel> = await axios.put(
        lessonEndpoints.deactivateLesson(lessonId),
        deactivateLessonModel,
        getConfigsWithAccessToken(this.accessToken)
      );

      if (result === 200) {
        return body;
      }
    } catch (error: any) {
      if (isResponseModel(error?.response?.data)) {
        if (error.response.data.result === 401) {
          this.router.push(AuthorizationRoutes.login);
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
}
