import { expect } from 'chai';
import { DoublyLinkedList, DoublyLinkedNode } from '../src/doubly-linked-list';

describe('DoublyLinkedList', () => {
  it('should be initialized with null as first and last Node', () => {
    let list = new DoublyLinkedList();
    expect(list.getFirst()).to.equal(null);
    expect(list.getLast()).to.equal(null);
  });

  it('should be able to be initialised with a element.', () => {
    let list = new DoublyLinkedList('test');

    let first = list.getFirst();
    let last = list.getLast();

    expect(first).to.not.equal(null);
    expect(last).to.not.equal(null);
    if (first) expect(first.element).to.equal('test');
    if (last) expect(last.element).to.equal('test');
  });

  it('should add a Node at the beginning', () => {
    let list = new DoublyLinkedList();
    list.insertBeginning('test');

    expect(list.getFirst()).to.not.equal(null);
  });

  it(
    "should increase it's size by one if an element is inserted in the beginning."
  ),
    () => {
      let list = new DoublyLinkedList('test');
      let size = list.getSize();

      list.insertBeginning('new');
      let newSize = list.getSize();

      expect(newSize - size).to.equal(1);
    };

  it('should add a Node at the end', () => {
    let list = new DoublyLinkedList();
    list.insertEnd('test');

    expect(list.getLast()).to.not.equal(null);
  });

  it('should remove a Node from the beginning.', () => {
    let list = new DoublyLinkedList('test');
    list.removeBeginning();

    expect(list.getFirst()).to.equal(null);
  });

  it('should remove a Node from the end.', () => {
    let list = new DoublyLinkedList('test');
    list.removeEnd();

    expect(list.getLast()).to.equal(null);
  });
});
