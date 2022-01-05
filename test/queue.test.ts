import { expect } from 'chai';
import { DoublyLinkedNode } from '../src/doubly-linked-list';
import { Queue } from '../src/queue';

describe('Queue', () => {
  it('should be initilised with null as first and last Node', () => {
    let queue = new Queue<string>();
    expect(queue.getFirst()).to.equal(null);
    expect(queue.getLast()).to.equal(null);
  });

  it('should be able to be initialised with an element.', () => {
    let queue = new Queue<string>('test');

    let first = queue.getFirst();
    let last = queue.getLast();
    expect(first).to.not.equal(null);
    expect(last).to.not.equal(null);
    if (first) expect(first.element).to.equal('test');
    if (last) expect(last.element).to.equal('test');
  });

  it('should add a Node to the end of the Queue when enqueueing.', () => {
    let queue = new Queue<string>();
    queue.enqueue('test');
    let last = queue.getLast();
    expect(last).to.not.equal(null);
    if (last) expect(last.element).to.equal('test');
  });

  it('should unque the first Node of the Queue.', () => {
    let queue = new Queue('test');
    queue.enqueue('new');
    let node = queue.getLast();

    expect(node).to.not.equal(null);

    let element = queue.dequeue();

    expect(element).to.not.equal(null);
    if (node) expect(element).to.equal(node.element);
    if (node) expect(node.prev).to.equal(queue.getLast());
  });

  it("should increase it's size by 1 if an element is enqueued.", () => {
    let queue = new Queue('test');
    let size = queue.getSize();

    queue.enqueue('new');
    let newSize = queue.getSize();

    expect(newSize - size).to.equal(1);
  });
});
