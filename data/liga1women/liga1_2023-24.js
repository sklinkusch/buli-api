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
      goals: [null, null],
      date: "2023-10-01T12:00Z"
    },
    {
      teams: ["DUI", "SCF"],
      goals: [null, null],
      date: "2023-10-01T16:30Z"
    },
    {
      teams: ["FCB", "KÖL"],
      goals: [null, null],
      date: "2023-10-02T17:30Z"
    }
  ],
  3: [
    {
      teams: ["WOB", "FCN"],
      goals: [null, null],
      date: "2023-10-06T16:30Z"
    },
    {
      teams: ["KÖL", "DUI"],
      goals: [null, null],
      date: "2023-10-07T10:00Z"
    },
    {
      teams: ["SGE", "RBL"],
      goals: [null, null],
      date: "2023-10-07T12:00Z"
    },
    {
      teams: ["ESS", "FCB"],
      goals: [null, null],
      date: "2023-10-08T12:00Z"
    },
    {
      teams: ["SCF", "SVW"],
      goals: [null, null],
      date: "2023-10-08T16:30Z"
    },
    {
      teams: ["HOF", "B04"],
      goals: [null, null],
      date: "2023-10-09T17:30Z"
    }
  ],
  4: [
    {
      teams: ["FCN", "HOF"],
      goals: [null, null],
      date: "2023-10-13T16:30Z"
    },
    {
      teams: ["SVW", "KÖL"],
      goals: [null, null],
      date: "2023-10-14T12:00Z"
    },
    {
      teams: ["FCB", "SGE"],
      goals: [null, null],
      date: "2023-10-14T15:55Z"
    },
    {
      teams: ["RBL", "WOB"],
      goals: [null, null],
      date: "2023-10-15T12:00Z"
    },
    {
      teams: ["B04", "SCF"],
      goals: [null, null],
      date: "2023-10-15T16:30Z"
    },
    {
      teams: ["DUI", "ESS"],
      goals: [null, null],
      date: "2023-10-16T17:30Z"
    }
  ],
  5: [
    {
      teams: ["KÖL", "B04"],
      goals: [null, null],
      date: "2023-10-20T16:30Z"
    },
    {
      teams: ["SCF", "FCN"],
      goals: [null, null],
      date: "2023-10-21T10:00Z"
    },
    {
      teams: ["ESS", "SVW"],
      goals: [null, null],
      date: "2023-10-21T12:00Z"
    },
    {
      teams: ["WOB", "HOF"],
      goals: [null, null],
      date: "2023-10-22T12:00Z"
    },
    {
      teams: ["SGE", "DUI"],
      goals: [null, null],
      date: "2023-10-22T14:00Z"
    },
    {
      teams: ["RBL", "FCB"],
      goals: [null, null],
      date: "2022-10-22T16:30Z"
    }
  ]
  /*6: [
    {
      teams: ["DUI", "KÖL"],
      goals: [2, 1],
      date: "2022-10-28T17:15Z"
    },
    {
      teams: ["HOF", "SGE"],
      goals: [3, 3],
      date: "2022-10-29T11:00Z"
    },
    {
      teams: ["POT", "SCF"],
      goals: [0, 5],
      date: "2022-10-30T12:00Z"
    },
    {
      teams: ["FCB", "SVM"],
      goals: [3, 1],
      date: "2022-10-30T12:00Z"
    },
    {
      teams: ["B04", "ESS"],
      goals: [6, 0],
      date: "2022-10-30T15:00Z"
    },
    {
      teams: ["SVW", "WOB"],
      goals: [2, 3],
      date: "2022-10-30T15:00Z"
    }
  ],
  7: [
    {
      teams: ["HOF", "B04"],
      goals: [3, 1],
      date: "2022-11-04T18:15Z"
    },
    {
      teams: ["SCF", "FCB"],
      goals: [0, 3],
      date: "2022-11-05T12:00Z"
    },
    {
      teams: ["WOB", "DUI"],
      goals: [4, 0],
      date: "2022-11-06T12:00Z"
    },
    {
      teams: ["ESS", "POT"],
      goals: [2, 1],
      date: "2022-11-06T12:00Z"
    },
    {
      teams: ["SGE", "KÖL"],
      goals: [2, 0],
      date: "2022-11-06T15:00Z"
    },
    {
      teams: ["SVM", "SVW"],
      goals: [2, 0],
      date: "2022-11-06T15:00Z"
    }
  ],
  8: [
    {
      teams: ["POT", "HOF"],
      goals: [1, 3],
      date: "2022-11-25T18:15Z"
    },
    {
      teams: ["SGE", "B04"],
      goals: [0, 0],
      date: "2022-11-26T13:00Z"
    },
    {
      teams: ["SVW", "SCF"],
      goals: [1, 2],
      date: "2022-11-26T15:00Z"
    },
    {
      teams: ["KÖL", "WOB"],
      goals: [0, 4],
      date: "2022-11-27T12:00Z"
    },
    {
      teams: ["DUI", "SVM"],
      goals: [1, 0],
      date: "2022-11-27T12:00Z"
    },
    {
      teams: ["FCB", "ESS"],
      goals: [2, 0],
      date: "2022-11-27T15:00Z"
    }
  ],
  9: [
    {
      teams: ["HOF", "FCB"],
      goals: [0, 4],
      date: "2022-12-02T18:15Z"
    },
    {
      teams: ["WOB", "SGE"],
      goals: [5, 0],
      date: "2022-12-03T12:00Z"
    },
    {
      teams: ["SCF", "DUI"],
      goals: [4, 1],
      date: "2022-12-03T15:00Z"
    },
    {
      teams: ["B04", "POT"],
      goals: [3, 0],
      date: "2022-12-04T12:00Z"
    },
    {
      teams: ["SVM", "KÖL"],
      goals: [1, 0],
      date: "2022-12-04T12:00Z"
    },
    {
      teams: ["ESS", "SVW"],
      goals: [0, 0],
      date: "2022-12-04T15:00Z"
    }
  ],
  10: [
    {
      teams: ["SGE", "POT"],
      goals: [3, 0],
      date: "2022-12-09T18:15Z"
    },
    {
      teams: ["FCB", "B04"],
      goals: [2, 0],
      date: "2022-12-10T13:00Z"
    },
    {
      teams: ["WOB", "SVM"],
      goals: [3, 0],
      date: "2022-12-11T12:00Z"
    },
    {
      teams: ["KÖL", "SCF"],
      goals: [0, 0],
      date: "2022-12-11T12:00Z"
    },
    {
      teams: ["DUI", "ESS"],
      goals: [0, 6],
      date: "2022-12-11T15:00Z"
    },
    {
      teams: ["SVW", "HOF"],
      goals: [1, 1],
      date: "2022-12-11T15:00Z"
    }
  ],
  11: [
    {
      teams: ["ESS", "KÖL"],
      goals: [4, 0],
      date: "2023-02-03T18:15Z"
    },
    {
      teams: ["SCF", "WOB"],
      goals: [0, 4],
      date: "2023-02-04T13:00Z"
    },
    {
      teams: ["HOF", "DUI"],
      goals: [7, 0],
      date: "2023-02-05T12:00Z"
    },
    {
      teams: ["B04", "SVW"],
      goals: [0, 2],
      date: "2023-02-05T15:00Z"
    },
    {
      teams: ["SVM", "SGE"],
      goals: [0, 1],
      date: "2023-02-05T15:00Z"
    },
    {
      teams: ["POT", "FCB"],
      goals: [0, 3],
      date: "2023-02-25T12:00Z"
    }
  ],
  12: [
    {
      teams: ["FCB", "SGE"],
      goals: [2, 1],
      date: "2023-02-11T12:00Z"
    },
    {
      teams: ["ESS", "WOB"],
      goals: [0, 3],
      date: "2023-02-12T12:00Z"
    },
    {
      teams: ["SCF", "SVM"],
      goals: [3, 1],
      date: "2023-02-12T12:00Z"
    },
    {
      teams: ["HOF", "KÖL"],
      goals: [4, 0],
      date: "2023-02-12T15:00Z"
    },
    {
      teams: ["B04", "DUI"],
      goals: [2, 0],
      date: "2023-02-12T15:00Z"
    },
    {
      teams: ["POT", "SVW"],
      goals: [1, 2],
      date: "2023-03-01T18:30Z"
    }
  ],
  13: [
    {
      teams: ["SGE", "SCF"],
      goals: [4, 1],
      date: "2023-03-03T18:45Z"
    },
    {
      teams: ["WOB", "HOF"],
      goals: [1, 2],
      date: "2023-03-04T12:00Z"
    },
    {
      teams: ["DUI", "POT"],
      goals: [3, 0],
      date: "2023-03-05T12:00Z"
    },
    {
      teams: ["KÖL", "B04"],
      goals: [0, 0],
      date: "2023-03-05T12:00Z"
    },
    {
      teams: ["SVM", "ESS"],
      goals: [1, 1],
      date: "2023-03-05T15:00Z"
    },
    {
      teams: ["SVW", "FCB"],
      goals: [0, 2],
      date: "2023-03-05T15:00Z"
    }
  ],
  14: [
    {
      teams: ["FCB", "DUI"],
      goals: [4, 0],
      date: "2023-03-10T18:15Z"
    },
    {
      teams: ["HOF", "SVM"],
      goals: [4, 0],
      date: "2023-03-12T12:00Z"
    },
    {
      teams: ["B04", "WOB"],
      goals: [1, 4],
      date: "2023-03-12T12:00Z"
    },
    {
      teams: ["ESS", "SCF"],
      goals: [2, 1],
      date: "2023-03-12T15:00Z"
    },
    {
      teams: ["SVW", "SGE"],
      goals: [0, 2],
      date: "2023-03-14T17:00Z"
    },
    {
      teams: ["POT", "KÖL"],
      goals: [0, 0],
      date: "2023-03-21T18:00Z"
    }
  ],
  15: [
    {
      teams: ["WOB", "POT"],
      goals: [5, 0],
      date: "2023-03-17T18:15Z"
    },
    {
      teams: ["KÖL", "FCB"],
      goals: [0, 5],
      date: "2023-03-18T12:00Z"
    },
    {
      teams: ["SGE", "ESS"],
      goals: [4, 1],
      date: "2023-03-19T12:00Z"
    },
    {
      teams: ["DUI", "SVW"],
      goals: [0, 1],
      date: "2023-03-19T12:00Z"
    },
    {
      teams: ["SVM", "B04"],
      goals: [1, 2],
      date: "2023-03-19T15:00Z"
    },
    {
      teams: ["SCF", "HOF"],
      goals: [0, 1],
      date: "2023-03-19T15:00Z"
    }
  ],
  16: [
    {
      teams: ["SVW", "KÖL"],
      goals: [1, 0],
      date: "2023-03-24T18:15Z"
    },
    {
      teams: ["FCB", "WOB"],
      goals: [1, 0],
      date: "2023-03-25T16:55Z"
    },
    {
      teams: ["HOF", "ESS"],
      goals: [2, 0],
      date: "2023-03-26T11:00Z"
    },
    {
      teams: ["B04", "SCF"],
      goals: [2, 0],
      date: "2023-03-26T11:00Z"
    },
    {
      teams: ["POT", "SVM"],
      goals: [3, 1],
      date: "2023-03-26T14:00Z"
    },
    {
      teams: ["DUI", "SGE"],
      goals: [0, 1],
      date: "2023-04-16T11:00Z"
    }
  ],
  17: [
    {
      teams: ["KÖL", "DUI"],
      goals: [4, 0],
      date: "2023-03-31T17:15Z"
    },
    {
      teams: ["SCF", "POT"],
      goals: [0, 1],
      date: "2023-04-02T11:00Z"
    },
    {
      teams: ["SVM", "FCB"],
      goals: [0, 2],
      date: "2023-04-02T11:00Z"
    },
    {
      teams: ["WOB", "SVW"],
      goals: [8, 0],
      date: "2023-04-02T14:00Z"
    },
    {
      teams: ["ESS", "B04"],
      goals: [0, 0],
      date: "2023-04-15T11:00Z"
    },
    {
      teams: ["SGE", "HOF"],
      goals: [3, 3],
      date: "2023-04-30T11:00Z"
    }
  ],
  18: [
    {
      teams: ["DUI", "WOB"],
      goals: [0, 3],
      date: "2023-04-19T17:00Z"
    },
    {
      teams: ["B04", "HOF"],
      goals: [0, 1],
      date: "2023-04-21T17:15Z"
    },
    {
      teams: ["FCB", "SCF"],
      goals: [8, 2],
      date: "2023-04-22T11:00Z"
    },
    {
      teams: ["KÖL", "SGE"],
      goals: [0, 2],
      date: "2023-04-23T11:00Z"
    },
    {
      teams: ["POT", "ESS"],
      goals: [0, 1],
      date: "2023-04-23T11:00Z"
    },
    {
      teams: ["SVW", "SVM"],
      goals: [0, 0],
      date: "2023-04-23T14:00Z"
    }
  ],
  19: [
    {
      teams: ["B04", "SGE"],
      goals: [2, 3],
      date: "2023-05-06T11:00Z"
    },
    {
      teams: ["ESS", "FCB"],
      goals: [1, 2],
      date: "2023-05-06T11:00Z"
    },
    {
      teams: ["WOB", "KÖL"],
      goals: [7, 1],
      date: "2023-05-07T11:00Z"
    },
    {
      teams: ["SCF", "SVW"],
      goals: [1, 1],
      date: "2023-05-07T11:00Z"
    },
    {
      teams: ["HOF", "POT"],
      goals: [6, 1],
      date: "2023-05-07T14:00Z"
    },
    {
      teams: ["SVM", "DUI"],
      goals: [0, 2],
      date: "2023-05-07T14:00Z"
    }
  ],
  20: [
    {
      teams: ["FCB", "HOF"],
      goals: [1, 0],
      date: "2023-05-12T17:15Z"
    },
    {
      teams: ["POT", "B04"],
      goals: [1, 5],
      date: "2023-05-13T11:00Z"
    },
    {
      teams: ["SGE", "WOB"],
      goals: [4, 0],
      date: "2023-05-14T11:00Z"
    },
    {
      teams: ["DUI", "SCF"],
      goals: [1, 1],
      date: "2023-05-14T11:00Z"
    },
    {
      teams: ["SVW", "ESS"],
      goals: [3, 2],
      date: "2023-05-14T14:00Z"
    },
    {
      teams: ["KÖL", "SVM"],
      goals: [1, 2],
      date: "2023-05-14T14:00Z"
    }
  ],
  21: [
    {
      teams: ["HOF", "SVW"],
      goals: [4, 0],
      date: "2023-05-19T17:15Z"
    },
    {
      teams: ["B04", "FCB"],
      goals: [0, 0],
      date: "2023-05-20T11:00Z"
    },
    {
      teams: ["POT", "SGE"],
      goals: [0, 3],
      date: "2023-05-21T11:00Z"
    },
    {
      teams: ["SCF", "KÖL"],
      goals: [1, 3],
      date: "2023-05-21T11:00Z"
    },
    {
      teams: ["SVM", "WOB"],
      goals: [2, 3],
      date: "2023-05-21T14:00Z"
    },
    {
      teams: ["ESS", "DUI"],
      goals: [0, 0],
      date: "2023-05-21T14:00Z"
    }
  ],
  22: [
    {
      teams: ["FCB", "POT"],
      goals: [11, 1],
      date: "2023-05-28T12:00Z"
    },
    {
      teams: ["SVW", "B04"],
      goals: [0, 2],
      date: "2023-05-28T12:00Z"
    },
    {
      teams: ["DUI", "HOF"],
      goals: [0, 1],
      date: "2023-05-28T12:00Z"
    },
    {
      teams: ["KÖL", "ESS"],
      goals: [1, 1],
      date: "2023-05-28T12:00Z"
    },
    {
      teams: ["WOB", "SCF"],
      goals: [2, 1],
      date: "2023-05-28T12:00Z"
    },
    {
      teams: ["SGE", "SVM"],
      goals: [6, 0],
      date: "2023-05-28T14:00:00+02:00"
    }
  ]*/
};

const table = makeTable(matches);

const data = {
  matches: matches,
  table: table
};

module.exports = data;
