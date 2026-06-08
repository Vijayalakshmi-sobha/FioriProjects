sap.ui.define([
    "sap/ui/core/mvc/Controller",
        "sap/ui/model/Filter",
    "sap/ui/model/FilterOperator"
], (Controller,Filter, FilterOperator)=> {
    "use strict";

    return Controller.extend("com.applexus.routing.controller.Home", {
        onInit() {


        },
        onChange:function(oEvent){
            
            var oSearch = oEvent.getParameter("newValue");                                       //Getting user searched values

            //Create filters for the properties we want

            var filter1 = new Filter("name",FilterOperator.Contains,oSearch);                    // Filter items where the 'name' field contains the entered search value
                                                           
            var filter2 = new Filter("taste",FilterOperator.Contains,oSearch);                   // Filter items where the 'taste' field contains the entered search value

            var sfilter=[];
                                                  
            sfilter.push(filter1);                                                               // Combine filters when we push this to array default is And Condition (So need to change OR condition)
            sfilter.push(filter2);

            var oMaster = new Filter({
                filters : sfilter,
                and : false                                 // OR condition cause we set and as false
            })

            var oList = this.getView().byId("lid2");        //Get binding
            var oBnd = oList.getBinding("items");           //  Apply filter

            oBnd.filter([oMaster]);

        },

        onSelect:function(oEvent){
            
                var oRoute = this.getOwnerComponent().getRouter();
                var oSel = oEvent.getParameter("listItem");
                var sIndex = oSel.getBindingContextPath().split('/')[2];
                oRoute.navTo("RouteInfo",{fruitId: sIndex})
                
                

        },

        onPress:function(oEvent){
            
        var oList = this.getView().byId("lid2");
        var aSelitem = oList.getSelectedItems();
        for (let i = 0; i < aSelitem.length; i++) {
                oList.removeItem(aSelitem[i]);
             }
        }
    });
});