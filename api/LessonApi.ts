import { baseUrl } from "../constants";

export const lessonEndpoints = {
  getLessons: `${baseUrl}Lesson/getList?Page={page}&Size={size}&IsActivated={isActivated}`,
  getHighlightedLessons: `${baseUrl}Lesson/get-highlighted-list?Page={page}&Size={size}`,
  createLesson: `${baseUrl}Lesson/create`,
  uploadthumbnail: (id: string) =>
    `${baseUrl}Lesson/upload-thumbnail?lessonId=${id}`,
  updateLesson: (id: string) => `${baseUrl}Lesson/update/${id}`,
  activateLesson: (id: string) => `${baseUrl}Lesson/activate/${id}`,
  deactivateLesson: (id: string) => `${baseUrl}Lesson/deactivate/${id}`,
};

export const getAllLessonsUrl = (
  page: number,
  size: number,
  isActivated: boolean
) => {
  return lessonEndpoints.getLessons
    .replace("{page}", page.toString())
    .replace("{size", size.toString())
    .replace("{isActivated}", isActivated.toString());
};

export const getHighlightedLessonsUrl = (page: number, size: number) => {
  return lessonEndpoints.getHighlightedLessons
    .replace("{page}", page.toString())
    .replace("{size", size.toString());
};
