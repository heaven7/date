mDate = {
    formatted: (date, format) => {
        let mDate, output
        let formattedDate = new ReactiveVar()
        Tracker.autorun(() => {
            if (format) mDate = moment(date).format(format)
            else mDate = moment(date).format("DD.MM.YYYY hh:mm")

            if (mDate.isValid()) {
                if (Package['tap:i18n']) output = mDate.locale(TAPi18n.getLanguage())
                else output = mDate.locale(window.navigator.userLanguage || window.navigator.language)
                formattedDate.set(output)
            }
        })

        return formattedDate.get()

    },
    timeAgo: (date) => {
        let output
        let timeago = new ReactiveVar()
        Tracker.autorun(() => {
            let time = moment(date)
            // Fallback to current time if `date` is invalid.
            if(!time.isValid())
                time = moment()

            if(Package['tap:i18n']) output = time.locale(TAPi18n.getLanguage())
            else output = time.locale(window.navigator.userLanguage || window.navigator.language)

            timeago.set(output.fromNow())
        })
        return timeago.get()
    }
}