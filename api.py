import frappe


@frappe.whitelist()
def ping():
    return {"status": "ok", "app": "warehouse_visual"}