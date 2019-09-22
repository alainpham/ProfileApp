Ext.define('ProfileApp.view.main.ProfileDetailPanel', {
    extend: 'Ext.panel.Panel',
    xtype: 'profiledetailpanel',

    bind: {
        title: 'Selected profile : {selectedProfileName}'
    },

    items: [
        {
            xtype: 'component',
            bind: {
                html: 'DN : {selectedProfile.DN}'
            }
        },
        {
            xtype: 'component',
            bind: {
                html: 'IsKeyAllowed : {selectedProfile.IsKeyAllowed}'
            }
        }
    ]

});
