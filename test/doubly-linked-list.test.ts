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
    if (node.prev) expect(node.prev.element).to.equal('test');
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

  it('should add a Node before another node', () => {
    let node: DoublyLinkedNode<string> = {
      element: 'first',
      next: null,
      prev: null,
    };

    let list = new DoublyLinkedList();
    list.addNode(node);

    list.insertBefore(node, 'new');

    expect(node.prev).to.not.equal(null);
    let first = list.getFirst();
    expect(first).to.not.equal(null);
    if (first) expect(first.element).to.equal('new');
  });

  it('should insert a Node after a given node.', () => {
    let node: DoublyLinkedNode<string> = {
      element: 'first',
      next: null,
      prev: null,
    };

    let list = new DoublyLinkedList();
    list.addNode(node);

    list.insertAfter(node, 'new');

    expect(node.next).to.not.equal(null);
    let first = list.getFirst();
    expect(first).to.not.equal(null);
    if (first) if (first.next) expect(first.next.element).to.equal('new');
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

  it('should return a node at an Index.', () => {
    let list = new DoublyLinkedList('test');
    let node: DoublyLinkedNode<string> = {
      element: 'new',
      next: null,
      prev: null,
    };
    list.addNode(node);

    let sameNode = list.nodeAtIndex(1);

    expect(sameNode).to.equal(node);
  });

  it('should return the element at an Index', () => {
    let list = new DoublyLinkedList('test');
    let node: DoublyLinkedNode<string> = {
      element: 'new',
      next: null,
      prev: null,
    };
    list.addNode(node);

    let element = list.atIndex(1);

    expect(element).to.equal(node.element);
  });

  it('should return the index of an element.', () => {
    let list = new DoublyLinkedList('test');
    list.add('new');

    expect(list.indexOf('new')).to.equal(1);
  });

  it('should insert a Node at a given index.', () => {
    let list = new DoublyLinkedList('test');
    list.add('test');

    list.insert('new', 1);

    expect(list.atIndex(1)).to.equal('new');
  });

  it('should remove the Node after the given one.', () => {
    let node: DoublyLinkedNode<string> = {
      element: 'test',
      next: null,
      prev: null,
    };
    let list = new DoublyLinkedList();
    list.addNode(node);

    list.add('test');
    expect(node.next).to.not.equal(null);

    list.removeAfter(node);
    expect(node.next).to.equal(null);
  });

  it('should remove the Node before the given one.', () => {
    let list = new DoublyLinkedList();
    list.add('test');

    let node: DoublyLinkedNode<string> = {
      element: 'test',
      next: null,
      prev: null,
    };
    list.addNode(node);

    expect(node.prev).to.not.equal(null);

    list.removeBefore(node);
    expect(node.prev).to.equal(null);
  });

  it('should remove a Node at a given index.', () => {
    let list = new DoublyLinkedList('test');
    list.add('remove');
    list.add('new');
    expect(list.atIndex(1)).to.equal('remove');

    list.removeAtIndex(1);

    expect(list.atIndex(1)).to.equal('new');
  });

  it('should return true if an element is in the list and false if not.', () => {
    let list = new DoublyLinkedList('test');

    expect(list.contains('test')).to.equal(true);
    expect(list.contains('other')).to.equal(false);
  });

  it('should reverse the list.', () => {
    let list = new DoublyLinkedList('start');
    list.add('end');

    list.reverse();

    expect(list.atIndex(0)).to.equal('end');
    expect(list.atIndex(1)).to.equal('start');
  });

  it('should apply a callback function for each element.', () => {
    let list = new DoublyLinkedList(1);
    list.add(2);
    list.add(3);
    list.add(4);

    let sum = 0;

    list.forEach((element: number) => {
      sum += element;
    });

    expect(sum).to.equal(10);
  });

  it('should return a stringified version of the list.', () => {
    let list = new DoublyLinkedList(1);
    list.add(2);
    list.add(3);
    list.add(4);
    list.add(5);

    let stringified = list.toString();

    expect(stringified).to.equal('1, 2, 3, 4, 5');
  });

  it('should return an array with the elements.', () => {
    let list = new DoublyLinkedList(1);
    list.add(2);
    list.add(3);
    list.add(4);
    list.add(5);

    let array = list.toArray();
    let compArray = [1, 2, 3, 4, 5];

    let arrayEquals = (a: number[], b: number[]) => {
      return (
        Array.isArray(a) &&
        Array.isArray(b) &&
        a.length === b.length &&
        a.every((val, index) => val === b[index])
      );
    };

    expect(arrayEquals(array, compArray)).to.equal(true);
  });
});
