import XXH from 'xxhashjs';

// hashing functions
const h1 = string => Math.abs(XXH.h32(0x1234).update(string).digest().toNumber() % 100);
const h2 = string => Math.abs(XXH.h32(0x3456).update(string).digest().toNumber() % 100);
const h3 = string => Math.abs(XXH.h32(0x5678).update(string).digest().toNumber() % 100);

export default class BloomFilter {
  array = new Array(100).fill(0);
  add(string) {
    this.array[h1(string)] = 1;
    this.array[h2(string)] = 1;
    this.array[h3(string)] = 1;
  }
  contains(string) {
    return !!this.array[h1(string)] && this.array[h2(string)] && this.array[h3(string)];
  }
}
