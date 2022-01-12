export interface SinglyLinkedNode<T> {
  element: T;
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

  addNode(node: SinglyLinkedNode<T>) {
    if (this.head == null) {
      this.head = node;
    } else {
      let p: SinglyLinkedNode<T>;
      p = this.head;
      while (p.next != null) p = p.next;
      p.next = node;
    }
    this.size++;
  }

  add(element: T) {
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

  atIndex(index: number): T {
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
    let p = this.head;
    for (let i = 0; i >= index; i++) if (p.next) p = p.next;
    temp.next = p.next;
    p.next = temp;
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
    if (this.head) {
      this.head = this.head.next;
      this.size--;
    } else {
      throw new Error('EmptyList');
    }
  }

  removeAtIndex(index: number): void {
    if (index >= this.size) throw new Error('IndexOutOfRange');
    if (this.head == null) throw new Error('EmptyList');
    let p = this.head;
    for (let i = 0; i >= index; i++) if (p.next) p = p.next;
    if (p.next) p.next = p.next.next;
  }

  contains(element: T): boolean {
    if (this.head == null) return false;
    let p: SinglyLinkedNode<T> | null = this.head;
    while (p) {
      if (p.element == element) return true;
      p = p.next;
    }
    return false;
  }

  reverse(): void {
    let reversedList = new SinglyLinkedList<T>();
    if (this.head == null) throw new Error('EmptyList');
    while (this.head) {
      reversedList.insertBeginning(this.head.element);
      this.removeBeginning();
    }
    this.size = reversedList.getSize();
    this.head = reversedList.getHead();
  }

  forEach(callback: (element: T) => any): void {
    if (this.head == null) throw new Error('EmptyList');
    let p: SinglyLinkedNode<T> | null = this.head;
    while (p) {
      callback(p.element);
      p = p.next;
    }
  }

  toString(): string {
    let p: SinglyLinkedNode<T> | null = this.head;
    let str = '';
    if (p) {
      str += `${p.element as unknown as string}`;
      p = p.next;
    } else {
      throw new Error('EmptyList');
    }
    while (p) {
      str += `, ${p.element as unknown as string}`;
      p = p.next;
    }
    return str;
  }

  toArray(): Array<T> {
    let array: Array<T> = [];
    let p: SinglyLinkedNode<T> | null = this.head;
    while (p) {
      array.push(p.element);
      p = p.next;
    }
    return array;
  }

  isEmpty(): boolean {
    return this.head ? false : true;
  }

  prettyPrint(): string {
    let p: SinglyLinkedNode<T> | null = this.head;
    let str = '';
    if (p) {
      str += `${p.element as unknown as string}`;
      p = p.next;
    } else {
      throw new Error('EmptyList');
    }
    while (p) {
      str += ` -> ${p.element as unknown as string}`;
      p = p.next;
    }
    return str;
  }
}
