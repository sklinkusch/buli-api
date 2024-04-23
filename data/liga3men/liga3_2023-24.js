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
      goals: [2, 6],
      date: "2023-09-29T17:00Z"
    },
    {
      teams: ["SVS", "VKÖ"],
      goals: [3, 3],
      date: "2023-09-30T12:00Z"
    },
    {
      teams: ["FCI", "ULM"],
      goals: [4, 0],
      date: "2023-09-30T12:00Z"
    },
    {
      teams: ["WMA", "SCF2"],
      goals: [3, 1],
      date: "2023-09-30T12:00Z"
    },
    {
      teams: ["MÜN", "SCV"],
      goals: [1, 0],
      date: "2023-09-30T12:00Z"
    },
    {
      teams: ["DUI", "PMS"],
      goals: [0, 0],
      date: "2023-09-30T12:00Z"
    },
    {
      teams: ["LÜB", "HFC"],
      goals: [2, 2],
      date: "2023-09-30T14:30Z"
    },
    {
      teams: ["RWE", "DRE"],
      goals: [3, 1],
      date: "2023-10-01T11:30Z"
    },
    {
      teams: ["BVB2", "UHA"],
      goals: [2, 2],
      date: "2023-10-01T14:30Z"
    },
    {
      teams: ["AUE", "JRE"],
      goals: [0, 1],
      date: "2023-10-01T17:30Z"
    }
  ],
  9: [
    {
      teams: ["BVB2", "DUI"],
      goals: [1, 0],
      date: "2023-09-27T17:00Z"
    },
    {
      teams: ["SCF2", "SVS"],
      goals: [0, 2],
      date: "2023-10-03T17:00Z"
    },
    {
      teams: ["VKÖ", "FCI"],
      goals: [1, 0],
      date: "2023-10-03T17:00Z"
    },
    {
      teams: ["FCS", "LÜB"],
      goals: [1, 1],
      date: "2023-10-03T17:00Z"
    },
    {
      teams: ["SCV", "BIE"],
      goals: [3, 1],
      date: "2023-10-03T17:00Z"
    },
    {
      teams: ["ULM", "MÜN"],
      goals: [1, 0],
      date: "2023-10-03T17:00Z"
    },
    {
      teams: ["JRE", "WMA"],
      goals: [2, 0],
      date: "2023-10-04T17:00Z"
    },
    {
      teams: ["DRE", "HFC"],
      goals: [2, 1],
      date: "2023-10-04T17:00Z"
    },
    {
      teams: ["PMS", "AUE"],
      goals: [4, 0],
      date: "2023-10-04T17:00Z"
    },
    {
      teams: ["UHA", "RWE"],
      goals: [4, 0],
      date: "2023-10-04T17:00Z"
    }
  ],
  10: [
    {
      teams: ["SVS", "ULM"],
      goals: [1, 2],
      date: "2023-10-06T17:00Z"
    },
    {
      teams: ["DUI", "UHA"],
      goals: [1, 0],
      date: "2023-10-07T12:00Z"
    },
    {
      teams: ["BIE", "BVB2"],
      goals: [2, 2],
      date: "2023-10-07T12:00Z"
    },
    {
      teams: ["MÜN", "DRE"],
      goals: [0, 0],
      date: "2023-10-07T12:00Z"
    },
    {
      teams: ["RWE", "SCV"],
      goals: [0, 5],
      date: "2023-10-07T12:00Z"
    },
    {
      teams: ["WMA", "VKÖ"],
      goals: [1, 1],
      date: "2023-10-07T12:00Z"
    },
    {
      teams: ["AUE", "FCS"],
      goals: [2, 0],
      date: "2023-10-07T14:30Z"
    },
    {
      teams: ["LÜB", "SCF2"],
      goals: [0, 1],
      date: "2023-10-08T11:30Z"
    },
    {
      teams: ["HFC", "PMS"],
      goals: [1, 4],
      date: "2023-10-08T14:30Z"
    },
    {
      teams: ["FCI", "JRE"],
      goals: [2, 4],
      date: "2023-10-08T17:30Z"
    }
  ],
  11: [
    {
      teams: ["BVB2", "RWE"],
      goals: [1, 2],
      date: "2023-10-13T17:00Z"
    },
    {
      teams: ["JRE", "LÜB"],
      goals: [2, 1],
      date: "2023-10-14T12:00Z"
    },
    {
      teams: ["UHA", "SVS"],
      goals: [0, 0],
      date: "2023-10-14T12:00Z"
    },
    {
      teams: ["VKÖ", "AUE"],
      goals: [2, 2],
      date: "2023-10-14T12:00Z"
    },
    {
      teams: ["SCV", "FCI"],
      goals: [2, 2],
      date: "2023-10-14T12:00Z"
    },
    {
      teams: ["BIE", "WMA"],
      goals: [3, 1],
      date: "2023-10-14T14:30Z"
    },
    {
      teams: ["ULM", "DRE"],
      goals: [2, 3],
      date: "2023-10-15T11:30Z"
    },
    {
      teams: ["PMS", "MÜN"],
      goals: [1, 1],
      date: "2023-10-15T14:30Z"
    },
    {
      teams: ["SCF2", "HFC"],
      goals: [1, 2],
      date: "2023-11-28T18:00Z"
    },
    {
      teams: ["FCS", "DUI"],
      goals: [0, 0],
      date: "2023-11-29T18:00Z"
    }
  ],
  12: [
    {
      teams: ["WMA", "BVB2"],
      goals: [1, 3],
      date: "2023-10-20T17:00Z"
    },
    {
      teams: ["FCI", "UHA"],
      goals: [3, 0],
      date: "2023-10-21T12:00Z"
    },
    {
      teams: ["LÜB", "VKÖ"],
      goals: [3, 2],
      date: "2023-10-21T12:00Z"
    },
    {
      teams: ["HFC", "JRE"],
      goals: [1, 2],
      date: "2023-10-21T12:00Z"
    },
    {
      teams: ["MÜN", "SCF2"],
      goals: [2, 0],
      date: "2023-10-21T12:00Z"
    },
    {
      teams: ["DRE", "PMS"],
      goals: [1, 0],
      date: "2023-10-21T12:00Z"
    },
    {
      teams: ["DUI", "BIE"],
      goals: [0, 1],
      date: "2023-10-21T14:30Z"
    },
    {
      teams: ["SVS", "SCV"],
      goals: [2, 2],
      date: "2023-10-22T11:30Z"
    },
    {
      teams: ["RWE", "FCS"],
      goals: [2, 1],
      date: "2023-10-22T14:30Z"
    },
    {
      teams: ["AUE", "ULM"],
      goals: [1, 2],
      date: "2023-10-22T17:30Z"
    }
  ],
  13: [
    {
      teams: ["UHA", "WMA"],
      goals: [3, 0],
      date: "2023-10-27T17:00Z"
    },
    {
      teams: ["ULM", "HFC"],
      goals: [2, 3],
      date: "2023-10-28T12:00Z"
    },
    {
      teams: ["VKÖ", "MÜN"],
      goals: [2, 1],
      date: "2023-10-28T12:00Z"
    },
    {
      teams: ["DUI", "RWE"],
      goals: [1, 2],
      date: "2023-10-28T12:00Z"
    },
    {
      teams: ["BVB2", "SVS"],
      goals: [1, 2],
      date: "2023-10-28T12:00Z"
    },
    {
      teams: ["BIE", "FCI"],
      goals: [4, 0],
      date: "2023-10-28T12:00Z"
    },
    {
      teams: ["JRE", "PMS"],
      goals: [2, 1],
      date: "2023-10-28T14:30Z"
    },
    {
      teams: ["SCV", "LÜB"],
      goals: [4, 0],
      date: "2023-10-29T15:30Z"
    },
    {
      teams: ["SCF2", "AUE"],
      goals: [0, 1],
      date: "2023-10-29T18:30Z"
    },
    {
      teams: ["FCS", "DRE"],
      goals: [1, 0],
      date: "2023-11-19T12:30Z",
      remark: "abgebrochen" // Platz am 2023-10-29T12:30Z unbespielbar, Stand nach 45 min: 0:0
    }
  ],
  14: [
    {
      teams: ["AUE", "SCV"],
      goals: [1, 2],
      date: "2023-11-03T18:00Z"
    },
    {
      teams: ["DRE", "SCF2"],
      goals: [2, 0],
      date: "2023-11-04T13:00Z"
    },
    {
      teams: ["LÜB", "UHA"],
      goals: [2, 3],
      date: "2023-11-04T13:00Z"
    },
    {
      teams: ["MÜN", "JRE"],
      goals: [0, 1],
      date: "2023-11-04T13:00Z"
    },
    {
      teams: ["RWE", "BIE"],
      goals: [2, 1],
      date: "2023-11-04T13:00Z"
    },
    {
      teams: ["SVS", "FCS"],
      goals: [2, 2],
      date: "2023-11-04T13:00Z"
    },
    {
      teams: ["FCI", "BVB2"],
      goals: [1, 1],
      date: "2023-11-04T15:30Z"
    },
    {
      teams: ["WMA", "DUI"],
      goals: [0, 0],
      date: "2023-11-05T12:30Z"
    },
    {
      teams: ["PMS", "ULM"],
      goals: [3, 2],
      date: "2023-11-05T15:30Z"
    },
    {
      teams: ["HFC", "VKÖ"],
      goals: [2, 1],
      date: "2023-11-05T18:30Z"
    }
  ],
  15: [
    {
      teams: ["VKÖ", "DRE"],
      goals: [1, 5],
      date: "2023-11-10T18:00Z"
    },
    {
      teams: ["UHA", "AUE"],
      goals: [0, 0],
      date: "2023-11-11T13:00Z"
    },
    {
      teams: ["FCS", "MÜN"],
      goals: [2, 3],
      date: "2023-11-11T13:00Z"
    },
    {
      teams: ["SCV", "HFC"],
      goals: [3, 2],
      date: "2023-11-11T13:00Z"
    },
    {
      teams: ["BIE", "SVS"],
      goals: [1, 1],
      date: "2023-11-11T13:00Z"
    },
    {
      teams: ["DUI", "FCI"],
      goals: [1, 2],
      date: "2023-11-11T13:00Z"
    },
    {
      teams: ["BVB2", "LÜB"],
      goals: [1, 1],
      date: "2023-11-11T15:30Z"
    },
    {
      teams: ["SCF2", "PMS"],
      goals: [2, 2],
      date: "2023-11-12T12:30Z"
    },
    {
      teams: ["RWE", "WMA"],
      goals: [2, 0],
      date: "2023-11-12T15:30Z"
    },
    {
      teams: ["JRE", "ULM"],
      goals: [2, 0],
      date: "2023-11-12T18:30Z"
    }
  ],
  16: [
    {
      teams: ["WMA", "SCV"],
      goals: [1, 2],
      date: "2023-11-24T18:00Z"
    },
    {
      teams: ["FCI", "RWE"],
      goals: [2, 1],
      date: "2023-11-25T13:00Z"
    },
    {
      teams: ["MÜN", "UHA"],
      goals: [0, 1],
      date: "2023-11-25T13:00Z"
    },
    {
      teams: ["SVS", "DUI"],
      goals: [2, 0],
      date: "2023-11-25T13:00Z"
    },
    {
      teams: ["AUE", "BVB2"],
      goals: [2, 0],
      date: "2023-11-25T13:00Z"
    },
    {
      teams: ["HFC", "FCS"],
      goals: [0, 2],
      date: "2023-11-25T13:00Z"
    },
    {
      teams: ["ULM", "SCF2"],
      goals: [2, 1],
      date: "2023-11-25T15:30Z"
    },
    {
      teams: ["LÜB", "BIE"],
      goals: [2, 2],
      date: "2023-11-26T12:30Z"
    },
    {
      teams: ["DRE", "JRE"],
      goals: [0, 1],
      date: "2023-11-26T15:30Z"
    },
    {
      teams: ["PMS", "VKÖ"],
      goals: [3, 3],
      date: "2023-11-26T18:30Z"
    }
  ],
  17: [
    {
      teams: ["FCS", "PMS"],
      goals: [0, 0],
      date: "2023-12-02T13:00Z"
    },
    {
      teams: ["WMA", "FCI"],
      goals: [1, 1],
      date: "2023-12-02T13:00Z"
    },
    {
      teams: ["BIE", "AUE"],
      goals: [2, 2],
      date: "2023-12-02T13:00Z"
    },
    {
      teams: ["RWE", "SVS"],
      goals: [1, 2],
      date: "2023-12-02T13:00Z"
    },
    {
      teams: ["DUI", "LÜB"],
      goals: [1, 0],
      date: "2023-12-02T13:00Z"
    },
    {
      teams: ["VKÖ", "ULM"],
      goals: [1, 3],
      date: "2023-12-02T15:30Z"
    },
    {
      teams: ["SCV", "DRE"],
      goals: [1, 0],
      date: "2023-12-03T12:30Z"
    },
    {
      teams: ["JRE", "SCF2"],
      goals: [3, 2],
      date: "2023-12-03T15:30Z"
    },
    {
      teams: ["BVB2", "MÜN"],
      goals: [3, 0],
      date: "2023-12-03T18:30Z"
    },
    {
      teams: ["UHA", "HFC"],
      goals: [2, 0],
      date: "2024-02-07T18:00Z"
    }
  ],
  18: [
    {
      teams: ["HFC", "BIE"],
      goals: [2, 2],
      date: "2023-12-08T18:00Z"
    },
    {
      teams: ["ULM", "BVB2"],
      goals: [1, 1],
      date: "2023-12-09T13:00Z"
    },
    {
      teams: ["SVS", "WMA"],
      goals: [3, 0],
      date: "2023-12-09T13:00Z"
    },
    {
      teams: ["SCF2", "FCS"],
      goals: [0, 4],
      date: "2023-12-09T13:00Z"
    },
    {
      teams: ["LÜB", "FCI"],
      goals: [0, 4],
      date: "2023-12-09T13:00Z"
    },
    {
      teams: ["AUE", "DUI"],
      goals: [1, 1],
      date: "2023-12-09T15:30Z"
    },
    {
      teams: ["JRE", "VKÖ"],
      goals: [1, 1],
      date: "2023-12-10T12:30Z"
    },
    {
      teams: ["DRE", "UHA"],
      goals: [2, 1],
      date: "2023-12-10T15:30Z"
    },
    {
      teams: ["PMS", "SCV"],
      goals: [3, 1],
      date: "2023-12-10T18:30Z"
    },
    {
      teams: ["MÜN", "RWE"],
      goals: [2, 0],
      date: "2024-02-06T18:00Z"
    }
  ],
  19: [
    {
      teams: ["RWE", "LÜB"],
      goals: [1, 0],
      date: "2023-12-15T18:00Z"
    },
    {
      teams: ["FCS", "JRE"],
      goals: [2, 2],
      date: "2023-12-16T13:00Z"
    },
    {
      teams: ["BVB2", "HFC"],
      goals: [2, 1],
      date: "2023-12-16T13:00Z"
    },
    {
      teams: ["WMA", "AUE"],
      goals: [3, 0],
      date: "2023-12-16T13:00Z"
    },
    {
      teams: ["FCI", "SVS"],
      goals: [4, 0],
      date: "2023-12-16T13:00Z"
    },
    {
      teams: ["SCV", "ULM"],
      goals: [0, 3],
      date: "2023-12-16T13:00Z"
    },
    {
      teams: ["UHA", "PMS"],
      goals: [3, 2],
      date: "2023-12-16T15:30Z"
    },
    {
      teams: ["DUI", "DRE"],
      goals: [2, 4],
      date: "2023-12-17T12:30Z"
    },
    {
      teams: ["BIE", "MÜN"],
      goals: [2, 0],
      date: "2023-12-17T15:30Z"
    },
    {
      teams: ["VKÖ", "SCF2"],
      goals: [2, 0],
      date: "2023-12-17T18:30Z"
    }
  ],
  20: [
    {
      teams: ["SVS", "LÜB"],
      goals: [1, 2],
      date: "2023-12-19T18:00Z"
    },
    {
      teams: ["FCS", "ULM"],
      goals: [2, 1],
      date: "2023-12-19T18:00Z"
    },
    {
      teams: ["RWE", "HFC"],
      goals: [3, 2],
      date: "2023-12-19T18:00Z"
    },
    {
      teams: ["UHA", "JRE"],
      goals: [1, 2],
      date: "2023-12-19T18:00Z"
    },
    {
      teams: ["FCI", "AUE"],
      goals: [1, 1],
      date: "2023-12-19T18:00Z"
    },
    {
      teams: ["SCV", "VKÖ"],
      goals: [1, 1],
      date: "2023-12-20T18:00Z"
    },
    {
      teams: ["BIE", "DRE"],
      goals: [0, 1],
      date: "2023-12-20T18:00Z"
    },
    {
      teams: ["WMA", "MÜN"],
      goals: [1, 0],
      date: "2023-12-20T18:00Z"
    },
    {
      teams: ["DUI", "SCF2"],
      goals: [4, 2],
      date: "2023-12-20T18:00Z"
    },
    {
      teams: ["BVB2", "PMS"],
      goals: [2, 3],
      date: "2024-02-13T18:00Z"
    }
  ],
  21: [
    {
      teams: ["AUE", "RWE"],
      goals: [2, 1],
      date: "2024-01-19T18:00Z"
    },
    {
      teams: ["JRE", "SCV"],
      goals: [1, 1],
      date: "2024-01-20T13:00Z"
    },
    {
      teams: ["HFC", "FCI"],
      goals: [3, 1],
      date: "2024-01-20T13:00Z"
    },
    {
      teams: ["LÜB", "WMA"],
      goals: [2, 1],
      date: "2024-01-20T13:00Z"
    },
    {
      teams: ["DRE", "SVS"],
      goals: [0, 1],
      date: "2024-01-20T13:00Z"
    },
    {
      teams: ["MÜN", "DUI"],
      goals: [4, 1],
      date: "2024-01-20T15:30Z"
    },
    {
      teams: ["PMS", "BIE"],
      goals: [2, 1],
      date: "2024-01-21T12:30Z"
    },
    {
      teams: ["ULM", "UHA"],
      goals: [2, 0],
      date: "2024-01-21T15:30Z"
    },
    {
      teams: ["SCF2", "BVB2"],
      goals: [0, 0],
      date: "2024-01-21T18:30Z"
    },
    {
      teams: ["VKÖ", "FCS"],
      goals: [2, 5],
      date: "2024-02-21T18:00Z"
    }
  ],
  22: [
    {
      teams: ["RWE", "VKÖ"],
      goals: [3, 1],
      date: "2024-01-23T18:00Z"
    },
    {
      teams: ["WMA", "DRE"],
      goals: [0, 2],
      date: "2024-01-23T18:00Z"
    },
    {
      teams: ["SCV", "FCS"],
      goals: [0, 0],
      date: "2024-01-23T18:00Z"
    },
    {
      teams: ["DUI", "HFC"],
      goals: [2, 3],
      date: "2024-01-23T18:00Z"
    },
    {
      teams: ["LÜB", "MÜN"],
      goals: [1, 1],
      date: "2024-01-23T18:00Z"
    },
    {
      teams: ["FCI", "PMS"],
      goals: [1, 1],
      date: "2024-01-24T18:00Z"
    },
    {
      teams: ["BIE", "ULM"],
      goals: [0, 2],
      date: "2024-01-24T18:00Z"
    },
    {
      teams: ["SVS", "AUE"],
      goals: [1, 0],
      date: "2024-01-24T18:00Z"
    },
    {
      teams: ["UHA", "SCF2"],
      goals: [1, 0],
      date: "2024-01-24T18:00Z"
    },
    {
      teams: ["BVB2", "JRE"],
      goals: [1, 0],
      date: "2024-01-24T18:00Z"
    }
  ],
  23: [
    {
      teams: ["HFC", "WMA"],
      goals: [1, 4],
      date: "2024-01-26T18:00Z"
    },
    {
      teams: ["FCS", "FCI"],
      goals: [0, 2],
      date: "2024-01-27T13:00Z"
    },
    {
      teams: ["SCF2", "SCV"],
      goals: [0, 1],
      date: "2024-01-27T13:00Z"
    },
    {
      teams: ["JRE", "BIE"],
      goals: [2, 0],
      date: "2024-01-27T13:00Z"
    },
    {
      teams: ["VKÖ", "UHA"],
      goals: [2, 1],
      date: "2024-01-27T13:00Z"
    },
    {
      teams: ["ULM", "DUI"],
      goals: [2, 2],
      date: "2024-01-27T13:00Z"
    },
    {
      teams: ["AUE", "LÜB"],
      goals: [2, 0],
      date: "2024-01-27T15:30Z"
    },
    {
      teams: ["PMS", "RWE"],
      goals: [2, 1],
      date: "2024-01-28T12:30Z"
    },
    {
      teams: ["MÜN", "SVS"],
      goals: [1, 1],
      date: "2024-01-28T15:30Z"
    },
    {
      teams: ["DRE", "BVB2"],
      goals: [1, 2],
      date: "2024-01-28T18:30Z"
    }
  ],
  24: [
    {
      teams: ["BVB2", "FCS"],
      goals: [1, 1],
      date: "2024-02-02T18:00Z"
    },
    {
      teams: ["AUE", "MÜN"],
      goals: [0, 0],
      date: "2024-02-03T13:00Z"
    },
    {
      teams: ["RWE", "SCF2"],
      goals: [4, 3],
      date: "2024-02-03T13:00Z"
    },
    {
      teams: ["SVS", "HFC"],
      goals: [1, 1],
      date: "2024-02-03T13:00Z"
    },
    {
      teams: ["UHA", "SCV"],
      goals: [1, 0],
      date: "2024-02-03T13:00Z"
    },
    {
      teams: ["LÜB", "ULM"],
      goals: [1, 1],
      date: "2024-02-03T13:00Z"
    },
    {
      teams: ["BIE", "VKÖ"],
      goals: [0, 2],
      date: "2024-02-03T15:30Z"
    },
    {
      teams: ["FCI", "DRE"],
      goals: [2, 1],
      date: "2024-02-04T12:30Z"
    },
    {
      teams: ["WMA", "PMS"],
      goals: [2, 2],
      date: "2024-02-04T15:30Z"
    },
    {
      teams: ["DUI", "JRE"],
      goals: [0, 1],
      date: "2024-02-04T18:30Z"
    }
  ]
  /*25: [
    {
      teams: ["", ""],
      goals: [null, null],
      date: ""
    },
    {
      teams: ["", ""],
      goals: [null, null],
      date: ""
    },
    {
      teams: ["", ""],
      goals: [null, null],
      date: ""
    },
    {
      teams: ["", ""],
      goals: [null, null],
      date: ""
    },
    {
      teams: ["", ""],
      goals: [null, null],
      date: ""
    },
    {
      teams: ["", ""],
      goals: [null, null],
      date: ""
    },
    {
      teams: ["", ""],
      goals: [null, null],
      date: ""
    },
    {
      teams: ["", ""],
      goals: [null, null],
      date: ""
    },
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
