import { IAttachment } from "../interfaces";

export default class CreateLessonModel {
  public VimeoVideoId: string;
  public VideoURL: string;
  public Title: string;
  public Subtitle: string;
  public InstructorName: string;
  public Description: string;
  public Duration: string;
  public Level: string;
  public IsPaid: string;
  public IsHighlighted: string;
  public IsNew: string;
  public SortingId: string;
  public CategoryId: string;
  public Attatchments: IAttachment[];
  public RelatedLessonsIds: string[];
  constructor(
    VimeoVideoId: string,
    VideoURL: string,
    Title: string,
    Subtitle: string,
    InstructorName: string,
    Description: string,
    Duration: string,
    Level: string,
    IsPaid: string,
    IsHighlighted: string,
    IsNew: string,
    SortingId: string,
    CategoryId: string,
    Attatchments: IAttachment[],
    RelatedLessonsIds: string[]
  ) {
    this.VimeoVideoId = VimeoVideoId;
    this.VideoURL = VideoURL;
    this.Title = Title;
    this.Subtitle = Subtitle;
    this.InstructorName = InstructorName;
    this.Description = Description;
    this.Duration = Duration;
    this.Level = Level;
    this.IsPaid = IsPaid;
    this.IsHighlighted = IsHighlighted;
    this.IsNew = IsNew;
    this.SortingId = SortingId;
    this.CategoryId = CategoryId;
    this.Attatchments = Attatchments;
    this.RelatedLessonsIds = RelatedLessonsIds;
  }
}
