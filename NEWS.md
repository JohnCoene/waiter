# waiter 0.2.5

- Added `httr_progress` function to use  the waitress or
the attendant instead of `httr::progress`.
- Added `withProgressWaitress`, `setProgressWaitress`, and
`incProgressWairess` analogous to the same functions in shiny.
- Added `withProgressAttendant`,
`incProgressAttendant`, and `setProgressAttendant`.
- Fix major issue with `Hostess`, it was basically broken
[#108](https://github.com/JohnCoene/waiter/issues/108).
- Add `withWaiter` as requested in 
[#105](https://github.com/JohnCoene/waiter/issues/105).
- Added `bs4_spinner` and `bs5_spinner`.

# waiter 0.2.3

- Fix [#95](https://github.com/JohnCoene/waiter/issues/95) with different CSS for full screen (`position: fixed`).
- Fix CSS injection that repeatedly injected CSS to hide recalculating effect.
- Remove magrittr in favour of R native pipe.
- Add active bindings for many of the waiter components,
see `?Waiter`.
- Prep deprecation of functions with underscores in favour of camel case
(only for that which are to be used in the shiny UI).
- Deprecate the `logo` argument it is no longer used and can be
easily achieved in other ways.
- Add `triggerWaiter` to trigger the waiter without going through
the server.
- Implement webpack for waiter, minifies and optimises code.
- Deprecate `spinners` argument of `use_waiter` function. All CSS is bundled with webpack.
- Performance improvements with use of maps instead of arrays.
- Improve documentation, new site.
- Added function `autoWaiter` to easily add waiter to dynamic
Shiny-rendered elements from the UI.
- Use webpack and packer to minify and optimise hostess code.
- Added `attendant` progress bars, for easy progress display without
bringing in additional dependencies.
- Document JavaScript [internals](https://waiter.john-coene.com/jsdoc/tutorial-waiter)

# waiter 0.2.2

- Remove `console.log`
- Add `image` argument to the waiter, allows using a background
image on the waiter.
- Fix `hide_on_render` [#94](https://github.com/JohnCoene/waiter/issues/94)

# waiter 0.2.1

- Fixed `waiter_hide_on_render` see [#79](https://github.com/JohnCoene/waiter/issues/79).
- Added `waiter_preloader` shows the full page loading screen when the app is loaded and automatically removes it when all the UI is rendered: only runs once. [#82](https://github.com/JohnCoene/waiter/issues/82)
- Remove logging of shiny event, [#83](https://github.com/JohnCoene/waiter/issues/83)
- Fix stewart, broken due to removal of progress.js [#81](https://github.com/JohnCoene/waiter/issues/81)
- Added fadeout effect on waiter overlays, [#53](https://github.com/JohnCoene/waiter/issues/53)
- Improve waiter screen responsiveness.

# waiter 0.2.0

- Better infinite waitress se [#63](https://github.com/JohnCoene/waiter/issues/63)
- Add infinite hostess see [#67](https://github.com/JohnCoene/waiter/pull/67) thanks to [Víctor Granda](https://github.com/MalditoBarbudo)
- Remove deprecated functions:
  - `show_waiter_on_load` in favour of `waiter_show_on_load`
  - `hide_waiter_on_drawn` in favour of `waiter_hide_on_drawn`
  - `hide_waiter` in favour of `waiter_hide`
  - `update_waiter` in favour of `waiter_update`
  - `show_waiter` in favour of `waiter_show`
  - All functions of the `Butler` in favour of the `Waitress`
  - `hostess_init` in favour of `Hostess$init`
  - `hostess_set` in favour of `Hostess$set`
  - `browse_waiters` and `browse_waitresses` in favour of the online demo.
  - `call_waitress` in favour of `Waitress$new()`
- Fix bug on shiny disconnected see [#68](https://github.com/JohnCoene/waiter/issues/68)
- Change CSS of waiter overlays so it's more responsive and better centered.
- Remove pleasewait.js dependency.
- Remove `rstudioapi` dependency; assumes most users have moved up from version 1.2
- Fixed bug where `waiter_show_on_load` ran `Shiny.setInputValue` before shiny connected [#73](https://github.com/JohnCoene/waiter/issues/73) + correct the erroneous example in the README
- Document CSS and spinner placement in waiter.

# waiter 0.1.3

- Added `hide_on_error`, and `hide_on_silent_error` to the `Waiter` to control whether the waiter should be removed when the underlying plot/table/or other throws an error. Silent errors are those raised by `req` and `validate`/`need`.
- Added events `waiter_shown` and `waiter_hidden` fired when the loading screen with waiter is shown or hidden.

# waiter 0.1.2

- Much improved spinners API.
- Allow previewing the spinners with `preview_spinner`.
- Spinner kit no longer force prints, `print` method added for this.
- Added ability to automatically show and hide the loading screen when the server is busy/idle with `waiter_on_busy`
- Remove `include_js` argument to simplify API

# waiter 0.1.1

## New Feature

- Added theme-related functions (`waiter_set_theme`, `waiter_get_theme`, and `waiter_unset_theme`) to enable setting a global theme; making such that every waiter loading screen uses the same options (`color`, `html`, and `logo`). This can e overridden in individual waiter loading screens.
- Added a new `spin_google` spinner
- Added a convenience function `transparent` to easily create transparent waiter backgrounds.
- Added a cheat sheet, thanks to [JH Kim](https://github.com/jhk0530)
- Add ability to reduce load size of CSS (raised by issue [#47](https://github.com/JohnCoene/waiter/issues/47)), `use_waiter` takes a `spinner` argument to which one can specify any of 7 spinner CSS kits, by default all kits are loaded. One can know which kits should be specified by simply typing the spinner in the console, e.g.: `spin_rotating_plane()`.
- Fix waiter example.

## Bug Fixes

- Check if Rstudio 1.2 available, warn if not on attach, see [#41](https://github.com/JohnCoene/waiter/issues/41) where waiter fails with earlier version of RStudio.
- Change internal css class to avoid clash with shinydashboard, see [#43](https://github.com/JohnCoene/waiter/issues/43).

# waiter 0.1.0

Version `0.1.0` sees great many changes. Nothing has been broken but has been deprecated. The `steward` and `garcon` family of functions have been added.

## Waiter

All functions now start with `waiter_`.

* The new `waiter_show` function _deprecates_ `show_waiter`
* The new `waiter_hide` function _deprecates_ `hide_waiter`
* The new `waiter_update` function _deprecates_ `update_waiter`
* The new `waiter_show_on_load` function _deprecates_ `show_waiter_on_load`
* The new `waiter_hide_on_load` function _deprecates_ `hide_waiter_on_load`

The Reference class `Waiter` takes a new _optional_ `id` first argument which takes one or more ids of elements to overlay the waiter over, the content of the waiter (`html`) becomes the second argument. If passing a list of ids one can pass a list of content `html`.

```r
library(shiny)
library(waiter)

ui <- fluidPage(
  use_waiter(),
  actionButton("btn", "Render"),
  fluidRow(
    column(6, plotOutput("plot1")),
    column(6, plotOutput("plot2"))
  )
)

server <- function(input, output) {

  w <- Waiter$new(
    list("plot1", "plot2"),
    html = list(spin_1(), spin_2())
  )

  dataset <- reactive({
    input$btn
    w$show()
    Sys.sleep(2)
    runif(100)
  })

  output$plot1 <- renderPlot(plot(dataset()))
  output$plot2 <- renderPlot(plot(dataset()))

}

shinyApp(ui, server)
```

## Waitress

The waitress also sees a lot of changes, again nothing has been broken.

* `call_waitress` has been deprecated in favour of the Reference class, please use `Waitress$new()` instead.
* The Waitress can now also be used as notification
* Many methods have been renamed (deprecated) to more closely match `shiny::Progress`
* Addition of the `min` and `max` arguments, one is no longer limited to percentages
* Possibility to create an infinite progress bar (deprecates the butler)
* Additional `html` argument on `start` method to add content on waitress

```r
library(shiny)
library(waiter)

ui <- fluidPage(
  use_waitress(),
  actionButton("btn", "render"),
  plotOutput("plot")
)

server <- function(input, output) {

  w <- Waitress$new("#plot", min = 0, max = 10)

  output$plot <- renderPlot({
    input$btn

    w$start("LOADING")

    for(i in 1:10){
      Sys.sleep(.3)
      w$inc(1)
    }

    w$close()

    plot(runif(100))
  })

}

shinyApp(ui, server)
```

## Hostess

The hostess is a new addition to the staff, it works hand in hand with waiter to allow you to layer a progress bar _on top_ of the waiter (though it can be used on its own). Moreover the latter progress bars can be greatly customised.

```r
library(shiny)
library(waiter)

ui <- fluidPage(
  use_waiter(),
  use_hostess(),
  waiter_show_on_load(
    color = "#f7fff7",
    hostess_loader(
      "loader", 
      preset = "circle", 
      text_color = "black",
      class = "label-center",
      center_page = TRUE
    )
  )
)

server <- function(input, output){
  hostess <- Hostess$new("loader")

  for(i in 1:10){
    Sys.sleep(runif(1) / 2)
    hostess$set(i * 10)
  }

  waiter_hide()
}

shinyApp(ui, server)
```
