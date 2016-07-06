export const CSSpec = {
    "metadata": {
        "name": "stanford_cs"
    },
    "navSpecs": [
        {
            "name": "CS106A",
            "transitions": [
                {
                    "action": "prereq",
                    "to": "CS103"
                },
                {
                    "action": "prereq",
                    "to": "CS106B"
                }
            ],
        },
        {
            "name": "CS103",
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
            "transitions": [
                {
                    "action": "prereq",
                    "to": "CS161"
                }
            ]
        },
        {
            "name": "CS106B",
            "transitions": [
                {
                    "action": "prereq",
                    "to": "CS107"
                }
            ]
        },
        {
            "name": "CS107",
            "transitions": [
                {
                    "action": "prereq",
                    "to": "CS110"
                }
            ]
        },
        {
            "name": "CS110",
            "transitions": [

            ]
        }
    ]
}
