
require.paths.unshift('spec', '/usr/local/lib/ruby/gems/1.9.1/gems/jspec-4.1.0/lib', 'lib')
require('jspec')
require('unit/spec.helper')
require('yourlib')

JSpec
  .exec('spec/unit/spec.js')
  .run({ reporter: JSpec.reporters.Terminal, fixturePath: 'spec/fixtures', failuresOnly: true })
  .report()
