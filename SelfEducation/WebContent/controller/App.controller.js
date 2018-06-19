sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageToast",
	"sap/ui/model/json/JSONModel",
	"sap/ui/model/resource/ResourceModel"
], function (Controller, MessageToast, JSONModel, ResourceModel) {
   "use strict";
   return Controller.extend("selfed.example.controller.App", {
	/* Move to component.js
	    onInit : function () {
	         // set data model on view
	         var oData = {
	            recipient : {
	               name : "World"
	            }
	         };
	         var oModel = new JSONModel(oData);
	         this.getView().setModel(oModel);
	      // set i18n model on view
	         var i18nModel = new ResourceModel({
	            bundleName: "sap.ui.demo.wt.i18n.i18n"
	         });
	         this.getView().setModel(i18nModel, "i18n");	         
	      },
*/ 
      onShowHello : function () {
    	  
         // show a native JavaScript alert
         alert("Hello World from controller![5]");
         MessageToast.show("Hello World from toast[6]");
         // read msg from i18n model
         var oBundle = this.getView().getModel("i18n").getResourceBundle();
         var sRecipient = this.getView().getModel().getProperty("/recipient/name");
         var sMsg = oBundle.getText("helloMsg", [sRecipient]);
         // show message
         MessageToast.show(sMsg);         
      }
   });
});