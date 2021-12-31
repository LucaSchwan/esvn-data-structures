import { expect } from 'chai';
import { Queue, Node } from '../src/queue';

describe('Queue', () => {
  it('should be initilised with null as first and last Node', () => {
    let queue = new Queue<string>();
    expect(queue.firstNode).to.equal(null);
    expect(queue.lastNode).to.equal(null);
  });

  it('should be able to be initialised with a Node as first and last Node.', () => {
    let element: Node<string> = {
      element: 'test',
      next: null,
      prev: null,
    };
    let queue = new Queue<string>(element);

    expect(queue.firstNode).to.not.equal(null);
    expect(queue.lastNode).to.not.equal(null);
    if (queue.firstNode) expect(queue.firstNode.element).to.equal('test');
    if (queue.lastNode) expect(queue.lastNode.element).to.equal('test');
  });

  it('should add a Node to the end of the Queue when enqueueing.', () => {
    let queue = new Queue<string>();
    queue.enqueue('test');
    expect(queue.lastNode).to.not.equal(null);
    if (queue.lastNode) expect(queue.lastNode.element).to.equal('test');
  });

  it('should unque the first Node of the Queue.', () => {
    let queue = new Queue<string>();
    queue.enqueue('test');
    let node = queue.lastNode;

    expect(node).to.not.equal(null);

    let element = queue.dequeue();

    expect(element).to.not.equal(null);
    if (node) expect(element).to.equal(node.element);
    if (node) expect(node.prev).to.equal(queue.lastNode);
  });
});
