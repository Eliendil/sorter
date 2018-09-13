class Sorter {
  
constructor() {
  this.vault = [];
  this.comparator = null;
}
add(element) {
  this.vault.push(element);
}
at(index) {
  return this.vault[index];
}
get length() {
  return this.vault.length;
}
toArray() {
  return this.vault;
}
sort(indices) {
  const newVault = indices.map(k => this.vault
[k]);
  indices.sort((a, b) => a - b);
  if (!this.comparator) {
   newVault.sort((a, b) => a - b);
  } else {
   newVault.sort(this.comparator);
  }
 newVault.forEach((value, k) => {
    this.vault
[indices[k]] = value;
    });
}
setComparator(compareFunction) {
  this.comparator = compareFunction;
}
}

module.exports = Sorter;