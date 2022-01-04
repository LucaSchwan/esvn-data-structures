import { SinglyLinkedList, SinglyLinkedNode } from './singly-linked-list';

export class Stack<T> {
  protected frames = new SinglyLinkedList<T>();

  constructor(element?: T) {
    element ? this.frames.insertBeginning(element) : null;
  }

  getHead(): SinglyLinkedNode<T> | null {
    return this.frames.getHead();
  }

  getSize(): number {
    return this.frames.getSize();
  }

  push(element: T): void {
    this.frames.insertBeginning(element);
  }

  pop(): T | null | never {
    if (this.frames.getHead() == null) {
      throw new Error('StackUnderflow');
    }
    let head = this.getHead();
    this.frames.removeBeginning();
    return head ? head.element : null;
  }

  peak(): T | null {
    let head = this.getHead();
    return head ? head.element : null;
  }
}
