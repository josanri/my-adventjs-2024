function fixPackages(packages: string): string {
  while (packages.includes("(")) {
    packages = packages.replace(/\(([^()]*)\)/g, (_, inner) =>
      [...inner].reverse().join(""),
    );
  }
  return packages;
}

// \( : Escaped character. Matches a "(" character (char code 40).
// ( : Capturing group #1. Groups multiple tokens together and creates a capture group for extracting a substring or using a backreference.
// [^ : Negated set. Match any character that is not in the set.
// ( : Character. Matches a "(" character (char code 40).
// ) : Character. Matches a ")" character (char code 41).
// ] : Closes the negated set.
// * : Quantifier. Match 0 or more of the preceding token.
// ) : Closes the capturing group.
// \) : Escaped character. Matches a ")" character (char code 41).

// Regex explanation at https://regexr.com/8af4c
