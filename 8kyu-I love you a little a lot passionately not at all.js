// Your goal in this kata is to determine which phrase the girls would say for a flower of a given number of petals, where nb_petals > 0.

function howMuchILoveYou(nbPetals) {
  let flower = ['I love you', 'a little', 'a lot', 'passionately', 'madly', 'not at all'];
  let pluck = 6;
  if (nbPetals % 6 != 0) pluck = nbPetals % 6;
  return flower[pluck - 1];
}
