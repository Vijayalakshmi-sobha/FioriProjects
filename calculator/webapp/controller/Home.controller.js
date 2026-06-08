sap.ui.define([
    "sap/ui/core/mvc/Controller"
], (Controller) => {
    "use strict";

    return Controller.extend("com.applexus.calculator.controller.Home", {
        onInit() {
        },

        // onPress : function(oevent)
        // {

        //     var choice = oevent.getSource().getText();
        //     var result;
        //     let num1 = parseFloat(this.byId("i1").getValue());
        //     let num2 = parseFloat(this.byId("i2").getValue());
        //     switch (choice) {
        //         case '+':
        //             result = num1 + num2
        //             break;
        //         case '-':
        //             result = num1 - num2
        //             break;                
        //         case '/':
        //             result = num1 / num2
        //             break;
        //         case '*':
        //              result = num1 * num2
        //             break;
                
        //     }
        //     this.byId('i3').SetValue(result)

        // }

         onPress: function(oEvent) {
            // Get the button text (+, -, *, /)
            var choice = oEvent.getSource().getText();

            // Get input numbers
            let num1 = parseFloat(this.byId("i1").getValue());
            let num2 = parseFloat(this.byId("i2").getValue());

            let result;

            switch (choice) {
                case '+':
                    result = num1 + num2;
                    break;
                case '-':
                    result = num1 - num2;
                    break;
                case '*':
                    result = num1 * num2;
                    break;
                case '/':
                    result = num1 / num2;
                    break;
            }

            // Set result in output Input
            this.byId('i3').setValue(result);
        }

    });
});