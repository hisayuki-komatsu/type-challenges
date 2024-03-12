type Unshift<T extends any[], U> = [U, ...T]

type UnshiftResult = Unshift<[1, 2], 0> // [0, 1, 2,]
