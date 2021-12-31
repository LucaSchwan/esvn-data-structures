import { LinkedList, Node } from './linked-list';

export class Stack<T> {
  protected frames = new LinkedList<T>();
  protected size: number = 0;

  constructor(element?: T) {
    element
      ? this.frames.insertBeginning({
          element: element,
          next: null,
        })
      : null;
    this.size++;
  }

  push(element: T): void {
    this.frames.insertBeginning({
      element: element,
      next: null,
    });
    this.size++;
  }

  pop(): T | null | never {
    if (this.frames.getHead() == null) {
      throw new Error('StackUnderflow');
    }
    let head = this.getHead();
    this.size--;
    return head ? head.element : null;
  }

  peak(): T | null {
    let head = this.getHead();
    return head ? head.element : null;
  }

  getSize(): number {
    return this.size;
  }

  getHead(): Node<T> | null {
    return this.frames.getHead();
  }
}
