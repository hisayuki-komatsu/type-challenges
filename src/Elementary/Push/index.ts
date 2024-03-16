type Push<T extends any[], U> = [...T, U]

type PushResult = Push<[1, 2], '3'> // [1, 2, '3']
