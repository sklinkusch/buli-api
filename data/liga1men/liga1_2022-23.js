const { makeTable } = require("../helpers");

const matches = {
  1: [
    {
      teams: ["SGE", "FCB"],
      goals: [1, 6],
      date: "05.08.22"
    },
    {
      teams: ["BOC", "M05"],
      goals: [1, 2],
      date: "06.08.22"
    },
    {
      teams: ["FCU", "BSC"],
      goals: [3, 1],
      date: "06.08.22"
    },
    {
      teams: ["FCA", "SCF"],
      goals: [0, 4],
      date: "06.08.22"
    },
    {
      teams: ["MGL", "HOF"],
      goals: [3, 1],
      date: "06.08.22"
    },
    {
      teams: ["WOB", "SVW"],
      goals: [2, 2],
      date: "06.08.22"
    },
    {
      teams: ["BVB", "B04"],
      goals: [1, 0],
      date: "06.08.22"
    },
    {
      teams: ["VfB", "RBL"],
      goals: [1, 1],
      date: "07.08.22"
    },
    {
      teams: ["KÖL", "S04"],
      goals: [3, 1],
      date: "07.08.22"
    }
  ],
  2: [
    {
      teams: ["SCF", "BVB"],
      goals: [1, 3],
      date: "12.08.22"
    },
    {
      teams: ["B04", "FCA"],
      goals: [1, 2],
      date: "13.08.22"
    },
    {
      teams: ["RBL", "KÖL"],
      goals: [2, 2],
      date: "13.08.22"
    },
    {
      teams: ["SVW", "VfB"],
      goals: [2, 2],
      date: "13.08.22"
    },
    {
      teams: ["BSC", "SGE"],
      goals: [1, 1],
      date: "13.08.22"
    },
    {
      teams: ["HOF", "BOC"],
      goals: [3, 2],
      date: "13.08.22"
    },
    {
      teams: ["S04", "MGL"],
      goals: [2, 2],
      date: "13.08.22"
    },
    {
      teams: ["M05", "FCU"],
      goals: [0, 0],
      date: "14.08.22"
    },
    {
      teams: ["FCB", "WOB"],
      goals: [2, 0],
      date: "14.08.22"
    }
  ],
  3: [
    {
      teams: ["MGL", "BSC"],
      goals: [1, 0],
      date: "19.08.22"
    },
    {
      teams: ["BVB", "SVW"],
      goals: [2, 3],
      date: "20.08.22"
    },
    {
      teams: ["B04", "HOF"],
      goals: [0, 3],
      date: "20.08.22"
    },
    {
      teams: ["WOB", "S04"],
      goals: [0, 0],
      date: "20.08.22"
    },
    {
      teams: ["FCA", "M05"],
      goals: [1, 2],
      date: "20.08.22"
    },
    {
      teams: ["VfB", "SCF"],
      goals: [0, 1],
      date: "20.08.22"
    },
    {
      teams: ["FCU", "RBL"],
      goals: [2, 1],
      date: "20.08.22"
    },
    {
      teams: ["SGE", "KÖL"],
      goals: [1, 1],
      date: "21.08.22"
    },
    {
      teams: ["BOC", "FCB"],
      goals: [0, 7],
      date: "21.08.22"
    }
  ],
  4: [
    {
      teams: ["SCF", "BOC"],
      goals: [1, 0],
      date: "26.08.22"
    },
    {
      teams: ["RBL", "WOB"],
      goals: [2, 0],
      date: "27.08.22"
    },
    {
      teams: ["S04", "FCU"],
      goals: [1, 6],
      date: "27.08.22"
    },
    {
      teams: ["BSC", "BVB"],
      goals: [0, 1],
      date: "27.08.22"
    },
    {
      teams: ["M05", "B04"],
      goals: [0, 3],
      date: "27.08.22"
    },
    {
      teams: ["HOF", "FCA"],
      goals: [1, 0],
      date: "27.08.22"
    },
    {
      teams: ["FCB", "MGL"],
      goals: [1, 1],
      date: "27.08.22"
    },
    {
      teams: ["KÖL", "VfB"],
      goals: [0, 0],
      date: "28.08.22"
    },
    {
      teams: ["SVW", "SGE"],
      goals: [3, 4],
      date: "28.08.22"
    }
  ],
  5: [
    {
      teams: ["BVB", "HOF"],
      goals: [1, 0],
      date: "02.09.22"
    },
    {
      teams: ["B04", "SCF"],
      goals: [2, 3],
      date: "03.09.22"
    },
    {
      teams: ["FCU", "FCB"],
      goals: [1, 1],
      date: "03.09.22"
    },
    {
      teams: ["WOB", "KÖL"],
      goals: [2, 4],
      date: "03.09.22"
    },
    {
      teams: ["BOC", "SVW"],
      goals: [0, 2],
      date: "03.09.22"
    },
    {
      teams: ["VfB", "S04"],
      goals: [1, 1],
      date: "03.09.22"
    },
    {
      teams: ["SGE", "RBL"],
      goals: [4, 0],
      date: "03.09.22"
    },
    {
      teams: ["FCA", "BSC"],
      goals: [0, 2],
      date: "04.09.22"
    },
    {
      teams: ["MGL", "M05"],
      goals: [0, 1],
      date: "04.09.22"
    }
  ],
  6: [
    {
      teams: ["SVW", "FCA"],
      goals: [0, 1],
      date: "09.09.22"
    },
    {
      teams: ["FCB", "VfB"],
      goals: [2, 2],
      date: "10.09.22"
    },
    {
      teams: ["RBL", "BVB"],
      goals: [3, 0],
      date: "10.09.22"
    },
    {
      teams: ["HOF", "M05"],
      goals: [4, 1],
      date: "10.09.22"
    },
    {
      teams: ["SGE", "WOB"],
      goals: [0, 1],
      date: "10.09.22"
    },
    {
      teams: ["BSC", "B04"],
      goals: [2, 2],
      date: "10.09.22"
    },
    {
      teams: ["S04", "BOC"],
      goals: [3, 1],
      date: "10.09.22"
    },
    {
      teams: ["KÖL", "FCU"],
      goals: [0, 1],
      date: "11.09.22"
    },
    {
      teams: ["SCF", "MGL"],
      goals: [0, 0],
      date: "11.09.22"
    }
  ],
  7: [
    {
      teams: ["M05", "BSC"],
      goals: [1, 1],
      date: "16.09.22"
    },
    {
      teams: ["BVB", "S04"],
      goals: [1, 0],
      date: "17.09.22"
    },
    {
      teams: ["B04", "SVW"],
      goals: [1, 1],
      date: "17.09.22"
    },
    {
      teams: ["FCA", "FCB"],
      goals: [1, 0],
      date: "17.09.22"
    },
    {
      teams: ["VfB", "SGE"],
      goals: [1, 3],
      date: "17.09.22"
    },
    {
      teams: ["MGL", "RBL"],
      goals: [3, 0],
      date: "17.09.22"
    },
    {
      teams: ["FCU", "WOB"],
      goals: [2, 0],
      date: "18.09.22"
    },
    {
      teams: ["BOC", "KÖL"],
      goals: [1, 1],
      date: "18.09.22"
    },
    {
      teams: ["HOF", "SCF"],
      goals: [0, 0],
      date: "18.09.22"
    }
  ],
  8: [
    {
      teams: ["FCB", "B04"],
      goals: [4, 0],
      date: "30.09.22"
    },
    {
      teams: ["RBL", "BOC"],
      goals: [4, 0],
      date: "01.10.22"
    },
    {
      teams: ["SCF", "M05"],
      goals: [2, 1],
      date: "01.10.22"
    },
    {
      teams: ["KÖL", "BVB"],
      goals: [3, 2],
      date: "01.10.22"
    },
    {
      teams: ["SGE", "FCU"],
      goals: [2, 0],
      date: "01.10.22"
    },
    {
      teams: ["WOB", "VfB"],
      goals: [3, 2],
      date: "01.10.22"
    },
    {
      teams: ["SVW", "MGL"],
      goals: [5, 1],
      date: "01.10.22"
    },
    {
      teams: ["BSC", "HOF"],
      goals: [1, 1],
      date: "02.10.22"
    },
    {
      teams: ["S04", "FCA"],
      goals: [2, 3],
      date: "02.10.22"
    }
  ],
  9: [
    {
      teams: ["HOF", "SVW"],
      goals: [1, 2],
      date: "07.10.22"
    },
    {
      teams: ["M05", "RBL"],
      goals: [1, 1],
      date: "08.10.22"
    },
    {
      teams: ["FCA", "WOB"],
      goals: [1, 1],
      date: "08.10.22"
    },
    {
      teams: ["B04", "S04"],
      goals: [4, 0],
      date: "08.10.22"
    },
    {
      teams: ["BOC", "SGE"],
      goals: [3, 0],
      date: "08.10.22"
    },
    {
      teams: ["BVB", "FCB"],
      goals: [2, 2],
      date: "08.10.22"
    },
    {
      teams: ["MGL", "KÖL"],
      goals: [5, 2],
      date: "09.10.22"
    },
    {
      teams: ["BSC", "SCF"],
      goals: [2, 2],
      date: "09.10.22"
    },
    {
      teams: ["VfB", "FCU"],
      goals: [0, 1],
      date: "09.10.22"
    }
  ],
  10: [
    {
      teams: ["S04", "HOF"],
      goals: [0, 3],
      date: "14.10.22"
    },
    {
      teams: ["SGE", "B04"],
      goals: [5, 1],
      date: "15.10.22"
    },
    {
      teams: ["WOB", "MGL"],
      goals: [2, 2],
      date: "15.10.22"
    },
    {
      teams: ["VfB", "BOC"],
      goals: [4, 1],
      date: "15.10.22"
    },
    {
      teams: ["SVW", "M05"],
      goals: [0, 2],
      date: "15.10.22"
    },
    {
      teams: ["RBL", "BSC"],
      goals: [3, 2],
      date: "15.10.22"
    },
    {
      teams: ["KÖL", "FCA"],
      goals: [3, 2],
      date: "16.10.22"
    },
    {
      teams: ["FCU", "BVB"],
      goals: [2, 0],
      date: "16.10.22"
    },
    {
      teams: ["FCB", "SCF"],
      goals: [5, 0],
      date: "16.10.22"
    }
  ],
  11: [
    {
      teams: ["M05", "KÖL"],
      goals: [5, 0],
      date: "21.10.22"
    },
    {
      teams: ["BVB", "VfB"],
      goals: [5, 0],
      date: "22.10.22"
    },
    {
      teams: ["B04", "WOB"],
      goals: [2, 2],
      date: "22.10.22"
    },
    {
      teams: ["SCF", "SVW"],
      goals: [2, 0],
      date: "22.10.22"
    },
    {
      teams: ["HOF", "FCB"],
      goals: [0, 2],
      date: "22.10.22"
    },
    {
      teams: ["FCA", "RBL"],
      goals: [3, 3],
      date: "22.10.22"
    },
    {
      teams: ["MGL", "SGE"],
      goals: [1, 3],
      date: "22.10.22"
    },
    {
      teams: ["BOC", "FCU"],
      goals: [2, 1],
      date: "23.10.22"
    },
    {
      teams: ["BSC", "S04"],
      goals: [2, 1],
      date: "23.10.22"
    }
  ],
  12: [
    {
      teams: ["SVW", "BSC"],
      goals: [1, 0],
      date: "28.10.22"
    },
    {
      teams: ["FCB", "M05"],
      goals: [6, 2],
      date: "29.10.22"
    },
    {
      teams: ["RBL", "B04"],
      goals: [2, 0],
      date: "29.10.22"
    },
    {
      teams: ["WOB", "BOC"],
      goals: [4, 0],
      date: "29.10.22"
    },
    {
      teams: ["VfB", "FCA"],
      goals: [2, 1],
      date: "29.10.22"
    },
    {
      teams: ["SGE", "BVB"],
      goals: [1, 2],
      date: "29.10.22"
    },
    {
      teams: ["FCU", "MGL"],
      goals: [2, 1],
      date: "30.10.22"
    },
    {
      teams: ["S04", "SCF"],
      goals: [0, 2],
      date: "30.10.22"
    },
    {
      teams: ["KÖL", "HOF"],
      goals: [1, 1],
      date: "30.10.22"
    }
  ],
  13: [
    {
      teams: ["MGL", "VfB"],
      goals: [3, 1],
      date: "04.11.22"
    },
    {
      teams: ["BVB", "BOC"],
      goals: [3, 0],
      date: "05.11.22"
    },
    {
      teams: ["M05", "WOB"],
      goals: [0, 3],
      date: "05.11.22"
    },
    {
      teams: ["HOF", "RBL"],
      goals: [1, 3],
      date: "05.11.22"
    },
    {
      teams: ["FCA", "SGE"],
      goals: [1, 2],
      date: "05.11.22"
    },
    {
      teams: ["BSC", "FCB"],
      goals: [2, 3],
      date: "05.11.22"
    },
    {
      teams: ["SVW", "S04"],
      goals: [2, 1],
      date: "05.11.22"
    },
    {
      teams: ["B04", "FCU"],
      goals: [5, 0],
      date: "06.11.22"
    },
    {
      teams: ["SCF", "KÖL"],
      goals: [2, 0],
      date: "06.11.22"
    }
  ],
  14: [
    {
      teams: ["WOB", "BVB"],
      goals: [2, 0],
      date: "08.11.22"
    },
    {
      teams: ["FCB", "SVW"],
      goals: [6, 1],
      date: "08.11.22"
    },
    {
      teams: ["BOC", "MGL"],
      goals: [2, 1],
      date: "08.11.22"
    },
    {
      teams: ["VfB", "BSC"],
      goals: [2, 1],
      date: "08.11.22"
    },
    {
      teams: ["KÖL", "B04"],
      goals: [1, 2],
      date: "09.11.22"
    },
    {
      teams: ["RBL", "SCF"],
      goals: [3, 1],
      date: "09.11.22"
    },
    {
      teams: ["FCU", "FCA"],
      goals: [2, 2],
      date: "09.11.22"
    },
    {
      teams: ["SGE", "HOF"],
      goals: [4, 2],
      date: "09.11.22"
    },
    {
      teams: ["S04", "M05"],
      goals: [1, 0],
      date: "09.11.22"
    }
  ],
  15: [
    {
      teams: ["MGL", "BVB"],
      goals: [4, 2],
      date: "11.11.22"
    },
    {
      teams: ["B04", "VfB"],
      goals: [2, 0],
      date: "12.11.22"
    },
    {
      teams: ["HOF", "WOB"],
      goals: [1, 2],
      date: "12.11.22"
    },
    {
      teams: ["FCA", "BOC"],
      goals: [0, 1],
      date: "12.11.22"
    },
    {
      teams: ["BSC", "KÖL"],
      goals: [2, 0],
      date: "12.11.22"
    },
    {
      teams: ["SVW", "RBL"],
      goals: [1, 2],
      date: "12.11.22"
    },
    {
      teams: ["S04", "FCB"],
      goals: [0, 2],
      date: "12.11.22"
    },
    {
      teams: ["M05", "SGE"],
      goals: [1, 1],
      date: "13.11.22"
    },
    {
      teams: ["SCF", "FCU"],
      goals: [4, 1],
      date: "13.11.22"
    }
  ],
  16: [
    {
      teams: ["RBL", "FCB"],
      goals: [1, 1],
      date: "20.01.23"
    },
    {
      teams: ["FCU", "HOF"],
      goals: [3, 1],
      date: "21.01.23"
    },
    {
      teams: ["SGE", "S04"],
      goals: [3, 0],
      date: "21.01.23"
    },
    {
      teams: ["WOB", "SCF"],
      goals: [6, 0],
      date: "21.01.23"
    },
    {
      teams: ["BOC", "BSC"],
      goals: [3, 1],
      date: "21.01.23"
    },
    {
      teams: ["VfB", "M05"],
      goals: [1, 1],
      date: "21.01.23"
    },
    {
      teams: ["KÖL", "SVW"],
      goals: [7, 1],
      date: "21.01.23"
    },
    {
      teams: ["BVB", "FCA"],
      goals: [4, 3],
      date: "22.01.23"
    },
    {
      teams: ["MGL", "B04"],
      goals: [2, 3],
      date: "22.01.23"
    }
  ],
  17: [
    {
      teams: ["S04", "RBL"],
      goals: [1, 6],
      date: "24.01.23"
    },
    {
      teams: ["FCB", "KÖL"],
      goals: [1, 1],
      date: "24.01.23"
    },
    {
      teams: ["HOF", "VfB"],
      goals: [2, 2],
      date: "24.01.23"
    },
    {
      teams: ["BSC", "WOB"],
      goals: [0, 5],
      date: "24.01.23"
    },
    {
      teams: ["M05", "BVB"],
      goals: [1, 2],
      date: "25.01.23"
    },
    {
      teams: ["B04", "BOC"],
      goals: [2, 0],
      date: "25.01.23"
    },
    {
      teams: ["SCF", "SGE"],
      goals: [1, 1],
      date: "25.01.23"
    },
    {
      teams: ["FCA", "MGL"],
      goals: [1, 0],
      date: "25.01.23"
    },
    {
      teams: ["SVW", "FCU"],
      goals: [1, 2],
      date: "25.01.23"
    }
  ],
  18: [
    {
      teams: ["RBL", "VfB"],
      goals: [2, 1],
      date: "27.01.23"
    },
    {
      teams: ["BSC", "FCU"],
      goals: [0, 2],
      date: "28.01.23"
    },
    {
      teams: ["HOF", "MGL"],
      goals: [1, 4],
      date: "28.01.23"
    },
    {
      teams: ["SVW", "WOB"],
      goals: [2, 1],
      date: "28.01.23"
    },
    {
      teams: ["M05", "BOC"],
      goals: [5, 2],
      date: "28.01.23"
    },
    {
      teams: ["SCF", "FCA"],
      goals: [3, 1],
      date: "28.01.23"
    },
    {
      teams: ["FCB", "SGE"],
      goals: [1, 1],
      date: "28.01.23"
    },
    {
      teams: ["S04", "KÖL"],
      goals: [0, 0],
      date: "29.01.23"
    },
    {
      teams: ["B04", "BVB"],
      goals: [0, 2],
      date: "29.01.23"
    }
  ],
  19: [
    {
      teams: ["FCA", "B04"],
      goals: [1, 0],
      date: "03.02.23"
    },
    {
      teams: ["KÖL", "RBL"],
      goals: [0, 0],
      date: "04.02.23"
    },
    {
      teams: ["BVB", "SCF"],
      goals: [5, 1],
      date: "04.02.23"
    },
    {
      teams: ["FCU", "M05"],
      goals: [2, 1],
      date: "04.02.23"
    },
    {
      teams: ["BOC", "HOF"],
      goals: [5, 2],
      date: "04.02.23"
    },
    {
      teams: ["SGE", "BSC"],
      goals: [3, 0],
      date: "04.02.23"
    },
    {
      teams: ["MGL", "S04"],
      goals: [0, 0],
      date: "04.02.23"
    },
    {
      teams: ["VfB", "SVW"],
      goals: [0, 2],
      date: "05.02.23"
    },
    {
      teams: ["WOB", "FCB"],
      goals: [2, 4],
      date: "05.02.23"
    }
  ],
  20: [
    {
      teams: ["S04", "WOB"],
      goals: [0, 0],
      date: "10.02.23"
    },
    {
      teams: ["SVW", "BVB"],
      goals: [0, 2],
      date: "11.02.23"
    },
    {
      teams: ["HOF", "B04"],
      goals: [1, 3],
      date: "11.02.23"
    },
    {
      teams: ["FCB", "BOC"],
      goals: [3, 0],
      date: "11.02.23"
    },
    {
      teams: ["M05", "FCA"],
      goals: [3, 1],
      date: "11.02.23"
    },
    {
      teams: ["SCF", "VfB"],
      goals: [2, 1],
      date: "11.02.23"
    },
    {
      teams: ["RBL", "FCU"],
      goals: [1, 2],
      date: "11.02.23"
    },
    {
      teams: ["BSC", "MGL"],
      goals: [4, 1],
      date: "12.02.23"
    },
    {
      teams: ["KÖL", "SGE"],
      goals: [3, 0],
      date: "12.02.23"
    }
  ],
  21: [
    {
      teams: ["FCA", "HOF"],
      goals: [1, 0],
      date: "17.02.23"
    },
    {
      teams: ["MGL", "FCB"],
      goals: [3, 2],
      date: "18.02.23"
    },
    {
      teams: ["WOB", "RBL"],
      goals: [0, 3],
      date: "18.02.23"
    },
    {
      teams: ["BOC", "SCF"],
      goals: [0, 2],
      date: "18.02.23"
    },
    {
      teams: ["VfB", "KÖL"],
      goals: [3, 0],
      date: "18.02.23"
    },
    {
      teams: ["SGE", "SVW"],
      goals: [2, 0],
      date: "18.02.23"
    },
    {
      teams: ["FCU", "S04"],
      goals: [0, 0],
      date: "19.02.23"
    },
    {
      teams: ["BVB", "BSC"],
      goals: [4, 1],
      date: "19.02.23"
    },
    {
      teams: ["B04", "M05"],
      goals: [2, 3],
      date: "19.02.23"
    }
  ],
  22: [
    {
      teams: ["M05", "MGL"],
      goals: [4, 0],
      date: "24.02.23"
    },
    {
      teams: ["HOF", "BVB"],
      goals: [0, 1],
      date: "25.02.23"
    },
    {
      teams: ["RBL", "SGE"],
      goals: [2, 1],
      date: "25.02.23"
    },
    {
      teams: ["KÖL", "WOB"],
      goals: [0, 2],
      date: "25.02.23"
    },
    {
      teams: ["SVW", "BOC"],
      goals: [3, 0],
      date: "25.02.23"
    },
    {
      teams: ["BSC", "FCA"],
      goals: [2, 0],
      date: "25.02.23"
    },
    {
      teams: ["S04", "VfB"],
      goals: [2, 1],
      date: "25.02.23"
    },
    {
      teams: ["SCF", "B04"],
      goals: [1, 1],
      date: "26.02.23"
    },
    {
      teams: ["FCB", "FCU"],
      goals: [3, 0],
      date: "26.02.23"
    }
  ],
  23: [
    {
      teams: ["BVB", "RBL"],
      goals: [2, 1],
      date: "03.03.23"
    },
    {
      teams: ["MGL", "SCF"],
      goals: [0, 0],
      date: "04.03.23"
    },
    {
      teams: ["FCU", "KÖL"],
      goals: [0, 0],
      date: "04.03.23"
    },
    {
      teams: ["M05", "HOF"],
      goals: [1, 0],
      date: "04.03.23"
    },
    {
      teams: ["BOC", "S04"],
      goals: [0, 2],
      date: "04.03.23"
    },
    {
      teams: ["FCA", "SVW"],
      goals: [2, 1],
      date: "04.03.23"
    },
    {
      teams: ["VfB", "FCB"],
      goals: [1, 2],
      date: "04.03.23"
    },
    {
      teams: ["B04", "BSC"],
      goals: [4, 1],
      date: "05.03.23"
    },
    {
      teams: ["WOB", "SGE"],
      goals: [2, 2],
      date: "05.03.23"
    }
  ],
  24: [
    {
      teams: ["KÖL", "BOC"],
      goals: [0, 2],
      date: "10.03.23"
    },
    {
      teams: ["BSC", "M05"],
      goals: [1, 1],
      date: "11.03.23"
    },
    {
      teams: ["RBL", "MGL"],
      goals: [3, 0],
      date: "11.03.23"
    },
    {
      teams: ["FCB", "FCA"],
      goals: [5, 3],
      date: "11.03.23"
    },
    {
      teams: ["SGE", "VfB"],
      goals: [1, 1],
      date: "11.03.23"
    },
    {
      teams: ["S04", "BVB"],
      goals: [2, 2],
      date: "11.03.23"
    },
    {
      teams: ["SCF", "HOF"],
      goals: [2, 1],
      date: "12.03.23"
    },
    {
      teams: ["SVW", "B04"],
      goals: [2, 3],
      date: "12.03.23"
    },
    {
      teams: ["WOB", "FCU"],
      goals: [1, 1],
      date: "12.03.23"
    }
  ],
  25: [
    {
      teams: ["MGL", "SVW"],
      goals: [2, 2],
      date: "17.03.23"
    },
    {
      teams: ["BOC", "RBL"],
      goals: [1, 0],
      date: "18.03.23"
    },
    {
      teams: ["VfB", "WOB"],
      goals: [0, 1],
      date: "18.03.23"
    },
    {
      teams: ["HOF", "BSC"],
      goals: [3, 1],
      date: "18.03.23"
    },
    {
      teams: ["FCA", "S04"],
      goals: [1, 1],
      date: "18.03.23"
    },
    {
      teams: ["BVB", "KÖL"],
      goals: [6, 1],
      date: "18.03.23"
    },
    {
      teams: ["FCU", "SGE"],
      goals: [2, 0],
      date: "19.03.23"
    },
    {
      teams: ["B04", "FCB"],
      goals: [2, 1],
      date: "19.03.23"
    },
    {
      teams: ["M05", "SCF"],
      goals: [1, 1],
      date: "19.03.23"
    }
  ],
  26: [
    {
      teams: ["SGE", "BOC"],
      goals: [1, 1],
      date: "31.03.23"
    },
    {
      teams: ["S04", "B04"],
      goals: [0, 3],
      date: "01.04.23"
    },
    {
      teams: ["RBL", "M05"],
      goals: [0, 3],
      date: "01.04.23"
    },
    {
      teams: ["WOB", "FCA"],
      goals: [2, 2],
      date: "01.04.23"
    },
    {
      teams: ["FCU", "VfB"],
      goals: [3, 0],
      date: "01.04.23"
    },
    {
      teams: ["SCF", "BSC"],
      goals: [1, 1],
      date: "01.04.23"
    },
    {
      teams: ["FCB", "BVB"],
      goals: [4, 2],
      date: "01.04.23"
    },
    {
      teams: ["KÖL", "MGL"],
      goals: [0, 0],
      date: "02.04.23"
    },
    {
      teams: ["SVW", "HOF"],
      goals: [1, 2],
      date: "02.04.23"
    }
  ],
  27: [
    {
      teams: ["SCF", "FCB"],
      goals: [null, null],
      date: "08.04.23"
    },
    {
      teams: ["BVB", "FCU"],
      goals: [null, null],
      date: "08.04.23"
    },
    {
      teams: ["FCA", "KÖL"],
      goals: [null, null],
      date: "08.04.23"
    },
    {
      teams: ["B04", "SGE"],
      goals: [null, null],
      date: "08.04.23"
    },
    {
      teams: ["M05", "SVW"],
      goals: [null, null],
      date: "08.04.23"
    },
    {
      teams: ["BSC", "RBL"],
      goals: [null, null],
      date: "08.04.23"
    },
    {
      teams: ["MGL", "WOB"],
      goals: [null, null],
      date: "09.04.23"
    },
    {
      teams: ["BOC", "VfB"],
      goals: [null, null],
      date: "09.04.23"
    },
    {
      teams: ["HOF", "S04"],
      goals: [null, null],
      date: "09.04.23"
    }
  ],
  28: [
    {
      teams: ["S04", "BSC"],
      goals: [null, null],
      date: "14.04.23"
    },
    {
      teams: ["VfB", "BVB"],
      goals: [null, null],
      date: "15.04.23"
    },
    {
      teams: ["KÖL", "M05"],
      goals: [null, null],
      date: "15.04.23"
    },
    {
      teams: ["FCB", "HOF"],
      goals: [null, null],
      date: "15.04.23"
    },
    {
      teams: ["RBL", "FCA"],
      goals: [null, null],
      date: "15.04.23"
    },
    {
      teams: ["SGE", "MGL"],
      goals: [null, null],
      date: "15.04.23"
    },
    {
      teams: ["SVW", "SCF"],
      goals: [null, null],
      date: "16.04.23"
    },
    {
      teams: ["FCU", "BOC"],
      goals: [null, null],
      date: "16.04.23"
    },
    {
      teams: ["WOB", "B04"],
      goals: [null, null],
      date: "16.04.23"
    }
  ],
  29: [
    {
      teams: ["FCA", "VfB"],
      goals: [null, null],
      date: "21.04.23"
    },
    {
      teams: ["M05", "FCB"],
      goals: [null, null],
      date: "22.04.23"
    },
    {
      teams: ["HOF", "KÖL"],
      goals: [null, null],
      date: "22.04.23"
    },
    {
      teams: ["BOC", "WOB"],
      goals: [null, null],
      date: "22.04.23"
    },
    {
      teams: ["BSC", "SVW"],
      goals: [null, null],
      date: "22.04.23"
    },
    {
      teams: ["BVB", "SGE"],
      goals: [null, null],
      date: "22.04.23"
    },
    {
      teams: ["SCF", "S04"],
      goals: [null, null],
      date: "23.04.23"
    },
    {
      teams: ["B04", "RBL"],
      goals: [null, null],
      date: "23.04.23"
    },
    {
      teams: ["MGL", "FCU"],
      goals: [null, null],
      date: "23.04.23"
    }
  ],
  30: [
    {
      teams: ["BOC", "BVB"],
      goals: [null, null],
      date: "28.04.23"
    },
    {
      teams: ["FCU", "B04"],
      goals: [null, null],
      date: "29.04.23"
    },
    {
      teams: ["KÖL", "SCF"],
      goals: [null, null],
      date: "29.04.23"
    },
    {
      teams: ["RBL", "HOF"],
      goals: [null, null],
      date: "29.04.23"
    },
    {
      teams: ["VfB", "MGL"],
      goals: [null, null],
      date: "29.04.23"
    },
    {
      teams: ["SGE", "FCA"],
      goals: [null, null],
      date: "29.04.23"
    },
    {
      teams: ["S04", "SVW"],
      goals: [null, null],
      date: "29.04.23"
    },
    {
      teams: ["FCB", "BSC"],
      goals: [null, null],
      date: "30.04.23"
    },
    {
      teams: ["WOB", "M05"],
      goals: [null, null],
      date: "30.04.23"
    }
  ],
  31: [
    {
      teams: ["SVW", "FCB"],
      goals: [null, null],
      date: "06.05.23"
    },
    {
      teams: ["SCF", "RBL"],
      goals: [null, null],
      date: "06.05.23"
    },
    {
      teams: ["FCA", "FCU"],
      goals: [null, null],
      date: "06.05.23"
    },
    {
      teams: ["B04", "KÖL"],
      goals: [null, null],
      date: "06.05.23"
    },
    {
      teams: ["HOF", "SGE"],
      goals: [null, null],
      date: "06.05.23"
    },
    {
      teams: ["BVB", "WOB"],
      goals: [null, null],
      date: "06.05.23"
    },
    {
      teams: ["MGL", "BOC"],
      goals: [null, null],
      date: "06.05.23"
    },
    {
      teams: ["BSC", "VfB"],
      goals: [null, null],
      date: "06.05.23"
    },
    {
      teams: ["M05", "S04"],
      goals: [null, null],
      date: "06.05.23"
    }
  ],
  32: [
    {
      teams: ["VfB", "B04"],
      goals: [null, null],
      date: "13.05.23"
    },
    {
      teams: ["FCU", "SCF"],
      goals: [null, null],
      date: "13.05.23"
    },
    {
      teams: ["SGE", "M05"],
      goals: [null, null],
      date: "13.05.23"
    },
    {
      teams: ["WOB", "HOF"],
      goals: [null, null],
      date: "13.05.23"
    },
    {
      teams: ["BVB", "MGL"],
      goals: [null, null],
      date: "13.05.23"
    },
    {
      teams: ["BOC", "FCA"],
      goals: [null, null],
      date: "13.05.23"
    },
    {
      teams: ["KÖL", "BSC"],
      goals: [null, null],
      date: "13.05.23"
    },
    {
      teams: ["FCB", "S04"],
      goals: [null, null],
      date: "13.05.23"
    },
    {
      teams: ["RBL", "SVW"],
      goals: [null, null],
      date: "13.05.23"
    }
  ],
  33: [
    {
      teams: ["FCA", "BVB"],
      goals: [null, null],
      date: "20.05.23"
    },
    {
      teams: ["FCB", "RBL"],
      goals: [null, null],
      date: "20.05.23"
    },
    {
      teams: ["HOF", "FCU"],
      goals: [null, null],
      date: "20.05.23"
    },
    {
      teams: ["SVW", "KÖL"],
      goals: [null, null],
      date: "20.05.23"
    },
    {
      teams: ["B04", "MGL"],
      goals: [null, null],
      date: "20.05.23"
    },
    {
      teams: ["S04", "SGE"],
      goals: [null, null],
      date: "20.05.23"
    },
    {
      teams: ["SCF", "WOB"],
      goals: [null, null],
      date: "20.05.23"
    },
    {
      teams: ["BSC", "BOC"],
      goals: [null, null],
      date: "20.05.23"
    },
    {
      teams: ["M05", "VfB"],
      goals: [null, null],
      date: "20.05.23"
    }
  ],
  34: [
    {
      teams: ["KÖL", "FCB"],
      goals: [null, null],
      date: "27.05.23"
    },
    {
      teams: ["BOC", "B04"],
      goals: [null, null],
      date: "27.05.23"
    },
    {
      teams: ["SGE", "SCF"],
      goals: [null, null],
      date: "27.05.23"
    },
    {
      teams: ["BVB", "M05"],
      goals: [null, null],
      date: "27.05.23"
    },
    {
      teams: ["VfB", "HOF"],
      goals: [null, null],
      date: "27.05.23"
    },
    {
      teams: ["MGL", "FCA"],
      goals: [null, null],
      date: "27.05.23"
    },
    {
      teams: ["WOB", "BSC"],
      goals: [null, null],
      date: "27.05.23"
    },
    {
      teams: ["RBL", "S04"],
      goals: [null, null],
      date: "27.05.23"
    },
    {
      teams: ["FCU", "SVW"],
      goals: [null, null],
      date: "27.05.23"
    }
  ]
};

const table = makeTable(matches);

const data = {
  matches: matches,
  table: table
};

module.exports = data;
