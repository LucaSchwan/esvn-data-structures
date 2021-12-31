import { expect } from 'chai';
import { Stack, StackNode } from '../src/linked-list';

describe('LinkedList', () => {
  it('should be initialised with null as head when passed no arguments', () => {
    let list = new Stack();
    expect(list.head).to.be.null;
  });

  it('should be able to be initialised with a node as head', () => {
    let node: StackNode<string> = {
      data: 'test',
      next: null,
    };
    let list = new Stack<string>(node);
    expect(list.head).to.equal(node);
  });

  it('should have the right type', () => {
    let stringList = new Stack<string>({
      data: 'test',
      next: null,
    });
    if (stringList.head) expect(stringList.head.data).to.be.a('string');

    let numberList = new Stack<number>({
      data: 5,
      next: null,
    });
    if (numberList.head) expect(numberList.head.data).to.be.a('number');

    let booleanList = new Stack<boolean>({
      data: true,
      next: null,
    });
    if (booleanList.head) expect(booleanList.head.data).to.be.a('boolean');
  });

  it('should add a node to the head if the linkedList is empty', () => {
    let node: StackNode<string> = {
      data: 'test',
      next: null,
    };
    let list = new Stack<string>();

    list.addNode(node);
    if (list.head) expect(list.head).to.equal(node);
  });

  it('should add a node as the next of the last node if there are already nodes in the list', () => {
    let node: StackNode<string> = {
      data: 'test',
      next: null,
    };
    let list = new Stack<string>(node);

    let newNode: StackNode<string> = {
      data: 'new',
      next: null,
    };

    list.addNode(newNode);
    if (list.head) expect(list.head.next).to.equal(newNode);
  });

  it('should create a new node and add it to the head or next of the last node if passed a parameter that is the type of the list', () => {
    let list = new Stack<string>();

    // add to the head
    list.newNode('test');
    if (list.head) expect(list.head.data).to.equal('test');

    // add a new node after the head
    list.newNode('test2');
    if (list.head)
      if (list.head.next) expect(list.head.next.data).to.equal('test2');
  });

  it('should insert a node after a given node', () => {
    let node: StackNode<string> = {
      data: 'first',
      next: null,
    };

    let list = new Stack<string>(node);

    let newNode: StackNode<string> = {
      data: 'new',
      next: null,
    };

    list.insertAfter(node, newNode);

    expect(node.next).to.equal(newNode);
    if (list.head) expect(list.head.next).to.equal(newNode);
  });

  it('should insert a new node at the beginning of a list', () => {
    let list = new Stack<string>({
      data: 'test',
      next: null,
    });

    let node: StackNode<string> = {
      data: 'first',
      next: null,
    };

    list.insertBeginning(node);

    expect(list.head).to.equal(node);
  });

  it('should remove the node after the given one', () => {
    let node: StackNode<string> = {
      data: 'test',
      next: null,
    };
    let list = new Stack<string>(node);

    list.newNode('test');
    expect(node.next).to.not.equal(null);

    list.removeAfter(node);
    expect(node.next).to.equal(null);
  });

  it('should remove the first node of a list', () => {
    let list = new Stack<string>();
    list.newNode('test');
    if (list.head) expect(list.head.data).to.equal('test');

    list.removeBeginning();
    expect(list.head).to.equal(null);
  });
});
