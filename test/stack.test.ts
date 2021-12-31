import { expect } from 'chai';
import { Stack, StackFrame } from '../src/stack';

describe('Stack', () => {
  it('should be initialised with null as head when passed no arguments', () => {
    let stack = new Stack();
    expect(stack.head).to.be.null;
  });

  it('should be able to be initialised with a frame as head', () => {
    let frame: StackFrame<string> = {
      data: 'test',
      next: null,
    };
    let stack = new Stack<string>(frame);
    expect(stack.head).to.equal(frame);
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

  it('should push a new frame with given data on the top of the stack', () => {
    let stack = new Stack<string>();
    stack.push('test');

    if (stack.head) expect(stack.head.data).to.equal('test');
  });
});
