sap.ui.define([
    "sap/ui/core/mvc/Controller"
], (Controller)=> {
    "use strict";
    return Controller.extend("com.applexus.odata.controller.Deep", {
        onInit() {


        }
        ,
        onGet:function (oevt){
           
            var oRoute = this.getOwnerComponent().getRouter();
            oRoute.navTo("RouteGetdeep");
        }


});
});
