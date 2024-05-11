const { makeTable } = require("../helpers");

const matches = {
  1: [
    {
      teams: ["SVW", "FCB"],
      goals: [0, 4],
      date: "2023-08-18T18:30Z"
    },
    {
      teams: ["B04", "RBL"],
      goals: [3, 2],
      date: "2023-08-19T13:30Z"
    },
    {
      teams: ["WOB", "FCH"],
      goals: [2, 0],
      date: "2023-08-19T13:30Z"
    },
    {
      teams: ["HOF", "SCF"],
      goals: [1, 2],
      date: "2023-08-19T13:30Z"
    },
    {
      teams: ["FCA", "MGL"],
      goals: [4, 4],
      date: "2023-08-19T13:30Z"
    },
    {
      teams: ["VfB", "BOC"],
      goals: [5, 0],
      date: "2023-08-19T13:30Z"
    },
    {
      teams: ["BVB", "KÖL"],
      goals: [1, 0],
      date: "2023-08-19T16:30Z"
    },
    {
      teams: ["FCU", "M05"],
      goals: [4, 1],
      date: "2023-08-20T13:30Z"
    },
    {
      teams: ["SGE", "D98"],
      goals: [1, 0],
      date: "2023-08-20T15:30Z"
    }
  ],
  2: [
    {
      teams: ["RBL", "VfB"],
      goals: [5, 1],
      date: "2023-08-25T18:30Z"
    },
    {
      teams: ["SCF", "SVW"],
      goals: [1, 0],
      date: "2023-08-26T13:30Z"
    },
    {
      teams: ["KÖL", "WOB"],
      goals: [1, 2],
      date: "2023-08-26T13:30Z"
    },
    {
      teams: ["BOC", "BVB"],
      goals: [1, 1],
      date: "2023-08-26T13:30Z"
    },
    {
      teams: ["FCH", "HOF"],
      goals: [2, 3],
      date: "2023-08-26T13:30Z"
    },
    {
      teams: ["D98", "FCU"],
      goals: [1, 4],
      date: "2023-08-26T13:30Z"
    },
    {
      teams: ["MGL", "B04"],
      goals: [0, 3],
      date: "2023-08-26T16:30Z"
    },
    {
      teams: ["M05", "SGE"],
      goals: [1, 1],
      date: "2023-08-27T13:30Z"
    },
    {
      teams: ["FCB", "FCA"],
      goals: [3, 1],
      date: "2023-08-27T15:30Z"
    }
  ],
  3: [
    {
      teams: ["BVB", "FCH"],
      goals: [2, 2],
      date: "2023-09-01T18:30Z"
    },
    {
      teams: ["B04", "D98"],
      goals: [5, 1],
      date: "2023-09-02T13:30Z"
    },
    {
      teams: ["HOF", "WOB"],
      goals: [3, 1],
      date: "2023-09-02T13:30Z"
    },
    {
      teams: ["SVW", "M05"],
      goals: [4, 0],
      date: "2023-09-02T13:30Z"
    },
    {
      teams: ["FCA", "BOC"],
      goals: [2, 2],
      date: "2023-09-02T13:30Z"
    },
    {
      teams: ["VfB", "SCF"],
      goals: [5, 0],
      date: "2023-09-02T13:30Z"
    },
    {
      teams: ["MGL", "FCB"],
      goals: [1, 2],
      date: "2023-09-02T16:30Z"
    },
    {
      teams: ["SGE", "KÖL"],
      goals: [1, 1],
      date: "2023-09-03T13:30Z"
    },
    {
      teams: ["FCU", "RBL"],
      goals: [0, 3],
      date: "2023-09-03T15:30Z"
    }
  ],
  4: [
    {
      teams: ["FCB", "B04"],
      goals: [2, 2],
      date: "2023-09-15T18:30Z"
    },
    {
      teams: ["RBL", "FCA"],
      goals: [3, 0],
      date: "2023-09-16T13:30Z"
    },
    {
      teams: ["SCF", "BVB"],
      goals: [2, 4],
      date: "2023-09-16T13:30Z"
    },
    {
      teams: ["WOB", "FCU"],
      goals: [2, 1],
      date: "2023-09-16T13:30Z"
    },
    {
      teams: ["M05", "VfB"],
      goals: [1, 3],
      date: "2023-09-16T13:30Z"
    },
    {
      teams: ["KÖL", "HOF"],
      goals: [1, 3],
      date: "2023-09-16T13:30Z"
    },
    {
      teams: ["BOC", "SGE"],
      goals: [1, 1],
      date: "2023-09-16T16:30Z"
    },
    {
      teams: ["FCH", "SVW"],
      goals: [4, 2],
      date: "2023-09-17T13:30Z"
    },
    {
      teams: ["D98", "MGL"],
      goals: [3, 3],
      date: "2023-09-17T15:30Z"
    }
  ],
  5: [
    {
      teams: ["VfB", "D98"],
      goals: [3, 1],
      date: "2023-09-22T18:30Z"
    },
    {
      teams: ["FCB", "BOC"],
      goals: [7, 0],
      date: "2023-09-23T13:30Z"
    },
    {
      teams: ["BVB", "WOB"],
      goals: [1, 0],
      date: "2023-09-23T13:30Z"
    },
    {
      teams: ["FCU", "HOF"],
      goals: [0, 2],
      date: "2023-09-23T13:30Z"
    },
    {
      teams: ["MGL", "RBL"],
      goals: [0, 1],
      date: "2023-09-23T13:30Z"
    },
    {
      teams: ["FCA", "M05"],
      goals: [2, 1],
      date: "2023-09-23T13:30Z"
    },
    {
      teams: ["SVW", "KÖL"],
      goals: [2, 1],
      date: "2023-09-23T16:30Z"
    },
    {
      teams: ["B04", "FCH"],
      goals: [4, 1],
      date: "2023-09-24T13:30Z"
    },
    {
      teams: ["SGE", "SCF"],
      goals: [0, 0],
      date: "2023-09-24T15:30Z"
    }
  ],
  6: [
    {
      teams: ["HOF", "BVB"],
      goals: [1, 3],
      date: "2023-09-29T18:30Z"
    },
    {
      teams: ["WOB", "SGE"],
      goals: [2, 0],
      date: "2023-09-30T13:30Z"
    },
    {
      teams: ["M05", "B04"],
      goals: [0, 3],
      date: "2023-09-30T13:30Z"
    },
    {
      teams: ["KÖL", "VfB"],
      goals: [0, 2],
      date: "2023-09-30T13:30Z"
    },
    {
      teams: ["BOC", "MGL"],
      goals: [1, 3],
      date: "2023-09-30T13:30Z"
    },
    {
      teams: ["FCH", "FCU"],
      goals: [1, 0],
      date: "2023-09-30T13:30Z"
    },
    {
      teams: ["RBL", "FCB"],
      goals: [2, 2],
      date: "2023-09-30T16:30Z"
    },
    {
      teams: ["D98", "SVW"],
      goals: [4, 2],
      date: "2023-10-01T13:30Z"
    },
    {
      teams: ["SCF", "FCA"],
      goals: [2, 0],
      date: "2023-10-01T15:30Z"
    }
  ],
  7: [
    {
      teams: ["MGL", "M05"],
      goals: [2, 2],
      date: "2023-10-06T18:30Z"
    },
    {
      teams: ["BVB", "FCU"],
      goals: [4, 2],
      date: "2023-10-07T13:30Z"
    },
    {
      teams: ["RBL", "BOC"],
      goals: [0, 0],
      date: "2023-10-07T13:30Z"
    },
    {
      teams: ["FCA", "D98"],
      goals: [1, 2],
      date: "2023-10-07T13:30Z"
    },
    {
      teams: ["VfB", "WOB"],
      goals: [3, 1],
      date: "2023-10-07T13:30Z"
    },
    {
      teams: ["SVW", "HOF"],
      goals: [2, 3],
      date: "2023-10-07T16:30Z"
    },
    {
      teams: ["B04", "KÖL"],
      goals: [3, 0],
      date: "2023-10-08T13:30Z"
    },
    {
      teams: ["FCB", "SCF"],
      goals: [3, 0],
      date: "2023-10-08T15:30Z"
    },
    {
      teams: ["SGE", "FCH"],
      goals: [2, 0],
      date: "2023-10-08T17:30Z"
    }
  ],
  8: [
    {
      teams: ["BVB", "SVW"],
      goals: [1, 0],
      date: "2023-10-20T18:30Z"
    },
    {
      teams: ["FCU", "VfB"],
      goals: [0, 3],
      date: "2023-10-21T13:30Z"
    },
    {
      teams: ["SCF", "BOC"],
      goals: [2, 1],
      date: "2023-10-21T13:30Z"
    },
    {
      teams: ["WOB", "B04"],
      goals: [1, 2],
      date: "2023-10-21T13:30Z"
    },
    {
      teams: ["HOF", "SGE"],
      goals: [1, 3],
      date: "2023-10-21T13:30Z"
    },
    {
      teams: ["D98", "RBL"],
      goals: [1, 3],
      date: "2023-10-21T13:30Z"
    },
    {
      teams: ["M05", "FCB"],
      goals: [1, 3],
      date: "2023-10-21T16:30Z"
    },
    {
      teams: ["KÖL", "MGL"],
      goals: [3, 1],
      date: "2023-10-22T13:30Z"
    },
    {
      teams: ["FCH", "FCA"],
      goals: [2, 5],
      date: "2023-10-22T15:30Z"
    }
  ],
  9: [
    {
      teams: ["BOC", "M05"],
      goals: [2, 2],
      date: "2023-10-27T18:30Z"
    },
    {
      teams: ["FCB", "D98"],
      goals: [8, 0],
      date: "2023-10-28T13:30Z"
    },
    {
      teams: ["MGL", "FCH"],
      goals: [2, 1],
      date: "2023-10-28T13:30Z"
    },
    {
      teams: ["SVW", "FCU"],
      goals: [2, 0],
      date: "2023-10-28T13:30Z"
    },
    {
      teams: ["FCA", "WOB"],
      goals: [3, 2],
      date: "2023-10-28T13:30Z"
    },
    {
      teams: ["VfB", "HOF"],
      goals: [2, 3],
      date: "2023-10-28T13:30Z"
    },
    {
      teams: ["RBL", "KÖL"],
      goals: [6, 0],
      date: "2023-10-28T16:30Z"
    },
    {
      teams: ["SGE", "BVB"],
      goals: [3, 3],
      date: "2023-10-29T14:30Z"
    },
    {
      teams: ["B04", "SCF"],
      goals: [2, 1],
      date: "2023-10-29T16:30Z"
    }
  ],
  10: [
    {
      teams: ["D98", "BOC"],
      goals: [1, 2],
      date: "2023-11-03T19:30Z"
    },
    {
      teams: ["FCU", "SGE"],
      goals: [0, 3],
      date: "2023-11-04T14:30Z"
    },
    {
      teams: ["SCF", "MGL"],
      goals: [3, 3],
      date: "2023-11-04T14:30Z"
    },
    {
      teams: ["M05", "RBL"],
      goals: [2, 0],
      date: "2023-11-04T14:30Z"
    },
    {
      teams: ["KÖL", "FCA"],
      goals: [1, 1],
      date: "2023-11-04T14:30Z"
    },
    {
      teams: ["HOF", "B04"],
      goals: [2, 3],
      date: "2023-11-04T14:30Z"
    },
    {
      teams: ["BVB", "FCB"],
      goals: [0, 4],
      date: "2023-11-04T17:30Z"
    },
    {
      teams: ["WOB", "SVW"],
      goals: [2, 2],
      date: "2023-11-05T14:30Z"
    },
    {
      teams: ["FCH", "VfB"],
      goals: [2, 0],
      date: "2023-11-05T16:30Z"
    }
  ],
  11: [
    {
      teams: ["MGL", "WOB"],
      goals: [4, 0],
      date: "2023-11-10T19:30Z"
    },
    {
      teams: ["FCB", "FCH"],
      goals: [4, 2],
      date: "2023-11-11T14:30Z"
    },
    {
      teams: ["FCA", "HOF"],
      goals: [1, 1],
      date: "2023-11-11T14:30Z"
    },
    {
      teams: ["VfB", "BVB"],
      goals: [2, 1],
      date: "2023-11-11T14:30Z"
    },
    {
      teams: ["D98", "M05"],
      goals: [0, 0],
      date: "2023-11-11T14:30Z"
    },
    {
      teams: ["BOC", "KÖL"],
      goals: [1, 1],
      date: "2023-11-11T17:30Z"
    },
    {
      teams: ["B04", "FCU"],
      goals: [4, 0],
      date: "2023-11-12T14:30Z"
    },
    {
      teams: ["SVW", "SGE"],
      goals: [2, 2],
      date: "2023-11-12T16:30Z"
    },
    {
      teams: ["RBL", "SCF"],
      goals: [3, 1],
      date: "2023-11-12T18:30Z"
    }
  ],
  12: [
    {
      teams: ["KÖL", "FCB"],
      goals: [0, 1],
      date: "2023-11-24T19:30Z"
    },
    {
      teams: ["BVB", "MGL"],
      goals: [4, 2],
      date: "2023-11-25T14:30Z"
    },
    {
      teams: ["FCU", "FCA"],
      goals: [1, 1],
      date: "2023-11-25T14:30Z"
    },
    {
      teams: ["SCF", "D98"],
      goals: [1, 1],
      date: "2023-11-25T14:30Z"
    },
    {
      teams: ["WOB", "RBL"],
      goals: [2, 1],
      date: "2023-11-25T14:30Z"
    },
    {
      teams: ["SVW", "B04"],
      goals: [0, 3],
      date: "2023-11-25T14:30Z"
    },
    {
      teams: ["SGE", "VfB"],
      goals: [1, 2],
      date: "2023-11-25T17:30Z"
    },
    {
      teams: ["FCH", "BOC"],
      goals: [0, 0],
      date: "2023-11-26T14:30Z"
    },
    {
      teams: ["HOF", "M05"],
      goals: [1, 1],
      date: "2023-11-26T16:30Z"
    }
  ],
  13: [
    {
      teams: ["D98", "KÖL"],
      goals: [0, 1],
      date: "2023-12-01T19:30Z"
    },
    {
      teams: ["RBL", "FCH"],
      goals: [2, 1],
      date: "2023-12-02T14:30Z"
    },
    {
      teams: ["MGL", "HOF"],
      goals: [2, 1],
      date: "2023-12-02T14:30Z"
    },
    {
      teams: ["BOC", "WOB"],
      goals: [3, 1],
      date: "2023-12-02T14:30Z"
    },
    {
      teams: ["VfB", "SVW"],
      goals: [2, 0],
      date: "2023-12-02T17:30Z"
    },
    {
      teams: ["M05", "SCF"],
      goals: [0, 1],
      date: "2023-12-03T14:30Z"
    },
    {
      teams: ["B04", "BVB"],
      goals: [1, 1],
      date: "2023-12-03T16:30Z"
    },
    {
      teams: ["FCA", "SGE"],
      goals: [2, 1],
      date: "2023-12-03T18:30Z"
    },
    {
      teams: ["FCB", "FCU"],
      goals: [1, 0],
      date: "2024-01-24T19:00Z"
    }
  ],
  14: [
    {
      teams: ["HOF", "BOC"],
      goals: [3, 1],
      date: "2023-12-08T19:30Z"
    },
    {
      teams: ["FCU", "MGL"],
      goals: [3, 1],
      date: "2023-12-09T14:30Z"
    },
    {
      teams: ["SGE", "FCB"],
      goals: [5, 1],
      date: "2023-12-09T14:30Z"
    },
    {
      teams: ["WOB", "SCF"],
      goals: [0, 1],
      date: "2023-12-09T14:30Z"
    },
    {
      teams: ["SVW", "FCA"],
      goals: [2, 0],
      date: "2023-12-09T14:30Z"
    },
    {
      teams: ["FCH", "D98"],
      goals: [3, 2],
      date: "2023-12-09T14:30Z"
    },
    {
      teams: ["BVB", "RBL"],
      goals: [2, 3],
      date: "2023-12-09T17:30Z"
    },
    {
      teams: ["VfB", "B04"],
      goals: [1, 1],
      date: "2023-12-10T14:30Z"
    },
    {
      teams: ["KÖL", "M05"],
      goals: [0, 0],
      date: "2023-12-10T16:30Z"
    }
  ],
  15: [
    {
      teams: ["MGL", "SVW"],
      goals: [2, 2],
      date: "2023-12-15T19:30Z"
    },
    {
      teams: ["M05", "FCH"],
      goals: [0, 1],
      date: "2023-12-16T14:30Z"
    },
    {
      teams: ["BOC", "FCU"],
      goals: [3, 0],
      date: "2023-12-16T14:30Z"
    },
    {
      teams: ["FCA", "BVB"],
      goals: [1, 1],
      date: "2023-12-16T14:30Z"
    },
    {
      teams: ["D98", "WOB"],
      goals: [0, 1],
      date: "2023-12-16T14:30Z"
    },
    {
      teams: ["RBL", "HOF"],
      goals: [3, 1],
      date: "2023-12-16T17:30Z"
    },
    {
      teams: ["SCF", "KÖL"],
      goals: [2, 0],
      date: "2023-12-17T14:30Z"
    },
    {
      teams: ["B04", "SGE"],
      goals: [3, 0],
      date: "2023-12-16T16:30Z"
    },
    {
      teams: ["FCB", "VfB"],
      goals: [3, 0],
      date: "2023-12-16T18:30Z"
    }
  ],
  16: [
    {
      teams: ["SVW", "RBL"],
      goals: [1, 1],
      date: "2023-12-19T17:30Z"
    },
    {
      teams: ["BVB", "M05"],
      goals: [1, 1],
      date: "2023-12-19T19:30Z"
    },
    {
      teams: ["HOF", "D98"],
      goals: [3, 3],
      date: "2023-12-19T19:30Z"
    },
    {
      teams: ["FCU", "KÖL"],
      goals: [2, 0],
      date: "2023-12-20T17:30Z"
    },
    {
      teams: ["B04", "BOC"],
      goals: [4, 0],
      date: "2023-12-20T19:30Z"
    },
    {
      teams: ["SGE", "MGL"],
      goals: [2, 1],
      date: "2023-12-20T19:30Z"
    },
    {
      teams: ["WOB", "FCB"],
      goals: [1, 2],
      date: "2023-12-20T19:30Z"
    },
    {
      teams: ["VfB", "FCA"],
      goals: [3, 0],
      date: "2023-12-20T19:30Z"
    },
    {
      teams: ["FCH", "SCF"],
      goals: [3, 2],
      date: "2023-12-20T19:30Z"
    }
  ],
  17: [
    {
      teams: ["FCB", "HOF"],
      goals: [3, 0],
      date: "2024-01-12T19:30Z"
    },
    {
      teams: ["RBL", "SGE"],
      goals: [0, 1],
      date: "2024-01-13T14:30Z"
    },
    {
      teams: ["SCF", "FCU"],
      goals: [0, 0],
      date: "2024-01-13T14:30Z"
    },
    {
      teams: ["M05", "WOB"],
      goals: [1, 1],
      date: "2024-01-13T14:30Z"
    },
    {
      teams: ["KÖL", "FCH"],
      goals: [1, 1],
      date: "2024-01-13T14:30Z"
    },
    {
      teams: ["FCA", "B04"],
      goals: [0, 1],
      date: "2024-01-13T14:30Z"
    },
    {
      teams: ["D98", "BVB"],
      goals: [0, 3],
      date: "2024-01-13T17:30Z"
    },
    {
      teams: ["BOC", "SVW"],
      goals: [1, 1],
      date: "2024-01-14T14:30Z"
    },
    {
      teams: ["MGL", "VfB"],
      goals: [3, 1],
      date: "2024-01-13T16:30Z"
    }
  ],
  18: [
    {
      teams: ["KÖL", "BVB"],
      goals: [0, 4],
      date: "2024-01-20T14:30Z"
    },
    {
      teams: ["D98", "SGE"],
      goals: [2, 2],
      date: "2024-01-20T14:30Z"
    },
    {
      teams: ["FCH", "WOB"],
      goals: [1, 1],
      date: "2024-01-20T14:30Z"
    },
    {
      teams: ["SCF", "HOF"],
      goals: [3, 2],
      date: "2024-01-20T14:30Z"
    },
    {
      teams: ["BOC", "VfB"],
      goals: [1, 0],
      date: "2024-01-20T14:30Z"
    },
    {
      teams: ["RBL", "B04"],
      goals: [2, 3],
      date: "2024-01-20T17:30Z"
    },
    {
      teams: ["FCB", "SVW"],
      goals: [0, 1],
      date: "2024-01-21T14:30Z"
    },
    {
      teams: ["MGL", "FCA"],
      goals: [1, 2],
      date: "2024-01-20T16:30Z"
    },
    {
      teams: ["M05", "FCU"],
      goals: [1, 1],
      date: "2024-02-07T17:30Z"
    }
  ],
  19: [
    {
      teams: ["SGE", "M05"],
      goals: [1, 0],
      date: "2024-01-26T19:30Z"
    },
    {
      teams: ["FCA", "FCB"],
      goals: [2, 3],
      date: "2024-01-27T14:30Z"
    },
    {
      teams: ["VfB", "RBL"],
      goals: [5, 2],
      date: "2024-01-27T14:30Z"
    },
    {
      teams: ["SVW", "SCF"],
      goals: [3, 1],
      date: "2024-01-27T14:30Z"
    },
    {
      teams: ["WOB", "KÖL"],
      goals: [1, 1],
      date: "2024-01-27T14:30Z"
    },
    {
      teams: ["HOF", "FCH"],
      goals: [1, 1],
      date: "2024-01-27T14:30Z"
    },
    {
      teams: ["B04", "MGL"],
      goals: [0, 0],
      date: "2024-01-27T17:30Z"
    },
    {
      teams: ["FCU", "D98"],
      goals: [1, 0],
      date: "2024-01-28T14:30Z"
    },
    {
      teams: ["BVB", "BOC"],
      goals: [3, 1],
      date: "2024-01-27T16:30Z"
    }
  ],
  20: [
    {
      teams: ["FCH", "BVB"],
      goals: [0, 0],
      date: "2024-02-02T19:30Z"
    },
    {
      teams: ["D98", "B04"],
      goals: [0, 2],
      date: "2024-02-03T14:30Z"
    },
    {
      teams: ["FCB", "MGL"],
      goals: [3, 1],
      date: "2024-02-03T14:30Z"
    },
    {
      teams: ["M05", "SVW"],
      goals: [0, 1],
      date: "2024-02-03T14:30Z"
    },
    {
      teams: ["BOC", "FCA"],
      goals: [1, 1],
      date: "2024-02-03T14:30Z"
    },
    {
      teams: ["SCF", "VfB"],
      goals: [1, 3],
      date: "2024-02-03T14:30Z"
    },
    {
      teams: ["KÖL", "SGE"],
      goals: [2, 0],
      date: "2024-02-03T17:30Z"
    },
    {
      teams: ["WOB", "HOF"],
      goals: [2, 2],
      date: "2024-02-04T14:30Z"
    },
    {
      teams: ["RBL", "FCU"],
      goals: [2, 0],
      date: "2024-02-03T16:30Z"
    }
  ],
  21: [
    {
      teams: ["BVB", "SCF"],
      goals: [3, 0],
      date: "2024-02-09T19:30Z"
    },
    {
      teams: ["FCA", "RBL"],
      goals: [2, 2],
      date: "2024-02-10T14:30Z"
    },
    {
      teams: ["FCU", "WOB"],
      goals: [1, 0],
      date: "2024-02-10T14:30Z"
    },
    {
      teams: ["SGE", "BOC"],
      goals: [1, 1],
      date: "2024-02-10T14:30Z"
    },
    {
      teams: ["SVW", "FCH"],
      goals: [1, 2],
      date: "2024-02-10T14:30Z"
    },
    {
      teams: ["MGL", "D98"],
      goals: [0, 0],
      date: "2024-02-10T14:30Z"
    },
    {
      teams: ["B04", "FCB"],
      goals: [3, 0],
      date: "2024-02-10T17:30Z"
    },
    {
      teams: ["VfB", "M05"],
      goals: [3, 1],
      date: "2024-02-11T14:30Z"
    },
    {
      teams: ["HOF", "KÖL"],
      goals: [1, 1],
      date: "2024-02-10T16:30Z"
    }
  ],
  22: [
    {
      teams: ["KÖL", "SVW"],
      goals: [0, 1],
      date: "2024-02-16T19:30Z"
    },
    {
      teams: ["WOB", "BVB"],
      goals: [1, 1],
      date: "2024-02-17T14:30Z"
    },
    {
      teams: ["HOF", "FCU"],
      goals: [0, 1],
      date: "2024-02-17T14:30Z"
    },
    {
      teams: ["FCH", "B04"],
      goals: [1, 2],
      date: "2024-02-17T14:30Z"
    },
    {
      teams: ["M05", "FCA"],
      goals: [1, 0],
      date: "2024-02-17T14:30Z"
    },
    {
      teams: ["D98", "VfB"],
      goals: [1, 2],
      date: "2024-02-17T14:30Z"
    },
    {
      teams: ["RBL", "MGL"],
      goals: [2, 0],
      date: "2024-02-17T17:30Z"
    },
    {
      teams: ["SCF", "SGE"],
      goals: [3, 3],
      date: "2024-02-18T14:30Z"
    },
    {
      teams: ["BOC", "FCB"],
      goals: [3, 2],
      date: "2024-02-17T16:30Z"
    }
  ],
  23: [
    {
      teams: ["B04", "M05"],
      goals: [2, 1],
      date: "2024-02-23T19:30Z"
    },
    {
      teams: ["VfB", "KÖL"],
      goals: [1, 1],
      date: "2024-02-24T14:30Z"
    },
    {
      teams: ["FCU", "FCH"],
      goals: [2, 2],
      date: "2024-02-24T14:30Z"
    },
    {
      teams: ["SVW", "D98"],
      goals: [1, 1],
      date: "2024-02-24T14:30Z"
    },
    {
      teams: ["MGL", "BOC"],
      goals: [5, 2],
      date: "2024-02-24T14:30Z"
    },
    {
      teams: ["FCB", "RBL"],
      goals: [2, 1],
      date: "2024-02-24T17:30Z"
    },
    {
      teams: ["SGE", "WOB"],
      goals: [2, 2],
      date: "2024-02-25T14:30Z"
    },
    {
      teams: ["BVB", "HOF"],
      goals: [2, 3],
      date: "2024-02-25T16:30Z"
    },
    {
      teams: ["FCA", "SCF"],
      goals: [2, 1],
      date: "2024-02-25T18:30Z"
    }
  ],
  24: [
    {
      teams: ["SCF", "FCB"],
      goals: [2, 2],
      date: "2024-03-01T19:30Z"
    },
    {
      teams: ["FCU", "BVB"],
      goals: [0, 2],
      date: "2024-03-02T14:30Z"
    },
    {
      teams: ["BOC", "RBL"],
      goals: [1, 4],
      date: "2024-03-02T14:30Z"
    },
    {
      teams: ["FCH", "SGE"],
      goals: [1, 2],
      date: "2024-03-02T14:30Z"
    },
    {
      teams: ["M05", "MGL"],
      goals: [1, 1],
      date: "2024-03-02T14:30Z"
    },
    {
      teams: ["D98", "FCA"],
      goals: [0, 6],
      date: "2024-03-02T14:30Z"
    },
    {
      teams: ["WOB", "VfB"],
      goals: [2, 3],
      date: "2024-03-02T17:30Z"
    },
    {
      teams: ["KÖL", "B04"],
      goals: [0, 2],
      date: "2024-03-03T14:30Z"
    },
    {
      teams: ["HOF", "SVW"],
      goals: [2, 1],
      date: "2024-03-02T16:30Z"
    }
  ],
  25: [
    {
      teams: ["VfB", "FCU"],
      goals: [2, 0],
      date: "2024-03-08T19:30Z"
    },
    {
      teams: ["FCB", "M05"],
      goals: [8, 1],
      date: "2024-03-09T14:30Z"
    },
    {
      teams: ["MGL", "KÖL"],
      goals: [3, 3],
      date: "2024-03-09T14:30Z"
    },
    {
      teams: ["FCA", "FCH"],
      goals: [1, 0],
      date: "2024-03-09T14:30Z"
    },
    {
      teams: ["RBL", "D98"],
      goals: [2, 0],
      date: "2024-03-09T14:30Z"
    },
    {
      teams: ["SVW", "BVB"],
      goals: [1, 2],
      date: "2024-03-09T17:30Z"
    },
    {
      teams: ["BOC", "SCF"],
      goals: [1, 2],
      date: "2024-03-10T14:30Z"
    },
    {
      teams: ["SGE", "HOF"],
      goals: [3, 1],
      date: "2024-03-10T16:30Z"
    },
    {
      teams: ["B04", "WOB"],
      goals: [2, 0],
      date: "2024-03-09T18:30Z"
    }
  ],
  26: [
    {
      teams: ["KÖL", "RBL"],
      goals: [1, 5],
      date: "2024-03-15T19:30Z"
    },
    {
      teams: ["D98", "FCB"],
      goals: [2, 5],
      date: "2024-03-16T14:30Z"
    },
    {
      teams: ["FCH", "MGL"],
      goals: [1, 1],
      date: "2024-03-16T14:30Z"
    },
    {
      teams: ["FCU", "SVW"],
      goals: [2, 1],
      date: "2024-03-16T14:30Z"
    },
    {
      teams: ["M05", "BOC"],
      goals: [2, 0],
      date: "2024-03-16T14:30Z"
    },
    {
      teams: ["WOB", "FCA"],
      goals: [1, 3],
      date: "2024-03-16T14:30Z"
    },
    {
      teams: ["HOF", "VfB"],
      goals: [0, 3],
      date: "2024-03-16T17:30Z"
    },
    {
      teams: ["SCF", "B04"],
      goals: [2, 3],
      date: "2024-03-17T14:30Z"
    },
    {
      teams: ["BVB", "SGE"],
      goals: [3, 1],
      date: "2024-03-17T16:30Z"
    }
  ],
  27: [
    {
      teams: ["SGE", "FCU"],
      goals: [0, 0],
      date: "2024-03-30T14:30Z"
    },
    {
      teams: ["MGL", "SCF"],
      goals: [0, 3],
      date: "2024-03-30T14:30Z"
    },
    {
      teams: ["SVW", "WOB"],
      goals: [0, 2],
      date: "2024-03-30T14:30Z"
    },
    {
      teams: ["RBL", "M05"],
      goals: [0, 0],
      date: "2024-03-30T14:30Z"
    },
    {
      teams: ["B04", "HOF"],
      goals: [2, 1],
      date: "2024-03-30T14:30Z"
    },
    {
      teams: ["FCB", "BVB"],
      goals: [0, 2],
      date: "2024-03-30T17:30Z"
    },
    {
      teams: ["FCA", "KÖL"],
      goals: [1, 1],
      date: "2024-03-31T13:30Z"
    },
    {
      teams: ["VfB", "FCH"],
      goals: [3, 3],
      date: "2024-03-31T15:30Z"
    },
    {
      teams: ["BOC", "D98"],
      goals: [2, 2],
      date: "2024-03-31T17:30Z"
    }
  ],
  28: [
    {
      teams: ["SGE", "SVW"],
      goals: [1, 1],
      date: "2024-04-05T18:30Z"
    },
    {
      teams: ["FCH", "FCB"],
      goals: [3, 2],
      date: "2024-04-06T13:30Z"
    },
    {
      teams: ["SCF", "RBL"],
      goals: [1, 4],
      date: "2024-04-06T13:30Z"
    },
    {
      teams: ["FCU", "B04"],
      goals: [0, 1],
      date: "2024-04-06T13:30Z"
    },
    {
      teams: ["KÖL", "BOC"],
      goals: [2, 1],
      date: "2024-04-06T13:30Z"
    },
    {
      teams: ["M05", "D98"],
      goals: [4, 0],
      date: "2024-04-06T13:30Z"
    },
    {
      teams: ["BVB", "VfB"],
      goals: [0, 1],
      date: "2024-04-06T16:30Z"
    },
    {
      teams: ["HOF", "FCA"],
      goals: [3, 1],
      date: "2024-04-07T13:30Z"
    },
    {
      teams: ["WOB", "MGL"],
      goals: [1, 3],
      date: "2024-04-06T15:30Z"
    }
  ],
  29: [
    {
      teams: ["FCA", "FCU"],
      goals: [2, 0],
      date: "2024-04-12T18:30Z"
    },
    {
      teams: ["MGL", "BVB"],
      goals: [1, 2],
      date: "2024-04-13T13:30Z"
    },
    {
      teams: ["RBL", "WOB"],
      goals: [3, 0],
      date: "2024-04-13T13:30Z"
    },
    {
      teams: ["FCB", "KÖL"],
      goals: [2, 0],
      date: "2024-04-13T13:30Z"
    },
    {
      teams: ["M05", "HOF"],
      goals: [4, 1],
      date: "2024-04-13T13:30Z"
    },
    {
      teams: ["BOC", "FCH"],
      goals: [1, 1],
      date: "2024-04-13T13:30Z"
    },
    {
      teams: ["VfB", "SGE"],
      goals: [3, 0],
      date: "2024-04-13T16:30Z"
    },
    {
      teams: ["D98", "SCF"],
      goals: [0, 1],
      date: "2024-04-14T13:30Z"
    },
    {
      teams: ["B04", "SVW"],
      goals: [5, 0],
      date: "2024-04-14T15:30Z"
    }
  ],
  30: [
    {
      teams: ["SGE", "FCA"],
      goals: [3, 1],
      date: "2024-04-19T18:30Z"
    },
    {
      teams: ["FCH", "RBL"],
      goals: [1, 2],
      date: "2024-04-20T13:30Z"
    },
    {
      teams: ["HOF", "MGL"],
      goals: [4, 3],
      date: "2024-04-20T13:30Z"
    },
    {
      teams: ["WOB", "BOC"],
      goals: [1, 0],
      date: "2024-04-20T13:30Z"
    },
    {
      teams: ["KÖL", "D98"],
      goals: [0, 2],
      date: "2024-04-20T13:30Z"
    },
    {
      teams: ["FCU", "FCB"],
      goals: [1, 5],
      date: "2024-04-20T16:30Z"
    },
    {
      teams: ["SVW", "VfB"],
      goals: [2, 1],
      date: "2024-04-21T13:30Z"
    },
    {
      teams: ["BVB", "B04"],
      goals: [1, 1],
      date: "2024-04-21T15:30Z"
    },
    {
      teams: ["SCF", "M05"],
      goals: [1, 1],
      date: "2024-04-21T17:30Z"
    }
  ],
  31: [
    {
      teams: ["BOC", "HOF"],
      goals: [3, 2],
      date: "2024-04-26T18:30Z"
    },
    {
      teams: ["RBL", "BVB"],
      goals: [4, 1],
      date: "2024-04-27T13:30Z"
    },
    {
      teams: ["FCB", "SGE"],
      goals: [2, 1],
      date: "2024-04-27T13:30Z"
    },
    {
      teams: ["SCF", "WOB"],
      goals: [1, 2],
      date: "2024-04-27T13:30Z"
    },
    {
      teams: ["FCA", "SVW"],
      goals: [0, 3],
      date: "2024-04-27T13:30Z"
    },
    {
      teams: ["B04", "VfB"],
      goals: [2, 2],
      date: "2024-04-27T16:30Z"
    },
    {
      teams: ["MGL", "FCU"],
      goals: [0, 0],
      date: "2024-04-28T13:30Z"
    },
    {
      teams: ["M05", "KÖL"],
      goals: [1, 1],
      date: "2024-04-28T15:30Z"
    },
    {
      teams: ["D98", "FCH"],
      goals: [0, 1],
      date: "2024-04-28T17:30Z"
    }
  ],
  32: [
    {
      teams: ["HOF", "RBL"],
      goals: [1, 1],
      date: "2024-05-03T18:30Z"
    },
    {
      teams: ["VfB", "FCB"],
      goals: [3, 1],
      date: "2024-05-04T13:30Z"
    },
    {
      teams: ["SVW", "MGL"],
      goals: [2, 2],
      date: "2024-05-04T13:30Z"
    },
    {
      teams: ["BVB", "FCA"],
      goals: [5, 1],
      date: "2024-05-04T13:30Z"
    },
    {
      teams: ["WOB", "D98"],
      goals: [3, 0],
      date: "2024-05-04T13:30Z"
    },
    {
      teams: ["KÖL", "SCF"],
      goals: [0, 0],
      date: "2024-05-04T16:30Z"
    },
    {
      teams: ["FCU", "BOC"],
      goals: [3, 4],
      date: "2024-05-05T13:30Z"
    },
    {
      teams: ["SGE", "B04"],
      goals: [1, 5],
      date: "2024-05-05T15:30Z"
    },
    {
      teams: ["FCH", "M05"],
      goals: [1, 1],
      date: "2024-05-05T17:30Z"
    }
  ],
  33: [
    {
      teams: ["FCA", "VfB"],
      goals: [0, 1],
      date: "2024-05-10T18:30Z"
    },
    {
      teams: ["KÖL", "FCU"],
      goals: [3, 2],
      date: "2024-05-11T13:30Z"
    },
    {
      teams: ["MGL", "SGE"],
      goals: [1, 1],
      date: "2024-05-11T13:30Z"
    },
    {
      teams: ["RBL", "SVW"],
      goals: [1, 1],
      date: "2024-05-11T13:30Z"
    },
    {
      teams: ["SCF", "FCH"],
      goals: [1, 1],
      date: "2024-05-11T13:30Z"
    },
    {
      teams: ["M05", "BVB"],
      goals: [null, null],
      date: "2024-05-11T16:30Z"
    },
    {
      teams: ["D98", "HOF"],
      goals: [null, null],
      date: "2024-05-12T13:30Z"
    },
    {
      teams: ["FCB", "WOB"],
      goals: [null, null],
      date: "2024-05-12T15:30Z"
    },
    {
      teams: ["BOC", "B04"],
      goals: [null, null],
      date: "2024-05-12T17:30Z"
    }
  ],
  34: [
    {
      teams: ["HOF", "FCB"],
      goals: [null, null],
      date: "2024-05-18T13:30Z"
    },
    {
      teams: ["SGE", "RBL"],
      goals: [null, null],
      date: "2024-05-18T13:30Z"
    },
    {
      teams: ["FCU", "SCF"],
      goals: [null, null],
      date: "2024-05-18T13:30Z"
    },
    {
      teams: ["WOB", "M05"],
      goals: [null, null],
      date: "2024-05-18T13:30Z"
    },
    {
      teams: ["VfB", "MGL"],
      goals: [null, null],
      date: "2024-05-18T13:30Z"
    },
    {
      teams: ["FCH", "KÖL"],
      goals: [null, null],
      date: "2024-05-18T13:30Z"
    },
    {
      teams: ["SVW", "BOC"],
      goals: [null, null],
      date: "2024-05-18T13:30Z"
    },
    {
      teams: ["B04", "FCA"],
      goals: [null, null],
      date: "2024-05-18T13:30Z"
    },
    {
      teams: ["BVB", "D98"],
      goals: [null, null],
      date: "2024-05-18T13:30Z"
    }
  ]
};

const table = makeTable(matches);

const data = {
  matches: matches,
  table: table
};

module.exports = data;
