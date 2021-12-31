export interface StackFrame<T> {
  data: T | null;
  next: StackFrame<T> | null;
}

export class Stack<T> {
  head: StackFrame<T> | null = null;
  size: number = 0;

  push(data: T): void {
    let frame: StackFrame<T> = {
      data: data,
      next: this.head,
    };
    this.head = frame;
    this.size++;
  }

  pushFrame(frame: StackFrame<T>): void {
    this.head = frame;
    this.size++;
  }

  pop(): T | null | never {
    if (this.head == null) {
      throw new Error('StackUnderflow');
    }
    let data = this.head.data;
    this.head = this.head.next;
    return data;
  }

  popFrame(): StackFrame<T> | null | never {
    if (this.head == null) {
      throw new Error('StackUnderflow');
    }
    return this.head;
  }

  peak(): T | null {
    return this.head ? this.head.data : null;
  }
}
