# SlickGrid BootStrap support

Support to make SlickGrid work with Twitter Bootstrap styles.

Please visit the
[live demo](http://reebalazs.github.com/SlickGrid-bootstrap/examples/example-bootstrap.html).


## SlickGrid is an advanced JavaScript grid/spreadsheet component

To learn about SlickGrid, please check out the
[SlickGrid wiki](https://github.com/mleibman/SlickGrid/wiki).


## Running the examples locally

To run the examples locally, you need to follow the steps needed for development,
described in the next section.


## Development

For development of the package itself, or for running the examples, you need to have NodeJS and npm (the Node Package Manager) already installed on your system.

Following this, the installation happens in two phases: first the NodeJS, then the front-end
packages will be installed from their respective repositories.


### Installing NodeJS modules

We will install the modules locally. First delete the local node_modules directory,
as a precaution to make sure that no dependencies are preinstalled locally. (If you have node_modules that you need, start somewhere else.)

    $ rm -rf node_modules

Then you can use `npm` to install both the sources and the necessary node tools, and change
your working directory to the place of the installation:

    $ npm install git+https://github.com/reebalazs/SlickGrid-bootstrap.git
    $ cd node_modules/slickgrid-bootstrap-dev

Alternately, if you have already checked out these sources from git, you can go
to this directory and install it locally with npm:

    $ git clone https://github.com/reebalazs/SlickGrid-bootstrap.git
    $ cd slickgrid-bootstrap-dev
    $ npm install .

Both methods ended up installing executables in the
`node_modules/.bin` directory. You can add this location to your path. (Note that this has an effect only on the current shell.)

    $ export PATH=$PWD/node_modules/.bin:$PATH

Due to the way npm works, this directory will only hold the executables from those
packages that were pulled in as a dependancy from our package, and have not been
previously installed. If you have previously installed some package, it will
be where you have installed it, and it will only be executable if you have
made it so (globally installed modules are in the global system path, locally installed
modules will be in their respective `.bin` directories.) If you have not done
anything special with your NODE_PATH, and followed the above instrucions to delete the
'node_modules' directory initially, tthen his should not be a concern for
you.


### Installing front-end components

We will use `bower` for the installation. You can use your favourite front-end
package manager if you know what you are doing, and you update `Gruntfile.js`
appropriately.

In the following, install the front-end dependencies into the `components` directory:

    $ bower install

Following this, build the resources needed for the examples.

    $ grunt

If you want to develop, you can start grunt in watch mode:

    $ grunt watch

This will rebuild the example resources each time any of their sources
changes.


### Running the example demo

You can now load `examples/example-bootstrap.html` from your browser.

