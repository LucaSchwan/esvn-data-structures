export interface SinglyLinkedNode<T> {
  element: T | null;
  next: SinglyLinkedNode<T> | null;
}

export class SinglyLinkedList<T> {
  protected head: SinglyLinkedNode<T> | null;

  constructor(element?: T) {
    this.head = element
      ? {
          element: element,
          next: null,
        }
      : null;
  }

  getHead(): SinglyLinkedNode<T> | null {
    return this.head;
  }

  addNode(node: SinglyLinkedNode<T>): SinglyLinkedNode<T> {
    let p: SinglyLinkedNode<T>;
    if (this.head == null) {
      this.head = node;
    } else {
      p = this.head;
      while (p.next != null) p = p.next;
      p.next = node;
    }
    return this.head;
  }

  add(element: T): SinglyLinkedNode<T> {
    let p: SinglyLinkedNode<T>;
    let temp: SinglyLinkedNode<T> = {
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

  insertAfter(node: SinglyLinkedNode<T>, element: T): void {
    let newNode: SinglyLinkedNode<T> = {
      element: element,
      next: null,
    };
    newNode.next = node.next;
    node.next = newNode;
  }

  insertBeginning(element: T): void {
    let node: SinglyLinkedNode<T> = {
      element: element,
      next: null,
    };
    node.next = this.head;
    this.head = node;
  }

  removeAfter(node: SinglyLinkedNode<T>): void {
    if (node.next) node.next = node.next.next;
  }

  removeBeginning(): void {
    if (this.head) this.head = this.head.next;
  }
}
