export class LocalStorageService {
  set(keepList) {
    const json = JSON.stringify(keepList);
    localStorage.setItem('keepList', json);
  }

  get() {
    return JSON.parse(localStorage.getItem('keepList')) ?? [];
  }

  clear() {
    localStorage.removeItem('keepList');
  }
}
