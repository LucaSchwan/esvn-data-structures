import { expect } from 'chai';
import { Stack, StackFrame } from '../src/stack';

describe('Stack', () => {
  it('should be initialised with null as head and a size of zero when passed no arguments', () => {
    let stack = new Stack();
    expect(stack.head).to.be.null;
    expect(stack.size).to.equal(0);
  });

  it("should push a new frame with given data on the top of the stack and increase it's size by 1", () => {
    let stack = new Stack<string>();
    let size = stack.size;
    stack.push('test');

    expect(stack.head).not.to.equal(null);
    if (stack.head) expect(stack.head.data).to.equal('test');
    expect(stack.size - size).to.equal(1);
  });

  it("should push a frame to the top of the stack and increase it's size by 1", () => {
    let stack = new Stack<string>();
    let frame: StackFrame<string> = {
      data: 'test',
      next: null,
    };

    stack.pushFrame(frame);
    expect(stack.head).to.not.equal(null);
    if (stack.head) expect(stack.head.data).to.equal('test');
  });

  it('should return data when popped from the stack', () => {
    let stack = new Stack<string>();
    stack.push('test');
    let data = stack.pop();

    expect(data).to.equal('test');
  });

  it('should return a frame when popped from the stack', () => {
    let stack = new Stack<string>();
    stack.push('test');
    let frame = stack.popFrame();

    expect(frame).not.to.equal(null);
    if (frame) expect(frame.data).to.equal('test');
  });

  it('should have the right type', () => {
    let stringStack = new Stack<string>();
    stringStack.push('test');
    expect(stringStack.head).to.not.equal(null);
    if (stringStack.head) expect(stringStack.head.data).to.be.a('string');

    let numberStack = new Stack<number>();
    numberStack.push(5);
    expect(numberStack.head).to.not.equal(null);
    if (numberStack.head) expect(numberStack.head.data).to.be.a('number');

    let booleanStack = new Stack<boolean>();
    booleanStack.push(true);
    expect(booleanStack.head).to.not.equal(null);
    if (booleanStack.head) expect(booleanStack.head.data).to.be.a('boolean');
  });

  it('should throw a StackUnderflow Error if a pop is tried on an empty stack', () => {
    let stack = new Stack<string>();
    expect(stack.head).to.equal(null);
    try {
      stack.pop();
    } catch (e: any) {
      expect(e).to.not.equal(null);
    }
  });

  it('should return data of the stack without removing it when using peek', () => {
    let stack = new Stack<string>();
    stack.push('test');

    let data = stack.peak();
    expect(data).to.not.equal(null);
    if (data) expect(data).to.equal('test');
    expect(stack.head).to.not.equal(null);
    if (stack.head) expect(stack.head.data).to.equal('test');
  });
});
