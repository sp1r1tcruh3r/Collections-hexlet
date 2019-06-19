/* Ленивая реализация энумерабла */


class Enumerable {
  // BEGIN (write your solution here)
  constructor(collection, operations) {
    this.collection = collection;
    this.operations = operations || [];
  }

  build(fn) {
    const newColl = this.collection.slice();
    const newOps = this.operations.concat(fn);
    return new Enumerable(newColl, newOps);
  }

  select(fn) {
    return this.build(coll => coll.map(fn));
  }

  orderBy(fn, direction = 'asc') {
    const comparator = (a, b) => {
      const elA = fn(a);
      const elB = fn(b);
      const compareResult = direction === 'asc' ? 1 : -1;
      if (elA > elB) {
        return compareResult;
      } else if (elA < elB) {
        return -compareResult;
      }
      return 0;
    };

    return this.build(coll => coll.sort(comparator));
  }

  where(fn) {
    return this.build(coll => coll.filter(fn));
  }

  toArray() {
    return this.operations.reduce((accum, operation) => operation(accum), this.collection);
}
  // END
}

export default Enumerable;
