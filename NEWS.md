# waiter 0.1.3

- Added `hide_on_error`, and `hide_on_silent_error` to the `Waiter` to control whether the waiter should be removed when the underlying plot/table/or other throws an error. Silent errors are those raised by `req` and `validate`/`need`.

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
