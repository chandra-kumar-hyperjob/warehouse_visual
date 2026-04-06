frappe.pages["warehouse-view"].on_page_load = function (wrapper) {
  const page = frappe.ui.make_app_page({
    parent: wrapper,
    title: "Warehouse View",
    single_column: true,
  });

  $(page.body).html(`
    <div style="padding: 12px;">
      <div style="margin-bottom: 10px;">MyWarehouseVisualizer iframe test</div>
      <iframe
        id="wv-frame"
        src="/assets/warehouse_visual/warehouse_visualizer/index.html?v=1"
        style="width: 100%; height: 800px; border: 1px solid #ddd; border-radius: 8px;"
      ></iframe>
    </div>
  `);

  const iframe = $(page.body).find("#wv-frame")[0];
  if (!iframe) {
    console.error("wv-frame not found");
    return;
  }

  frappe.call({
    method: "warehouse_visual.api.get_layout_data",
    callback: function (r) {
      const data = r.message || {};
      console.log("ERPNext layout data", data);

      let injected = false;
      let tries = 0;
      const maxTries = 20;

      const tryInject = function () {
        if (injected) return;
        tries++;

        if (!iframe.contentWindow) {
          if (tries < maxTries) setTimeout(tryInject, 500);
          return;
        }

        iframe.contentWindow.WV_BOOT_DATA = data;

        if (typeof iframe.contentWindow.startFromInjectedData === "function") {
          injected = true;
          iframe.contentWindow.startFromInjectedData();
          return;
        }

        if (tries < maxTries) setTimeout(tryInject, 500);
      };

      tryInject();
    }
  });
};