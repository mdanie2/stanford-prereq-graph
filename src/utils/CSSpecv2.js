export const CSSpec = {
    "metadata": {
        "name": "stanford_cs"
    },
    "navSpecs": [
        {
            "name": "starter",
            "id": "invisible",
            "transitions": [
                {
                    "action": "connector",
                    "to": "CS181W"
                },
                {
                    "action": "connector",
                    "to": "CS106A"
                }
            ]
        },
        {
            "name": "CS181W",
            "id": "",
            "transitions": []
        },
        {
            "name": "CS106A",
            "id": "starter",
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
            "id": "",
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
                    "action": "OR",
                    "to": "CS106X"
                }
            ]
        },
        {
            "name": "CS106X",
            "id": "",
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
                    "action": "OR",
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
            "id": "",
            "transitions": [
                {
                    "action": "prereq",
                    "to": "CS110"
                },
                {
                    "action": "OR",
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
            "id": "",
            "transitions": [
                {
                    "action": "prereq",
                    "to": "CS110"
                },
                {
                    "action": "OR",
                    "to": "CS107"
                }
            ]
        }
    ]
}
