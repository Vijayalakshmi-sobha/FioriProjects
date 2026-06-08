sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "../model/models",
    "../Utilis/formatter"
], (Controller,models,formatter) => {
    "use strict";

    return Controller.extend("com.applexus.modelsbinding.controller.Table", {
        myFormatter : formatter,
        onInit() {

            this.oModel = models.createJSONModel("../model/SampleData/data3.json");
            this.getView().setModel(this.oModel)
        },
        rowSelectionChange:function(oevt){
            var orowContext = oevt.getParameter("rowContext");
            var spath = orowContext.getPath();
            var osimp = this.getView().byId('sf');
            osimp.bindElement(spath)
           
        }
        // formatter:function(inp){
        //     if(inp){
        //         return inp.toUpperCase();
        //     }
        // }

    });
});