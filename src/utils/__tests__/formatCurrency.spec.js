import { formatCurrency } from "../formatCurrency";

describe("FormatCurrency", () => {
  it("should return the price formatted", () => {
    const dummyPrice = 223.5;
    const currencyId = "BRL";

    expect(formatCurrency({ price: dummyPrice, currencyId })).toBe("R$ 223,50");
  });
});
