import { expect } from 'chai';
import { Stack } from '../src/structures/stack';

describe('Stack', () => {
  it('should be initialised with null as head and a size of zero when passed no arguments.', () => {
    let stack = new Stack();
    expect(stack.head).to.be.null;
    expect(stack.size).to.equal(0);
  });

  it("should push a new Node with given element on the top of the Stack and increase it's size by 1.", () => {
    let stack = new Stack<string>();
    let size = stack.size;
    stack.push('test');

    expect(stack.head).not.to.equal(null);
    if (stack.head) expect(stack.head.element).to.equal('test');
    expect(stack.size - size).to.equal(1);
  });

  it('should return an element when popped from the Stack.', () => {
    let stack = new Stack<string>();
    stack.push('test');
    let element = stack.pop();

    expect(element).to.equal('test');
  });

  it('should have the right type.', () => {
    let stringStack = new Stack<string>();
    stringStack.push('test');
    expect(stringStack.head).to.not.equal(null);
    if (stringStack.head) expect(stringStack.head.element).to.be.a('string');

    let numberStack = new Stack<number>();
    numberStack.push(5);
    expect(numberStack.head).to.not.equal(null);
    if (numberStack.head) expect(numberStack.head.element).to.be.a('number');

    let booleanStack = new Stack<boolean>();
    booleanStack.push(true);
    expect(booleanStack.head).to.not.equal(null);
    if (booleanStack.head) expect(booleanStack.head.element).to.be.a('boolean');
  });

  it('should throw a StackUnderflow Error if a pop is tried on an empty Stack', () => {
    let stack = new Stack<string>();
    expect(stack.head).to.equal(null);
    try {
      stack.pop();
    } catch (e: any) {
      expect(e).to.not.equal(null);
    }
  });

  it('should return an element of the Stack without removing it when using peek.', () => {
    let stack = new Stack<string>();
    stack.push('test');

    let element = stack.peak();
    expect(element).to.not.equal(null);
    if (element) expect(element).to.equal('test');
    expect(stack.head).to.not.equal(null);
    if (stack.head) expect(stack.head.element).to.equal('test');
  });
});
