Meteor.startup(() => {
    WSL = window && window['WSL'] || {}
    WSL.ui = window && window['WSL'].ui || {}

    WSL.ui.date = {}
    WSL.ui.date.format = "DD.MM.YYYY hh:mm"
    WSL.ui.date.range = {}
    WSL.ui.date.range.separator = " - "
})