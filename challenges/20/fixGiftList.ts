function fixGiftList(
  received: string[],
  expected: string[],
): { missing: Record<string, number>; extra: Record<string, number> } {
  const receivedDict = {};
  const expectedDict = {};
  received.forEach((val) => {
    receivedDict[val] ||= 0;
    receivedDict[val] += 1;
  });
  expected.forEach((val) => {
    expectedDict[val] ||= 0;
    expectedDict[val] += 1;
  });

  const missingDict = { ...expectedDict };
  const extraDict = {};
  Object.keys(receivedDict).forEach((val) => {
    const fits = (expectedDict[val] ?? 0) - receivedDict[val];
    delete missingDict[val];
    if (fits < 0) {
      extraDict[val] = Math.abs(fits);
    } else if (fits > 0) {
      missingDict[val] = fits;
    }
  });
  return {
    missing: missingDict,
    extra: extraDict,
  };
}
