# Date package with template helper
Uses [moment.js] (http://momentjs.com/docs/) to format dates with i18n support.

## Installation
```bash
$ meteor add heaven7:date
```

## Usage

### formattedDate
Will display the date object in a formatted one.
```html
{{formattedDate myDate "YYYY MM DD"}}
```
or use in javascript
```javascript
let myDate = new Date()
let myFormat = "YYYY MM DD"
mDate.formattedDate(myDate, myFormat)
```

### timeAgo
Will display the date object in a 'time ago in words' manner.
```html
{{timeAgo myDate}}
```
or use in javascript
```javascript
let myDate = new Date()
mDate.timeAgo(myDate)
```

### i18n support
By using `tap:i18n` the helpers will switch to the given language otherwise the package
will determine the language by `window.navigator`.