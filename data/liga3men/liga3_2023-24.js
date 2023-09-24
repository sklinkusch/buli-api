const { makeTable } = require("../helpers");

const matches = {
  1: [
    {
      teams: ["HFC", "RWE"],
      goals: [2, 1],
      date: "2023-08-04T16:45Z"
    },
    {
      teams: ["VKÖ", "SCV"],
      goals: [3, 1],
      date: "2023-08-05T12:00Z"
    },
    {
      teams: ["LÜB", "SVS"],
      goals: [0, 0],
      date: "2023-08-05T12:00Z"
    },
    {
      teams: ["MÜN", "WMA"],
      goals: [2, 0],
      date: "2023-08-05T12:00Z"
    },
    {
      teams: ["PMS", "BVB2"],
      goals: [0, 0],
      date: "2023-08-05T12:00Z"
    },
    {
      teams: ["JRE", "UHA"],
      goals: [1, 1],
      date: "2023-08-05T12:00Z"
    },
    {
      teams: ["DRE", "BIE"],
      goals: [3, 1],
      date: "2023-08-05T14:15Z"
    },
    {
      teams: ["ULM", "FCS"],
      goals: [1, 1],
      date: "2023-08-06T11:30Z"
    },
    {
      teams: ["SCF2", "DUI"],
      goals: [1, 1],
      date: "2023-08-06T14:30Z"
    },
    {
      teams: ["AUE", "FCI"],
      goals: [1, 0],
      date: "2023-08-06T17:30Z"
    }
  ],
  2: [
    {
      teams: ["SVS", "DRE"],
      goals: [1, 0],
      date: "2023-08-18T17:00Z"
    },
    {
      teams: ["FCS", "VKÖ"],
      goals: [1, 2],
      date: "2023-08-19T12:00Z"
    },
    {
      teams: ["FCI", "HFC"],
      goals: [4, 0],
      date: "2023-08-19T12:00Z"
    },
    {
      teams: ["DUI", "MÜN"],
      goals: [0, 3],
      date: "2023-08-19T12:00Z"
    },
    {
      teams: ["BIE", "PMS"],
      goals: [4, 0],
      date: "2023-08-19T12:00Z"
    },
    {
      teams: ["UHA", "ULM"],
      goals: [3, 2],
      date: "2023-08-19T12:00Z"
    },
    {
      teams: ["WMA", "LÜB"],
      goals: [2, 2],
      date: "2023-08-19T14:30Z"
    },
    {
      teams: ["BVB2", "SCF2"],
      goals: [1, 0],
      date: "2023-08-20T11:30Z"
    },
    {
      teams: ["SCV", "JRE"],
      goals: [1, 2],
      date: "2023-08-20T14:30Z"
    },
    {
      teams: ["RWE", "AUE"],
      goals: [1, 1],
      date: "2023-08-20T17:30Z"
    }
  ],
  3: [
    {
      teams: ["PMS", "FCI"],
      goals: [3, 1],
      date: "2023-08-22T17:00Z"
    },
    {
      teams: ["DRE", "WMA"],
      goals: [2, 1],
      date: "2023-08-22T17:00Z"
    },
    {
      teams: ["ULM", "BIE"],
      goals: [1, 0],
      date: "2023-08-22T17:00Z"
    },
    {
      teams: ["HFC", "DUI"],
      goals: [1, 1],
      date: "2023-08-22T17:00Z"
    },
    {
      teams: ["MÜN", "LÜB"],
      goals: [1, 2],
      date: "2023-08-22T17:00Z"
    },
    {
      teams: ["VKÖ", "RWE"],
      goals: [0, 0],
      date: "2023-08-23T17:00Z"
    },
    {
      teams: ["FCS", "SCV"],
      goals: [4, 3],
      date: "2023-08-23T17:00Z"
    },
    {
      teams: ["AUE", "SVS"],
      goals: [2, 1],
      date: "2023-08-23T17:00Z"
    },
    {
      teams: ["SCF2", "UHA"],
      goals: [0, 0],
      date: "2023-08-23T17:00Z"
    },
    {
      teams: ["JRE", "BVB2"],
      goals: [0, 0],
      date: "2023-08-23T17:00Z"
    }
  ],
  4: [
    {
      teams: ["DUI", "ULM"],
      goals: [1, 1],
      date: "2023-08-25T17:00Z"
    },
    {
      teams: ["FCI", "FCS"],
      goals: [2, 2],
      date: "2023-08-26T12:00Z"
    },
    {
      teams: ["SCV", "SCF2"],
      goals: [3, 2],
      date: "2023-08-26T12:00Z"
    },
    {
      teams: ["BVB2", "DRE"],
      goals: [0, 2],
      date: "2023-08-26T12:00Z"
    },
    {
      teams: ["UHA", "VKÖ"],
      goals: [2, 1],
      date: "2023-08-26T12:00Z"
    },
    {
      teams: ["LÜB", "AUE"],
      goals: [1, 1],
      date: "2023-08-26T12:00Z"
    },
    {
      teams: ["SVS", "MÜN"],
      goals: [3, 0],
      date: "2023-08-26T14:30Z"
    },
    {
      teams: ["BIE", "JRE"],
      goals: [1, 1],
      date: "2023-08-27T11:30Z"
    },
    {
      teams: ["WMA", "HFC"],
      goals: [3, 2],
      date: "2023-08-27T14:30Z"
    },
    {
      teams: ["RWE", "PMS"],
      goals: [1, 0],
      date: "2023-08-27T17:30Z"
    }
  ],
  5: [
    {
      teams: ["FCS", "BVB2"],
      goals: [2, 0],
      date: "2023-09-01T17:00Z"
    },
    {
      teams: ["SCF2", "RWE"],
      goals: [0, 2],
      date: "2023-09-02T12:00Z"
    },
    {
      teams: ["PMS", "WMA"],
      goals: [1, 3],
      date: "2023-09-02T12:00Z"
    },
    {
      teams: ["SCV", "UHA"],
      goals: [0, 0],
      date: "2023-09-02T12:00Z"
    },
    {
      teams: ["ULM", "LÜB"],
      goals: [2, 0],
      date: "2023-09-02T12:00Z"
    },
    {
      teams: ["DRE", "FCI"],
      goals: [1, 0],
      date: "2023-09-02T12:00Z"
    },
    {
      teams: ["MÜN", "AUE"],
      goals: [1, 2],
      date: "2023-09-02T14:30Z"
    },
    {
      teams: ["HFC", "SVS"],
      goals: [4, 1],
      date: "2023-09-03T11:30Z"
    },
    {
      teams: ["JRE", "DUI"],
      goals: [2, 1],
      date: "2023-09-03T14:30Z"
    },
    {
      teams: ["VKÖ", "BIE"],
      goals: [1, 1],
      date: "2023-09-03T17:30Z"
    }
  ],
  6: [
    {
      teams: ["DUI", "SCV"],
      goals: [2, 3],
      date: "2023-09-15T17:00Z"
    },
    {
      teams: ["RWE", "JRE"],
      goals: [0, 0],
      date: "2023-09-16T12:00Z"
    },
    {
      teams: ["BIE", "SCF2"],
      goals: [0, 2],
      date: "2023-09-16T12:00Z"
    },
    {
      teams: ["LÜB", "DRE"],
      goals: [0, 1],
      date: "2023-09-16T12:00Z"
    },
    {
      teams: ["BVB2", "VKÖ"],
      goals: [2, 1],
      date: "2023-09-16T12:00Z"
    },
    {
      teams: ["SVS", "PMS"],
      goals: [0, 2],
      date: "2023-09-16T12:00Z"
    },
    {
      teams: ["FCI", "MÜN"],
      goals: [2, 1],
      date: "2023-09-16T14:30Z"
    },
    {
      teams: ["AUE", "HFC"],
      goals: [3, 1],
      date: "2023-09-17T11:30Z"
    },
    {
      teams: ["WMA", "ULM"],
      goals: [0, 2],
      date: "2023-09-17T14:30Z"
    },
    {
      teams: ["UHA", "FCS"],
      goals: [0, 0],
      date: "2023-09-17T17:30Z"
    }
  ],
  7: [
    {
      teams: ["UHA", "BIE"],
      goals: [1, 2],
      date: "2023-09-22T17:00Z"
    },
    {
      teams: ["VKÖ", "DUI"],
      goals: [2, 0],
      date: "2023-09-23T12:00Z"
    },
    {
      teams: ["SCV", "BVB2"],
      goals: [2, 3],
      date: "2023-09-23T12:00Z"
    },
    {
      teams: ["FCS", "WMA"],
      goals: [1, 1],
      date: "2023-09-23T12:00Z"
    },
    {
      teams: ["PMS", "LÜB"],
      goals: [1, 1],
      date: "2023-09-23T12:00Z"
    },
    {
      teams: ["JRE", "SVS"],
      goals: [1, 2],
      date: "2023-09-23T12:00Z"
    },
    {
      teams: ["HFC", "MÜN"],
      goals: [0, 2],
      date: "2023-09-23T14:30Z"
    },
    {
      teams: ["ULM", "RWE"],
      goals: [2, 1],
      date: "2023-09-24T11:30Z"
    },
    {
      teams: ["SCF2", "FCI"],
      goals: [1, 4],
      date: "2023-09-24T14:30Z"
    },
    {
      teams: ["DRE", "AUE"],
      goals: [2, 1],
      date: "2023-09-24T17:30Z"
    }
  ],
  8: [
    {
      teams: ["BIE", "FCS"],
      goals: [null, null],
      date: "2023-09-29T17:00Z"
    },
    {
      teams: ["SVS", "VKÖ"],
      goals: [null, null],
      date: "2023-09-30T12:00Z"
    },
    {
      teams: ["FCI", "ULM"],
      goals: [null, null],
      date: "2023-09-30T12:00Z"
    },
    {
      teams: ["WMA", "SCF2"],
      goals: [null, null],
      date: "2023-09-30T12:00Z"
    },
    {
      teams: ["MÜN", "SCV"],
      goals: [null, null],
      date: "2023-09-30T12:00Z"
    },
    {
      teams: ["DUI", "PMS"],
      goals: [null, null],
      date: "2023-09-30T12:00Z"
    },
    {
      teams: ["LÜB", "HFC"],
      goals: [null, null],
      date: "2023-09-30T14:30Z"
    },
    {
      teams: ["RWE", "DRE"],
      goals: [null, null],
      date: "2023-10-01T11:30Z"
    },
    {
      teams: ["BVB2", "UHA"],
      goals: [null, null],
      date: "2023-10-01T14:30Z"
    },
    {
      teams: ["AUE", "JRE"],
      goals: [null, null],
      date: "2023-10-01T17:30Z"
    }
  ]
  /*9: [
    {
      teams: ["", ""],
      goals: [null, null],
      date: ""
    },
    {
      teams: ["", ""],
      goals: [null, null],
      date: ""
    },
    {
      teams: ["", ""],
      goals: [null, null],
      date: ""
    },
    {
      teams: ["", ""],
      goals: [null, null],
      date: ""
    },
    {
      teams: ["", ""],
      goals: [null, null],
      date: ""
    },
    {
      teams: ["", ""],
      goals: [null, null],
      date: ""
    },
    {
      teams: ["", ""],
      goals: [null, null],
      date: ""
    },
    {
      teams: ["", ""],
      goals: [null, null],
      date: ""
    },
    {
      teams: ["", ""],
      goals: [null, null],
      date: ""
    },
    {
      teams: ["", ""],
      goals: [null, null],
      date: ""
    }
  ],
  10: [
    {
      teams: ["", ""],
      goals: [null, null],
      date: ""
    },
    {
      teams: ["", ""],
      goals: [null, null],
      date: ""
    },
    {
      teams: ["", ""],
      goals: [null, null],
      date: ""
    },
    {
      teams: ["", ""],
      goals: [null, null],
      date: ""
    },
    {
      teams: ["", ""],
      goals: [null, null],
      date: ""
    },
    {
      teams: ["", ""],
      goals: [null, null],
      date: ""
    },
    {
      teams: ["", ""],
      goals: [null, null],
      date: ""
    },
    {
      teams: ["", ""],
      goals: [null, null],
      date: ""
    },
    {
      teams: ["", ""],
      goals: [null, null],
      date: ""
    },
    {
      teams: ["", ""],
      goals: [null, null],
      date: ""
    }
  ],
  11: [
    {
      teams: ["", ""],
      goals: [null, null],
      date: ""
    },
    {
      teams: ["", ""],
      goals: [null, null],
      date: ""
    },
    {
      teams: ["", ""],
      goals: [null, null],
      date: ""
    },
    {
      teams: ["", ""],
      goals: [null, null],
      date: ""
    },
    {
      teams: ["", ""],
      goals: [null, null],
      date: ""
    },
    {
      teams: ["", ""],
      goals: [null, null],
      date: ""
    },
    {
      teams: ["", ""],
      goals: [null, null],
      date: ""
    },
    {
      teams: ["", ""],
      goals: [null, null],
      date: ""
    },
    {
      teams: ["", ""],
      goals: [null, null],
      date: ""
    },
    {
      teams: ["", ""],
      goals: [null, null],
      date: ""
    }
  ],
  12: [
    {
      teams: ["", ""],
      goals: [null, null],
      date: ""
    },
    {
      teams: ["", ""],
      goals: [null, null],
      date: ""
    },
    {
      teams: ["", ""],
      goals: [null, null],
      date: ""
    },
    {
      teams: ["", ""],
      goals: [null, null],
      date: ""
    },
    {
      teams: ["", ""],
      goals: [null, null],
      date: ""
    },
    {
      teams: ["", ""],
      goals: [null, null],
      date: ""
    },
    {
      teams: ["", ""],
      goals: [null, null],
      date: ""
    },
    {
      teams: ["", ""],
      goals: [null, null],
      date: ""
    },
    {
      teams: ["", ""],
      goals: [null, null],
      date: ""
    },
    {
      teams: ["", ""],
      goals: [null, null],
      date: ""
    }
  ],
  13: [
    {
      teams: ["", ""],
      goals: [null, null],
      date: ""
    },
    {
      teams: ["", ""],
      goals: [null, null],
      date: ""
    },
    {
      teams: ["", ""],
      goals: [null, null],
      date: ""
    },
    {
      teams: ["", ""],
      goals: [null, null],
      date: ""
    },
    {
      teams: ["", ""],
      goals: [null, null],
      date: ""
    },
    {
      teams: ["", ""],
      goals: [null, null],
      date: ""
    },
    {
      teams: ["", ""],
      goals: [null, null],
      date: ""
    },
    {
      teams: ["", ""],
      goals: [null, null],
      date: ""
    },
    {
      teams: ["", ""],
      goals: [null, null],
      date: ""
    },
    {
      teams: ["", ""],
      goals: [null, null],
      date: ""
    }
  ],
  14: [
    {
      teams: ["", ""],
      goals: [null, null],
      date: ""
    },
    {
      teams: ["", ""],
      goals: [null, null],
      date: ""
    },
    {
      teams: ["", ""],
      goals: [null, null],
      date: ""
    },
    {
      teams: ["", ""],
      goals: [null, null],
      date: ""
    },
    {
      teams: ["", ""],
      goals: [null, null],
      date: ""
    },
    {
      teams: ["", ""],
      goals: [null, null],
      date: ""
    },
    {
      teams: ["", ""],
      goals: [null, null],
      date: ""
    },
    {
      teams: ["", ""],
      goals: [null, null],
      date: ""
    },
    {
      teams: ["", ""],
      goals: [null, null],
      date: ""
    },
    {
      teams: ["", ""],
      goals: [null, null],
      date: ""
    }
  ],
  15: [
    {
      teams: ["", ""],
      goals: [null, null],
      date: ""
    },
    {
      teams: ["", ""],
      goals: [null, null],
      date: ""
    },
    {
      teams: ["", ""],
      goals: [null, null],
      date: ""
    },
    {
      teams: ["", ""],
      goals: [null, null],
      date: ""
    },
    {
      teams: ["", ""],
      goals: [null, null],
      date: ""
    },
    {
      teams: ["", ""],
      goals: [null, null],
      date: ""
    },
    {
      teams: ["", ""],
      goals: [null, null],
      date: ""
    },
    {
      teams: ["", ""],
      goals: [null, null],
      date: ""
    },
    {
      teams: ["", ""],
      goals: [null, null],
      date: ""
    },
    {
      teams: ["", ""],
      goals: [null, null],
      date: ""
    }
  ],
  16: [
    {
      teams: ["", ""],
      goals: [null, null],
      date: ""
    },
    {
      teams: ["", ""],
      goals: [null, null],
      date: ""
    },
    {
      teams: ["", ""],
      goals: [null, null],
      date: ""
    },
    {
      teams: ["", ""],
      goals: [null, null],
      date: ""
    },
    {
      teams: ["", ""],
      goals: [null, null],
      date: ""
    },
    {
      teams: ["", ""],
      goals: [null, null],
      date: ""
    },
    {
      teams: ["", ""],
      goals: [null, null],
      date: ""
    },
    {
      teams: ["", ""],
      goals: [null, null],
      date: ""
    },
    {
      teams: ["", ""],
      goals: [null, null],
      date: ""
    },
    {
      teams: ["", ""],
      goals: [null, null],
      date: ""
    }
  ],
  17: [
    {
      teams: ["", ""],
      goals: [null, null],
      date: ""
    },
    {
      teams: ["", ""],
      goals: [null, null],
      date: ""
    },
    {
      teams: ["", ""],
      goals: [null, null],
      date: ""
    },
    {
      teams: ["", ""],
      goals: [null, null],
      date: ""
    },
    {
      teams: ["", ""],
      goals: [null, null],
      date: ""
    },
    {
      teams: ["", ""],
      goals: [null, null],
      date: ""
    },
    {
      teams: ["", ""],
      goals: [null, null],
      date: ""
    },
    {
      teams: ["", ""],
      goals: [null, null],
      date: ""
    },
    {
      teams: ["", ""],
      goals: [null, null],
      date: ""
    },
    {
      teams: ["", ""],
      goals: [null, null],
      date: ""
    }
  ],
  18: [
    {
      teams: ["", ""],
      goals: [null, null],
      date: ""
    },
    {
      teams: ["", ""],
      goals: [null, null],
      date: ""
    },
    {
      teams: ["", ""],
      goals: [null, null],
      date: ""
    },
    {
      teams: ["", ""],
      goals: [null, null],
      date: ""
    },
    {
      teams: ["", ""],
      goals: [null, null],
      date: ""
    },
    {
      teams: ["", ""],
      goals: [null, null],
      date: ""
    },
    {
      teams: ["", ""],
      goals: [null, null],
      date: ""
    },
    {
      teams: ["", ""],
      goals: [null, null],
      date: ""
    },
    {
      teams: ["", ""],
      goals: [null, null],
      date: ""
    },
    {
      teams: ["", ""],
      goals: [null, null],
      date: ""
    }
  ],
  19: [
    {
      teams: ["", ""],
      goals: [null, null],
      date: ""
    },
    {
      teams: ["", ""],
      goals: [null, null],
      date: ""
    },
    {
      teams: ["", ""],
      goals: [null, null],
      date: ""
    },
    {
      teams: ["", ""],
      goals: [null, null],
      date: ""
    },
    {
      teams: ["", ""],
      goals: [null, null],
      date: ""
    },
    {
      teams: ["", ""],
      goals: [null, null],
      date: ""
    },
    {
      teams: ["", ""],
      goals: [null, null],
      date: ""
    },
    {
      teams: ["", ""],
      goals: [null, null],
      date: ""
    },
    {
      teams: ["", ""],
      goals: [null, null],
      date: ""
    },
    {
      teams: ["", ""],
      goals: [null, null],
      date: ""
    }
  ],
  20: [
    {
      teams: ["", ""],
      goals: [null, null],
      date: ""
    },
    {
      teams: ["", ""],
      goals: [null, null],
      date: ""
    },
    {
      teams: ["", ""],
      goals: [null, null],
      date: ""
    },
    {
      teams: ["", ""],
      goals: [null, null],
      date: ""
    },
    {
      teams: ["", ""],
      goals: [null, null],
      date: ""
    },
    {
      teams: ["", ""],
      goals: [null, null],
      date: ""
    },
    {
      teams: ["", ""],
      goals: [null, null],
      date: ""
    },
    {
      teams: ["", ""],
      goals: [null, null],
      date: ""
    },
    {
      teams: ["", ""],
      goals: [null, null],
      date: ""
    },
    {
      teams: ["", ""],
      goals: [null, null],
      date: ""
    }
  ],
  21: [
    {
      teams: ["", ""],
      goals: [null, null],
      date: ""
    },
    {
      teams: ["", ""],
      goals: [null, null],
      date: ""
    },
    {
      teams: ["", ""],
      goals: [null, null],
      date: ""
    },
    {
      teams: ["", ""],
      goals: [null, null],
      date: ""
    },
    {
      teams: ["", ""],
      goals: [null, null],
      date: ""
    },
    {
      teams: ["", ""],
      goals: [null, null],
      date: ""
    },
    {
      teams: ["", ""],
      goals: [null, null],
      date: ""
    },
    {
      teams: ["", ""],
      goals: [null, null],
      date: ""
    },
    {
      teams: ["", ""],
      goals: [null, null],
      date: ""
    },
    {
      teams: ["", ""],
      goals: [null, null],
      date: ""
    }
  ],
  22: [
    {
      teams: ["", ""],
      goals: [null, null],
      date: ""
    },
    {
      teams: ["", ""],
      goals: [null, null],
      date: ""
    },
    {
      teams: ["", ""],
      goals: [null, null],
      date: ""
    },
    {
      teams: ["", ""],
      goals: [null, null],
      date: ""
    },
    {
      teams: ["", ""],
      goals: [null, null],
      date: ""
    },
    {
      teams: ["", ""],
      goals: [null, null],
      date: ""
    },
    {
      teams: ["", ""],
      goals: [null, null],
      date: ""
    },
    {
      teams: ["", ""],
      goals: [null, null],
      date: ""
    },
    {
      teams: ["", ""],
      goals: [null, null],
      date: ""
    },
    {
      teams: ["", ""],
      goals: [null, null],
      date: ""
    }
  ],
  23: [
    {
      teams: ["", ""],
      goals: [null, null],
      date: ""
    },
    {
      teams: ["", ""],
      goals: [null, null],
      date: ""
    },
    {
      teams: ["", ""],
      goals: [null, null],
      date: ""
    },
    {
      teams: ["", ""],
      goals: [null, null],
      date: ""
    },
    {
      teams: ["", ""],
      goals: [null, null],
      date: ""
    },
    {
      teams: ["", ""],
      goals: [null, null],
      date: ""
    },
    {
      teams: ["", ""],
      goals: [null, null],
      date: ""
    },
    {
      teams: ["", ""],
      goals: [null, null],
      date: ""
    },
    {
      teams: ["", ""],
      goals: [null, null],
      date: ""
    },
    {
      teams: ["", ""],
      goals: [null, null],
      date: ""
    }
  ],
  24: [
    {
      teams: ["", ""],
      goals: [null, null],
      date: ""
    },
    {
      teams: ["", ""],
      goals: [null, null],
      date: ""
    },
    {
      teams: ["", ""],
      goals: [null, null],
      date: ""
    },
    {
      teams: ["", ""],
      goals: [null, null],
      date: ""
    },
    {
      teams: ["", ""],
      goals: [null, null],
      date: ""
    },
    {
      teams: ["", ""],
      goals: [null, null],
      date: ""
    },
    {
      teams: ["", ""],
      goals: [null, null],
      date: ""
    },
    {
      teams: ["", ""],
      goals: [null, null],
      date: ""
    },
    {
      teams: ["", ""],
      goals: [null, null],
      date: ""
    },
    {
      teams: ["", ""],
      goals: [null, null],
      date: ""
    }
  ],
  25: [
    {
      teams: ["", ""],
      goals: [null, null],
      date: ""
    },
    {
      teams: ["", ""],
      goals: [null, null],
      date: ""
    },
    {
      teams: ["", ""],
      goals: [null, null],
      date: ""
    },
    {
      teams: ["", ""],
      goals: [null, null],
      date: ""
    },
    {
      teams: ["", ""],
      goals: [null, null],
      date: ""
    },
    {
      teams: ["", ""],
      goals: [null, null],
      date: ""
    },
    {
      teams: ["", ""],
      goals: [null, null],
      date: ""
    },
    {
      teams: ["", ""],
      goals: [null, null],
      date: ""
    },
    {
      teams: ["", ""],
      goals: [null, null],
      date: ""
    },
    {
      teams: ["", ""],
      goals: [null, null],
      date: ""
    }
  ],
  26: [
    {
      teams: ["", ""],
      goals: [null, null],
      date: ""
    },
    {
      teams: ["", ""],
      goals: [null, null],
      date: ""
    },
    {
      teams: ["", ""],
      goals: [null, null],
      date: ""
    },
    {
      teams: ["", ""],
      goals: [null, null],
      date: ""
    },
    {
      teams: ["", ""],
      goals: [null, null],
      date: ""
    },
    {
      teams: ["", ""],
      goals: [null, null],
      date: ""
    },
    {
      teams: ["", ""],
      goals: [null, null],
      date: ""
    },
    {
      teams: ["", ""],
      goals: [null, null],
      date: ""
    },
    {
      teams: ["", ""],
      goals: [null, null],
      date: ""
    },
    {
      teams: ["", ""],
      goals: [null, null],
      date: ""
    }
  ],
  27: [
    {
      teams: ["", ""],
      goals: [null, null],
      date: ""
    },
    {
      teams: ["", ""],
      goals: [null, null],
      date: ""
    },
    {
      teams: ["", ""],
      goals: [null, null],
      date: ""
    },
    {
      teams: ["", ""],
      goals: [null, null],
      date: ""
    },
    {
      teams: ["", ""],
      goals: [null, null],
      date: ""
    },
    {
      teams: ["", ""],
      goals: [null, null],
      date: ""
    },
    {
      teams: ["", ""],
      goals: [null, null],
      date: ""
    },
    {
      teams: ["", ""],
      goals: [null, null],
      date: ""
    },
    {
      teams: ["", ""],
      goals: [null, null],
      date: ""
    },
    {
      teams: ["", ""],
      goals: [null, null],
      date: ""
    }
  ],
  28: [
    {
      teams: ["", ""],
      goals: [null, null],
      date: ""
    },
    {
      teams: ["", ""],
      goals: [null, null],
      date: ""
    },
    {
      teams: ["", ""],
      goals: [null, null],
      date: ""
    },
    {
      teams: ["", ""],
      goals: [null, null],
      date: ""
    },
    {
      teams: ["", ""],
      goals: [null, null],
      date: ""
    },
    {
      teams: ["", ""],
      goals: [null, null],
      date: ""
    },
    {
      teams: ["", ""],
      goals: [null, null],
      date: ""
    },
    {
      teams: ["", ""],
      goals: [null, null],
      date: ""
    },
    {
      teams: ["", ""],
      goals: [null, null],
      date: ""
    },
    {
      teams: ["", ""],
      goals: [null, null],
      date: ""
    }
  ],
  29: [
    {
      teams: ["", ""],
      goals: [null, null],
      date: ""
    },
    {
      teams: ["", ""],
      goals: [null, null],
      date: ""
    },
    {
      teams: ["", ""],
      goals: [null, null],
      date: ""
    },
    {
      teams: ["", ""],
      goals: [null, null],
      date: ""
    },
    {
      teams: ["", ""],
      goals: [null, null],
      date: ""
    },
    {
      teams: ["", ""],
      goals: [null, null],
      date: ""
    },
    {
      teams: ["", ""],
      goals: [null, null],
      date: ""
    },
    {
      teams: ["", ""],
      goals: [null, null],
      date: ""
    },
    {
      teams: ["", ""],
      goals: [null, null],
      date: ""
    },
    {
      teams: ["", ""],
      goals: [null, null],
      date: ""
    }
  ],
  30: [
    {
      teams: ["", ""],
      goals: [null, null],
      date: ""
    },
    {
      teams: ["", ""],
      goals: [null, null],
      date: ""
    },
    {
      teams: ["", ""],
      goals: [null, null],
      date: ""
    },
    {
      teams: ["", ""],
      goals: [null, null],
      date: ""
    },
    {
      teams: ["", ""],
      goals: [null, null],
      date: ""
    },
    {
      teams: ["", ""],
      goals: [null, null],
      date: ""
    },
    {
      teams: ["", ""],
      goals: [null, null],
      date: ""
    },
    {
      teams: ["", ""],
      goals: [null, null],
      date: ""
    },
    {
      teams: ["", ""],
      goals: [null, null],
      date: ""
    },
    {
      teams: ["", ""],
      goals: [null, null],
      date: ""
    }
  ],
  31: [
    {
      teams: ["", ""],
      goals: [null, null],
      date: ""
    },
    {
      teams: ["", ""],
      goals: [null, null],
      date: ""
    },
    {
      teams: ["", ""],
      goals: [null, null],
      date: ""
    },
    {
      teams: ["", ""],
      goals: [null, null],
      date: ""
    },
    {
      teams: ["", ""],
      goals: [null, null],
      date: ""
    },
    {
      teams: ["", ""],
      goals: [null, null],
      date: ""
    },
    {
      teams: ["", ""],
      goals: [null, null],
      date: ""
    },
    {
      teams: ["", ""],
      goals: [null, null],
      date: ""
    },
    {
      teams: ["", ""],
      goals: [null, null],
      date: ""
    },
    {
      teams: ["", ""],
      goals: [null, null],
      date: ""
    }
  ],
  32: [
    {
      teams: ["", ""],
      goals: [null, null],
      date: ""
    },
    {
      teams: ["", ""],
      goals: [null, null],
      date: ""
    },
    {
      teams: ["", ""],
      goals: [null, null],
      date: ""
    },
    {
      teams: ["", ""],
      goals: [null, null],
      date: ""
    },
    {
      teams: ["", ""],
      goals: [null, null],
      date: ""
    },
    {
      teams: ["", ""],
      goals: [null, null],
      date: ""
    },
    {
      teams: ["", ""],
      goals: [null, null],
      date: ""
    },
    {
      teams: ["", ""],
      goals: [null, null],
      date: ""
    },
    {
      teams: ["", ""],
      goals: [null, null],
      date: ""
    },
    {
      teams: ["", ""],
      goals: [null, null],
      date: ""
    }
  ],
  33: [
    {
      teams: ["", ""],
      goals: [null, null],
      date: ""
    },
    {
      teams: ["", ""],
      goals: [null, null],
      date: ""
    },
    {
      teams: ["", ""],
      goals: [null, null],
      date: ""
    },
    {
      teams: ["", ""],
      goals: [null, null],
      date: ""
    },
    {
      teams: ["", ""],
      goals: [null, null],
      date: ""
    },
    {
      teams: ["", ""],
      goals: [null, null],
      date: ""
    },
    {
      teams: ["", ""],
      goals: [null, null],
      date: ""
    },
    {
      teams: ["", ""],
      goals: [null, null],
      date: ""
    },
    {
      teams: ["", ""],
      goals: [null, null],
      date: ""
    },
    {
      teams: ["", ""],
      goals: [null, null],
      date: ""
    }
  ],
  34: [
    {
      teams: ["", ""],
      goals: [null, null],
      date: ""
    },
    {
      teams: ["", ""],
      goals: [null, null],
      date: ""
    },
    {
      teams: ["", ""],
      goals: [null, null],
      date: ""
    },
    {
      teams: ["", ""],
      goals: [null, null],
      date: ""
    },
    {
      teams: ["", ""],
      goals: [null, null],
      date: ""
    },
    {
      teams: ["", ""],
      goals: [null, null],
      date: ""
    },
    {
      teams: ["", ""],
      goals: [null, null],
      date: ""
    },
    {
      teams: ["", ""],
      goals: [null, null],
      date: ""
    },
    {
      teams: ["", ""],
      goals: [null, null],
      date: ""
    },
    {
      teams: ["", ""],
      goals: [null, null],
      date: ""
    }
  ],
  35: [
    {
      teams: ["", ""],
      goals: [null, null],
      date: ""
    },
    {
      teams: ["", ""],
      goals: [null, null],
      date: ""
    },
    {
      teams: ["", ""],
      goals: [null, null],
      date: ""
    },
    {
      teams: ["", ""],
      goals: [null, null],
      date: ""
    },
    {
      teams: ["", ""],
      goals: [null, null],
      date: ""
    },
    {
      teams: ["", ""],
      goals: [null, null],
      date: ""
    },
    {
      teams: ["", ""],
      goals: [null, null],
      date: ""
    },
    {
      teams: ["", ""],
      goals: [null, null],
      date: ""
    },
    {
      teams: ["", ""],
      goals: [null, null],
      date: ""
    },
    {
      teams: ["", ""],
      goals: [null, null],
      date: ""
    }
  ],
  36: [
    {
      teams: ["", ""],
      goals: [null, null],
      date: ""
    },
    {
      teams: ["", ""],
      goals: [null, null],
      date: ""
    },
    {
      teams: ["", ""],
      goals: [null, null],
      date: ""
    },
    {
      teams: ["", ""],
      goals: [null, null],
      date: ""
    },
    {
      teams: ["", ""],
      goals: [null, null],
      date: ""
    },
    {
      teams: ["", ""],
      goals: [null, null],
      date: ""
    },
    {
      teams: ["", ""],
      goals: [null, null],
      date: ""
    },
    {
      teams: ["", ""],
      goals: [null, null],
      date: ""
    },
    {
      teams: ["", ""],
      goals: [null, null],
      date: ""
    },
    {
      teams: ["", ""],
      goals: [null, null],
      date: ""
    }
  ],
  37: [
    {
      teams: ["", ""],
      goals: [null, null],
      date: ""
    },
    {
      teams: ["", ""],
      goals: [null, null],
      date: ""
    },
    {
      teams: ["", ""],
      goals: [null, null],
      date: ""
    },
    {
      teams: ["", ""],
      goals: [null, null],
      date: ""
    },
    {
      teams: ["", ""],
      goals: [null, null],
      date: ""
    },
    {
      teams: ["", ""],
      goals: [null, null],
      date: ""
    },
    {
      teams: ["", ""],
      goals: [null, null],
      date: ""
    },
    {
      teams: ["", ""],
      goals: [null, null],
      date: ""
    },
    {
      teams: ["", ""],
      goals: [null, null],
      date: ""
    },
    {
      teams: ["", ""],
      goals: [null, null],
      date: ""
    }
  ],
  38: [
    {
      teams: ["", ""],
      goals: [null, null],
      date: ""
    },
    {
      teams: ["", ""],
      goals: [null, null],
      date: ""
    },
    {
      teams: ["", ""],
      goals: [null, null],
      date: ""
    },
    {
      teams: ["", ""],
      goals: [null, null],
      date: ""
    },
    {
      teams: ["", ""],
      goals: [null, null],
      date: ""
    },
    {
      teams: ["", ""],
      goals: [null, null],
      date: ""
    },
    {
      teams: ["", ""],
      goals: [null, null],
      date: ""
    },
    {
      teams: ["", ""],
      goals: [null, null],
      date: ""
    },
    {
      teams: ["", ""],
      goals: [null, null],
      date: ""
    },
    {
      teams: ["", ""],
      goals: [null, null],
      date: ""
    }
  ]*/
};

const table = makeTable(matches);

const data = {
  matches: matches,
  table: table
};

module.exports = data;
