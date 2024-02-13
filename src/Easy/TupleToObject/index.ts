const tuple = ['tesla', 'model 3', 'model X', 'model Y'] as const

type TupleToObject<T extends readonly string[]> = {
  [P in T[number]]: P
}

type result = TupleToObject<typeof tuple>
