export interface CommentModel {
  id: number;
  article_id?: number;
  content: string;
  name: string;
  email: string;
  website: string;
}


/**
 * 1:
id: 15
article_id: null
content: "Rafael Polanco"
name: "Phil"
email: "phil@example.com"
website: "http://www.example.com"
dates: {created: "2018-04-19T20:40:44.333Z", updated: "2018-04-19T20:40:44.333Z"}
 */