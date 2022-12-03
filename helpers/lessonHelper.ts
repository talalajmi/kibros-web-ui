import { IAttachment } from "../interfaces/Attachment";

const lessonLevelOptions = [
  { label: "Beginner", value: 0 },
  { label: "Intermediate", value: 1 },
  { label: "Advanced", value: 2 },
];

const addLessonInitialValues = {
  VimeoVideoId: "",
  VideoURL: "",
  Title: "",
  Subtitle: "",
  InstructorName: "",
  Description: "",
  Duration: "",
  SortingId: 1,
};

interface AddLessonFormInputs {
  VimeoVideoId: string;
  VideoURL: string;
  Title: string;
  Subtitle: string;
  InstructorName: string;
  Description: string;
  Duration: string;
  Level: number;
  IsPaid: string;
  IsHighlighted: string;
  IsNew: string;
  SortingId: number;
  CategoryId: string;
  Attatchments: IAttachment[];
  RelatedLessonsIds: string[];
}

export { lessonLevelOptions, type AddLessonFormInputs, addLessonInitialValues };
