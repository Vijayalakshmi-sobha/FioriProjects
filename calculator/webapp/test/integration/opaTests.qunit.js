/* global QUnit */
QUnit.config.autostart = false;

sap.ui.require(["com/applexus/calculator/test/integration/AllJourneys"
], function () {
	QUnit.start();
});
