import { Node } from '../models/singly-linked-list-structures';
import { LinkedList } from './linked-list';

export class Stack<T> extends LinkedList<T> {
  size: number = 0;

  push(element: T): void {
    let frame: Node<T> = {
      element: element,
      next: this.head,
    };
    this.head = frame;
    this.size++;
  }

  pop(): T | null | never {
    if (this.head == null) {
      throw new Error('StackUnderflow');
    }
    let element = this.head.element;
    this.head = this.head.next;
    return element;
  }

  peak(): T | null {
    return this.head ? this.head.element : null;
  }
}
