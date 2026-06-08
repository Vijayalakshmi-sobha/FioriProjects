sap.ui.define([
    "sap/ui/model/json/JSONModel",
     "sap/ui/core/format/NumberFormat"
], 
function (JSONModel,NumberFormat) {
    "use strict";
    return {

        formatter:function(inp){
            if(inp){
                return inp.toUpperCase();
            }
        },
        currencyformatter:function(amnt,curr){
            var oCurrencyFormat = NumberFormat.getCurrencyInstance();
            return oCurrencyFormat.format(amnt,curr);
        },

        // dateformatter:function(date){
        //     debugger
        //     var oDateFormat = sap.ui.core.format.DateFormat.getDateInstance({format: "yMMMd"});
        //     return oDateFormat.format(date);
        // }

        // dateformatter:function(date){
           
        //     var oDateFormat = sap.ui.core.format.DateFormat.getDateInstance({
        //          format: "yMMMd"
        //     });
        //     // return oDateFormat.format(date);
        //     var oDate = oDateFormat.parse(date);
        //     debugger
        //     console.log(oDate);
        //     return oDate;
        //     }

        // }

        dateformatter: function(date) {

            var oDateFormat = sap.ui.core.format.DateFormat.getDateInstance({
                   pattern: "MM-dd-yyyy"
            });
 
            return oDateFormat.format(oDateFormat.parse(date));
            }

   


    }

});