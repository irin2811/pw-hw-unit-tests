import { test, expect } from '@playwright/test';
import { checkVotingAge } from './age-voting';

test('Користувачі менші 18ти років не можуть голосувати', async () => {
  const votingResult = checkVotingAge(15);
  expect(votingResult).toBe("Ви ще не можете голосувати.");
});

test('Користувачі з 18ти років і старші можуть голосувати', async () => {
  const votingResult = checkVotingAge(18);
  expect(votingResult).toBe("Ви можете голосувати.");
});

test('Некоректний вік повертає відповідне повідомлення', async () => {
  const votingResult = checkVotingAge('test');
  expect(votingResult).toBe("Некоректний вік.");
});