/**
 * This view is an example list of people.
 */
Ext.define('ProfileApp.view.main.ProfileForm', {
    extend: 'Ext.form.Panel',
    xtype: 'profileform',
    title: 'Select your profile',
    requires: [
        'ProfileApp.store.UserProfile'
    ],
    layout: 'hbox',

    items: [
        {
            xtype: 'combobox',
            fieldLabel: 'profileName',
            name: 'profileName',
            queryMode: 'local',
            displayField: 'Name',
            valueField: 'Name',
            bind: '{selectedProfileName}',

            store: {
                type: 'userProfile',
                autoLoad: true
            },

            listeners: {
                select: 'onItemSelected'
            }

        },
        { xtype: 'button',
        text: 'Add profile',
        iconCls: 'x-fa fa-times' },
        { xtype: 'button',
        text: 'Delete Profile',
        iconCls: 'x-fa fa-times' },

    ]



});
