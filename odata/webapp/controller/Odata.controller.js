sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageBox"
], (Controller,MessageBox)=> {
    "use strict";
    return Controller.extend("com.applexus.odata.controller.Odata", {
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
            onClear(){
          
            var oModel = this.getView().getModel("oJson");

            var vMat = oModel.getProperty("/mat");
            vMat.MaterialNumber = "";
            vMat.MaterialDesc= "";
            vMat.CreatedOn = "";

            oModel.setProperty("/mat",vMat);
        },

    onUpdate: function () {
    
            debugger;

        // Create OData Model with PUT as default update method

        var oModel = new sap.ui.model.odata.v2.ODataModel(
            "/sap/opu/odata/sap/ZB18_11_ODATA_SRV",
             {
                defaultUpdateMethod: sap.ui.model.odata.UpdateMethod.Put
            }
        );

        // Get data from JSON model

        var oJson = this.getView().getModel('oJson'); 
        var oData = oJson.getProperty("/mat");
        var sText = oData.MaterialNumber;
        var aParts = oData.CreatedOn.split('-');
        // Convert yyyy-mm-dd string using split parts
        var oDate = new Date(
            parseInt(aParts[0], 10), // year
            parseInt(aParts[1], 10) - 1, // month (JS months are 0-based)
            parseInt(aParts[2], 10), // day
            12, 0, 0, 0 // time set to noon
        );
        //convert this javascript date to json format
        var matDate = "\/Date(" + oDate.getTime() + ")\/";
        // Prepare payload
        var oPayload = {
            MaterialNumber: oData.MaterialNumber,
            MaterialDesc: oData.MaterialDesc,
            CreatedOn: matDate
        };

        // Update call
        oModel.update("/MaterialSet('" + sText + "')", oPayload, {
            success: function (oResponse) {

            sap.m.MessageToast.show("Update Successful");
        },
        error: function (oError) {
            
            sap.m.MessageToast.show("Update failed");
          
            }
        });
    },
    onSave:function(){

        var oJson = this.getView().getModel('oJson');
        var oData = oJson.getProperty("/mat")
        var oModel = new sap.ui.model.odata.v2.ODataModel(
            "/sap/opu/odata/sap/ZB18_11_ODATA_SRV");

        var aParts = oData.CreatedOn.split('-');    
         // Convert yyyy-mm-dd string using split parts
        var oDate = new Date(
            parseInt(aParts[0], 10), // year
            parseInt(aParts[1], 10) - 1, // month (JS months are 0-based)
            parseInt(aParts[2], 10), // day
            12, 0, 0, 0 // time set to noon
        );
        //convert this javascript date to json format
        var matDate = "\/Date(" + oDate.getTime() + ")\/";
        // Prepare payload
        var oPayload = {
            MaterialNumber: oData.MaterialNumber,
            MaterialDesc: oData.MaterialDesc,
            CreatedOn: matDate
        };
    
        oModel.create("/MaterialSet" , oPayload, {
            success: function (oResponse) {

            sap.m.MessageToast.show("Created Successful");
        },
        error: function (oError) {
            
            sap.m.MessageToast.show("Creation failed");
          
            }
        });
        

    },
onDelete: function () {

    var oModel = this.getView().getModel();

    // Get data from JSON model
    var oJson = this.getView().getModel('oJson'); 
    var oData = oJson.getProperty("/mat");
    var sText = oData.MaterialNumber;

    var that = this;

    MessageBox.confirm("Are you sure you want to delete this material?", {
        title: "Confirm Delete",
        actions: [sap.m.MessageBox.Action.YES, sap.m.MessageBox.Action.NO],
        onClose: function (oAction) {

            if (oAction === sap.m.MessageBox.Action.YES) {

                oModel.remove("/MaterialSet('" + sText + "')", {
                    success: function () {
                        sap.m.MessageToast.show("Delete Successful");
                    },
                    error: function () {
                        sap.m.MessageToast.show("Delete Failed");
                    }
                });

            }

        }
    });

}
            

});
});