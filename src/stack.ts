export interface StackFrame<T> {
  data: T | null;
  next: StackFrame<T> | null;
}

export class Stack<T> {
  head: StackFrame<T> | null;

  constructor(frame?: StackFrame<T>) {
    this.head = frame || null;
  }

  push(data: T) {
    let frame: StackFrame<T> = {
      data: data,
      next: this.head,
    };
    this.head = frame;
  }
}
