frappe.pages["warehouse-view"].on_page_load = function (wrapper) {
  frappe.ui.make_app_page({
    parent: wrapper,
    title: "Warehouse View",
    single_column: true,
  });

  $(wrapper).find(".layout-main-section").html(`
    <div class="warehouse-visual-root">
      <h3>Warehouse Visual</h3>
      <p>Starter page loaded.</p>
    </div>
  `);
};