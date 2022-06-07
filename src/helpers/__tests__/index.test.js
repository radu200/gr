import * as helpers from "..";

describe("Generate grid", () => {
  it("should generate grid with given rows and colums", () => {
    const rows = 2;
    const columns = 3;
    const output = [
      [0, 0, 0],
      [0, 0, 0],
    ];
    expect(helpers.generateGrid(rows, columns)).toEqual(output);
  });
});
