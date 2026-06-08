sap.ui.define([
    "sap/ui/core/mvc/Controller"
], (Controller) => {
    "use strict";

    return Controller.extend("com.applexus.modelsbinding.controller.Fruitroute", {
        onInit() {

        },
        onBack:function(oEvent)
        {
            var oRouter = this.getOwnerComponent().getRouter();
            oRouter.navTo("RouteHome");
        }
    });
});