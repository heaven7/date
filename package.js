Package.describe({
  name: 'heaven7:date',
  version: '0.0.1',
  summary: 'Date package with template helper',
  git: 'https://github.com/heaven7/date.git',
  documentation: 'README.md'
})

var both = ['client','server'],
    packages = [
        'copleykj:livestamp@1.1.7',
        'momentjs:moment@2.12.0',
        'rzymek:moment-locale-de@2.8.4',
        'rzymek:moment-locale-es@2.8.4',
        'templating',
        'es5-shim',
        'ecmascript',
        'meteorhacks:npm',
        'jquery'
]

Package.onUse(function(api) {
    api.versionsFrom('1.2')
    api.use(packages, both)
    api.imply(packages)

    api.addFiles([
        'lib/client/templates.html',
        'lib/client/locale.js',
        'lib/client/helpers.js'
    ], 'client')
})
