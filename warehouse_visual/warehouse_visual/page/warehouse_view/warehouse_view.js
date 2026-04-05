frappe.pages["warehouse-view"].on_page_load = function (wrapper) {
  const page = frappe.ui.make_app_page({
    parent: wrapper,
    title: "Warehouse View",
    single_column: true,
  });

  $(page.body).html(`
    <div style="padding: 12px;">
      <div id="warehouse-visualizer-root" style="width:100%; height:800px;"></div>
    </div>
  `);

  frappe.call({
    method: "warehouse_visual.api.get_layout_data",
    callback: function (r) {
      const data = r.message || {};
      console.log("ERPNext layout data", data);

      // next step:
      // call a wrapper function that feeds data into the visualizer
      // instead of reading CSV files
    }
  });
};