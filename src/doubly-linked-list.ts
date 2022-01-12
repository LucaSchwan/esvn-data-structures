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

  addNode(node: DoublyLinkedNode<T>) {
    if (this.firstNode == null) {
      this.firstNode = node;
    } else {
      let p: DoublyLinkedNode<T>;
      p = this.firstNode;
      while (p.next != null) p = p.next;
      p.next = node;
    }
    this.lastNode = node;
    this.size++;
  }

  add(element: T) {
    let temp: DoublyLinkedNode<T> = {
      element: element,
      prev: null,
      next: null,
    };
    if (this.firstNode == null) {
      this.firstNode = temp;
    } else {
      let p: DoublyLinkedNode<T>;
      p = this.firstNode;
      while (p.next != null) p = p.next;
      p.next = temp;
    }
    this.lastNode = temp;
    this.size++;
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
