function treeHeight(
  tree: { value: string; left: any; right: any } | null,
): number {
  if (tree == null) {
    return 0;
  } else {
    return Math.max(treeHeight(tree.left), treeHeight(tree.right)) + 1;
  }
}
