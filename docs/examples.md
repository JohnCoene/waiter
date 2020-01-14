# Examples

## modules

Remember to use the namespace.

```r
library(shiny)
library(waiter)

plot_mod_ui <- function(id) {
  ns <- NS(id)
  tagList(
    actionButton(ns("draw"), "Render"),
    plotOutput(ns("plot"))
  )
}

plot_mod <- function(input, output, session) {
  ns <- session$ns
  w <- Waiter$new(ns("plot")) # use the namespace

  output$plot <- renderPlot({
    input$draw
    w$show()
    Sys.sleep(3)
    hist(runif(100))
  })
}

ui <- fluidPage(
  use_waiter(),
  plot_mod_ui("plot1"),
  plot_mod_ui("plot2")
)

server <- function(input, output, session) {
  callModule(plot_mod, "plot1")
  callModule(plot_mod, "plot2")
}

shinyApp(ui, server)
```

## bs4Dash

Include `use_waiter` in the body of the dashboard.

```r
library(shiny)
library(waiter)
library(bs4Dash)

shiny::shinyApp(
  ui = bs4DashPage(
    old_school = FALSE,
    sidebar_collapsed = FALSE,
    controlbar_collapsed = FALSE,
    title = "Basic Dashboard",
    navbar = bs4DashNavbar(),
    sidebar = bs4DashSidebar(),
    controlbar = bs4DashControlbar(),
    footer = bs4DashFooter(),
    body = bs4DashBody(
      use_waiter(),
      show_waiter_on_load(spin_3())
    )
  ),
  server = function(input, output) {
    Sys.sleep(3)
    hide_waiter()
  }
)
```

## shinyMobile

Place `use_waiter` inside `f7SingleLayout`.

```r
library(shiny)
library(waiter)
library(shinyMobile)

ui <- f7Page(
  title = "waiter",
  use_waiter(),
  f7SingleLayout(
    navbar = f7Navbar(
      title = "waiter",
      hairline = TRUE,
      shadow = TRUE,
      show_waiter_on_load(spin_1())
    )
  )
)

server <- function(input, output){
  Sys.sleep(3)
  hide_waiter()
}

shinyApp(ui, server)
```

## shinydashboard

Place `use_waiter` in `dashboardBody`.

```r
library(shiny)
library(waiter)
library(shinydashboard)

spinner <- tagList(
  spin_chasing_dots(),
  span("Loading stuff...", style="color:white;")
)

ui <- dashboardPage(
  dashboardHeader(),
  dashboardSidebar(),
  dashboardBody(
    use_waiter(),
    waiter_show_on_load(spinner), # will show on load
    actionButton("show", "Show loading")
  )
)

server <- function(input, output) {

  w <- Waiter$new()
  
  # give time for wait screen to show
  Sys.sleep(3) 
  hide_waiter()

  observeEvent(input$show, {
    w$show(spinner)
    Sys.sleep(3) # give time for wait screen to show
    w$hide()
  })

}

shinyApp(ui, server)
```

## yonder

It's very easy with yonder, place the `use_waiter` anywhere really.

```r
library(yonder)

ui <- container(
  use_waiter(),
  buttonInput(
    id = "button",
    label = "Render"
  ),
  plotOutput("plot")
)

server <- function(input, output){

  w <- Waiter$new()

  dataset <- reactive({
    input$button
    
    w$show()
    Sys.sleep(3) # give time for wait screen to show
    w$hide()
    runif(100)
  })

  output$plot <- renderPlot(plot(dataset()))

}

shinyApp(ui, server)
```