frappe.pages["warehouse-view"].on_page_load = function (wrapper) {
  const page = frappe.ui.make_app_page({
    parent: wrapper,
    title: "Warehouse View",
    single_column: true,
  });

  $(page.body).html(`
    <div style="padding: 12px;">
      <div style="margin-bottom: 12px; font-size: 14px;">
        MyWarehouseVisualizer embed test
      </div>
      <iframe
        src="/assets/warehouse_visual/warehouse_visualizer/index.html"
        style="width: 100%; height: 800px; border: 1px solid #ddd; border-radius: 8px;"
      ></iframe>
    </div>
  `);
};