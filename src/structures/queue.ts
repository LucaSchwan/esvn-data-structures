import { Node } from '../models/doubly-linked-list-node';

export class Queue<T> {
  firstNode: Node<T> | null;
  lastNode: Node<T> | null;

  constructor(element?: Node<T>) {
    this.firstNode = element || null;
    this.lastNode = element || null;
  }

  enqueue(element: T): void {
    let node: Node<T> = {
      element: element,
      next: this.firstNode,
      prev: null,
    };
    this.lastNode = node;
  }

  dequeue(): T | null | never {
    let element: Node<T> | null = this.lastNode;
    if (element == null) {
      throw new Error('QueueEmpty');
    }
    this.lastNode = element.prev;
    return element.element;
  }
}
