import { expect } from 'chai';
import { LinkedList, ListNode } from '../src/linked-list';

describe('LinkedList', () => {
  it('should be initialised with null as head when passed no arguments', () => {
    let linkedList = new LinkedList();
    expect(linkedList.head).to.be.null;
  });

  it('should be able to be initialised with a node as head', () => {
    let node: ListNode<string> = {
      value: 'test',
      next: null,
    };
    let linkedList = new LinkedList<string>(node);
    expect(linkedList.head).to.equal(node);
  });

  it('should have the right type', () => {
    let stringLinkedList = new LinkedList<string>({
      value: 'test',
      next: null,
    });
    if (stringLinkedList.head)
      expect(stringLinkedList.head.value).to.be.a('string');

    let numberLinkedList = new LinkedList<number>({
      value: 5,
      next: null,
    });
    if (numberLinkedList.head)
      expect(numberLinkedList.head.value).to.be.a('number');

    let booleanLinkedList = new LinkedList<boolean>({
      value: true,
      next: null,
    });
    if (booleanLinkedList.head)
      expect(booleanLinkedList.head.value).to.be.a('boolean');
  });

  it('should add a node to the head if the linkedList is empty', () => {
    let node: ListNode<string> = {
      value: 'test',
      next: null,
    };
    let linkedList = new LinkedList<string>();

    linkedList.addNode(node);
    if (linkedList.head) expect(linkedList.head).to.equal(node);
  });

  it('should add a node as the next of the last node if there are already nodes in the list', () => {
    let node: ListNode<string> = {
      value: 'test',
      next: null,
    };
    let linkedList = new LinkedList<string>(node);

    let newNode: ListNode<string> = {
      value: 'new',
      next: null,
    };

    linkedList.addNode(newNode);
    if (linkedList.head) expect(linkedList.head.next).to.equal(newNode);
  });

  it('should create a new node and add it to the head or next of the last node if passed a parameter that is the type of the list', () => {
    let linkedList = new LinkedList<string>();

    // add to the head
    linkedList.newNode('test');
    if (linkedList.head) expect(linkedList.head.value).to.equal('test');

    // add a new node after the head
    linkedList.newNode('test2');
    if (linkedList.head)
      if (linkedList.head.next)
        expect(linkedList.head.next.value).to.equal('test2');
  });
});
