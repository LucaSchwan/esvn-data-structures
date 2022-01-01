import { expect } from 'chai';
import { DoublyLinkedList, DoublyLinkedNode } from '../src/doubly-linked-list';

describe('DoublyLinkedList', () => {
  it('should be initialized with null as first and last Node', () => {
    let list = new DoublyLinkedList<string>();
    expect(list.getFirst()).to.equal(null);
    expect(list.getLast()).to.equal(null);
  });
});
