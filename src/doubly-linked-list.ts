export interface DoublyLinkedNode<T> {
  element: T;
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
    if (this.firstNode) this.size = 1;
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

  addNode(node: DoublyLinkedNode<T>): void {
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

  add(element: T): void {
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

  nodeAtIndex(index: number): DoublyLinkedNode<T> {
    if (index >= this.size) throw new Error('IndexOutOfRange');
    let temp = this.firstNode ? this.firstNode : null;
    for (let i = 0; i < index; i++) {
      if (temp) temp = temp.next;
    }

    if (temp == null) throw new Error('EmptyList');
    return temp;
  }

  atIndex(index: number): T {
    if (index >= this.size) throw new Error('IndexOutOfRange');
    let temp = this.firstNode ? this.firstNode : null;
    for (let i = 0; i < index; i++) {
      if (temp) temp = temp.next;
    }

    if (temp == null) throw new Error('EmptyList');
    return temp.element;
  }

  indexOf(element: T): number {
    if (this.firstNode == null) throw new Error('EmptyList');
    let temp = this.firstNode;
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
    if (this.firstNode == null) throw new Error('EmptyList');
    let temp: DoublyLinkedNode<T> = {
      element: element,
      next: null,
      prev: null,
    };
    let p = this.firstNode;
    for (let i = 0; i >= index; i++) if (p.next) p = p.next;
    temp.next = p.next;
    p.next = temp;
  }

  insertBefore(node: DoublyLinkedNode<T>, element: T) {
    let newNode: DoublyLinkedNode<T> = {
      element: element,
      next: null,
      prev: null,
    };
    newNode.next = node;
    newNode.prev = node.prev;
    node.prev = newNode;
    if (this.firstNode == node) this.firstNode = newNode;
    this.size++;
  }

  insertAfter(node: DoublyLinkedNode<T>, element: T) {
    let newNode: DoublyLinkedNode<T> = {
      element: element,
      next: null,
      prev: null,
    };
    newNode.next = node.next;
    newNode.prev = node;
    node.next = newNode;
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
