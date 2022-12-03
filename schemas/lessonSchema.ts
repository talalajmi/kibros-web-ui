import * as yup from "yup";

export const addLessonSchema = yup.object().shape({
  vimeoVideoId: yup
    .string()
    .required("Please enter a vimeo video id")
    .max(100, "Vimeo video id cannot exceed 100 characters")
    .matches(/^[A-Za-z0-9 ء-ي]+$/, " Special characters are not allowed"),
  videoURL: yup
    .string()
    .required("Please enter a video url")
    .max(100, "Video url cannot exceed 100 characters")
    .matches(/^[A-Za-z0-9 ء-ي]+$/, " Special characters are not allowed"),
  title: yup
    .string()
    .required("Please enter a title")
    .max(100, "Title cannot exceed 100 characters")
    .matches(/^[A-Za-z0-9 ء-ي]+$/, " Special characters are not allowed"),
  subtitle: yup
    .string()
    .required("Please enter a subtitle")
    .max(100, "Subtitle cannot exceed 100 characters")
    .matches(/^[A-Za-z0-9 ء-ي]+$/, " Special characters are not allowed"),
  instructorName: yup
    .string()
    .required("Please enter an instructors's name")
    .max(100, "A name cannot exceed 100 characters")
    .matches(/^[A-Za-z0-9 ء-ي]+$/, " Special characters are not allowed"),
  description: yup
    .string()
    .required("Please enter a description")
    .max(100, "Description cannot exceed 100 characters")
    .matches(/^[A-Za-z0-9 ء-ي]+$/, " Special characters are not allowed"),
  duration: yup
    .string()
    .required("Please enter a duration")
    .max(100, "Duration cannot exceed 100 characters")
    .matches(/^[A-Za-z0-9 ء-ي]+$/, " Special characters are not allowed"),
  isPaid: yup.boolean().oneOf([true], "Please choose if product is paid"),
  isHighlighted: yup
    .boolean()
    .oneOf([true], "Please choose if product is highlighted"),
  isNew: yup.boolean().oneOf([true], "Please choose if product is new"),
  sortingId: yup
    .string()
    .required("Please enter a sorting number")
    .max(10, "Sorting number cannot exceed 10 characters")
    .matches(/^[A-Za-z0-9 ء-ي]+$/, " Special characters are not allowed"),
});
