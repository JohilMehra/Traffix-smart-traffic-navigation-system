export const nodes = {
  A: { lat: 17.3850, lng: 78.4867 }, // Hyderabad center
  B: { lat: 17.4474, lng: 78.3762 },
  C: { lat: 17.3616, lng: 78.4747 },
  D: { lat: 17.4399, lng: 78.4983 },
  E: { lat: 17.4126, lng: 78.2679 },
  F: { lat: 17.4573, lng: 78.5000 }
};

export const edges = {
  A: [
    { node: "B", weight: 5 },
    { node: "C", weight: 3 }
  ],

  B: [
    { node: "A", weight: 5 },
    { node: "D", weight: 4 },
    { node: "F", weight: 7 }
  ],

  C: [
    { node: "A", weight: 3 },
    { node: "D", weight: 6 },
    { node: "E", weight: 2 }
  ],

  D: [
    { node: "B", weight: 4 },
    { node: "C", weight: 6 },
    { node: "F", weight: 1 },
    { node: "E", weight: 7 }
  ],

  E: [
    { node: "C", weight: 2 },
    { node: "D", weight: 7 }
  ],

  F: [
    { node: "B", weight: 7 },
    { node: "D", weight: 1 }
  ]
};