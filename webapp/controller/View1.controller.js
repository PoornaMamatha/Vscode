sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"../utils/justgage",
	"../utils//raphael-2.1.4.min"
	
],
	/**
	 * @param {typeof sap.ui.core.mvc.Controller} Controller
	 */
	function (Controller) {
		"use strict";

		return Controller.extend("com.vs.app.demoproject.controller.View1", {
			onInit: function () {

			},
			onAfterRendering: function() {
				//Semi-circle gauges
				this.GaugeDisplay();
			},
	
			//Semi-circle gauges
			GaugeDisplay: function() {
	
				new JustGage({
					id: this.getView().byId("id_Gauge1").sId,
					value: 67,
					min: 0,
					max: 100,
					title: "Car Guage"
				});
	
				new JustGage({
					id: this.getView().byId("id_Gauge2").sId,
					value: getRandomInt(0, 100),
					min: 0,
					max: 100,
					title: "Bike Guage",
					label: "Kilometers",
					view: this.oView,
					size: 900,
				});
	
				new JustGage({
					id: this.getView().byId("id_Gauge3").sId,
					value: getRandomInt(0, 100),
					min: 0,
					max: 100,
					title: "Shadow effects",
					label: "",
					shadowOpacity: 1,
					shadowSize: 5,
					shadowVerticalOffset: 10,
					view: this.oView,
					size: 400,
				});
			}
		});
	});
