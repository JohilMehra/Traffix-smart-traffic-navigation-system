export const nodes = {
  // Central Hyderabad
  Charminar: { lat: 17.3616, lng: 78.4747 },
  MeccaMasjid: { lat: 17.3604, lng: 78.4736 },
  AfzalGunj: { lat: 17.3731, lng: 78.4747 },
  Nampally: { lat: 17.3924, lng: 78.4676 },
  Lakdikapul: { lat: 17.4037, lng: 78.4658 },

  // Business / IT Hub
  HitechCity: { lat: 17.4435, lng: 78.3772 },
  Madhapur: { lat: 17.4483, lng: 78.3915 },
  Gachibowli: { lat: 17.4401, lng: 78.3489 },
  Kondapur: { lat: 17.4698, lng: 78.3638 },
  FinancialDistrict: { lat: 17.4200, lng: 78.3400 },

  // North Hyderabad
  Secunderabad: { lat: 17.4399, lng: 78.4983 },
  Begumpet: { lat: 17.4448, lng: 78.4666 },
  Paradise: { lat: 17.4417, lng: 78.4894 },
  Tarnaka: { lat: 17.4283, lng: 78.5386 },
  Mettuguda: { lat: 17.4350, lng: 78.5170 },

  // West Hyderabad
  BanjaraHills: { lat: 17.4126, lng: 78.4482 },
  JubileeHills: { lat: 17.4319, lng: 78.4070 },
  FilmNagar: { lat: 17.4163, lng: 78.4094 },

  // East Hyderabad
  Uppal: { lat: 17.4058, lng: 78.5591 },
  LBnagar: { lat: 17.3457, lng: 78.5522 },

  // South Hyderabad
  Shamshabad: { lat: 17.2403, lng: 78.4294 },
  Falaknuma: { lat: 17.3300, lng: 78.4710 },

  // Other connectors
  Dilsukhnagar: { lat: 17.3688, lng: 78.5247 },
  Koti: { lat: 17.3850, lng: 78.4867 }
};

export const edges = {
  Charminar: [
    { node: "MeccaMasjid", weight: 1 },
    { node: "AfzalGunj", weight: 3 },
    { node: "Falaknuma", weight: 5 }
  ],

  MeccaMasjid: [
    { node: "Charminar", weight: 1 }
  ],

  AfzalGunj: [
    { node: "Charminar", weight: 3 },
    { node: "Koti", weight: 2 },
    { node: "Nampally", weight: 4 }
  ],

  Koti: [
    { node: "AfzalGunj", weight: 2 },
    { node: "Nampally", weight: 3 },
    { node: "Dilsukhnagar", weight: 6 }
  ],

  Nampally: [
    { node: "AfzalGunj", weight: 4 },
    { node: "Koti", weight: 3 },
    { node: "Lakdikapul", weight: 2 }
  ],

  Lakdikapul: [
    { node: "Nampally", weight: 2 },
    { node: "BanjaraHills", weight: 4 }
  ],

  BanjaraHills: [
    { node: "Lakdikapul", weight: 4 },
    { node: "JubileeHills", weight: 3 },
    { node: "FilmNagar", weight: 2 }
  ],

  JubileeHills: [
    { node: "BanjaraHills", weight: 3 },
    { node: "HitechCity", weight: 5 },
    { node: "Madhapur", weight: 4 }
  ],

  FilmNagar: [
    { node: "BanjaraHills", weight: 2 },
    { node: "JubileeHills", weight: 2 }
  ],

  HitechCity: [
    { node: "Madhapur", weight: 2 },
    { node: "Gachibowli", weight: 4 },
    { node: "JubileeHills", weight: 5 }
  ],

  Madhapur: [
    { node: "HitechCity", weight: 2 },
    { node: "Kondapur", weight: 3 },
    { node: "JubileeHills", weight: 4 }
  ],

  Kondapur: [
    { node: "Madhapur", weight: 3 },
    { node: "Gachibowli", weight: 3 }
  ],

  Gachibowli: [
    { node: "HitechCity", weight: 4 },
    { node: "Kondapur", weight: 3 },
    { node: "FinancialDistrict", weight: 5 }
  ],

  FinancialDistrict: [
    { node: "Gachibowli", weight: 5 }
  ],

  Secunderabad: [
    { node: "Paradise", weight: 2 },
    { node: "Begumpet", weight: 3 },
    { node: "Mettuguda", weight: 3 }
  ],

  Paradise: [
    { node: "Secunderabad", weight: 2 },
    { node: "Begumpet", weight: 2 }
  ],

  Begumpet: [
    { node: "Paradise", weight: 2 },
    { node: "Secunderabad", weight: 3 },
    { node: "BanjaraHills", weight: 5 }
  ],

  Tarnaka: [
    { node: "Mettuguda", weight: 2 },
    { node: "Uppal", weight: 4 }
  ],

  Mettuguda: [
    { node: "Secunderabad", weight: 3 },
    { node: "Tarnaka", weight: 2 }
  ],

  Uppal: [
    { node: "Tarnaka", weight: 4 },
    { node: "LBnagar", weight: 6 }
  ],

  LBnagar: [
    { node: "Uppal", weight: 6 },
    { node: "Dilsukhnagar", weight: 3 }
  ],

  Dilsukhnagar: [
    { node: "Koti", weight: 6 },
    { node: "LBnagar", weight: 3 }
  ],

  Falaknuma: [
    { node: "Charminar", weight: 5 },
    { node: "Shamshabad", weight: 10 }
  ],

  Shamshabad: [
    { node: "Falaknuma", weight: 10 }
  ]
};