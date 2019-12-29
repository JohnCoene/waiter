# Changelog

List of changes made to waiter.

## waiter 0.1.0.9000

Version `0.1.0` sees great many changes. Nothing has been broken but has been deprecated. The `steward` and `garcon` family of functions have been added.

### Waiter

All functions start with `waiter_`.

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

### Waitress

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

### Hostess

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
