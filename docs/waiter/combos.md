# Combos

The waiter works hand-in-hand with the `steward`, the `butler`, the `waitress` and the `hostess`. The former will let you animate the background of your loading screen while the latter will let you show loading bars on the loading screen.

There is an online demo with a list of all [100+ spinners](https://shiny.john-coene.com/waiter/) available, you can also see the list of available spinners in R with `?spinners`.

## With Hostess

The API of the hostess has been somewhat improved since its initial release; the "loader" can be created from the R6Class itself, which is the recommended approach as it simplifies much of the workflow.

<Note type='tip'>
Make sure you include the dependencies with <code>useHostess</code>
</Note>

The hostess-waiter team will work as layers over parts of the application.

```r
library(shiny)
library(waiter)
 
ui <- fluidPage(
  useWaiter(), 
  useHostess(),
  actionButton("draw", "plot"),
  plotOutput("plot")
)

server <- function(input, output, session){
  # create the waitress
  hostess <- Hostess$new()

  # set the loader as html
  waiter <- Waiter$
    new(
      "plot", 
      html = hostess$get_loader(stroke_color = "#ffffff")
    )

  dataset <- reactive({
    input$draw
    waiter$show()

    for(i in 1:10){
      hostess$set(i * 10)
      Sys.sleep(.3)
    }

    runif(50)
  })

  output$plot <- renderPlot(plot(dataset()))
}

shinyApp(ui, server)
```

![](_assets/img/hostess-waiter.gif)

The approach above might get too wordy when one wants to use a hostess on multiple waiting screens. Take for instance the application above but with more than one plot.

```r
library(shiny)
library(waiter)

ui <- fluidPage(
  useWaiter(), 
  useHostess(),
  actionButton("draw", "plot"),
  fluidRow(
    column(4, plotOutput("plot1")),
    column(4, plotOutput("plot2")),
    column(4, plotOutput("plot3"))
  )
)

server <- function(input, output, session){
  # create a common loader
  loader <- hostess_loader(stroke_color = "red")

  # create the waitress and set loader
  hostess1 <- Hostess$new()$set_loader(loader)
  hostess2 <- Hostess$new()$set_loader(loader)
  hostess3 <- Hostess$new()$set_loader(loader)

  # set the loader as html
  waiter <- Waiter$new(
    c("plot1", "plot2", "plot3"),
    html = list(
      hostess1$get_loader(),
      hostess2$get_loader(),
      hostess3$get_loader()
    )
  )

  dataset <- reactive({
    input$draw
    waiter$show()

    for(i in 1:10){
      hostess1$set(i * 10)
      hostess2$set(i * 10)
      hostess3$set(i * 10)
      Sys.sleep(.3)
    }

    runif(50)
  })

  output$plot1 <- renderPlot(plot(dataset()))
  output$plot2 <- renderPlot(plot(dataset()))
  output$plot3 <- renderPlot(plot(dataset()))
}

shinyApp(ui, server)
```

![](_assets/img/hostess-common.gif)

## With Steward

To use the steward, simply add `use_steward`, it takes a few arguments to customise its look and feel.

<Note type='tip'>
Make sure you include the dependencies with <code>useSteward</code>.
</Note>

```r
library(shiny)
library(waiter)
 
ui <- fluidPage(
  useWaiter(), 
  useSteward(),
  h3("Content you will only see after loading screen has disappeared"),
  waiterShowOnLoad(spin_fading_circles()) 
)

server <- function(input, output, session){
  Sys.sleep(10) # do something that takes time
  waiter_hide()
}

shinyApp(ui, server)
```

![](_assets/img/waiter-steward.gif)

## With Garçon

Then again don't forget to add the dependency by placing `use_garcon` in the UI. Initialise the garçon then add progress by setting the percentage with the `set` method where you select the image to animate by passing its id.

<Note type='tip'>
Make sure you include the dependencies with <code>useGarcon</code>.
</Note>

```r
library(shiny)
library(waiter)

ui <- fluidPage(
  useGarcon(),
  useWaiter(),
  waiterShowOnLoad(
    tags$img(
      src="https://waiter.john-coene.com/_assets/img/logo.png", 
      height=200, 
      id = "myImage" # set id
    )
  )
)

server <- function(input, output){
  g <- Garcon$new("myImage", filter = "opacity")

  for(i in 1:10){
    Sys.sleep(runif(1))
    g$set(i * 10)
  }

  waiter_hide()
}

shinyApp(ui, server)
```

![](_assets/img/waiter-garcon.gif)

There are a number of filters available.