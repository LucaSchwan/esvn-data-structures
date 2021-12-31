interface StackNode<T> {
  data: T | null;
  next: StackNode<T> | null;
}

class Stack<T> {
  head: StackNode<T> | null;

  constructor(node?: StackNode<T>) {
    this.head = node || null;
  }
}
