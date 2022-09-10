export class Keep {
  constructor(id, title, text, isRemoved = false) {
    this.id = id;
    this.title = title;
    this.text = text;
    this.isRemoved = isRemoved;
  }
}
