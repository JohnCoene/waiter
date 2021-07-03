# Advanced

## No server

_This feature was added in version 0.2.3._

Most examples have made use of the R server to some degree. 
I prefer such code, though there is more of it, it seems 
much clearer; UI code tends to be dirtier than server-side 
code.

However, the server itself is often not needed for what waiter
wants to achieve. The function `triggerWaiter` does this 
(in my opinion, at the expense of more readable code).

```r
library(shiny)
library(waiter)

ui <- fluidPage(
  useWaiter(),
  triggerWaiter(
    actionButton(
      "generate",
      "Generate Plot"
    ),
    id = "plot" # hide when plot renders
  ),
  plotOutput("plot")
)

server <- function(input, output){

  output$plot <- renderPlot({
    input$generate
    Sys.sleep(5)
    plot(runif(50))
  })

}

shinyApp(ui, server)
```

## Events

The waiter also fires events in shiny when:

1. The loading screen is _shown_
2. The loading screen is _hidden_

These events are set to `id` that the waiter overlays followed by `_waiter_shown` or `_waiter_hidden`.

```r
library(shiny)
library(waiter)

ui <- fluidPage(
  useWaiter(),
  actionButton("draw", "draw plot"),
  plotOutput("plot")
)

server <- function(input, output){

  # sets: 
  # input$plot_waiter_shown
  # input$plot_waiter_hidden
  w <- Waiter$new(id = "plot")

  dataset <- reactive({
    input$draw

    w$show()

    on.exit({
      w$hide()
    })

    Sys.sleep(3)  

    runif(100)
  })

  output$plot <- renderPlot(plot(dataset()))

  observeEvent(input$plot_waiter_hidden, {
    print(input$plot_waiter_hidden)
  })

  observeEvent(input$plot_waiter_shown, {
    print(input$plot_waiter_shown)
  })

}

shinyApp(ui, server)
```

If the waiter is not overlayed upon any element and is used full screen then the events `waiter_shown` and `waiter_hidden` are fired.