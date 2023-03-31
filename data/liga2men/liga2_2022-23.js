const { makeTable } = require("../helpers");

const matches = {
  1: [
    {
      teams: ["FCK", "H96"],
      goals: [2, 1],
      date: "15.07.22"
    },
    {
      teams: ["SGF", "KIE"],
      goals: [2, 2],
      date: "16.07.22"
    },
    {
      teams: ["STP", "FCN"],
      goals: [3, 2],
      date: "16.07.22"
    },
    {
      teams: ["SVS", "BIE"],
      goals: [2, 1],
      date: "16.07.22"
    },
    {
      teams: ["JRE", "D98"],
      goals: [2, 0],
      date: "16.07.22"
    },
    {
      teams: ["FCM", "DÜS"],
      goals: [1, 2],
      date: "16.07.22"
    },
    {
      teams: ["P07", "KSC"],
      goals: [5, 0],
      date: "17.07.22"
    },
    {
      teams: ["ROS", "FCH"],
      goals: [0, 1],
      date: "17.07.22"
    },
    {
      teams: ["EBS", "HSV"],
      goals: [0, 2],
      date: "17.07.22"
    }
  ],
  2: [
    {
      teams: ["D98", "SVS"],
      goals: [2, 1],
      date: "22.07.22"
    },
    {
      teams: ["DÜS", "P07"],
      goals: [2, 1],
      date: "22.07.22"
    },
    {
      teams: ["FCH", "EBS"],
      goals: [3, 0],
      date: "23.07.22"
    },
    {
      teams: ["FCN", "SGF"],
      goals: [2, 0],
      date: "23.07.22"
    },
    {
      teams: ["KIE", "FCK"],
      goals: [2, 2],
      date: "23.07.22"
    },
    {
      teams: ["H96", "STP"],
      goals: [2, 2],
      date: "23.07.22"
    },
    {
      teams: ["BIE", "JRE"],
      goals: [0, 3],
      date: "24.07.22"
    },
    {
      teams: ["HSV", "ROS"],
      goals: [0, 1],
      date: "24.07.22"
    },
    {
      teams: ["KSC", "FCM"],
      goals: [2, 3],
      date: "24.07.22"
    }
  ],
  3: [
    {
      teams: ["SGF", "KSC"],
      goals: [1, 1],
      date: "05.08.22"
    },
    {
      teams: ["SVS", "DÜS"],
      goals: [1, 0],
      date: "05.08.22"
    },
    {
      teams: ["HSV", "FCH"],
      goals: [1, 0],
      date: "06.08.22"
    },
    {
      teams: ["P07", "H96"],
      goals: [4, 2],
      date: "06.08.22"
    },
    {
      teams: ["JRE", "FCN"],
      goals: [0, 0],
      date: "06.08.22"
    },
    {
      teams: ["ROS", "BIE"],
      goals: [2, 1],
      date: "06.08.22"
    },
    {
      teams: ["FCM", "KIE"],
      goals: [1, 2],
      date: "07.08.22"
    },
    {
      teams: ["EBS", "D98"],
      goals: [0, 1],
      date: "07.08.22"
    },
    {
      teams: ["FCK", "STP"],
      goals: [2, 1],
      date: "07.08.22"
    }
  ],
  4: [
    {
      teams: ["FCN", "FCH"],
      goals: [0, 3],
      date: "12.08.22"
    },
    {
      teams: ["FCK", "P07"],
      goals: [0, 1],
      date: "12.08.22"
    },
    {
      teams: ["BIE", "HSV"],
      goals: [0, 2],
      date: "13.08.22"
    },
    {
      teams: ["KIE", "EBS"],
      goals: [3, 0],
      date: "13.08.22"
    },
    {
      teams: ["KSC", "SVS"],
      goals: [3, 2],
      date: "13.08.22"
    },
    {
      teams: ["D98", "ROS"],
      goals: [4, 0],
      date: "13.08.22"
    },
    {
      teams: ["STP", "FCM"],
      goals: [3, 0],
      date: "14.08.22"
    },
    {
      teams: ["DÜS", "SGF"],
      goals: [2, 2],
      date: "14.08.22"
    },
    {
      teams: ["H96", "JRE"],
      goals: [1, 0],
      date: "14.08.22"
    }
  ],
  5: [
    {
      teams: ["HSV", "D98"],
      goals: [1, 2],
      date: "19.08.22"
    },
    {
      teams: ["FCM", "H96"],
      goals: [0, 4],
      date: "19.08.22"
    },
    {
      teams: ["P07", "KIE"],
      goals: [7, 2],
      date: "20.08.22"
    },
    {
      teams: ["SVS", "FCN"],
      goals: [1, 2],
      date: "20.08.22"
    },
    {
      teams: ["JRE", "KSC"],
      goals: [0, 6],
      date: "20.08.22"
    },
    {
      teams: ["EBS", "DÜS"],
      goals: [2, 2],
      date: "20.08.22"
    },
    {
      teams: ["SGF", "FCK"],
      goals: [1, 3],
      date: "21.08.22"
    },
    {
      teams: ["FCH", "BIE"],
      goals: [1, 1],
      date: "21.08.22"
    },
    {
      teams: ["ROS", "STP"],
      goals: [2, 0],
      date: "21.08.22"
    }
  ],
  6: [
    {
      teams: ["BIE", "EBS"],
      goals: [4, 1],
      date: "26.08.22"
    },
    {
      teams: ["DÜS", "JRE"],
      goals: [4, 0],
      date: "26.08.22"
    },
    {
      teams: ["D98", "FCH"],
      goals: [2, 2],
      date: "27.08.22"
    },
    {
      teams: ["STP", "P07"],
      goals: [2, 2],
      date: "27.08.22"
    },
    {
      teams: ["KSC", "ROS"],
      goals: [2, 0],
      date: "27.08.22"
    },
    {
      teams: ["FCN", "HSV"],
      goals: [0, 2],
      date: "27.08.22"
    },
    {
      teams: ["KIE", "SVS"],
      goals: [1, 0],
      date: "28.08.22"
    },
    {
      teams: ["H96", "SGF"],
      goals: [2, 1],
      date: "28.08.22"
    },
    {
      teams: ["FCK", "FCM"],
      goals: [4, 4],
      date: "28.08.22"
    }
  ],
  7: [
    {
      teams: ["FCH", "DÜS"],
      goals: [2, 1],
      date: "02.09.22"
    },
    {
      teams: ["EBS", "FCN"],
      goals: [4, 2],
      date: "02.09.22"
    },
    {
      teams: ["SGF", "STP"],
      goals: [2, 2],
      date: "03.09.22"
    },
    {
      teams: ["P07", "FCM"],
      goals: [1, 0],
      date: "03.09.22"
    },
    {
      teams: ["JRE", "KIE"],
      goals: [0, 0],
      date: "03.09.22"
    },
    {
      teams: ["HSV", "KSC"],
      goals: [1, 0],
      date: "03.09.22"
    },
    {
      teams: ["D98", "BIE"],
      goals: [1, 1],
      date: "04.09.22"
    },
    {
      teams: ["ROS", "H96"],
      goals: [0, 1],
      date: "04.09.22"
    },
    {
      teams: ["SVS", "FCK"],
      goals: [0, 0],
      date: "04.09.22"
    }
  ],
  8: [
    {
      teams: ["FCN", "BIE"],
      goals: [1, 0],
      date: "09.09.22"
    },
    {
      teams: ["KIE", "HSV"],
      goals: [2, 3],
      date: "09.09.22"
    },
    {
      teams: ["P07", "JRE"],
      goals: [3, 0],
      date: "10.09.22"
    },
    {
      teams: ["H96", "EBS"],
      goals: [1, 1],
      date: "10.09.22"
    },
    {
      teams: ["KSC", "FCH"],
      goals: [0, 0],
      date: "10.09.22"
    },
    {
      teams: ["DÜS", "ROS"],
      goals: [3, 1],
      date: "10.09.22"
    },
    {
      teams: ["STP", "SVS"],
      goals: [1, 1],
      date: "11.09.22"
    },
    {
      teams: ["FCM", "SGF"],
      goals: [2, 1],
      date: "11.09.22"
    },
    {
      teams: ["FCK", "D98"],
      goals: [3, 3],
      date: "11.09.22"
    }
  ],
  9: [
    {
      teams: ["SVS", "H96"],
      goals: [2, 3],
      date: "16.09.22"
    },
    {
      teams: ["EBS", "KSC"],
      goals: [2, 1],
      date: "16.09.22"
    },
    {
      teams: ["BIE", "KIE"],
      goals: [4, 2],
      date: "17.09.22"
    },
    {
      teams: ["D98", "FCN"],
      goals: [2, 0],
      date: "17.09.22"
    },
    {
      teams: ["ROS", "FCM"],
      goals: [3, 1],
      date: "17.09.22"
    },
    {
      teams: ["HSV", "DÜS"],
      goals: [2, 0],
      date: "17.09.22"
    },
    {
      teams: ["SGF", "P07"],
      goals: [2, 1],
      date: "18.09.22"
    },
    {
      teams: ["FCH", "FCK"],
      goals: [2, 2],
      date: "18.09.22"
    },
    {
      teams: ["JRE", "STP"],
      goals: [2, 0],
      date: "18.09.22"
    }
  ],
  10: [
    {
      teams: ["H96", "HSV"],
      goals: [1, 2],
      date: "30.09.22"
    },
    {
      teams: ["P07", "D98"],
      goals: [1, 2],
      date: "30.09.22"
    },
    {
      teams: ["SGF", "SVS"],
      goals: [1, 1],
      date: "01.10.22"
    },
    {
      teams: ["KIE", "ROS"],
      goals: [1, 1],
      date: "01.10.22"
    },
    {
      teams: ["DÜS", "BIE"],
      goals: [4, 1],
      date: "01.10.22"
    },
    {
      teams: ["STP", "FCH"],
      goals: [0, 0],
      date: "01.10.22"
    },
    {
      teams: ["KSC", "FCN"],
      goals: [3, 0],
      date: "02.10.22"
    },
    {
      teams: ["FCM", "JRE"],
      goals: [1, 0],
      date: "02.10.22"
    },
    {
      teams: ["FCK", "EBS"],
      goals: [1, 1],
      date: "02.10.22"
    }
  ],
  11: [
    {
      teams: ["BIE", "KSC"],
      goals: [1, 2],
      date: "07.10.22"
    },
    {
      teams: ["JRE", "SGF"],
      goals: [2, 2],
      date: "07.10.22"
    },
    {
      teams: ["D98", "DÜS"],
      goals: [1, 0],
      date: "08.10.22"
    },
    {
      teams: ["ROS", "P07"],
      goals: [0, 3],
      date: "08.10.22"
    },
    {
      teams: ["EBS", "STP"],
      goals: [2, 1],
      date: "08.10.22"
    },
    {
      teams: ["HSV", "FCK"],
      goals: [1, 1],
      date: "08.10.22"
    },
    {
      teams: ["FCH", "H96"],
      goals: [2, 1],
      date: "09.10.22"
    },
    {
      teams: ["FCN", "KIE"],
      goals: [2, 3],
      date: "09.10.22"
    },
    {
      teams: ["SVS", "FCM"],
      goals: [1, 0],
      date: "09.10.22"
    }
  ],
  12: [
    {
      teams: ["SGF", "ROS"],
      goals: [2, 2],
      date: "14.10.22"
    },
    {
      teams: ["STP", "HSV"],
      goals: [3, 0],
      date: "14.10.22"
    },
    {
      teams: ["DÜS", "FCN"],
      goals: [0, 1],
      date: "15.10.22"
    },
    {
      teams: ["KSC", "D98"],
      goals: [1, 2],
      date: "15.10.22"
    },
    {
      teams: ["FCM", "EBS"],
      goals: [0, 2],
      date: "15.10.22"
    },
    {
      teams: ["H96", "BIE"],
      goals: [2, 0],
      date: "15.10.22"
    },
    {
      teams: ["P07", "SVS"],
      goals: [3, 0],
      date: "16.10.22"
    },
    {
      teams: ["KIE", "FCH"],
      goals: [3, 1],
      date: "16.10.22"
    },
    {
      teams: ["FCK", "JRE"],
      goals: [0, 3],
      date: "16.10.22"
    }
  ],
  13: [
    {
      teams: ["D98", "KIE"],
      goals: [1, 1],
      date: "21.10.22"
    },
    {
      teams: ["ROS", "FCK"],
      goals: [0, 2],
      date: "21.10.22"
    },
    {
      teams: ["FCN", "H96"],
      goals: [0, 0],
      date: "22.10.22"
    },
    {
      teams: ["JRE", "SVS"],
      goals: [2, 1],
      date: "22.10.22"
    },
    {
      teams: ["EBS", "P07"],
      goals: [0, 0],
      date: "22.10.22"
    },
    {
      teams: ["BIE", "STP"],
      goals: [2, 0],
      date: "22.10.22"
    },
    {
      teams: ["HSV", "FCM"],
      goals: [2, 3],
      date: "23.10.22"
    },
    {
      teams: ["FCH", "SGF"],
      goals: [3, 1],
      date: "23.10.22"
    },
    {
      teams: ["KSC", "DÜS"],
      goals: [0, 2],
      date: "23.10.22"
    }
  ],
  14: [
    {
      teams: ["SGF", "BIE"],
      goals: [1, 0],
      date: "28.10.22"
    },
    {
      teams: ["FCM", "FCH"],
      goals: [1, 1],
      date: "28.10.22"
    },
    {
      teams: ["KIE", "DÜS"],
      goals: [1, 2],
      date: "29.10.22"
    },
    {
      teams: ["JRE", "ROS"],
      goals: [0, 3],
      date: "29.10.22"
    },
    {
      teams: ["FCK", "FCN"],
      goals: [0, 0],
      date: "29.10.22"
    },
    {
      teams: ["STP", "D98"],
      goals: [1, 1],
      date: "29.10.22"
    },
    {
      teams: ["P07", "HSV"],
      goals: [2, 3],
      date: "30.10.22"
    },
    {
      teams: ["H96", "KSC"],
      goals: [1, 0],
      date: "30.10.22"
    },
    {
      teams: ["SVS", "EBS"],
      goals: [2, 2],
      date: "30.10.22"
    }
  ],
  15: [
    {
      teams: ["D98", "H96"],
      goals: [1, 0],
      date: "04.11.22"
    },
    {
      teams: ["ROS", "SVS"],
      goals: [0, 1],
      date: "04.11.22"
    },
    {
      teams: ["FCH", "P07"],
      goals: [3, 0],
      date: "05.11.22"
    },
    {
      teams: ["DÜS", "STP"],
      goals: [1, 0],
      date: "05.11.22"
    },
    {
      teams: ["KSC", "KIE"],
      goals: [1, 4],
      date: "05.11.22"
    },
    {
      teams: ["BIE", "FCK"],
      goals: [2, 3],
      date: "05.11.22"
    },
    {
      teams: ["HSV", "JRE"],
      goals: [3, 1],
      date: "06.11.22"
    },
    {
      teams: ["FCN", "FCM"],
      goals: [1, 2],
      date: "06.11.22"
    },
    {
      teams: ["EBS", "SGF"],
      goals: [0, 1],
      date: "06.11.22"
    }
  ],
  16: [
    {
      teams: ["STP", "KIE"],
      goals: [0, 0],
      date: "08.11.22"
    },
    {
      teams: ["P07", "BIE"],
      goals: [0, 2],
      date: "08.11.22"
    },
    {
      teams: ["H96", "DÜS"],
      goals: [2, 0],
      date: "08.11.22"
    },
    {
      teams: ["FCK", "KSC"],
      goals: [2, 0],
      date: "08.11.22"
    },
    {
      teams: ["SGF", "HSV"],
      goals: [1, 0],
      date: "09.11.22"
    },
    {
      teams: ["ROS", "FCN"],
      goals: [1, 1],
      date: "09.11.22"
    },
    {
      teams: ["SVS", "FCH"],
      goals: [3, 4],
      date: "09.11.22"
    },
    {
      teams: ["JRE", "EBS"],
      goals: [1, 1],
      date: "09.11.22"
    },
    {
      teams: ["FCM", "D98"],
      goals: [0, 1],
      date: "10.11.22"
    }
  ],
  17: [
    {
      teams: ["KIE", "H96"],
      goals: [1, 1],
      date: "11.11.22"
    },
    {
      teams: ["DÜS", "FCK"],
      goals: [1, 2],
      date: "11.11.22"
    },
    {
      teams: ["HSV", "SVS"],
      goals: [4, 2],
      date: "12.11.22"
    },
    {
      teams: ["FCH", "JRE"],
      goals: [5, 4],
      date: "12.11.22"
    },
    {
      teams: ["KSC", "STP"],
      goals: [4, 4],
      date: "12.11.22"
    },
    {
      teams: ["EBS", "ROS"],
      goals: [0, 1],
      date: "12.11.22"
    },
    {
      teams: ["BIE", "FCM"],
      goals: [3, 1],
      date: "13.11.22"
    },
    {
      teams: ["D98", "SGF"],
      goals: [1, 1],
      date: "13.11.22"
    },
    {
      teams: ["FCN", "P07"],
      goals: [2, 1],
      date: "13.11.22"
    }
  ],
  18: [
    {
      teams: ["DÜS", "FCM"],
      goals: [3, 2],
      date: "27.01.23"
    },
    {
      teams: ["KSC", "P07"],
      goals: [0, 1],
      date: "27.01.23"
    },
    {
      teams: ["KIE", "SGF"],
      goals: [2, 1],
      date: "28.01.23"
    },
    {
      teams: ["FCH", "ROS"],
      goals: [2, 0],
      date: "28.01.23"
    },
    {
      teams: ["D98", "JRE"],
      goals: [2, 0],
      date: "28.01.23"
    },
    {
      teams: ["H96", "FCK"],
      goals: [1, 3],
      date: "28.01.23"
    },
    {
      teams: ["FCN", "STP"],
      goals: [0, 1],
      date: "29.01.23"
    },
    {
      teams: ["BIE", "SVS"],
      goals: [1, 2],
      date: "29.01.23"
    },
    {
      teams: ["HSV", "EBS"],
      goals: [4, 2],
      date: "29.01.23"
    }
  ],
  19: [
    {
      teams: ["SVS", "D98"],
      goals: [0, 4],
      date: "03.02.23"
    },
    {
      teams: ["P07", "DÜS"],
      goals: [4, 1],
      date: "03.02.23"
    },
    {
      teams: ["JRE", "BIE"],
      goals: [1, 3],
      date: "04.02.23"
    },
    {
      teams: ["EBS", "FCH"],
      goals: [2, 0],
      date: "04.02.23"
    },
    {
      teams: ["FCK", "KIE"],
      goals: [2, 1],
      date: "04.02.23"
    },
    {
      teams: ["SGF", "FCN"],
      goals: [1, 0],
      date: "04.02.23"
    },
    {
      teams: ["ROS", "HSV"],
      goals: [0, 2],
      date: "05.02.23"
    },
    {
      teams: ["STP", "H96"],
      goals: [2, 0],
      date: "05.02.23"
    },
    {
      teams: ["FCM", "KSC"],
      goals: [1, 1],
      date: "05.02.23"
    }
  ],
  20: [
    {
      teams: ["KSC", "SGF"],
      goals: [2, 1],
      date: "10.02.23"
    },
    {
      teams: ["BIE", "ROS"],
      goals: [0, 1],
      date: "10.02.23"
    },
    {
      teams: ["H96", "P07"],
      goals: [3, 4],
      date: "11.02.23"
    },
    {
      teams: ["FCN", "JRE"],
      goals: [1, 0],
      date: "11.02.23"
    },
    {
      teams: ["KIE", "FCM"],
      goals: [2, 3],
      date: "11.02.23"
    },
    {
      teams: ["FCH", "HSV"],
      goals: [3, 3],
      date: "11.02.23"
    },
    {
      teams: ["DÜS", "SVS"],
      goals: [2, 0],
      date: "12.02.23"
    },
    {
      teams: ["D98", "EBS"],
      goals: [2, 1],
      date: "12.02.23"
    },
    {
      teams: ["STP", "FCK"],
      goals: [1, 0],
      date: "12.02.23"
    }
  ],
  21: [
    {
      teams: ["EBS", "KIE"],
      goals: [2, 3],
      date: "17.02.23"
    },
    {
      teams: ["P07", "FCK"],
      goals: [1, 0],
      date: "17.02.23"
    },
    {
      teams: ["FCM", "STP"],
      goals: [1, 2],
      date: "18.02.23"
    },
    {
      teams: ["SGF", "DÜS"],
      goals: [2, 1],
      date: "18.02.23"
    },
    {
      teams: ["JRE", "H96"],
      goals: [1, 1],
      date: "18.02.23"
    },
    {
      teams: ["ROS", "D98"],
      goals: [0, 1],
      date: "18.02.23"
    },
    {
      teams: ["HSV", "BIE"],
      goals: [2, 1],
      date: "19.02.23"
    },
    {
      teams: ["FCH", "FCN"],
      goals: [5, 0],
      date: "19.02.23"
    },
    {
      teams: ["SVS", "KSC"],
      goals: [0, 3],
      date: "19.02.23"
    }
  ],
  22: [
    {
      teams: ["KSC", "JRE"],
      goals: [1, 0],
      date: "24.02.23"
    },
    {
      teams: ["DÜS", "EBS"],
      goals: [3, 1],
      date: "24.02.23"
    },
    {
      teams: ["FCK", "SGF"],
      goals: [3, 1],
      date: "25.02.23"
    },
    {
      teams: ["KIE", "P07"],
      goals: [1, 1],
      date: "25.02.23"
    },
    {
      teams: ["FCN", "SVS"],
      goals: [1, 0],
      date: "25.02.23"
    },
    {
      teams: ["D98", "HSV"],
      goals: [1, 1],
      date: "25.02.23"
    },
    {
      teams: ["BIE", "FCH"],
      goals: [0, 1],
      date: "26.02.23"
    },
    {
      teams: ["STP", "ROS"],
      goals: [1, 0],
      date: "26.02.23"
    },
    {
      teams: ["H96", "FCM"],
      goals: [1, 2],
      date: "26.02.23"
    }
  ],
  23: [
    {
      teams: ["P07", "STP"],
      goals: [1, 2],
      date: "03.03.23"
    },
    {
      teams: ["FCM", "FCK"],
      goals: [2, 0],
      date: "03.03.23"
    },
    {
      teams: ["HSV", "FCN"],
      goals: [3, 0],
      date: "04.03.23"
    },
    {
      teams: ["SVS", "KIE"],
      goals: [1, 1],
      date: "04.03.23"
    },
    {
      teams: ["JRE", "DÜS"],
      goals: [0, 1],
      date: "04.03.23"
    },
    {
      teams: ["FCH", "D98"],
      goals: [1, 0],
      date: "04.03.23"
    },
    {
      teams: ["EBS", "BIE"],
      goals: [3, 3],
      date: "05.03.23"
    },
    {
      teams: ["SGF", "H96"],
      goals: [1, 1],
      date: "05.03.23"
    },
    {
      teams: ["ROS", "KSC"],
      goals: [0, 2],
      date: "05.03.23"
    }
  ],
  24: [
    {
      teams: ["FCK", "SVS"],
      goals: [2, 2],
      date: "10.03.23"
    },
    {
      teams: ["FCN", "EBS"],
      goals: [2, 0],
      date: "10.03.23"
    },
    {
      teams: ["STP", "SGF"],
      goals: [2, 1],
      date: "11.03.23"
    },
    {
      teams: ["BIE", "D98"],
      goals: [3, 1],
      date: "11.03.23"
    },
    {
      teams: ["FCM", "P07"],
      goals: [0, 0],
      date: "11.03.23"
    },
    {
      teams: ["DÜS", "FCH"],
      goals: [1, 1],
      date: "11.03.23"
    },
    {
      teams: ["KSC", "HSV"],
      goals: [4, 2],
      date: "12.03.23"
    },
    {
      teams: ["H96", "ROS"],
      goals: [1, 1],
      date: "12.03.23"
    },
    {
      teams: ["KIE", "JRE"],
      goals: [1, 2],
      date: "12.03.23"
    }
  ],
  25: [
    {
      teams: ["BIE", "FCN"],
      goals: [2, 2],
      date: "17.03.23"
    },
    {
      teams: ["FCH", "KSC"],
      goals: [5, 2],
      date: "17.03.23"
    },
    {
      teams: ["JRE", "P07"],
      goals: [1, 0],
      date: "18.03.23"
    },
    {
      teams: ["HSV", "KIE"],
      goals: [0, 0],
      date: "18.03.23"
    },
    {
      teams: ["SGF", "FCM"],
      goals: [3, 0],
      date: "18.03.23"
    },
    {
      teams: ["D98", "FCK"],
      goals: [2, 0],
      date: "18.03.23"
    },
    {
      teams: ["SVS", "STP"],
      goals: [0, 5],
      date: "19.03.23"
    },
    {
      teams: ["ROS", "DÜS"],
      goals: [2, 5],
      date: "19.03.23"
    },
    {
      teams: ["EBS", "H96"],
      goals: [1, 0],
      date: "19.03.23"
    }
  ],
  26: [
    {
      teams: ["DÜS", "HSV"],
      goals: [2, 2],
      date: "31.03.23"
    },
    {
      teams: ["FCN", "D98"],
      goals: [0, 1],
      date: "31.03.23"
    },
    {
      teams: ["H96", "SVS"],
      goals: [null, null],
      date: "01.04.23"
    },
    {
      teams: ["STP", "JRE"],
      goals: [null, null],
      date: "01.04.23"
    },
    {
      teams: ["KSC", "EBS"],
      goals: [null, null],
      date: "01.04.23"
    },
    {
      teams: ["FCK", "FCH"],
      goals: [null, null],
      date: "01.04.23"
    },
    {
      teams: ["KIE", "BIE"],
      goals: [null, null],
      date: "02.04.23"
    },
    {
      teams: ["P07", "SGF"],
      goals: [null, null],
      date: "02.04.23"
    },
    {
      teams: ["FCM", "ROS"],
      goals: [null, null],
      date: "02.04.23"
    }
  ],
  27: [
    {
      teams: ["HSV", "H96"],
      goals: [null, null],
      date: "08.04.23"
    },
    {
      teams: ["FCN", "KSC"],
      goals: [null, null],
      date: "08.04.23"
    },
    {
      teams: ["EBS", "FCK"],
      goals: [null, null],
      date: "08.04.23"
    },
    {
      teams: ["FCH", "STP"],
      goals: [null, null],
      date: "08.04.23"
    },
    {
      teams: ["SVS", "SGF"],
      goals: [null, null],
      date: "09.04.23"
    },
    {
      teams: ["D98", "P07"],
      goals: [null, null],
      date: "09.04.23"
    },
    {
      teams: ["ROS", "KIE"],
      goals: [null, null],
      date: "09.04.23"
    },
    {
      teams: ["BIE", "DÜS"],
      goals: [null, null],
      date: "09.04.23"
    },
    {
      teams: ["JRE", "FCM"],
      goals: [null, null],
      date: "09.04.23"
    }
  ],
  28: [
    {
      teams: ["H96", "FCH"],
      goals: [null, null],
      date: "14.04.23"
    },
    {
      teams: ["SGF", "JRE"],
      goals: [null, null],
      date: "14.04.23"
    },
    {
      teams: ["KIE", "FCN"],
      goals: [null, null],
      date: "15.04.23"
    },
    {
      teams: ["P07", "ROS"],
      goals: [null, null],
      date: "15.04.23"
    },
    {
      teams: ["FCM", "SVS"],
      goals: [null, null],
      date: "15.04.23"
    },
    {
      teams: ["FCK", "HSV"],
      goals: [null, null],
      date: "15.04.23"
    },
    {
      teams: ["KSC", "BIE"],
      goals: [null, null],
      date: "16.04.23"
    },
    {
      teams: ["DÜS", "D98"],
      goals: [null, null],
      date: "16.04.23"
    },
    {
      teams: ["STP", "EBS"],
      goals: [null, null],
      date: "16.04.23"
    }
  ],
  29: [
    {
      teams: ["HSV", "STP"],
      goals: [null, null],
      date: "21.04.23"
    },
    {
      teams: ["D98", "KSC"],
      goals: [null, null],
      date: "21.04.23"
    },
    {
      teams: ["ROS", "SGF"],
      goals: [null, null],
      date: "22.04.23"
    },
    {
      teams: ["FCN", "DÜS"],
      goals: [null, null],
      date: "22.04.23"
    },
    {
      teams: ["BIE", "H96"],
      goals: [null, null],
      date: "22.04.23"
    },
    {
      teams: ["EBS", "FCM"],
      goals: [null, null],
      date: "22.04.23"
    },
    {
      teams: ["SVS", "P07"],
      goals: [null, null],
      date: "23.04.23"
    },
    {
      teams: ["FCH", "KIE"],
      goals: [null, null],
      date: "23.04.23"
    },
    {
      teams: ["JRE", "FCK"],
      goals: [null, null],
      date: "23.04.23"
    }
  ],
  30: [
    {
      teams: ["SGF", "FCH"],
      goals: [null, null],
      date: "28.04.23"
    },
    {
      teams: ["P07", "EBS"],
      goals: [null, null],
      date: "28.04.23"
    },
    {
      teams: ["STP", "BIE"],
      goals: [null, null],
      date: "29.04.23"
    },
    {
      teams: ["FCM", "HSV"],
      goals: [null, null],
      date: "29.04.23"
    },
    {
      teams: ["FCK", "ROS"],
      goals: [null, null],
      date: "29.04.23"
    },
    {
      teams: ["H96", "FCN"],
      goals: [null, null],
      date: "29.04.23"
    },
    {
      teams: ["KIE", "D98"],
      goals: [null, null],
      date: "30.04.23"
    },
    {
      teams: ["DÜS", "KSC"],
      goals: [null, null],
      date: "30.04.23"
    },
    {
      teams: ["SVS", "JRE"],
      goals: [null, null],
      date: "30.04.23"
    }
  ],
  31: [
    {
      teams: ["BIE", "SGF"],
      goals: [null, null],
      date: "07.05.23"
    },
    {
      teams: ["D98", "STP"],
      goals: [null, null],
      date: "07.05.23"
    },
    {
      teams: ["HSV", "P07"],
      goals: [null, null],
      date: "07.05.23"
    },
    {
      teams: ["DÜS", "KIE"],
      goals: [null, null],
      date: "07.05.23"
    },
    {
      teams: ["KSC", "H96"],
      goals: [null, null],
      date: "07.05.23"
    },
    {
      teams: ["EBS", "SVS"],
      goals: [null, null],
      date: "07.05.23"
    },
    {
      teams: ["ROS", "JRE"],
      goals: [null, null],
      date: "07.05.23"
    },
    {
      teams: ["FCH", "FCM"],
      goals: [null, null],
      date: "07.05.23"
    },
    {
      teams: ["FCN", "FCK"],
      goals: [null, null],
      date: "07.05.23"
    }
  ],
  32: [
    {
      teams: ["FCK", "BIE"],
      goals: [null, null],
      date: "14.05.23"
    },
    {
      teams: ["JRE", "HSV"],
      goals: [null, null],
      date: "14.05.23"
    },
    {
      teams: ["H96", "D98"],
      goals: [null, null],
      date: "14.05.23"
    },
    {
      teams: ["P07", "FCH"],
      goals: [null, null],
      date: "14.05.23"
    },
    {
      teams: ["FCM", "FCN"],
      goals: [null, null],
      date: "14.05.23"
    },
    {
      teams: ["STP", "DÜS"],
      goals: [null, null],
      date: "14.05.23"
    },
    {
      teams: ["KIE", "KSC"],
      goals: [null, null],
      date: "14.05.23"
    },
    {
      teams: ["SVS", "ROS"],
      goals: [null, null],
      date: "14.05.23"
    },
    {
      teams: ["SGF", "EBS"],
      goals: [null, null],
      date: "14.05.23"
    }
  ],
  33: [
    {
      teams: ["HSV", "SGF"],
      goals: [null, null],
      date: "21.05.23"
    },
    {
      teams: ["KIE", "STP"],
      goals: [null, null],
      date: "21.05.23"
    },
    {
      teams: ["BIE", "P07"],
      goals: [null, null],
      date: "21.05.23"
    },
    {
      teams: ["DÜS", "H96"],
      goals: [null, null],
      date: "21.05.23"
    },
    {
      teams: ["FCN", "ROS"],
      goals: [null, null],
      date: "21.05.23"
    },
    {
      teams: ["FCH", "SVS"],
      goals: [null, null],
      date: "21.05.23"
    },
    {
      teams: ["EBS", "JRE"],
      goals: [null, null],
      date: "21.05.23"
    },
    {
      teams: ["D98", "FCM"],
      goals: [null, null],
      date: "21.05.23"
    },
    {
      teams: ["KSC", "FCK"],
      goals: [null, null],
      date: "21.05.23"
    }
  ],
  34: [
    {
      teams: ["FCM", "BIE"],
      goals: [null, null],
      date: "28.05.23"
    },
    {
      teams: ["SVS", "HSV"],
      goals: [null, null],
      date: "28.05.23"
    },
    {
      teams: ["SGF", "D98"],
      goals: [null, null],
      date: "28.05.23"
    },
    {
      teams: ["JRE", "FCH"],
      goals: [null, null],
      date: "28.05.23"
    },
    {
      teams: ["P07", "FCN"],
      goals: [null, null],
      date: "28.05.23"
    },
    {
      teams: ["H96", "KIE"],
      goals: [null, null],
      date: "28.05.23"
    },
    {
      teams: ["FCK", "DÜS"],
      goals: [null, null],
      date: "28.05.23"
    },
    {
      teams: ["STP", "KSC"],
      goals: [null, null],
      date: "28.05.23"
    },
    {
      teams: ["ROS", "EBS"],
      goals: [null, null],
      date: "29.05.23"
    }
  ]
};

const table = makeTable(matches);

const data = {
  matches: matches,
  table: table
};

module.exports = data;
