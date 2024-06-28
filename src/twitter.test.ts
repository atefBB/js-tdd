type UserId = number | string;

class Twitter {
  constructor() {}
  postTweet(tweet: string, userId: UserId): string {
    // @todo save tweet somewhere and return the tweetId from there
    return `${tweet}-${userId}`;
  }
}

describe("Simple Twitter", () => {
  let twitterInstance: Twitter;

  beforeEach(() => {
    twitterInstance = new Twitter();
  });
  it("creates Twitter instance", () => {
    expect(twitterInstance).toBeDefined();
  });

  it("posts a tweet by user id", () => {
    let userId = 3;
    let tweetId = twitterInstance.postTweet("tweet !!", userId);
    expect(tweetId).toBeDefined();
  });
  it("gets news feed by user id", () => {
    let userId = 5;
    let newsFeeds = twitterInstance.getNewsFeed(userId);
    expect(newsFeeds);
  });
  it.todo("follow a user by it id and follower id");
  it.todo("unfollow a user by it id");
});
