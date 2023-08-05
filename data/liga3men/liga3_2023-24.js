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
      goals: [null, null],
      date: "2023-08-05T12:00Z"
    },
    {
      teams: ["LÜB", "SVS"],
      goals: [null, null],
      date: "2023-08-05T12:00Z"
    },
    {
      teams: ["MÜN", "WMA"],
      goals: [null, null],
      date: "2023-08-05T12:00Z"
    },
    {
      teams: ["PMS", "BVB2"],
      goals: [null, null],
      date: "2023-08-05T12:00Z"
    },
    {
      teams: ["JRE", "UHA"],
      goals: [null, null],
      date: "2023-08-05T12:00Z"
    },
    {
      teams: ["DRE", "BIE"],
      goals: [null, null],
      date: "2023-08-05T14:15Z"
    },
    {
      teams: ["ULM", "FCS"],
      goals: [null, null],
      date: "2023-08-06T11:30Z"
    },
    {
      teams: ["SCF2", "DUI"],
      goals: [null, null],
      date: "2023-08-06T14:30Z"
    },
    {
      teams: ["AUE", "FCI"],
      goals: [null, null],
      date: "2023-08-06T17:30Z"
    }
  ],
  2: [
    {
      teams: ["SVS", "DRE"],
      goals: [null, null],
      date: "2023-08-18T17:00Z"
    },
    {
      teams: ["FCS", "VKÖ"],
      goals: [null, null],
      date: "2023-08-19T12:00Z"
    },
    {
      teams: ["FCI", "HFC"],
      goals: [null, null],
      date: "2023-08-19T12:00Z"
    },
    {
      teams: ["DUI", "MÜN"],
      goals: [null, null],
      date: "2023-08-19T12:00Z"
    },
    {
      teams: ["BIE", "PMS"],
      goals: [null, null],
      date: "2023-08-19T12:00Z"
    },
    {
      teams: ["UHA", "ULM"],
      goals: [null, null],
      date: "2023-08-19T12:00Z"
    },
    {
      teams: ["WMA", "LÜB"],
      goals: [null, null],
      date: "2023-08-19T14:30Z"
    },
    {
      teams: ["BVB2", "SCF2"],
      goals: [null, null],
      date: "2023-08-20T11:30Z"
    },
    {
      teams: ["SCV", "JRE"],
      goals: [null, null],
      date: "2023-08-20T14:30Z"
    },
    {
      teams: ["RWE", "AUE"],
      goals: [null, null],
      date: "2023-08-20T17:30Z"
    }
  ],
  3: [
    {
      teams: ["PMS", "FCI"],
      goals: [null, null],
      date: "2023-08-22T17:00Z"
    },
    {
      teams: ["DRE", "WMA"],
      goals: [null, null],
      date: "2023-08-22T17:00Z"
    },
    {
      teams: ["ULM", "BIE"],
      goals: [null, null],
      date: "2023-08-22T17:00Z"
    },
    {
      teams: ["HFC", "DUI"],
      goals: [null, null],
      date: "2023-08-22T17:00Z"
    },
    {
      teams: ["MÜN", "LÜB"],
      goals: [null, null],
      date: "2023-08-22T17:00Z"
    },
    {
      teams: ["VKÖ", "RWE"],
      goals: [null, null],
      date: "2023-08-23T17:00Z"
    },
    {
      teams: ["FCS", "SCV"],
      goals: [null, null],
      date: "2023-08-23T17:00Z"
    },
    {
      teams: ["AUE", "SVS"],
      goals: [null, null],
      date: "2023-08-23T17:00Z"
    },
    {
      teams: ["SCF2", "UHA"],
      goals: [null, null],
      date: "2023-08-23T17:00Z"
    },
    {
      teams: ["JRE", "BVB2"],
      goals: [null, null],
      date: "2023-08-23T17:00Z"
    }
  ],
  4: [
    {
      teams: ["DUI", "ULM"],
      goals: [null, null],
      date: "2023-08-25T17:00Z"
    },
    {
      teams: ["FCI", "FCS"],
      goals: [null, null],
      date: "2023-08-26T12:00Z"
    },
    {
      teams: ["SCV", "SCF2"],
      goals: [null, null],
      date: "2023-08-26T12:00Z"
    },
    {
      teams: ["BVB2", "DRE"],
      goals: [null, null],
      date: "2023-08-26T12:00Z"
    },
    {
      teams: ["UHA", "VKÖ"],
      goals: [null, null],
      date: "2023-08-26T12:00Z"
    },
    {
      teams: ["LÜB", "AUE"],
      goals: [null, null],
      date: "2023-08-26T12:00Z"
    },
    {
      teams: ["SVS", "MÜN"],
      goals: [null, null],
      date: "2023-08-26T14:30Z"
    },
    {
      teams: ["BIE", "JRE"],
      goals: [null, null],
      date: "2023-08-27T11:30Z"
    },
    {
      teams: ["WMA", "HFC"],
      goals: [null, null],
      date: "2023-08-27T14:30Z"
    },
    {
      teams: ["RWE", "PMS"],
      goals: [null, null],
      date: "2023-08-27T17:30Z"
    }
  ]
  /*5: [
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
  6: [
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
  7: [
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
  8: [
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
  9: [
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
