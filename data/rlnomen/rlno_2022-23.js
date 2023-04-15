const { makeTable } = require("../helpers");

const matches = {
  1: [
    {
      teams: ["LUC", "ERF"],
      goals: [1, 1],
      date: "05.08.22"
    },
    {
      teams: ["L47", "HBS"],
      goals: [2, 1],
      date: "05.08.22"
    },
    {
      teams: ["AGL", "ECB"],
      goals: [2, 0],
      date: "05.08.22"
    },
    {
      teams: ["CZJ", "VBL"],
      goals: [1, 1],
      date: "06.08.22"
    },
    {
      teams: ["CFC", "TBB"],
      goals: [3, 0],
      date: "06.08.22"
    },
    {
      teams: ["ZFC", "BFC"],
      goals: [1, 2],
      date: "06.08.22"
    },
    {
      teams: ["LKL", "BSC2"],
      goals: [4, 2],
      date: "07.08.22"
    },
    {
      teams: ["BAK", "GFC"],
      goals: [2, 0],
      date: "07.08.22"
    },
    {
      teams: ["SVB", "CHL"],
      goals: [4, 2],
      date: "07.08.22"
    }
  ],
  2: [
    {
      teams: ["BSC2", "SVB"],
      goals: [0, 1],
      date: "12.08.22"
    },
    {
      teams: ["VBL", "LKL"],
      goals: [2, 2],
      date: "12.08.22"
    },
    {
      teams: ["CHL", "AGL"],
      goals: [1, 2],
      date: "13.08.22"
    },
    {
      teams: ["ECB", "LUC"],
      goals: [3, 0],
      date: "13.08.22"
    },
    {
      teams: ["GFC", "CFC"],
      goals: [0, 0],
      date: "14.08.22"
    },
    {
      teams: ["TBB", "CZJ"],
      goals: [0, 6],
      date: "14.08.22"
    },
    {
      teams: ["HBS", "ZFC"],
      goals: [0, 3],
      date: "14.08.22"
    },
    {
      teams: ["ERF", "L47"],
      goals: [5, 0],
      date: "14.08.22"
    },
    {
      teams: ["BFC", "BAK"],
      goals: [0, 1],
      date: "14.08.22"
    }
  ],
  3: [
    {
      teams: ["CFC", "BFC"],
      goals: [1, 0],
      date: "19.08.22"
    },
    {
      teams: ["SVB", "AGL"],
      goals: [2, 2],
      date: "19.08.22"
    },
    {
      teams: ["LUC", "CHL"],
      goals: [2, 2],
      date: "19.08.22"
    },
    {
      teams: ["LKL", "TBB"],
      goals: [4, 0],
      date: "20.08.22"
    },
    {
      teams: ["BSC2", "VBL"],
      goals: [3, 2],
      date: "20.08.22"
    },
    {
      teams: ["ZFC", "ERF"],
      goals: [1, 4],
      date: "20.08.22"
    },
    {
      teams: ["BAK", "HBS"],
      goals: [2, 0],
      date: "21.08.22"
    },
    {
      teams: ["CZJ", "GFC"],
      goals: [1, 0],
      date: "21.08.22"
    },
    {
      teams: ["L47", "ECB"],
      goals: [0, 0],
      date: "21.08.22"
    }
  ],
  4: [
    {
      teams: ["ERF", "BAK"],
      goals: [0, 1],
      date: "26.08.22"
    },
    {
      teams: ["TBB", "BSC2"],
      goals: [3, 3],
      date: "26.08.22"
    },
    {
      teams: ["BFC", "CZJ"],
      goals: [0, 2],
      date: "26.08.22"
    },
    {
      teams: ["ECB", "ZFC"],
      goals: [4, 0],
      date: "27.08.22"
    },
    {
      teams: ["CHL", "L47"],
      goals: [3, 2],
      date: "28.08.22"
    },
    {
      teams: ["GFC", "LKL"],
      goals: [3, 1],
      date: "28.08.22"
    },
    {
      teams: ["VBL", "SVB"],
      goals: [0, 1],
      date: "28.08.22"
    },
    {
      teams: ["HBS", "CFC"],
      goals: [1, 1],
      date: "29.08.22"
    },
    {
      teams: ["AGL", "LUC"],
      goals: [2, 2],
      date: "31.08.22"
    }
  ],
  5: [
    {
      teams: ["LKL", "BFC"],
      goals: [0, 0],
      date: "09.09.22"
    },
    {
      teams: ["CZJ", "HBS"],
      goals: [2, 0],
      date: "09.09.22"
    },
    {
      teams: ["SVB", "LUC"],
      goals: [1, 1],
      date: "09.09.22"
    },
    {
      teams: ["L47", "AGL"],
      goals: [0, 1],
      date: "10.09.22"
    },
    {
      teams: ["VBL", "TBB"],
      goals: [2, 1],
      date: "10.09.22"
    },
    {
      teams: ["CFC", "ERF"],
      goals: [0, 3],
      date: "10.09.22"
    },
    {
      teams: ["BAK", "ECB"],
      goals: [2, 1],
      date: "11.09.22"
    },
    {
      teams: ["BSC2", "GFC"],
      goals: [2, 1],
      date: "11.09.22"
    },
    {
      teams: ["ZFC", "CHL"],
      goals: [0, 1],
      date: "11.09.22"
    }
  ],
  6: [
    {
      teams: ["BFC", "BSC2"],
      goals: [0, 0],
      date: "16.09.22"
    },
    {
      teams: ["LUC", "L47"],
      goals: [1, 1],
      date: "16.09.22"
    },
    {
      teams: ["AGL", "ZFC"],
      goals: [5, 2],
      date: "16.09.22"
    },
    {
      teams: ["CHL", "BAK"],
      goals: [2, 1],
      date: "17.09.22"
    },
    {
      teams: ["ECB", "CFC"],
      goals: [3, 1],
      date: "17.09.22"
    },
    {
      teams: ["HBS", "LKL"],
      goals: [1, 3],
      date: "18.09.22"
    },
    {
      teams: ["GFC", "VBL"],
      goals: [5, 0],
      date: "18.09.22"
    },
    {
      teams: ["TBB", "SVB"],
      goals: [0, 1],
      date: "18.09.22"
    },
    {
      teams: ["ERF", "CZJ"],
      goals: [1, 1],
      date: "18.09.22"
    }
  ],
  7: [
    {
      teams: ["CZJ", "ECB"],
      goals: [1, 1],
      date: "28.09.22"
    },
    {
      teams: ["LKL", "ERF"],
      goals: [1, 0],
      date: "30.09.22"
    },
    {
      teams: ["BSC2", "HBS"],
      goals: [3, 0],
      date: "30.09.22"
    },
    {
      teams: ["VBL", "BFC"],
      goals: [1, 1],
      date: "30.09.22"
    },
    {
      teams: ["SVB", "L47"],
      goals: [2, 2],
      date: "01.10.22"
    },
    {
      teams: ["TBB", "GFC"],
      goals: [0, 3],
      date: "01.10.22"
    },
    {
      teams: ["CFC", "CHL"],
      goals: [0, 1],
      date: "01.10.22"
    },
    {
      teams: ["BAK", "AGL"],
      goals: [4, 0],
      date: "02.10.22"
    },
    {
      teams: ["ZFC", "LUC"],
      goals: [3, 1],
      date: "02.10.22"
    }
  ],
  8: [
    {
      teams: ["CHL", "CZJ"],
      goals: [1, 0],
      date: "07.10.22"
    },
    {
      teams: ["AGL", "CFC"],
      goals: [3, 3],
      date: "07.10.22"
    },
    {
      teams: ["ERF", "BSC2"],
      goals: [2, 1],
      date: "08.10.22"
    },
    {
      teams: ["BFC", "TBB"],
      goals: [4, 1],
      date: "08.10.22"
    },
    {
      teams: ["ECB", "LKL"],
      goals: [3, 1],
      date: "08.10.22"
    },
    {
      teams: ["HBS", "VBL"],
      goals: [0, 1],
      date: "09.10.22"
    },
    {
      teams: ["GFC", "SVB"],
      goals: [0, 2],
      date: "09.10.22"
    },
    {
      teams: ["L47", "ZFC"],
      goals: [2, 1],
      date: "09.10.22"
    },
    {
      teams: ["LUC", "BAK"],
      goals: [0, 1],
      date: "09.10.22"
    }
  ],
  9: [
    {
      teams: ["CZJ", "AGL"],
      goals: [0, 0],
      date: "14.10.22"
    },
    {
      teams: ["BSC2", "ECB"],
      goals: [0, 5],
      date: "14.10.22"
    },
    {
      teams: ["SVB", "ZFC"],
      goals: [3, 0],
      date: "14.10.22"
    },
    {
      teams: ["GFC", "BFC"],
      goals: [1, 1],
      date: "15.10.22"
    },
    {
      teams: ["TBB", "HBS"],
      goals: [4, 3],
      date: "15.10.22"
    },
    {
      teams: ["VBL", "ERF"],
      goals: [1, 2],
      date: "15.10.22"
    },
    {
      teams: ["BAK", "L47"],
      goals: [6, 0],
      date: "16.10.22"
    },
    {
      teams: ["CFC", "LUC"],
      goals: [2, 0],
      date: "16.10.22"
    },
    {
      teams: ["LKL", "CHL"],
      goals: [3, 0],
      date: "16.10.22"
    }
  ],
  10: [
    {
      teams: ["BFC", "SVB"],
      goals: [2, 1],
      date: "20.10.22"
    },
    {
      teams: ["AGL", "LKL"],
      goals: [1, 2],
      date: "21.10.22"
    },
    {
      teams: ["ERF", "TBB"],
      goals: [3, 0],
      date: "21.10.22"
    },
    {
      teams: ["CHL", "BSC2"],
      goals: [4, 2],
      date: "22.10.22"
    },
    {
      teams: ["ECB", "VBL"],
      goals: [2, 1],
      date: "22.10.22"
    },
    {
      teams: ["L47", "CFC"],
      goals: [0, 2],
      date: "22.10.22"
    },
    {
      teams: ["LUC", "CZJ"],
      goals: [1, 1],
      date: "23.10.22"
    },
    {
      teams: ["HBS", "GFC"],
      goals: [0, 0],
      date: "23.10.22"
    },
    {
      teams: ["ZFC", "BAK"],
      goals: [0, 2],
      date: "23.10.22"
    }
  ],
  11: [
    {
      teams: ["LKL", "LUC"],
      goals: [2, 0],
      date: "28.10.22"
    },
    {
      teams: ["BFC", "HBS"],
      goals: [3, 2],
      date: "28.10.22"
    },
    {
      teams: ["SVB", "BAK"],
      goals: [0, 0],
      date: "28.10.22"
    },
    {
      teams: ["CFC", "ZFC"],
      goals: [4, 0],
      date: "29.10.22"
    },
    {
      teams: ["GFC", "ERF"],
      goals: [0, 2],
      date: "29.10.22"
    },
    {
      teams: ["VBL", "CHL"],
      goals: [0, 2],
      date: "29.10.22"
    },
    {
      teams: ["CZJ", "L47"],
      goals: [0, 0],
      date: "30.10.22"
    },
    {
      teams: ["BSC2", "AGL"],
      goals: [0, 5],
      date: "30.10.22"
    },
    {
      teams: ["TBB", "ECB"],
      goals: [0, 4],
      date: "30.10.22"
    }
  ],
  12: [
    {
      teams: ["BAK", "CFC"],
      goals: [2, 4],
      date: "04.11.22"
    },
    {
      teams: ["LUC", "BSC2"],
      goals: [1, 2],
      date: "04.11.22"
    },
    {
      teams: ["AGL", "VBL"],
      goals: [1, 1],
      date: "04.11.22"
    },
    {
      teams: ["CHL", "TBB"],
      goals: [4, 0],
      date: "05.11.22"
    },
    {
      teams: ["ZFC", "CZJ"],
      goals: [2, 1],
      date: "05.11.22"
    },
    {
      teams: ["ECB", "GFC"],
      goals: [3, 1],
      date: "06.11.22"
    },
    {
      teams: ["L47", "LKL"],
      goals: [4, 2],
      date: "06.11.22"
    },
    {
      teams: ["HBS", "SVB"],
      goals: [1, 5],
      date: "06.11.22"
    },
    {
      teams: ["ERF", "BFC"],
      goals: [4, 1],
      date: "06.11.22"
    }
  ],
  13: [
    {
      teams: ["CZJ", "BAK"],
      goals: [3, 0],
      date: "11.11.22"
    },
    {
      teams: ["BSC2", "L47"],
      goals: [3, 0],
      date: "11.11.22"
    },
    {
      teams: ["LKL", "ZFC"],
      goals: [0, 1],
      date: "12.11.22"
    },
    {
      teams: ["GFC", "CHL"],
      goals: [2, 2],
      date: "12.11.22"
    },
    {
      teams: ["HBS", "ERF"],
      goals: [1, 1],
      date: "12.11.22"
    },
    {
      teams: ["VBL", "LUC"],
      goals: [0, 0],
      date: "12.11.22"
    },
    {
      teams: ["BFC", "ECB"],
      goals: [4, 1],
      date: "13.11.22"
    },
    {
      teams: ["SVB", "CFC"],
      goals: [0, 2],
      date: "13.11.22"
    },
    {
      teams: ["TBB", "AGL"],
      goals: [0, 6],
      date: "13.11.22"
    }
  ],
  14: [
    {
      teams: ["LUC", "TBB"],
      goals: [3, 1],
      date: "25.11.22"
    },
    {
      teams: ["L47", "VBL"],
      goals: [0, 1],
      date: "25.11.22"
    },
    {
      teams: ["AGL", "GFC"],
      goals: [2, 3],
      date: "25.11.22"
    },
    {
      teams: ["ERF", "SVB"],
      goals: [6, 2],
      date: "26.11.22"
    },
    {
      teams: ["ECB", "HBS"],
      goals: [4, 0],
      date: "27.11.22"
    },
    {
      teams: ["ZFC", "BSC2"],
      goals: [2, 1],
      date: "27.11.22"
    },
    {
      teams: ["CFC", "CZJ"],
      goals: [4, 0],
      date: "27.11.22"
    },
    {
      teams: ["CHL", "BFC"],
      goals: [1, 1],
      date: "29.11.22"
    },
    {
      teams: ["BAK", "LKL"],
      goals: [1, 2],
      date: "30.11.22"
    }
  ],
  15: [
    {
      teams: ["TBB", "L47"],
      goals: [2, 0],
      date: "02.12.22"
    },
    {
      teams: ["VBL", "ZFC"],
      goals: [2, 0],
      date: "02.12.22"
    },
    {
      teams: ["BFC", "AGL"],
      goals: [2, 1],
      date: "03.12.22"
    },
    {
      teams: ["SVB", "CZJ"],
      goals: [0, 1],
      date: "03.12.22"
    },
    {
      teams: ["GFC", "LUC"],
      goals: [1, 1],
      date: "04.12.22"
    },
    {
      teams: ["ERF", "ECB"],
      goals: [2, 2],
      date: "04.12.22"
    },
    {
      teams: ["LKL", "CFC"],
      goals: [2, 2],
      date: "31.01.23"
    },
    {
      teams: ["HBS", "CHL"],
      goals: [1, 2],
      date: "15.02.23"
    },
    {
      teams: ["BSC2", "BAK"],
      goals: [2, 2],
      date: "22.02.23"
    }
  ],
  16: [
    {
      teams: ["CFC", "BSC2"],
      goals: [1, 1],
      date: "09.12.22"
    },
    {
      teams: ["SVB", "ECB"],
      goals: [0, 1],
      date: "10.12.22"
    },
    {
      teams: ["ZFC", "TBB"],
      goals: [5, 1],
      date: "10.12.22"
    },
    {
      teams: ["CZJ", "LKL"],
      goals: [2, 0],
      date: "10.12.22"
    },
    {
      teams: ["LUC", "BFC"],
      goals: [3, 2],
      date: "10.12.22"
    },
    {
      teams: ["BAK", "VBL"],
      goals: [2, 1],
      date: "25.01.23"
    },
    {
      teams: ["CHL", "ERF"],
      goals: [1, 1],
      date: "25.01.23"
    },
    {
      teams: ["L47", "GFC"],
      goals: [1, 1],
      date: "25.01.23"
    },
    {
      teams: ["AGL", "HBS"],
      goals: [1, 1],
      date: "25.01.23"
    }
  ],
  17: [
    {
      teams: ["BFC", "L47"],
      goals: [3, 2],
      date: "20.01.23"
    },
    {
      teams: ["TBB", "BAK"],
      goals: [0, 0],
      date: "20.01.23"
    },
    {
      teams: ["BSC2", "CZJ"],
      goals: [1, 0],
      date: "22.01.23"
    },
    {
      teams: ["LKL", "SVB"],
      goals: [4, 3],
      date: "14.02.23"
    },
    {
      teams: ["VBL", "CFC"],
      goals: [3, 0],
      date: "15.02.23"
    },
    {
      teams: ["ERF", "AGL"],
      goals: [0, 2],
      date: "21.02.23"
    },
    {
      teams: ["GFC", "ZFC"],
      goals: [3, 2],
      date: "22.02.23"
    },
    {
      teams: ["HBS", "LUC"],
      goals: [4, 0],
      date: "22.02.23"
    },
    {
      teams: ["ECB", "CHL"],
      goals: [2, 0],
      date: "22.02.23"
    }
  ],
  18: [
    {
      teams: ["TBB", "CFC"],
      goals: [0, 1],
      date: "26.01.23"
    },
    {
      teams: ["BFC", "ZFC"],
      goals: [2, 1],
      date: "27.01.23"
    },
    {
      teams: ["BSC2", "LKL"],
      goals: [1, 2],
      date: "27.01.23"
    },
    {
      teams: ["ECB", "AGL"],
      goals: [0, 2],
      date: "28.01.23"
    },
    {
      teams: ["HBS", "L47"],
      goals: [1, 1],
      date: "28.01.23"
    },
    {
      teams: ["GFC", "BAK"],
      goals: [3, 0],
      date: "29.01.23"
    },
    {
      teams: ["VBL", "CZJ"],
      goals: [1, 1],
      date: "29.01.23"
    },
    {
      teams: ["CHL", "SVB"],
      goals: [1, 1],
      date: "29.01.23"
    },
    {
      teams: ["ERF", "LUC"],
      goals: [1, 1],
      date: "28.03.23"
    }
  ],
  19: [
    {
      teams: ["LKL", "VBL"],
      goals: [1, 2],
      date: "03.02.23"
    },
    {
      teams: ["CZJ", "TBB"],
      goals: [3, 0],
      date: "03.02.23"
    },
    {
      teams: ["AGL", "CHL"],
      goals: [4, 0],
      date: "03.02.23"
    },
    {
      teams: ["BAK", "BFC"],
      goals: [0, 2],
      date: "04.02.23"
    },
    {
      teams: ["SVB", "BSC2"],
      goals: [1, 0],
      date: "04.02.23"
    },
    {
      teams: ["CFC", "GFC"],
      goals: [2, 0],
      date: "05.02.23"
    },
    {
      teams: ["LUC", "ECB"],
      goals: [1, 0],
      date: "05.02.23"
    },
    {
      teams: ["L47", "ERF"],
      goals: [3, 4],
      date: "05.02.23"
    },
    {
      teams: ["ZFC", "HBS"],
      goals: [4, 0],
      date: "05.02.23"
    }
  ],
  20: [
    {
      teams: ["BFC", "CFC"],
      goals: [0, 0],
      date: "10.02.23"
    },
    {
      teams: ["CHL", "LUC"],
      goals: [1, 2],
      date: "10.02.23"
    },
    {
      teams: ["HBS", "BAK"],
      goals: [2, 1],
      date: "11.02.23"
    },
    {
      teams: ["GFC", "CZJ"],
      goals: [0, 1],
      date: "12.02.23"
    },
    {
      teams: ["VBL", "BSC2"],
      goals: [2, 3],
      date: "12.02.23"
    },
    {
      teams: ["ERF", "ZFC"],
      goals: [2, 0],
      date: "12.02.23"
    },
    {
      teams: ["ECB", "L47"],
      goals: [5, 0],
      date: "13.02.23"
    },
    {
      teams: ["AGL", "SVB"],
      goals: [1, 2],
      date: "21.03.23"
    },
    {
      teams: ["TBB", "CHL"],
      goals: [0, 2],
      date: "11.04.23"
    }
  ],
  21: [
    {
      teams: ["LKL", "GFC"],
      goals: [3, 1],
      date: "17.02.23"
    },
    {
      teams: ["BAK", "ERF"],
      goals: [0, 2],
      date: "17.02.23"
    },
    {
      teams: ["LUC", "AGL"],
      goals: [0, 1],
      date: "17.02.23"
    },
    {
      teams: ["SVB", "VBL"],
      goals: [0, 2],
      date: "18.02.23"
    },
    {
      teams: ["L47", "CHL"],
      goals: [0, 0],
      date: "18.02.23"
    },
    {
      teams: ["ZFC", "ECB"],
      goals: [1, 1],
      date: "18.02.23"
    },
    {
      teams: ["BSC2", "TBB"],
      goals: [3, 1],
      date: "19.02.23"
    },
    {
      teams: ["CZJ", "BFC"],
      goals: [2, 0],
      date: "19.02.23"
    },
    {
      teams: ["CFC", "HBS"],
      goals: [3, 0],
      date: "19.02.23"
    }
  ],
  22: [
    {
      teams: ["TBB", "VBL"],
      goals: [1, 3],
      date: "24.02.23"
    },
    {
      teams: ["AGL", "L47"],
      goals: [3, 0],
      date: "24.02.23"
    },
    {
      teams: ["ECB", "BAK"],
      goals: [2, 1],
      date: "25.02.23"
    },
    {
      teams: ["GFC", "BSC2"],
      goals: [2, 1],
      date: "25.02.23"
    },
    {
      teams: ["ERF", "CFC"],
      goals: [1, 0],
      date: "25.02.23"
    },
    {
      teams: ["CHL", "ZFC"],
      goals: [3, 0],
      date: "26.02.23"
    },
    {
      teams: ["LUC", "SVB"],
      goals: [3, 1],
      date: "26.02.23"
    },
    {
      teams: ["HBS", "CZJ"],
      goals: [0, 5],
      date: "26.02.23"
    },
    {
      teams: ["BFC", "LKL"],
      goals: [1, 1],
      date: "26.02.23"
    }
  ],
  23: [
    {
      teams: ["CFC", "ECB"],
      goals: [0, 2],
      date: "03.03.23"
    },
    {
      teams: ["BSC2", "BFC"],
      goals: [1, 3],
      date: "03.03.23"
    },
    {
      teams: ["SVB", "TBB"],
      goals: [0, 0],
      date: "03.03.23"
    },
    {
      teams: ["L47", "LUC"],
      goals: [1, 1],
      date: "04.03.23"
    },
    {
      teams: ["VBL", "GFC"],
      goals: [2, 1],
      date: "04.03.23"
    },
    {
      teams: ["CZJ", "ERF"],
      goals: [2, 2],
      date: "04.03.23"
    },
    {
      teams: ["LKL", "HBS"],
      goals: [1, 0],
      date: "05.03.23"
    },
    {
      teams: ["ZFC", "AGL"],
      goals: [0, 2],
      date: "05.03.23"
    },
    {
      teams: ["BAK", "CHL"],
      goals: [1, 2],
      date: "27.03.23"
    }
  ],
  24: [
    {
      teams: ["LUC", "ZFC"],
      goals: [1, 4],
      date: "11.03.23"
    },
    {
      teams: ["ERF", "LKL"],
      goals: [1, 0],
      date: "11.03.23"
    },
    {
      teams: ["CHL", "CFC"],
      goals: [3, 0],
      date: "12.03.23"
    },
    {
      teams: ["GFC", "TBB"],
      goals: [5, 0],
      date: "21.03.23"
    },
    {
      teams: ["BFC", "VBL"],
      goals: [0, 3],
      date: "21.03.23"
    },
    {
      teams: ["L47", "SVB"],
      goals: [0, 1],
      date: "25.03.23"
    },
    {
      teams: ["HBS", "BSC2"],
      goals: [null, null],
      date: "18.04.23"
    },
    {
      teams: ["ECB", "CZJ"],
      goals: [null, null],
      date: "19.04.23"
    },
    {
      teams: ["AGL", "BAK"],
      goals: [null, null],
      date: "19.04.23"
    }
  ],
  25: [
    {
      teams: ["CFC", "AGL"],
      goals: [0, 1],
      date: "17.03.23"
    },
    {
      teams: ["BSC2", "ERF"],
      goals: [0, 1],
      date: "17.03.23"
    },
    {
      teams: ["VBL", "HBS"],
      goals: [2, 2],
      date: "17.03.23"
    },
    {
      teams: ["SVB", "GFC"],
      goals: [1, 2],
      date: "18.03.23"
    },
    {
      teams: ["TBB", "BFC"],
      goals: [0, 3],
      date: "18.03.23"
    },
    {
      teams: ["CZJ", "CHL"],
      goals: [2, 0],
      date: "18.03.23"
    },
    {
      teams: ["BAK", "LUC"],
      goals: [0, 1],
      date: "19.03.23"
    },
    {
      teams: ["ZFC", "L47"],
      goals: [0, 2],
      date: "19.03.23"
    },
    {
      teams: ["LKL", "ECB"],
      goals: [0, 2],
      date: "19.03.23"
    }
  ],
  26: [
    {
      teams: ["HBS", "TBB"],
      goals: [1, 2],
      date: "31.03.23"
    },
    {
      teams: ["AGL", "CZJ"],
      goals: [0, 0],
      date: "31.03.23"
    },
    {
      teams: ["ECB", "BSC2"],
      goals: [1, 2],
      date: "01.04.23"
    },
    {
      teams: ["ERF", "VBL"],
      goals: [0, 1],
      date: "01.04.23"
    },
    {
      teams: ["L47", "BAK"],
      goals: [0, 2],
      date: "01.04.23"
    },
    {
      teams: ["ZFC", "SVB"],
      goals: [0, 3],
      date: "01.04.23"
    },
    {
      teams: ["BFC", "GFC"],
      goals: [5, 0],
      date: "02.04.23"
    },
    {
      teams: ["LUC", "CFC"],
      goals: [0, 0],
      date: "02.04.23"
    },
    {
      teams: ["CHL", "LKL"],
      goals: [0, 0],
      date: "02.04.23"
    }
  ],
  27: [
    {
      teams: ["VBL", "ECB"],
      goals: [1, 2],
      date: "05.04.23"
    },
    {
      teams: ["LKL", "AGL"],
      goals: [2, 0],
      date: "06.04.23"
    },
    {
      teams: ["BSC2", "CHL"],
      goals: [3, 0],
      date: "06.04.23"
    },
    {
      teams: ["SVB", "BFC"],
      goals: [1, 1],
      date: "06.04.23"
    },
    {
      teams: ["BAK", "ZFC"],
      goals: [3, 2],
      date: "07.04.23"
    },
    {
      teams: ["TBB", "ERF"],
      goals: [1, 2],
      date: "07.04.23"
    },
    {
      teams: ["CFC", "L47"],
      goals: [1, 1],
      date: "08.04.23"
    },
    {
      teams: ["GFC", "HBS"],
      goals: [2, 2],
      date: "08.04.23"
    },
    {
      teams: ["CZJ", "LUC"],
      goals: [3, 0],
      date: "09.04.23"
    }
  ],
  28: [
    {
      teams: ["BAK", "SVB"],
      goals: [2, 2],
      date: "14.04.23"
    },
    {
      teams: ["CHL", "VBL"],
      goals: [1, 1],
      date: "14.04.23"
    },
    {
      teams: ["HBS", "BFC"],
      goals: [2, 2],
      date: "14.04.23"
    },
    {
      teams: ["ECB", "TBB"],
      goals: [2, 1],
      date: "15.04.23"
    },
    {
      teams: ["L47", "CZJ"],
      goals: [0, 2],
      date: "15.04.23"
    },
    {
      teams: ["AGL", "BSC2"],
      goals: [2, 3],
      date: "15.04.23"
    },
    {
      teams: ["LUC", "LKL"],
      goals: [null, null],
      date: "16.04.23"
    },
    {
      teams: ["ZFC", "CFC"],
      goals: [null, null],
      date: "16.04.23"
    },
    {
      teams: ["ERF", "GFC"],
      goals: [null, null],
      date: "16.04.23"
    }
  ],
  29: [
    {
      teams: ["LKL", "L47"],
      goals: [null, null],
      date: "21.04.23"
    },
    {
      teams: ["SVB", "HBS"],
      goals: [null, null],
      date: "21.04.23"
    },
    {
      teams: ["TBB", "CHL"],
      goals: [null, null],
      date: "21.04.23"
    },
    {
      teams: ["CFC", "BAK"],
      goals: [null, null],
      date: "22.04.23"
    },
    {
      teams: ["VBL", "AGL"],
      goals: [null, null],
      date: "22.04.23"
    },
    {
      teams: ["CZJ", "ZFC"],
      goals: [null, null],
      date: "22.04.23"
    },
    {
      teams: ["GFC", "ECB"],
      goals: [null, null],
      date: "23.04.23"
    },
    {
      teams: ["BSC2", "LUC"],
      goals: [null, null],
      date: "23.04.23"
    },
    {
      teams: ["BFC", "ERF"],
      goals: [null, null],
      date: "23.04.23"
    }
  ],
  30: [
    {
      teams: ["ZFC", "LKL"],
      goals: [null, null],
      date: "28.04.23"
    },
    {
      teams: ["BAK", "CZJ"],
      goals: [null, null],
      date: "28.04.23"
    },
    {
      teams: ["LUC", "VBL"],
      goals: [null, null],
      date: "28.04.23"
    },
    {
      teams: ["L47", "BSC2"],
      goals: [null, null],
      date: "29.04.23"
    },
    {
      teams: ["ECB", "BFC"],
      goals: [null, null],
      date: "29.04.23"
    },
    {
      teams: ["CHL", "GFC"],
      goals: [null, null],
      date: "30.04.23"
    },
    {
      teams: ["CFC", "SVB"],
      goals: [null, null],
      date: "30.04.23"
    },
    {
      teams: ["ERF", "HBS"],
      goals: [null, null],
      date: "30.04.23"
    },
    {
      teams: ["AGL", "TBB"],
      goals: [null, null],
      date: "30.04.23"
    }
  ],
  31: [
    {
      teams: ["LKL", "BAK"],
      goals: [null, null],
      date: "07.05.23"
    },
    {
      teams: ["BFC", "CHL"],
      goals: [null, null],
      date: "07.05.23"
    },
    {
      teams: ["CZJ", "CFC"],
      goals: [null, null],
      date: "07.05.23"
    },
    {
      teams: ["GFC", "AGL"],
      goals: [null, null],
      date: "07.05.23"
    },
    {
      teams: ["BSC2", "ZFC"],
      goals: [null, null],
      date: "07.05.23"
    },
    {
      teams: ["SVB", "ERF"],
      goals: [null, null],
      date: "07.05.23"
    },
    {
      teams: ["TBB", "LUC"],
      goals: [null, null],
      date: "07.05.23"
    },
    {
      teams: ["HBS", "ECB"],
      goals: [null, null],
      date: "07.05.23"
    },
    {
      teams: ["VBL", "L47"],
      goals: [null, null],
      date: "07.05.23"
    }
  ],
  32: [
    {
      teams: ["BAK", "BSC2"],
      goals: [null, null],
      date: "14.05.23"
    },
    {
      teams: ["CZJ", "SVB"],
      goals: [null, null],
      date: "14.05.23"
    },
    {
      teams: ["CHL", "HBS"],
      goals: [null, null],
      date: "14.05.23"
    },
    {
      teams: ["CFC", "LKL"],
      goals: [null, null],
      date: "14.05.23"
    },
    {
      teams: ["ECB", "ERF"],
      goals: [null, null],
      date: "14.05.23"
    },
    {
      teams: ["LUC", "GFC"],
      goals: [null, null],
      date: "14.05.23"
    },
    {
      teams: ["L47", "TBB"],
      goals: [null, null],
      date: "14.05.23"
    },
    {
      teams: ["AGL", "BFC"],
      goals: [null, null],
      date: "14.05.23"
    },
    {
      teams: ["ZFC", "VBL"],
      goals: [null, null],
      date: "14.05.23"
    }
  ],
  33: [
    {
      teams: ["LKL", "CZJ"],
      goals: [null, null],
      date: "21.05.23"
    },
    {
      teams: ["BFC", "LUC"],
      goals: [null, null],
      date: "21.05.23"
    },
    {
      teams: ["ECB", "SVB"],
      goals: [null, null],
      date: "21.05.23"
    },
    {
      teams: ["GFC", "L47"],
      goals: [null, null],
      date: "21.05.23"
    },
    {
      teams: ["BSC2", "CFC"],
      goals: [null, null],
      date: "21.05.23"
    },
    {
      teams: ["ERF", "CHL"],
      goals: [null, null],
      date: "21.05.23"
    },
    {
      teams: ["TBB", "ZFC"],
      goals: [null, null],
      date: "21.05.23"
    },
    {
      teams: ["HBS", "AGL"],
      goals: [null, null],
      date: "21.05.23"
    },
    {
      teams: ["VBL", "BAK"],
      goals: [null, null],
      date: "21.05.23"
    }
  ],
  34: [
    {
      teams: ["BAK", "TBB"],
      goals: [null, null],
      date: "28.05.23"
    },
    {
      teams: ["CZJ", "BSC2"],
      goals: [null, null],
      date: "28.05.23"
    },
    {
      teams: ["CHL", "ECB"],
      goals: [null, null],
      date: "28.05.23"
    },
    {
      teams: ["CFC", "VBL"],
      goals: [null, null],
      date: "28.05.23"
    },
    {
      teams: ["LUC", "HBS"],
      goals: [null, null],
      date: "28.05.23"
    },
    {
      teams: ["SVB", "LKL"],
      goals: [null, null],
      date: "28.05.23"
    },
    {
      teams: ["L47", "BFC"],
      goals: [null, null],
      date: "28.05.23"
    },
    {
      teams: ["AGL", "ERF"],
      goals: [null, null],
      date: "28.05.23"
    },
    {
      teams: ["ZFC", "GFC"],
      goals: [null, null],
      date: "28.05.23"
    }
  ]
};

const table = makeTable(matches);

const data = {
  matches: matches,
  table: table
};

module.exports = data;
