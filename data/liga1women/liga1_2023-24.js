const { makeTable } = require("../helpers");

const matches = {
  1: [
    {
      teams: ["SCF", "FCB"],
      goals: [2, 2],
      date: "2023-09-15T16:15Z"
    },
    {
      teams: ["HOF", "DUI"],
      goals: [9, 0],
      date: "2023-09-16T10:00Z"
    },
    {
      teams: ["FCN", "SVW"],
      goals: [1, 5],
      date: "2023-09-16T12:00Z"
    },
    {
      teams: ["KÖL", "RBL"],
      goals: [2, 1],
      date: "2023-09-17T12:00Z"
    },
    {
      teams: ["WOB", "B04"],
      goals: [3, 0],
      date: "2023-09-17T14:00Z"
    },
    {
      teams: ["ESS", "SGE"],
      goals: [2, 0],
      date: "2023-09-17T16:30Z"
    }
  ],
  2: [
    {
      teams: ["RBL", "ESS"],
      goals: [3, 2],
      date: "2023-09-29T16:30Z"
    },
    {
      teams: ["B04", "FCN"],
      goals: [6, 0],
      date: "2023-09-30T10:00Z"
    },
    {
      teams: ["SVW", "HOF"],
      goals: [1, 3],
      date: "2023-09-30T12:00Z"
    },
    {
      teams: ["SGE", "WOB"],
      goals: [2, 4],
      date: "2023-10-01T12:00Z"
    },
    {
      teams: ["DUI", "SCF"],
      goals: [2, 2],
      date: "2023-10-01T16:30Z"
    },
    {
      teams: ["FCB", "KÖL"],
      goals: [2, 0],
      date: "2023-10-02T17:30Z"
    }
  ],
  3: [
    {
      teams: ["WOB", "FCN"],
      goals: [1, 0],
      date: "2023-10-06T16:30Z"
    },
    {
      teams: ["KÖL", "DUI"],
      goals: [4, 1],
      date: "2023-10-07T10:00Z"
    },
    {
      teams: ["SGE", "RBL"],
      goals: [3, 1],
      date: "2023-10-07T12:00Z"
    },
    {
      teams: ["ESS", "FCB"],
      goals: [0, 2],
      date: "2023-10-08T12:00Z"
    },
    {
      teams: ["SCF", "SVW"],
      goals: [2, 1],
      date: "2023-10-08T16:30Z"
    },
    {
      teams: ["HOF", "B04"],
      goals: [2, 2],
      date: "2023-10-09T17:30Z"
    }
  ],
  4: [
    {
      teams: ["FCN", "HOF"],
      goals: [0, 3],
      date: "2023-10-13T16:30Z"
    },
    {
      teams: ["SVW", "KÖL"],
      goals: [3, 0],
      date: "2023-10-14T12:00Z"
    },
    {
      teams: ["FCB", "SGE"],
      goals: [0, 0],
      date: "2023-10-14T15:55Z"
    },
    {
      teams: ["RBL", "WOB"],
      goals: [0, 2],
      date: "2023-10-15T12:00Z"
    },
    {
      teams: ["B04", "SCF"],
      goals: [3, 0],
      date: "2023-10-15T16:30Z"
    },
    {
      teams: ["DUI", "ESS"],
      goals: [0, 1],
      date: "2023-10-16T17:30Z"
    }
  ],
  5: [
    {
      teams: ["KÖL", "B04"],
      goals: [0, 1],
      date: "2023-10-20T16:30Z"
    },
    {
      teams: ["SCF", "FCN"],
      goals: [0, 2],
      date: "2023-10-21T10:00Z"
    },
    {
      teams: ["ESS", "SVW"],
      goals: [1, 1],
      date: "2023-10-21T12:00Z"
    },
    {
      teams: ["WOB", "HOF"],
      goals: [2, 2],
      date: "2023-10-22T12:00Z"
    },
    {
      teams: ["SGE", "DUI"],
      goals: [5, 1],
      date: "2023-10-22T14:00Z"
    },
    {
      teams: ["RBL", "FCB"],
      goals: [0, 3],
      date: "2022-10-22T16:30Z"
    }
  ],
  6: [
    {
      teams: ["DUI", "RBL"],
      goals: [1, 1],
      date: "2023-11-03T17:30Z"
    },
    {
      teams: ["HOF", "SCF"],
      goals: [2, 3],
      date: "2023-11-04T11:00Z"
    },
    {
      teams: ["B04", "ESS"],
      goals: [0, 0],
      date: "2023-11-04T13:00Z"
    },
    {
      teams: ["FCB", "WOB"],
      goals: [2, 1],
      date: "2023-11-05T14:00Z"
    },
    {
      teams: ["FCN", "KÖL"],
      goals: [1, 3],
      date: "2023-11-05T17:30Z"
    },
    {
      teams: ["SVW", "SGE"],
      goals: [0, 1],
      date: "2023-11-06T18:30Z"
    }
  ],
  7: [
    {
      teams: ["SGE", "B04"],
      goals: [2, 2],
      date: "2023-11-10T17:30Z"
    },
    {
      teams: ["RBL", "SVW"],
      goals: [0, 5],
      date: "2023-11-11T11:00Z"
    },
    {
      teams: ["ESS", "FCN"],
      goals: [5, 0],
      date: "2023-11-11T13:00Z"
    },
    {
      teams: ["WOB", "SCF"],
      goals: [4, 0],
      date: "2023-11-12T13:00Z"
    },
    {
      teams: ["FCB", "DUI"],
      goals: [2, 0],
      date: "2023-11-12T17:30Z"
    },
    {
      teams: ["KÖL", "HOF"],
      goals: [1, 2],
      date: "2023-11-13T18:30Z"
    }
  ],
  8: [
    {
      teams: ["HOF", "ESS"],
      goals: [0, 3],
      date: "2023-11-17T17:30Z"
    },
    {
      teams: ["FCN", "SGE"],
      goals: [0, 2],
      date: "2023-11-18T11:00Z"
    },
    {
      teams: ["WOB", "DUI"],
      goals: [2, 0],
      date: "2023-11-18T13:00Z"
    },
    {
      teams: ["B04", "RBL"],
      goals: [1, 1],
      date: "2023-11-19T13:00Z"
    },
    {
      teams: ["SVW", "FCB"],
      goals: [0, 2],
      date: "2023-11-19T17:30Z"
    },
    {
      teams: ["SCF", "KÖL"],
      goals: [3, 3],
      date: "2023-11-20T18:30Z"
    }
  ],
  9: [
    {
      teams: ["RBL", "FCN"],
      goals: [0, 0],
      date: "2023-12-08T17:30Z"
    },
    {
      teams: ["ESS", "SCF"],
      goals: [0, 1],
      date: "2023-12-09T11:00Z"
    },
    {
      teams: ["KÖL", "WOB"],
      goals: [1, 4],
      date: "2023-12-09T13:00Z"
    },
    {
      teams: ["SGE", "HOF"],
      goals: [3, 1],
      date: "2023-12-10T13:00Z"
    },
    {
      teams: ["DUI", "SVW"],
      goals: [0, 2],
      date: "2023-12-10T17:30Z"
    },
    {
      teams: ["FCB", "B04"],
      goals: [3, 0],
      date: "2023-12-11T18:30Z"
    }
  ],
  10: [
    {
      teams: ["B04", "DUI"],
      goals: [4, 1],
      date: "2023-12-15T17:30Z"
    },
    {
      teams: ["KÖL", "ESS"],
      goals: [0, 1],
      date: "2023-12-16T11:00Z"
    },
    {
      teams: ["SCF", "SGE"],
      goals: [0, 4],
      date: "2023-12-16T13:00Z"
    },
    {
      teams: ["HOF", "RBL"],
      goals: [2, 1],
      date: "2023-12-17T13:00Z"
    },
    {
      teams: ["FCN", "FCB"],
      goals: [1, 1],
      date: "2023-12-17T17:30Z"
    },
    {
      teams: ["WOB", "SVW"],
      goals: [1, 0],
      date: "2023-12-18T18:30Z"
    }
  ],
  11: [
    {
      teams: ["SVW", "B04"],
      goals: [2, 1],
      date: "2024-01-26T17:30Z"
    },
    {
      teams: ["RBL", "SCF"],
      goals: [0, 2],
      date: "2024-01-27T11:00Z"
    },
    {
      teams: ["FCB", "HOF"],
      goals: [1, 0],
      date: "2024-01-27T13:00Z"
    },
    {
      teams: ["SGE", "KÖL"],
      goals: [1, 0],
      date: "2024-01-28T13:00Z"
    },
    {
      teams: ["DUI", "FCN"],
      goals: [1, 2],
      date: "2024-01-28T17:30Z"
    },
    {
      teams: ["ESS", "WOB"],
      goals: [1, 3],
      date: "2024-01-29T18:30Z"
    }
  ],
  12: [
    {
      teams: ["DUI", "HOF"],
      goals: [0, 2],
      date: "2024-02-02T17:30Z"
    },
    {
      teams: ["RBL", "KÖL"],
      goals: [2, 1],
      date: "2024-02-03T11:00Z"
    },
    {
      teams: ["SVW", "FCN"],
      goals: [4, 0],
      date: "2024-02-03T13:00Z"
    },
    {
      teams: ["B04", "WOB"],
      goals: [1, 1],
      date: "2024-02-04T13:00Z"
    },
    {
      teams: ["SGE", "ESS"],
      goals: [1, 0],
      date: "2024-02-04T17:30Z"
    },
    {
      teams: ["FCB", "SCF"],
      goals: [4, 0],
      date: "2024-02-05T18:30Z"
    }
  ],
  13: [
    {
      teams: ["ESS", "RBL"],
      goals: [4, 4],
      date: "2024-02-09T17:30Z"
    },
    {
      teams: ["HOF", "SVW"],
      goals: [1, 1],
      date: "2024-02-10T11:00Z"
    },
    {
      teams: ["KÖL", "FCB"],
      goals: [0, 5],
      date: "2024-02-10T13:00Z"
    },
    {
      teams: ["WOB", "SGE"],
      goals: [3, 0],
      date: "2024-02-11T13:00Z"
    },
    {
      teams: ["SCF", "DUI"],
      goals: [1, 1],
      date: "2024-02-11T17:30Z"
    },
    {
      teams: ["FCN", "B04"],
      goals: [1, 2],
      date: "2024-02-12T18:30Z"
    }
  ],
  14: [
    {
      teams: ["RBL", "SGE"],
      goals: [2, 1],
      date: "2024-02-16T17:30Z"
    },
    {
      teams: ["FCN", "WOB"],
      goals: [1, 9],
      date: "2024-02-17T11:00Z"
    },
    {
      teams: ["SVW", "SCF"],
      goals: [0, 3],
      date: "2024-02-17T13:00Z"
    },
    {
      teams: ["B04", "HOF"],
      goals: [1, 2],
      date: "2024-02-18T13:00Z"
    },
    {
      teams: ["FCB", "ESS"],
      goals: [2, 0],
      date: "2024-02-18T15:00Z"
    },
    {
      teams: ["DUI", "KÖL"],
      goals: [0, 0],
      date: "2024-02-18T17:30Z"
    }
  ],
  15: [
    {
      teams: ["ESS", "DUI"],
      goals: [4, 1],
      date: "2024-03-08T17:30Z"
    },
    {
      teams: ["SGE", "FCB"],
      goals: [1, 2],
      date: "2024-03-09T12:00Z"
    },
    {
      teams: ["HOF", "FCN"],
      goals: [2, 0],
      date: "2024-03-09T14:00Z"
    },
    {
      teams: ["KÖL", "SVW"],
      goals: [2, 1],
      date: "2024-03-10T13:00Z"
    },
    {
      teams: ["SCF", "B04"],
      goals: [0, 0],
      date: "2024-03-10T17:30Z"
    },
    {
      teams: ["WOB", "RBL"],
      goals: [4, 0],
      date: "2024-03-11T18:30Z"
    }
  ],
  16: [
    {
      teams: ["HOF", "WOB"],
      goals: [2, 1],
      date: "2024-03-15T17:30Z"
    },
    {
      teams: ["FCB", "RBL"],
      goals: [5, 0],
      date: "2024-03-16T11:00Z"
    },
    {
      teams: ["SVW", "ESS"],
      goals: [0, 0],
      date: "2024-03-16T13:00Z"
    },
    {
      teams: ["FCN", "SCF"],
      goals: [0, 0],
      date: "2024-03-17T13:00Z"
    },
    {
      teams: ["DUI", "SGE"],
      goals: [1, 2],
      date: "2024-03-17T17:30Z"
    },
    {
      teams: ["B04", "KÖL"],
      goals: [2, 0],
      date: "2024-03-18T18:30Z"
    }
  ],
  17: [
    {
      teams: ["SCF", "HOF"],
      goals: [2, 4],
      date: "2024-03-22T17:30Z"
    },
    {
      teams: ["KÖL", "FCN"],
      goals: [3, 4],
      date: "2024-03-23T13:00Z"
    },
    {
      teams: ["WOB", "FCB"],
      goals: [0, 4],
      date: "2024-03-23T16:45Z"
    },
    {
      teams: ["RBL", "DUI"],
      goals: [3, 0],
      date: "2024-03-24T13:00Z"
    },
    {
      teams: ["ESS", "B04"],
      goals: [0, 0],
      date: "2024-03-24T17:30Z"
    },
    {
      teams: ["SGE", "SVW"],
      goals: [2, 0],
      date: "2024-03-25T18:30Z"
    }
  ],
  18: [
    {
      teams: ["SVW", "RBL"],
      goals: [1, 1],
      date: "2024-04-12T16:30Z"
    },
    {
      teams: ["SCF", "WOB"],
      goals: [1, 4],
      date: "2024-04-13T10:00Z"
    },
    {
      teams: ["B04", "SGE"],
      goals: [2, 0],
      date: "2024-04-13T12:00Z"
    },
    {
      teams: ["FCN", "ESS"],
      goals: [0, 4],
      date: "2024-04-14T12:00Z"
    },
    {
      teams: ["DUI", "FCB"],
      goals: [1, 5],
      date: "2024-04-14T16:30Z"
    },
    {
      teams: ["HOF", "KÖL"],
      goals: [1, 1],
      date: "2024-04-15T17:30Z"
    }
  ],
  19: [
    {
      teams: ["RBL", "B04"],
      goals: [1, 0],
      date: "2024-04-19T16:30Z"
    },
    {
      teams: ["ESS", "HOF"],
      goals: [2, 1],
      date: "2024-04-20T10:00Z"
    },
    {
      teams: ["SGE", "FCN"],
      goals: [4, 1],
      date: "2024-04-20T12:00Z"
    },
    {
      teams: ["KÖL", "SCF"],
      goals: [2, 0],
      date: "2024-04-21T12:00Z"
    },
    {
      teams: ["DUI", "WOB"],
      goals: [1, 4],
      date: "2024-04-21T16:30Z"
    },
    {
      teams: ["FCB", "SVW"],
      goals: [3, 0],
      date: "2024-04-22T17:30Z"
    }
  ],
  20: [
    {
      teams: ["WOB", "KÖL"],
      goals: [5, 1],
      date: "2024-05-03T16:30Z"
    },
    {
      teams: ["B04", "FCB"],
      goals: [null, null],
      date: "2024-05-04T10:00Z"
    },
    {
      teams: ["HOF", "SGE"],
      goals: [null, null],
      date: "2024-05-04T12:00Z"
    },
    {
      teams: ["SCF", "ESS"],
      goals: [null, null],
      date: "2024-05-05T12:00Z"
    },
    {
      teams: ["SVW", "DUI"],
      goals: [null, null],
      date: "2024-05-05T16:30Z"
    },
    {
      teams: ["FCN", "RBL"],
      goals: [null, null],
      date: "2024-05-06T17:30Z"
    }
  ],
  21: [
    {
      teams: ["RBL", "HOF"],
      goals: [null, null],
      date: "2024-05-10T16:30Z"
    },
    {
      teams: ["ESS", "KÖL"],
      goals: [null, null],
      date: "2024-05-11T10:00Z"
    },
    {
      teams: ["DUI", "B04"],
      goals: [null, null],
      date: "2024-05-11T12:00Z"
    },
    {
      teams: ["FCB", "FCN"],
      goals: [null, null],
      date: "2024-05-12T12:00Z"
    },
    {
      teams: ["SVW", "WOB"],
      goals: [null, null],
      date: "2024-05-12T16:30Z"
    },
    {
      teams: ["SGE", "SCF"],
      goals: [null, null],
      date: "2024-05-13T17:30Z"
    }
  ],
  22: [
    {
      teams: ["KÖL", "SGE"],
      goals: [null, null],
      date: "2024-05-20T13:30Z"
    },
    {
      teams: ["FCN", "DUI"],
      goals: [null, null],
      date: "2024-05-20T13:30Z"
    },
    {
      teams: ["B04", "SVW"],
      goals: [null, null],
      date: "2024-05-20T13:30Z"
    },
    {
      teams: ["SCF", "RBL"],
      goals: [null, null],
      date: "2024-05-20T13:30Z"
    },
    {
      teams: ["HOF", "FCB"],
      goals: [null, null],
      date: "2024-05-20T13:30Z"
    },
    {
      teams: ["WOB", "ESS"],
      goals: [null, null],
      date: "2024-05-20T13:30Z"
    }
  ]
};

const table = makeTable(matches);

const data = {
  matches: matches,
  table: table
};

module.exports = data;
