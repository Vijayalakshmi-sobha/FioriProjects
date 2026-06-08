sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "../model/models"
], (Controller,models) => {
    "use strict";

    return Controller.extend("com.applexus.project.controller.Home", {

        onInit() {                                           //Property Binding without Model

            var oModel = new sap.ui.model.json.JSONModel();
            oModel.setData({
                "empStr": {
                    "empId": "100",
                    "empName": "Jose",
                    "empSal": "20000",
                    "Currency": "INR"

                }
            });
            this.getView().setModel(oModel);

        },
        onPress: function()
        {
            //debugger
                var oModel = this.getView().getModel();
                var empId = oModel.getProperty("/empStr/empId");
                console.log("Updated Employee ID:", empId);
            this.getView().byId('i3').bindValue('/empStr/empSal')
            this.getView().byId('l1').bindProperty("text",'/empStr/Currency')
            this.getView().byId('i4').bindProperty("value",'/empStr/Currency')
            this.getView().getModel().setProperty("/empStr/empId");

        }

   


    });
});