const { makeTable } = require("../helpers");

const matches = {
  1: [
    {
      teams: ["SGE", "FCB"],
      goals: [0, 0],
      date: "16.09.22"
    },
    {
      teams: ["WOB", "ESS"],
      goals: [4, 0],
      date: "17.09.22"
    },
    {
      teams: ["KÖL", "HOF"],
      goals: [3, 1],
      date: "18.09.22"
    },
    {
      teams: ["SVM", "SCF"],
      goals: [1, 2],
      date: "18.09.22"
    },
    {
      teams: ["DUI", "B04"],
      goals: [0, 1],
      date: "18.09.22"
    },
    {
      teams: ["SVW", "POT"],
      goals: [1, 1],
      date: "18.09.22"
    }
  ],
  2: [
    {
      teams: ["B04", "KÖL"],
      goals: [1, 0],
      date: "23.09.22"
    },
    {
      teams: ["HOF", "WOB"],
      goals: [1, 2],
      date: "24.09.22"
    },
    {
      teams: ["POT", "DUI"],
      goals: [0, 3],
      date: "25.09.22"
    },
    {
      teams: ["FCB", "SVW"],
      goals: [3, 0],
      date: "25.09.22"
    },
    {
      teams: ["ESS", "SVM"],
      goals: [1, 0],
      date: "25.09.22"
    },
    {
      teams: ["SCF", "SGE"],
      goals: [2, 4],
      date: "25.09.22"
    }
  ],
  3: [
    {
      teams: ["WOB", "B04"],
      goals: [6, 1],
      date: "30.09.22"
    },
    {
      teams: ["KÖL", "POT"],
      goals: [4, 2],
      date: "01.10.22"
    },
    {
      teams: ["SGE", "SVW"],
      goals: [3, 1],
      date: "02.10.22"
    },
    {
      teams: ["SVM", "HOF"],
      goals: [0, 2],
      date: "02.10.22"
    },
    {
      teams: ["DUI", "FCB"],
      goals: [0, 4],
      date: "02.10.22"
    },
    {
      teams: ["SCF", "ESS"],
      goals: [5, 2],
      date: "02.10.22"
    }
  ],
  4: [
    {
      teams: ["HOF", "SCF"],
      goals: [3, 2],
      date: "14.10.22"
    },
    {
      teams: ["POT", "WOB"],
      goals: [0, 2],
      date: "15.10.22"
    },
    {
      teams: ["B04", "SVM"],
      goals: [0, 1],
      date: "16.10.22"
    },
    {
      teams: ["FCB", "KÖL"],
      goals: [4, 0],
      date: "16.10.22"
    },
    {
      teams: ["ESS", "SGE"],
      goals: [0, 4],
      date: "16.10.22"
    },
    {
      teams: ["SVW", "DUI"],
      goals: [0, 0],
      date: "16.10.22"
    }
  ],
  5: [
    {
      teams: ["SVM", "POT"],
      goals: [2, 0],
      date: "21.10.22"
    },
    {
      teams: ["SCF", "B04"],
      goals: [3, 2],
      date: "22.10.22"
    },
    {
      teams: ["ESS", "HOF"],
      goals: [2, 3],
      date: "23.10.22"
    },
    {
      teams: ["WOB", "FCB"],
      goals: [2, 1],
      date: "23.10.22"
    },
    {
      teams: ["SGE", "DUI"],
      goals: [3, 2],
      date: "23.10.22"
    },
    {
      teams: ["KÖL", "SVW"],
      goals: [2, 0],
      date: "23.10.22"
    }
  ],
  6: [
    {
      teams: ["DUI", "KÖL"],
      goals: [2, 1],
      date: "28.10.22"
    },
    {
      teams: ["HOF", "SGE"],
      goals: [3, 3],
      date: "29.10.22"
    },
    {
      teams: ["POT", "SCF"],
      goals: [0, 5],
      date: "30.10.22"
    },
    {
      teams: ["FCB", "SVM"],
      goals: [3, 1],
      date: "30.10.22"
    },
    {
      teams: ["B04", "ESS"],
      goals: [6, 0],
      date: "30.10.22"
    },
    {
      teams: ["SVW", "WOB"],
      goals: [2, 3],
      date: "30.10.22"
    }
  ],
  7: [
    {
      teams: ["HOF", "B04"],
      goals: [3, 1],
      date: "04.11.22"
    },
    {
      teams: ["SCF", "FCB"],
      goals: [0, 3],
      date: "05.11.22"
    },
    {
      teams: ["WOB", "DUI"],
      goals: [4, 0],
      date: "06.11.22"
    },
    {
      teams: ["ESS", "POT"],
      goals: [2, 1],
      date: "06.11.22"
    },
    {
      teams: ["SGE", "KÖL"],
      goals: [2, 0],
      date: "06.11.22"
    },
    {
      teams: ["SVM", "SVW"],
      goals: [2, 0],
      date: "06.11.22"
    }
  ],
  8: [
    {
      teams: ["POT", "HOF"],
      goals: [1, 3],
      date: "25.11.22"
    },
    {
      teams: ["SGE", "B04"],
      goals: [0, 0],
      date: "26.11.22"
    },
    {
      teams: ["SVW", "SCF"],
      goals: [1, 2],
      date: "26.11.22"
    },
    {
      teams: ["KÖL", "WOB"],
      goals: [0, 4],
      date: "27.11.22"
    },
    {
      teams: ["DUI", "SVM"],
      goals: [1, 0],
      date: "27.11.22"
    },
    {
      teams: ["FCB", "ESS"],
      goals: [2, 0],
      date: "27.11.22"
    }
  ],
  9: [
    {
      teams: ["HOF", "FCB"],
      goals: [0, 4],
      date: "02.12.22"
    },
    {
      teams: ["WOB", "SGE"],
      goals: [5, 0],
      date: "03.12.22"
    },
    {
      teams: ["SCF", "DUI"],
      goals: [4, 1],
      date: "03.12.22"
    },
    {
      teams: ["B04", "POT"],
      goals: [3, 0],
      date: "04.12.22"
    },
    {
      teams: ["SVM", "KÖL"],
      goals: [1, 0],
      date: "04.12.22"
    },
    {
      teams: ["ESS", "SVW"],
      goals: [0, 0],
      date: "04.12.22"
    }
  ],
  10: [
    {
      teams: ["SGE", "POT"],
      goals: [3, 0],
      date: "09.12.22"
    },
    {
      teams: ["FCB", "B04"],
      goals: [2, 0],
      date: "10.12.22"
    },
    {
      teams: ["WOB", "SVM"],
      goals: [3, 0],
      date: "11.12.22"
    },
    {
      teams: ["KÖL", "SCF"],
      goals: [0, 0],
      date: "11.12.22"
    },
    {
      teams: ["DUI", "ESS"],
      goals: [0, 6],
      date: "11.12.22"
    },
    {
      teams: ["SVW", "HOF"],
      goals: [1, 1],
      date: "11.12.22"
    }
  ],
  11: [
    {
      teams: ["ESS", "KÖL"],
      goals: [4, 0],
      date: "03.02.23"
    },
    {
      teams: ["SCF", "WOB"],
      goals: [0, 4],
      date: "04.02.23"
    },
    {
      teams: ["HOF", "DUI"],
      goals: [7, 0],
      date: "05.02.23"
    },
    {
      teams: ["B04", "SVW"],
      goals: [0, 2],
      date: "05.02.23"
    },
    {
      teams: ["SVM", "SGE"],
      goals: [0, 1],
      date: "05.02.23"
    },
    {
      teams: ["POT", "FCB"],
      goals: [0, 3],
      date: "25.02.23"
    }
  ],
  12: [
    {
      teams: ["FCB", "SGE"],
      goals: [2, 1],
      date: "11.02.23"
    },
    {
      teams: ["ESS", "WOB"],
      goals: [0, 3],
      date: "12.02.23"
    },
    {
      teams: ["SCF", "SVM"],
      goals: [3, 1],
      date: "12.02.23"
    },
    {
      teams: ["HOF", "KÖL"],
      goals: [4, 0],
      date: "12.02.23"
    },
    {
      teams: ["B04", "DUI"],
      goals: [2, 0],
      date: "12.02.23"
    },
    {
      teams: ["POT", "SVW"],
      goals: [1, 2],
      date: "01.03.23"
    }
  ],
  13: [
    {
      teams: ["SGE", "SCF"],
      goals: [4, 1],
      date: "03.03.23"
    },
    {
      teams: ["WOB", "HOF"],
      goals: [1, 2],
      date: "04.03.23"
    },
    {
      teams: ["DUI", "POT"],
      goals: [3, 0],
      date: "05.03.23"
    },
    {
      teams: ["KÖL", "B04"],
      goals: [0, 0],
      date: "05.03.23"
    },
    {
      teams: ["SVM", "ESS"],
      goals: [1, 1],
      date: "05.03.23"
    },
    {
      teams: ["SVW", "FCB"],
      goals: [0, 2],
      date: "05.03.23"
    }
  ],
  14: [
    {
      teams: ["FCB", "DUI"],
      goals: [4, 0],
      date: "10.03.23"
    },
    {
      teams: ["HOF", "SVM"],
      goals: [4, 0],
      date: "12.03.23"
    },
    {
      teams: ["B04", "WOB"],
      goals: [1, 4],
      date: "12.03.23"
    },
    {
      teams: ["ESS", "SCF"],
      goals: [2, 1],
      date: "12.03.23"
    },
    {
      teams: ["SVW", "SGE"],
      goals: [0, 2],
      date: "14.03.23"
    },
    {
      teams: ["POT", "KÖL"],
      goals: [0, 0],
      date: "21.03.23"
    }
  ],
  15: [
    {
      teams: ["WOB", "POT"],
      goals: [5, 0],
      date: "17.03.23"
    },
    {
      teams: ["KÖL", "FCB"],
      goals: [0, 5],
      date: "18.03.23"
    },
    {
      teams: ["SGE", "ESS"],
      goals: [4, 1],
      date: "19.03.23"
    },
    {
      teams: ["DUI", "SVW"],
      goals: [0, 1],
      date: "19.03.23"
    },
    {
      teams: ["SVM", "B04"],
      goals: [1, 2],
      date: "19.03.23"
    },
    {
      teams: ["SCF", "HOF"],
      goals: [0, 1],
      date: "19.03.23"
    }
  ],
  16: [
    {
      teams: ["SVW", "KÖL"],
      goals: [1, 0],
      date: "24.03.23"
    },
    {
      teams: ["FCB", "WOB"],
      goals: [1, 0],
      date: "25.03.23"
    },
    {
      teams: ["HOF", "ESS"],
      goals: [2, 0],
      date: "26.03.23"
    },
    {
      teams: ["B04", "SCF"],
      goals: [2, 0],
      date: "26.03.23"
    },
    {
      teams: ["POT", "SVM"],
      goals: [3, 1],
      date: "26.03.23"
    },
    {
      teams: ["DUI", "SGE"],
      goals: [0, 1],
      date: "16.04.23"
    }
  ],
  17: [
    {
      teams: ["KÖL", "DUI"],
      goals: [4, 0],
      date: "31.03.23"
    },
    {
      teams: ["SCF", "POT"],
      goals: [0, 1],
      date: "02.04.23"
    },
    {
      teams: ["SVM", "FCB"],
      goals: [0, 2],
      date: "02.04.23"
    },
    {
      teams: ["WOB", "SVW"],
      goals: [8, 0],
      date: "02.04.23"
    },
    {
      teams: ["ESS", "B04"],
      goals: [0, 0],
      date: "15.04.23"
    },
    {
      teams: ["SGE", "HOF"],
      goals: [3, 3],
      date: "30.04.23"
    }
  ],
  18: [
    {
      teams: ["DUI", "WOB"],
      goals: [0, 3],
      date: "19.04.23"
    },
    {
      teams: ["B04", "HOF"],
      goals: [0, 1],
      date: "21.04.23"
    },
    {
      teams: ["FCB", "SCF"],
      goals: [8, 2],
      date: "22.04.23"
    },
    {
      teams: ["KÖL", "SGE"],
      goals: [0, 2],
      date: "23.04.23"
    },
    {
      teams: ["POT", "ESS"],
      goals: [0, 1],
      date: "23.04.23"
    },
    {
      teams: ["SVW", "SVM"],
      goals: [0, 0],
      date: "23.04.23"
    }
  ],
  19: [
    {
      teams: ["B04", "SGE"],
      goals: [2, 3],
      date: "06.05.23"
    },
    {
      teams: ["ESS", "FCB"],
      goals: [1, 2],
      date: "06.05.23"
    },
    {
      teams: ["WOB", "KÖL"],
      goals: [7, 1],
      date: "07.05.23"
    },
    {
      teams: ["SCF", "SVW"],
      goals: [1, 1],
      date: "07.05.23"
    },
    {
      teams: ["HOF", "POT"],
      goals: [6, 1],
      date: "07.05.23"
    },
    {
      teams: ["SVM", "DUI"],
      goals: [0, 2],
      date: "07.05.23"
    }
  ],
  20: [
    {
      teams: ["FCB", "HOF"],
      goals: [1, 0],
      date: "12.05.23"
    },
    {
      teams: ["POT", "B04"],
      goals: [1, 5],
      date: "13.05.23"
    },
    {
      teams: ["SGE", "WOB"],
      goals: [4, 0],
      date: "14.05.23"
    },
    {
      teams: ["DUI", "SCF"],
      goals: [1, 1],
      date: "14.05.23"
    },
    {
      teams: ["SVW", "ESS"],
      goals: [3, 2],
      date: "14.05.23"
    },
    {
      teams: ["KÖL", "SVM"],
      goals: [1, 2],
      date: "14.05.23"
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
      goals: [null, null],
      date: "2023-05-21T11:00Z"
    },
    {
      teams: ["SCF", "KÖL"],
      goals: [null, null],
      date: "2023-05-21T11:00Z"
    },
    {
      teams: ["SVW", "WOB"],
      goals: [null, null],
      date: "2023-05-21T14:00Z"
    },
    {
      teams: ["ESS", "DUI"],
      goals: [null, null],
      date: "2023-05-21T14:00Z"
    }
  ],
  22: [
    {
      teams: ["FCB", "POT"],
      goals: [null, null],
      date: "2023-05-28T12:00Z"
    },
    {
      teams: ["SVW", "B04"],
      goals: [null, null],
      date: "2023-05-28T12:00Z"
    },
    {
      teams: ["DUI", "HOF"],
      goals: [null, null],
      date: "2023-05-28T12:00Z"
    },
    {
      teams: ["KÖL", "ESS"],
      goals: [null, null],
      date: "2023-05-28T12:00Z"
    },
    {
      teams: ["WOB", "SCF"],
      goals: [null, null],
      date: "2023-05-28T12:00Z"
    },
    {
      teams: ["SGE", "SVM"],
      goals: [null, null],
      date: "2023-05-28T14:00:00+02:00"
    }
  ]
};

const table = makeTable(matches);

const data = {
  matches: matches,
  table: table
};

module.exports = data;
