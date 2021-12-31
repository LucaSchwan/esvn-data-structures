export interface StackNode<T> {
  data: T | null;
  next: StackNode<T> | null;
}
export class Stack<T> {
  head: StackNode<T> | null;

  constructor(node?: StackNode<T>) {
    this.head = node || null;
  }

  addNode(node: StackNode<T>): StackNode<T> {
    let p: StackNode<T>;
    if (this.head == null) {
      this.head = node;
    } else {
      p = this.head;
      while (p.next != null) p = p.next;
      p.next = node;
    }
    return this.head;
  }

  newNode(value: T): StackNode<T> {
    let p: StackNode<T>;
    let temp: StackNode<T> = {
      data: value,
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

  insertAfter(node: StackNode<T>, newNode: StackNode<T>): void {
    newNode.next = node.next;
    node.next = newNode;
  }

  insertBeginning(node: StackNode<T>): void {
    node.next = this.head;
    this.head = node;
  }

  removeAfter(node: StackNode<T>): void {
    if (node.next) node.next = node.next.next;
  }

  removeBeginning(): void {
    if (this.head) this.head = this.head.next;
  }
}
