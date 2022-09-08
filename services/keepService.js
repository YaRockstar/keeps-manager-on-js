export class KeepService {
  constructor(keepList = []) {
    this.keepList = keepList;
  }

  sendToCart(id) {
    const keep = this.getById(id);
    keep.isRemoved = true;
  }

  sendToCartAll() {
    this.keepList.forEach(
      keep => (keep.isRemoved = keep.isRemoved ? keep.isRemoved : true)
    );
  }

  restore(id) {
    const keep = this.getById(id);
    keep.isRemoved = false;
  }

  restoreAll() {
    this.keepList.forEach(
      keep => (keep.isRemoved = !keep.isRemoved ? keep.isRemoved : false)
    );
  }

  remove(id) {
    this.keepList.filter(keep => keep.id !== id);
  }

  removeAll() {
    this.keepList = [];
  }

  getById(id) {
    return this.keepList.find(keep => keep.id === id);
  }
}
