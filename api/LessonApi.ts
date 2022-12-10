import { baseUrl } from "../constants";

export const lessonEndpoints = {
  getLessons: (page: number, size: number, isActivated: boolean) =>
    `${baseUrl}Lesson/getList?Page=${page}&Size=${size}&IsActivated=${isActivated}`,
  getHighlightedLessons: (page: number, size: number) =>
    `${baseUrl}Lesson/get-highlighted-list?Page=${page}&Size=${size}`,
  createLesson: `${baseUrl}Lesson/create`,
  uploadthumbnail: (id: string) =>
    `${baseUrl}Lesson/upload-thumbnail?lessonId=${id}`,
  updateLesson: (id: string) => `${baseUrl}Lesson/update/${id}`,
  activateLesson: (id: string) => `${baseUrl}Lesson/activate/${id}`,
  deactivateLesson: (id: string) => `${baseUrl}Lesson/deactivate/${id}`,
};
