type Shoe = {
  type: "I" | "R";
  size: number;
};

function organizeShoes(shoes: Shoe[]): number[] {
  const shoeTracker = {};
  const res: number[] = [];
  shoes.forEach((shoe) => {
    shoeTracker[shoe.size] ||= {};
    shoeTracker[shoe.size][shoe.type] ||= 0;
    shoeTracker[shoe.size][shoe.type] += 1;
    if (shoeTracker[shoe.size]["I"] && shoeTracker[shoe.size]["R"]) {
      shoeTracker[shoe.size]["I"] -= 1;
      shoeTracker[shoe.size]["R"] -= 1;
      res.push(shoe.size);
    }
  });
  return res.sort();
}
