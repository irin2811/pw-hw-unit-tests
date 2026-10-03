export function checkVotingAge(age) {
  if (age >= 18) {
    return "Ви можете голосувати."
  } else if (age < 18) {
    return "Ви ще не можете голосувати."
  } else {
    return "Некоректний вік."
  }
}