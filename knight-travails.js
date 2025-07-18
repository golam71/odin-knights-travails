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
  const visited = new Set([`${start[0]},${start[1]}`]);

  while (queue.length > 0) {
    const path = queue.shift();
    const [x, y] = path.at(-1);

    if (x === end[0] && y === end[1]) {
      console.log(
        `=> You made it in ${path.length - 1} moves!  Here's your path:`,
      );
      path.forEach((p) => console.log(`\t[${p[0]}, ${p[1]}]`));
      return path;
    }

    for (const [dx, dy] of KNIGHT_MOVES) {
      const [newX, newY] = [x + dx, y + dy];
      const posKey = `${newX},${newY}`;

      if (isValid(newX, newY) && !visited.has(posKey)) {
        visited.add(posKey);
        queue.push([...path, [newX, newY]]);
      }
    }
  }
}

knightMoves([3, 3], [4, 3]);
