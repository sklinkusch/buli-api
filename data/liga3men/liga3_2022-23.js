const { makeTable } = require("../helpers");

const matches = {
  1: [
    {
      teams: ["OSN", "DUI"],
      goals: [1, 0],
      date: "22.07.22"
    },
    {
      teams: ["OLD", "SVM"],
      goals: [1, 1],
      date: "23.07.22"
    },
    {
      teams: ["FCI", "BAY"],
      goals: [1, 0],
      date: "23.07.22"
    },
    {
      teams: ["WMA", "VKÖ"],
      goals: [3, 1],
      date: "23.07.22"
    },
    {
      teams: ["RWE", "SVE"],
      goals: [1, 5],
      date: "23.07.22"
    },
    {
      teams: ["DRE", "MÜN"],
      goals: [3, 4],
      date: "23.07.22"
    },
    {
      teams: ["FCS", "SCV"],
      goals: [1, 0],
      date: "23.07.22"
    },
    {
      teams: ["SCF2", "AUE"],
      goals: [1, 1],
      date: "24.07.22"
    },
    {
      teams: ["ZWI", "HFC"],
      goals: [3, 2],
      date: "24.07.22"
    },
    {
      teams: ["WIE", "BVB2"],
      goals: [1, 1],
      date: "25.07.22"
    }
  ],
  2: [
    {
      teams: ["DUI", "RWE"],
      goals: [2, 2],
      date: "05.08.22"
    },
    {
      teams: ["MÜN", "OLD"],
      goals: [1, 0],
      date: "06.08.22"
    },
    {
      teams: ["SVE", "FCS"],
      goals: [0, 2],
      date: "06.08.22"
    },
    {
      teams: ["VKÖ", "WIE"],
      goals: [1, 0],
      date: "06.08.22"
    },
    {
      teams: ["SVM", "ZWI"],
      goals: [3, 0],
      date: "06.08.22"
    },
    {
      teams: ["HFC", "DRE"],
      goals: [0, 2],
      date: "06.08.22"
    },
    {
      teams: ["BAY", "SCF2"],
      goals: [0, 1],
      date: "06.08.22"
    },
    {
      teams: ["BVB2", "FCI"],
      goals: [0, 4],
      date: "07.08.22"
    },
    {
      teams: ["AUE", "OSN"],
      goals: [1, 1],
      date: "07.08.22"
    },
    {
      teams: ["SCV", "WMA"],
      goals: [2, 2],
      date: "07.08.22"
    }
  ],
  3: [
    {
      teams: ["OLD", "SVE"],
      goals: [2, 3],
      date: "09.08.22"
    },
    {
      teams: ["MÜN", "SVM"],
      goals: [4, 0],
      date: "09.08.22"
    },
    {
      teams: ["RWE", "VKÖ"],
      goals: [1, 4],
      date: "09.08.22"
    },
    {
      teams: ["ZWI", "DUI"],
      goals: [0, 1],
      date: "09.08.22"
    },
    {
      teams: ["SCF2", "HFC"],
      goals: [2, 0],
      date: "09.08.22"
    },
    {
      teams: ["WIE", "BAY"],
      goals: [4, 1],
      date: "10.08.22"
    },
    {
      teams: ["OSN", "FCI"],
      goals: [0, 1],
      date: "10.08.22"
    },
    {
      teams: ["WMA", "AUE"],
      goals: [1, 0],
      date: "10.08.22"
    },
    {
      teams: ["DRE", "SCV"],
      goals: [2, 0],
      date: "10.08.22"
    },
    {
      teams: ["FCS", "BVB2"],
      goals: [1, 0],
      date: "10.08.22"
    }
  ],
  4: [
    {
      teams: ["HFC", "OLD"],
      goals: [2, 0],
      date: "12.08.22"
    },
    {
      teams: ["FCI", "FCS"],
      goals: [0, 0],
      date: "13.08.22"
    },
    {
      teams: ["SVE", "ZWI"],
      goals: [5, 0],
      date: "13.08.22"
    },
    {
      teams: ["BVB2", "RWE"],
      goals: [1, 0],
      date: "13.08.22"
    },
    {
      teams: ["VKÖ", "DRE"],
      goals: [2, 1],
      date: "13.08.22"
    },
    {
      teams: ["SCV", "MÜN"],
      goals: [0, 1],
      date: "13.08.22"
    },
    {
      teams: ["BAY", "OSN"],
      goals: [1, 0],
      date: "13.08.22"
    },
    {
      teams: ["SVM", "WMA"],
      goals: [6, 2],
      date: "14.08.22"
    },
    {
      teams: ["AUE", "WIE"],
      goals: [1, 5],
      date: "14.08.22"
    },
    {
      teams: ["DUI", "SCF2"],
      goals: [3, 1],
      date: "15.08.22"
    }
  ],
  5: [
    {
      teams: ["MÜN", "HFC"],
      goals: [3, 1],
      date: "19.08.22"
    },
    {
      teams: ["WIE", "OSN"],
      goals: [1, 1],
      date: "20.08.22"
    },
    {
      teams: ["WMA", "BVB2"],
      goals: [2, 1],
      date: "20.08.22"
    },
    {
      teams: ["RWE", "FCI"],
      goals: [2, 2],
      date: "20.08.22"
    },
    {
      teams: ["DRE", "SVE"],
      goals: [2, 3],
      date: "20.08.22"
    },
    {
      teams: ["FCS", "AUE"],
      goals: [0, 0],
      date: "20.08.22"
    },
    {
      teams: ["SCF2", "VKÖ"],
      goals: [1, 0],
      date: "20.08.22"
    },
    {
      teams: ["OLD", "SCV"],
      goals: [1, 0],
      date: "21.08.22"
    },
    {
      teams: ["SVM", "DUI"],
      goals: [0, 3],
      date: "21.08.22"
    },
    {
      teams: ["ZWI", "BAY"],
      goals: [2, 0],
      date: "22.08.22"
    }
  ],
  6: [
    {
      teams: ["HFC", "SVM"],
      goals: [1, 1],
      date: "26.08.22"
    },
    {
      teams: ["OSN", "FCS"],
      goals: [2, 2],
      date: "27.08.22"
    },
    {
      teams: ["FCI", "WIE"],
      goals: [2, 3],
      date: "27.08.22"
    },
    {
      teams: ["SVE", "WMA"],
      goals: [1, 0],
      date: "27.08.22"
    },
    {
      teams: ["VKÖ", "MÜN"],
      goals: [1, 1],
      date: "27.08.22"
    },
    {
      teams: ["SCV", "ZWI"],
      goals: [3, 0],
      date: "27.08.22"
    },
    {
      teams: ["BAY", "RWE"],
      goals: [1, 1],
      date: "27.08.22"
    },
    {
      teams: ["BVB2", "SCF2"],
      goals: [0, 2],
      date: "28.08.22"
    },
    {
      teams: ["AUE", "DRE"],
      goals: [0, 1],
      date: "28.08.22"
    },
    {
      teams: ["DUI", "OLD"],
      goals: [1, 1],
      date: "29.08.22"
    }
  ],
  7: [
    {
      teams: ["RWE", "AUE"],
      goals: [2, 1],
      date: "02.09.22"
    },
    {
      teams: ["OLD", "OSN"],
      goals: [4, 3],
      date: "03.09.22"
    },
    {
      teams: ["MÜN", "DUI"],
      goals: [4, 1],
      date: "03.09.22"
    },
    {
      teams: ["WMA", "BAY"],
      goals: [2, 1],
      date: "03.09.22"
    },
    {
      teams: ["HFC", "SCV"],
      goals: [5, 1],
      date: "03.09.22"
    },
    {
      teams: ["DRE", "BVB2"],
      goals: [3, 0],
      date: "03.09.22"
    },
    {
      teams: ["SCF2", "FCI"],
      goals: [1, 0],
      date: "03.09.22"
    },
    {
      teams: ["SVM", "SVE"],
      goals: [0, 0],
      date: "04.09.22"
    },
    {
      teams: ["ZWI", "VKÖ"],
      goals: [0, 0],
      date: "04.09.22"
    },
    {
      teams: ["FCS", "WIE"],
      goals: [2, 2],
      date: "05.09.22"
    }
  ],
  8: [
    {
      teams: ["OSN", "RWE"],
      goals: [1, 0],
      date: "09.09.22"
    },
    {
      teams: ["WIE", "SCF2"],
      goals: [3, 1],
      date: "10.09.22"
    },
    {
      teams: ["FCI", "WMA"],
      goals: [1, 0],
      date: "10.09.22"
    },
    {
      teams: ["SVE", "MÜN"],
      goals: [4, 1],
      date: "10.09.22"
    },
    {
      teams: ["BVB2", "OLD"],
      goals: [1, 2],
      date: "10.09.22"
    },
    {
      teams: ["VKÖ", "HFC"],
      goals: [2, 2],
      date: "10.09.22"
    },
    {
      teams: ["BAY", "FCS"],
      goals: [0, 6],
      date: "10.09.22"
    },
    {
      teams: ["DUI", "DRE"],
      goals: [0, 1],
      date: "11.09.22"
    },
    {
      teams: ["AUE", "ZWI"],
      goals: [0, 1],
      date: "11.09.22"
    },
    {
      teams: ["SCV", "SVM"],
      goals: [2, 2],
      date: "12.09.22"
    }
  ],
  9: [
    {
      teams: ["MÜN", "AUE"],
      goals: [3, 1],
      date: "16.09.22"
    },
    {
      teams: ["OLD", "BAY"],
      goals: [1, 1],
      date: "17.09.22"
    },
    {
      teams: ["WMA", "WIE"],
      goals: [1, 0],
      date: "17.09.22"
    },
    {
      teams: ["SVM", "VKÖ"],
      goals: [2, 2],
      date: "17.09.22"
    },
    {
      teams: ["HFC", "SVE"],
      goals: [1, 3],
      date: "17.09.22"
    },
    {
      teams: ["DRE", "FCI"],
      goals: [1, 1],
      date: "17.09.22"
    },
    {
      teams: ["ZWI", "BVB2"],
      goals: [1, 2],
      date: "17.09.22"
    },
    {
      teams: ["SCF2", "OSN"],
      goals: [1, 1],
      date: "18.09.22"
    },
    {
      teams: ["SCV", "DUI"],
      goals: [1, 0],
      date: "18.09.22"
    },
    {
      teams: ["RWE", "FCS"],
      goals: [1, 0],
      date: "19.09.22"
    }
  ],
  10: [
    {
      teams: ["AUE", "SVM"],
      goals: [3, 0],
      date: "30.09.22"
    },
    {
      teams: ["BAY", "DRE"],
      goals: [1, 1],
      date: "01.10.22"
    },
    {
      teams: ["BVB2", "MÜN"],
      goals: [1, 1],
      date: "01.10.22"
    },
    {
      teams: ["FCS", "SCF2"],
      goals: [2, 2],
      date: "01.10.22"
    },
    {
      teams: ["OSN", "WMA"],
      goals: [5, 0],
      date: "01.10.22"
    },
    {
      teams: ["SVE", "SCV"],
      goals: [1, 2],
      date: "01.10.22"
    },
    {
      teams: ["DUI", "HFC"],
      goals: [1, 0],
      date: "01.10.22"
    },
    {
      teams: ["VKÖ", "OLD"],
      goals: [1, 2],
      date: "02.10.22"
    },
    {
      teams: ["WIE", "RWE"],
      goals: [3, 1],
      date: "02.10.22"
    },
    {
      teams: ["FCI", "ZWI"],
      goals: [0, 0],
      date: "03.10.22"
    }
  ],
  11: [
    {
      teams: ["SCV", "VKÖ"],
      goals: [2, 2],
      date: "07.10.22"
    },
    {
      teams: ["OLD", "AUE"],
      goals: [1, 3],
      date: "08.10.22"
    },
    {
      teams: ["MÜN", "FCI"],
      goals: [1, 2],
      date: "08.10.22"
    },
    {
      teams: ["WMA", "FCS"],
      goals: [1, 0],
      date: "08.10.22"
    },
    {
      teams: ["SVE", "DUI"],
      goals: [3, 0],
      date: "08.10.22"
    },
    {
      teams: ["SVM", "BAY"],
      goals: [0, 1],
      date: "08.10.22"
    },
    {
      teams: ["ZWI", "WIE"],
      goals: [0, 1],
      date: "08.10.22"
    },
    {
      teams: ["DRE", "OSN"],
      goals: [3, 2],
      date: "09.10.22"
    },
    {
      teams: ["SCF2", "RWE"],
      goals: [0, 3],
      date: "09.10.22"
    },
    {
      teams: ["HFC", "BVB2"],
      goals: [0, 0],
      date: "10.10.22"
    }
  ],
  12: [
    {
      teams: ["AUE", "HFC"],
      goals: [1, 1],
      date: "14.10.22"
    },
    {
      teams: ["RWE", "DRE"],
      goals: [1, 1],
      date: "15.10.22"
    },
    {
      teams: ["VKÖ", "SVE"],
      goals: [0, 2],
      date: "15.10.22"
    },
    {
      teams: ["FCS", "ZWI"],
      goals: [3, 2],
      date: "15.10.22"
    },
    {
      teams: ["SCF2", "WMA"],
      goals: [3, 2],
      date: "15.10.22"
    },
    {
      teams: ["OSN", "MÜN"],
      goals: [0, 2],
      date: "15.10.22"
    },
    {
      teams: ["FCI", "SVM"],
      goals: [3, 1],
      date: "15.10.22"
    },
    {
      teams: ["BAY", "SCV"],
      goals: [1, 3],
      date: "16.10.22"
    },
    {
      teams: ["BVB2", "DUI"],
      goals: [2, 0],
      date: "16.10.22"
    },
    {
      teams: ["WIE", "OLD"],
      goals: [3, 1],
      date: "17.10.22"
    }
  ],
  13: [
    {
      teams: ["ZWI", "SCF2"],
      goals: [0, 1],
      date: "21.10.22"
    },
    {
      teams: ["DUI", "VKÖ"],
      goals: [1, 1],
      date: "22.10.22"
    },
    {
      teams: ["MÜN", "WIE"],
      goals: [3, 1],
      date: "22.10.22"
    },
    {
      teams: ["WMA", "RWE"],
      goals: [1, 2],
      date: "22.10.22"
    },
    {
      teams: ["SVE", "OSN"],
      goals: [4, 1],
      date: "22.10.22"
    },
    {
      teams: ["SVM", "BVB2"],
      goals: [0, 2],
      date: "22.10.22"
    },
    {
      teams: ["DRE", "FCS"],
      goals: [1, 2],
      date: "22.10.22"
    },
    {
      teams: ["OLD", "FCI"],
      goals: [0, 3],
      date: "23.10.22"
    },
    {
      teams: ["SCV", "AUE"],
      goals: [3, 2],
      date: "23.10.22"
    },
    {
      teams: ["HFC", "BAY"],
      goals: [3, 0],
      date: "24.10.22"
    }
  ],
  14: [
    {
      teams: ["WIE", "DUI"],
      goals: [1, 3],
      date: "28.10.22"
    },
    {
      teams: ["AUE", "SVE"],
      goals: [1, 1],
      date: "29.10.22"
    },
    {
      teams: ["WMA", "DRE"],
      goals: [2, 1],
      date: "29.10.22"
    },
    {
      teams: ["RWE", "ZWI"],
      goals: [1, 1],
      date: "29.10.22"
    },
    {
      teams: ["BVB2", "SCV"],
      goals: [1, 0],
      date: "29.10.22"
    },
    {
      teams: ["FCS", "SVM"],
      goals: [0, 0],
      date: "29.10.22"
    },
    {
      teams: ["BAY", "MÜN"],
      goals: [1, 0],
      date: "29.10.22"
    },
    {
      teams: ["SCF2", "OLD"],
      goals: [1, 0],
      date: "30.10.22"
    },
    {
      teams: ["FCI", "VKÖ"],
      goals: [1, 3],
      date: "30.10.22"
    },
    {
      teams: ["OSN", "HFC"],
      goals: [3, 2],
      date: "31.10.22"
    }
  ],
  15: [
    {
      teams: ["SVM", "WIE"],
      goals: [0, 3],
      date: "04.11.22"
    },
    {
      teams: ["DUI", "BAY"],
      goals: [1, 1],
      date: "05.11.22"
    },
    {
      teams: ["SVE", "BVB2"],
      goals: [3, 1],
      date: "05.11.22"
    },
    {
      teams: ["VKÖ", "AUE"],
      goals: [3, 0],
      date: "05.11.22"
    },
    {
      teams: ["HFC", "WMA"],
      goals: [3, 1],
      date: "05.11.22"
    },
    {
      teams: ["DRE", "SCF2"],
      goals: [1, 1],
      date: "05.11.22"
    },
    {
      teams: ["SCV", "FCI"],
      goals: [2, 1],
      date: "05.11.22"
    },
    {
      teams: ["OLD", "RWE"],
      goals: [3, 5],
      date: "06.11.22"
    },
    {
      teams: ["ZWI", "OSN"],
      goals: [4, 3],
      date: "06.11.22"
    },
    {
      teams: ["MÜN", "FCS"],
      goals: [0, 1],
      date: "07.11.22"
    }
  ],
  16: [
    {
      teams: ["WIE", "DRE"],
      goals: [1, 0],
      date: "08.11.22"
    },
    {
      teams: ["AUE", "DUI"],
      goals: [0, 2],
      date: "08.11.22"
    },
    {
      teams: ["FCI", "HFC"],
      goals: [1, 0],
      date: "08.11.22"
    },
    {
      teams: ["BVB2", "VKÖ"],
      goals: [0, 2],
      date: "08.11.22"
    },
    {
      teams: ["BAY", "SVE"],
      goals: [0, 1],
      date: "08.11.22"
    },
    {
      teams: ["OSN", "SCV"],
      goals: [2, 1],
      date: "09.11.22"
    },
    {
      teams: ["WMA", "ZWI"],
      goals: [2, 1],
      date: "09.11.22"
    },
    {
      teams: ["RWE", "SVM"],
      goals: [0, 0],
      date: "09.11.22"
    },
    {
      teams: ["FCS", "OLD"],
      goals: [3, 1],
      date: "09.11.22"
    },
    {
      teams: ["SCF2", "MÜN"],
      goals: [2, 0],
      date: "09.11.22"
    }
  ],
  17: [
    {
      teams: ["BVB2", "AUE"],
      goals: [0, 1],
      date: "11.11.22"
    },
    {
      teams: ["DUI", "FCI"],
      goals: [0, 1],
      date: "12.11.22"
    },
    {
      teams: ["SVE", "SCF2"],
      goals: [3, 0],
      date: "12.11.22"
    },
    {
      teams: ["SVM", "OSN"],
      goals: [0, 3],
      date: "12.11.22"
    },
    {
      teams: ["HFC", "FCS"],
      goals: [1, 2],
      date: "12.11.22"
    },
    {
      teams: ["DRE", "ZWI"],
      goals: [0, 0],
      date: "12.11.22"
    },
    {
      teams: ["SCV", "WIE"],
      goals: [1, 1],
      date: "12.11.22"
    },
    {
      teams: ["OLD", "WMA"],
      goals: [1, 1],
      date: "13.11.22"
    },
    {
      teams: ["VKÖ", "BAY"],
      goals: [2, 1],
      date: "13.11.22"
    },
    {
      teams: ["MÜN", "RWE"],
      goals: [1, 1],
      date: "14.11.22"
    }
  ],
  18: [
    {
      teams: ["ZWI", "OLD"],
      goals: [0, 1],
      date: "13.01.23"
    },
    {
      teams: ["WIE", "SVE"],
      goals: [1, 0],
      date: "14.01.23"
    },
    {
      teams: ["OSN", "VKÖ"],
      goals: [3, 1],
      date: "14.01.23"
    },
    {
      teams: ["WMA", "MÜN"],
      goals: [3, 1],
      date: "14.01.23"
    },
    {
      teams: ["RWE", "HFC"],
      goals: [0, 0],
      date: "14.01.23"
    },
    {
      teams: ["FCS", "DUI"],
      goals: [2, 3],
      date: "14.01.23"
    },
    {
      teams: ["SCF2", "SCV"],
      goals: [1, 1],
      date: "14.01.23"
    },
    {
      teams: ["DRE", "SVM"],
      goals: [1, 1],
      date: "15.01.23"
    },
    {
      teams: ["BAY", "BVB2"],
      goals: [3, 1],
      date: "15.01.23"
    },
    {
      teams: ["FCI", "AUE"],
      goals: [1, 2],
      date: "16.01.23"
    }
  ],
  19: [
    {
      teams: ["VKÖ", "FCS"],
      goals: [0, 2],
      date: "20.01.23"
    },
    {
      teams: ["AUE", "BAY"],
      goals: [4, 0],
      date: "21.01.23"
    },
    {
      teams: ["MÜN", "ZWI"],
      goals: [3, 1],
      date: "21.01.23"
    },
    {
      teams: ["SVE", "FCI"],
      goals: [4, 3],
      date: "21.01.23"
    },
    {
      teams: ["SVM", "SCF2"],
      goals: [1, 2],
      date: "21.01.23"
    },
    {
      teams: ["SCV", "RWE"],
      goals: [1, 1],
      date: "21.01.23"
    },
    {
      teams: ["OLD", "DRE"],
      goals: [1, 3],
      date: "22.01.23"
    },
    {
      teams: ["HFC", "WIE"],
      goals: [2, 3],
      date: "22.01.23"
    },
    {
      teams: ["DUI", "WMA"],
      goals: [1, 3],
      date: "23.01.23"
    },
    {
      teams: ["BVB2", "OSN"],
      goals: [1, 2],
      date: "24.01.23"
    }
  ],
  20: [
    {
      teams: ["SVE", "RWE"],
      goals: [3, 0],
      date: "27.01.23"
    },
    {
      teams: ["SVM", "OLD"],
      goals: [1, 1],
      date: "28.01.23"
    },
    {
      teams: ["BAY", "FCI"],
      goals: [1, 0],
      date: "28.01.23"
    },
    {
      teams: ["HFC", "ZWI"],
      goals: [0, 2],
      date: "28.01.23"
    },
    {
      teams: ["SCV", "FCS"],
      goals: [2, 0],
      date: "28.01.23"
    },
    {
      teams: ["AUE", "SCF2"],
      goals: [0, 0],
      date: "28.01.23"
    },
    {
      teams: ["DUI", "OSN"],
      goals: [1, 2],
      date: "28.01.23"
    },
    {
      teams: ["VKÖ", "WMA"],
      goals: [1, 4],
      date: "29.01.23"
    },
    {
      teams: ["BVB2", "WIE"],
      goals: [0, 1],
      date: "29.01.23"
    },
    {
      teams: ["MÜN", "DRE"],
      goals: [1, 2],
      date: "30.01.23"
    }
  ],
  21: [
    {
      teams: ["SCF2", "BAY"],
      goals: [2, 0],
      date: "03.02.23"
    },
    {
      teams: ["OSN", "AUE"],
      goals: [3, 1],
      date: "04.02.23"
    },
    {
      teams: ["FCS", "SVE"],
      goals: [0, 4],
      date: "04.02.23"
    },
    {
      teams: ["FCI", "BVB2"],
      goals: [1, 2],
      date: "04.02.23"
    },
    {
      teams: ["WIE", "VKÖ"],
      goals: [1, 1],
      date: "04.02.23"
    },
    {
      teams: ["ZWI", "SVM"],
      goals: [1, 1],
      date: "04.02.23"
    },
    {
      teams: ["DRE", "HFC"],
      goals: [7, 1],
      date: "04.02.23"
    },
    {
      teams: ["OLD", "MÜN"],
      goals: [2, 2],
      date: "05.02.23"
    },
    {
      teams: ["RWE", "DUI"],
      goals: [1, 1],
      date: "05.02.23"
    },
    {
      teams: ["WMA", "SCV"],
      goals: [1, 1],
      date: "06.02.23"
    }
  ],
  22: [
    {
      teams: ["AUE", "WMA"],
      goals: [2, 1],
      date: "10.02.23"
    },
    {
      teams: ["SVE", "OLD"],
      goals: [3, 0],
      date: "11.02.23"
    },
    {
      teams: ["SVM", "MÜN"],
      goals: [2, 1],
      date: "11.02.23"
    },
    {
      teams: ["SCV", "DRE"],
      goals: [2, 3],
      date: "11.02.23"
    },
    {
      teams: ["DUI", "ZWI"],
      goals: [4, 0],
      date: "11.02.23"
    },
    {
      teams: ["BVB2", "FCS"],
      goals: [1, 2],
      date: "11.02.23"
    },
    {
      teams: ["HFC", "SCF2"],
      goals: [1, 3],
      date: "11.02.23"
    },
    {
      teams: ["FCI", "OSN"],
      goals: [1, 4],
      date: "12.02.23"
    },
    {
      teams: ["BAY", "WIE"],
      goals: [2, 3],
      date: "12.02.23"
    },
    {
      teams: ["VKÖ", "RWE"],
      goals: [1, 0],
      date: "13.02.23"
    }
  ],
  23: [
    {
      teams: ["WIE", "AUE"],
      goals: [1, 2],
      date: "17.02.23"
    },
    {
      teams: ["SCF2", "DUI"],
      goals: [2, 0],
      date: "18.02.23"
    },
    {
      teams: ["FCS", "FCI"],
      goals: [3, 4],
      date: "18.02.23"
    },
    {
      teams: ["ZWI", "SVE"],
      goals: [0, 2],
      date: "18.02.23"
    },
    {
      teams: ["DRE", "VKÖ"],
      goals: [1, 1],
      date: "18.02.23"
    },
    {
      teams: ["WMA", "SVM"],
      goals: [3, 1],
      date: "18.02.23"
    },
    {
      teams: ["OSN", "BAY"],
      goals: [2, 3],
      date: "18.02.23"
    },
    {
      teams: ["MÜN", "SCV"],
      goals: [0, 3],
      date: "19.02.23"
    },
    {
      teams: ["RWE", "BVB2"],
      goals: [2, 0],
      date: "19.02.23"
    },
    {
      teams: ["OLD", "HFC"],
      goals: [0, 1],
      date: "20.02.23"
    }
  ],
  24: [
    {
      teams: ["HFC", "MÜN"],
      goals: [0, 0],
      date: "24.02.23"
    },
    {
      teams: ["OSN", "WIE"],
      goals: [4, 1],
      date: "25.02.23"
    },
    {
      teams: ["SCV", "OLD"],
      goals: [2, 1],
      date: "25.02.23"
    },
    {
      teams: ["BVB2", "WMA"],
      goals: [4, 0],
      date: "25.02.23"
    },
    {
      teams: ["FCI", "RWE"],
      goals: [1, 1],
      date: "25.02.23"
    },
    {
      teams: ["DUI", "SVM"],
      goals: [0, 0],
      date: "25.02.23"
    },
    {
      teams: ["BAY", "ZWI"],
      goals: [5, 3],
      date: "25.02.23"
    },
    {
      teams: ["SVE", "DRE"],
      goals: [1, 1],
      date: "26.02.23"
    },
    {
      teams: ["AUE", "FCS"],
      goals: [2, 1],
      date: "26.02.23"
    },
    {
      teams: ["VKÖ", "SCF2"],
      goals: [0, 3],
      date: "27.02.23"
    }
  ],
  25: [
    {
      teams: ["SCF2", "BVB2"],
      goals: [1, 0],
      date: "03.03.23"
    },
    {
      teams: ["FCS", "OSN"],
      goals: [1, 2],
      date: "04.03.23"
    },
    {
      teams: ["DRE", "AUE"],
      goals: [1, 0],
      date: "04.03.23"
    },
    {
      teams: ["WIE", "FCI"],
      goals: [4, 1],
      date: "04.03.23"
    },
    {
      teams: ["MÜN", "VKÖ"],
      goals: [0, 1],
      date: "04.03.23"
    },
    {
      teams: ["SVM", "HFC"],
      goals: [2, 3],
      date: "04.03.23"
    },
    {
      teams: ["ZWI", "SCV"],
      goals: [2, 1],
      date: "04.03.23"
    },
    {
      teams: ["RWE", "BAY"],
      goals: [2, 0],
      date: "05.03.23"
    },
    {
      teams: ["OLD", "DUI"],
      goals: [2, 3],
      date: "05.03.23"
    },
    {
      teams: ["WMA", "SVE"],
      goals: [2, 1],
      date: "06.03.23"
    }
  ],
  26: [
    {
      teams: ["SCV", "HFC"],
      goals: [2, 2],
      date: "10.03.23"
    },
    {
      teams: ["OSN", "OLD"],
      goals: [2, 0],
      date: "11.03.23"
    },
    {
      teams: ["DUI", "MÜN"],
      goals: [2, 2],
      date: "11.03.23"
    },
    {
      teams: ["BAY", "WMA"],
      goals: [1, 3],
      date: "11.03.23"
    },
    {
      teams: ["AUE", "RWE"],
      goals: [2, 1],
      date: "11.03.23"
    },
    {
      teams: ["SVE", "SVM"],
      goals: [2, 2],
      date: "11.03.23"
    },
    {
      teams: ["VKÖ", "ZWI"],
      goals: [1, 1],
      date: "11.03.23"
    },
    {
      teams: ["FCI", "SCF2"],
      goals: [0, 1],
      date: "12.03.23"
    },
    {
      teams: ["WIE", "FCS"],
      goals: [0, 2],
      date: "12.03.23"
    },
    {
      teams: ["BVB2", "DRE"],
      goals: [1, 3],
      date: "12.03.23"
    }
  ],
  27: [
    {
      teams: ["RWE", "OSN"],
      goals: [1, 1],
      date: "14.03.23"
    },
    {
      teams: ["ZWI", "AUE"],
      goals: [0, 1],
      date: "14.03.23"
    },
    {
      teams: ["MÜN", "SVE"],
      goals: [1, 1],
      date: "14.03.23"
    },
    {
      teams: ["HFC", "VKÖ"],
      goals: [2, 2],
      date: "14.03.23"
    },
    {
      teams: ["SVM", "SCV"],
      goals: [1, 3],
      date: "14.03.23"
    },
    {
      teams: ["SCF2", "WIE"],
      goals: [4, 2],
      date: "15.03.23"
    },
    {
      teams: ["DRE", "DUI"],
      goals: [2, 9],
      date: "15.03.23"
    },
    {
      teams: ["WMA", "FCI"],
      goals: [3, 2],
      date: "15.03.23"
    },
    {
      teams: ["OLD", "BVB2"],
      goals: [2, 1],
      date: "15.03.23"
    },
    {
      teams: ["FCS", "BAY"],
      goals: [5, 0],
      date: "15.03.23"
    }
  ],
  28: [
    {
      teams: ["VKÖ", "SVM"],
      goals: [3, 1],
      date: "17.03.23"
    },
    {
      teams: ["BAY", "OLD"],
      goals: [1, 2],
      date: "18.03.23"
    },
    {
      teams: ["AUE", "MÜN"],
      goals: [1, 3],
      date: "18.03.23"
    },
    {
      teams: ["WIE", "WMA"],
      goals: [3, 0],
      date: "18.03.23"
    },
    {
      teams: ["FCS", "RWE"],
      goals: [3, 0],
      date: "18.03.23"
    },
    {
      teams: ["DUI", "SCV"],
      goals: [3, 3],
      date: "18.03.23"
    },
    {
      teams: ["OSN", "SCF2"],
      goals: [1, 1],
      date: "18.03.23"
    },
    {
      teams: ["SVE", "HFC"],
      goals: [1, 1],
      date: "19.03.23"
    },
    {
      teams: ["BVB2", "ZWI"],
      goals: [null, null],
      date: "19.03.23"
    },
    {
      teams: ["FCI", "DRE"],
      goals: [2, 3],
      date: "20.03.23"
    }
  ],
  29: [
    {
      teams: ["HFC", "DUI"],
      goals: [2, 2],
      date: "24.03.23"
    },
    {
      teams: ["RWE", "WIE"],
      goals: [1, 3],
      date: "25.03.23"
    },
    {
      teams: ["WMA", "OSN"],
      goals: [0, 2],
      date: "25.03.23"
    },
    {
      teams: ["SVM", "AUE"],
      goals: [3, 2],
      date: "25.03.23"
    },
    {
      teams: ["SCV", "SVE"],
      goals: [1, 2],
      date: "25.03.23"
    },
    {
      teams: ["OLD", "VKÖ"],
      goals: [1, 3],
      date: "25.03.23"
    },
    {
      teams: ["DRE", "BAY"],
      goals: [1, 2],
      date: "25.03.23"
    },
    {
      teams: ["MÜN", "BVB2"],
      goals: [1, 4],
      date: "26.03.23"
    },
    {
      teams: ["ZWI", "FCI"],
      goals: [2, 0],
      date: "26.03.23"
    },
    {
      teams: ["SCF2", "FCS"],
      goals: [1, 1],
      date: "27.03.23"
    }
  ],
  30: [
    {
      teams: ["BAY", "SVM"],
      goals: [3, 0],
      date: "31.03.23"
    },
    {
      teams: ["DUI", "SVE"],
      goals: [null, null],
      date: "01.04.23"
    },
    {
      teams: ["AUE", "OLD"],
      goals: [1, 0],
      date: "01.04.23"
    },
    {
      teams: ["BVB2", "HFC"],
      goals: [0, 0],
      date: "01.04.23"
    },
    {
      teams: ["WIE", "ZWI"],
      goals: [4, 3],
      date: "01.04.23"
    },
    {
      teams: ["VKÖ", "SCV"],
      goals: [2, 1],
      date: "01.04.23"
    },
    {
      teams: ["RWE", "SCF2"],
      goals: [2, 0],
      date: "01.04.23"
    },
    {
      teams: ["OSN", "DRE"],
      goals: [0, 1],
      date: "02.04.23"
    },
    {
      teams: ["FCS", "WMA"],
      goals: [2, 1],
      date: "02.04.23"
    },
    {
      teams: ["FCI", "MÜN"],
      goals: [1, 3],
      date: "03.04.23"
    }
  ],
  31: [
    {
      teams: ["DRE", "RWE"],
      goals: [2, 1],
      date: "08.04.23"
    },
    {
      teams: ["DUI", "BVB2"],
      goals: [0, 5],
      date: "08.04.23"
    },
    {
      teams: ["WMA", "SCF2"],
      goals: [2, 1],
      date: "08.04.23"
    },
    {
      teams: ["OLD", "WIE"],
      goals: [1, 2],
      date: "08.04.23"
    },
    {
      teams: ["MÜN", "OSN"],
      goals: [3, 0],
      date: "08.04.23"
    },
    {
      teams: ["HFC", "AUE"],
      goals: [5, 2],
      date: "08.04.23"
    },
    {
      teams: ["SVM", "FCI"],
      goals: [null, null],
      date: "09.04.23"
    },
    {
      teams: ["ZWI", "FCS"],
      goals: [null, null],
      date: "09.04.23"
    },
    {
      teams: ["SCV", "BAY"],
      goals: [null, null],
      date: "09.04.23"
    },
    {
      teams: ["SVE", "VKÖ"],
      goals: [null, null],
      date: "10.04.23"
    }
  ],
  32: [
    {
      teams: ["FCI", "OLD"],
      goals: [null, null],
      date: "15.04.23"
    },
    {
      teams: ["VKÖ", "DUI"],
      goals: [null, null],
      date: "15.04.23"
    },
    {
      teams: ["WIE", "MÜN"],
      goals: [null, null],
      date: "15.04.23"
    },
    {
      teams: ["RWE", "WMA"],
      goals: [null, null],
      date: "15.04.23"
    },
    {
      teams: ["OSN", "SVE"],
      goals: [null, null],
      date: "15.04.23"
    },
    {
      teams: ["BVB2", "SVM"],
      goals: [null, null],
      date: "15.04.23"
    },
    {
      teams: ["BAY", "HFC"],
      goals: [null, null],
      date: "15.04.23"
    },
    {
      teams: ["FCS", "DRE"],
      goals: [null, null],
      date: "15.04.23"
    },
    {
      teams: ["SCF2", "ZWI"],
      goals: [null, null],
      date: "15.04.23"
    },
    {
      teams: ["AUE", "SCV"],
      goals: [null, null],
      date: "15.04.23"
    }
  ],
  33: [
    {
      teams: ["DUI", "WIE"],
      goals: [null, null],
      date: "22.04.23"
    },
    {
      teams: ["HFC", "OSN"],
      goals: [null, null],
      date: "22.04.23"
    },
    {
      teams: ["SVE", "AUE"],
      goals: [null, null],
      date: "22.04.23"
    },
    {
      teams: ["VKÖ", "FCI"],
      goals: [null, null],
      date: "22.04.23"
    },
    {
      teams: ["DRE", "WMA"],
      goals: [null, null],
      date: "22.04.23"
    },
    {
      teams: ["ZWI", "RWE"],
      goals: [null, null],
      date: "22.04.23"
    },
    {
      teams: ["SCV", "BVB2"],
      goals: [null, null],
      date: "22.04.23"
    },
    {
      teams: ["SVM", "FCS"],
      goals: [null, null],
      date: "22.04.23"
    },
    {
      teams: ["OLD", "SCF2"],
      goals: [null, null],
      date: "22.04.23"
    },
    {
      teams: ["MÜN", "BAY"],
      goals: [null, null],
      date: "22.04.23"
    }
  ],
  34: [
    {
      teams: ["RWE", "OLD"],
      goals: [null, null],
      date: "29.04.23"
    },
    {
      teams: ["BAY", "DUI"],
      goals: [null, null],
      date: "29.04.23"
    },
    {
      teams: ["FCS", "MÜN"],
      goals: [null, null],
      date: "29.04.23"
    },
    {
      teams: ["BVB2", "SVE"],
      goals: [null, null],
      date: "29.04.23"
    },
    {
      teams: ["AUE", "VKÖ"],
      goals: [null, null],
      date: "29.04.23"
    },
    {
      teams: ["WIE", "SVM"],
      goals: [null, null],
      date: "29.04.23"
    },
    {
      teams: ["WMA", "HFC"],
      goals: [null, null],
      date: "29.04.23"
    },
    {
      teams: ["SCF2", "DRE"],
      goals: [null, null],
      date: "29.04.23"
    },
    {
      teams: ["OSN", "ZWI"],
      goals: [null, null],
      date: "29.04.23"
    },
    {
      teams: ["FCI", "SCV"],
      goals: [null, null],
      date: "29.04.23"
    }
  ],
  35: [
    {
      teams: ["DRE", "WIE"],
      goals: [null, null],
      date: "06.05.23"
    },
    {
      teams: ["SCV", "OSN"],
      goals: [null, null],
      date: "06.05.23"
    },
    {
      teams: ["DUI", "AUE"],
      goals: [null, null],
      date: "06.05.23"
    },
    {
      teams: ["HFC", "FCI"],
      goals: [null, null],
      date: "06.05.23"
    },
    {
      teams: ["ZWI", "WMA"],
      goals: [null, null],
      date: "06.05.23"
    },
    {
      teams: ["SVM", "RWE"],
      goals: [null, null],
      date: "06.05.23"
    },
    {
      teams: ["VKÖ", "BVB2"],
      goals: [null, null],
      date: "06.05.23"
    },
    {
      teams: ["OLD", "FCS"],
      goals: [null, null],
      date: "06.05.23"
    },
    {
      teams: ["MÜN", "SCF2"],
      goals: [null, null],
      date: "06.05.23"
    },
    {
      teams: ["SVE", "BAY"],
      goals: [null, null],
      date: "06.05.23"
    }
  ],
  36: [
    {
      teams: ["WMA", "OLD"],
      goals: [null, null],
      date: "13.05.23"
    },
    {
      teams: ["FCI", "DUI"],
      goals: [null, null],
      date: "13.05.23"
    },
    {
      teams: ["RWE", "MÜN"],
      goals: [null, null],
      date: "13.05.23"
    },
    {
      teams: ["SCF2", "SVE"],
      goals: [null, null],
      date: "13.05.23"
    },
    {
      teams: ["AUE", "BVB2"],
      goals: [null, null],
      date: "13.05.23"
    },
    {
      teams: ["BAY", "VKÖ"],
      goals: [null, null],
      date: "13.05.23"
    },
    {
      teams: ["OSN", "SVM"],
      goals: [null, null],
      date: "13.05.23"
    },
    {
      teams: ["FCS", "HFC"],
      goals: [null, null],
      date: "13.05.23"
    },
    {
      teams: ["ZWI", "DRE"],
      goals: [null, null],
      date: "13.05.23"
    },
    {
      teams: ["WIE", "SCV"],
      goals: [null, null],
      date: "13.05.23"
    }
  ],
  37: [
    {
      teams: ["SVE", "WIE"],
      goals: [null, null],
      date: "20.05.23"
    },
    {
      teams: ["VKÖ", "OSN"],
      goals: [null, null],
      date: "20.05.23"
    },
    {
      teams: ["AUE", "FCI"],
      goals: [null, null],
      date: "20.05.23"
    },
    {
      teams: ["MÜN", "WMA"],
      goals: [null, null],
      date: "20.05.23"
    },
    {
      teams: ["HFC", "RWE"],
      goals: [null, null],
      date: "20.05.23"
    },
    {
      teams: ["SVM", "DRE"],
      goals: [null, null],
      date: "20.05.23"
    },
    {
      teams: ["OLD", "ZWI"],
      goals: [null, null],
      date: "20.05.23"
    },
    {
      teams: ["DUI", "FCS"],
      goals: [null, null],
      date: "20.05.23"
    },
    {
      teams: ["SCV", "SCF2"],
      goals: [null, null],
      date: "20.05.23"
    },
    {
      teams: ["BVB2", "BAY"],
      goals: [null, null],
      date: "20.05.23"
    }
  ],
  38: [
    {
      teams: ["BAY", "AUE"],
      goals: [null, null],
      date: "27.05.23"
    },
    {
      teams: ["DRE", "OLD"],
      goals: [null, null],
      date: "27.05.23"
    },
    {
      teams: ["WMA", "DUI"],
      goals: [null, null],
      date: "27.05.23"
    },
    {
      teams: ["ZWI", "MÜN"],
      goals: [null, null],
      date: "27.05.23"
    },
    {
      teams: ["FCI", "SVE"],
      goals: [null, null],
      date: "27.05.23"
    },
    {
      teams: ["OSN", "BVB2"],
      goals: [null, null],
      date: "27.05.23"
    },
    {
      teams: ["FCS", "VKÖ"],
      goals: [null, null],
      date: "27.05.23"
    },
    {
      teams: ["SCF2", "SVM"],
      goals: [null, null],
      date: "27.05.23"
    },
    {
      teams: ["WIE", "HFC"],
      goals: [null, null],
      date: "27.05.23"
    },
    {
      teams: ["RWE", "SCV"],
      goals: [null, null],
      date: "27.05.23"
    }
  ]
};

const table = makeTable(matches);

const data = {
  matches: matches,
  table: table
};

module.exports = data;
