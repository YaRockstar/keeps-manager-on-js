export class Note {
  constructor(id, title, text, isFixed = false, isRemoved = false) {
    this.id = id;
    this.title = title;
    this.text = text;
    this.isFixed = isFixed;
    this.isRemoved = isRemoved;
  }
}
