const caesar = require('../practice/caesar_cipher');

test("Caesar Test 1", () => {
  expect(caesar("SERR YBIR?")).toBe("FREE LOVE?");
});

test("Caesar Test 2", () => {
    expect(caesar("SERR CVMMN!")).toBe("FREE PIZZA!")
});

test("Caesar Test 3", () => {
    expect(caesar("THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG.")).toBe(
        "GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.")
});