module.exports = {
  routes: [
    {
      method: "GET",
      path: "/orders/pretransaction",
      handler: "custom.exampleAction", // or 'plugin::plugin-name.controllerName.functionName' for a plugin-specific controller
    },
  ],
};
