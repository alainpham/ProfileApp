Ext.define('ProfileApp.store.UserProfile', {
    extend: 'Ext.data.Store',
    alias: 'store.userProfile',

    model: 'ProfileApp.model.UserProfile',

    proxy: {
        type: 'ajax',
        url: 'data/userProfile.json'
    }
});