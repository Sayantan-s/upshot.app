export type Activity = "promote" | "sell";

export type PostDetails = {
  heading: string;
  body: string;
  images: string[];
};

export interface IPost {
  id: string;
  activity: Activity;
  details: PostDetails;
  userId: string;
  updated_at: Date;
  created_at: Date;
}

export interface InitialStateOfPosts {
  posts: IPost[];
}

export type TCreatePost = Pick<IPost, "activity" | "details" | "userId">;