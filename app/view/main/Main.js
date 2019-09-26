/**
 * This class is the main view for the application. It is specified in app.js as the
 * "mainView" property. That setting causes an instance of this class to be created and
 * added to the Viewport container.
 */
Ext.define('ProfileApp.view.main.Main', {
    extend: 'Ext.tab.Panel',
    xtype: 'app-main',

    requires: [
        'Ext.layout.Fit',
    ],

    controller: 'main',
    viewModel: 'main',

    defaults: {
        tab: {
            iconAlign: 'top'
        }
    },

    tabBarPosition: 'bottom',

    items: [
        // TODO - Replace the content of this view to suit the needs of your application.
        {
            title: 'Home',
            iconCls: 'x-fa fa-home',
            layout: 'vbox',
            // The following grid shares a store with the classic version's grid as well!
            items: [{
                xtype: 'profileform'
            },
            {
                xtype: 'tabpanel',
                width: '100%', // take up all available width
                height: 300,
                style: 'background-color:#dfe8f6; ',
                defaults: {
                    bodyPadding: 15
                },
                items: [
                    {
                      xtype: 'panel',
                      title: 'details',
                      items: [
                        {
                            xtype: 'profiledetailpanel'
                        }
                      ]  
                    },
                    {
                        xtype: 'panel',
                        title: 'Cache',
                        items: [
                            {
                                boxLabel: 'Utilisation d\'un élément physique (Token/SC)',
                                name: 'caches',
                                inputValue: '1',
                                id: 'checkbox1',
                            }],

                    }, {
                        // the contact tab using data from the developer record
                        title: 'Mot de passe Windows',

                        scrollable: 'vertical',
                        //cls: 'dev-card-contact',
                        //bind: {
                        html: 'Mot de passe Windows'
                        //}
                    }
                ]

                /*xtype:'tab_profile', 
                width: '100%', // take up all available width
                height : 300,
                flex: 1  */
            },
            {
                buttons: [{ text: 'Modifier', isFor: 'modify' }
                ]
            }
            ]
        },
        {
            title: 'tto',
            html: 'toto'
        }
    ]
});
