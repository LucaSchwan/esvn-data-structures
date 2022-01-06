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

  it('should return a node at an Index.', () => {
    let list = new SinglyLinkedList('test');
    let node: SinglyLinkedNode<string> = {
      element: 'new',
      next: null,
    };
    list.addNode(node);

    let sameNode = list.nodeAtIndex(1);

    expect(sameNode).to.equal(node);
  });

  it('should return the element at an Index', () => {
    let list = new SinglyLinkedList('test');
    let node: SinglyLinkedNode<string> = {
      element: 'new',
      next: null,
    };
    list.addNode(node);

    let element = list.atIndex(1);

    expect(element).to.equal(node.element);
  });

  it('should return the index of an element.', () => {
    let list = new SinglyLinkedList('test');
    list.add('new');

    expect(list.indexOf('new')).to.equal(1);
  });

  it('should insert a Node at a given index.', () => {
    let list = new SinglyLinkedList('test');
    list.add('test');

    list.insert('new', 1);

    expect(list.atIndex(1)).to.equal('new');
  });

  it('should remove a Node at a given index.', () => {
    let list = new SinglyLinkedList('test');
    list.add('remove');
    list.add('new');
    expect(list.atIndex(1)).to.equal('remove');

    list.removeAtIndex(1);

    expect(list.atIndex(1)).to.equal('new');
  });

  it('should return true if an element is in the list and false if not.', () => {
    let list = new SinglyLinkedList('test');

    expect(list.contains('test')).to.equal(true);
    expect(list.contains('other')).to.equal(false);
  });

  it('should reverse the list.', () => {
    let list = new SinglyLinkedList('start');
    list.add('end');

    list.reverse();

    expect(list.atIndex(0)).to.equal('end');
    expect(list.atIndex(1)).to.equal('start');
  });

  it('should apply a callback function for each element.', () => {
    let list = new SinglyLinkedList(1);
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
    let list = new SinglyLinkedList(1);
    list.add(2);
    list.add(3);
    list.add(4);
    list.add(5);

    let stringified = list.toString();

    expect(stringified).to.equal('1, 2, 3, 4, 5');
  });

  it('should return an array with the elements.', () => {
    let list = new SinglyLinkedList(1);
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

  it('should return if the list is empty or not.', () => {
    let list = new SinglyLinkedList();

    expect(list.isEmpty()).to.equal(true);

    list.add('test');

    expect(list.isEmpty()).to.equal(false);
  });

  it('should pretty print the list.', () => {
    let list = new SinglyLinkedList(1);
    list.add(2);
    list.add(3);
    list.add(4);
    list.add(5);

    let prettyPrinted = list.prettyPrint();

    expect(prettyPrinted).to.equal('1 -> 2 -> 3 -> 4 -> 5');
  });
});
