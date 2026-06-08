sap.ui.define([
    "sap/ui/core/mvc/Controller"
], (Controller)=> {
    "use strict";
        let oSearch ;
        let oSelectedField ;
    return Controller.extend("com.applexus.routing.controller.Detail", {
        onInit() {


            this.oRouter = this.getOwnerComponent().getRouter();
            this.oRouter.getRoute("RouteInfo").attachPatternMatched(this.onDetails,this);


    },

            onDetails:function(oevt){

                        var fruitId = oevt.getParameter("arguments").fruitId;
                        var spath ="/fruit/"+fruitId;
                        this.getView().bindElement(spath);

                    },
         

        onCity:function(oEvt){
            
            oSelectedField = oEvt.getSource();  //Get Selected Field For Value Help
            oSearch = oEvt.getSource().getId().substr(2,1); //// Get the source from the view  that is Table Input -> 'i'
            this.loadFragment({
                    name: "com.applexus.routing.fragments.popup",
                    controller: this
                }).then(function (oPopup) { //Need to Create Controls Inside the popup ( if we use dialogue control in popup view the comment make sense)
                        
                        // var oList = new sap.m.List();
                        oPopup.setTitle("Select City");
                        oPopup.bindAggregation("items",{
                            path : "/city",
                            template : new sap.m.DisplayListItem({
                                label : "city",
                                value : "{name}"
                             })
                        })
                        // oPopup.addContent(oList);
                        
                        // var oCancelBtn = new sap.m.Button({
                        //                 text: "Cancel",
                        //                 press: () => {
                        //                 oPopup.close();   // close dialog for Dialogue Control In View
                        //             }
                        //     }); 
                        //     oPopup.addButton(oCancelBtn);  

                            oPopup.open(); 
            });
        },
        oConfirm : function(oEvt){
                var oSel = oEvt.getParameter("selectedItem");
                var sValue = oSel.getValue();  
                if(oSearch === 'i')
                {

                // var sTxt = oSel.getLabel();
                   oSelectedField.setValue(sValue);
                }
                else if(oSearch === 'b')

                    var oTable = this.getView().byId("t1");  
                    var oBinding = oTable.getBinding("items");

                    var oFilter = new sap.ui.model.Filter(
                             "name",  
                            sap.ui.model.FilterOperator.EQ,
                            sValue
                    );

                    oBinding.filter([oFilter]); 
                
                },
        onTool:function(oEvt){
            
            oSearch = oEvt.getSource().getId().substr(2,1); // Get the source from the view  that is Filter button -> 'b'
            this.loadFragment({
                    name: "com.applexus.routing.fragments.popup",
                    controller: this
                }).then(function (oPopup) {
                    oPopup.setTitle("Select City");
                        oPopup.bindAggregation("items",{
                            path : "/city",
                            template : new sap.m.DisplayListItem({
                                label : "city",
                                value : "{name}"
                             })
                        })
                        
                            oPopup.open(); 
            });
        }                


                             
});
});
