const { makeTable } = require("../helpers");

const matches = {
  1: [
    {
      teams: ["GTL", "SAN"],
      goals: [5, 1],
      date: "2022-08-27T12:00Z"
    },
    {
      teams: ["KÖL2", "FCB2"],
      goals: [0, 3],
      date: "2022-08-28T09:00Z"
    },
    {
      teams: ["FCN", "WOB2"],
      goals: [5, 0],
      date: "2022-08-28T09:00Z"
    },
    {
      teams: ["AND", "SCF2"],
      goals: [3, 1],
      date: "2022-08-28T09:00Z"
    },
    {
      teams: ["POT2", "SGE2"],
      goals: [3, 2],
      date: "2022-08-28T09:00Z"
    },
    {
      teams: ["CZJ", "RBL"],
      goals: [1, 2],
      date: "2022-08-28T12:00Z"
    },
    {
      teams: ["FCI", "HOF2"],
      goals: [1, 1],
      date: "2022-08-28T12:00Z"
    }
  ],
  2: [
    {
      teams: ["FCB2", "AND"],
      goals: [2, 6],
      date: "2022-09-18T09:00Z"
    },
    {
      teams: ["SCF2", "GTL"],
      goals: [1, 6],
      date: "2022-09-18T09:00Z"
    },
    {
      teams: ["SAN", "POT2"],
      goals: [2, 0],
      date: "2022-09-18T09:00Z"
    },
    {
      teams: ["HOF2", "KÖL2"],
      goals: [4, 2],
      date: "2022-09-18T09:00Z"
    },
    {
      teams: ["WOB2", "FCI"],
      goals: [1, 1],
      date: "2022-09-18T09:00Z"
    },
    {
      teams: ["SGE2", "CZJ"],
      goals: [3, 1],
      date: "2022-09-18T12:00Z"
    },
    {
      teams: ["RBL", "FCN"],
      goals: [1, 0],
      date: "2022-09-18T12:00Z"
    }
  ],
  3: [
    {
      teams: ["KÖL2", "WOB2"],
      goals: [3, 3],
      date: "2022-09-25T09:00Z"
    },
    {
      teams: ["FCB2", "HOF2"],
      goals: [2, 1],
      date: "2022-09-25T09:00Z"
    },
    {
      teams: ["CZJ", "SAN"],
      goals: [1, 0],
      date: "2022-09-25T09:00Z"
    },
    {
      teams: ["FCI", "RBL"],
      goals: [0, 1],
      date: "2022-09-25T09:00Z"
    },
    {
      teams: ["POT2", "SCF2"],
      goals: [1, 3],
      date: "2022-09-25T09:00Z"
    },
    {
      teams: ["FCN", "SGE2"],
      goals: [2, 1],
      date: "2022-09-25T12:00Z"
    },
    {
      teams: ["AND", "GTL"],
      goals: [0, 0],
      date: "2022-09-25T12:00Z"
    }
  ],
  4: [
    {
      teams: ["SGE2", "FCI"],
      goals: [3, 2],
      date: "2022-10-01T12:00Z"
    },
    {
      teams: ["GTL", "POT2"],
      goals: [2, 0],
      date: "2022-10-02T09:00Z"
    },
    {
      teams: ["RBL", "KÖL2"],
      goals: [10, 2],
      date: "2022-10-02T09:00Z"
    },
    {
      teams: ["SCF2", "CZJ"],
      goals: [1, 0],
      date: "2022-10-02T09:00Z"
    },
    {
      teams: ["WOB2", "FCB2"],
      goals: [1, 0],
      date: "2022-10-02T09:00Z"
    },
    {
      teams: ["SAN", "FCN"],
      goals: [1, 1],
      date: "2022-10-02T12:00Z"
    },
    {
      teams: ["HOF2", "AND"],
      goals: [2, 3],
      date: "2022-10-02T12:00Z"
    }
  ],
  5: [
    {
      teams: ["KÖL2", "SGE2"],
      goals: [0, 0],
      date: "2022-10-09T12:00Z"
    },
    {
      teams: ["FCN", "SCF2"],
      goals: [2, 4],
      date: "2022-10-16T09:00Z"
    },
    {
      teams: ["FCB2", "RBL"],
      goals: [1, 1],
      date: "2022-10-16T09:00Z"
    },
    {
      teams: ["CZJ", "GTL"],
      goals: [2, 2],
      date: "2022-10-16T09:00Z"
    },
    {
      teams: ["FCI", "SAN"],
      goals: [0, 0],
      date: "2022-10-16T09:00Z"
    },
    {
      teams: ["AND", "POT2"],
      goals: [5, 1],
      date: "2022-10-16T09:00Z"
    },
    {
      teams: ["HOF2", "WOB2"],
      goals: [1, 1],
      date: "2022-10-20T11:00Z"
    }
  ],
  6: [
    {
      teams: ["SGE2", "FCB2"],
      goals: [1, 2],
      date: "2022-09-04T09:00Z"
    },
    {
      teams: ["GTL", "FCN"],
      goals: [2, 1],
      date: "2022-10-23T09:00Z"
    },
    {
      teams: ["SCF2", "FCI"],
      goals: [2, 0],
      date: "2022-10-23T09:00Z"
    },
    {
      teams: ["WOB2", "AND"],
      goals: [3, 2],
      date: "2022-10-23T09:00Z"
    },
    {
      teams: ["SAN", "KÖL2"],
      goals: [1, 0],
      date: "2022-10-23T12:00Z"
    },
    {
      teams: ["POT2", "CZJ"],
      goals: [1, 3],
      date: "2022-10-23T12:00Z"
    },
    {
      teams: ["RBL", "HOF2"],
      goals: [8, 0],
      date: "2022-11-02T10:00Z"
    }
  ],
  7: [
    {
      teams: ["HOF2", "SGE2"],
      goals: [4, 5],
      date: "2022-09-11T12:00Z"
    },
    {
      teams: ["KÖL2", "SCF2"],
      goals: [0, 3],
      date: "2022-10-30T10:00Z"
    },
    {
      teams: ["FCN", "POT2"],
      goals: [3, 0],
      date: "2022-10-30T10:00Z"
    },
    {
      teams: ["FCB2", "SAN"],
      goals: [0, 0],
      date: "2022-10-30T10:00Z"
    },
    {
      teams: ["FCI", "GTL"],
      goals: [2, 1],
      date: "2022-10-30T10:00Z"
    },
    {
      teams: ["AND", "CZJ"],
      goals: [2, 2],
      date: "2022-10-30T10:00Z"
    },
    {
      teams: ["WOB2", "RBL"],
      goals: [1, 4],
      date: "2022-10-30T13:00Z"
    }
  ],
  8: [
    {
      teams: ["SGE2", "WOB2"],
      goals: [1, 0],
      date: "2022-11-05T10:00Z"
    },
    {
      teams: ["SCF2", "FCB2"],
      goals: [0, 2],
      date: "2022-11-05T10:00Z"
    },
    {
      teams: ["POT2", "FCI"],
      goals: [0, 3],
      date: "2022-11-05T10:00Z"
    },
    {
      teams: ["CZJ", "FCN"],
      goals: [2, 3],
      date: "2022-11-05T13:00Z"
    },
    {
      teams: ["SAN", "HOF2"],
      goals: [0, 1],
      date: "2022-11-05T13:00Z"
    },
    {
      teams: ["RBL", "AND"],
      goals: [2, 3],
      date: "2022-11-06T10:00Z"
    },
    {
      teams: ["GTL", "KÖL2"],
      goals: [4, 0],
      date: "2022-11-06T13:00Z"
    }
  ],
  9: [
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
  ]
};

const table = makeTable(matches);

const data = {
  matches: matches,
  table: table
};

module.exports = data;
