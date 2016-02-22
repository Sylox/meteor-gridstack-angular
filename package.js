Package.describe({
    name: 'sylox:meteor-gridstack-angular',
    version: '0.2.4',
    // Brief, one-line summary of the package.
    summary: 'gridstack-angular is an AngularJS directive for the widget layout plugin gridstack.js',
    // URL to the Git repository containing the source code for this package.
    git: '',
    // By default, Meteor will default to using README.md for documentation.
    // To avoid submitting documentation, set this field to null.
    documentation: 'README.md'
});

Package.onUse(function(api) {
    api.versionsFrom('1.2.1');

    api.use([
        'jquery',
        'erasaur:meteor-lodash',
        'mizzao:jquery-ui'
    ], 'client');

    // How to update the git submodules
    // http://stackoverflow.com/questions/5828324/update-git-submodule-to-latest-commit-on-origin
    api.addFiles([
        'lib/jquery-ui-touch-punch/jquery.ui.touch-punch.min.js',
        'lib/gridstack/dist/gridstack.min.css',
        'lib/gridstack/dist/gridstack-extra.min.css',
        'lib/gridstack/dist/gridstack.min.js',
        'lib/gridstack-angular/dist/gridstack-angular.min.js'
    ], 'client');

});
