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
      goals: [null, null],
      date: "2023-09-22T16:30Z"
    },
    {
      teams: ["OSN", "HSV"],
      goals: [null, null],
      date: "2023-09-22T16:30Z"
    },
    {
      teams: ["SGF", "KSC"],
      goals: [null, null],
      date: "2023-09-23T11:00Z"
    },
    {
      teams: ["EBS", "FCN"],
      goals: [null, null],
      date: "2023-09-23T11:00Z"
    },
    {
      teams: ["WIE", "SVE"],
      goals: [null, null],
      date: "2023-09-23T11:00Z"
    },
    {
      teams: ["STP", "S04"],
      goals: [null, null],
      date: "2023-09-23T18:30Z"
    },
    {
      teams: ["DÜS", "H96"],
      goals: [null, null],
      date: "2023-09-24T11:30Z"
    },
    {
      teams: ["KIE", "BSC"],
      goals: [null, null],
      date: "2023-09-24T11:30Z"
    },
    {
      teams: ["FCK", "ROS"],
      goals: [null, null],
      date: "2023-09-24T11:30Z"
    }
  ],
  8: [
    {
      teams: ["BSC", "STP"],
      goals: [null, null],
      date: "01.10.23"
    },
    {
      teams: ["HSV", "DÜS"],
      goals: [null, null],
      date: "01.10.23"
    },
    {
      teams: ["P07", "S04"],
      goals: [null, null],
      date: "01.10.23"
    },
    {
      teams: ["KSC", "KIE"],
      goals: [null, null],
      date: "01.10.23"
    },
    {
      teams: ["H96", "WIE"],
      goals: [null, null],
      date: "01.10.23"
    },
    {
      teams: ["ROS", "EBS"],
      goals: [null, null],
      date: "01.10.23"
    },
    {
      teams: ["FCN", "FCM"],
      goals: [null, null],
      date: "01.10.23"
    },
    {
      teams: ["SVE", "SGF"],
      goals: [null, null],
      date: "01.10.23"
    },
    {
      teams: ["OSN", "FCK"],
      goals: [null, null],
      date: "01.10.23"
    }
  ],
  9: [
    {
      teams: ["S04", "BSC"],
      goals: [null, null],
      date: "08.10.23"
    },
    {
      teams: ["DÜS", "OSN"],
      goals: [null, null],
      date: "08.10.23"
    },
    {
      teams: ["STP", "FCN"],
      goals: [null, null],
      date: "08.10.23"
    },
    {
      teams: ["KIE", "SVE"],
      goals: [null, null],
      date: "08.10.23"
    },
    {
      teams: ["FCK", "H96"],
      goals: [null, null],
      date: "08.10.23"
    },
    {
      teams: ["FCM", "KSC"],
      goals: [null, null],
      date: "08.10.23"
    },
    {
      teams: ["SGF", "ROS"],
      goals: [null, null],
      date: "08.10.23"
    },
    {
      teams: ["EBS", "P07"],
      goals: [null, null],
      date: "08.10.23"
    },
    {
      teams: ["WIE", "HSV"],
      goals: [null, null],
      date: "08.10.23"
    }
  ],
  10: [
    {
      teams: ["HSV", "SGF"],
      goals: [null, null],
      date: "22.10.23"
    },
    {
      teams: ["DÜS", "FCK"],
      goals: [null, null],
      date: "22.10.23"
    },
    {
      teams: ["P07", "STP"],
      goals: [null, null],
      date: "22.10.23"
    },
    {
      teams: ["KSC", "S04"],
      goals: [null, null],
      date: "22.10.23"
    },
    {
      teams: ["H96", "FCM"],
      goals: [null, null],
      date: "22.10.23"
    },
    {
      teams: ["ROS", "KIE"],
      goals: [null, null],
      date: "22.10.23"
    },
    {
      teams: ["FCN", "BSC"],
      goals: [null, null],
      date: "22.10.23"
    },
    {
      teams: ["SVE", "EBS"],
      goals: [null, null],
      date: "22.10.23"
    },
    {
      teams: ["OSN", "WIE"],
      goals: [null, null],
      date: "22.10.23"
    }
  ],
  11: [
    {
      teams: ["S04", "H96"],
      goals: [null, null],
      date: "29.10.23"
    },
    {
      teams: ["BSC", "P07"],
      goals: [null, null],
      date: "29.10.23"
    },
    {
      teams: ["STP", "KSC"],
      goals: [null, null],
      date: "29.10.23"
    },
    {
      teams: ["KIE", "FCN"],
      goals: [null, null],
      date: "29.10.23"
    },
    {
      teams: ["FCK", "HSV"],
      goals: [null, null],
      date: "29.10.23"
    },
    {
      teams: ["FCM", "SVE"],
      goals: [null, null],
      date: "29.10.23"
    },
    {
      teams: ["SGF", "OSN"],
      goals: [null, null],
      date: "29.10.23"
    },
    {
      teams: ["EBS", "DÜS"],
      goals: [null, null],
      date: "29.10.23"
    },
    {
      teams: ["WIE", "ROS"],
      goals: [null, null],
      date: "29.10.23"
    }
  ],
  12: [
    {
      teams: ["HSV", "FCM"],
      goals: [null, null],
      date: "05.11.23"
    },
    {
      teams: ["DÜS", "WIE"],
      goals: [null, null],
      date: "05.11.23"
    },
    {
      teams: ["KSC", "P07"],
      goals: [null, null],
      date: "05.11.23"
    },
    {
      teams: ["FCK", "SGF"],
      goals: [null, null],
      date: "05.11.23"
    },
    {
      teams: ["H96", "EBS"],
      goals: [null, null],
      date: "05.11.23"
    },
    {
      teams: ["ROS", "H96"],
      goals: [null, null],
      date: "05.11.23"
    },
    {
      teams: ["FCN", "S04"],
      goals: [null, null],
      date: "05.11.23"
    },
    {
      teams: ["SVE", "STP"],
      goals: [null, null],
      date: "05.11.23"
    },
    {
      teams: ["OSN", "KIE"],
      goals: [null, null],
      date: "05.11.23"
    }
  ],
  13: [
    {
      teams: ["S04", "SVE"],
      goals: [null, null],
      date: "12.11.23"
    },
    {
      teams: ["BSC", "KSC"],
      goals: [null, null],
      date: "12.11.23"
    },
    {
      teams: ["STP", "H96"],
      goals: [null, null],
      date: "12.11.23"
    },
    {
      teams: ["P07", "FCN"],
      goals: [null, null],
      date: "12.11.23"
    },
    {
      teams: ["KIE", "HSV"],
      goals: [null, null],
      date: "12.11.23"
    },
    {
      teams: ["FCM", "ROS"],
      goals: [null, null],
      date: "12.11.23"
    },
    {
      teams: ["SGF", "DÜS"],
      goals: [null, null],
      date: "12.11.23"
    },
    {
      teams: ["EBS", "OSN"],
      goals: [null, null],
      date: "12.11.23"
    },
    {
      teams: ["WIE", "FCK"],
      goals: [null, null],
      date: "12.11.23"
    }
  ],
  14: [
    {
      teams: ["HSV", "EBS"],
      goals: [null, null],
      date: "26.11.23"
    },
    {
      teams: ["DÜS", "S04"],
      goals: [null, null],
      date: "26.11.23"
    },
    {
      teams: ["KSC", "FCN"],
      goals: [null, null],
      date: "26.11.23"
    },
    {
      teams: ["FCK", "KIE"],
      goals: [null, null],
      date: "26.11.23"
    },
    {
      teams: ["H96", "BSC"],
      goals: [null, null],
      date: "26.11.23"
    },
    {
      teams: ["SGF", "WIE"],
      goals: [null, null],
      date: "26.11.23"
    },
    {
      teams: ["ROS", "STP"],
      goals: [null, null],
      date: "26.11.23"
    },
    {
      teams: ["SVE", "P07"],
      goals: [null, null],
      date: "26.11.23"
    },
    {
      teams: ["OSN", "FCM"],
      goals: [null, null],
      date: "26.11.23"
    }
  ],
  15: [
    {
      teams: ["S04", "OSN"],
      goals: [null, null],
      date: "03.12.23"
    },
    {
      teams: ["BSC", "SVE"],
      goals: [null, null],
      date: "03.12.23"
    },
    {
      teams: ["STP", "HSV"],
      goals: [null, null],
      date: "03.12.23"
    },
    {
      teams: ["P07", "H96"],
      goals: [null, null],
      date: "03.12.23"
    },
    {
      teams: ["KSC", "ROS"],
      goals: [null, null],
      date: "03.12.23"
    },
    {
      teams: ["KIE", "WIE"],
      goals: [null, null],
      date: "03.12.23"
    },
    {
      teams: ["FCM", "FCK"],
      goals: [null, null],
      date: "03.12.23"
    },
    {
      teams: ["FCN", "DÜS"],
      goals: [null, null],
      date: "03.12.23"
    },
    {
      teams: ["EBS", "SGF"],
      goals: [null, null],
      date: "03.12.23"
    }
  ],
  16: [
    {
      teams: ["HSV", "P07"],
      goals: [null, null],
      date: "10.12.23"
    },
    {
      teams: ["DÜS", "KIE"],
      goals: [null, null],
      date: "10.12.23"
    },
    {
      teams: ["FCK", "BSC"],
      goals: [null, null],
      date: "10.12.23"
    },
    {
      teams: ["H96", "KSC"],
      goals: [null, null],
      date: "10.12.23"
    },
    {
      teams: ["SGF", "FCM"],
      goals: [null, null],
      date: "10.12.23"
    },
    {
      teams: ["ROS", "S04"],
      goals: [null, null],
      date: "10.12.23"
    },
    {
      teams: ["SVE", "FCN"],
      goals: [null, null],
      date: "10.12.23"
    },
    {
      teams: ["OSN", "STP"],
      goals: [null, null],
      date: "10.12.23"
    },
    {
      teams: ["WIE", "EBS"],
      goals: [null, null],
      date: "10.12.23"
    }
  ],
  17: [
    {
      teams: ["S04", "SGF"],
      goals: [null, null],
      date: "17.12.23"
    },
    {
      teams: ["BSC", "OSN"],
      goals: [null, null],
      date: "17.12.23"
    },
    {
      teams: ["STP", "WIE"],
      goals: [null, null],
      date: "17.12.23"
    },
    {
      teams: ["P07", "ROS"],
      goals: [null, null],
      date: "17.12.23"
    },
    {
      teams: ["KSC", "SVE"],
      goals: [null, null],
      date: "17.12.23"
    },
    {
      teams: ["KIE", "H96"],
      goals: [null, null],
      date: "17.12.23"
    },
    {
      teams: ["FCM", "DÜS"],
      goals: [null, null],
      date: "17.12.23"
    },
    {
      teams: ["FCN", "HSV"],
      goals: [null, null],
      date: "17.12.23"
    },
    {
      teams: ["EBS", "FCK"],
      goals: [null, null],
      date: "17.12.23"
    }
  ],
  18: [
    {
      teams: ["S04", "HSV"],
      goals: [null, null],
      date: "21.01.24"
    },
    {
      teams: ["BSC", "DÜS"],
      goals: [null, null],
      date: "21.01.24"
    },
    {
      teams: ["STP", "FCK"],
      goals: [null, null],
      date: "21.01.24"
    },
    {
      teams: ["P07", "SGF"],
      goals: [null, null],
      date: "21.01.24"
    },
    {
      teams: ["KSC", "OSN"],
      goals: [null, null],
      date: "21.01.24"
    },
    {
      teams: ["KIE", "EBS"],
      goals: [null, null],
      date: "21.01.24"
    },
    {
      teams: ["FCM", "WIE"],
      goals: [null, null],
      date: "21.01.24"
    },
    {
      teams: ["FCN", "ROS"],
      goals: [null, null],
      date: "21.01.24"
    },
    {
      teams: ["SVE", "H96"],
      goals: [null, null],
      date: "21.01.24"
    }
  ],
  19: [
    {
      teams: ["HSV", "KSC"],
      goals: [null, null],
      date: "28.01.24"
    },
    {
      teams: ["DÜS", "STP"],
      goals: [null, null],
      date: "28.01.24"
    },
    {
      teams: ["FCK", "S04"],
      goals: [null, null],
      date: "28.01.24"
    },
    {
      teams: ["H96", "FCN"],
      goals: [null, null],
      date: "28.01.24"
    },
    {
      teams: ["SGF", "KIE"],
      goals: [null, null],
      date: "28.01.24"
    },
    {
      teams: ["ROS", "SVE"],
      goals: [null, null],
      date: "28.01.24"
    },
    {
      teams: ["EBS", "FCM"],
      goals: [null, null],
      date: "28.01.24"
    },
    {
      teams: ["OSN", "P07"],
      goals: [null, null],
      date: "28.01.24"
    },
    {
      teams: ["WIE", "BSC"],
      goals: [null, null],
      date: "28.01.24"
    }
  ],
  20: [
    {
      teams: ["S04", "EBS"],
      goals: [null, null],
      date: "04.02.24"
    },
    {
      teams: ["BSC", "HSV"],
      goals: [null, null],
      date: "04.02.24"
    },
    {
      teams: ["STP", "SGF"],
      goals: [null, null],
      date: "04.02.24"
    },
    {
      teams: ["P07", "DÜS"],
      goals: [null, null],
      date: "04.02.24"
    },
    {
      teams: ["KSC", "WIE"],
      goals: [null, null],
      date: "04.02.24"
    },
    {
      teams: ["H96", "ROS"],
      goals: [null, null],
      date: "04.02.24"
    },
    {
      teams: ["FCM", "KIE"],
      goals: [null, null],
      date: "04.02.24"
    },
    {
      teams: ["FCN", "OSN"],
      goals: [null, null],
      date: "04.02.24"
    },
    {
      teams: ["SVE", "FCK"],
      goals: [null, null],
      date: "04.02.24"
    }
  ],
  21: [
    {
      teams: ["HSV", "H96"],
      goals: [null, null],
      date: "11.02.24"
    },
    {
      teams: ["DÜS", "SVE"],
      goals: [null, null],
      date: "11.02.24"
    },
    {
      teams: ["KIE", "S04"],
      goals: [null, null],
      date: "11.02.24"
    },
    {
      teams: ["FCK", "P07"],
      goals: [null, null],
      date: "11.02.24"
    },
    {
      teams: ["FCM", "STP"],
      goals: [null, null],
      date: "11.02.24"
    },
    {
      teams: ["SGF", "BSC"],
      goals: [null, null],
      date: "11.02.24"
    },
    {
      teams: ["EBS", "KSC"],
      goals: [null, null],
      date: "11.02.24"
    },
    {
      teams: ["OSN", "ROS"],
      goals: [null, null],
      date: "11.02.24"
    },
    {
      teams: ["WIE", "FCN"],
      goals: [null, null],
      date: "11.02.24"
    }
  ],
  22: [
    {
      teams: ["S04", "WIE"],
      goals: [null, null],
      date: "18.02.24"
    },
    {
      teams: ["BSC", "FCM"],
      goals: [null, null],
      date: "18.02.24"
    },
    {
      teams: ["STP", "EBS"],
      goals: [null, null],
      date: "18.02.24"
    },
    {
      teams: ["P07", "KIE"],
      goals: [null, null],
      date: "18.02.24"
    },
    {
      teams: ["KSC", "DÜS"],
      goals: [null, null],
      date: "18.02.24"
    },
    {
      teams: ["H96", "SGF"],
      goals: [null, null],
      date: "18.02.24"
    },
    {
      teams: ["ROS", "HSV"],
      goals: [null, null],
      date: "18.02.24"
    },
    {
      teams: ["FCN", "FCK"],
      goals: [null, null],
      date: "18.02.24"
    },
    {
      teams: ["SVE", "OSN"],
      goals: [null, null],
      date: "18.02.24"
    }
  ],
  23: [
    {
      teams: ["HSV", "SVE"],
      goals: [null, null],
      date: "25.02.24"
    },
    {
      teams: ["DÜS", "ROS"],
      goals: [null, null],
      date: "25.02.24"
    },
    {
      teams: ["KIE", "STP"],
      goals: [null, null],
      date: "25.02.24"
    },
    {
      teams: ["FCK", "KSC"],
      goals: [null, null],
      date: "25.02.24"
    },
    {
      teams: ["FCM", "S04"],
      goals: [null, null],
      date: "25.02.24"
    },
    {
      teams: ["SGF", "FCN"],
      goals: [null, null],
      date: "25.02.24"
    },
    {
      teams: ["EBS", "BSC"],
      goals: [null, null],
      date: "25.02.24"
    },
    {
      teams: ["OSN", "H96"],
      goals: [null, null],
      date: "25.02.24"
    },
    {
      teams: ["WIE", "P07"],
      goals: [null, null],
      date: "25.02.24"
    }
  ],
  24: [
    {
      teams: ["S04", "STP"],
      goals: [null, null],
      date: "03.03.24"
    },
    {
      teams: ["BSC", "KIE"],
      goals: [null, null],
      date: "03.03.24"
    },
    {
      teams: ["HSV", "OSN"],
      goals: [null, null],
      date: "03.03.24"
    },
    {
      teams: ["P07", "FCM"],
      goals: [null, null],
      date: "03.03.24"
    },
    {
      teams: ["KSC", "SGF"],
      goals: [null, null],
      date: "03.03.24"
    },
    {
      teams: ["H96", "DÜS"],
      goals: [null, null],
      date: "03.03.24"
    },
    {
      teams: ["ROS", "FCK"],
      goals: [null, null],
      date: "03.03.24"
    },
    {
      teams: ["FCN", "EBS"],
      goals: [null, null],
      date: "03.03.24"
    },
    {
      teams: ["SVE", "WIE"],
      goals: [null, null],
      date: "03.03.24"
    }
  ],
  25: [
    {
      teams: ["S04", "P07"],
      goals: [null, null],
      date: "10.03.24"
    },
    {
      teams: ["DÜS", "HSV"],
      goals: [null, null],
      date: "10.03.24"
    },
    {
      teams: ["STP", "BSC"],
      goals: [null, null],
      date: "10.03.24"
    },
    {
      teams: ["KIE", "KSC"],
      goals: [null, null],
      date: "10.03.24"
    },
    {
      teams: ["FCK", "OSN"],
      goals: [null, null],
      date: "10.03.24"
    },
    {
      teams: ["FCM", "FCN"],
      goals: [null, null],
      date: "10.03.24"
    },
    {
      teams: ["SGF", "SVE"],
      goals: [null, null],
      date: "10.03.24"
    },
    {
      teams: ["EBS", "ROS"],
      goals: [null, null],
      date: "10.03.24"
    },
    {
      teams: ["WIE", "H96"],
      goals: [null, null],
      date: "10.03.24"
    }
  ],
  26: [
    {
      teams: ["BSC", "S04"],
      goals: [null, null],
      date: "17.03.24"
    },
    {
      teams: ["HSV", "WIE"],
      goals: [null, null],
      date: "17.03.24"
    },
    {
      teams: ["P07", "EBS"],
      goals: [null, null],
      date: "17.03.24"
    },
    {
      teams: ["KSC", "FCM"],
      goals: [null, null],
      date: "17.03.24"
    },
    {
      teams: ["H96", "FCK"],
      goals: [null, null],
      date: "17.03.24"
    },
    {
      teams: ["ROS", "SGF"],
      goals: [null, null],
      date: "17.03.24"
    },
    {
      teams: ["FCN", "STP"],
      goals: [null, null],
      date: "17.03.24"
    },
    {
      teams: ["SVE", "KIE"],
      goals: [null, null],
      date: "17.03.24"
    },
    {
      teams: ["OSN", "DÜS"],
      goals: [null, null],
      date: "17.03.24"
    }
  ],
  27: [
    {
      teams: ["S04", "KSC"],
      goals: [null, null],
      date: "31.03.24"
    },
    {
      teams: ["BSC", "FCN"],
      goals: [null, null],
      date: "31.03.24"
    },
    {
      teams: ["STP", "P07"],
      goals: [null, null],
      date: "31.03.24"
    },
    {
      teams: ["KIE", "ROS"],
      goals: [null, null],
      date: "31.03.24"
    },
    {
      teams: ["FCK", "DÜS"],
      goals: [null, null],
      date: "31.03.24"
    },
    {
      teams: ["FCM", "H96"],
      goals: [null, null],
      date: "31.03.24"
    },
    {
      teams: ["SGF", "HSV"],
      goals: [null, null],
      date: "31.03.24"
    },
    {
      teams: ["EBS", "SVE"],
      goals: [null, null],
      date: "31.03.24"
    },
    {
      teams: ["WIE", "OSN"],
      goals: [null, null],
      date: "31.03.24"
    }
  ],
  28: [
    {
      teams: ["HSV", "FCK"],
      goals: [null, null],
      date: "07.04.24"
    },
    {
      teams: ["DÜS", "EBS"],
      goals: [null, null],
      date: "07.04.24"
    },
    {
      teams: ["P07", "BSC"],
      goals: [null, null],
      date: "07.04.24"
    },
    {
      teams: ["KSC", "STP"],
      goals: [null, null],
      date: "07.04.24"
    },
    {
      teams: ["H96", "S04"],
      goals: [null, null],
      date: "07.04.24"
    },
    {
      teams: ["ROS", "WIE"],
      goals: [null, null],
      date: "07.04.24"
    },
    {
      teams: ["FCN", "KIE"],
      goals: [null, null],
      date: "07.04.24"
    },
    {
      teams: ["SVE", "FCM"],
      goals: [null, null],
      date: "07.04.24"
    },
    {
      teams: ["OSN", "SGF"],
      goals: [null, null],
      date: "07.04.24"
    }
  ],
  29: [
    {
      teams: ["S04", "FCN"],
      goals: [null, null],
      date: "14.04.24"
    },
    {
      teams: ["BSC", "ROS"],
      goals: [null, null],
      date: "14.04.24"
    },
    {
      teams: ["STP", "SVE"],
      goals: [null, null],
      date: "14.04.24"
    },
    {
      teams: ["P07", "KSC"],
      goals: [null, null],
      date: "14.04.24"
    },
    {
      teams: ["KIE", "OSN"],
      goals: [null, null],
      date: "14.04.24"
    },
    {
      teams: ["FCM", "HSV"],
      goals: [null, null],
      date: "14.04.24"
    },
    {
      teams: ["SGF", "FCK"],
      goals: [null, null],
      date: "14.04.24"
    },
    {
      teams: ["EBS", "H96"],
      goals: [null, null],
      date: "14.04.24"
    },
    {
      teams: ["WIE", "DÜS"],
      goals: [null, null],
      date: "14.04.24"
    }
  ],
  30: [
    {
      teams: ["HSV", "KIE"],
      goals: [null, null],
      date: "21.04.24"
    },
    {
      teams: ["DÜS", "SGF"],
      goals: [null, null],
      date: "21.04.24"
    },
    {
      teams: ["KSC", "BSC"],
      goals: [null, null],
      date: "21.04.24"
    },
    {
      teams: ["FCK", "WIE"],
      goals: [null, null],
      date: "21.04.24"
    },
    {
      teams: ["H96", "STP"],
      goals: [null, null],
      date: "21.04.24"
    },
    {
      teams: ["ROS", "FCM"],
      goals: [null, null],
      date: "21.04.24"
    },
    {
      teams: ["FCN", "P07"],
      goals: [null, null],
      date: "21.04.24"
    },
    {
      teams: ["SVE", "S04"],
      goals: [null, null],
      date: "21.04.24"
    },
    {
      teams: ["OSN", "EBS"],
      goals: [null, null],
      date: "21.04.24"
    }
  ],
  31: [
    {
      teams: ["S04", "DÜS"],
      goals: [null, null],
      date: "28.04.24"
    },
    {
      teams: ["BSC", "H96"],
      goals: [null, null],
      date: "28.04.24"
    },
    {
      teams: ["STP", "ROS"],
      goals: [null, null],
      date: "28.04.24"
    },
    {
      teams: ["P07", "SVE"],
      goals: [null, null],
      date: "28.04.24"
    },
    {
      teams: ["KIE", "FCK"],
      goals: [null, null],
      date: "28.04.24"
    },
    {
      teams: ["FCM", "OSN"],
      goals: [null, null],
      date: "28.04.24"
    },
    {
      teams: ["FCN", "KSC"],
      goals: [null, null],
      date: "28.04.24"
    },
    {
      teams: ["EBS", "HSV"],
      goals: [null, null],
      date: "28.04.24"
    },
    {
      teams: ["WIE", "SGF"],
      goals: [null, null],
      date: "28.04.24"
    }
  ],
  32: [
    {
      teams: ["HSV", "STP"],
      goals: [null, null],
      date: "05.05.24"
    },
    {
      teams: ["DÜS", "FCN"],
      goals: [null, null],
      date: "05.05.24"
    },
    {
      teams: ["FCK", "FCM"],
      goals: [null, null],
      date: "05.05.24"
    },
    {
      teams: ["H96", "P07"],
      goals: [null, null],
      date: "05.05.24"
    },
    {
      teams: ["SGF", "EBS"],
      goals: [null, null],
      date: "05.05.24"
    },
    {
      teams: ["ROS", "KSC"],
      goals: [null, null],
      date: "05.05.24"
    },
    {
      teams: ["SVE", "BSC"],
      goals: [null, null],
      date: "05.05.24"
    },
    {
      teams: ["OSN", "S04"],
      goals: [null, null],
      date: "05.05.24"
    },
    {
      teams: ["WIE", "KIE"],
      goals: [null, null],
      date: "05.05.24"
    }
  ],
  33: [
    {
      teams: ["S04", "ROS"],
      goals: [null, null],
      date: "12.05.24"
    },
    {
      teams: ["BSC", "FCK"],
      goals: [null, null],
      date: "12.05.24"
    },
    {
      teams: ["STP", "OSN"],
      goals: [null, null],
      date: "12.05.24"
    },
    {
      teams: ["P07", "HSV"],
      goals: [null, null],
      date: "12.05.24"
    },
    {
      teams: ["KSC", "H96"],
      goals: [null, null],
      date: "12.05.24"
    },
    {
      teams: ["KIE", "DÜS"],
      goals: [null, null],
      date: "12.05.24"
    },
    {
      teams: ["FCM", "SGF"],
      goals: [null, null],
      date: "12.05.24"
    },
    {
      teams: ["FCN", "SVE"],
      goals: [null, null],
      date: "12.05.24"
    },
    {
      teams: ["EBS", "WIE"],
      goals: [null, null],
      date: "12.05.24"
    }
  ],
  34: [
    {
      teams: ["HSV", "FCN"],
      goals: [null, null],
      date: "2024-05-19T13:30Z"
    },
    {
      teams: ["DÜS", "FCM"],
      goals: [null, null],
      date: "2024-05-19T13:30Z"
    },
    {
      teams: ["FCK", "EBS"],
      goals: [null, null],
      date: "2024-05-19T13:30Z"
    },
    {
      teams: ["H96", "KIE"],
      goals: [null, null],
      date: "2024-05-19T13:30Z"
    },
    {
      teams: ["SGF", "S04"],
      goals: [null, null],
      date: "2024-05-19T13:30Z"
    },
    {
      teams: ["ROS", "P07"],
      goals: [null, null],
      date: "2024-05-19T13:30Z"
    },
    {
      teams: ["SVE", "KSC"],
      goals: [null, null],
      date: "2024-05-19T13:30Z"
    },
    {
      teams: ["OSN", "BSC"],
      goals: [null, null],
      date: "2024-05-19T13:30Z"
    },
    {
      teams: ["WIE", "STP"],
      goals: [null, null],
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
