Meteor.startup(() => {
    Tracker.autorun(() => {
        if(Package['tap:i18n']) moment.locale(TAPi18n.getLanguage())
        else moment.locale(window.navigator.userLanguage || window.navigator.language)
    })
})
