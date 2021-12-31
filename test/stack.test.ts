import { expect } from 'chai';
import { Stack, StackNode } from '../src/linked-list';

describe('Stack', () => {
  it('should be initialised with null as head when passed no arguments', () => {
    let stack = new Stack();
    expect(stack.head).to.be.null;
  });

  it('should be able to be initialised with a node as head', () => {
    let node: StackNode<string> = {
      data: 'test',
      next: null,
    };
    let stack = new Stack<string>(node);
    expect(stack.head).to.equal(node);
  });

  it('should have the right type', () => {
    let stringStack = new Stack<string>({
      data: 'test',
      next: null,
    });
    if (stringStack.head) expect(stringStack.head.data).to.be.a('string');

    let numberStack = new Stack<number>({
      data: 5,
      next: null,
    });
    if (numberStack.head) expect(numberStack.head.data).to.be.a('number');

    let booleanStack = new Stack<boolean>({
      data: true,
      next: null,
    });
    if (booleanStack.head) expect(booleanStack.head.data).to.be.a('boolean');
  });
});
