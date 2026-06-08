sap.ui.define([
    "sap/ui/core/mvc/Controller"
], (Controller)=> {
    "use strict";
 
    return Controller.extend("com.applexus.routing.controller.Fruitinfo", {
        onInit() {
 
            this.oRouter = this.getOwnerComponent().getRouter();
            this.oRouter.getRoute("RouteInfo").attachPatternMatched(this.onDetails,this);
 
 
   },
        onDetails:function(oevt){
                        var fruitId = oevt.getParameter("arguments").fruitId;
                        var spath ="/fruit/"+fruitId;
                        this.getView().bindElement(spath);
                    }
    });
});