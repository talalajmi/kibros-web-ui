export default class CreateNewFileModel {
  public Title: string;
  public DownloadLink: string;
  constructor(Title: string, DownloadLink: string) {
    this.Title = Title;
    this.DownloadLink = DownloadLink;
  }
}
