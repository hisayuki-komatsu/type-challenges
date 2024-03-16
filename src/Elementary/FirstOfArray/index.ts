type arr1 = ['a', 'b', 'c']
type arr2 = [3, 2, 1]
type arr3 = []

/**
 * any型の配列を受け取る
 * 受け取った配列が空配列[]の場合はnever型、それ以外の場合は配列の最初の要素の型を返す
 */
type First<T extends any[]> = T extends [] ? never : T[0]
/**
 * 配列のlengthで条件分岐
 */
type First2<T extends any[]> = T['length'] extends 0 ? never : T[0]

type First3<T extends any[]> = T extends [infer A, ...infer rest] ? A : never

type head1 = First<arr1> // expected to be 'a'
type head2 = First<arr2> // expected to be 3
type head3 = First<arr3>
