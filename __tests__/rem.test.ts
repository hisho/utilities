import {rem} from '../index';

describe('rem test', (): void => {
  test('toBe 1rem', (): void => {
    expect(rem(16)).toBe('1rem');
  });

  test('toBe 0.5rem', (): void => {
    expect(rem(8)).toBe('0.5rem');
  });

  test('toBe 0.75rem', (): void => {
    expect(rem(12)).toBe('0.75rem');
  });

  test('change 10 to root and toBe 1.2rem', (): void => {
    expect(rem(12, 10)).toBe('1.2rem');
  });
});