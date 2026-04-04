frappe.pages["warehouse-view"].on_page_load = function (wrapper) {
  const page = frappe.ui.make_app_page({
    parent: wrapper,
    title: "Warehouse View",
    single_column: true,
  });

  $(page.body).html(`
    <div style="padding: 24px;">
      <h2>Hello World</h2>
      <p>warehouse_visual app loaded successfully vtech.</p>
    </div>
  `);
};