# SlickGrid BootStrap support

Support to make SlickGrid work with Twitter Bootstrap styles.

Please visit the
[live demo](http://reebalazs.github.com/SlickGrid-bootstrap/examples/example-bootstrap.html).


## SlickGrid is an advanced JavaScript grid/spreadsheet component

To learn about SlickGrid, please check out the
[SlickGrid wiki](https://github.com/mleibman/SlickGrid/wiki).


## Running the examples locally

First, you need to have NodeJS and npm installed.

You can install dependencies with the following step. First, you install NodeJS utilities.

    $ npm install .

This installs modules in the `node_modules` directory. You can add the location of the
NodeJS executables to your path. (Note that this has an effect only on the current shell.)

    $ export PATH=$PWD/node_modules/.bin:$PATH

Then, install the front-end dependencies into the `components` directory:

    $ bower install

Following this, build the resources needed for the examples.

    $ grunt

You can now load `examples/example-bootstrap.html` from your browser.

If you want to develop, you can start grunt in watch mode:

    $ grunt watch

This will rebuild the example resources each time any of their sources
changes.
