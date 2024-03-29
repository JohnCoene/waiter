# Attendant

<Badge type="warning">New</Badge> The attendant is not 
currently on CRAN.

A new family of functions to display progress bars using 
Bootstrap's built-in progress bars; waiter allows easily
animating them.

__Goal:__ The aim of the attendant is to fill a gap in progress
reporting with shiny and waiter. While other families of functions
in the waiter package allow displaying feedback on top of existing
HTML elements, the attendant is permanently in the DOM (not 
necessarily visible though).

<Note>
Works with both Bootstrap 3 and 4.
</Note>

Unlike other families of functions in the packer the attendant
is not overlayed on top of other elements, choose where you 
would like it to be displayed and dynamically control its
state from the server.

## Basic

Place `attendantBar` in your UI where you would like the progress
bar to be displayed. Then from the server control it's state.

<Note type='tip'>
Make sure you include the dependencies with
<code>useAttendant</code>.
</Note>

Note that we give the progress bar in the UI an id and reference
it server-side, ensure these are unique.

```r
library(shiny)
library(waiter)

ui <- fluidPage(
  useAttendant(),
  attendantBar("progress-bar")
)

server <- function(input, output){
  att <- Attendant$new("progress-bar")

  for(i in 1:10){
    Sys.sleep(runif(1))
    att$set(i * 10)
  }
}

shinyApp(ui, server)
```

## Customise

The look of the progress bar is controled from the UI function.
Below we create a green, striped, and animated progress bar that
goes up to 1000.

<Note type="warning">
The <code>animated</code> option will only work with bootstrap 4.
</Note>

```r {highlight: [5,'7-13']}
library(shiny)
library(waiter)

ui <- fluidPage(
  theme = bslib::bs_theme(version = 4),
  useAttendant(),
  attendantBar(
		"progress-bar",
		max = 1000,
		color = "success",
		striped = TRUE,
		animated = TRUE
	)
)

server <- function(input, output){
  att <- Attendant$new("progress-bar")

  for(i in 1:10){
    Sys.sleep(runif(1))
    att$set(i * 100)
  }
}

shinyApp(ui, server)
```

![](_assets/img/att3.gif)

_You can also control the thickness of the progress bar as well as
the background color._

## Text

You can optionallly display text on the progress bar.
While an initial text value can be defined in the UI,
this text can be updated from the server dynamically,
e.g.: below to display the percentage. 

```r
library(shiny)
library(waiter)

ui <- fluidPage(
  useAttendant(),
  attendantBar("progress-bar")
)

server <- function(input, output){
  att <- Attendant$new("progress-bar")

  for(i in 1:10){
    Sys.sleep(runif(1))
    att$set(i * 10, text = sprintf("%s%%", i * 10))
  }
}

shinyApp(ui, server)
```

![](_assets/img/att1.gif)

## Auto

You can also use `auto` method to automatically increase the 
progress bar. Note that you will have to call the `done` method
when this should be stopped.

The `auto` method takes two arguments:

- `ms`: The number of milliseconds between every increase of the 
progress bar by `value` (see below).
- `value`: The value to increase the progress bar at every `ms`.

By default, it increases the progress bar by 1 every 400 ms. 

Improtantly, this is not an infinite progress bar, it runs out
at some point but can nonetheless be useful for long computations
the length of which cannot be determined ahead of time.

```r
library(shiny)
library(waiter)

ui <- fluidPage(
  useAttendant(),
  actionButton("start", "start"),
  attendantBar("progress-bar")
)

server <- function(input, output){
  att <- Attendant$new("progress-bar", hide_on_max = TRUE)

  observeEvent(input$start, {

    att$set(80) # start at 80%
    att$auto() # automatically increment

    on.exit({
      att$done() # after 4 seconds
    })

    Sys.sleep(4)
  })
}

shinyApp(ui, server)
```

![](_assets/img/att.gif)

## With Waiter

You can also use it with waiter, use `attendantBar` as `html`
for the waiter, everything else works the same.

<Note type="danger">
When using the attendant with waiter, you <strong>must</strong>
set the <code>width</code> to an absolute value in pixels
(or numeric), a relative width (e.g.: in percentage) will
not work.
</Note>

```r
library(shiny)
library(waiter)

ui <- fluidPage(
  useWaiter(), # include dependencies
  useAttendant(),
  actionButton("show", "Show loading bar")
)

server <- function(input, output, session){
  # create a waiter
  w <- Waiter$new(
    color = "white",
    html = attendantBar(
      "the-bar", 
      width = 200, # MUST be set with waiter
      text = "loading stuff"
    )
  )

  att <- Attendant$new("the-bar")

  # on button click
  observeEvent(input$show, {
    w$show()
    att$set(40)
    att$auto()

    on.exit({
      att$done()
      w$hide()
    })

    Sys.sleep(9)
  })
}

shinyApp(ui, server)
```

![](_assets/img/att4.gif)

## Progress

You can use `withProgressAttendant`, together with
`incProgressAttendant`, and `setProgressAttendant`.

```r
library(shiny)
library(waiter)

ui <- fluidPage(
  useAttendant(),
  br(),
  actionButton(
    "load",
    "Load stuff"
  ),
  attendantBar("main", max = 15)
)

server <- function(input, output) {
  observeEvent(input$load, {
    withProgressAttendant({
      for (i in 1:15) {
        incProgressAttendant(1)
        Sys.sleep(0.25)
      }
    }, id = "main")
  })
}

shinyApp(ui, server)
```

## Use Cases

You may have operations that take time, require a progress bar
to keep the user in the know and patiently waiting but which
cannot/should not be layered on top of other elements (as do
other waiter functions).

Below we create an `attendantBar`, add a class of `top-progress`
to it. Then with a bit of CSS make it such that this bar is

1. Initialised as hidden with `display: none`.
2. At the top of the page with `position: absolute;top:0;left:0;`

Server-side we set `hide_on_max` to `TRUE` to make sure  that 1)
the progress bar is hidden again once `done` and 2) made visible
again when the progress bar is restarted.

```r
library(shiny)
library(waiter)

ui <- fluidPage(
  tags$head(
    tags$style(
      ".top-progress{
        display: none;
        position: absolute;
        top: 0;
        left: 0;
      }"
    )
  ),
  useAttendant(),
  attendantBar(
		"progress-bar",
    height = 3,
    class = 'top-progress'
	),
  br(),
  actionButton("start", "Call API"),
  verbatimTextOutput("response")
)

server <- function(input, output){
  att <- Attendant$new("progress-bar", hide_on_max = TRUE)

  response <- eventReactive(input$start, {
    # call the API here
    att$set(25)
    att$auto()

    on.exit({
      att$done()
    })

    # call the API here
    Sys.sleep(7)

    "Response from the API!"
  })

  output$response <- renderPrint({
    response()
  })
}

shinyApp(ui, server)
```

![](_assets/img/att2.gif)

This way the progress bar can be reused, even for other purposes
(as long as these do not run at the same time).

---

Alternatively one could use a modal and place the progress bar
in it.

```r
library(shiny)
library(waiter)

ui <- fluidPage(
  useAttendant(),
  br(),
  actionButton("start", "Call API"),
  verbatimTextOutput("response")
)

server <- function(input, output){
  att <- Attendant$new("progress-bar", hide_on_max = TRUE)

  response <- eventReactive(input$start, {

    showModal(
      modalDialog(
        size = "s",
        attendantBar(
          "progress-bar",
          class = "top-progress",
          text = "Calling API",
        ),
        footer = NULL
      )
    )

    att$set(25)
    att$auto()
    
    on.exit({
      att$done()
      removeModal()
    })
    
    # call the API here
    Sys.sleep(7)

    "Response from the API!"
  })

  output$response <- renderPrint({
    response()
  })
}

shinyApp(ui, server)
```

![](_assets/img/att5.gif)

## httr

Use `httr_progress` to use an attendant instead of a console
text progress tracker for httr.

<Note type="tip">
Also works with the waitress.
</Note>

```r
library(shiny)
library(httr)
library(waiter)

cap_speed <- config(max_recv_speed_large = 10000)

ui <- fluidPage(
  useAttendant(),
  br(),
  attendantBar("main", hidden = TRUE),
  actionButton(
    "dl",
    "Download"
  ),
  plotOutput("plot")
)

server <- function(input, output){
  w <- Attendant$new("main")

  dataset <- eventReactive(input$dl, {
    x <- GET(
      "http://httpbin.org/bytes/102400", 
      httr_progress(w), 
      cap_speed
    )

    runif(100)
  })

  output$plot <- renderPlot(plot(dataset()))
}

shinyApp(ui, server)
```
