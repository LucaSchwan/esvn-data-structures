import { expect } from 'chai';
import { LinkedList } from '../src/linked-list';
import { Node } from '../src/models/singly-linked-list-structures';

describe('LinkedList', () => {
  it('should be initialised with null as head when passed no arguments.', () => {
    let list = new LinkedList();
    expect(list.getHead()).to.be.null;
  });

  it('should be able to be initialised with a Node containing an element as head.', () => {
    let list = new LinkedList<string>('test');
    let head = list.getHead();
    expect(head).to.not.equal(null);
    if (head) expect(head.element).to.equal('test');
  });

  it('should have the right type.', () => {
    let stringList = new LinkedList<string>('test');
    let head: Node<string> | Node<number> | Node<boolean> | null =
      stringList.getHead();
    expect(head).to.not.equal(null);
    if (head) expect(head.element).to.be.a('string');

    let numberList = new LinkedList<number>(5);
    head = numberList.getHead();
    expect(head).to.not.equal(null);
    if (head) expect(head.element).to.be.a('number');

    let booleanList = new LinkedList<boolean>(true);
    head = booleanList.getHead();
    expect(head).to.not.equal(null);
    if (head) expect(head.element).to.be.a('boolean');
  });

  it('should add a node to the getHead() if the LinkedList is empty.', () => {
    let list = new LinkedList<string>();
    let node: Node<string> = {
      element: 'test',
      next: null,
    };
    list.addNode(node);

    let head = list.getHead();
    expect(head).to.not.equal(null);
    if (head) expect(head.element).to.equal('test');
  });

  it('should add a Node as the next of the last Node if there are already Nodes in the LinkedList.', () => {
    let list = new LinkedList<string>('test');
    let node: Node<string> = {
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

  it('should create a new Node and add it to the getHead() or next of the last Node if passed a parameter that is the type of the LinkedList.', () => {
    let list = new LinkedList<string>();

    // add to the head
    list.newNode('test');
    let head = list.getHead();
    if (head) expect(head.element).to.equal('test');

    // add a new node after the head
    list.newNode('test2');
    head = list.getHead();
    expect(head).to.not.equal(null);
    if (head) {
      expect(head).to.not.equal(null);
      if (head.next) expect(head.next.element).to.equal('test2');
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
    let head = list.getHead();
    expect(head).to.not.equal(null);
    if (head) expect(head.next).to.equal(newNode);
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

    expect(list.getHead()).to.equal(node);
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
    let head = list.getHead();
    expect(head).to.not.equal(null);
    if (head) expect(head.element).to.equal('test');

    list.removeBeginning();
    expect(list.getHead()).to.equal(null);
  });
});
