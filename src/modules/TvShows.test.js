import {
  getShowCount, getShowLikes, commentsCount, comments,
} from '../__mocks__/ShowsUtils.js';

describe('Show  count ', () => {
  test('tv show count test', () => {
    const count = getShowCount();
    expect(count).toBe(10);
  });

  test('tv shows count not to be null ', () => {
    const count = getShowCount();
    expect(count).not.toBe(null);
  });
});

describe('count tv show likes', () => {
  test('count tv show likes for show id (1) ', () => {
    const count = getShowLikes(1);
    expect(count).toBe(0);
  });
  test('count tv show likes for show id (3) ', () => {
    const count = getShowLikes(3);
    expect(count).toBe(10);
  });
  test('count tv show likes for show id (4) ', () => {
    const count = getShowLikes(4);
    expect(count).toBe(5);
  });
  test('count tv show likes for show id (6) ', () => {
    const count = getShowLikes(6);
    expect(count).toBe(20);
  });
});

describe('Get comments by id', () => {
  test('Get comments by id 1', () => {
    expect(commentsCount(1, comments)).toBe(3);
  });
  test('Get comments by id 2', () => {
    expect(commentsCount(2, comments)).toBe(1);
  });
  test('Get comments by id 3', () => {
    expect(commentsCount(3, comments)).toBe(0);
  });
});
