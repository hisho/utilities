import {em} from '../index';

describe('em test', (): void => {
  test('toBe 1em', (): void => {
    expect(em(16)).toBe('1em');
  });

  test('toBe 0.5em', (): void => {
    expect(em(8)).toBe('0.5em');
  });

  test('toBe 0.75em', (): void => {
    expect(em(12)).toBe('0.75em');
  });
});