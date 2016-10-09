export interface IComment
{
    id: number;
    body: string;
    email: string;
    username: string;
    postId: number;

}


export interface IPost
{
    id: number;
    title: string;
    body: string;
    userId: string;
    username: string;
    email: string;
    comments: IComment[];

}
