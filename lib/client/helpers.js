Handlebars.registerHelper('formattedDate', function (date, format) {
    return mDate.formatted(date, format)
})
Handlebars.registerHelper('timeAgo', function (date) {
    return mDate.timeAgo(date)
})