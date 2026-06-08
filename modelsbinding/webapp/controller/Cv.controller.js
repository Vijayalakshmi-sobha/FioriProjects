sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "../model/models"
], (Controller,models) => {
    "use strict";

    return Controller.extend("com.applexus.modelsbinding.controller.Cv", {
        onInit() {
            this.oJson = models.createJSONModel("../model/SampleData/data4.json");
            this.getView().setModel(this.oJson);
        },
         rowSelectionChange:function(oevt){
            var orowContext = oevt.getParameter("rowContext");
            var spath = orowContext.getPath();
            var osimp = this.getView().byId('sf');
            osimp.bindElement(spath)
           
        }


        });
});