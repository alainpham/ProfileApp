/*
 * This file launches the application by asking Ext JS to create
 * and launch() the Application class.
 */
Ext.application({
    extend: 'ProfileApp.Application',

    name: 'ProfileApp',

    requires: [
        // This will automatically load all classes in the ProfileApp namespace
        // so that application classes do not need to require each other.
        'ProfileApp.*'
    ],

    // The name of the initial view to create.
    mainView: 'ProfileApp.view.main.Main'
});
