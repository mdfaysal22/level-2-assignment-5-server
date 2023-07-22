export type IReviewer = {
    reviewer: string,
    comments: string,
    readerEmail: string
}
export  interface IBook {
    title: string;
    author: string;
    image: string;
    genre: string;
    publishDate: string;
    publisher: string;
    reader: string[];
    reviews : IReviewer[]
};

export interface IUpdateEmail {
    id: string,
    email: string
}

export interface IUpdateReviewerParams {
    id: string,
    data: IReviewer
};

export interface IUpdatedBookParams {
    id: string,
    updatedData: IBook
}