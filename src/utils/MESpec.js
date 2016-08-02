export const MESpec = {
    "metadata": {
        "name": "stanford_me"
    },
    "navSpecs": [
        {
            "name": "ME101",
            "id": "starter",
            "description": "This is a test description and should be treated as such.",
            "transitions": [
                {
                    "action": "coreq",
                    "to": "ME102"
                }
            ]
        },
        {
            "name": "ME102",
            "id": "starter",
            "description": "This is a test description and should be treated as such.",
            "transitions": [
                {
                    "action": "coreq",
                    "to": "ME101"
                }
            ]
        }
    ]
}
