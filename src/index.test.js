import sum from "./index.js";

describe("Função de soma", () => {
  it("deve retornar 4 quando sum(2, 2)", () => {
    const result = sum(2, 2);
    expect(result).toBe(4);
  });

  it("deve retornar 0 quando sum(-2, 2)", () => {
    const result = sum(-2, 2);
    expect(result).toBe(0);
  });

  it('deve retornar null quando sum("2", 2)', () => {
    const result = sum("2", 2);
    expect(result).toBe(null);
  });

  it("deve retornar null quando sum(2)", () => {
    const result = sum(2);
    expect(result).toBe(null);
  });

  it("deve retornar null quando sum()", () => {
    const result = sum();
    expect(result).toBe(null);
  });

  it("deve retornar null quando sum(null, null)", () => {
    const result = sum(null, null);
    expect(result).toBe(null);
  });

  it("deve retornar null quando sum(2, null)", () => {
    const result = sum(2, null);
    expect(result).toBe(null);
  });
});
