# Customise

## Color

Waiter sets the `color` argument in CSS, therefore hex values (e.g.: `#ffffff`), rgb (e.g.: `rgb(255, 255, 255)`), a string (e.g.: `white`) as well as rgba (e.g.: `rgb(255, 255, 255, .5)`) are valid and must be passed as string, e.g.: `"rgba(255,255,255,.5)"`. There is a convenience function called `transparent` which sets the background as transparent but can be set to a more opaque white~ish color with the `alpha` parameter.

```r {highlight: [5,'13-17',22,26]}
library(shiny)
library(waiter)

ui <- fluidPage(
  useWaiter(),
  actionButton("draw", "draw plot"),
  plotOutput("plot")
)

server <- function(input, output){

  # transparent~ish background
  w <- Waiter$new(
    id = "plot",
    html = spin_3(), 
    color = transparent(.5)
  )

  dataset <- reactive({
    input$draw

    w$show()

    Sys.sleep(3)   

    runif(100)
  })

  output$plot <- renderPlot(plot(dataset()))

}

shinyApp(ui, server)
```

![](_assets/img/waiter-transparent.gif)

## Theming

In the development version (from Github) you can now easily create themes for your loading screens. You can also override that in individual waiter if needed.

```r {highlight: [5,8,17,21]}
library(shiny)
library(waiter)

# set a theme
waiter_set_theme(html = spin_3(), color = "darkblue")

ui <- fluidPage(
  useWaiter(),
  actionButton("show", "Show loading with updates"),
  plotOutput("plot1"),
  plotOutput("plot2")
)

server <- function(input, output, session){
  
  # the theme is automatically applied
  w <- Waiter$new(c("plot1", "plot2"))

  dataset <- reactive({
    input$show
    w$show()
    Sys.sleep(3)
    hist(runif(100))
  })

  output$plot1 <- renderPlot({plot(dataset())})
  output$plot2 <- renderPlot({plot(dataset())})
}

shinyApp(ui, server)
```

![](_assets/img/waiter-theme.gif)

## CSS

The overlay that waiter places (with background color) bears the `waiter-overlay` class, the content (spinner and/or text) is placed within it in a `<div>` with class `waiter-overlay-content`.

This is useful to know if you want to customise the default appearance, e.g.: placement of the spinner.

```r {highlight: [5,'6-12',16,24,27,29,33,36,38]}
library(shiny)
library(waiter)

ui <- fluidPage(
  useWaiter(), # include dependencies
  tags$style(
    ".waiter-overlay-content{
      position: absolute;
      top: 30px; /*30 pixels from the top*/
      left: 48%; /*48% from the left*/
    }"
  ),
  actionButton("showFull", "Show full screen"),
  actionButton("showPartial", "Show partial"),
  div(
    id = "hello", 
    style = "width:400px;height:500px;",
    h4("This could be a chart of whatever")
  )
)

server <- function(input, output, session){
  # partial
  w1 <- Waiter$new("hello")

  observeEvent(input$showPartial, {
    w1$show()
    Sys.sleep(4)
    w1$hide()
  })

  # full screen
  w2 <- Waiter$new()

  observeEvent(input$showFull, {
    w2$show()
    Sys.sleep(4)
    w2$hide()
  })
}

shinyApp(ui, server)
```

![](_assets/img/waiter-css.png)