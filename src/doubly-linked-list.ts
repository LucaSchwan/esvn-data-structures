export interface DoublyLinkedNode<T> {
  element: T | null;
  next: DoublyLinkedNode<T> | null;
  prev: DoublyLinkedNode<T> | null;
}

export class DoublyLinkedList<T> {
  protected firstNode: DoublyLinkedNode<T> | null;
  protected lastNode: DoublyLinkedNode<T> | null;

  constructor(element?: DoublyLinkedNode<T>) {
    this.firstNode = element || null;
    this.lastNode = element || null;
  }

  getFirst(): DoublyLinkedNode<T> | null {
    return this.firstNode;
  }

  getLast(): DoublyLinkedNode<T> | null {
    return this.lastNode;
  }
}
