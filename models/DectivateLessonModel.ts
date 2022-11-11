export default class DeactivateLessonModel {
  public VimeoVideoId: string;
  public VideoURL: string;
  public Title: string;
  public Subtitle: string;
  public InstructorName: string;
  public Description: string;
  public DurationInHours: number;
  public DurationInMintes: number;
  public DurationInSeconds: number;
  public Level: number;
  public IsPaid: boolean;
  public IsHighlighted: boolean;
  public IsNew: boolean;
  public SortingId: number;
  public CategoryId: string;
  public FilesIds: string[];
  public RelatedLessonsIds: string[];
  constructor(
    VimeoVideoId: string,
    VideoURL: string,
    Title: string,
    Subtitle: string,
    InstructorName: string,
    Description: string,
    DurationInHours: number,
    DurationInMintes: number,
    DurationInSeconds: number,
    Level: number,
    IsPaid: boolean,
    IsHighlighted: boolean,
    IsNew: boolean,
    SortingId: number,
    CategoryId: string,
    FilesIds: string[],
    RelatedLessonsIds: string[]
  ) {
    this.VimeoVideoId = VimeoVideoId;
    this.VideoURL = VideoURL;
    this.Title = Title;
    this.Subtitle = Subtitle;
    this.InstructorName = InstructorName;
    this.Description = Description;
    this.DurationInHours = DurationInHours;
    this.DurationInMintes = DurationInMintes;
    this.DurationInSeconds = DurationInSeconds;
    this.Level = Level;
    this.IsPaid = IsPaid;
    this.IsHighlighted = IsHighlighted;
    this.IsNew = IsNew;
    this.SortingId = SortingId;
    this.CategoryId = CategoryId;
    this.FilesIds = FilesIds;
    this.RelatedLessonsIds = RelatedLessonsIds;
  }
}
