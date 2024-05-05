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
      goals: [2, 1],
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
    },
    {
      teams: ["CZJ", "ZWI"],
      goals: [2, 5],
      date: "2023-12-19T18:00Z"
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
      goals: [1, 1],
      date: "2023-11-26T11:30Z"
    },
    {
      teams: ["AGL", "CZJ"],
      goals: [0, 0],
      date: "2023-11-26T12:00Z"
    }
  ],
  16: [
    {
      teams: ["CZJ", "ZFC"],
      goals: [1, 0],
      date: "2023-12-02T13:00Z"
    },
    {
      teams: ["BSC2", "ROS2"],
      goals: [1, 0],
      date: "2023-12-20T13:00Z"
    },
    {
      teams: ["LUC", "ECB"],
      goals: [1, 1],
      date: "2024-01-24T18:00Z"
    },
    {
      teams: ["CFC", "EIL"],
      goals: [2, 0],
      date: "2024-01-31T18:00Z"
    },
    {
      teams: ["GFC", "AGL"],
      goals: [1, 2],
      date: "2024-02-06T13:00Z"
    },
    {
      teams: ["BFC", "CHL"],
      goals: [2, 0],
      date: "2024-02-07T18:00Z"
    },
    {
      teams: ["SVB", "ZWI"],
      goals: [3, 1],
      date: "2024-02-20T18:00Z"
    },
    {
      teams: ["VBL", "ERF"],
      goals: [0, 0],
      date: "2024-02-21T18:00Z"
    },
    {
      teams: ["LKL", "BAK"],
      goals: [0, 0],
      date: "2024-03-06T18:00Z"
    }
  ],
  17: [
    {
      teams: ["ERF", "CFC"],
      goals: [7, 2],
      date: "2023-12-08T18:00Z"
    },
    {
      teams: ["ZWI", "LKL"],
      goals: [3, 2],
      date: "2023-12-09T13:00Z"
    },
    {
      teams: ["ZFC", "GFC"],
      goals: [1, 2],
      date: "2023-12-10T12:30Z"
    },
    {
      teams: ["ROS2", "VBL"],
      goals: [0, 2],
      date: "2023-12-12T17:00Z"
    },
    {
      teams: ["CHL", "LUC"],
      goals: [1, 1],
      date: "2024-02-21T18:00Z"
    },
    {
      teams: ["EIL", "CZJ"],
      goals: [1, 1],
      date: "2024-02-27T18:00Z"
    },
    {
      teams: ["BAK", "BFC"],
      goals: [0, 2],
      date: "2024-02-27T18:00Z"
    },
    {
      teams: ["ECB", "BSC2"],
      goals: [3, 0],
      date: "2024-02-27T18:00Z"
    },
    {
      teams: ["AGL", "SVB"],
      goals: [2, 2],
      date: "2024-02-28T18:00Z"
    }
  ],
  18: [
    {
      teams: ["ZWI", "BFC"],
      goals: [0, 1],
      date: "2023-12-15T18:00Z"
    },
    {
      teams: ["EIL", "GFC"],
      goals: [0, 2],
      date: "2023-12-16T12:00Z"
    },
    {
      teams: ["CZJ", "CFC"],
      goals: [0, 1],
      date: "2023-12-16T13:00Z"
    },
    {
      teams: ["ROS2", "ERF"],
      goals: [3, 2],
      date: "2023-12-17T12:00Z"
    },
    {
      teams: ["BAK", "LUC"],
      goals: [2, 1],
      date: "2024-02-06T18:00Z"
    },
    {
      teams: ["ECB", "VBL"],
      goals: [4, 3],
      date: "2024-02-07T18:00Z"
    },
    {
      teams: ["AGL", "LKL"],
      goals: [2, 0],
      date: "2024-02-13T18:00Z"
    },
    {
      teams: ["CHL", "BSC2"],
      goals: [3, 0],
      date: "2024-03-23T12:00Z"
    },
    {
      teams: ["ZFC", "SVB"],
      goals: [0, 0],
      date: "2823-03-27T17:30Z"
    }
  ],
  19: [
    {
      teams: ["CFC", "ROS2"],
      goals: [2, 0],
      date: "2024-01-26T18:00Z"
    },
    {
      teams: ["SVB", "EIL"],
      goals: [1, 0],
      date: "2024-01-27T12:00Z"
    },
    {
      teams: ["ERF", "ECB"],
      goals: [2, 0],
      date: "2024-01-27T13:00Z"
    },
    {
      teams: ["LUC", "ZWI"],
      goals: [0, 1],
      date: "2024-01-28T12:00Z"
    },
    {
      teams: ["BSC2", "BAK"],
      goals: [3, 1],
      date: "2024-01-28T12:00Z"
    },
    {
      teams: ["GFC", "CZJ"],
      goals: [3, 0],
      date: "2024-01-28T12:00Z"
    },
    {
      teams: ["LKL", "ZFC"],
      goals: [4, 1],
      date: "2024-02-28T18:00Z"
    },
    {
      teams: ["VBL", "CHL"],
      goals: [1, 0],
      date: "2024-03-06T18:00Z"
    },
    {
      teams: ["BFC", "AGL"],
      goals: [3, 2],
      date: "2024-03-23T12:00Z"
    }
  ],
  20: [
    {
      teams: ["CHL", "ERF"],
      goals: [1, 1],
      date: "2024-02-02T17:00Z"
    },
    {
      teams: ["BAK", "VBL"],
      goals: [1, 2],
      date: "2024-02-02T18:00Z"
    },
    {
      teams: ["ZWI", "BSC2"],
      goals: [4, 1],
      date: "2024-02-02T18:00Z"
    },
    {
      teams: ["GFC", "CFC"],
      goals: [0, 0],
      date: "2024-02-03T12:00Z"
    },
    {
      teams: ["AGL", "LUC"],
      goals: [3, 2],
      date: "2024-02-03T12:00Z"
    },
    {
      teams: ["EIL", "LKL"],
      goals: [2, 4],
      date: "2024-02-03T12:00Z"
    },
    {
      teams: ["CZJ", "SVB"],
      goals: [1, 1],
      date: "2024-02-03T15:00Z"
    },
    {
      teams: ["ECB", "ROS2"],
      goals: [3, 1],
      date: "2024-02-04T12:00Z"
    },
    {
      teams: ["ZFC", "BFC"],
      goals: [0, 1],
      date: "2024-02-04T12:30Z"
    }
  ],
  21: [
    {
      teams: ["BSC2", "AGL"],
      goals: [0, 2],
      date: "2024-02-09T18:00Z"
    },
    {
      teams: ["ERF", "BAK"],
      goals: [1, 0],
      date: "2024-02-10T12:00Z"
    },
    {
      teams: ["SVB", "GFC"],
      goals: [0, 1],
      date: "2024-02-10T12:00Z"
    },
    {
      teams: ["CFC", "ECB"],
      goals: [1, 4],
      date: "2024-02-10T13:00Z"
    },
    {
      teams: ["BFC", "EIL"],
      goals: [2, 2],
      date: "2024-02-11T12:00Z"
    },
    {
      teams: ["LUC", "ZFC"],
      goals: [1, 0],
      date: "2024-02-11T12:00Z"
    },
    {
      teams: ["ROS2", "CHL"],
      goals: [2, 3],
      date: "2024-02-11T12:00Z"
    },
    {
      teams: ["VBL", "ZWI"],
      goals: [2, 0],
      date: "2024-03-20T18:00Z"
    },
    {
      teams: ["LKL", "CZJ"],
      goals: [2, 0],
      date: "2024-03-26T18:00Z"
    }
  ],
  22: [
    {
      teams: ["EIL", "LUC"],
      goals: [0, 3],
      date: "2024-02-16T18:00Z"
    },
    {
      teams: ["AGL", "VBL"],
      goals: [0, 1],
      date: "2024-02-17T12:00Z"
    },
    {
      teams: ["CZJ", "BFC"],
      goals: [2, 3],
      date: "2024-02-17T13:00Z"
    },
    {
      teams: ["ZWI", "ERF"],
      goals: [5, 0],
      date: "2024-02-17T15:00Z"
    },
    {
      teams: ["GFC", "LKL"],
      goals: [4, 0],
      date: "2024-02-18T12:00Z"
    },
    {
      teams: ["BAK", "ROS2"],
      goals: [2, 1],
      date: "2024-02-18T12:00Z"
    },
    {
      teams: ["ZFC", "BSC2"],
      goals: [2, 2],
      date: "2024-02-18T12:30Z"
    },
    {
      teams: ["SVB", "CFC"],
      goals: [1, 0],
      date: "2024-03-19T18:00Z"
    },
    {
      teams: ["CHL", "ECB"],
      goals: [3, 0],
      date: "2024-03-27T18:00Z"
    }
  ],
  23: [
    {
      teams: ["BSC2", "EIL"],
      goals: [2, 3],
      date: "2024-02-23T18:00Z"
    },
    {
      teams: ["LKL", "SVB"],
      goals: [1, 0],
      date: "2024-02-23T18:00Z"
    },
    {
      teams: ["BFC", "GFC"],
      goals: [0, 0],
      date: "2024-02-23T18:00Z"
    },
    {
      teams: ["ECB", "BAK"],
      goals: [2, 1],
      date: "2024-02-24T12:00Z"
    },
    {
      teams: ["LUC", "CZJ"],
      goals: [0, 3],
      date: "2024-02-24T12:00Z"
    },
    {
      teams: ["ROS2", "ZWI"],
      goals: [0, 1],
      date: "2024-02-24T13:00Z"
    },
    {
      teams: ["ERF", "AGL"],
      goals: [2, 2],
      date: "2024-02-24T15:00Z"
    },
    {
      teams: ["VBL", "ZFC"],
      goals: [0, 0],
      date: "2024-02-25T12:00Z"
    },
    {
      teams: ["CFC", "CHL"],
      goals: [1, 1],
      date: "2024-02-25T12:00Z"
    }
  ],
  24: [
    {
      teams: ["EIL", "VBL"],
      goals: [2, 1],
      date: "2024-03-01T18:00Z"
    },
    {
      teams: ["CZJ", "BSC2"],
      goals: [3, 1],
      date: "2024-03-02T12:00Z"
    },
    {
      teams: ["SVB", "BFC"],
      goals: [1, 1],
      date: "2024-03-02T12:00Z"
    },
    {
      teams: ["AGL", "ROS2"],
      goals: [2, 3],
      date: "2024-03-02T12:00Z"
    },
    {
      teams: ["LKL", "CFC"],
      goals: [1, 1],
      date: "2024-03-02T15:00Z"
    },
    {
      teams: ["GFC", "LUC"],
      goals: [2, 2],
      date: "2024-03-03T12:00Z"
    },
    {
      teams: ["BAK", "CHL"],
      goals: [0, 1],
      date: "2024-03-03T12:00Z"
    },
    {
      teams: ["ZWI", "ECB"],
      goals: [0, 2],
      date: "2024-03-03T12:00Z"
    },
    {
      teams: ["ZFC", "ERF"],
      goals: [4, 1],
      date: "2024-03-03T12:30Z"
    }
  ],
  25: [
    {
      teams: ["ERF", "EIL"],
      goals: [2, 2],
      date: "2024-03-08T18:00Z"
    },
    {
      teams: ["ROS2", "ZFC"],
      goals: [1, 2],
      date: "2024-03-08T18:00Z"
    },
    {
      teams: ["BSC2", "GFC"],
      goals: [0, 1],
      date: "2024-03-08T18:00Z"
    },
    {
      teams: ["ECB", "AGL"],
      goals: [0, 0],
      date: "2024-03-09T12:00Z"
    },
    {
      teams: ["LUC", "SVB"],
      goals: [1, 2],
      date: "2024-03-09T12:00Z"
    },
    {
      teams: ["BFC", "LKL"],
      goals: [4, 0],
      date: "2024-03-09T15:00Z"
    },
    {
      teams: ["CHL", "ZWI"],
      goals: [1, 2],
      date: "2024-03-10T12:00Z"
    },
    {
      teams: ["CFC", "BAK"],
      goals: [2, 0],
      date: "2024-03-10T12:00Z"
    },
    {
      teams: ["VBL", "CZJ"],
      goals: [1, 5],
      date: "2024-03-10T12:00Z"
    }
  ],
  26: [
    {
      teams: ["SVB", "BSC2"],
      goals: [1, 2],
      date: "2024-03-15T18:00Z"
    },
    {
      teams: ["ZWI", "BAK"],
      goals: [2, 0],
      date: "2024-03-15T18:00Z"
    },
    {
      teams: ["AGL", "CHL"],
      goals: [4, 0],
      date: "2024-03-15T18:00Z"
    },
    {
      teams: ["BFC", "CFC"],
      goals: [1, 3],
      date: "2024-03-16T12:00Z"
    },
    {
      teams: ["EIL", "ROS2"],
      goals: [2, 1],
      date: "2024-03-16T12:00Z"
    },
    {
      teams: ["CZJ", "ERF"],
      goals: [3, 1],
      date: "2024-03-16T15:00Z"
    },
    {
      teams: ["GFC", "VBL"],
      goals: [4, 1],
      date: "2024-03-17T12:00Z"
    },
    {
      teams: ["LKL", "LUC"],
      goals: [1, 1],
      date: "2024-03-17T12:00Z"
    },
    {
      teams: ["ZFC", "ECB"],
      goals: [0, 1],
      date: "2024-03-17T12:30Z"
    }
  ],
  27: [
    {
      teams: ["LUC", "BFC"],
      goals: [2, 0],
      date: "2024-03-28T18:00Z"
    },
    {
      teams: ["ERF", "GFC"],
      goals: [1, 1],
      date: "2024-03-28T18:00Z"
    },
    {
      teams: ["BSC2", "LKL"],
      goals: [1, 1],
      date: "2024-03-29T12:00Z"
    },
    {
      teams: ["BAK", "AGL"],
      goals: [1, 2],
      date: "2024-03-30T12:00Z"
    },
    {
      teams: ["ROS2", "CZJ"],
      goals: [1, 3],
      date: "2024-03-30T12:00Z"
    },
    {
      teams: ["VBL", "SVB"],
      goals: [1, 1],
      date: "2024-03-31T11:00Z"
    },
    {
      teams: ["CFC", "ZWI"],
      goals: [2, 0],
      date: "2024-03-31T12:00Z"
    },
    {
      teams: ["ECB", "EIL"],
      goals: [2, 1],
      date: "2024-04-01T11:00Z"
    },
    {
      teams: ["CHL", "ZFC"],
      goals: [2, 1],
      date: "2024-04-01T11:00Z"
    }
  ],
  28: [
    {
      teams: ["CZJ", "ECB"],
      goals: [1, 1],
      date: "2024-04-05T16:00Z"
    },
    {
      teams: ["BFC", "BSC2"],
      goals: [1, 0],
      date: "2024-04-05T17:00Z"
    },
    {
      teams: ["LUC", "CFC"],
      goals: [1, 2],
      date: "2024-04-06T11:00Z"
    },
    {
      teams: ["GFC", "ROS2"],
      goals: [1, 3],
      date: "2024-04-06T11:00Z"
    },
    {
      teams: ["EIL", "CHL"],
      goals: [1, 3],
      date: "2024-04-06T14:00Z"
    },
    {
      teams: ["LKL", "VBL"],
      goals: [1, 2],
      date: "2024-04-07T11:00Z"
    },
    {
      teams: ["AGL", "ZWI"],
      goals: [2, 3],
      date: "2024-04-07T11:00Z"
    },
    {
      teams: ["SVB", "ERF"],
      goals: [3, 1],
      date: "2024-04-07T11:00Z"
    },
    {
      teams: ["ZFC", "BAK"],
      goals: [4, 2],
      date: "2024-04-07T11:30Z"
    }
  ],
  29: [
    {
      teams: ["BAK", "EIL"],
      goals: [0, 2],
      date: "2024-04-12T17:00Z"
    },
    {
      teams: ["ZWI", "ZFC"],
      goals: [1, 1],
      date: "2024-04-12T17:00Z"
    },
    {
      teams: ["ECB", "GFC"],
      goals: [2, 1],
      date: "2024-04-12T17:00Z"
    },
    {
      teams: ["CFC", "AGL"],
      goals: [1, 3],
      date: "2024-04-13T11:00Z"
    },
    {
      teams: ["VBL", "BFC"],
      goals: [3, 1],
      date: "2024-04-13T11:00Z"
    },
    {
      teams: ["ERF", "LKL"],
      goals: [0, 1],
      date: "2024-04-13T12:00Z"
    },
    {
      teams: ["BSC2", "LUC"],
      goals: [1, 0],
      date: "2024-04-14T11:00Z"
    },
    {
      teams: ["ROS2", "SVB"],
      goals: [2, 1],
      date: "2024-04-14T11:00Z"
    },
    {
      teams: ["CHL", "CZJ"],
      goals: [2, 2],
      date: "2024-04-14T11:00Z"
    }
  ],
  30: [
    {
      teams: ["LUC", "VBL"],
      goals: [1, 2],
      date: "2024-04-19T17:00Z"
    },
    {
      teams: ["LKL", "ROS2"],
      goals: [1, 1],
      date: "2024-04-19T17:00Z"
    },
    {
      teams: ["BFC", "ERF"],
      goals: [2, 2],
      date: "2024-04-19T17:00Z"
    },
    {
      teams: ["EIL", "ZWI"],
      goals: [0, 2],
      date: "2024-04-20T11:00Z"
    },
    {
      teams: ["ZFC", "AGL"],
      goals: [2, 2],
      date: "2024-04-20T11:30Z"
    },
    {
      teams: ["GFC", "CHL"],
      goals: [3, 0],
      date: "2024-04-20T14:00Z"
    },
    {
      teams: ["BSC2", "CFC"],
      goals: [0, 5],
      date: "2024-04-21T11:00Z"
    },
    {
      teams: ["CZJ", "BAK"],
      goals: [3, 3],
      date: "2024-04-21T11:00Z"
    },
    {
      teams: ["SVB", "ECB"],
      goals: [0, 3],
      date: "2024-04-21T11:00Z"
    }
  ],
  31: [
    {
      teams: ["AGL", "EIL"],
      goals: [2, 3],
      date: "2024-04-26T17:00Z"
    },
    {
      teams: ["ROS2", "BFC"],
      goals: [3, 2],
      date: "2024-04-26T17:00Z"
    },
    {
      teams: ["CHL", "SVB"],
      goals: [0, 0],
      date: "2024-04-26T17:00Z"
    },
    {
      teams: ["CFC", "ZFC"],
      goals: [1, 2],
      date: "2024-04-27T11:00Z"
    },
    {
      teams: ["ERF", "LUC"],
      goals: [5, 2],
      date: "2024-04-27T11:00Z"
    },
    {
      teams: ["ECB", "LKL"],
      goals: [4, 3],
      date: "2024-04-27T14:00Z"
    },
    {
      teams: ["VBL", "BSC2"],
      goals: [3, 2],
      date: "2024-04-28T11:00Z"
    },
    {
      teams: ["BAK", "GFC"],
      goals: [0, 1],
      date: "2024-04-28T11:00Z"
    },
    {
      teams: ["ZWI", "CZJ"],
      goals: [1, 2],
      date: "2024-04-28T11:00Z"
    }
  ],
  32: [
    {
      teams: ["EIL", "ZFC"],
      goals: [0, 2],
      date: "2024-05-03T17:00Z"
    },
    {
      teams: ["SVB", "BAK"],
      goals: [3, 0],
      date: "2024-05-03T17:00Z"
    },
    {
      teams: ["BSC2", "ERF"],
      goals: [1, 0],
      date: "2024-05-03T17:00Z"
    },
    {
      teams: ["CZJ", "AGL"],
      goals: [2, 2],
      date: "2024-05-04T11:00Z"
    },
    {
      teams: ["BFC", "ECB"],
      goals: [0, 2],
      date: "2024-05-04T14:00Z"
    },
    {
      teams: ["VBL", "CFC"],
      goals: [2, 0],
      date: "2024-05-05T11:00Z"
    },
    {
      teams: ["GFC", "ZWI"],
      goals: [4, 2],
      date: "2024-05-05T11:00Z"
    },
    {
      teams: ["LUC", "ROS2"],
      goals: [2, 2],
      date: "2024-05-05T11:00Z"
    },
    {
      teams: ["LKL", "CHL"],
      goals: [0, 2],
      date: "2024-05-05T14:00Z"
    }
  ],
  33: [
    {
      teams: ["EIL", "CFC"],
      goals: [null, null],
      date: "2024-05-12T11:00Z"
    },
    {
      teams: ["ERF", "VBL"],
      goals: [null, null],
      date: "2024-05-12T11:00Z"
    },
    {
      teams: ["ROS2", "BSC2"],
      goals: [null, null],
      date: "2024-05-12T11:00Z"
    },
    {
      teams: ["ECB", "LUC"],
      goals: [null, null],
      date: "2024-05-12T11:00Z"
    },
    {
      teams: ["CHL", "BFC"],
      goals: [null, null],
      date: "2024-05-12T11:00Z"
    },
    {
      teams: ["BAK", "LKL"],
      goals: [null, null],
      date: "2024-05-12T11:00Z"
    },
    {
      teams: ["ZWI", "SVB"],
      goals: [null, null],
      date: "2024-05-12T11:00Z"
    },
    {
      teams: ["AGL", "GFC"],
      goals: [null, null],
      date: "2024-05-12T11:00Z"
    },
    {
      teams: ["ZFC", "CZJ"],
      goals: [null, null],
      date: "2024-05-12T11:00Z"
    }
  ],
  34: [
    {
      teams: ["CZJ", "EIL"],
      goals: [null, null],
      date: "2024-05-19T11:00Z"
    },
    {
      teams: ["GFC", "ZFC"],
      goals: [null, null],
      date: "2024-05-19T11:00Z"
    },
    {
      teams: ["SVB", "AGL"],
      goals: [null, null],
      date: "2024-05-19T11:00Z"
    },
    {
      teams: ["LKL", "ZWI"],
      goals: [null, null],
      date: "2024-05-19T11:00Z"
    },
    {
      teams: ["BFC", "BAK"],
      goals: [null, null],
      date: "2024-05-19T11:00Z"
    },
    {
      teams: ["LUC", "CHL"],
      goals: [null, null],
      date: "2024-05-19T11:00Z"
    },
    {
      teams: ["BSC2", "ECB"],
      goals: [null, null],
      date: "2024-05-19T11:00Z"
    },
    {
      teams: ["VBL", "ROS2"],
      goals: [null, null],
      date: "2024-05-19T11:00Z"
    },
    {
      teams: ["CFC", "ERF"],
      goals: [null, null],
      date: "2024-05-19T11:00Z"
    }
  ]
};

const table = makeTable(matches);

const data = {
  matches: matches,
  table: table
};

module.exports = data;
