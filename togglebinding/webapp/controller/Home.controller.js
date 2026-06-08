sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "../model/models",
    "sap/m/MessageToast"
], (Controller,models,MessageToast) => {
    "use strict";

    return Controller.extend("com.applexus.togglebinding.controller.Home", {
        onInit() {
            // this.count = 1
        },
        //  onPress:function(){
                
        //             this.count++;
        //             if(this.count%2 == 0)
        //             {
        //               this.oJson1 = models.createJSONModel("../model/SampleData/data1.json");
        //               this.getView().setModel(this.oJson1);
        //               this.getView().byId('i1').bindValue("/empStr/empId");
        //               this.getView().byId('i2').bindValue("/empStr/empName");
        //             }
        //             else
        //             {
        //               this.oJson2 = models.createJSONModel("../model/SampleData/data2.json");
        //               this.getView().setModel(this.oJson2);
        //               this.getView().byId('i1').bindValue("/empStr/empId");
        //               this.getView().byId('i2').bindValue("/empStr/empName");
        //            }
        //         }

    //   onPress: function(){

    //         this.bool = this.getView().byId('t1').getProperty('pressed');
    //         if(this.bool === true )
    //         {
    //             this.oJson1 = models.createJSONModel("../model/SampleData/data1.json");
    //         }
    //         else{
    //             this.oJson1 = models.createJSONModel("../model/SampleData/data2.json");
    //         }
    //         this.getView().setModel(this.oJson1);
    //         this.getView().byId('i1').bindValue("/empStr/empId");
    //         this.getView().byId('i2').bindValue("/empStr/empName");           
    //   }

        // onPress: function(oEvent){

        //         if(oEvent.getSource().getPressed())
        //         {
        //              this.oJson1 = models.createJSONModel("../model/SampleData/data1.json");
        //         }
        //         else{
        //              this.oJson1 = models.createJSONModel("../model/SampleData/data2.json");
        //         }
        //          this.getView().setModel(this.oJson1);
        //         this.getView().byId('i1').bindValue("/empStr/empId");
        //         this.getView().byId('i2').bindValue("/empStr/empName");  
        // }

        //     onPress: function(oEvent){

        //     oEvent.getSource().getPressed() ? (this.oJson1 = models.createJSONModel("../model/SampleData/data1.json"))
        //                                     : (this.oJson1 = models.createJSONModel("../model/SampleData/data2.json"))
        //     this.getView().setModel(this.oJson1);
        //     this.getView().byId('i1').bindValue("/empStr/empId");
        //     this.getView().byId('i2').bindValue("/empStr/empName");  
        // }
        
        onPress: function(oEvent){

            if ( oEvent.getSource().getPressed() ) 
                {  
                    (MessageToast.show("Pressed the Button"));
                    (this.oJson1 = models.createJSONModel("../model/SampleData/data1.json"));
                    
                }
                else
                {
                   (MessageToast.show("Unpressed the Button"));
                   (this.oJson1 = models.createJSONModel("../model/SampleData/data2.json"));
                   
                }
            this.getView().setModel(this.oJson1);
            this.getView().byId('i1').bindValue("/empStr/empId");
            this.getView().byId('i2').bindValue("/empStr/empName");  
        }



    });
});