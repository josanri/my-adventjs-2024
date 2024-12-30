function isTreesSynchronized(
  tree1: { value: string; left?: any; right?: any } | undefined,
  tree2: { value: string; left?: any; right?: any } | undefined,
): [boolean, string | undefined] {
  if (tree1 === tree2 && tree1 === undefined) {
    return [true, undefined];
  }
  const snc1 = isTreesSynchronized(tree1?.left, tree2?.right)[0];
  const snc2 = isTreesSynchronized(tree1?.right, tree2?.left)[0];
  if (tree1?.value === tree2?.value && snc1 && snc2) {
    return [true, tree1?.value];
  }
  return [false, tree1?.value];
}
