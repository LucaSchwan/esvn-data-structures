import { Node } from '../models/singly-linked-list-structures';
import { LinkedList } from './linked-list';

// TODO implement Stack not as extend from LinkedList but have its items be a LinkedList then i don't have to deal with the functions from the Linked List

export class Stack<T> extends LinkedList<T> {
  protected size: number = 0;

  constructor(element?: T) {
    super(element);
    this.size++;
  }

  insertAfter(node: Node<T>, newNode: Node<T>) {
    super.insertAfter(node, newNode);
    this.size++;
  }

  insertBeginning(node: Node<T>) {
    super.insertBeginning(node);
    this.size++;
  }

  removeBeginning(): void {
    super.removeBeginning();
    this.size--;
  }

  removeAfter(node: Node<T>) {
    super.removeAfter(node);
    this.size--;
  }

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
    this.size--;
    return element;
  }

  peak(): T | null {
    return this.head ? this.head.element : null;
  }

  getSize(): number {
    return this.size;
  }
}
