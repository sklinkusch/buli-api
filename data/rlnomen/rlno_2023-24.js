const { makeTable } = require("../helpers");

const matches = {
  1: [
    {
      teams: ["BSC2", "CHL"],
      goals: [3, 0],
      date: "2023-07-28T17:00Z"
    },
    {
      teams: ["LKL", "AGL"],
      goals: [2, 1],
      date: "2023-07-28T17:00Z"
    },
    {
      teams: ["ERF", "ROS2"],
      goals: [2, 0],
      date: "2023-07-28T17:00Z"
    },
    {
      teams: ["BFC", "ZWI"],
      goals: [3, 0],
      date: "2023-07-29T11:00Z"
    },
    {
      teams: ["GFC", "EIL"],
      goals: [3, 1],
      date: "2023-07-29T11:00Z"
    },
    {
      teams: ["CFC", "CZJ"],
      goals: [0, 0],
      date: "2023-07-29T12:05Z"
    },
    {
      teams: ["VBL", "ECB"],
      goals: [2, 1],
      date: "2023-07-30T11:00Z"
    },
    {
      teams: ["LUC", "BAK"],
      goals: [6, 0],
      date: "2023-07-30T11:00Z"
    },
    {
      teams: ["SVB", "ZFC"],
      goals: [2, 1],
      date: "2023-07-30T11:00Z"
    }
  ],
  2: [
    {
      teams: ["EIL", "SVB"],
      goals: [0, 1],
      date: "2023-08-04T17:00Z"
    },
    {
      teams: ["ZWI", "LUC"],
      goals: [2, 0],
      date: "2023-08-04T17:00Z"
    },
    {
      teams: ["ROS2", "CFC"],
      goals: [6, 1],
      date: "2023-08-05T11:00Z"
    },
    {
      teams: ["CZJ", "GFC"],
      goals: [1, 1],
      date: "2023-08-05T11:00Z"
    },
    {
      teams: ["ECB", "ERF"],
      goals: [1, 1],
      date: "2023-08-05T12:05Z"
    },
    {
      teams: ["AGL", "BFC"],
      goals: [3, 1],
      date: "2023-08-06T11:00Z"
    },
    {
      teams: ["CHL", "VBL"],
      goals: [1, 0],
      date: "2023-08-06T11:00Z"
    },
    {
      teams: ["ZFC", "LKL"],
      goals: [3, 2],
      date: "2023-08-06T11:30Z"
    },
    {
      teams: ["BAK", "BSC2"],
      goals: [0, 1],
      date: "2023-08-23T17:00Z"
    }
  ],
  3: [
    {
      teams: ["VBL", "BAK"],
      goals: [0, 0],
      date: "2023-08-15T17:00Z"
    },
    {
      teams: ["BSC2", "ZWI"],
      goals: [4, 3],
      date: "2023-08-15T17:00Z"
    },
    {
      teams: ["LUC", "AGL"],
      goals: [1, 4],
      date: "2023-08-15T17:00Z"
    },
    {
      teams: ["BFC", "ZFC"],
      goals: [1, 1],
      date: "2023-08-15T17:00Z"
    },
    {
      teams: ["CFC", "GFC"],
      goals: [1, 2],
      date: "2023-08-16T17:00Z"
    },
    {
      teams: ["LKL", "EIL"],
      goals: [2, 1],
      date: "2023-08-16T17:00Z"
    },
    {
      teams: ["SVB", "CZJ"],
      goals: [2, 1],
      date: "2023-08-16T17:00Z"
    },
    {
      teams: ["ROS2", "ECB"],
      goals: [2, 3],
      date: "2023-08-16T17:00Z"
    },
    {
      teams: ["ERF", "CHL"],
      goals: [4, 2],
      date: "2023-08-16T18:20Z"
    }
  ],
  4: [
    {
      teams: ["ZFC", "LUC"],
      goals: [1, 2],
      date: "2023-08-18T17:00Z"
    },
    {
      teams: ["AGL", "BSC2"],
      goals: [2, 6],
      date: "2023-08-18T17:00Z"
    },
    {
      teams: ["ZWI", "VBL"],
      goals: [1, 1],
      date: "2023-08-18T17:00Z"
    },
    {
      teams: ["BAK", "ERF"],
      goals: [0, 4],
      date: "2023-08-19T11:00Z"
    },
    {
      teams: ["CHL", "ROS2"],
      goals: [2, 0],
      date: "2023-08-19T11:00Z"
    },
    {
      teams: ["EIL", "BFC"],
      goals: [1, 2],
      date: "2023-08-19T12:05Z"
    },
    {
      teams: ["ECB", "CFC"],
      goals: [2, 0],
      date: "2023-08-20T11:00Z"
    },
    {
      teams: ["GFC", "SVB"],
      goals: [1, 0],
      date: "2023-08-20T11:00Z"
    },
    {
      teams: ["CZJ", "LKL"],
      goals: [2, 3],
      date: "2023-08-20T14:05Z"
    }
  ],
  5: [
    {
      teams: ["VBL", "AGL"],
      goals: [1, 0],
      date: "2023-08-25T17:00Z"
    },
    {
      teams: ["BFC", "CZJ"],
      goals: [2, 1],
      date: "2023-08-25T17:00Z"
    },
    {
      teams: ["LUC", "EIL"],
      goals: [3, 3],
      date: "2023-08-26T11:00Z"
    },
    {
      teams: ["LKL", "GFC"],
      goals: [0, 1],
      date: "2023-08-26T11:00Z"
    },
    {
      teams: ["ECB", "CHL"],
      goals: [1, 1],
      date: "2023-08-26T11:00Z"
    },
    {
      teams: ["BSC2", "ZFC"],
      goals: [1, 1],
      date: "2023-08-27T11:00Z"
    },
    {
      teams: ["ROS2", "BAK"],
      goals: [1, 1],
      date: "2023-08-27T11:00Z"
    },
    {
      teams: ["ERF", "ZWI"],
      goals: [4, 1],
      date: "2023-08-27T14:05Z"
    },
    {
      teams: ["CFC", "SVB"],
      goals: [0, 0],
      date: "2023-08-29T17:00Z"
    }
  ],
  6: [
    {
      teams: ["AGL", "ERF"],
      goals: [1, 1],
      date: "2023-08-31T17:00Z"
    },
    {
      teams: ["EIL", "BSC2"],
      goals: [3, 2],
      date: "2023-09-01T17:00Z"
    },
    {
      teams: ["BAK", "ECB"],
      goals: [0, 4],
      date: "2023-09-01T17:00Z"
    },
    {
      teams: ["CZJ", "LUC"],
      goals: [3, 0],
      date: "2023-09-02T12:00Z"
    },
    {
      teams: ["CHL", "CFC"],
      goals: [1, 0],
      date: "2023-09-02T14:00Z"
    },
    {
      teams: ["ZWI", "ROS2"],
      goals: [3, 2],
      date: "2023-09-03T11:00Z"
    },
    {
      teams: ["GFC", "BFC"],
      goals: [0, 0],
      date: "2023-09-03T11:00Z"
    },
    {
      teams: ["ZFC", "VBL"],
      goals: [0, 1],
      date: "2023-09-03T11:30Z"
    },
    {
      teams: ["SVB", "LKL"],
      goals: [4, 1],
      date: "2023-09-03T14:05Z"
    }
  ],
  7: [
    {
      teams: ["CFC", "LKL"],
      goals: [1, 0],
      date: "2023-09-15T17:00Z"
    },
    {
      teams: ["LUC", "GFC"],
      goals: [1, 5],
      date: "2023-09-15T17:00Z"
    },
    {
      teams: ["BFC", "SVB"],
      goals: [3, 0],
      date: "2023-09-15T17:00Z"
    },
    {
      teams: ["BSC2", "CZJ"],
      goals: [1, 1],
      date: "2023-09-16T11:00Z"
    },
    {
      teams: ["ERF", "ZFC"],
      goals: [1, 2],
      date: "2023-09-16T11:00Z"
    },
    {
      teams: ["VBL", "EIL"],
      goals: [0, 0],
      date: "2023-09-17T11:00Z"
    },
    {
      teams: ["CHL", "BAK"],
      goals: [0, 0],
      date: "2023-09-17T11:00Z"
    },
    {
      teams: ["ROS2", "AGL"],
      goals: [1, 2],
      date: "2023-09-17T11:00Z"
    },
    {
      teams: ["ECB", "ZWI"],
      goals: [3, 1],
      date: "2023-09-17T14:00Z"
    }
  ],
  8: [
    {
      teams: ["BAK", "CFC"],
      goals: [0, 1],
      date: "2023-09-22T17:00Z"
    },
    {
      teams: ["SVB", "LUC"],
      goals: [1, 2],
      date: "2023-09-22T17:00Z"
    },
    {
      teams: ["ZWI", "CHL"],
      goals: [0, 0],
      date: "2023-09-22T17:30Z"
    },
    {
      teams: ["EIL", "ERF"],
      goals: [0, 0],
      date: "2023-09-23T11:00Z"
    },
    {
      teams: ["CZJ", "VBL"],
      goals: [1, 2],
      date: "2023-09-23T11:00Z"
    },
    {
      teams: ["LKL", "BFC"],
      goals: [1, 1],
      date: "2023-09-23T12:05Z"
    },
    {
      teams: ["AGL", "ECB"],
      goals: [1, 2],
      date: "2023-09-24T11:00Z"
    },
    {
      teams: ["GFC", "BSC2"],
      goals: [5, 2],
      date: "2023-09-24T11:00Z"
    },
    {
      teams: ["ZFC", "ROS2"],
      goals: [4, 2],
      date: "2023-09-24T11:30Z"
    }
  ],
  9: [
    {
      teams: ["BSC2", "SVB"],
      goals: [1, 2],
      date: "2023-09-29T17:00Z"
    },
    {
      teams: ["LUC", "LKL"],
      goals: [2, 0],
      date: "2023-09-29T17:00Z"
    },
    {
      teams: ["CHL", "AGL"],
      goals: [0, 3],
      date: "2023-09-29T17:00Z"
    },
    {
      teams: ["VBL", "GFC"],
      goals: [2, 2],
      date: "2023-09-30T11:00Z"
    },
    {
      teams: ["ECB", "ZFC"],
      goals: [2, 1],
      date: "2023-09-30T11:00Z"
    },
    {
      teams: ["CFC", "BFC"],
      goals: [0, 4],
      date: "2023-09-30T12:05Z"
    },
    {
      teams: ["BAK", "ZWI"],
      goals: [2, 1],
      date: "2023-10-01T11:00Z"
    },
    {
      teams: ["ROS2", "EIL"],
      goals: [2, 2],
      date: "2023-10-01T11:00Z"
    },
    {
      teams: ["ERF", "CZJ"],
      goals: [1, 1],
      date: "2023-10-01T14:00Z"
    }
  ],
  10: [
    {
      teams: ["EIL", "ECB"],
      goals: [1, 3],
      date: "2023-10-06T17:00Z"
    },
    {
      teams: ["LKL", "BSC2"],
      goals: [3, 3],
      date: "2023-10-06T17:00Z"
    },
    {
      teams: ["SVB", "VBL"],
      goals: [3, 0],
      date: "2023-10-06T17:00Z"
    },
    {
      teams: ["AGL", "BAK"],
      goals: [3, 1],
      date: "2023-10-07T11:00Z"
    },
    {
      teams: ["GFC", "ERF"],
      goals: [1, 1],
      date: "2023-10-07T11:00Z"
    },
    {
      teams: ["CZJ", "ROS2"],
      goals: [5, 1],
      date: "2023-10-07T11:00Z"
    },
    {
      teams: ["BFC", "LUC"],
      goals: [4, 0],
      date: "2023-10-08T11:00Z"
    },
    {
      teams: ["ZFC", "CHL"],
      goals: [2, 4],
      date: "2023-10-08T11:30Z"
    },
    {
      teams: ["ZWI", "CFC"],
      goals: [1, 2],
      date: "2023-10-08T12:00Z"
    }
  ],
  11: [
    {
      teams: ["ROS2", "GFC"],
      goals: [0, 1],
      date: "2023-10-19T17:00Z"
    },
    {
      teams: ["CFC", "LUC"],
      goals: [1, 2],
      date: "2023-10-20T17:00Z"
    },
    {
      teams: ["BSC2", "BFC"],
      goals: [1, 2],
      date: "2023-10-20T17:00Z"
    },
    {
      teams: ["ERF", "SVB"],
      goals: [0, 1],
      date: "2023-10-20T17:00Z"
    },
    {
      teams: ["BAK", "ZFC"],
      goals: [1, 1],
      date: "2023-10-21T11:00Z"
    },
    {
      teams: ["ECB", "CZJ"],
      goals: [0, 2],
      date: "2023-10-21T14:00Z"
    },
    {
      teams: ["VBL", "LKL"],
      goals: [5, 0],
      date: "2023-10-22T11:00Z"
    },
    {
      teams: ["ZWI", "AGL"],
      goals: [0, 5],
      date: "2023-10-22T11:00Z"
    },
    {
      teams: ["CHL", "EIL"],
      goals: [1, 0],
      date: "2023-10-22T14:00Z"
    }
  ],
  12: [
    {
      teams: ["BFC", "VBL"],
      goals: [3, 3],
      date: "2023-10-27T17:00Z"
    },
    {
      teams: ["EIL", "BAK"],
      goals: [2, 2],
      date: "2023-10-28T11:00Z"
    },
    {
      teams: ["LUC", "BSC2"],
      goals: [2, 0],
      date: "2023-10-28T11:00Z"
    },
    {
      teams: ["SVB", "ROS2"],
      goals: [1, 0],
      date: "2023-10-29T12:00Z"
    },
    {
      teams: ["GFC", "ECB"],
      goals: [1, 1],
      date: "2023-10-29T12:00Z"
    },
    {
      teams: ["CZJ", "CHL"],
      goals: [1, 0],
      date: "2023-10-29T12:00Z"
    },
    {
      teams: ["LKL", "ERF"],
      goals: [1, 0],
      date: "2023-10-29T15:00Z"
    },
    {
      teams: ["ZFC", "ZWI"],
      goals: [1, 0],
      date: "2023-10-31T12:30Z"
    },
    {
      teams: ["AGL", "CFC"],
      goals: [null, null],
      date: "2023-11-21T18:00Z"
    }
  ],
  13: [
    {
      teams: ["VBL", "LUC"],
      goals: [2, 0],
      date: "2023-11-03T18:00Z"
    },
    {
      teams: ["BAK", "CZJ"],
      goals: [0, 1],
      date: "2023-11-03T18:00Z"
    },
    {
      teams: ["AGL", "ZFC"],
      goals: [2, 3],
      date: "2023-11-04T12:00Z"
    },
    {
      teams: ["CHL", "GFC"],
      goals: [0, 0],
      date: "2023-11-04T12:00Z"
    },
    {
      teams: ["ERF", "BFC"],
      goals: [3, 1],
      date: "2023-11-04T13:00Z"
    },
    {
      teams: ["CFC", "BSC2"],
      goals: [4, 1],
      date: "2023-11-05T12:00Z"
    },
    {
      teams: ["ECB", "SVB"],
      goals: [4, 0],
      date: "2023-11-05T12:00Z"
    },
    {
      teams: ["ZWI", "EIL"],
      goals: [2, 2],
      date: "2023-11-05T15:00Z"
    },
    {
      teams: ["ROS2", "LKL"],
      goals: [1, 1],
      date: "2023-11-08T18:00Z"
    }
  ],
  14: [
    {
      teams: ["EIL", "AGL"],
      goals: [1, 0],
      date: "2023-11-10T18:00Z"
    },
    {
      teams: ["BSC2", "VBL"],
      goals: [0, 1],
      date: "2023-11-10T18:00Z"
    },
    {
      teams: ["SVB", "CHL"],
      goals: [2, 0],
      date: "2023-11-10T18:00Z"
    },
    {
      teams: ["GFC", "BAK"],
      goals: [5, 0],
      date: "2023-11-11T12:00Z"
    },
    {
      teams: ["CZJ", "ZWI"],
      goals: [null, null],
      date: "2023-11-11T12:00Z"
    },
    {
      teams: ["LKL", "ECB"],
      goals: [2, 2],
      date: "2023-11-11T15:00Z"
    },
    {
      teams: ["LUC", "ERF"],
      goals: [4, 0],
      date: "2023-11-12T12:00Z"
    },
    {
      teams: ["BFC", "ROS2"],
      goals: [0, 0],
      date: "2023-11-12T12:00Z"
    },
    {
      teams: ["ZFC", "CFC"],
      goals: [1, 0],
      date: "2023-11-12T12:30Z"
    }
  ],
  15: [
    {
      teams: ["ROS2", "LUC"],
      goals: [1, 0],
      date: "2023-10-14T11:00Z"
    },
    {
      teams: ["ZFC", "EIL"],
      goals: [0, 1],
      date: "2023-11-24T18:00Z"
    },
    {
      teams: ["ZWI", "GFC"],
      goals: [2, 2],
      date: "2023-11-24T18:00Z"
    },
    {
      teams: ["BAK", "SVB"],
      goals: [3, 2],
      date: "2023-11-24T18:00Z"
    },
    {
      teams: ["CFC", "VBL"],
      goals: [2, 1],
      date: "2023-11-25T12:00Z"
    },
    {
      teams: ["ERF", "BSC2"],
      goals: [0, 2],
      date: "2023-11-25T13:00Z"
    },
    {
      teams: ["ECB", "BFC"],
      goals: [0, 1],
      date: "2023-11-25T15:00Z"
    },
    {
      teams: ["CHL", "LKL"],
      goals: [null, null],
      date: "2023-11-26T11:30Z"
    },
    {
      teams: ["AGL", "CZJ"],
      goals: [null, null],
      date: "2023-11-26T12:00Z"
    }
  ]
  /*16: [
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
      teams: ["TBB", "LKL"],
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
      goals: [0, 0],
      date: "18.04.23"
    },
    {
      teams: ["ECB", "CZJ"],
      goals: [1, 0],
      date: "19.04.23"
    },
    {
      teams: ["AGL", "BAK"],
      goals: [0, 1],
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
      goals: [2, 1],
      date: "16.04.23"
    },
    {
      teams: ["ZFC", "CFC"],
      goals: [0, 3],
      date: "16.04.23"
    },
    {
      teams: ["ERF", "GFC"],
      goals: [4, 0],
      date: "16.04.23"
    }
  ],
  29: [
    {
      teams: ["LKL", "L47"],
      goals: [4, 1],
      date: "21.04.23"
    },
    {
      teams: ["TBB", "CHL"],
      goals: [0, 2],
      date: "21.04.23"
    },
    {
      teams: ["CFC", "BAK"],
      goals: [3, 0],
      date: "22.04.23"
    },
    {
      teams: ["CZJ", "ZFC"],
      goals: [2, 2],
      date: "22.04.23"
    },
    {
      teams: ["GFC", "ECB"],
      goals: [1, 2],
      date: "23.04.23"
    },
    {
      teams: ["BSC2", "LUC"],
      goals: [2, 0],
      date: "23.04.23"
    },
    {
      teams: ["BFC", "ERF"],
      goals: [2, 1],
      date: "23.04.23"
    },
    {
      teams: ["VBL", "AGL"],
      goals: [0, 0],
      date: "24.04.23"
    },
    {
      teams: ["SVB", "HBS"],
      goals: [2, 0],
      date: "10.05.23"
    }
  ],
  30: [
    {
      teams: ["ZFC", "LKL"],
      goals: [1, 3],
      date: "28.04.23"
    },
    {
      teams: ["BAK", "CZJ"],
      goals: [1, 8],
      date: "28.04.23"
    },
    {
      teams: ["LUC", "VBL"],
      goals: [2, 3],
      date: "28.04.23"
    },
    {
      teams: ["L47", "BSC2"],
      goals: [2, 2],
      date: "29.04.23"
    },
    {
      teams: ["CHL", "GFC"],
      goals: [3, 1],
      date: "30.04.23"
    },
    {
      teams: ["CFC", "SVB"],
      goals: [1, 1],
      date: "30.04.23"
    },
    {
      teams: ["AGL", "TBB"],
      goals: [5, 2],
      date: "30.04.23"
    },
    {
      teams: ["ERF", "HBS"],
      goals: [2, 0],
      date: "30.04.23"
    },
    {
      teams: ["ECB", "BFC"],
      goals: [1, 1],
      date: "02.05.23"
    }
  ],
  31: [
    {
      teams: ["LKL", "BAK"],
      goals: [1, 0],
      date: "05.05.23"
    },
    {
      teams: ["BSC2", "ZFC"],
      goals: [3, 0],
      date: "05.05.23"
    },
    {
      teams: ["SVB", "ERF"],
      goals: [2, 0],
      date: "05.05.23"
    },
    {
      teams: ["GFC", "AGL"],
      goals: [1, 2],
      date: "06.05.23"
    },
    {
      teams: ["TBB", "LUC"],
      goals: [1, 3],
      date: "06.05.23"
    },
    {
      teams: ["BFC", "CHL"],
      goals: [3, 1],
      date: "07.05.23"
    },
    {
      teams: ["VBL", "L47"],
      goals: [2, 4],
      date: "07.05.23"
    },
    {
      teams: ["CZJ", "CFC"],
      goals: [1, 0],
      date: "08.05.23"
    },
    {
      teams: ["HBS", "ECB"],
      goals: [1, 3],
      date: "08.05.23"
    }
  ],
  32: [
    {
      teams: ["CFC", "LKL"],
      goals: [1, 1],
      date: "12.05.23"
    },
    {
      teams: ["L47", "TBB"],
      goals: [2, 2],
      date: "12.05.23"
    },
    {
      teams: ["AGL", "BFC"],
      goals: [2, 3],
      date: "12.05.23"
    },
    {
      teams: ["CHL", "HBS"],
      goals: [2, 2],
      date: "13.05.23"
    },
    {
      teams: ["ECB", "ERF"],
      goals: [1, 1],
      date: "13.05.23"
    },
    {
      teams: ["CZJ", "SVB"],
      goals: [0, 0],
      date: "13.05.23"
    },
    {
      teams: ["BAK", "BSC2"],
      goals: [0, 5],
      date: "14.05.23"
    },
    {
      teams: ["LUC", "GFC"],
      goals: [6, 2],
      date: "14.05.23"
    },
    {
      teams: ["ZFC", "VBL"],
      goals: [2, 1],
      date: "14.05.23"
    }
  ],
  33: [
    {
      teams: ["LKL", "CZJ"],
      goals: [2, 4],
      date: "2023-05-21T11:00Z"
    },
    {
      teams: ["BFC", "LUC"],
      goals: [1, 3],
      date: "2023-05-21T11:00Z"
    },
    {
      teams: ["ECB", "SVB"],
      goals: [1, 0],
      date: "2023-05-21T11:00Z"
    },
    {
      teams: ["GFC", "L47"],
      goals: [2, 1],
      date: "2023-05-21T11:00Z"
    },
    {
      teams: ["BSC2", "CFC"],
      goals: [3, 1],
      date: "2023-05-21T11:00Z"
    },
    {
      teams: ["ERF", "CHL"],
      goals: [2, 2],
      date: "2023-05-21T11:00Z"
    },
    {
      teams: ["TBB", "ZFC"],
      goals: [0, 7],
      date: "2023-05-21T11:00Z"
    },
    {
      teams: ["HBS", "AGL"],
      goals: [0, 4],
      date: "2023-05-21T11:00Z"
    },
    {
      teams: ["VBL", "BAK"],
      goals: [1, 3],
      date: "2023-05-21T11:00Z"
    }
  ],
  34: [
    {
      teams: ["BAK", "TBB"],
      goals: [4, 3],
      date: "2023-05-28T11:00Z"
    },
    {
      teams: ["CZJ", "BSC2"],
      goals: [1, 1],
      date: "2023-05-28T11:00Z"
    },
    {
      teams: ["CHL", "ECB"],
      goals: [0, 0],
      date: "2023-05-28T11:00Z"
    },
    {
      teams: ["CFC", "VBL"],
      goals: [1, 0],
      date: "2023-05-28T11:00Z"
    },
    {
      teams: ["LUC", "HBS"],
      goals: [2, 0],
      date: "2023-05-28T11:00Z"
    },
    {
      teams: ["SVB", "LKL"],
      goals: [0, 3],
      date: "2023-05-28T11:00Z"
    },
    {
      teams: ["L47", "BFC"],
      goals: [3, 3],
      date: "2023-05-28T11:00Z"
    },
    {
      teams: ["AGL", "ERF"],
      goals: [1, 0],
      date: "2023-05-28T11:00Z"
    },
    {
      teams: ["ZFC", "GFC"],
      goals: [4, 0],
      date: "2023-05-28T11:00Z"
    }
  ]*/
};

const table = makeTable(matches);

const data = {
  matches: matches,
  table: table
};

module.exports = data;
