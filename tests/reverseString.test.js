const reverseString = require("../practice/reverseString");

test('reverse string', () => {
    expect(reverseString("hello")).toBe("olleh");
    expect(reverseString("hello")).not.toBe("hello");
})