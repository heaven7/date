Template.registerHelper('formattedDate', function (date, format) {
    return mDate.formatted(date, format)
})
Template.registerHelper('timeAgo', function (date) {
    return mDate.timeAgo(date)
})
Template.registerHelper('unix2Date', function (date, format) {
    return mDate.unix2Date(date, format)
})