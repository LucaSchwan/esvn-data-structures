import { expect } from 'chai';
import { SinglyLinkedList, SinglyLinkedNode } from '../src/singly-linked-list';

describe('SinglyLinkedList', () => {
  it('should be initialised with null as head when passed no arguments.', () => {
    let list = new SinglyLinkedList();
    expect(list.getHead()).to.be.null;
  });

  it('should be able to be initialised with a Node containing an element as head.', () => {
    let list = new SinglyLinkedList('test');
    let head = list.getHead();
    expect(head).to.not.equal(null);
    if (head) expect(head.element).to.equal('test');
  });

  it('should add a node to the head if the LinkedList is empty.', () => {
    let list = new SinglyLinkedList();
    let node: SinglyLinkedNode<string> = {
      element: 'test',
      next: null,
    };
    list.addNode(node);

    let head = list.getHead();
    expect(head).to.not.equal(null);
    if (head) expect(head.element).to.equal('test');
  });

  it('should add a Node as the next of the last Node if there are already Nodes in the LinkedList.', () => {
    let list = new SinglyLinkedList('test');
    let node: SinglyLinkedNode<string> = {
      element: 'new',
      next: null,
    };
    list.addNode(node);
    let head = list.getHead();
    expect(head).to.not.equal(null);
    if (head) {
      expect(head).to.not.equal(null);
      if (head.next) expect(head.next.element).to.equal('new');
    }
  });

  it('should create a new Node and add it to the head or next of the last Node if passed a parameter that is the type of the LinkedList.', () => {
    let list = new SinglyLinkedList();

    // add to the head
    list.add('test');
    let head = list.getHead();
    if (head) expect(head.element).to.equal('test');

    // add a new node after the head
    list.add('test2');
    head = list.getHead();
    expect(head).to.not.equal(null);
    if (head) {
      expect(head).to.not.equal(null);
      if (head.next) expect(head.next.element).to.equal('test2');
    }
  });

  it("should increase it's size by one if an element is added.", () => {
    let list = new SinglyLinkedList();
    let size = list.getSize();

    list.add('test');
    let newSize = list.getSize();

    expect(newSize - size).to.equal(1);
  });

  it('should insert a Node after a given node.', () => {
    let node: SinglyLinkedNode<string> = {
      element: 'first',
      next: null,
    };

    let list = new SinglyLinkedList();
    list.addNode(node);

    list.insertAfter(node, 'new');

    expect(node.next).to.not.equal(null);
    let head = list.getHead();
    expect(head).to.not.equal(null);
    if (head) if (head.next) expect(head.next.element).to.equal('new');
  });

  it('should insert a new Node at the beginning of a list.', () => {
    let list = new SinglyLinkedList<string>();
    list.addNode({
      element: 'test',
      next: null,
    });

    list.insertBeginning('first');

    let head = list.getHead();
    if (head) expect(head.element).to.equal('first');
  });

  it('should remove the Node after the given one.', () => {
    let node: SinglyLinkedNode<string> = {
      element: 'test',
      next: null,
    };
    let list = new SinglyLinkedList();
    list.addNode(node);

    list.add('test');
    expect(node.next).to.not.equal(null);

    list.removeAfter(node);
    expect(node.next).to.equal(null);
  });

  it('should remove the first Node of a LinkedList.', () => {
    let list = new SinglyLinkedList();
    list.add('test');
    let head = list.getHead();
    expect(head).to.not.equal(null);
    if (head) expect(head.element).to.equal('test');

    list.removeBeginning();
    expect(list.getHead()).to.equal(null);
  });
});
