export class NoteService {
  constructor(noteList = []) {
    this.noteList = noteList;
  }

  moveToCart(id) {
    const note = this.getById(id);
    note.isRemoved = true;
  }

  moveToCartAll() {
    this.noteList.forEach(note => (note.isRemoved = note.isRemoved ? note.isRemoved : true));
  }

  restore(id) {
    const note = this.getById(id);
    note.isRemoved = false;
  }

  restoreAll() {
    this.noteList.forEach(note => (note.isRemoved = !note.isRemoved ? note.isRemoved : false));
  }

  remove(id) {
    this.noteList.filter(note => note.id !== id);
  }

  removeAll() {
    this.noteList = [];
  }

  getById(id) {
    return this.noteList.find(note => note.id === id);
  }
}
