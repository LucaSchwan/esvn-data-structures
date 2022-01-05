export interface DoublyLinkedNode<T> {
  element: T | null;
  next: DoublyLinkedNode<T> | null;
  prev: DoublyLinkedNode<T> | null;
}

export class DoublyLinkedList<T> {
  protected firstNode: DoublyLinkedNode<T> | null;
  protected lastNode: DoublyLinkedNode<T> | null;
  protected size = 0;

  constructor(element?: T) {
    element
      ? (this.firstNode = {
          element: element,
          next: null,
          prev: null,
        })
      : (this.firstNode = null);
    element
      ? (this.lastNode = {
          element: element,
          next: null,
          prev: null,
        })
      : (this.lastNode = null);
  }

  getFirst(): DoublyLinkedNode<T> | null {
    return this.firstNode;
  }

  getLast(): DoublyLinkedNode<T> | null {
    return this.lastNode;
  }

  getSize(): number {
    return this.size;
  }

  insertBeginning(element: T): void {
    let node: DoublyLinkedNode<T> = {
      element: element,
      next: null,
      prev: null,
    };
    if (this.firstNode != null) {
      node.next = this.firstNode;
      this.firstNode.prev = node;
    } else {
      this.lastNode = node;
    }
    this.firstNode = node;
    this.size++;
  }

  insertEnd(element: T): void {
    let node: DoublyLinkedNode<T> = {
      element: element,
      next: null,
      prev: null,
    };
    if (this.lastNode != null) {
      node.prev = this.lastNode;
      this.lastNode.next = node;
    } else {
      this.firstNode = node;
    }
    this.lastNode = node;
    this.size++;
  }

  removeBeginning(): void {
    if (this.firstNode) this.firstNode = this.firstNode.next;
    if (this.firstNode) this.firstNode.prev = null;
  }

  removeEnd(): void {
    if (this.lastNode) this.lastNode = this.lastNode.prev;
    if (this.lastNode) this.lastNode.next = null;
  }
}
