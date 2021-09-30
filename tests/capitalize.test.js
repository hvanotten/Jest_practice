const capitalize = require("../practice/capitalize");

test("capitalize tests 1", () => {
    expect(capitalize("hello")).toBe("Hello");
})

test("capitalize test 2", () => {
    expect(capitalize("the Cow jUmpeD over the MoOn.")).toMatch(
      "The Cow jUmpeD over the MoOn."
    );
})