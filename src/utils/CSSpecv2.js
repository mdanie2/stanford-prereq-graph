export const CSSpec = {
    "metadata": {
        "name": "stanford_cs"
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
                    "to": "WIM",
                    "toType": ""
                },
                {
                    "action": "connector",
                    "to": "CS106A",
                    "toType": "starter"
                },
                {
                    "action": "connector",
                    "to": "MATH19",
                    "toType": "starter"
                }
            ]
        },
        {
            "name": "MATH19",
            "id": "starter",
            "description": "This is a test description and should be treated as such.",
            "transitions": [
                {
                    "action": "prereq",
                    "to": "MATH20"
                }
              ]
        },
        {
            "name": "MATH20",
            "id": "",
            "description": "This is a test description and should be treated as such.",
            "transitions": [
                {
                    "action": "prereq",
                    "to": "MATH21"
                }
            ]
        },
        {
            "name": "MATH21",
            "id": "coreq",
            "description": "This is a test description and should be treated as such.",
            "transitions": [
                {
                    "action": "coreq",
                    "to": "PHYSICS41"
                }
            ]
        },
        {
            "name": "ENGR40A",
            //TODO: create coreqor
            "id": "or",
            "description": "This is a test description and should be treated as such.",
            "transitions": [
              {
                  "action": "or",
                  "to": "ENGR40M"
              },
              {
                  "action": "coreq",
                  "to": "ENGR40B"
              }
            ]
        },
        {
            "name": "ENGR40B",
            "id": "coreq",
            "description": "This is a test description and should be treated as such.",
            "transitions": [
              {
                  "action": "coreq",
                  "to": "ENGR40A"
              }
            ]
        },
        {
            "name": "ENGR40M",
            "id": "or",
            "description": "This is a test description and should be treated as such.",
            "transitions": [
              {
                  "action": "or",
                  "to": "ENGR40A"
              }
            ]
        },
        {
            "name": "PHYSICS41",
            "id": "coreq",
            "description": "This is a test description and should be treated as such.",
            "transitions": [
                {
                    "action": "prereq",
                    "to": "PHYSICS43"
                },
                {
                    "action": "coreq",
                    "to": "MATH21"
                }
            ]
        },
        {
            "name": "PHYSICS43",
            "id": "",
            "description": "This is a test description and should be treated as such.",
            "transitions": []
        },
        {
            "name": "Engineering Elective",
            "id": "",
            "description": "This is a test description and should be treated as such.",
            "transitions": [
                {
                    "action": "connector",
                    "to": "ENGR40B"
                },
                {
                    "action": "connector",
                    "to": "CS106A"
                }
            ]
        },
        {
            "name": "Math Electives",
            "id": "",
            "description": "This is a test description and should be treated as such.",
            "transitions": [
                {
                    "action": "connector",
                    "to": "MATH19"
                },
                {
                    "action": "connector",
                    "to": "MATH20"
                },
                {
                    "action": "connector",
                    "to": "MATH21"
                }
            ]
        },
        {
            "name": "Science Elective",
            "id": "",
            "description": "This is a test description and should be treated as such.",
            "transitions": [
                {
                    "action": "connector",
                    "to": "PHYSICS41"
                },
                {
                    "action": "connector",
                    "to": "PHYSICS43"
                }
            ]
        },
        {
            "name": "Senior Project",
            "id": "",
            "description": "This is a test description and should be treated as such.",
            "transitions": [
                {
                    "action": "connector",
                    "to": "CS110"
                },
                {
                    "action": "connector",
                    "to": "CS107"
                },
                {
                    "action": "connector",
                    "to": "CS107E"
                }
            ]
        },
        {
            "name": "TiS",
            "id": "",
            "description": "This is a test description and should be treated as such.",
            "transitions": [
                {
                    "action": "connector",
                    "to": "CS103"
                },
                {
                    "action": "connector",
                    "to": "CS161"
                }
            ]
        },
        {
            "name": "WIM",
            "id": "",
            "description": "This is a test description and should be treated as such.",
            "transitions": [
                {
                    "action": "connector",
                    "to": "CS106A"
                }
            ]
        },
        {
            "name": "CS103",
            "id": "",
            "description": "This is a test description and should be treated as such.",
            "transitions": [
                {
                    "action": "prereq",
                    "to": "CS109"
                },
                {
                    "action": "prereq",
                    "to": "CS161"
                }
            ],
        },
        {
            "name": "CS106A",
            "id": "starter",
            "description": "This is a test description and should be treated as such.",
            "transitions": [
                {
                    "action": "prereq",
                    "to": "CS103"
                },
                {
                    "action": "prereq",
                    "to": "CS106B"
                },
                {
                    "action": "excellence in 106A",
                    "to": "CS106X"
                },
                {
                    "action": "prereq",
                    "to": "ENGR40M"
                }
            ]
        },
        {
            "name": "CS106B",
            "id": "or",
            "description": "This is a test description and should be treated as such.",
            "transitions": [
                {
                    "action": "prereq",
                    "to": "CS107"
                },
                {
                    "action": "prereq",
                    "to": "CS107E"
                },
                {
                    "action": "prereq",
                    "to": "CS109"
                },
                {
                    "action": "or",
                    "to": "CS106X"
                }
            ]
        },
        {
            "name": "CS106X",
            "id": "or",
            "description": "This is a test description and should be treated as such.",
            "transitions": [
                {
                    "action": "prereq",
                    "to": "CS107"
                },
                {
                    "action": "prereq",
                    "to": "CS109"
                },
                {
                    "action": "or",
                    "to": "CS106B"
                },
                {
                    "action": "prereq",
                    "to": "CS107E"
                }
            ]
        },
        {
            "name": "CS107",
            "id": "or",
            "description": "This is a test description and should be treated as such.",
            "transitions": [
                {
                    "action": "prereq",
                    "to": "CS110"
                },
                {
                    "action": "or",
                    "to": "CS107E"
                }
            ]
        },
        {
            "name": "CS107E",
            "id": "or",
            "description": "This is a test description and should be treated as such.",
            "transitions": [
                {
                    "action": "prereq",
                    "to": "CS110"
                },
                {
                    "action": "or",
                    "to": "CS107"
                }
            ]
        },
        {
            "name": "CS109",
            "id": "",
            "description": "This is a test description and should be treated as such.",
            "transitions": [
                {
                    "action": "prereq",
                    "to": "CS161"
                }
            ]
        },
        {
            "name": "CS110",
            "id": "",
            "description": "This is a test description and should be treated as such.",
            "transitions": []
        }
    ]
}
