getLang = () => {
    let lang
    if (Package['tap:i18n']) lang = TAPi18n.getLanguage()
    else lang = window.navigator.userLanguage || window.navigator.language
    return lang
}

mDate = {
    formatted: (date, format) => {
        let mDate, lang, output
        let formattedDate = new ReactiveVar()
        Tracker.autorun(() => {
            lang = getLang()

            if (format) mDate = moment(date).locale(lang).format(format)
            else mDate = moment(date).locale(lang).format("DD.MM.YYYY hh:mm")
            formattedDate.set(mDate)
        })

        return formattedDate.get()

    },
    timeAgo: (date) => {
        let output, lang,
            timeago = new ReactiveVar()
        Tracker.autorun(() => {
            lang = getLang()

            let time = moment(date)
            // Fallback to current time if `date` is invalid.
            if(!time.isValid())
                time = moment()

            timeago.set(time.locale(lang).fromNow())
        })
        return timeago.get()
    }
}