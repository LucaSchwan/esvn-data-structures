import { DoublyLinkedNode } from './doubly-linked-list';

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
    this.size++;
  }

  getHead(): SinglyLinkedNode<T> | null {
    return this.head;
  }

  getSize(): number {
    return this.size;
  }

  addNode(node: SinglyLinkedNode<T>): SinglyLinkedNode<T> {
    if (this.head == null) {
      this.head = node;
    } else {
      let p: SinglyLinkedNode<T>;
      p = this.head;
      while (p.next != null) p = p.next;
      p.next = node;
    }
    this.size++;
    return this.head;
  }

  add(element: T): SinglyLinkedNode<T> {
    let temp: SinglyLinkedNode<T> = {
      element: element,
      next: null,
    };
    if (this.head == null) {
      this.head = temp;
    } else {
      let p: SinglyLinkedNode<T>;
      p = this.head;
      while (p.next != null) p = p.next;
      p.next = temp;
    }
    this.size++;
    return this.head;
  }

  nodeAtIndex(index: number): SinglyLinkedNode<T> {
    if (index >= this.size) throw new Error('IndexOutOfRange');
    let temp = this.head ? this.head : null;
    for (let i = 0; i < index; i++) {
      if (temp) temp = temp.next;
    }

    if (temp == null) throw new Error('EmptyList');
    return temp;
  }

  atIndex(index: number): T | null {
    if (index >= this.size) throw new Error('IndexOutOfRange');
    let temp = this.head ? this.head : null;
    for (let i = 0; i < index; i++) {
      if (temp) temp = temp.next;
    }

    if (temp == null) throw new Error('EmptyList');
    return temp.element;
  }

  indexOf(element: T): number {
    if (this.head == null) throw new Error('EmptyList');
    let temp = this.head;
    let index = 0;
    while (temp.element != element) {
      if (temp.next == null) {
        throw new Error('ElementNotFound');
      }
      temp = temp.next;
      index++;
    }
    return index;
  }

  insert(element: T, index: number): void {
    if (index >= this.size) throw new Error('IndexOutOfRange');
    if (this.head == null) throw new Error('EmptyList');
    let temp: SinglyLinkedNode<T> = {
      element: element,
      next: null,
    };
    if (index == 0) {
      temp.next = this.head.next;
      this.head = temp;
    } else {
      let p = this.head;
      for (let i = 0; i >= index; i++) if (p.next) p = p.next;
      temp.next = p.next;
      p.next = temp;
    }
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
