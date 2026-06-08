sap.ui.define([
    "sap/ui/core/mvc/Controller"
], (Controller)=> {
    "use strict";
    return Controller.extend("com.applexus.odata.controller.Getdeep", {
        onInit() {
            var oJson = new sap.ui.model.json.JSONModel();
            oJson.setData({
                mat:{
                   MaterialNumber: "122",
                   MaterialDesc: "bottle",
                   CreatedOn: '\/Date(1769472000000)\/'
                }
                });
            this.getView().setModel(oJson,"oJson");
        },
        onClear:function(oevt){
          
            var oModel = this.getView().getModel("oJson");

            var vMat = oModel.getProperty("/mat");
            vMat.MaterialNumber = "";
            vMat.MaterialDesc= "";
            vMat.CreatedOn = "";

            oModel.setProperty("/mat",vMat);
        },
        onChange:function(oevt){
            debugger ;
            var that = this;
            var sTxt = oevt.getSource().getValue();
            var oModel = this.getView().getModel();

             oModel.read("/MaterialSet('" + sTxt + "')", {
                    success:function(data) {
                    alert("Succes");
                    var oJson = that.getView().getModel("oJson");
                    oJson.setProperty("/mat", data);
        },
        error: function (oError) {
           
            alert("OData call failed");
        }
    });
            
        },
    onNext: function () {
        debugger;
        var oRouter = this.getOwnerComponent().getRouter();
        oRouter.navTo("RouteOdata");
}


});
});
