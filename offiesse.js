const games = [
  { id: 1, name: "Game 1" },
  { id: 2, name: "Game 2" },
  { id: 3, name: "Game 3" },
  { id: 4, name: "Game 4" },
  { id: 5, name: "Game 5" },
];

const currentMax = 3;

const pageMax = Math.min(games.length, currentMax);

console.log(pageMax); // Output: 3
