
var config = module.exports;

config["slickgrid-bootstrap"] = {
    rootPath: "..",
    environment: "browser",
    libs: [
        "components/jquery/jquery.js"
    ],
    sources: [
        "bootstrap/bootstrap-slickgrid.js"
    ],
    tests: [
        "test/bootstrap-slickgrid-test.js"
    ]
};
