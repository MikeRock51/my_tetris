class tetriPiece {
  constructor(ctx) {
    this.ctx = ctx;
    this.generate();
  }

  generate() {
    this.typeId = this.randomizePieces(colors.length - 1);
    this.shape = shapes[this.typeId];
    this.color = colors[this.typeId];
    this.x = 0;
    this.y = 0;
    this.hardDropped = false;
  }

  create() {
    this.ctx.fillStyle = this.color;
    this.shape.forEach((row, y) => {
      row.forEach((value, x) => {
        if (value > 0) {
          this.ctx.fillRect(this.x + x, this.y + y, 1, 1);
        }
      });
    });
  }

  randomizePieces(noOfTypes) {
    return Math.floor(Math.random() * noOfTypes + 1);
  }

  setStartingPosition() {
    this.x = this.typeId === 4 ? 4 : 3;
  }

  move(p) {
    if (!this.hardDropped) {
      this.x = p.x;
      this.y = p.y;
    }
    this.shape = p.shape;
  }

  fullDrop() {
    this.hardDropped = true;
  }

}
