export const CSSpec = {
    "metadata": {
        "name": "stanford_cs"
    },
    "navSpecs": [
        {
            "name": "connectingNode",
            "id": "invisible",
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
                }
            ]
        },
        {
            "name": "CS181W",
            "id": "",
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
                }
            ]
        },
        {
            "name": "CS103",
            "id": "",
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
            "transitions": []
        },
        {
            "name": "CS107E",
            "id": "or",
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
