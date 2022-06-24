import {
  getShowCount, getShowLikes,
} from '../__mocks__/ShowsUtils';

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
