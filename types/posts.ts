export interface IComment {
  body: string;
  postId: number;
  id: number;
}

export interface IPosts {
    id: number;
    titlle: string;
    body: string;
    comments: IComment[];
}