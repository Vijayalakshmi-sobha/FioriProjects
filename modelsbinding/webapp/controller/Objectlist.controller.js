sap.ui.define([
    "sap/ui/core/mvc/Controller",
        "sap/ui/model/Filter",
    "sap/ui/model/FilterOperator"
], (Controller,Filter, FilterOperator) => {
    "use strict";

    return Controller.extend("com.applexus.modelsbinding.controller.Objectlist", {
    
        onInit() {

            },

            //Methods For Objectlist.view.xml

        onDelete:function(oEvent){
                var oselect=oEvent.getParameter("listItem");
                var olist = this.getView().byId("lid1");
                olist.removeItem(oselect)

        },
        onLive:function(sEvent){
            // get the search string
            var sSearch = sEvent.getParameter("newValue");

            // create a filter for the name property
            var oFilter = new Filter("name", FilterOperator.Contains, sSearch);

            // get the list and its binding
            var oList = this.getView().byId("lid1");
            var oBnd = oList.getBinding("items");

            // apply the filter
            oBnd.filter([oFilter]);
        },

            //Methods For Objectlist2.view.xml
        
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
                var oSel = oEvent.getParameters("listItems");
                console.log(oSel);

        },
        onPress:function(oEvent){
            
        var oList = this.getView().byId("lid2");
        var aSelitem = oList.getSelectedItems();
        // aSelitem.forEach(function(oItem){
        // oList.removeItem(oItem); 
        //   });
        for (let i = 0; i < aSelitem.length; i++) {
                oList.removeItem(aSelitem[i]);
        }
},

onNext:function(){
    var oRouter =  this.getOwnerComponent().getRouter();
    oRouter.navTo("Fruitroute");
}


    });
});