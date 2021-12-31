export interface QueueElement<T> {
  data: T | null;
  next: QueueElement<T> | null;
  prev: QueueElement<T> | null;
}

export class Queue<T> {
  firstElement: QueueElement<T> | null;
  lastElement: QueueElement<T> | null;

  constructor(element?: QueueElement<T>) {
    this.firstElement = element || null;
    this.lastElement = element || null;
  }

  enqueue(data: T): void {
    let element: QueueElement<T> = {
      data: data,
      next: this.firstElement,
      prev: null,
    };
    this.lastElement = element;
  }

  dequeue(): T | null | never {
    let element: QueueElement<T> | null = this.lastElement;
    if (element == null) {
      throw new Error('QueueEmpty');
    }
    this.lastElement = element.prev;
    return element.data;
  }
}
