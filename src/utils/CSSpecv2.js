export const CSSpec = {
    "metadata": {
        "name": "stanford_cs"
    },
    "navSpecs": [
        {
            "name": "connectingNode",
            "id": "invisible",
            "description": "",
            "transitions": [
                {
                    "action": "connector",
                    "to": "CS181W",
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
                    "toType": ""
                }
            ]
        },
        {
            "name": "MATH19",
            "id": "starter",
            "description": "",
            "transitions": [
                {
                    "action": "connector",
                    "to": "connectingNode"
                },
                {
                    "action": "prereq",
                    "to": "MATH20"
                }
              ]
        },
        {
            "name": "MATH20",
            "id": "",
            "description": "",
            "transitions": [
                {
                    "action": "prereq",
                    "to": "MATH21"
                }
            ]
        },
        {
            "name": "MATH21",
            "id": "",
            "description": "",
            "transitions": [
                {
                    "action": "prereq",
                    "to": "PHYSICS41"
                }
            ]
        },
        {
            "name": "ENGR40M",
            "id": "",
            "description": "",
            "transitions": []
        },
        {
            "name": "PHYSICS41",
            "id": "",
            "description": "",
            "transitions": [
                {
                    "action": "prereq",
                    "to": "PHYSICS43"
                }
            ]
        },
        {
            "name": "PHYSICS43",
            "id": "",
            "description": "",
            "transitions": []
        },
        {
            "name": "CS181W",
            "id": "",
            "description": "",
            "transitions": [
                {
                    "action": "connector",
                    "to": "connectingNode"
                }
            ]
        },
        {
            "name": "CS106A",
            "id": "starter",
            "description": "This is a test description and should be treated as such.",
            "transitions": [
                {
                    "action": "connector",
                    "to": "connectingNode"
                },
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
            "name": "CS103",
            "id": "",
            "description": "",
            "transitions": [
                {
                    "action": "soft prereq",
                    "to": "CS109"
                },
                {
                    "action": "prereq",
                    "to": "CS161"
                }
            ],
        },
        {
            "name": "CS109",
            "id": "",
            "description": "",
            "transitions": [
                {
                    "action": "prereq",
                    "to": "CS161"
                }
            ]
        },
        {
            "name": "CS106B",
            "id": "or",
            "description": "",
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
            "description": "",
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
            "description": "",
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
            "name": "CS110",
            "id": "",
            "description": "",
            "transitions": []
        },
        {
            "name": "CS107E",
            "id": "or",
            "description": "",
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
        }
    ]
}
