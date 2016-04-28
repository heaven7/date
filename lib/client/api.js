Meteor.startup(() => {
    WSL = window && window['WSL'] || {}
    WSL.ui = window && window['WSL'].ui || {}

    WSL.ui.date = {}
    WSL.ui.date.format = Meteor.settings.public.format.date
    WSL.ui.date.range = {}
    WSL.ui.date.range.separator = " - "
})