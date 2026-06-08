sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "../model/models"
], (Controller,models) => {
    "use strict";

    return Controller.extend("com.applexus.modelbinding.controller.Home", {
        
        onInit() {   
             var oData = new sap.ui.model.json.JSONModel();
             oData.setData({
                    "empStr": {
                        "empId": "E001",
                        "empName": "Done Abraham"
                    }
                });
             this.getView().setModel(oData,"mod_data");

             this.oJson = models.createJSONModel();
             this.getView().setModel(this.oJson);
             //or
            // var oJson = models.createJSONModel();
            // this.getView().setModel(oJson)

         },
         onPress:function(){
            this.getView().byId('i3').bindValue('/empStr/empSal');
            //this.getView().byId('i4').bindValue('/empStr/Currency')
            // OR
            this.getView().byId('i4').bindProperty('value', '/empStr/Currency')
         }
    });
});