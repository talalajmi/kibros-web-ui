export interface ILesson {
  id: string;
  vimeoVideoId: string;
  videoURL: string;
  title: string;
  subtitle: string;
  instructorName: string;
  description: string;
  duration: string;
  level: number;
  isPaid: boolean;
  isHighlighted: boolean;
  isActivated: boolean;
  isNew: boolean;
  sortingId: number;
  thumbnailImageURL: string;
  creationTime: string;
  category: {
    id: string;
    categoryName: string;
  };
  video: {
    result: boolean;
    videoHtmlTag: string;
    thumbnailPicture: string;
  };
  attatchments: [
    {
      title: string;
      downloadLink: string;
    }
  ];
  relatedLessons: [
    {
      id: string;
      title: string;
    }
  ];
}
