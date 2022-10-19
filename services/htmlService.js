export class HTMLService {
  paintKeepText(note) {
    return ``;
  }

  paintKeep(note) {
    return ``;
  }

  paintKeepList(noteList) {
    if (noteList.length === 0) {
      return `<p class="EmptyList">Нет заметок</p>`;
    }
    return ``;
  }
}
