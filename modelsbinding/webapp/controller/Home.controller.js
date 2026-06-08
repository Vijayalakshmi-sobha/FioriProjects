sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "../model/models"
], (Controller,models) => {
    "use strict";

    return Controller.extend("com.applexus.modelsbinding.controller.Home", {
        onInit() {
            this.oJson = models.createJSONModel('../model/SampleData/data1.json');
            this.getView().setModel(this.oJson);
            this.oJson = models.createJSONModel('../model/SampleData/data2.json');
            this.getView().setModel(this.oJson,"sec");
        },
        onPress:function() {

            this.getView().byId('i3').bindValue("sec>/empStr/empSal");
            this.getView().byId('i4').bindValue("sec>/empStr/Currency");
        },
        onNext:function() {
            var oRoute = this.getOwnerComponent().getRouter();
            oRoute.navTo("RouteObjectlist2");
        },
        onCV:function() {
            var oRoute = this.getOwnerComponent().getRouter();
            oRoute.navTo("RouteCV");
        },
        onTable:function() {
            var oRoute = this.getOwnerComponent().getRouter();
            oRoute.navTo("RouteTable"); 
        }
        
    });
});