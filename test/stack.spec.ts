import { expect } from 'chai';
import { Stack } from '../src/stack';

describe('Stack', () => {
  it("should push a new Node with given element on the top of the Stack and increase it's size by 1.", () => {
    let stack = new Stack<string>('test');
    let size = stack.getSize();
    stack.push('test');

    let head = stack.getHead();
    expect(head).not.to.equal(null);
    if (head) expect(head.element).to.equal('test');
    expect(stack.getSize() - size).to.equal(1);
  });

  it("should return an element when popped from the Stack and decrease it's size by 1.", () => {
    let stack = new Stack<string>();
    stack.push('test');
    let size = stack.getSize();
    let element = stack.pop();

    expect(element).to.equal('test');
    expect(size - stack.getSize()).to.equal(1);
  });

  it('should throw a StackUnderflow Error if a pop is tried on an empty Stack', () => {
    let stack = new Stack<string>();
    expect(stack.getHead()).to.equal(null);
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
    let head = stack.getHead();
    expect(head).to.not.equal(null);
    if (head) expect(head.element).to.equal('test');
  });

  it('should return a stringified version of the list.', () => {
    let stack = new Stack(1);
    stack.push(2);
    stack.push(3);
    stack.push(4);
    stack.push(5);

    let stringified = stack.toString();

    expect(stringified).to.equal('5, 4, 3, 2, 1');
  });

  it('should return an array with the elements.', () => {
    let stack = new Stack(1);
    stack.push(2);
    stack.push(3);
    stack.push(4);
    stack.push(5);

    let array = stack.toArray();
    let compArray = [5, 4, 3, 2, 1];

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
    let stack = new Stack();

    expect(stack.isEmpty()).to.equal(true);

    stack.push('test');

    expect(stack.isEmpty()).to.equal(false);
  });

  it('should pretty print the list.', () => {
    let stack = new Stack(1);
    stack.push(2);
    stack.push(3);
    stack.push(4);
    stack.push(5);

    let prettyPrinted = stack.prettyPrint();

    expect(prettyPrinted).to.equal('5 -> 4 -> 3 -> 2 -> 1');
  });
});
