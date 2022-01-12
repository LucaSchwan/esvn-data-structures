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

  it('should add a node to the head if the LinkedList is empty.', () => {
    let list = new DoublyLinkedList();
    let node: DoublyLinkedNode<string> = {
      element: 'test',
      next: null,
      prev: null,
    };
    list.addNode(node);

    let head = list.getFirst();
    expect(head).to.not.equal(null);
    if (head) expect(head.element).to.equal('test');
  });

  it('should add a Node as the next of the last Node if there are already Nodes in the LinkedList.', () => {
    let list = new DoublyLinkedList('test');
    let node: DoublyLinkedNode<string> = {
      element: 'new',
      next: null,
      prev: null,
    };
    list.addNode(node);
    let head = list.getFirst();
    expect(head).to.not.equal(null);
    if (head) {
      expect(head).to.not.equal(null);
      if (head.next) expect(head.next.element).to.equal('new');
    }
  });

  it('should create a new Node and add it to the head or next of the last Node if passed a parameter that is the type of the LinkedList.', () => {
    let list = new DoublyLinkedList();

    // add to the head
    list.add('test');
    let head = list.getFirst();
    if (head) expect(head.element).to.equal('test');

    // add a new node after the head
    list.add('test2');
    head = list.getFirst();
    expect(head).to.not.equal(null);
    if (head) {
      expect(head).to.not.equal(null);
      if (head.next) expect(head.next.element).to.equal('test2');
    }
  });

  it('should add a Node at the beginning', () => {
    let list = new DoublyLinkedList();
    list.insertBeginning('test');

    expect(list.getFirst()).to.not.equal(null);
  });

  it("should increase it's size if an element is inserted", () => {
    let list = new DoublyLinkedList('test');
    let size = list.getSize();

    list.insertBeginning('test');
    let newSize = list.getSize();

    expect(newSize - size).to.equal(1);
  });

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
