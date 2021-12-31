import { expect } from 'chai';
import { LinkedList } from '../src/structures/linked-list';
import { Node } from '../src/models/singly-linked-list-structures';

describe('LinkedList', () => {
  it('should be initialised with null as head when passed no arguments.', () => {
    let list = new LinkedList();
    expect(list.head).to.be.null;
  });

  it('should be able to be initialised with a Node containing an element as head.', () => {
    let list = new LinkedList<string>('test');
    expect(list.head).to.not.equal(null);
    if (list.head) expect(list.head.element).to.equal('test');
  });

  it('should have the right type.', () => {
    let stringList = new LinkedList<string>('test');
    expect(stringList.head).to.not.equal(null);
    if (stringList.head) expect(stringList.head.element).to.be.a('string');

    let numberList = new LinkedList<number>(5);
    expect(numberList.head).to.not.equal(null);
    if (numberList.head) expect(numberList.head.element).to.be.a('number');

    let booleanList = new LinkedList<boolean>(true);
    expect(booleanList.head).to.not.equal(null);
    if (booleanList.head) expect(booleanList.head.element).to.be.a('boolean');
  });

  it('should add a node to the head if the LinkedList is empty.', () => {
    let list = new LinkedList<string>();
    let node: Node<string> = {
      element: 'test',
      next: null,
    };
    list.addNode(node);

    expect(list.head).to.not.equal(null);
    if (list.head) expect(list.head.element).to.equal('test');
  });

  it('should add a Node as the next of the last Node if there are already Nodes in the LinkedList.', () => {
    let list = new LinkedList<string>('test');
    let node: Node<string> = {
      element: 'new',
      next: null,
    };
    list.addNode(node);
    expect(list.head).to.not.equal(null);
    if (list.head) {
      expect(list.head.next).to.not.equal(null);
      if (list.head.next) expect(list.head.next.element).to.equal('new');
    }
  });

  it('should create a new Node and add it to the head or next of the last Node if passed a parameter that is the type of the LinkedList.', () => {
    let list = new LinkedList<string>();

    // add to the head
    list.newNode('test');
    if (list.head) expect(list.head.element).to.equal('test');

    // add a new node after the head
    list.newNode('test2');
    expect(list.head).to.not.equal(null);
    if (list.head) {
      expect(list.head.next).to.not.equal(null);
      if (list.head.next) expect(list.head.next.element).to.equal('test2');
    }
  });

  it('should insert a Node after a given node.', () => {
    let node: Node<string> = {
      element: 'first',
      next: null,
    };

    let list = new LinkedList<string>();
    list.addNode(node);

    let newNode: Node<string> = {
      element: 'new',
      next: null,
    };

    list.insertAfter(node, newNode);

    expect(node.next).to.equal(newNode);
    expect(list.head).to.not.equal(null);
    if (list.head) expect(list.head.next).to.equal(newNode);
  });

  it('should insert a new Node at the beginning of a list.', () => {
    let list = new LinkedList<string>();
    list.addNode({
      element: 'test',
      next: null,
    });

    let node: Node<string> = {
      element: 'first',
      next: null,
    };

    list.insertBeginning(node);

    expect(list.head).to.equal(node);
  });

  it('should remove the Node after the given one.', () => {
    let node: Node<string> = {
      element: 'test',
      next: null,
    };
    let list = new LinkedList<string>();
    list.addNode(node);

    list.newNode('test');
    expect(node.next).to.not.equal(null);

    list.removeAfter(node);
    expect(node.next).to.equal(null);
  });

  it('should remove the first Node of a LinkedList.', () => {
    let list = new LinkedList<string>();
    list.newNode('test');
    expect(list.head).to.not.equal(null);
    if (list.head) expect(list.head.element).to.equal('test');

    list.removeBeginning();
    expect(list.head).to.equal(null);
  });
});
