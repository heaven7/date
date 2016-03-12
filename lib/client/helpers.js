Handlebars.registerHelper('formattedDate', function (date, format) {
    if(format) return moment(date, format)
})