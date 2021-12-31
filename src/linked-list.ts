export interface Node<T> {
  element: T | null;
  next: Node<T> | null;
}

export class LinkedList<T> {
  protected head: Node<T> | null;

  constructor(element?: T) {
    this.head = element
      ? {
          element: element,
          next: null,
        }
      : null;
  }

  addNode(node: Node<T>): Node<T> {
    let p: Node<T>;
    if (this.head == null) {
      this.head = node;
    } else {
      p = this.head;
      while (p.next != null) p = p.next;
      p.next = node;
    }
    return this.head;
  }

  newNode(element: T): Node<T> {
    let p: Node<T>;
    let temp: Node<T> = {
      element: element,
      next: null,
    };
    if (this.head == null) {
      this.head = temp;
    } else {
      p = this.head;
      while (p.next != null) p = p.next;
      p.next = temp;
    }
    return this.head;
  }

  insertAfter(node: Node<T>, newNode: Node<T>): void {
    newNode.next = node.next;
    node.next = newNode;
  }

  insertBeginning(node: Node<T>): void {
    node.next = this.head;
    this.head = node;
  }

  removeAfter(node: Node<T>): void {
    if (node.next) node.next = node.next.next;
  }

  removeBeginning(): void {
    if (this.head) this.head = this.head.next;
  }

  getHead(): Node<T> | null {
    return this.head;
  }
}
