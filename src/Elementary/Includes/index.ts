type Includes<T extends readonly any[], U> = {
  [P in T[number]]: true
}[U] extends true
  ? true
  : false
// オブジェクトのキーにUが含まれてればtrueを返すので、そのオブジェクトがUというキーを持つかどうかでtrueかfalseを返す

type isPillarMen = Includes<['Kars', 'Esidisi', 'Wamuu', 'Santana'], 'Dio'>
