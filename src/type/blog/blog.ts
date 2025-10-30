export type TBlogPost = {
  id: number;
  thumbnail: string;
  image1: string;
  image2: string;
  title: string;
  date : string
  metadata: {
    category: string;
    author: string;
    comments_count: number;
  };
  content: {
    lead_paragraph: string;
    sections: {
      topic_implied: string;
      text: string;
    }[];
  };
};
