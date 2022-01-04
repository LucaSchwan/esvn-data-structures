import { expect } from 'chai';
import { DoublyLinkedList, DoublyLinkedNode } from '../src/doubly-linked-list';

describe('DoublyLinkedList', () => {
  it('should be initialized with null as first and last Node', () => {
    let list = new DoublyLinkedList<string>();
    expect(list.getFirst()).to.equal(null);
    expect(list.getLast()).to.equal(null);
  });

  it('should be able to be initialised with a Node as first and last Node.', () => {
    let element: DoublyLinkedNode<string> = {
      element: 'test',
      next: null,
      prev: null,
    };
    let list = new DoublyLinkedList<string>(element);

    let first = list.getFirst();
    let last = list.getLast();

    expect(first).to.not.equal(null);
    expect(last).to.not.equal(null);
    if (first) expect(first.element).to.equal('test');
    if (last) expect(last.element).to.equal('test');
  });
});
