const piecesCodes = {
  "r": "black-rook",
  "n": "black-knight",
  "b": "black-bishop",
  "q": "black-queen",
  "k": "black-king",
  "p": "black-pawn",
  "R": "white-rook",
  "N": "white-knight",
  "B": "white-bishop",
  "Q": "white-queen",
  "K": "white-king",
  "P": "white-pawn",
}

function fromFEN(fen) {
  const fields = fen.split(" ", 1);
  const placement = fields[0];
  const lines = placement.split("/", 8);

  var result = [];
  var left = 0;
  var top = 0;

  for (var i = 0; i < 8; i++) {
    const line = lines[i];
    for (var j = 0; j < line.length; j++) {
      const char = line.charAt(j);
      const pieceName = piecesCodes[char];
      if (pieceName === undefined) {
        const emptySquares = parseInt(char);
        left += emptySquares - 1;
      } else {
        const piece = {
          name: pieceName,
          left: left,
          top: top
        };
        result.push(piece);
      }
      left += 1;
    }
    left = 0;
    top += 1;
  }

  return result;
}

function toFEN(pieces) {
  return "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1";
}
