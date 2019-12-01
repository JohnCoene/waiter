# The Waitress

The waitress will let you display loading bars on the entire screen or specific elements only.

## How to

Note that the waitress is a reference class.

1. Place `use_waitress` anywhere in your UI.
2. Set up the waitress in your server with `call_waitress` or `Waitress$new()`.
3. Programatically call the `set`, `increase`, and `auto` methods.
4. Don't forget to programatically hide the loading screen with the `hide` method.

See `?waitress` for the documentation.

> [!WARNING]
> Make sure you include the dependencies with `use_waitress`.

## Examples

### Plot

The waitress can be applied to a specific element or the whole page. Note that `call_waitress` and `Waitress$new()` takes a CSS selector, so if you want to apply it to a plot use `#plotId`.

```r
library(shiny)
library(waiter)

ui <- fluidPage(
  use_waitress(),
  plotOutput("plot", width = 400)
)

server <- function(input, output){
  
  waitress <- call_waitress("#plot") # call the waitress
  
  output$plot <- renderPlot({
    waitress$start() # start the waitress
    
    dat <- vector()
    
    for(i in 1:10){
      waitress$increase(10) # increase by 10%
      Sys.sleep(.3)
      dat <- c(dat, sample(1:100, 1))
    }
    
    hist(dat)
    waitress$hide() # hide when done
	})

}

shinyApp(ui, server)
```

![](_assets/img/waitress-plot.gif)

### Selector

Because the waitress takes a selector, we can apply it to different parts of the page, using a class or any other selector, like the `nav`.

```r
library(shiny)
library(waiter)

ui <- navbarPage(
  "Waitress on nav",
  tabPanel(
    "home",
    use_waitress(),
    plotOutput("plot")
    )
)

server <- function(input, output){
  
  waitress <- call_waitress("nav", theme = "overlay") # call the waitress
  
  output$plot <- renderPlot({
    waitress$start() # start the waitress
    
    dat <- vector()
    
    for(i in 1:10){
      waitress$increase(10) # increase by 10%
      Sys.sleep(.5)
      dat <- c(dat, sample(1:100, 1))
    }
    
    hist(dat)
    waitress$hide() # hide when done
	})

}

shinyApp(ui, server)
```

![](_assets/img/waitress-nav.gif)

### Page

If you do not specify a selector to `call_waitress` then it is applied to the whole page. Note that you can change the color of the waitress in `use_waitress`.

```r
library(shiny)
library(waiter)

ui <- fluidPage(
  use_waitress(color = "#7F7FFF"),
  h2("waitress on entire page"),
  actionButton("load", "load")
)

server <- function(input, output){
  
  waitress <- Waitress$new(theme = "overlay-percent") # call the waitress
  
  observeEvent(input$load, {
    waitress$
      start()$
      auto(percent = 5, ms = 150) # increase by 5 percent every 150 milliseconds
      Sys.sleep(3.5)
    waitress$hide()
	})

}

shinyApp(ui, server)
```

![](_assets/img/waitress-whole-page.gif)
