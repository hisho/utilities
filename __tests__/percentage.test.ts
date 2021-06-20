import {percentage} from '../index';

describe('percentage test', (): void => {
  test('toBe 100%', (): void => {
    expect(percentage(1)).toBe('100%');
  });

  test('toBe 56.25%', (): void => {
    expect(percentage(9/16)).toBe('56.25%');
  });

  test('toBe 50%', (): void => {
    expect(percentage(1/2)).toBe('50%');
  });

  test('toBe 0.3333%', (): void => {
    expect(percentage(1/3)).toBe('33.3333%');
  });

});