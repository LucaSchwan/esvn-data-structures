export interface StackFrame<T> {
  data: T | null;
  next: StackFrame<T> | null;
}

export class Stack<T> {
  head: StackFrame<T> | null;

  constructor(frame?: StackFrame<T>) {
    this.head = frame || null;
  }

  push(frame: StackFrame<T>) {
    frame.next = this.head;
    this.head = frame;
  }
}
