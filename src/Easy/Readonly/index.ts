interface Todo {
  title: string
  description: string
}

// const todo = {
//   title: 'Hey',
//   description: 'foobar',
// } as const

type MyReadonly<T> = { readonly [P in keyof T]: T[P] }

const todo: MyReadonly<Todo> = {
  title: 'Hey',
  description: 'foobar',
}

todo.title = 'Hello' // Error: cannot reassign a readonly property
todo.description = 'barFoo' // Error: cannot reassign a readonly property
