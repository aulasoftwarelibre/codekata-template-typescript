import { ejemplo} from './kata';

test('ejemplo 1', () => {
  expect(ejemplo()).toBe(true);
});

test('ejemplo 2', () => {
  expect(ejemplo()).toBe(false);
});