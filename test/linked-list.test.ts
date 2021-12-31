import { expect } from 'chai';
import { LinkedList, ListNode } from '../src/linked-list';

describe('LinkedList', () => {
  it('should be initialised with null as head when passed no arguments', () => {
    let list = new LinkedList();
    expect(list.head).to.be.null;
  });

  it('should be able to be initialised with a node as head', () => {
    let node: ListNode<string> = {
      value: 'test',
      next: null,
    };
    let list = new LinkedList<string>(node);
    expect(list.head).to.equal(node);
  });

  it('should have the right type', () => {
    let stringList = new LinkedList<string>({
      value: 'test',
      next: null,
    });
    expect(stringList.head).to.not.equal(null);
    if (stringList.head) expect(stringList.head.value).to.be.a('string');

    let numberList = new LinkedList<number>({
      value: 5,
      next: null,
    });
    expect(numberList.head).to.not.equal(null);
    if (numberList.head) expect(numberList.head.value).to.be.a('number');

    let booleanList = new LinkedList<boolean>({
      value: true,
      next: null,
    });
    expect(booleanList.head).to.not.equal(null);
    if (booleanList.head) expect(booleanList.head.value).to.be.a('boolean');
  });

  it('should add a node to the head if the linkedList is empty', () => {
    let node: ListNode<string> = {
      value: 'test',
      next: null,
    };
    let list = new LinkedList<string>();

    list.addNode(node);
    expect(list.head).to.not.equal(null);
    if (list.head) expect(list.head).to.equal(node);
  });

  it('should add a node as the next of the last node if there are already nodes in the list', () => {
    let node: ListNode<string> = {
      value: 'test',
      next: null,
    };
    let list = new LinkedList<string>(node);

    let newNode: ListNode<string> = {
      value: 'new',
      next: null,
    };

    list.addNode(newNode);
    expect(list.head).to.not.equal(null);
    if (list.head) expect(list.head.next).to.equal(newNode);
  });

  it('should create a new node and add it to the head or next of the last node if passed a parameter that is the type of the list', () => {
    let list = new LinkedList<string>();

    // add to the head
    list.newNode('test');
    if (list.head) expect(list.head.value).to.equal('test');

    // add a new node after the head
    list.newNode('test2');
    expect(list.head).to.not.equal(null);
    if (list.head) {
      expect(list.head.next).to.not.equal(null);
      if (list.head.next) expect(list.head.next.value).to.equal('test2');
    }
  });

  it('should insert a node after a given node', () => {
    let node: ListNode<string> = {
      value: 'first',
      next: null,
    };

    let list = new LinkedList<string>(node);

    let newNode: ListNode<string> = {
      value: 'new',
      next: null,
    };

    list.insertAfter(node, newNode);

    expect(node.next).to.equal(newNode);
    expect(list.head).to.not.equal(null);
    if (list.head) expect(list.head.next).to.equal(newNode);
  });

  it('should insert a new node at the beginning of a list', () => {
    let list = new LinkedList<string>({
      value: 'test',
      next: null,
    });

    let node: ListNode<string> = {
      value: 'first',
      next: null,
    };

    list.insertBeginning(node);

    expect(list.head).to.equal(node);
  });

  it('should remove the node after the given one', () => {
    let node: ListNode<string> = {
      value: 'test',
      next: null,
    };
    let list = new LinkedList<string>(node);

    list.newNode('test');
    expect(node.next).to.not.equal(null);

    list.removeAfter(node);
    expect(node.next).to.equal(null);
  });

  it('should remove the first node of a list', () => {
    let list = new LinkedList<string>();
    list.newNode('test');
    expect(list.head).to.not.equal(null);
    if (list.head) expect(list.head.value).to.equal('test');

    list.removeBeginning();
    expect(list.head).to.equal(null);
  });
});
