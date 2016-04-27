describe('date package suite', function () {
    var server = meteor({flavor: "fiber"})
    var client = browser({flavor: "fiber", location: server})


    it("should output formatted date", function () {
        var date = new Date('01.01.2016')
        var value = client.execute(function (val1) {
            moment.locale('en')
            return mDate.formatted(val1)
        }, [date])

        expect(value).to.equal("01.01.2016 12:00")
    })

    it("should output timeAgo date", function () {
        var date = new Date()
        var value = client.execute(function (val1) {
            moment.locale('en')
            return mDate.timeAgo(val1)
        }, [date])

        expect(value).to.equal("a few seconds ago")
    })

    it("should output timeAgo date", function () {
        var date = new Date()
        var value = client.execute(function (val1) {
            moment.locale('en')
            return mDate.timeAgo(val1)
        }, [date])

        expect(value).to.equal("a few seconds ago")
    })

    it("should transform a unix timestamp into a formatted date", function () {
        var date = 1461751200
        var value = client.execute(function (val1) {
            return mDate.unix(val1, "DD.MM.YYYY")
        }, [date])

        expect(value).to.equal("27.04.2016")
    })
})