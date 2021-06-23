export class Post{


  constructor(id: number, headline: string, text: string, likes: number, dislikes: number, imgUrl: string) {
    this.id = id;
    this.headline = headline;
    this.text = text;
    this.likes = likes;
    this.dislikes = dislikes;
    this.imgUrl = imgUrl;
  }

  id: number;
  headline: string;
  text: string;
  likes: number;
  dislikes: number;
  imgUrl: string;

}
