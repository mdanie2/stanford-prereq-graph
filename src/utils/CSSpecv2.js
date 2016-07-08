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
                },
                {
                    "action": "excellence in 106A",
                    "to": "CS106X"
                }
            ]
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
}/**
 * Created by mdaniel on 7/7/16.
 */
