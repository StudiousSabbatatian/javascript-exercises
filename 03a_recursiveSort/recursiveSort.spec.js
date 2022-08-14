const recursiveSort = require('./recursiveSort')

describe('recursiveSort', () => {
  test('sorts an array with odd number of elements', () => {
    expect(recursiveSort([5, 4, 2, 1, 3])).toEqual([1, 2, 3, 4, 5]);
  });
  test('sorts an array with odd number of elements', () => {
    expect(recursiveSort([5, 6, 3, 2, 4, 1])).toEqual([1, 2, 3, 4, 5, 6]);
  });
  test('handles single element array', () => {
    expect(recursiveSort([1])).toEqual([1]);
  });
  test('handles two element array', () => {
    expect(recursiveSort([2, 1])).toEqual([1, 2]);
  });
  test('handles already sorted array', () => {
    expect(recursiveSort([1, 2, 3, 4, 5, 6])).toEqual([1, 2, 3, 4, 5, 6]);
  });
});
