const { makeTable } = require("../helpers");

const matches = {
  1: [
    {
      teams: ["HSV", "MGL"],
      goals: [2, 2],
      date: "2023-08-19T12:00Z"
    },
    {
      teams: ["SAN", "HOF2"],
      goals: [3, 2],
      date: "2023-08-19T13:00Z"
    },
    {
      teams: ["CZJ", "WOB2"],
      goals: [3, 0],
      date: "2023-08-19T14:00Z"
    },
    {
      teams: ["FCI", "AND"],
      goals: [0, 2],
      date: "2023-08-20T09:00Z"
    },
    {
      teams: ["FCB2", "WEI"],
      goals: [1, 1],
      date: "2023-08-20T12:00Z"
    },
    {
      teams: ["GTL", "SGE2"],
      goals: [2, 0],
      date: "2023-08-20T12:00Z"
    },
    {
      teams: ["SVM", "POT"],
      goals: [1, 0],
      date: "2023-08-20T12:00Z"
    }
  ],
  2: [
    {
      teams: ["MGL", "FCI"],
      goals: [2, 2],
      date: "2023-08-27T09:00Z"
    },
    {
      teams: ["SGE2", "HSV"],
      goals: [1, 4],
      date: "2023-08-27T09:00Z"
    },
    {
      teams: ["WEI", "GTL"],
      goals: [2, 4],
      date: "2023-08-27T09:00Z"
    },
    {
      teams: ["HOF2", "FCB2"],
      goals: [0, 2],
      date: "2023-08-27T09:00Z"
    },
    {
      teams: ["WOB2", "SAN"],
      goals: [1, 4],
      date: "2023-08-27T09:00Z"
    },
    {
      teams: ["AND", "SVM"],
      goals: [0, 2],
      date: "2023-08-27T12:00Z"
    },
    {
      teams: ["POT", "CZJ"],
      goals: [0, 1],
      date: "2023-08-27T12:00Z"
    }
  ],
  3: [
    {
      teams: ["FCB2", "WOB2"],
      goals: [1, 2],
      date: "2023-09-03T09:00Z"
    },
    {
      teams: ["CZJ", "AND"],
      goals: [1, 0],
      date: "2023-09-03T09:00Z"
    },
    {
      teams: ["GTL", "HOF2"],
      goals: [6, 0],
      date: "2023-09-03T09:00Z"
    },
    {
      teams: ["HSV", "FCI"],
      goals: [0, 1],
      date: "2023-09-03T09:00Z"
    },
    {
      teams: ["SGE2", "WEI"],
      goals: [3, 3],
      date: "2023-09-03T12:00Z"
    },
    {
      teams: ["SAN", "POT"],
      goals: [2, 0],
      date: "2023-09-03T12:00Z"
    },
    {
      teams: ["SVM", "MGL"],
      goals: [0, 0],
      date: "2023-09-03T12:00Z"
    }
  ],
  4: [
    {
      teams: ["MGL", "CZJ"],
      goals: [1, 0],
      date: "2023-09-17T09:00Z"
    },
    {
      teams: ["FCI", "SVM"],
      goals: [2, 0],
      date: "2023-09-17T09:00Z"
    },
    {
      teams: ["WEI", "HSV"],
      goals: [2, 3],
      date: "2023-09-17T09:00Z"
    },
    {
      teams: ["AND", "SAN"],
      goals: [0, 3],
      date: "2023-09-17T12:00Z"
    },
    {
      teams: ["HOF2", "SGE2"],
      goals: [1, 2],
      date: "2023-09-17T12:00Z"
    },
    {
      teams: ["POT", "FCB2"],
      goals: [1, 0],
      date: "2023-09-17T12:00Z"
    },
    {
      teams: ["WOB2", "GTL"],
      goals: [1, 1],
      date: "2023-09-17T12:00Z"
    }
  ],
  5: [
    {
      teams: ["HSV", "SVM"],
      goals: [4, 3],
      date: "2023-09-30T12:00Z"
    },
    {
      teams: ["FCB2", "AND"],
      goals: [1, 1],
      date: "2023-10-01T09:00Z"
    },
    {
      teams: ["SGE2", "WOB2"],
      goals: [1, 0],
      date: "2023-10-01T09:00Z"
    },
    {
      teams: ["CZJ", "FCI"],
      goals: [0, 3],
      date: "2023-10-01T12:00Z"
    },
    {
      teams: ["GTL", "POT"],
      goals: [0, 1],
      date: "2023-10-01T12:00Z"
    },
    {
      teams: ["SAN", "MGL"],
      goals: [3, 2],
      date: "2023-10-01T12:00Z"
    },
    {
      teams: ["WEI", "HOF2"],
      goals: [3, 1],
      date: "2023-10-01T12:00Z"
    }
  ],
  6: [
    {
      teams: ["MGL", "FCB2"],
      goals: [2, 1],
      date: "2023-10-08T09:00Z"
    },
    {
      teams: ["FCI", "SAN"],
      goals: [1, 1],
      date: "2023-10-08T09:00Z"
    },
    {
      teams: ["SVM", "CZJ"],
      goals: [0, 0],
      date: "2023-10-08T09:00Z"
    },
    {
      teams: ["HOF2", "HSV"],
      goals: [0, 1],
      date: "2023-10-08T09:00Z"
    },
    {
      teams: ["WOB2", "WEI"],
      goals: [0, 1],
      date: "2023-10-08T09:00Z"
    },
    {
      teams: ["AND", "GTL"],
      goals: [1, 1],
      date: "2023-10-08T12:00Z"
    },
    {
      teams: ["POT", "SGE2"],
      goals: [2, 0],
      date: "2023-10-08T12:00Z"
    }
  ],
  7: [
    {
      teams: ["HSV", "CZJ"],
      goals: [5, 0],
      date: "2023-10-15T09:00Z"
    },
    {
      teams: ["SAN", "SVM"],
      goals: [1, 2],
      date: "2023-10-15T09:00Z"
    },
    {
      teams: ["HOF2", "WOB2"],
      goals: [1, 0],
      date: "2023-10-15T09:00Z"
    },
    {
      teams: ["FCB2", "FCI"],
      goals: [0, 1],
      date: "2023-10-15T12:00Z"
    },
    {
      teams: ["SGE2", "AND"],
      goals: [0, 1],
      date: "2023-10-15T12:00Z"
    },
    {
      teams: ["GTL", "MGL"],
      goals: [4, 0],
      date: "2023-10-15T12:00Z"
    },
    {
      teams: ["WEI", "POT"],
      goals: [0, 1],
      date: "2023-10-15T12:00Z"
    }
  ],
  8: [
    {
      teams: ["FCI", "GTL"],
      goals: [1, 4],
      date: "2023-10-22T09:00Z"
    },
    {
      teams: ["SVM", "FCB2"],
      goals: [5, 0],
      date: "2023-10-22T09:00Z"
    },
    {
      teams: ["MGL", "SGE2"],
      goals: [0, 2],
      date: "2023-10-22T12:00Z"
    },
    {
      teams: ["CZJ", "SAN"],
      goals: [1, 1],
      date: "2023-10-22T12:00Z"
    },
    {
      teams: ["AND", "WEI"],
      goals: [4, 4],
      date: "2023-10-22T12:00Z"
    },
    {
      teams: ["POT", "HOF2"],
      goals: [1, 0],
      date: "2023-10-22T12:00Z"
    },
    {
      teams: ["WOB2", "HSV"],
      goals: [0, 6],
      date: "2023-10-22T12:00Z"
    }
  ],
  9: [
    {
      teams: ["FCB2", "CZJ"],
      goals: [2, 5],
      date: "2023-11-05T10:00Z"
    },
    {
      teams: ["SGE2", "FCI"],
      goals: [4, 0],
      date: "2023-11-05T10:00Z"
    },
    {
      teams: ["HSV", "SAN"],
      goals: [2, 1],
      date: "2023-11-05T10:00Z"
    },
    {
      teams: ["WEI", "MGL"],
      goals: [1, 0],
      date: "2023-11-05T10:00Z"
    },
    {
      teams: ["GTL", "SVM"],
      goals: [1, 1],
      date: "2023-11-05T13:00Z"
    },
    {
      teams: ["HOF2", "AND"],
      goals: [0, 2],
      date: "2023-11-05T13:00Z"
    },
    {
      teams: ["WOB2", "POT"],
      goals: [0, 3],
      date: "2023-11-05T13:00Z"
    }
  ],
  10: [
    {
      teams: ["MGL", "HOF2"],
      goals: [3, 2],
      date: "2023-11-12T10:00Z"
    },
    {
      teams: ["CZJ", "GTL"],
      goals: [1, 1],
      date: "2023-11-12T10:00Z"
    },
    {
      teams: ["SAN", "FCB2"],
      goals: [3, 2],
      date: "2023-11-12T10:00Z"
    },
    {
      teams: ["AND", "WOB2"],
      goals: [3, 1],
      date: "2023-11-12T10:00Z"
    },
    {
      teams: ["SVM", "SGE2"],
      goals: [2, 0],
      date: "2023-11-12T10:00Z"
    },
    {
      teams: ["FCI", "WEI"],
      goals: [1, 0],
      date: "2023-11-12T13:00Z"
    },
    {
      teams: ["POT", "HSV"],
      goals: [2, 0],
      date: "2023-11-12T13:00Z"
    }
  ],
  11: [
    {
      teams: ["SGE2", "CZJ"],
      goals: [2, 3],
      date: "2023-11-18T13:00Z"
    },
    {
      teams: ["GTL", "SAN"],
      goals: [0, 4],
      date: "2023-11-18T13:00Z"
    },
    {
      teams: ["WOB2", "MGL"],
      goals: [0, 1],
      date: "2023-11-18T13:00Z"
    },
    {
      teams: ["WEI", "SVM"],
      goals: [null, null],
      date: "2023-11-19T10:00Z"
    },
    {
      teams: ["HOF2", "FCI"],
      goals: [null, null],
      date: "2023-11-19T10:00Z"
    },
    {
      teams: ["HSV", "FCB2"],
      goals: [null, null],
      date: "2023-11-19T13:00Z"
    },
    {
      teams: ["POT", "AND"],
      goals: [null, null],
      date: "2023-11-19T13:00Z"
    }
  ],
  12: [
    {
      teams: ["FCB2", "GTL"],
      goals: [null, null],
      date: "2023-12-10T10:00Z"
    },
    {
      teams: ["FCI", "WOB2"],
      goals: [null, null],
      date: "2023-12-10T10:00Z"
    },
    {
      teams: ["HSV", "AND"],
      goals: [null, null],
      date: "2023-12-10T10:00Z"
    },
    {
      teams: ["SVM", "HOF2"],
      goals: [null, null],
      date: "2023-12-10T10:00Z"
    },
    {
      teams: ["MGL", "POT"],
      goals: [null, null],
      date: "2023-12-10T13:00Z"
    },
    {
      teams: ["CZJ", "WEI"],
      goals: [null, null],
      date: "2023-12-10T13:00Z"
    },
    {
      teams: ["SAN", "SGE2"],
      goals: [null, null],
      date: "2023-12-10T13:00Z"
    }
  ],
  13: [
    {
      teams: ["SGE2", "FCB2"],
      goals: [null, null],
      date: "2023-12-17T10:00Z"
    },
    {
      teams: ["HOF2", "CZJ"],
      goals: [null, null],
      date: "2023-12-17T10:00Z"
    },
    {
      teams: ["GTL", "HSV"],
      goals: [null, null],
      date: "2023-12-17T13:00Z"
    },
    {
      teams: ["AND", "MGL"],
      goals: [null, null],
      date: "2023-12-17T13:00Z"
    },
    {
      teams: ["WEI", "SAN"],
      goals: [null, null],
      date: "2023-12-17T13:00Z"
    },
    {
      teams: ["POT", "FCI"],
      goals: [null, null],
      date: "2023-12-17T13:00Z"
    },
    {
      teams: ["WOB2", "SVM"],
      goals: [null, null],
      date: "2023-12-17T13:00Z"
    }
  ],
  14: [
    {
      teams: ["MGL", "HSV"],
      goals: [null, null],
      date: "2024-02-18T10:00Z"
    },
    {
      teams: ["AND", "FCI"],
      goals: [null, null],
      date: "2024-02-18T10:00Z"
    },
    {
      teams: ["SGE2", "GTL"],
      goals: [null, null],
      date: "2024-02-18T13:00Z"
    },
    {
      teams: ["WEI", "FCB2"],
      goals: [null, null],
      date: "2024-02-18T13:00Z"
    },
    {
      teams: ["HOF2", "SAN"],
      goals: [null, null],
      date: "2024-02-18T13:00Z"
    },
    {
      teams: ["POT", "SVM"],
      goals: [null, null],
      date: "2024-02-18T13:00Z"
    },
    {
      teams: ["WOB2", "CZJ"],
      goals: [null, null],
      date: "2024-02-18T13:00Z"
    }
  ],
  15: [
    {
      teams: ["FCB2", "HOF2"],
      goals: [null, null],
      date: "2024-03-03T10:00Z"
    },
    {
      teams: ["FCI", "MGL"],
      goals: [null, null],
      date: "2024-03-03T10:00Z"
    },
    {
      teams: ["GTL", "WEI"],
      goals: [null, null],
      date: "2024-03-03T10:00Z"
    },
    {
      teams: ["HSV", "SGE2"],
      goals: [null, null],
      date: "2024-03-03T10:00Z"
    },
    {
      teams: ["SVM", "AND"],
      goals: [null, null],
      date: "2024-03-03T10:00Z"
    },
    {
      teams: ["CZJ", "POT"],
      goals: [null, null],
      date: "2024-03-03T13:00Z"
    },
    {
      teams: ["SAN", "WOB2"],
      goals: [null, null],
      date: "2023-03-05T13:00Z"
    }
  ]
  /*16: [
    {
      teams: ["RBL", "FCI"],
      goals: [null, null],
      date: "2023-03-12T10:00Z"
    },
    {
      teams: ["SCF2", "POT2"],
      goals: [null, null],
      date: "2023-03-12T10:00Z"
    },
    {
      teams: ["HOF2", "FCB2"],
      goals: [null, null],
      date: "2023-03-12T10:00Z"
    },
    {
      teams: ["WOB2", "KÖL2"],
      goals: [null, null],
      date: "2023-03-12T10:00Z"
    },
    {
      teams: ["SGE2", "FCN"],
      goals: [null, null],
      date: "2023-03-12T13:00Z"
    },
    {
      teams: ["GTL", "AND"],
      goals: [null, null],
      date: "2023-03-12T13:00Z"
    },
    {
      teams: ["SAN", "CZJ"],
      goals: [null, null],
      date: "2023-03-12T13:00Z"
    }
  ],
  17: [
    {
      teams: ["KÖL2", "RBL"],
      goals: [null, null],
      date: "2023-03-19T10:00Z"
    },
    {
      teams: ["FCB2", "WOB2"],
      goals: [null, null],
      date: "2023-03-19T10:00Z"
    },
    {
      teams: ["CZJ", "SCF2"],
      goals: [null, null],
      date: "2023-03-19T10:00Z"
    },
    {
      teams: ["FCI", "SGE2"],
      goals: [null, null],
      date: "2023-03-19T10:00Z"
    },
    {
      teams: ["POT2", "GTL"],
      goals: [null, null],
      date: "2023-03-19T10:00Z"
    },
    {
      teams: ["FCN", "SAN"],
      goals: [null, null],
      date: "2023-03-19T13:00Z"
    },
    {
      teams: ["AND", "HOF2"],
      goals: [null, null],
      date: "2023-03-19T13:00Z"
    }
  ],
  18: [
    {
      teams: ["RBL", "FCB2"],
      goals: [null, null],
      date: "2023-03-26T09:00Z"
    },
    {
      teams: ["SCF2", "FCN"],
      goals: [null, null],
      date: "2023-03-26T09:00Z"
    },
    {
      teams: ["SAN", "FCI"],
      goals: [null, null],
      date: "2023-03-26T09:00Z"
    },
    {
      teams: ["POT2", "AND"],
      goals: [null, null],
      date: "2023-03-26T09:00Z"
    },
    {
      teams: ["WOB2", "HOF2"],
      goals: [null, null],
      date: "2023-03-26T09:00Z"
    },
    {
      teams: ["SGE2", "KÖL2"],
      goals: [null, null],
      date: "2023-03-26T12:00Z"
    },
    {
      teams: ["GTL", "CZJ"],
      goals: [null, null],
      date: "2023-03-26T12:00Z"
    }
  ],
  19: [
    {
      teams: ["FCN", "GTL"],
      goals: [null, null],
      date: "2023-04-02T09:00Z"
    },
    {
      teams: ["FCB2", "SGE2"],
      goals: [null, null],
      date: "2023-04-02T09:00Z"
    },
    {
      teams: ["FCI", "SCF2"],
      goals: [null, null],
      date: "2023-04-02T09:00Z"
    },
    {
      teams: ["AND", "WOB2"],
      goals: [null, null],
      date: "2023-04-02T09:00Z"
    },
    {
      teams: ["HOF2", "RBL"],
      goals: [null, null],
      date: "2023-04-02T09:00Z"
    },
    {
      teams: ["KÖL2", "SAN"],
      goals: [null, null],
      date: "2023-04-02T12:00Z"
    },
    {
      teams: ["CZJ", "POT2"],
      goals: [null, null],
      date: "2023-04-02T12:00Z"
    }
  ],
  20: [
    {
      teams: ["RBL", "WOB2"],
      goals: [null, null],
      date: "2023-04-06T13:00Z"
    },
    {
      teams: ["GTL", "FCI"],
      goals: [null, null],
      date: "2023-04-16T09:00Z"
    },
    {
      teams: ["SCF2", "KÖL2"],
      goals: [null, null],
      date: "2023-04-16T09:00Z"
    },
    {
      teams: ["POT2", "FCN"],
      goals: [null, null],
      date: "2023-04-16T09:00Z"
    },
    {
      teams: ["CZJ", "AND"],
      goals: [null, null],
      date: "2023-04-16T12:00Z"
    },
    {
      teams: ["SGE2", "HOF2"],
      goals: [null, null],
      date: "2023-04-16T12:00Z"
    },
    {
      teams: ["SAN", "FCB2"],
      goals: [null, null],
      date: "2023-04-16T12:00Z"
    }
  ],
  21: [
    {
      teams: ["FCN", "CZJ"],
      goals: [null, null],
      date: "2023-04-22T13:30Z"
    },
    {
      teams: ["KÖL2", "GTL"],
      goals: [null, null],
      date: "2023-04-22T15:00Z"
    },
    {
      teams: ["FCB2", "SCF2"],
      goals: [null, null],
      date: "2023-04-23T09:00Z"
    },
    {
      teams: ["FCI", "POT2"],
      goals: [null, null],
      date: "2023-04-23T09:00Z"
    },
    {
      teams: ["AND", "RBL"],
      goals: [null, null],
      date: "2023-04-23T09:00Z"
    },
    {
      teams: ["WOB2", "SGE2"],
      goals: [null, null],
      date: "2023-04-23T09:00Z"
    },
    {
      teams: ["HOF2", "SAN"],
      goals: [null, null],
      date: "2023-04-23T12:00Z"
    }
  ],
  22: [
    {
      teams: ["FCN", "AND"],
      goals: [null, null],
      date: "2023-04-30T09:00Z"
    },
    {
      teams: ["SGE2", "RBL"],
      goals: [null, null],
      date: "2023-04-30T09:00Z"
    },
    {
      teams: ["GTL", "FCB2"],
      goals: [null, null],
      date: "2023-04-30T09:00Z"
    },
    {
      teams: ["POT2", "KÖL2"],
      goals: [null, null],
      date: "2023-04-30T09:00Z"
    },
    {
      teams: ["CZJ", "FCI"],
      goals: [null, null],
      date: "2023-04-30T12:00Z"
    },
    {
      teams: ["SCF2", "HOF2"],
      goals: [null, null],
      date: "2023-04-30T12:00Z"
    },
    {
      teams: ["SAN", "WOB2"],
      goals: [null, null],
      date: "2023-04-30T12:00Z"
    }
  ],
  23: [
    {
      teams: ["CZJ", "KÖL2"],
      goals: [null, null],
      date: "2023-05-06T09:00Z"
    },
    {
      teams: ["FCB2", "POT2"],
      goals: [null, null],
      date: "2023-05-07T09:00Z"
    },
    {
      teams: ["RBL", "SAN"],
      goals: [null, null],
      date: "2023-05-07T09:00Z"
    },
    {
      teams: ["HOF2", "GTL"],
      goals: [null, null],
      date: "2023-05-07T09:00Z"
    },
    {
      teams: ["WOB2", "SCF2"],
      goals: [null, null],
      date: "2023-05-07T09:00Z"
    },
    {
      teams: ["FCI", "FCN"],
      goals: [null, null],
      date: "2023-05-07T12:00Z"
    },
    {
      teams: ["AND", "SGE2"],
      goals: [null, null],
      date: "2023-05-07T12:00Z"
    }
  ],
  24: [
    {
      teams: ["FCN", "KÖL2"],
      goals: [null, null],
      date: "2023-05-14T09:00Z"
    },
    {
      teams: ["CZJ", "FCB2"],
      goals: [null, null],
      date: "2023-05-14T09:00Z"
    },
    {
      teams: ["FCI", "AND"],
      goals: [null, null],
      date: "2023-05-14T09:00Z"
    },
    {
      teams: ["SCF2", "RBL"],
      goals: [null, null],
      date: "2023-05-14T09:00Z"
    },
    {
      teams: ["POT2", "HOF2"],
      goals: [null, null],
      date: "2023-05-14T09:00Z"
    },
    {
      teams: ["GTL", "WOB2"],
      goals: [null, null],
      date: "2023-05-14T12:00Z"
    },
    {
      teams: ["SAN", "SGE2"],
      goals: [null, null],
      date: "2023-05-14T12:00Z"
    }
  ],
  25: [
    {
      teams: ["KÖL2", "FCI"],
      goals: [null, null],
      date: "2023-05-21T09:00Z"
    },
    {
      teams: ["FCB2", "FCN"],
      goals: [null, null],
      date: "2023-05-21T12:00Z"
    },
    {
      teams: ["SGE2", "SCF2"],
      goals: [null, null],
      date: "2023-05-21T12:00Z"
    },
    {
      teams: ["RBL", "GTL"],
      goals: [null, null],
      date: "2023-05-21T12:00Z"
    },
    {
      teams: ["SAN", "AND"],
      goals: [null, null],
      date: "2023-05-21T12:00Z"
    },
    {
      teams: ["HOF2", "CZJ"],
      goals: [null, null],
      date: "2023-05-21T12:00Z"
    },
    {
      teams: ["WOB2", "POT2"],
      goals: [null, null],
      date: "2023-05-21T12:00Z"
    }
  ],
  26: [
    {
      teams: ["FCN", "HOF2"],
      goals: [null, null],
      date: "2023-05-29T12:00Z"
    },
    {
      teams: ["CZJ", "WOB2"],
      goals: [null, null],
      date: "2023-05-29T12:00Z"
    },
    {
      teams: ["FCI", "FCB2"],
      goals: [null, null],
      date: "2023-05-29T12:00Z"
    },
    {
      teams: ["GTL", "SGE2"],
      goals: [null, null],
      date: "2023-05-29T12:00Z"
    },
    {
      teams: ["SCF2", "SAN"],
      goals: [null, null],
      date: "2023-05-29T12:00Z"
    },
    {
      teams: ["AND", "KÖL2"],
      goals: [null, null],
      date: "2023-05-29T12:00Z"
    },
    {
      teams: ["POT2", "RBL"],
      goals: [null, null],
      date: "2023-05-29T12:00Z"
    }
  ] */
};

const table = makeTable(matches);

const data = {
  matches: matches,
  table: table
};

module.exports = data;
