# ember-ui

'ember-ui' supports the development of a graphical user interface (GUI) with ember. It provides general purpose widgets wich are common web-application. Currently the development effort focuses on full-screen operated GUIs. The components implemented for 'ember-ui' are used to develop a web-application to long-term archive knowledge in the architectural domain. See http://duraark.eu.

## Components

* hk-plugin

## Mixins

* Themeable
* GLog

### Bootstrapping: SASS and susy (this is only a node for myself on how to install sass and susy within an  ermber-cli application. You can safely ignore it.)

* ember new myproject
* cd myproject
* ember install:npm broccoli-sass
* ember install:bower susy
* git mv app/style/app.css app/style/app.scss

In app/styles/app.scss put:

@import "bower_components/susy/sass/susy";

$susy: (
  flow: ltr,
  math: fluid,
  output: float,
  gutter-position: after,
  container: auto,
  container-position: center,
  columns: 4,
  gutters: .25,
  column-width: false,
  global-box-sizing: content-box,
  last-flow: to,
  debug: (
    image: show,
    color: rgba(#66f, .25),
    output: background,
    toggle: top right,
  ),
  use-custom: (
    background-image: true,
    background-options: false,
    box-sizing: true,
    clearfix: false,
    rem: true,
  )
);
