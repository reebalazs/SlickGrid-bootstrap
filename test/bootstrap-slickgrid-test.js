
buster.testCase('bootstrap-slickgrid', {

    'can create': function () {
        var SlickGrid = $.fn.slickgrid.Constructor;
        var mock = this.mock(SlickGrid.prototype);
        mock.expects('handleCreate').once().returns();
        var wrapper = new SlickGrid('ELEMENT', {});
    },

    'accepts handleCreate option': function() {
        var SlickGrid = $.fn.slickgrid.Constructor;
        var mock = this.mock(SlickGrid.prototype, 'handleCreate');
        var handler = this.mock().once();
        var wrapper = new SlickGrid('ELEMENT', {
            handleCreate: handler
        });
    },

    'default create handler': function() {
        var SlickGrid = $.fn.slickgrid.Constructor;
        var wrapper = {
            element: 'ELEMENT',
            wrapperOptions: {}
        };
        var grid = {
        };
        window.Slick = {
            Grid: this.stub().returns(grid)
        };
        SlickGrid.prototype.handleCreate.call(wrapper);
        assert(true);
    }

});



