import frappe


@frappe.whitelist()
def get_layout_data():
    return {
        "layout": [
            {
                "LOCATION": "A01-L1-S01",
                "WIDTH": 1,
                "DEPTH": 1,
                "HEIGHT": 1,
                "X": 0,
                "Y": 0,
                "Z": 0,
                "AISLE": "A01",
                "BAY": "B01"
            }
        ],
        "inventory": [
            {
                "LOCATION": "A01-L1-S01",
                "ITEM": "ITEM-001",
                "QUANTITY": 10,
                "ITEM_WGT": 20
            }
        ]
    }