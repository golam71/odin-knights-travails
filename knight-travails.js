function knightMoves(start, end) {
  const KNIGHT_MOVES = [
    [2, 1],
    [2, -1],
    [-2, 1],
    [-2, -1],
    [1, 2],
    [1, -2],
    [-1, 2],
    [-1, -2],
  ];
  const isValid = (x, y) => x >= 0 && x < 8 && y >= 0 && y < 8;

  const queue = [[start]];
  const visited = new Set();
  visited.add(`${start[0]},${start[1]}`);

  while (queue.length > 0) {
    const path = queue.shift();
    const [x, y] = path.at(-1);
    if (x === end[0] && y === end[1]) {
      return path;
    }
    for (const [dx, dy] of KNIGHT_MOVES) {
      const newX = x + dx;
      const newY = y + dy;
      const position = `${newX},${newY}`;

      if (isValid(newX, newY) && !visited.has(position)) {
        visited.add(position);
        queue.push([...path, [newX, newY]]);
      }
    }
  }
}

console.log(knightMoves([3, 3], [4, 3]));
