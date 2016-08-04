export const MESpec = {
    "metadata": {
        "name": "stanford_me"
    },
    "navSpecs": [
        {
            "name": "connectingNode",
            "url": "",
            "id": "invisible",
            "description": "This is a test description and should be treated as such.",
            "transitions": [
                {
                    "action": "connector",
                    "to": "ENGR70A",
                    "toType": "starter"
                },
                {
                    "action": "connector",
                    "to": "ME101",
                    "toType": "starter"
                },
                {
                    "action": "connector",
                    "to": "TiS",
                    "toType": ""
                },
            ]
        },
        //TiS
        {
            "name": "TiS",
            "id": "",
            "description": "This is a test description and should be treated as such.",
            "transitions": []
        },
        //Math and Their Prequisites
        {
            "name": "CME100",
            "id": "",
            "description": "This is a test description and should be treated as such.",
            "transitions": [
                {
                    "action": "prereq",
                    "to": "CME102"
                },
                {
                    "action": "prereq",
                    "to": "CME106"
                }
            ]
        },
        {
            "name": "CME102",
            "id": "or",
            "description": "This is a test description and should be treated as such.",
            "transitions": [
                {
                    "action": "or",
                    "to": "MATH53"
                }
            ]
        },
        {
            "name": "MATH42",
            "id": "",
            "description": "This is a test description and should be treated as such.",
            "transitions": [
                {
                    "action": "prereq",
                    "to": "CME100"
                },
                {
                    "action": "prereq",
                    "to": "MATH51"
                },
                {
                    "action": "prereq",
                    "to": "STATS110"
                }
            ]
        },
        {
            "name": "MATH51",
            "id": "",
            "description": "This is a test description and should be treated as such.",
            "transitions": [
                {
                    "action": "prereq",
                    "to": "MATH53"
                },
                {
                    "action": "prereq",
                    "to": "MATH52"
                }
            ]
        },
        {
            "name": "MATH52",
            "id": "",
            "description": "This is a test description and should be treated as such.",
            "transitions": [
                {
                    "action": "prereq",
                    "to": "STATS116"
                }
            ]
        },
        {
            "name": "MATH53",
            "id": "or",
            "description": "This is a test description and should be treated as such.",
            "transitions": [
                {
                    "action": "or",
                    "to": "CME102"
                }
            ]
        },
        {
            "name": "CME106",
            "id": "or",
            "description": "This is a test description and should be treated as such.",
            "transitions": [
                {
                    "action": "or",
                    "to": "STATS110"
                },
                {
                    "action": "or",
                    "to": "STATS116"
                }
            ]
        },
        {
            "name": "STATS110",
            "id": "or",
            "description": "This is a test description and should be treated as such.",
            "transitions": [
                {
                    "action": "or",
                    "to": "CME106"
                },
                {
                    "action": "or",
                    "to": "STATS116"
                }
            ]
        },
        {
            "name": "STATS116",
            "id": "or",
            "description": "This is a test description and should be treated as such.",
            "transitions": [
                {
                    "action": "or",
                    "to": "CME106"
                },
                {
                    "action": "or",
                    "to": "STATS110"
                }
            ]
        },
        {
            "name": "Addtl. Math Courses",
            "id": "",
            "description": "This is a test description and should be treated as such.",
            "transitions": [
                {
                    "action": "connector",
                    "to": "CME102"
                },
                {
                    "action": "connector",
                    "to": "MATH53"
                }
            ]
        },
        //Science and Their Prerequisites
        {
            "name": "MATH41",
            "id": "",
            "description": "This is a test description and should be treated as such.",
            "transitions": [
                {
                    "action": "prereq",
                    "to": "CHEM31X"
                },
                //prereqfor math
                {
                    "action": "prereq",
                    "to": "MATH42"
                }
            ]
        },
        {
            "name": "CHEM31X",
            "id": "",
            "description": "This is a test description and should be treated as such.",
            "transitions": []
        },
        {
            "name": "Addtl. Science Courses",
            "id": "",
            "description": "This is a test description and should be treated as such.",
            "transitions": [
                {
                    "action": "connector",
                    "to": "CHEM31X"
                }
            ]
        },
        //Engineering Fundamentals
        {
            "name": "ENGR40A",
            "id": "",
            "description": "This is a test description and should be treated as such.",
            "transitions": [
                {
                    "action": "coreq",
                    "to": "ENGR40B"
                }
            ]
        },
        {
            "name": "ENGR40B",
            "id": "",
            "description": "This is a test description and should be treated as such.",
            "transitions": [
                {
                    "action": "coreq",
                    "to": "ENGR40A"
                }
            ]
        },
        {
            //needs some connector to or from it
            "name": "ENGR70A",
            "id": "starter",
            "description": "This is a test description and should be treated as such.",
            "transitions": []
        },
        //Engineering Depth
        {
            "name": "ENGR14",
            "id": "",
            "description": "This is a test description and should be treated as such.",
            "transitions": [
                {
                    "action": "prereq",
                    "to": "ENGR15"
                },
                {
                    "action": "prereq",
                    "to": "ME70"
                },
                {
                    "action": "prereq",
                    "to": "ME80"
                }
            ]
        },
        {
            "name": "ENGR15",
            "id": "",
            "description": "This is a test description and should be treated as such.",
            "transitions": [
                {
                    "action": "prereq",
                    "to": "ME112"
                }
            ]
        },
        {
            "name": "ENGR30",
            "id": "",
            "description": "This is a test description and should be treated as such.",
            "transitions": [
                {
                    "action": "prereq",
                    "to": "ME70"
                },
                {
                    "action": "prereq",
                    "to": "ME131A"
                },
                {
                    "action": "prereq",
                    "to": "ME131B"
                },
                {
                    "action": "prereq",
                    "to": "ME140"
                }
            ]
        },
        {
            "name": "ME70",
            "id": "",
            "description": "This is a test description and should be treated as such.",
            "transitions": [
                {
                    "action": "prereq",
                    "to": "ME131A"
                },
                {
                    "action": "prereq",
                    "to": "ME131B"
                },
                {
                    "action": "prereq",
                    "to": "ME140"
                }
            ]
        },
        {
            "name": "ME80",
            "id": "",
            "description": "This is a test description and should be treated as such.",
            "transitions": [
                {
                    "action": "prereq",
                    "to": "ME112"
                },
                {
                    "action": "prereq",
                    "to": "ME113"
                }
            ]
        },
        {
            "name": "ME101",
            "id": "starter",
            "description": "This is a test description and should be treated as such.",
            "transitions": [
                {
                    "action": "prereq",
                    "to": "ME203"
                }
            ]
        },
        {
            "name": "ME103D",
            "id": "",
            "description": "This is a test description and should be treated as such.",
            "transitions": [
                {
                    "action": "coreq",
                    "to": "ME203"
                }
            ]
        },
        {
            "name": "ME112",
            "id": "",
            "description": "This is a test description and should be treated as such.",
            "transitions": [
                {
                    "action": "prereq",
                    "to": "ME113"
                }
            ]
        },
        {
            "name": "ME113",
            "id": "or",
            "description": "This is a test description and should be treated as such.",
            "transitions": [
                {
                    "action": "or",
                    "to": "ME114"
                }
            ]
        },
        {
            "name": "ME114",
            "id": "or",
            "description": "This is a test description and should be treated as such.",
            "transitions": [
                {
                    "action": "or",
                    "to": "ME113"
                }
            ]
        },
        {
            "name": "ME131A",
            "id": "",
            "description": "This is a test description and should be treated as such.",
            "transitions": [
                {
                    "action": "prereq",
                    "to": "ME140"
                }
            ]
        },
        {
            "name": "ME131B",
            "id": "",
            "description": "This is a test description and should be treated as such.",
            "transitions": [
                {
                    "action": "prereq",
                    "to": "ME140"
                }
            ]
        },
        {
            "name": "ME140",
            "id": "or",
            "description": "This is a test description and should be treated as such.",
            "transitions": [
                {
                    "action": "or",
                    "to": "ME141"
                }
            ]
        },
        {
            "name": "ME141",
            "id": "or",
            "description": "This is a test description and should be treated as such.",
            "transitions": [
                {
                    "action": "or",
                    "to": "ME140"
                }
            ]
        },
        {
            "name": "ME161",
            "id": "or",
            "description": "This is a test description and should be treated as such.",
            "transitions": []
        },
        {
            "name": "ME203",
            "id": "",
            "description": "This is a test description and should be treated as such.",
            "transitions": [
                {
                    "action": "coreq",
                    "to": "ME103D"
                }
            ]
        }
    ]
}
