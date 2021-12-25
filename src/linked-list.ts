export interface ListNode<T> {
  value: T | null;
  next: ListNode<T> | null;
}
export class LinkedList<T> {
  head: ListNode<T> | null;

  constructor(node?: ListNode<T>) {
    this.head = node || null;
  }

  addNode(node: ListNode<T>): ListNode<T> {
    let p: ListNode<T>;
    if (this.head == null) {
      this.head = node;
    } else {
      p = this.head;
      while (p.next != null) p = p.next;
      p.next = node;
    }
    return this.head;
  }

  newNode(value: T): ListNode<T> {
    let p: ListNode<T>;
    let temp: ListNode<T> = {
      value: value,
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

  insertAfter(node: ListNode<T>, newNode: ListNode<T>): void {
    newNode.next = node.next;
    node.next = newNode;
  }

  insertBeginning(node: ListNode<T>): void {
    node.next = this.head;
    this.head = node;
  }

  removeAfter(node: ListNode<T>): void {
    if (node.next) node.next = node.next.next;
  }

  removeBeginning(): void {
    if (this.head) this.head = this.head.next;
  }
}
