(function($) {

module("bootstrap support", {
    setup: function () {
        this.sinon = sinon.sandbox.create();
    },
    teardown: function () {
        this.sinon.verify();
        this.sinon.restore();
    }
});

test("can create", function() {
    var sinon = this.sinon;
    var SlickGrid = $.fn.slickgrid.Constructor;
    var mock = sinon.mock(SlickGrid.prototype);
    mock.expects('handleCreate').once().returns();
    var wrapper = new SlickGrid('ELEMENT', {});
});

test("accepts handleCreate option", function() {
    var sinon = this.sinon;
    var SlickGrid = $.fn.slickgrid.Constructor;
    var mock = sinon.mock(SlickGrid.prototype, 'handleCreate');
    var handler = sinon.mock().once();
    var wrapper = new SlickGrid('ELEMENT', {
        handleCreate: handler
    });
});

test("default create handler", function() {
    var sinon = this.sinon;
    var SlickGrid = $.fn.slickgrid.Constructor;
    var wrapper = {
        element: 'ELEMENT',
        wrapperOptions: {}
    };
    var grid = {
    };
    window.Slick = {
        Grid: sinon.stub().returns(grid)
    };
    SlickGrid.prototype.handleCreate.call(wrapper);
});

})(window.jQuery);
