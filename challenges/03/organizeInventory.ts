type Inventory = Array<{ name: string; quantity: number; category: string }>;

function organizeInventory(inventory: Inventory): object {
  const res = {};
  inventory.forEach(({ name, quantity, category }) => {
    res[category] ||= {};
    res[category][name] = (res[category][name] ?? 0) + quantity;
  });
  return res;
}
