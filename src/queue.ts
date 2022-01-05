import { DoublyLinkedList, DoublyLinkedNode } from './doubly-linked-list';

export class Queue<T> {
  list = new DoublyLinkedList<T>();

  constructor(element?: T) {
    element ? this.list.insertBeginning(element) : null;
  }

  getFirst(): DoublyLinkedNode<T> | null {
    return this.list.getFirst();
  }

  getLast(): DoublyLinkedNode<T> | null {
    return this.list.getLast();
  }

  getSize(): number {
    return this.list.getSize();
  }

  enqueue(element: T): void {
    this.list.insertBeginning(element);
  }

  dequeue(): T | null | never {
    let node: DoublyLinkedNode<T> | null = this.list.getLast();
    if (node == null) {
      throw new Error('QueueEmpty');
    }
    this.list.removeEnd();
    return node ? node.element : null;
  }
}
