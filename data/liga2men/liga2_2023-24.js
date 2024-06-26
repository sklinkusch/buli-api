const { makeTable } = require("../helpers");

const matches = {
  1: [
    {
      teams: ["HSV", "S04"],
      goals: [5, 3],
      date: "2023-07-28T18:30Z"
    },
    {
      teams: ["FCK", "STP"],
      goals: [1, 2],
      date: "2023-07-29T11:00Z"
    },
    {
      teams: ["H96", "SVE"],
      goals: [2, 2],
      date: "2023-07-29T11:00Z"
    },
    {
      teams: ["OSN", "KSC"],
      goals: [2, 3],
      date: "2023-07-29T11:00Z"
    },
    {
      teams: ["WIE", "FCM"],
      goals: [1, 1],
      date: "2023-07-29T11:00Z"
    },
    {
      teams: ["DÜS", "BSC"],
      goals: [1, 0],
      date: "2023-07-29T18:30Z"
    },
    {
      teams: ["SGF", "P07"],
      goals: [5, 0],
      date: "2023-07-30T11:30Z"
    },
    {
      teams: ["ROS", "FCN"],
      goals: [2, 0],
      date: "2023-07-30T11:30Z"
    },
    {
      teams: ["EBS", "KIE"],
      goals: [0, 1],
      date: "2023-07-30T11:30Z"
    }
  ],
  2: [
    {
      teams: ["BSC", "WIE"],
      goals: [0, 1],
      date: "2023-08-04T16:30Z"
    },
    {
      teams: ["P07", "OSN"],
      goals: [1, 1],
      date: "2023-08-04T16:30Z"
    },
    {
      teams: ["STP", "DÜS"],
      goals: [0, 0],
      date: "2023-08-05T11:00Z"
    },
    {
      teams: ["KIE", "SGF"],
      goals: [2, 1],
      date: "2023-08-05T11:00Z"
    },
    {
      teams: ["SVE", "ROS"],
      goals: [1, 2],
      date: "2023-08-05T11:00Z"
    },
    {
      teams: ["S04", "FCK"],
      goals: [3, 0],
      date: "2023-08-05T18:30Z"
    },
    {
      teams: ["KSC", "HSV"],
      goals: [2, 2],
      date: "2023-08-06T11:30Z"
    },
    {
      teams: ["FCM", "EBS"],
      goals: [2, 1],
      date: "2023-08-06T11:30Z"
    },
    {
      teams: ["FCN", "H96"],
      goals: [2, 2],
      date: "2023-08-06T11:30Z"
    }
  ],
  3: [
    {
      teams: ["FCK", "SVE"],
      goals: [3, 2],
      date: "2023-08-18T16:30Z"
    },
    {
      teams: ["WIE", "KSC"],
      goals: [1, 0],
      date: "2023-08-18T16:30Z"
    },
    {
      teams: ["DÜS", "P07"],
      goals: [1, 2],
      date: "2023-08-19T11:00Z"
    },
    {
      teams: ["SGF", "STP"],
      goals: [0, 0],
      date: "2023-08-19T11:00Z"
    },
    {
      teams: ["ROS", "H96"],
      goals: [1, 2],
      date: "2023-08-19T11:00Z"
    },
    {
      teams: ["HSV", "BSC"],
      goals: [3, 0],
      date: "2023-08-19T18:30Z"
    },
    {
      teams: ["KIE", "FCM"],
      goals: [2, 4],
      date: "2023-08-20T11:30Z"
    },
    {
      teams: ["EBS", "S04"],
      goals: [1, 0],
      date: "2023-08-20T11:30Z"
    },
    {
      teams: ["OSN", "FCN"],
      goals: [2, 3],
      date: "2023-08-20T11:30Z"
    }
  ],
  4: [
    {
      teams: ["S04", "KIE"],
      goals: [0, 2],
      date: "2023-08-25T16:30Z"
    },
    {
      teams: ["P07", "FCK"],
      goals: [1, 2],
      date: "2023-08-25T16:30Z"
    },
    {
      teams: ["BSC", "SGF"],
      goals: [5, 0],
      date: "2023-08-26T11:00Z"
    },
    {
      teams: ["ROS", "OSN"],
      goals: [2, 1],
      date: "2023-08-26T11:00Z"
    },
    {
      teams: ["SVE", "DÜS"],
      goals: [0, 5],
      date: "2023-08-26T11:00Z"
    },
    {
      teams: ["H96", "HSV"],
      goals: [0, 1],
      date: "2023-08-26T18:30Z"
    },
    {
      teams: ["STP", "FCM"],
      goals: [0, 0],
      date: "2023-08-27T11:30Z"
    },
    {
      teams: ["KSC", "EBS"],
      goals: [2, 0],
      date: "2023-08-27T11:30Z"
    },
    {
      teams: ["FCN", "WIE"],
      goals: [2, 1],
      date: "2023-08-27T11:30Z"
    }
  ],
  5: [
    {
      teams: ["DÜS", "KSC"],
      goals: [3, 1],
      date: "2023-09-01T16:30Z"
    },
    {
      teams: ["EBS", "STP"],
      goals: [1, 1],
      date: "2023-09-01T16:30Z"
    },
    {
      teams: ["KIE", "P07"],
      goals: [2, 1],
      date: "2023-09-02T11:00Z"
    },
    {
      teams: ["FCM", "BSC"],
      goals: [6, 4],
      date: "2023-09-02T11:00Z"
    },
    {
      teams: ["WIE", "S04"],
      goals: [1, 1],
      date: "2023-09-02T11:00Z"
    },
    {
      teams: ["FCK", "FCN"],
      goals: [3, 1],
      date: "2023-09-02T18:30Z"
    },
    {
      teams: ["HSV", "ROS"],
      goals: [2, 0],
      date: "2023-09-03T11:30Z"
    },
    {
      teams: ["SGF", "H96"],
      goals: [1, 3],
      date: "2023-09-03T11:30Z"
    },
    {
      teams: ["OSN", "SVE"],
      goals: [0, 1],
      date: "2023-09-03T11:30Z"
    }
  ],
  6: [
    {
      teams: ["P07", "WIE"],
      goals: [2, 1],
      date: "2023-09-15T16:30Z"
    },
    {
      teams: ["FCN", "SGF"],
      goals: [1, 1],
      date: "2023-09-15T16:30Z"
    },
    {
      teams: ["KSC", "FCK"],
      goals: [1, 1],
      date: "2023-09-16T11:00Z"
    },
    {
      teams: ["ROS", "DÜS"],
      goals: [1, 3],
      date: "2023-09-16T11:00Z"
    },
    {
      teams: ["SVE", "HSV"],
      goals: [2, 1],
      date: "2023-09-16T11:00Z"
    },
    {
      teams: ["S04", "FCM"],
      goals: [4, 3],
      date: "2023-09-16T18:30Z"
    },
    {
      teams: ["BSC", "EBS"],
      goals: [3, 0],
      date: "2023-09-17T11:30Z"
    },
    {
      teams: ["STP", "KIE"],
      goals: [5, 1],
      date: "2023-09-17T11:30Z"
    },
    {
      teams: ["H96", "OSN"],
      goals: [7, 0],
      date: "2023-09-17T11:30Z"
    }
  ],
  7: [
    {
      teams: ["FCM", "P07"],
      goals: [1, 1],
      date: "2023-09-22T16:30Z"
    },
    {
      teams: ["OSN", "HSV"],
      goals: [2, 1],
      date: "2023-09-22T16:30Z"
    },
    {
      teams: ["SGF", "KSC"],
      goals: [4, 3],
      date: "2023-09-23T11:00Z"
    },
    {
      teams: ["EBS", "FCN"],
      goals: [2, 2],
      date: "2023-09-23T11:00Z"
    },
    {
      teams: ["WIE", "SVE"],
      goals: [0, 2],
      date: "2023-09-23T11:00Z"
    },
    {
      teams: ["STP", "S04"],
      goals: [3, 1],
      date: "2023-09-23T18:30Z"
    },
    {
      teams: ["DÜS", "H96"],
      goals: [1, 1],
      date: "2023-09-24T11:30Z"
    },
    {
      teams: ["KIE", "BSC"],
      goals: [2, 3],
      date: "2023-09-24T11:30Z"
    },
    {
      teams: ["FCK", "ROS"],
      goals: [3, 1],
      date: "2023-09-24T11:30Z"
    }
  ],
  8: [
    {
      teams: ["HSV", "DÜS"],
      goals: [1, 0],
      date: "2023-09-29T16:30Z"
    },
    {
      teams: ["P07", "S04"],
      goals: [3, 1],
      date: "2023-09-29T16:30Z"
    },
    {
      teams: ["KSC", "KIE"],
      goals: [0, 2],
      date: "2023-09-30T11:00Z"
    },
    {
      teams: ["H96", "WIE"],
      goals: [2, 0],
      date: "2023-09-30T11:00Z"
    },
    {
      teams: ["ROS", "EBS"],
      goals: [1, 0],
      date: "2023-09-30T11:00Z"
    },
    {
      teams: ["BSC", "STP"],
      goals: [1, 2],
      date: "2023-09-30T18:30Z"
    },
    {
      teams: ["FCN", "FCM"],
      goals: [1, 0],
      date: "2023-10-01T11:30Z"
    },
    {
      teams: ["SVE", "SGF"],
      goals: [1, 1],
      date: "2023-10-01T11:30Z"
    },
    {
      teams: ["OSN", "FCK"],
      goals: [2, 2],
      date: "2023-10-01T11:30Z"
    }
  ],
  9: [
    {
      teams: ["DÜS", "OSN"],
      goals: [1, 1],
      date: "2023-10-06T16:30Z"
    },
    {
      teams: ["FCK", "H96"],
      goals: [3, 1],
      date: "2023-10-06T16:30Z"
    },
    {
      teams: ["FCM", "KSC"],
      goals: [1, 1],
      date: "2023-10-07T11:00Z"
    },
    {
      teams: ["SGF", "ROS"],
      goals: [1, 0],
      date: "2023-10-07T11:00Z"
    },
    {
      teams: ["WIE", "HSV"],
      goals: [1, 1],
      date: "2023-10-07T11:00Z"
    },
    {
      teams: ["STP", "FCN"],
      goals: [5, 1],
      date: "2023-10-07T18:30Z"
    },
    {
      teams: ["S04", "BSC"],
      goals: [1, 2],
      date: "2023-10-08T11:30Z"
    },
    {
      teams: ["KIE", "SVE"],
      goals: [1, 1],
      date: "2023-10-08T11:30Z"
    },
    {
      teams: ["EBS", "P07"],
      goals: [1, 3],
      date: "2023-10-08T11:30Z"
    }
  ],
  10: [
    {
      teams: ["H96", "FCM"],
      goals: [2, 1],
      date: "2023-10-20T16:30Z"
    },
    {
      teams: ["SVE", "EBS"],
      goals: [3, 0],
      date: "2023-10-20T16:30Z"
    },
    {
      teams: ["HSV", "SGF"],
      goals: [2, 0],
      date: "2023-10-21T11:00Z"
    },
    {
      teams: ["P07", "STP"],
      goals: [2, 2],
      date: "2023-10-21T11:00Z"
    },
    {
      teams: ["OSN", "WIE"],
      goals: [0, 2],
      date: "2023-10-21T11:00Z"
    },
    {
      teams: ["DÜS", "FCK"],
      goals: [4, 3],
      date: "2023-10-21T18:30Z"
    },
    {
      teams: ["KSC", "S04"],
      goals: [3, 0],
      date: "2023-10-22T11:30Z"
    },
    {
      teams: ["ROS", "KIE"],
      goals: [1, 3],
      date: "2023-10-22T11:30Z"
    },
    {
      teams: ["FCN", "BSC"],
      goals: [3, 1],
      date: "2023-10-22T11:30Z"
    }
  ],
  11: [
    {
      teams: ["SGF", "OSN"],
      goals: [4, 0],
      date: "2023-10-27T16:30Z"
    },
    {
      teams: ["EBS", "DÜS"],
      goals: [1, 4],
      date: "2023-10-27T16:30Z"
    },
    {
      teams: ["S04", "H96"],
      goals: [3, 2],
      date: "2023-10-28T11:00Z"
    },
    {
      teams: ["BSC", "P07"],
      goals: [3, 1],
      date: "2023-10-28T11:00Z"
    },
    {
      teams: ["STP", "KSC"],
      goals: [2, 1],
      date: "2023-10-28T11:00Z"
    },
    {
      teams: ["FCK", "HSV"],
      goals: [3, 3],
      date: "2023-10-28T18:30Z"
    },
    {
      teams: ["KIE", "FCN"],
      goals: [0, 2],
      date: "2023-10-29T12:30Z"
    },
    {
      teams: ["FCM", "SVE"],
      goals: [1, 2],
      date: "2023-10-29T12:30Z"
    },
    {
      teams: ["WIE", "ROS"],
      goals: [1, 0],
      date: "2023-10-29T12:30Z"
    }
  ],
  12: [
    {
      teams: ["DÜS", "WIE"],
      goals: [1, 3],
      date: "2023-11-03T17:30Z"
    },
    {
      teams: ["SVE", "STP"],
      goals: [0, 2],
      date: "2023-11-03T17:30Z"
    },
    {
      teams: ["FCK", "SGF"],
      goals: [0, 2],
      date: "2023-11-04T12:00Z"
    },
    {
      teams: ["FCN", "S04"],
      goals: [1, 2],
      date: "2023-11-04T12:00Z"
    },
    {
      teams: ["OSN", "KIE"],
      goals: [1, 1],
      date: "2023-11-04T12:00Z"
    },
    {
      teams: ["HSV", "FCM"],
      goals: [2, 0],
      date: "2023-11-04T19:30Z"
    },
    {
      teams: ["KSC", "P07"],
      goals: [0, 3],
      date: "2023-11-05T12:30Z"
    },
    {
      teams: ["H96", "EBS"],
      goals: [2, 0],
      date: "2023-11-05T12:30Z"
    },
    {
      teams: ["ROS", "BSC"],
      goals: [0, 0],
      date: "2023-11-05T12:30Z"
    }
  ],
  13: [
    {
      teams: ["S04", "SVE"],
      goals: [1, 2],
      date: "2023-11-10T17:30Z"
    },
    {
      teams: ["STP", "H96"],
      goals: [0, 0],
      date: "2023-11-10T17:30Z"
    },
    {
      teams: ["P07", "FCN"],
      goals: [1, 3],
      date: "2023-11-11T12:00Z"
    },
    {
      teams: ["KIE", "HSV"],
      goals: [4, 2],
      date: "2023-11-11T12:00Z"
    },
    {
      teams: ["EBS", "OSN"],
      goals: [3, 2],
      date: "2023-11-11T12:00Z"
    },
    {
      teams: ["BSC", "KSC"],
      goals: [2, 2],
      date: "2023-11-11T19:30Z"
    },
    {
      teams: ["FCM", "ROS"],
      goals: [1, 2],
      date: "2023-11-12T12:30Z"
    },
    {
      teams: ["SGF", "DÜS"],
      goals: [1, 0],
      date: "2023-11-12T12:30Z"
    },
    {
      teams: ["WIE", "FCK"],
      goals: [2, 1],
      date: "2023-11-12T12:30Z"
    }
  ],
  14: [
    {
      teams: ["HSV", "EBS"],
      goals: [2, 1],
      date: "2023-11-24T17:30Z"
    },
    {
      teams: ["H96", "BSC"],
      goals: [2, 2],
      date: "2023-11-24T17:30Z"
    },
    {
      teams: ["ROS", "STP"],
      goals: [2, 3],
      date: "2023-11-25T12:00Z"
    },
    {
      teams: ["SVE", "P07"],
      goals: [4, 1],
      date: "2023-11-25T12:00Z"
    },
    {
      teams: ["OSN", "FCM"],
      goals: [0, 2],
      date: "2023-11-25T12:00Z"
    },
    {
      teams: ["DÜS", "S04"],
      goals: [5, 3],
      date: "2023-11-25T19:30Z"
    },
    {
      teams: ["KSC", "FCN"],
      goals: [4, 1],
      date: "2023-11-26T12:30Z"
    },
    {
      teams: ["FCK", "KIE"],
      goals: [0, 3],
      date: "2023-11-26T12:30Z"
    },
    {
      teams: ["SGF", "WIE"],
      goals: [2, 0],
      date: "2023-11-26T12:30Z"
    }
  ],
  15: [
    {
      teams: ["S04", "OSN"],
      goals: [4, 0],
      date: "2023-12-01T17:30Z"
    },
    {
      teams: ["STP", "HSV"],
      goals: [2, 2],
      date: "2023-12-01T17:30Z"
    },
    {
      teams: ["KIE", "WIE"],
      goals: [3, 2],
      date: "2023-12-02T12:00Z"
    },
    {
      teams: ["FCN", "DÜS"],
      goals: [0, 5],
      date: "2023-12-02T12:00Z"
    },
    {
      teams: ["EBS", "SGF"],
      goals: [0, 1],
      date: "2023-12-02T12:00Z"
    },
    {
      teams: ["FCM", "FCK"],
      goals: [4, 1],
      date: "2023-12-02T19:30Z"
    },
    {
      teams: ["BSC", "SVE"],
      goals: [5, 1],
      date: "2023-12-03T12:30Z"
    },
    {
      teams: ["P07", "H96"],
      goals: [1, 0],
      date: "2023-12-03T12:30Z"
    },
    {
      teams: ["KSC", "ROS"],
      goals: [2, 2],
      date: "2023-12-03T12:30Z"
    }
  ],
  16: [
    {
      teams: ["H96", "KSC"],
      goals: [2, 2],
      date: "2023-12-08T17:30Z"
    },
    {
      teams: ["WIE", "EBS"],
      goals: [1, 3],
      date: "2023-12-08T17:30Z"
    },
    {
      teams: ["HSV", "P07"],
      goals: [1, 2],
      date: "2023-12-09T12:00Z"
    },
    {
      teams: ["FCK", "BSC"],
      goals: [1, 2],
      date: "2023-12-09T12:00Z"
    },
    {
      teams: ["SGF", "FCM"],
      goals: [1, 1],
      date: "2023-12-09T12:00Z"
    },
    {
      teams: ["OSN", "STP"],
      goals: [1, 1],
      date: "2023-12-09T19:30Z"
    },
    {
      teams: ["DÜS", "KIE"],
      goals: [0, 1],
      date: "2023-12-10T12:30Z"
    },
    {
      teams: ["ROS", "S04"],
      goals: [0, 2],
      date: "2023-12-10T12:30Z"
    },
    {
      teams: ["SVE", "FCN"],
      goals: [0, 1],
      date: "2023-12-10T12:30Z"
    }
  ],
  17: [
    {
      teams: ["S04", "SGF"],
      goals: [2, 2],
      date: "2023-12-15T17:30Z"
    },
    {
      teams: ["P07", "ROS"],
      goals: [3, 0],
      date: "2023-12-15T17:30Z"
    },
    {
      teams: ["BSC", "OSN"],
      goals: [0, 0],
      date: "2023-12-16T12:00Z"
    },
    {
      teams: ["FCM", "DÜS"],
      goals: [2, 3],
      date: "2023-12-16T12:00Z"
    },
    {
      teams: ["FCN", "HSV"],
      goals: [0, 2],
      date: "2023-12-16T12:00Z"
    },
    {
      teams: ["KIE", "H96"],
      goals: [3, 0],
      date: "2023-12-16T19:30Z"
    },
    {
      teams: ["STP", "WIE"],
      goals: [1, 1],
      date: "2023-12-17T12:30Z"
    },
    {
      teams: ["KSC", "SVE"],
      goals: [3, 2],
      date: "2023-12-17T12:30Z"
    },
    {
      teams: ["EBS", "FCK"],
      goals: [2, 1],
      date: "2023-12-17T12:30Z"
    }
  ],
  18: [
    {
      teams: ["KIE", "EBS"],
      goals: [1, 2],
      date: "2024-01-19T17:30Z"
    },
    {
      teams: ["KSC", "OSN"],
      goals: [2, 1],
      date: "2024-01-19T17:30Z"
    },
    {
      teams: ["STP", "FCK"],
      goals: [2, 0],
      date: "2024-01-20T12:00Z"
    },
    {
      teams: ["SVE", "H96"],
      goals: [2, 2],
      date: "2024-01-20T12:00Z"
    },
    {
      teams: ["FCN", "ROS"],
      goals: [3, 0],
      date: "2024-01-20T12:00Z"
    },
    {
      teams: ["S04", "HSV"],
      goals: [0, 2],
      date: "2024-01-20T19:30Z"
    },
    {
      teams: ["BSC", "DÜS"],
      goals: [2, 2],
      date: "2024-01-21T12:30Z"
    },
    {
      teams: ["P07", "SGF"],
      goals: [0, 1],
      date: "2024-01-21T12:30Z"
    },
    {
      teams: ["FCM", "WIE"],
      goals: [1, 0],
      date: "2024-01-21T12:30Z"
    }
  ],
  19: [
    {
      teams: ["FCK", "S04"],
      goals: [4, 1],
      date: "2024-01-26T17:30Z"
    },
    {
      teams: ["H96", "FCN"],
      goals: [3, 0],
      date: "2024-01-26T17:30Z"
    },
    {
      teams: ["WIE", "BSC"],
      goals: [3, 1],
      date: "2024-01-27T12:00Z"
    },
    {
      teams: ["OSN", "P07"],
      goals: [0, 0],
      date: "2024-01-27T12:00Z"
    },
    {
      teams: ["ROS", "SVE"],
      goals: [2, 1],
      date: "2024-01-27T12:00Z"
    },
    {
      teams: ["DÜS", "STP"],
      goals: [1, 2],
      date: "2024-01-27T19:30Z"
    },
    {
      teams: ["HSV", "KSC"],
      goals: [3, 4],
      date: "2024-01-28T12:30Z"
    },
    {
      teams: ["SGF", "KIE"],
      goals: [2, 1],
      date: "2024-01-27T12:00Z"
    },
    {
      teams: ["EBS", "FCM"],
      goals: [1, 0],
      date: "2024-01-27T12:00Z"
    }
  ],
  20: [
    {
      teams: ["FCM", "KIE"],
      goals: [1, 1],
      date: "2024-02-02T17:30Z"
    },
    {
      teams: ["KSC", "WIE"],
      goals: [2, 2],
      date: "2024-02-02T17:30Z"
    },
    {
      teams: ["STP", "SGF"],
      goals: [3, 2],
      date: "2024-02-03T12:00Z"
    },
    {
      teams: ["S04", "EBS"],
      goals: [1, 0],
      date: "2024-02-03T12:00Z"
    },
    {
      teams: ["FCN", "OSN"],
      goals: [2, 2],
      date: "2024-02-03T12:00Z"
    },
    {
      teams: ["BSC", "HSV"],
      goals: [1, 2],
      date: "2024-02-03T19:30Z"
    },
    {
      teams: ["P07", "DÜS"],
      goals: [4, 3],
      date: "2024-02-04T12:30Z"
    },
    {
      teams: ["SVE", "FCK"],
      goals: [2, 1],
      date: "2024-02-04T12:30Z"
    },
    {
      teams: ["H96", "ROS"],
      goals: [2, 1],
      date: "2024-02-04T12:30Z"
    }
  ],
  21: [
    {
      teams: ["HSV", "H96"],
      goals: [3, 4],
      date: "2024-02-09T17:30Z"
    },
    {
      teams: ["WIE", "FCN"],
      goals: [1, 1],
      date: "2024-02-09T17:30Z"
    },
    {
      teams: ["FCM", "STP"],
      goals: [1, 0],
      date: "2024-02-10T12:00Z"
    },
    {
      teams: ["EBS", "KSC"],
      goals: [2, 0],
      date: "2024-02-10T12:00Z"
    },
    {
      teams: ["DÜS", "SVE"],
      goals: [1, 1],
      date: "2024-02-10T12:00Z"
    },
    {
      teams: ["FCK", "P07"],
      goals: [1, 2],
      date: "2024-02-10T19:30Z"
    },
    {
      teams: ["KIE", "S04"],
      goals: [1, 0],
      date: "2024-02-11T12:30Z"
    },
    {
      teams: ["SGF", "BSC"],
      goals: [1, 2],
      date: "2024-02-11T12:30Z"
    },
    {
      teams: ["OSN", "ROS"],
      goals: [0, 0],
      date: "2024-02-11T12:30Z"
    }
  ],
  22: [
    {
      teams: ["BSC", "FCM"],
      goals: [3, 2],
      date: "2024-02-16T17:30Z"
    },
    {
      teams: ["H96", "SGF"],
      goals: [2, 1],
      date: "2024-02-16T17:30Z"
    },
    {
      teams: ["ROS", "HSV"],
      goals: [2, 2],
      date: "2024-02-17T12:00Z"
    },
    {
      teams: ["P07", "KIE"],
      goals: [0, 4],
      date: "2024-02-17T12:00Z"
    },
    {
      teams: ["S04", "WIE"],
      goals: [1, 0],
      date: "2024-02-17T12:00Z"
    },
    {
      teams: ["KSC", "DÜS"],
      goals: [2, 2],
      date: "2024-02-17T19:30Z"
    },
    {
      teams: ["FCN", "FCK"],
      goals: [1, 1],
      date: "2024-02-18T12:30Z"
    },
    {
      teams: ["STP", "EBS"],
      goals: [1, 0],
      date: "2024-02-18T12:30Z"
    },
    {
      teams: ["SVE", "OSN"],
      goals: [3, 1],
      date: "2024-02-18T12:30Z"
    }
  ],
  23: [
    {
      teams: ["KIE", "STP"],
      goals: [3, 4],
      date: "2024-02-23T17:30Z"
    },
    {
      teams: ["WIE", "P07"],
      goals: [1, 2],
      date: "2024-02-23T17:30Z"
    },
    {
      teams: ["EBS", "BSC"],
      goals: [1, 1],
      date: "2024-02-24T12:00Z"
    },
    {
      teams: ["FCK", "KSC"],
      goals: [0, 4],
      date: "2024-02-24T12:00Z"
    },
    {
      teams: ["OSN", "H96"],
      goals: [1, 0],
      date: "2024-02-24T12:00Z"
    },
    {
      teams: ["FCM", "S04"],
      goals: [3, 0],
      date: "2024-02-24T19:30Z"
    },
    {
      teams: ["DÜS", "ROS"],
      goals: [2, 0],
      date: "2024-02-25T12:30Z"
    },
    {
      teams: ["SGF", "FCN"],
      goals: [2, 1],
      date: "2024-02-25T12:30Z"
    },
    {
      teams: ["HSV", "SVE"],
      goals: [1, 0],
      date: "2024-02-25T12:30Z"
    }
  ],
  24: [
    {
      teams: ["S04", "STP"],
      goals: [3, 1],
      date: "2024-03-01T17:30Z"
    },
    {
      teams: ["BSC", "KIE"],
      goals: [2, 2],
      date: "2024-03-01T17:30Z"
    },
    {
      teams: ["H96", "DÜS"],
      goals: [2, 2],
      date: "2024-03-02T12:00Z"
    },
    {
      teams: ["ROS", "FCK"],
      goals: [0, 3],
      date: "2024-03-02T12:00Z"
    },
    {
      teams: ["FCN", "EBS"],
      goals: [2, 1],
      date: "2024-03-02T12:00Z"
    },
    {
      teams: ["KSC", "SGF"],
      goals: [4, 0],
      date: "2024-03-02T19:30Z"
    },
    {
      teams: ["P07", "FCM"],
      goals: [0, 0],
      date: "2024-03-03T12:30Z"
    },
    {
      teams: ["HSV", "OSN"],
      goals: [1, 2],
      date: "2024-03-03T12:30Z"
    },
    {
      teams: ["SVE", "WIE"],
      goals: [0, 3],
      date: "2024-03-03T12:30Z"
    }
  ],
  25: [
    {
      teams: ["DÜS", "HSV"],
      goals: [2, 0],
      date: "2024-03-08T17:30Z"
    },
    {
      teams: ["EBS", "ROS"],
      goals: [0, 1],
      date: "2024-03-08T17:30Z"
    },
    {
      teams: ["S04", "P07"],
      goals: [3, 3],
      date: "2024-03-09T12:00Z"
    },
    {
      teams: ["KIE", "KSC"],
      goals: [1, 0],
      date: "2024-03-09T12:00Z"
    },
    {
      teams: ["WIE", "H96"],
      goals: [1, 1],
      date: "2024-03-09T12:00Z"
    },
    {
      teams: ["FCM", "FCN"],
      goals: [0, 1],
      date: "2024-03-09T19:30Z"
    },
    {
      teams: ["STP", "BSC"],
      goals: [2, 0],
      date: "2024-03-10T12:30Z"
    },
    {
      teams: ["SGF", "SVE"],
      goals: [1, 4],
      date: "2024-03-10T12:30Z"
    },
    {
      teams: ["FCK", "OSN"],
      goals: [3, 2],
      date: "2024-03-10T12:30Z"
    }
  ],
  26: [
    {
      teams: ["OSN", "DÜS"],
      goals: [0, 4],
      date: "2024-03-15T17:30Z"
    },
    {
      teams: ["P07", "EBS"],
      goals: [1, 2],
      date: "2024-03-15T17:30Z"
    },
    {
      teams: ["FCN", "STP"],
      goals: [0, 2],
      date: "2024-03-16T12:00Z"
    },
    {
      teams: ["SVE", "KIE"],
      goals: [0, 2],
      date: "2024-03-16T12:00Z"
    },
    {
      teams: ["ROS", "SGF"],
      goals: [1, 0],
      date: "2024-03-16T12:00Z"
    },
    {
      teams: ["H96", "FCK"],
      goals: [1, 1],
      date: "2024-03-16T19:30Z"
    },
    {
      teams: ["BSC", "S04"],
      goals: [5, 2],
      date: "2024-03-17T12:30Z"
    },
    {
      teams: ["KSC", "FCM"],
      goals: [7, 0],
      date: "2024-03-17T12:30Z"
    },
    {
      teams: ["HSV", "WIE"],
      goals: [3, 0],
      date: "2024-03-17T12:30Z"
    }
  ],
  27: [
    {
      teams: ["FCK", "DÜS"],
      goals: [1, 3],
      date: "2024-03-30T12:00Z"
    },
    {
      teams: ["KIE", "ROS"],
      goals: [2, 0],
      date: "2024-03-30T12:00Z"
    },
    {
      teams: ["EBS", "SVE"],
      goals: [5, 0],
      date: "2024-03-30T12:00Z"
    },
    {
      teams: ["BSC", "FCN"],
      goals: [3, 3],
      date: "2024-03-30T19:30Z"
    },
    {
      teams: ["SGF", "HSV"],
      goals: [1, 1],
      date: "2024-03-31T11:30Z"
    },
    {
      teams: ["STP", "P07"],
      goals: [2, 1],
      date: "2024-03-31T11:30Z"
    },
    {
      teams: ["S04", "KSC"],
      goals: [0, 0],
      date: "2024-03-31T11:30Z"
    },
    {
      teams: ["FCM", "H96"],
      goals: [0, 3],
      date: "2024-03-31T11:30Z"
    },
    {
      teams: ["WIE", "OSN"],
      goals: [0, 1],
      date: "2024-03-31T11:30Z"
    }
  ],
  28: [
    {
      teams: ["P07", "BSC"],
      goals: [2, 3],
      date: "2024-04-05T16:30Z"
    },
    {
      teams: ["ROS", "WIE"],
      goals: [3, 1],
      date: "2024-04-05T16:30Z"
    },
    {
      teams: ["FCN", "KIE"],
      goals: [0, 4],
      date: "2024-04-06T11:00Z"
    },
    {
      teams: ["HSV", "FCK"],
      goals: [2, 1],
      date: "2024-04-06T11:00Z"
    },
    {
      teams: ["SVE", "FCM"],
      goals: [0, 0],
      date: "2024-04-06T11:00Z"
    },
    {
      teams: ["KSC", "STP"],
      goals: [2, 1],
      date: "2024-04-06T18:30Z"
    },
    {
      teams: ["H96", "S04"],
      goals: [1, 1],
      date: "2024-04-07T11:30Z"
    },
    {
      teams: ["OSN", "SGF"],
      goals: [2, 0],
      date: "2024-04-07T11:30Z"
    },
    {
      teams: ["DÜS", "EBS"],
      goals: [2, 0],
      date: "2024-04-07T11:30Z"
    }
  ],
  29: [
    {
      teams: ["SGF", "FCK"],
      goals: [2, 1],
      date: "2024-04-12T16:30Z"
    },
    {
      teams: ["BSC", "ROS"],
      goals: [4, 0],
      date: "2024-04-12T16:30Z"
    },
    {
      teams: ["WIE", "DÜS"],
      goals: [0, 2],
      date: "2024-04-13T11:00Z"
    },
    {
      teams: ["P07", "KSC"],
      goals: [1, 1],
      date: "2024-04-13T11:00Z"
    },
    {
      teams: ["KIE", "OSN"],
      goals: [4, 0],
      date: "2024-04-13T11:00Z"
    },
    {
      teams: ["S04", "FCN"],
      goals: [2, 0],
      date: "2024-04-13T18:30Z"
    },
    {
      teams: ["FCM", "HSV"],
      goals: [2, 2],
      date: "2024-04-14T11:30Z"
    },
    {
      teams: ["EBS", "H96"],
      goals: [0, 0],
      date: "2024-04-14T11:30Z"
    },
    {
      teams: ["STP", "SVE"],
      goals: [3, 4],
      date: "2024-04-14T11:30Z"
    }
  ],
  30: [
    {
      teams: ["SVE", "S04"],
      goals: [1, 1],
      date: "2024-04-19T16:30Z"
    },
    {
      teams: ["FCN", "P07"],
      goals: [0, 2],
      date: "2024-04-19T16:30Z"
    },
    {
      teams: ["DÜS", "SGF"],
      goals: [1, 0],
      date: "2024-04-20T11:00Z"
    },
    {
      teams: ["OSN", "EBS"],
      goals: [0, 3],
      date: "2024-04-20T11:00Z"
    },
    {
      teams: ["FCK", "WIE"],
      goals: [1, 1],
      date: "2024-04-20T11:00Z"
    },
    {
      teams: ["HSV", "KIE"],
      goals: [0, 1],
      date: "2024-04-20T18:30Z"
    },
    {
      teams: ["KSC", "BSC"],
      goals: [3, 2],
      date: "2024-04-21T11:30Z"
    },
    {
      teams: ["H96", "STP"],
      goals: [1, 2],
      date: "2024-04-21T11:30Z"
    },
    {
      teams: ["ROS", "FCM"],
      goals: [0, 2],
      date: "2024-04-21T11:30Z"
    }
  ],
  31: [
    {
      teams: ["BSC", "H96"],
      goals: [1, 1],
      date: "2024-04-26T16:30Z"
    },
    {
      teams: ["STP", "ROS"],
      goals: [1, 0],
      date: "2024-04-26T16:30Z"
    },
    {
      teams: ["EBS", "HSV"],
      goals: [0, 4],
      date: "2024-04-27T11:00Z"
    },
    {
      teams: ["KIE", "FCK"],
      goals: [1, 3],
      date: "2024-04-27T11:00Z"
    },
    {
      teams: ["P07", "SVE"],
      goals: [3, 1],
      date: "2024-04-27T11:00Z"
    },
    {
      teams: ["S04", "DÜS"],
      goals: [1, 1],
      date: "2024-04-27T18:30Z"
    },
    {
      teams: ["FCN", "KSC"],
      goals: [0, 1],
      date: "2024-04-28T11:30Z"
    },
    {
      teams: ["WIE", "SGF"],
      goals: [3, 5],
      date: "2024-04-28T11:30Z"
    },
    {
      teams: ["FCM", "OSN"],
      goals: [1, 1],
      date: "2024-04-28T11:30Z"
    }
  ],
  32: [
    {
      teams: ["HSV", "STP"],
      goals: [1, 0],
      date: "2024-05-03T16:30Z"
    },
    {
      teams: ["DÜS", "FCN"],
      goals: [3, 1],
      date: "2024-05-03T16:30Z"
    },
    {
      teams: ["ROS", "KSC"],
      goals: [1, 2],
      date: "2024-05-04T11:00Z"
    },
    {
      teams: ["SGF", "EBS"],
      goals: [3, 3],
      date: "2024-05-04T11:00Z"
    },
    {
      teams: ["FCK", "FCM"],
      goals: [4, 1],
      date: "2024-05-04T18:30Z"
    },
    {
      teams: ["SVE", "BSC"],
      goals: [4, 2],
      date: "2024-05-05T11:30Z"
    },
    {
      teams: ["H96", "P07"],
      goals: [3, 2],
      date: "2024-05-05T11:30Z"
    },
    {
      teams: ["WIE", "KIE"],
      goals: [0, 1],
      date: "2024-05-05T11:30Z"
    },
    {
      teams: ["OSN", "S04"],
      goals: [0, 4],
      date: "2024-05-07T16:30Z"
    }
  ],
  33: [
    {
      teams: ["P07", "HSV"],
      goals: [1, 0],
      date: "2024-05-10T16:30Z"
    },
    {
      teams: ["FCM", "SGF"],
      goals: [0, 0],
      date: "2024-05-10T16:30Z"
    },
    {
      teams: ["BSC", "FCK"],
      goals: [3, 1],
      date: "2024-05-11T11:00Z"
    },
    {
      teams: ["S04", "ROS"],
      goals: [2, 1],
      date: "2024-05-11T11:00Z"
    },
    {
      teams: ["FCN", "SVE"],
      goals: [3, 0],
      date: "2024-05-11T11:00Z"
    },
    {
      teams: ["KIE", "DÜS"],
      goals: [1, 1],
      date: "2024-05-11T18:30Z"
    },
    {
      teams: ["KSC", "H96"],
      goals: [1, 2],
      date: "2024-05-12T11:30Z"
    },
    {
      teams: ["STP", "OSN"],
      goals: [3, 1],
      date: "2024-05-12T11:30Z"
    },
    {
      teams: ["EBS", "WIE"],
      goals: [1, 0],
      date: "2024-05-12T11:30Z"
    }
  ],
  34: [
    {
      teams: ["SGF", "S04"],
      goals: [2, 0],
      date: "2024-05-19T13:30Z"
    },
    {
      teams: ["OSN", "BSC"],
      goals: [2, 1],
      date: "2024-05-19T13:30Z"
    },
    {
      teams: ["WIE", "STP"],
      goals: [1, 2],
      date: "2024-05-19T13:30Z"
    },
    {
      teams: ["ROS", "P07"],
      goals: [1, 2],
      date: "2024-05-19T13:30Z"
    },
    {
      teams: ["SVE", "KSC"],
      goals: [0, 3],
      date: "2024-05-19T13:30Z"
    },
    {
      teams: ["H96", "KIE"],
      goals: [1, 2],
      date: "2024-05-19T13:30Z"
    },
    {
      teams: ["DÜS", "FCM"],
      goals: [3, 2],
      date: "2024-05-19T13:30Z"
    },
    {
      teams: ["HSV", "FCN"],
      goals: [4, 1],
      date: "2024-05-19T13:30Z"
    },
    {
      teams: ["FCK", "EBS"],
      goals: [5, 0],
      date: "2024-05-19T13:30Z"
    }
  ]
};

const table = makeTable(matches);

const data = {
  matches: matches,
  table: table
};

module.exports = data;
