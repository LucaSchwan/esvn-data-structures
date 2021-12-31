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
    let head = this.frames.getHead();
    let element: T | null = null;
    if (head) element = head.element;
    this.size--;
    return element;
  }

  peak(): T | null {
    let head = this.frames.getHead();
    return head ? head.element : null;
  }

  getSize(): number {
    return this.size;
  }

  getHead(): Node<T> | null {
    return this.frames.getHead();
  }
}
