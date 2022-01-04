export interface SinglyLinkedNode<T> {
  element: T | null;
  next: SinglyLinkedNode<T> | null;
}

export class SinglyLinkedList<T> {
  protected head: SinglyLinkedNode<T> | null;
  protected size = 0;

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

  getSize(): number {
    return this.size;
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
    this.size++;
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
    this.size++;
    return this.head;
  }

  insertAfter(node: SinglyLinkedNode<T>, element: T): void {
    let newNode: SinglyLinkedNode<T> = {
      element: element,
      next: null,
    };
    newNode.next = node.next;
    node.next = newNode;
    this.size++;
  }

  insertBeginning(element: T): void {
    let node: SinglyLinkedNode<T> = {
      element: element,
      next: null,
    };
    node.next = this.head;
    this.head = node;
    this.size++;
  }

  removeAfter(node: SinglyLinkedNode<T>): void {
    if (node.next) node.next = node.next.next;
    this.size--;
  }

  removeBeginning(): void {
    if (this.head) this.head = this.head.next;
    this.size--;
  }
}
