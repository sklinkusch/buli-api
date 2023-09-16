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
      goals: [null, null],
      date: "2023-09-16T16:30Z"
    },
    {
      teams: ["FCH", "SVW"],
      goals: [null, null],
      date: "2023-09-17T13:30Z"
    },
    {
      teams: ["D98", "MGL"],
      goals: [null, null],
      date: "2023-09-17T15:30Z"
    }
  ],
  5: [
    {
      teams: ["FCB", "BOC"],
      goals: [null, null],
      date: "23.09.23"
    },
    {
      teams: ["BVB", "WOB"],
      goals: [null, null],
      date: "23.09.23"
    },
    {
      teams: ["FCU", "HOF"],
      goals: [null, null],
      date: "23.09.23"
    },
    {
      teams: ["B04", "FCH"],
      goals: [null, null],
      date: "23.09.23"
    },
    {
      teams: ["SGE", "SCF"],
      goals: [null, null],
      date: "23.09.23"
    },
    {
      teams: ["MGL", "RBL"],
      goals: [null, null],
      date: "23.09.23"
    },
    {
      teams: ["SVW", "KÖL"],
      goals: [null, null],
      date: "23.09.23"
    },
    {
      teams: ["FCA", "M05"],
      goals: [null, null],
      date: "23.09.23"
    },
    {
      teams: ["VfB", "D98"],
      goals: [null, null],
      date: "23.09.23"
    }
  ],
  6: [
    {
      teams: ["RBL", "FCB"],
      goals: [null, null],
      date: "30.09.23"
    },
    {
      teams: ["SCF", "FCA"],
      goals: [null, null],
      date: "30.09.23"
    },
    {
      teams: ["WOB", "SGE"],
      goals: [null, null],
      date: "30.09.23"
    },
    {
      teams: ["M05", "B04"],
      goals: [null, null],
      date: "30.09.23"
    },
    {
      teams: ["KÖL", "VfB"],
      goals: [null, null],
      date: "30.09.23"
    },
    {
      teams: ["HOF", "BVB"],
      goals: [null, null],
      date: "30.09.23"
    },
    {
      teams: ["BOC", "MGL"],
      goals: [null, null],
      date: "30.09.23"
    },
    {
      teams: ["FCH", "FCU"],
      goals: [null, null],
      date: "30.09.23"
    },
    {
      teams: ["D98", "SVW"],
      goals: [null, null],
      date: "30.09.23"
    }
  ],
  7: [
    {
      teams: ["FCB", "SCF"],
      goals: [null, null],
      date: "07.10.23"
    },
    {
      teams: ["BVB", "FCU"],
      goals: [null, null],
      date: "07.10.23"
    },
    {
      teams: ["RBL", "BOC"],
      goals: [null, null],
      date: "07.10.23"
    },
    {
      teams: ["B04", "KÖL"],
      goals: [null, null],
      date: "07.10.23"
    },
    {
      teams: ["SGE", "FCH"],
      goals: [null, null],
      date: "07.10.23"
    },
    {
      teams: ["MGL", "M05"],
      goals: [null, null],
      date: "07.10.23"
    },
    {
      teams: ["SVW", "HOF"],
      goals: [null, null],
      date: "07.10.23"
    },
    {
      teams: ["FCA", "D98"],
      goals: [null, null],
      date: "07.10.23"
    },
    {
      teams: ["VfB", "WOB"],
      goals: [null, null],
      date: "07.10.23"
    }
  ],
  8: [
    {
      teams: ["BVB", "SVW"],
      goals: [null, null],
      date: "21.10.23"
    },
    {
      teams: ["FCU", "VfB"],
      goals: [null, null],
      date: "21.10.23"
    },
    {
      teams: ["SCF", "BOC"],
      goals: [null, null],
      date: "21.10.23"
    },
    {
      teams: ["WOB", "B04"],
      goals: [null, null],
      date: "21.10.23"
    },
    {
      teams: ["M05", "FCB"],
      goals: [null, null],
      date: "21.10.23"
    },
    {
      teams: ["KÖL", "MGL"],
      goals: [null, null],
      date: "21.10.23"
    },
    {
      teams: ["HOF", "SGE"],
      goals: [null, null],
      date: "21.10.23"
    },
    {
      teams: ["FCH", "FCA"],
      goals: [null, null],
      date: "21.10.23"
    },
    {
      teams: ["D98", "RBL"],
      goals: [null, null],
      date: "21.10.23"
    }
  ],
  9: [
    {
      teams: ["FCB", "D98"],
      goals: [null, null],
      date: "28.10.23"
    },
    {
      teams: ["RBL", "KÖL"],
      goals: [null, null],
      date: "28.10.23"
    },
    {
      teams: ["B04", "SCF"],
      goals: [null, null],
      date: "28.10.23"
    },
    {
      teams: ["SGE", "BVB"],
      goals: [null, null],
      date: "28.10.23"
    },
    {
      teams: ["MGL", "FCH"],
      goals: [null, null],
      date: "28.10.23"
    },
    {
      teams: ["SVW", "FCU"],
      goals: [null, null],
      date: "28.10.23"
    },
    {
      teams: ["BOC", "M05"],
      goals: [null, null],
      date: "28.10.23"
    },
    {
      teams: ["FCA", "WOB"],
      goals: [null, null],
      date: "28.10.23"
    },
    {
      teams: ["VfB", "HOF"],
      goals: [null, null],
      date: "28.10.23"
    }
  ],
  10: [
    {
      teams: ["BVB", "FCB"],
      goals: [null, null],
      date: "04.11.23"
    },
    {
      teams: ["FCU", "SGE"],
      goals: [null, null],
      date: "04.11.23"
    },
    {
      teams: ["SCF", "MGL"],
      goals: [null, null],
      date: "04.11.23"
    },
    {
      teams: ["WOB", "SVW"],
      goals: [null, null],
      date: "04.11.23"
    },
    {
      teams: ["M05", "RBL"],
      goals: [null, null],
      date: "04.11.23"
    },
    {
      teams: ["KÖL", "FCA"],
      goals: [null, null],
      date: "04.11.23"
    },
    {
      teams: ["HOF", "B04"],
      goals: [null, null],
      date: "04.11.23"
    },
    {
      teams: ["FCH", "VfB"],
      goals: [null, null],
      date: "04.11.23"
    },
    {
      teams: ["D98", "BOC"],
      goals: [null, null],
      date: "04.11.23"
    }
  ],
  11: [
    {
      teams: ["FCB", "FCH"],
      goals: [null, null],
      date: "11.11.23"
    },
    {
      teams: ["RBL", "SCF"],
      goals: [null, null],
      date: "11.11.23"
    },
    {
      teams: ["B04", "FCU"],
      goals: [null, null],
      date: "11.11.23"
    },
    {
      teams: ["MGL", "WOB"],
      goals: [null, null],
      date: "11.11.23"
    },
    {
      teams: ["SVW", "SGE"],
      goals: [null, null],
      date: "11.11.23"
    },
    {
      teams: ["BOC", "KÖL"],
      goals: [null, null],
      date: "11.11.23"
    },
    {
      teams: ["FCA", "HOF"],
      goals: [null, null],
      date: "11.11.23"
    },
    {
      teams: ["VfB", "BVB"],
      goals: [null, null],
      date: "11.11.23"
    },
    {
      teams: ["D98", "M05"],
      goals: [null, null],
      date: "11.11.23"
    }
  ],
  12: [
    {
      teams: ["BVB", "MGL"],
      goals: [null, null],
      date: "25.11.23"
    },
    {
      teams: ["FCU", "FCA"],
      goals: [null, null],
      date: "25.11.23"
    },
    {
      teams: ["SCF", "D98"],
      goals: [null, null],
      date: "25.11.23"
    },
    {
      teams: ["SGE", "VfB"],
      goals: [null, null],
      date: "25.11.23"
    },
    {
      teams: ["WOB", "RBL"],
      goals: [null, null],
      date: "25.11.23"
    },
    {
      teams: ["KÖL", "FCB"],
      goals: [null, null],
      date: "25.11.23"
    },
    {
      teams: ["HOF", "M05"],
      goals: [null, null],
      date: "25.11.23"
    },
    {
      teams: ["SVW", "B04"],
      goals: [null, null],
      date: "25.11.23"
    },
    {
      teams: ["FCH", "BOC"],
      goals: [null, null],
      date: "25.11.23"
    }
  ],
  13: [
    {
      teams: ["FCB", "FCU"],
      goals: [null, null],
      date: "02.12.23"
    },
    {
      teams: ["RBL", "FCH"],
      goals: [null, null],
      date: "02.12.23"
    },
    {
      teams: ["B04", "BVB"],
      goals: [null, null],
      date: "02.12.23"
    },
    {
      teams: ["M05", "SCF"],
      goals: [null, null],
      date: "02.12.23"
    },
    {
      teams: ["MGL", "HOF"],
      goals: [null, null],
      date: "02.12.23"
    },
    {
      teams: ["BOC", "WOB"],
      goals: [null, null],
      date: "02.12.23"
    },
    {
      teams: ["FCA", "SGE"],
      goals: [null, null],
      date: "02.12.23"
    },
    {
      teams: ["VfB", "SVW"],
      goals: [null, null],
      date: "02.12.23"
    },
    {
      teams: ["D98", "KÖL"],
      goals: [null, null],
      date: "02.12.23"
    }
  ],
  14: [
    {
      teams: ["BVB", "RBL"],
      goals: [null, null],
      date: "09.12.23"
    },
    {
      teams: ["FCU", "MGL"],
      goals: [null, null],
      date: "09.12.23"
    },
    {
      teams: ["SGE", "FCB"],
      goals: [null, null],
      date: "09.12.23"
    },
    {
      teams: ["WOB", "SCF"],
      goals: [null, null],
      date: "09.12.23"
    },
    {
      teams: ["KÖL", "M05"],
      goals: [null, null],
      date: "09.12.23"
    },
    {
      teams: ["HOF", "BOC"],
      goals: [null, null],
      date: "09.12.23"
    },
    {
      teams: ["SVW", "FCA"],
      goals: [null, null],
      date: "09.12.23"
    },
    {
      teams: ["VfB", "B04"],
      goals: [null, null],
      date: "09.12.23"
    },
    {
      teams: ["FCH", "D98"],
      goals: [null, null],
      date: "09.12.23"
    }
  ],
  15: [
    {
      teams: ["FCB", "VfB"],
      goals: [null, null],
      date: "16.12.23"
    },
    {
      teams: ["RBL", "HOF"],
      goals: [null, null],
      date: "16.12.23"
    },
    {
      teams: ["SCF", "KÖL"],
      goals: [null, null],
      date: "16.12.23"
    },
    {
      teams: ["B04", "SGE"],
      goals: [null, null],
      date: "16.12.23"
    },
    {
      teams: ["M05", "FCH"],
      goals: [null, null],
      date: "16.12.23"
    },
    {
      teams: ["MGL", "SVW"],
      goals: [null, null],
      date: "16.12.23"
    },
    {
      teams: ["BOC", "FCU"],
      goals: [null, null],
      date: "16.12.23"
    },
    {
      teams: ["FCA", "BVB"],
      goals: [null, null],
      date: "16.12.23"
    },
    {
      teams: ["D98", "WOB"],
      goals: [null, null],
      date: "16.12.23"
    }
  ],
  16: [
    {
      teams: ["BVB", "M05"],
      goals: [null, null],
      date: "20.12.23"
    },
    {
      teams: ["FCU", "KÖL"],
      goals: [null, null],
      date: "20.12.23"
    },
    {
      teams: ["B04", "BOC"],
      goals: [null, null],
      date: "20.12.23"
    },
    {
      teams: ["SGE", "MGL"],
      goals: [null, null],
      date: "20.12.23"
    },
    {
      teams: ["WOB", "FCB"],
      goals: [null, null],
      date: "20.12.23"
    },
    {
      teams: ["HOF", "D98"],
      goals: [null, null],
      date: "20.12.23"
    },
    {
      teams: ["SVW", "RBL"],
      goals: [null, null],
      date: "20.12.23"
    },
    {
      teams: ["VfB", "FCA"],
      goals: [null, null],
      date: "20.12.23"
    },
    {
      teams: ["FCH", "SCF"],
      goals: [null, null],
      date: "20.12.23"
    }
  ],
  17: [
    {
      teams: ["FCB", "HOF"],
      goals: [null, null],
      date: "13.01.24"
    },
    {
      teams: ["RBL", "SGE"],
      goals: [null, null],
      date: "13.01.24"
    },
    {
      teams: ["SCF", "FCU"],
      goals: [null, null],
      date: "13.01.24"
    },
    {
      teams: ["M05", "WOB"],
      goals: [null, null],
      date: "13.01.24"
    },
    {
      teams: ["MGL", "VfB"],
      goals: [null, null],
      date: "13.01.24"
    },
    {
      teams: ["KÖL", "FCH"],
      goals: [null, null],
      date: "13.01.24"
    },
    {
      teams: ["BOC", "SVW"],
      goals: [null, null],
      date: "13.01.24"
    },
    {
      teams: ["FCA", "B04"],
      goals: [null, null],
      date: "13.01.24"
    },
    {
      teams: ["D98", "BVB"],
      goals: [null, null],
      date: "13.01.24"
    }
  ],
  18: [
    {
      teams: ["FCB", "SVW"],
      goals: [null, null],
      date: "20.01.24"
    },
    {
      teams: ["RBL", "B04"],
      goals: [null, null],
      date: "20.01.24"
    },
    {
      teams: ["SCF", "HOF"],
      goals: [null, null],
      date: "20.01.24"
    },
    {
      teams: ["M05", "FCU"],
      goals: [null, null],
      date: "20.01.24"
    },
    {
      teams: ["MGL", "FCA"],
      goals: [null, null],
      date: "20.01.24"
    },
    {
      teams: ["KÖL", "BVB"],
      goals: [null, null],
      date: "20.01.24"
    },
    {
      teams: ["BOC", "VfB"],
      goals: [null, null],
      date: "20.01.24"
    },
    {
      teams: ["FCH", "WOB"],
      goals: [null, null],
      date: "20.01.24"
    },
    {
      teams: ["D98", "SGE"],
      goals: [null, null],
      date: "20.01.24"
    }
  ],
  19: [
    {
      teams: ["BVB", "BOC"],
      goals: [null, null],
      date: "27.01.24"
    },
    {
      teams: ["FCU", "D98"],
      goals: [null, null],
      date: "27.01.24"
    },
    {
      teams: ["B04", "MGL"],
      goals: [null, null],
      date: "27.01.24"
    },
    {
      teams: ["SGE", "M05"],
      goals: [null, null],
      date: "27.01.24"
    },
    {
      teams: ["WOB", "KÖL"],
      goals: [null, null],
      date: "27.01.24"
    },
    {
      teams: ["HOF", "FCH"],
      goals: [null, null],
      date: "27.01.24"
    },
    {
      teams: ["SVW", "SCF"],
      goals: [null, null],
      date: "27.01.24"
    },
    {
      teams: ["FCA", "FCB"],
      goals: [null, null],
      date: "27.01.24"
    },
    {
      teams: ["VfB", "RBL"],
      goals: [null, null],
      date: "27.01.24"
    }
  ],
  20: [
    {
      teams: ["FCB", "MGL"],
      goals: [null, null],
      date: "03.02.24"
    },
    {
      teams: ["RBL", "FCU"],
      goals: [null, null],
      date: "03.02.24"
    },
    {
      teams: ["SCF", "VfB"],
      goals: [null, null],
      date: "03.02.24"
    },
    {
      teams: ["WOB", "HOF"],
      goals: [null, null],
      date: "03.02.24"
    },
    {
      teams: ["M05", "SVW"],
      goals: [null, null],
      date: "03.02.24"
    },
    {
      teams: ["KÖL", "SGE"],
      goals: [null, null],
      date: "03.02.24"
    },
    {
      teams: ["BOC", "FCA"],
      goals: [null, null],
      date: "03.02.24"
    },
    {
      teams: ["FCH", "BVB"],
      goals: [null, null],
      date: "03.02.24"
    },
    {
      teams: ["D98", "B04"],
      goals: [null, null],
      date: "03.02.24"
    }
  ],
  21: [
    {
      teams: ["BVB", "SCF"],
      goals: [null, null],
      date: "10.02.24"
    },
    {
      teams: ["FCU", "WOB"],
      goals: [null, null],
      date: "10.02.24"
    },
    {
      teams: ["B04", "FCB"],
      goals: [null, null],
      date: "10.02.24"
    },
    {
      teams: ["SGE", "BOC"],
      goals: [null, null],
      date: "10.02.24"
    },
    {
      teams: ["MGL", "D98"],
      goals: [null, null],
      date: "10.02.24"
    },
    {
      teams: ["HOF", "KÖL"],
      goals: [null, null],
      date: "10.02.24"
    },
    {
      teams: ["SVW", "FCH"],
      goals: [null, null],
      date: "10.02.24"
    },
    {
      teams: ["FCA", "RBL"],
      goals: [null, null],
      date: "10.02.24"
    },
    {
      teams: ["VfB", "M05"],
      goals: [null, null],
      date: "10.02.24"
    }
  ],
  22: [
    {
      teams: ["RBL", "MGL"],
      goals: [null, null],
      date: "17.02.24"
    },
    {
      teams: ["SCF", "SGE"],
      goals: [null, null],
      date: "17.02.24"
    },
    {
      teams: ["WOB", "BVB"],
      goals: [null, null],
      date: "17.02.24"
    },
    {
      teams: ["M05", "FCA"],
      goals: [null, null],
      date: "17.02.24"
    },
    {
      teams: ["KÖL", "SVW"],
      goals: [null, null],
      date: "17.02.24"
    },
    {
      teams: ["HOF", "FCU"],
      goals: [null, null],
      date: "17.02.24"
    },
    {
      teams: ["BOC", "FCB"],
      goals: [null, null],
      date: "17.02.24"
    },
    {
      teams: ["FCH", "B04"],
      goals: [null, null],
      date: "17.02.24"
    },
    {
      teams: ["D98", "VfB"],
      goals: [null, null],
      date: "17.02.24"
    }
  ],
  23: [
    {
      teams: ["FCB", "RBL"],
      goals: [null, null],
      date: "24.02.24"
    },
    {
      teams: ["BVB", "HOF"],
      goals: [null, null],
      date: "24.02.24"
    },
    {
      teams: ["FCU", "FCH"],
      goals: [null, null],
      date: "24.02.24"
    },
    {
      teams: ["B04", "M05"],
      goals: [null, null],
      date: "24.02.24"
    },
    {
      teams: ["SGE", "WOB"],
      goals: [null, null],
      date: "24.02.24"
    },
    {
      teams: ["MGL", "BOC"],
      goals: [null, null],
      date: "24.02.24"
    },
    {
      teams: ["SVW", "D98"],
      goals: [null, null],
      date: "24.02.24"
    },
    {
      teams: ["FCA", "SCF"],
      goals: [null, null],
      date: "24.02.24"
    },
    {
      teams: ["VfB", "KÖL"],
      goals: [null, null],
      date: "24.02.24"
    }
  ],
  24: [
    {
      teams: ["FCU", "BVB"],
      goals: [null, null],
      date: "02.03.24"
    },
    {
      teams: ["SCF", "FCB"],
      goals: [null, null],
      date: "02.03.24"
    },
    {
      teams: ["WOB", "VfB"],
      goals: [null, null],
      date: "02.03.24"
    },
    {
      teams: ["M05", "MGL"],
      goals: [null, null],
      date: "02.03.24"
    },
    {
      teams: ["KÖL", "B04"],
      goals: [null, null],
      date: "02.03.24"
    },
    {
      teams: ["HOF", "SVW"],
      goals: [null, null],
      date: "02.03.24"
    },
    {
      teams: ["BOC", "RBL"],
      goals: [null, null],
      date: "02.03.24"
    },
    {
      teams: ["FCH", "SGE"],
      goals: [null, null],
      date: "02.03.24"
    },
    {
      teams: ["D98", "FCA"],
      goals: [null, null],
      date: "02.03.24"
    }
  ],
  25: [
    {
      teams: ["FCB", "M05"],
      goals: [null, null],
      date: "09.03.24"
    },
    {
      teams: ["RBL", "D98"],
      goals: [null, null],
      date: "09.03.24"
    },
    {
      teams: ["B04", "WOB"],
      goals: [null, null],
      date: "09.03.24"
    },
    {
      teams: ["SGE", "HOF"],
      goals: [null, null],
      date: "09.03.24"
    },
    {
      teams: ["MGL", "KÖL"],
      goals: [null, null],
      date: "09.03.24"
    },
    {
      teams: ["SVW", "BVB"],
      goals: [null, null],
      date: "09.03.24"
    },
    {
      teams: ["BOC", "SCF"],
      goals: [null, null],
      date: "09.03.24"
    },
    {
      teams: ["FCA", "FCH"],
      goals: [null, null],
      date: "09.03.24"
    },
    {
      teams: ["VfB", "FCU"],
      goals: [null, null],
      date: "09.03.24"
    }
  ],
  26: [
    {
      teams: ["BVB", "SGE"],
      goals: [null, null],
      date: "16.03.24"
    },
    {
      teams: ["FCU", "SVW"],
      goals: [null, null],
      date: "16.03.24"
    },
    {
      teams: ["SCF", "B04"],
      goals: [null, null],
      date: "16.03.24"
    },
    {
      teams: ["WOB", "FCA"],
      goals: [null, null],
      date: "16.03.24"
    },
    {
      teams: ["M05", "BOC"],
      goals: [null, null],
      date: "16.03.24"
    },
    {
      teams: ["KÖL", "RBL"],
      goals: [null, null],
      date: "16.03.24"
    },
    {
      teams: ["HOF", "VfB"],
      goals: [null, null],
      date: "16.03.24"
    },
    {
      teams: ["FCH", "MGL"],
      goals: [null, null],
      date: "16.03.24"
    },
    {
      teams: ["D98", "FCB"],
      goals: [null, null],
      date: "16.03.24"
    }
  ],
  27: [
    {
      teams: ["FCB", "BVB"],
      goals: [null, null],
      date: "31.03.24"
    },
    {
      teams: ["RBL", "M05"],
      goals: [null, null],
      date: "31.03.24"
    },
    {
      teams: ["B04", "HOF"],
      goals: [null, null],
      date: "31.03.24"
    },
    {
      teams: ["SGE", "FCU"],
      goals: [null, null],
      date: "31.03.24"
    },
    {
      teams: ["MGL", "SCF"],
      goals: [null, null],
      date: "31.03.24"
    },
    {
      teams: ["SVW", "WOB"],
      goals: [null, null],
      date: "31.03.24"
    },
    {
      teams: ["BOC", "D98"],
      goals: [null, null],
      date: "31.03.24"
    },
    {
      teams: ["FCA", "KÖL"],
      goals: [null, null],
      date: "31.03.24"
    },
    {
      teams: ["VfB", "FCH"],
      goals: [null, null],
      date: "31.03.24"
    }
  ],
  28: [
    {
      teams: ["BVB", "VfB"],
      goals: [null, null],
      date: "06.04.24"
    },
    {
      teams: ["FCU", "B04"],
      goals: [null, null],
      date: "06.04.24"
    },
    {
      teams: ["SCF", "RBL"],
      goals: [null, null],
      date: "06.04.24"
    },
    {
      teams: ["SGE", "SVW"],
      goals: [null, null],
      date: "06.04.24"
    },
    {
      teams: ["WOB", "MGL"],
      goals: [null, null],
      date: "06.04.24"
    },
    {
      teams: ["M05", "D98"],
      goals: [null, null],
      date: "06.04.24"
    },
    {
      teams: ["KÖL", "BOC"],
      goals: [null, null],
      date: "06.04.24"
    },
    {
      teams: ["HOF", "FCA"],
      goals: [null, null],
      date: "06.04.24"
    },
    {
      teams: ["FCH", "FCB"],
      goals: [null, null],
      date: "06.04.24"
    }
  ],
  29: [
    {
      teams: ["FCB", "KÖL"],
      goals: [null, null],
      date: "13.04.24"
    },
    {
      teams: ["RBL", "WOB"],
      goals: [null, null],
      date: "13.04.24"
    },
    {
      teams: ["B04", "SVW"],
      goals: [null, null],
      date: "13.04.24"
    },
    {
      teams: ["M05", "HOF"],
      goals: [null, null],
      date: "13.04.24"
    },
    {
      teams: ["MGL", "BVB"],
      goals: [null, null],
      date: "13.04.24"
    },
    {
      teams: ["BOC", "FCH"],
      goals: [null, null],
      date: "13.04.24"
    },
    {
      teams: ["FCA", "FCU"],
      goals: [null, null],
      date: "13.04.24"
    },
    {
      teams: ["VfB", "SGE"],
      goals: [null, null],
      date: "13.04.24"
    },
    {
      teams: ["D98", "SCF"],
      goals: [null, null],
      date: "13.04.24"
    }
  ],
  30: [
    {
      teams: ["BVB", "B04"],
      goals: [null, null],
      date: "20.04.24"
    },
    {
      teams: ["FCU", "FCB"],
      goals: [null, null],
      date: "20.04.24"
    },
    {
      teams: ["SCF", "M05"],
      goals: [null, null],
      date: "20.04.24"
    },
    {
      teams: ["SGE", "FCA"],
      goals: [null, null],
      date: "20.04.24"
    },
    {
      teams: ["WOB", "BOC"],
      goals: [null, null],
      date: "20.04.24"
    },
    {
      teams: ["KÖL", "D98"],
      goals: [null, null],
      date: "20.04.24"
    },
    {
      teams: ["HOF", "MGL"],
      goals: [null, null],
      date: "20.04.24"
    },
    {
      teams: ["SVW", "VfB"],
      goals: [null, null],
      date: "20.04.24"
    },
    {
      teams: ["FCH", "RBL"],
      goals: [null, null],
      date: "20.04.24"
    }
  ],
  31: [
    {
      teams: ["FCB", "SGE"],
      goals: [null, null],
      date: "27.04.24"
    },
    {
      teams: ["RBL", "BVB"],
      goals: [null, null],
      date: "27.04.24"
    },
    {
      teams: ["SCF", "WOB"],
      goals: [null, null],
      date: "27.04.24"
    },
    {
      teams: ["B04", "VfB"],
      goals: [null, null],
      date: "27.04.24"
    },
    {
      teams: ["M05", "KÖL"],
      goals: [null, null],
      date: "27.04.24"
    },
    {
      teams: ["MGL", "FCU"],
      goals: [null, null],
      date: "27.04.24"
    },
    {
      teams: ["BOC", "HOF"],
      goals: [null, null],
      date: "27.04.24"
    },
    {
      teams: ["FCA", "SVW"],
      goals: [null, null],
      date: "27.04.24"
    },
    {
      teams: ["D98", "FCH"],
      goals: [null, null],
      date: "27.04.24"
    }
  ],
  32: [
    {
      teams: ["BVB", "FCA"],
      goals: [null, null],
      date: "04.05.24"
    },
    {
      teams: ["FCU", "BOC"],
      goals: [null, null],
      date: "04.05.24"
    },
    {
      teams: ["SGE", "B04"],
      goals: [null, null],
      date: "04.05.24"
    },
    {
      teams: ["WOB", "D98"],
      goals: [null, null],
      date: "04.05.24"
    },
    {
      teams: ["KÖL", "SCF"],
      goals: [null, null],
      date: "04.05.24"
    },
    {
      teams: ["HOF", "RBL"],
      goals: [null, null],
      date: "04.05.24"
    },
    {
      teams: ["SVW", "MGL"],
      goals: [null, null],
      date: "04.05.24"
    },
    {
      teams: ["VfB", "FCB"],
      goals: [null, null],
      date: "04.05.24"
    },
    {
      teams: ["FCH", "M05"],
      goals: [null, null],
      date: "04.05.24"
    }
  ],
  33: [
    {
      teams: ["FCB", "WOB"],
      goals: [null, null],
      date: "11.05.23"
    },
    {
      teams: ["RBL", "SVW"],
      goals: [null, null],
      date: "11.05.23"
    },
    {
      teams: ["SCF", "FCH"],
      goals: [null, null],
      date: "11.05.23"
    },
    {
      teams: ["M05", "BVB"],
      goals: [null, null],
      date: "11.05.23"
    },
    {
      teams: ["MGL", "SGE"],
      goals: [null, null],
      date: "11.05.23"
    },
    {
      teams: ["KÖL", "FCU"],
      goals: [null, null],
      date: "11.05.23"
    },
    {
      teams: ["BOC", "B04"],
      goals: [null, null],
      date: "11.05.23"
    },
    {
      teams: ["FCA", "VfB"],
      goals: [null, null],
      date: "11.05.23"
    },
    {
      teams: ["D98", "HOF"],
      goals: [null, null],
      date: "11.05.23"
    }
  ],
  34: [
    {
      teams: ["BVB", "D98"],
      goals: [null, null],
      date: "2023-05-18T13:30Z"
    },
    {
      teams: ["FCU", "SCF"],
      goals: [null, null],
      date: "2023-05-18T13:30Z"
    },
    {
      teams: ["B04", "FCA"],
      goals: [null, null],
      date: "2023-05-18T13:30Z"
    },
    {
      teams: ["SGE", "RBL"],
      goals: [null, null],
      date: "2023-05-18T13:30Z"
    },
    {
      teams: ["WOB", "M05"],
      goals: [null, null],
      date: "2023-05-18T13:30Z"
    },
    {
      teams: ["HOF", "FCB"],
      goals: [null, null],
      date: "2023-05-18T13:30Z"
    },
    {
      teams: ["SVW", "BOC"],
      goals: [null, null],
      date: "2023-05-18T13:30Z"
    },
    {
      teams: ["VfB", "MGL"],
      goals: [null, null],
      date: "2023-05-18T13:30Z"
    },
    {
      teams: ["FCH", "KÖL"],
      goals: [null, null],
      date: "2023-05-18T13:30Z"
    }
  ]
};

const table = makeTable(matches);

const data = {
  matches: matches,
  table: table
};

module.exports = data;
