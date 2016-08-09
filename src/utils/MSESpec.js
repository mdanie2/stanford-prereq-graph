export const MSESpec = {
    "metadata": {
        "name": "stanford_ms&e"
    },
    "navSpecs": [
        {
            "name": "connectingNode",
            "url": "",
            "id": "invisible",
            "description": "This is a test description and should be treated as such.",
            "transitions": []
        },
        //Math and their Prerequisites
        {
            "name": "MATH41",
            "id": "starter",
            "description": "This is a test description and should be treated as such.",
            "transitions": [
                {
                    "action": "prereq",
                    "to": "MATH42"
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
                    "to": "MATH51"
                },
                {
                    "action": "prereq",
                    "to": "CME100"
                }
            ]
        },
        {
            "name": "CME100",
            "id": "or",
            "description": "This is a test description and should be treated as such.",
            "transitions": [
                {
                    "action": "or",
                    "to": "MATH51"
                },
                {
                    "action": "prereq",
                    "to": "CME103"
                },
                {
                    "action": "prereq",
                    "to": "MS&E120"
                }
            ]
        },
        {
            "name": "MATH51",
            "id": "or",
            "description": "This is a test description and should be treated as such.",
            "transitions": [
                {
                    "action": "or",
                    "to": "CME100"
                },
                {
                    "action": "prereq",
                    "to": "CME103"
                },
                {
                    "action": "prereq",
                    "to": "MS&E120"
                }
            ]
        },
        {
            "name": "MS&E120",
            "id": "",
            "description": "This is a test description and should be treated as such.",
            "transitions": [
                {
                    "action": "prereq",
                    "to": "MS&E121"
                },
                {
                    "action": "prereq",
                    "to": "MS&E125"
                }
            ]
        },
        {
            "name": "MS&E125",
            "id": "",
            "description": "This is a test description and should be treated as such.",
            "transitions": [
                {
                    "action": "prereq",
                    "to": "MS&E121"
                }
            ]
        },
        //Technology in Society and their Prerequisites
        {
            "name": "CS106B",
            "id": "optional",
            "description": "This is a test description and should be treated as such.",
            "transitions": [
                {
                    "action": "prereq",
                    "to": "CS181"
                }
            ]
        },
        {
            "name": "TiS",
            "id": "or",
            "description": "This is a test description and should be treated as such.",
            "transitions": [
                {
                    "action": "or",
                    "to": "COMM120W"
                },
                {
                    "action": "or",
                    "to": "CS181"
                },
                {
                    "action": "or",
                    "to": "ENGR131"
                },
                {
                    "action": "or",
                    "to": "MS&E193"
                },
                {
                    "action": "or",
                    "to": "STS1"
                }
            ]
        },
        {
            "name": "COMM120W",
            "id": "or",
            "description": "This is a test description and should be treated as such.",
            "transitions": []
        },
        {
            "name": "CS181",
            "id": "or",
            "description": "This is a test description and should be treated as such.",
            "transitions": []
        },
        {
            "name": "ENGR131",
            "id": "or",
            "description": "This is a test description and should be treated as such.",
            "transitions": []
        },
        {
            "name": "MS&E193",
            "id": "or",
            "description": "This is a test description and should be treated as such.",
            "transitions": []
        },
        {
            "name": "STS1",
            "id": "or",
            "description": "This is a test description and should be treated as such.",
            "transitions": []
        },
        //Engineering Fundamentals
        {
            "name": "CS106A",
            "id": "starter",
            "description": "This is a test description and should be treated as such.",
            "transitions": [
                {
                    "action": "prereq",
                    "to": "CS106B"
                },
                {
                    "action": "prereq",
                    "to": "MS&E125"
                }
            ]
        }
    ]
}
