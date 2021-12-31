import { expect } from 'chai';
import { Queue, QueueElement } from '../src/queue';

describe('Queue', () => {
  it('should be initilised with null as first and last element', () => {
    let queue = new Queue<string>();
    expect(queue.firstElement).to.equal(null);
    expect(queue.lastElement).to.equal(null);
  });

  it('should be able to be initialised with an element as first and last element', () => {
    let element: QueueElement<string> = {
      data: 'test',
      next: null,
      prev: null,
    };
    let queue = new Queue<string>(element);

    expect(queue.firstElement).to.not.equal(null);
    expect(queue.lastElement).to.not.equal(null);
    if (queue.firstElement) expect(queue.firstElement.data).to.equal('test');
    if (queue.lastElement) expect(queue.lastElement.data).to.equal('test');
  });

  it('should add a element to the end of the queue when enqueueing', () => {
    let queue = new Queue<string>();
    queue.enqueue('test');
    expect(queue.lastElement).to.not.equal(null);
    if (queue.lastElement) expect(queue.lastElement.data).to.equal('test');
  });

  it('should unque the first element of the queue', () => {
    let queue = new Queue<string>();
    queue.enqueue('test');
    let element = queue.lastElement;

    expect(element).to.not.equal(null);

    let data = queue.dequeue();

    expect(data).to.not.equal(null);
    if (element) expect(data).to.equal(element.data);
    if (element) expect(element.prev).to.equal(queue.lastElement);
  });
});
