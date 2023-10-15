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
      goals: [null, null],
      date: "2023-10-22T09:00Z"
    },
    {
      teams: ["SVM", "FCB2"],
      goals: [null, null],
      date: "2023-10-22T09:00Z"
    },
    {
      teams: ["MGL", "SGE2"],
      goals: [null, null],
      date: "2023-10-22T12:00Z"
    },
    {
      teams: ["CZJ", "SAN"],
      goals: [null, null],
      date: "2023-10-22T12:00Z"
    },
    {
      teams: ["AND", "WEI"],
      goals: [null, null],
      date: "2023-10-22T12:00Z"
    },
    {
      teams: ["POT", "HOF2"],
      goals: [null, null],
      date: "2023-10-22T12:00Z"
    },
    {
      teams: ["WOB2", "HSV"],
      goals: [null, null],
      date: "2023-10-22T12:00Z"
    }
  ]
  /*9: [
    {
      teams: ["KÖL2", "POT2"],
      goals: [2, 1],
      date: "2022-11-27T10:00Z"
    },
    {
      teams: ["FCB2", "GTL"],
      goals: [1, 2],
      date: "2022-11-27T10:00Z"
    },
    {
      teams: ["RBL", "SGE2"],
      goals: [2, 1],
      date: "2022-11-27T10:00Z"
    },
    {
      teams: ["FCI", "CZJ"],
      goals: [0, 4],
      date: "2022-11-27T13:00Z"
    },
    {
      teams: ["AND", "FCN"],
      goals: [3, 1],
      date: "2022-11-27T13:00Z"
    },
    {
      teams: ["HOF2", "SCF2"],
      goals: [1, 0],
      date: "2022-11-27T13:00Z"
    },
    {
      teams: ["WOB2", "SAN"],
      goals: [0, 2],
      date: "2022-11-27T13:00Z"
    }
  ],
  10: [
    {
      teams: ["GTL", "HOF2"],
      goals: [0, 2],
      date: "2022-12-04T10:00Z"
    },
    {
      teams: ["SCF2", "WOB2"],
      goals: [0, 1],
      date: "2022-12-04T10:00Z"
    },
    {
      teams: ["SAN", "RBL"],
      goals: [0, 2],
      date: "2022-12-04T10:00Z"
    },
    {
      teams: ["POT2", "FCB2"],
      goals: [1, 2],
      date: "2022-12-04T10:00Z"
    },
    {
      teams: ["FCN", "FCI"],
      goals: [3, 0],
      date: "2022-12-04T13:00Z"
    },
    {
      teams: ["SGE2", "AND"],
      goals: [1, 2],
      date: "2022-12-04T13:00Z"
    },
    {
      teams: ["KÖL2", "CZJ"],
      goals: [2, 3],
      date: "2023-02-19T10:00Z"
    }
  ],
  11: [
    {
      teams: ["KÖL2", "FCN"],
      goals: [0, 2],
      date: "2022-12-11T10:00Z"
    },
    {
      teams: ["FCB2", "CZJ"],
      goals: [1, 0],
      date: "2022-12-11T10:00Z"
    },
    {
      teams: ["RBL", "SCF2"],
      goals: [5, 2],
      date: "2022-12-11T10:00Z"
    },
    {
      teams: ["AND", "FCI"],
      goals: [0, 2],
      date: "2022-12-11T10:00Z"
    },
    {
      teams: ["HOF2", "POT2"],
      goals: [1, 1],
      date: "2022-12-11T10:00Z"
    },
    {
      teams: ["SGE2", "SAN"],
      goals: [2, 1],
      date: "2022-12-11T13:00Z"
    },
    {
      teams: ["WOB2", "GTL"],
      goals: [2, 1],
      date: "2022-12-11T13:00Z"
    }
  ],
  12: [
    {
      teams: ["FCI", "KÖL2"],
      goals: [2, 4],
      date: "2022-12-18T10:00Z"
    },
    {
      teams: ["POT2", "WOB2"],
      goals: [0, 1],
      date: "2023-02-04T13:00Z"
    },
    {
      teams: ["FCN", "FCB2"],
      goals: [2, 1],
      date: "2023-02-05T13:00Z"
    },
    {
      teams: ["SCF2", "SGE2"],
      goals: [1, 2],
      date: "2023-02-05T13:00Z"
    },
    {
      teams: ["AND", "SAN"],
      goals: [2, 0],
      date: "2023-02-05T13:00Z"
    },
    {
      teams: ["CZJ", "HOF2"],
      goals: [1, 3],
      date: "2023-02-08T12:30Z"
    },
    {
      teams: ["GTL", "RBL"],
      goals: [0, 4],
      date: "2023-02-19T10:00Z"
    }
  ],
  13: [
    {
      teams: ["SGE2", "GTL"],
      goals: [1, 1],
      date: "2023-02-12T10:00Z"
    },
    {
      teams: ["KÖL2", "AND"],
      goals: [1, 1],
      date: "2023-02-12T13:00Z"
    },
    {
      teams: ["FCB2", "FCI"],
      goals: [2, 0],
      date: "2023-02-12T13:00Z"
    },
    {
      teams: ["RBL", "POT2"],
      goals: [5, 0],
      date: "2023-02-12T13:00Z"
    },
    {
      teams: ["SAN", "SCF2"],
      goals: [2, 1],
      date: "2023-02-12T13:00Z"
    },
    {
      teams: ["HOF2", "FCN"],
      goals: [4, 0],
      date: "2023-02-12T13:00Z"
    },
    {
      teams: ["WOB2", "CZJ"],
      goals: [1, 0],
      date: "2023-02-12T13:00Z"
    }
  ],
  14: [
    {
      teams: ["RBL", "CZJ"],
      goals: [5, 1],
      date: "2023-02-24T16:00Z"
    },
    {
      teams: ["FCB2", "KÖL2"],
      goals: [3, 0],
      date: "2023-02-26T10:00Z"
    },
    {
      teams: ["SGE2", "POT2"],
      goals: [4, 1],
      date: "2023-02-26T10:00Z"
    },
    {
      teams: ["SCF2", "AND"],
      goals: [3, 3],
      date: "2023-02-26T10:00Z"
    },
    {
      teams: ["SAN", "GTL"],
      goals: [2, 0],
      date: "2023-02-26T10:00Z"
    },
    {
      teams: ["WOB2", "FCN"],
      goals: [0, 2],
      date: "2023-02-26T10:00Z"
    },
    {
      teams: ["HOF2", "FCI"],
      goals: [3, 0],
      date: "2023-02-26T13:00Z"
    }
  ],
  15: [
    {
      teams: ["FCN", "RBL"],
      goals: [1, 2],
      date: "2023-03-05T10:00Z"
    },
    {
      teams: ["FCI", "WOB2"],
      goals: [0, 1],
      date: "2023-03-05T10:00Z"
    },
    {
      teams: ["GTL", "SCF2"],
      goals: [2, 1],
      date: "2023-03-05T10:00Z"
    },
    {
      teams: ["AND", "FCB2"],
      goals: [0, 0],
      date: "2023-03-05T10:00Z"
    },
    {
      teams: ["POT2", "SAN"],
      goals: [0, 2],
      date: "2023-03-05T10:00Z"
    },
    {
      teams: ["KÖL2", "HOF2"],
      goals: [3, 1],
      date: "2023-03-05T13:00Z"
    },
    {
      teams: ["CZJ", "SGE2"],
      goals: [2, 1],
      date: "2023-03-05T13:00Z"
    }
  ],
  16: [
    {
      teams: ["RBL", "FCI"],
      goals: [0, 1],
      date: "2023-03-12T10:00Z"
    },
    {
      teams: ["SCF2", "POT2"],
      goals: [3, 1],
      date: "2023-03-12T10:00Z"
    },
    {
      teams: ["HOF2", "FCB2"],
      goals: [1, 1],
      date: "2023-03-12T10:00Z"
    },
    {
      teams: ["WOB2", "KÖL2"],
      goals: [2, 1],
      date: "2023-03-12T10:00Z"
    },
    {
      teams: ["SGE2", "FCN"],
      goals: [1, 2],
      date: "2023-03-12T13:00Z"
    },
    {
      teams: ["GTL", "AND"],
      goals: [2, 0],
      date: "2023-03-12T13:00Z"
    },
    {
      teams: ["SAN", "CZJ"],
      goals: [1, 2],
      date: "2023-03-12T13:00Z"
    }
  ],
  17: [
    {
      teams: ["KÖL2", "RBL"],
      goals: [1, 4],
      date: "2023-03-19T10:00Z"
    },
    {
      teams: ["FCB2", "WOB2"],
      goals: [1, 0],
      date: "2023-03-19T10:00Z"
    },
    {
      teams: ["CZJ", "SCF2"],
      goals: [0, 4],
      date: "2023-03-19T10:00Z"
    },
    {
      teams: ["FCI", "SGE2"],
      goals: [0, 1],
      date: "2023-03-19T10:00Z"
    },
    {
      teams: ["POT2", "GTL"],
      goals: [1, 3],
      date: "2023-03-19T10:00Z"
    },
    {
      teams: ["FCN", "SAN"],
      goals: [2, 3],
      date: "2023-03-19T13:00Z"
    },
    {
      teams: ["AND", "HOF2"],
      goals: [0, 0],
      date: "2023-03-19T13:00Z"
    }
  ],
  18: [
    {
      teams: ["RBL", "FCB2"],
      goals: [3, 0],
      date: "2023-03-26T09:00Z"
    },
    {
      teams: ["SCF2", "FCN"],
      goals: [0, 2],
      date: "2023-03-26T09:00Z"
    },
    {
      teams: ["SAN", "FCI"],
      goals: [1, 3],
      date: "2023-03-26T09:00Z"
    },
    {
      teams: ["POT2", "AND"],
      goals: [1, 7],
      date: "2023-03-26T09:00Z"
    },
    {
      teams: ["WOB2", "HOF2"],
      goals: [2, 1],
      date: "2023-03-26T09:00Z"
    },
    {
      teams: ["SGE2", "KÖL2"],
      goals: [0, 1],
      date: "2023-03-26T12:00Z"
    },
    {
      teams: ["GTL", "CZJ"],
      goals: [2, 0],
      date: "2023-03-26T12:00Z"
    }
  ],
  19: [
    {
      teams: ["FCN", "GTL"],
      goals: [2, 0],
      date: "2023-04-02T09:00Z"
    },
    {
      teams: ["FCB2", "SGE2"],
      goals: [0, 1],
      date: "2023-04-02T09:00Z"
    },
    {
      teams: ["FCI", "SCF2"],
      goals: [1, 0],
      date: "2023-04-02T09:00Z"
    },
    {
      teams: ["AND", "WOB2"],
      goals: [1, 1],
      date: "2023-04-02T09:00Z"
    },
    {
      teams: ["HOF2", "RBL"],
      goals: [0, 3],
      date: "2023-04-02T09:00Z"
    },
    {
      teams: ["KÖL2", "SAN"],
      goals: [1, 1],
      date: "2023-04-02T12:00Z"
    },
    {
      teams: ["CZJ", "POT2"],
      goals: [1, 2],
      date: "2023-04-02T12:00Z"
    }
  ],
  20: [
    {
      teams: ["RBL", "WOB2"],
      goals: [3, 1],
      date: "2023-04-06T13:00Z"
    },
    {
      teams: ["GTL", "FCI"],
      goals: [1, 2],
      date: "2023-04-16T09:00Z"
    },
    {
      teams: ["SCF2", "KÖL2"],
      goals: [0, 0],
      date: "2023-04-16T09:00Z"
    },
    {
      teams: ["POT2", "FCN"],
      goals: [0, 4],
      date: "2023-04-16T09:00Z"
    },
    {
      teams: ["CZJ", "AND"],
      goals: [3, 2],
      date: "2023-04-16T12:00Z"
    },
    {
      teams: ["SGE2", "HOF2"],
      goals: [0, 1],
      date: "2023-04-16T12:00Z"
    },
    {
      teams: ["SAN", "FCB2"],
      goals: [0, 1],
      date: "2023-04-16T12:00Z"
    }
  ],
  21: [
    {
      teams: ["FCN", "CZJ"],
      goals: [1, 0],
      date: "2023-04-22T13:30Z"
    },
    {
      teams: ["KÖL2", "GTL"],
      goals: [0, 1],
      date: "2023-04-22T15:00Z"
    },
    {
      teams: ["FCB2", "SCF2"],
      goals: [0, 4],
      date: "2023-04-23T09:00Z"
    },
    {
      teams: ["FCI", "POT2"],
      goals: [3, 2],
      date: "2023-04-23T09:00Z"
    },
    {
      teams: ["AND", "RBL"],
      goals: [1, 3],
      date: "2023-04-23T09:00Z"
    },
    {
      teams: ["WOB2", "SGE2"],
      goals: [2, 0],
      date: "2023-04-23T09:00Z"
    },
    {
      teams: ["HOF2", "SAN"],
      goals: [0, 0],
      date: "2023-04-23T12:00Z"
    }
  ],
  22: [
    {
      teams: ["FCN", "AND"],
      goals: [2, 1],
      date: "2023-04-30T09:00Z"
    },
    {
      teams: ["SGE2", "RBL"],
      goals: [0, 6],
      date: "2023-04-30T09:00Z"
    },
    {
      teams: ["GTL", "FCB2"],
      goals: [1, 0],
      date: "2023-04-30T09:00Z"
    },
    {
      teams: ["POT2", "KÖL2"],
      goals: [0, 0],
      date: "2023-04-30T09:00Z"
    },
    {
      teams: ["CZJ", "FCI"],
      goals: [2, 2],
      date: "2023-04-30T12:00Z"
    },
    {
      teams: ["SCF2", "HOF2"],
      goals: [2, 3],
      date: "2023-04-30T12:00Z"
    },
    {
      teams: ["SAN", "WOB2"],
      goals: [2, 0],
      date: "2023-04-30T12:00Z"
    }
  ],
  23: [
    {
      teams: ["CZJ", "KÖL2"],
      goals: [5, 1],
      date: "2023-05-06T09:00Z"
    },
    {
      teams: ["FCB2", "POT2"],
      goals: [4, 1],
      date: "2023-05-07T09:00Z"
    },
    {
      teams: ["RBL", "SAN"],
      goals: [0, 1],
      date: "2023-05-07T09:00Z"
    },
    {
      teams: ["HOF2", "GTL"],
      goals: [2, 4],
      date: "2023-05-07T09:00Z"
    },
    {
      teams: ["WOB2", "SCF2"],
      goals: [1, 1],
      date: "2023-05-07T09:00Z"
    },
    {
      teams: ["FCI", "FCN"],
      goals: [0, 2],
      date: "2023-05-07T12:00Z"
    },
    {
      teams: ["AND", "SGE2"],
      goals: [4, 4],
      date: "2023-05-07T12:00Z"
    }
  ],
  24: [
    {
      teams: ["FCN", "KÖL2"],
      goals: [6, 2],
      date: "2023-05-14T09:00Z"
    },
    {
      teams: ["CZJ", "FCB2"],
      goals: [2, 0],
      date: "2023-05-14T09:00Z"
    },
    {
      teams: ["FCI", "AND"],
      goals: [0, 4],
      date: "2023-05-14T09:00Z"
    },
    {
      teams: ["SCF2", "RBL"],
      goals: [1, 2],
      date: "2023-05-14T09:00Z"
    },
    {
      teams: ["POT2", "HOF2"],
      goals: [4, 0],
      date: "2023-05-14T09:00Z"
    },
    {
      teams: ["GTL", "WOB2"],
      goals: [3, 1],
      date: "2023-05-14T12:00Z"
    },
    {
      teams: ["SAN", "SGE2"],
      goals: [0, 0],
      date: "2023-05-14T12:00Z"
    }
  ],
  25: [
    {
      teams: ["KÖL2", "FCI"],
      goals: [1, 2],
      date: "2023-05-21T09:00Z"
    },
    {
      teams: ["FCB2", "FCN"],
      goals: [3, 0],
      date: "2023-05-21T12:00Z"
    },
    {
      teams: ["SGE2", "SCF2"],
      goals: [3, 1],
      date: "2023-05-21T12:00Z"
    },
    {
      teams: ["RBL", "GTL"],
      goals: [1, 2],
      date: "2023-05-21T12:00Z"
    },
    {
      teams: ["SAN", "AND"],
      goals: [1, 1],
      date: "2023-05-21T12:00Z"
    },
    {
      teams: ["HOF2", "CZJ"],
      goals: [0, 3],
      date: "2023-05-21T12:00Z"
    },
    {
      teams: ["WOB2", "POT2"],
      goals: [4, 4],
      date: "2023-05-21T12:00Z"
    }
  ],
  26: [
    {
      teams: ["FCN", "HOF2"],
      goals: [3, 0],
      date: "2023-05-29T12:00Z"
    },
    {
      teams: ["CZJ", "WOB2"],
      goals: [2, 2],
      date: "2023-05-29T12:00Z"
    },
    {
      teams: ["FCI", "FCB2"],
      goals: [0, 3],
      date: "2023-05-29T12:00Z"
    },
    {
      teams: ["GTL", "SGE2"],
      goals: [2, 0],
      date: "2023-05-29T12:00Z"
    },
    {
      teams: ["SCF2", "SAN"],
      goals: [0, 0],
      date: "2023-05-29T12:00Z"
    },
    {
      teams: ["AND", "KÖL2"],
      goals: [6, 1],
      date: "2023-05-29T12:00Z"
    },
    {
      teams: ["POT2", "RBL"],
      goals: [2, 5],
      date: "2023-05-29T12:00Z"
    }
  ]*/
};

const table = makeTable(matches);

const data = {
  matches: matches,
  table: table
};

module.exports = data;
