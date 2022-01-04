import { SinglyLinkedList, SinglyLinkedNode } from './singly-linked-list';

export class Stack<T> {
  protected frames = new SinglyLinkedList<T>();
  protected size: number = 0;

  constructor(element?: T) {
    element ? this.frames.insertBeginning(element) : null;
    this.size++;
  }

  getHead(): SinglyLinkedNode<T> | null {
    return this.frames.getHead();
  }

  getSize(): number {
    return this.size;
  }

  push(element: T): void {
    this.frames.insertBeginning(element);
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
}
