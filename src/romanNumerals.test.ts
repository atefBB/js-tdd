class RomanNumeral {
  romanize(arabicNumber: number): string {
    if (arabicNumber === 1) return "I";
    if (arabicNumber === 2) return "II";
    if (arabicNumber === 3) return "III";
    if (arabicNumber === 4) return "IV";
    if (arabicNumber === 5) return "V";
    return "";
  }
}

describe("Roman Numerals", () => {
  let obj: RomanNumeral;

  beforeEach(() => {
    obj = new RomanNumeral();
  });

  it("defines roman numeral object", () => {
    expect(obj).toBeDefined();
  });

  it("gets roman numeral for the arabic number 1", () => {
    let romanizedNumber = obj.romanize(1);
    expect(romanizedNumber).toBe("I");
  });

  it("gets roman numeral for the arabic number 2", () => {
    let romanizedNumber = obj.romanize(2);
    expect(romanizedNumber).toBe("II");
  });

  it("gets roman numeral for the arabic number 3", () => {
    let romanizedNumber = obj.romanize(3);
    expect(romanizedNumber).toBe("III");
  });

  it("gets roman numeral for the arabic number 4", () => {
    let romanizedNumber = obj.romanize(4);
    expect(romanizedNumber).toBe("IV");
  });

  it("gets roman numeral for the arabic number 5", () => {
    let romanizedNumber = obj.romanize(5);
    expect(romanizedNumber).toBe("V");
  });
});
