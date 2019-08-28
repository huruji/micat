interface IFeed {
    images: {
        img_id: number;
        user_id: number;
    }[];
}

export default (feedList: IFeed[]) => {
    const prefix = 'https://tuchong.pstatp.com';
    const acc: string[] = [];
    return feedList.reduce(
        (acc, feed) =>
            acc.concat(
                feed.images.map(image => `${prefix}/${image.user_id}/f/${image.img_id}.jpg`)
            ),
        acc
    );
};
