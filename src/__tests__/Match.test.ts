import match from '../index';

describe("match (with function)", () => {
  test("test with number", () => {
    expect(testNumber(50, 100)).toEqual("50<100");
    expect(testNumber(50, 0)).toEqual("50>0");
    expect(testNumber(50, 50)).toEqual("50=50");
  });

  test("test with string", () => {
    expect(testString("Hello", "Hello")).toBeTruthy();
    expect(testString("Hello", "HELLO")).toBeTruthy();
    expect(testString("Hello", "Hi")).toBeFalsy();
  });

});

describe("match (with single value", () => {
  test("test with number", () => {
    expect(testWithSingleValue(100,100)).toBeTruthy();
    expect(testWithSingleValue(-10,-10)).toBeTruthy();
    expect(testWithSingleValue(-10,10)).toBeFalsy();
    expect(testWithSingleValue(0,100)).toBeFalsy();
  });

  test("test with string", () => {
    expect(testWithSingleValue("Hello","Hello")).toBeTruthy();
    expect(testWithSingleValue("-10",-10+"")).toBeTruthy();
    expect(testWithSingleValue("hello","HELLO")).toBeFalsy();
    expect(testWithSingleValue("abc","cba")).toBeFalsy();
  });

});


describe("match (geometry)", () => {
  test("area", () => {
    const handleShape = (shape:string, w:number) => area(shape,w);

    expect(handleShape("Circle", 3)).toBeCloseTo(Math.PI * (3 / 2) ** 2);
    expect(handleShape("CIRCLE", 4)).toBeCloseTo(Math.PI * (4 / 2) ** 2);
    expect(handleShape("Square", 4)).toEqual(4**2);
    expect(handleShape("SQUARE", 3)).toEqual(3**2);
    expect(handleShape("Triangle", 3)).toEqual(0);
  });
});

function testNumber(x: number, y: number):string {
  const result:string = match(x)
    .on((x: number) => x < y, () => `${x}<${y}` )
    .on((x: number) => x > y, () => `${x}>${y}` )
    .otherwise(() => `${x}=${y}`);
    return result;
}

function testString(a: string, b: string):boolean {
  const result:boolean = match(a)
    .on((a: string) => a.toLowerCase() === b.toLowerCase(), () => true )
    .otherwise(() => false);
    return result;
}


function testWithSingleValue(x: string | number, y: string | number): boolean {
  const result:boolean = match(x)
    .on(y, () => true)
    .otherwise(() => false);
  return result;
}

function area (type = "Circle", width = 2) {
  return match(type)
          .on((type:string) => type.toLowerCase() === "circle", () => {
              return Math.PI * (width / 2) ** 2;
            })
          .on((type:string) => type.toLowerCase() === "square", () => width ** 2)
          .otherwise(() => 0);
}
