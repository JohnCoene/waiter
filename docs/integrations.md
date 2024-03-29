# Integrations

Intergrating waiter with various frameworks or Shiny features.

## Modules

Remember to use the namespace when specifying an `id`.

```r {highlight: [14,18,25]}
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
  useWaiter(),
  plot_mod_ui("plot1"),
  plot_mod_ui("plot2")
)

server <- function(input, output, session) {
  callModule(plot_mod, "plot1")
  callModule(plot_mod, "plot2")
}

shinyApp(ui, server)
```

## Promises

Waiter does not work within a promise so call it before.

```r {highlight: [8,13,21]}
library(shiny)
library(waiter)
library(future)
library(promises)
plan(multiprocess)

ui <- fluidPage(
  useWaiter(),
  plotOutput("plot")
)

server <- function(input, output){
  w <- Waiter$new("plot")

  dataset <- reactive({
    Sys.sleep(3)
    runif(100)
  })

  output$plot <- renderPlot({
    w$show()
    dat <- dataset()
    future(dat) %...>% 
      plot()
  })
}

shinyApp(ui, server)
```

## bs4Dash

bs4Dash comes with a nice preloader, see `preloader` argument of `dashboardPage` function.

```r {highlight: [8]}
library(shiny)
library(bs4Dash)
library(waiter)

ui <- dashboardPage(
  title = "Waiter Preloader",
  fullscreen = TRUE,
  preloader = list(html = spin_1(), color = "#333e48"),
  header = bs4DashNavbar(
    title = "Home",
    compact = TRUE
  ),
  sidebar = bs4DashSidebar(
    collapsed = FALSE,
    bs4SidebarMenu(
      bs4SidebarMenuItem(
        text = "Waiter",
        tabName = "Waiter", 
        icon = icon("exclamation")
      )
    )
  ),
  controlbar = dashboardControlbar(),
  footer = dashboardFooter(
    left = "Waiter",
    right = "2021"
  ),
  body = bs4DashBody(
    bs4TabItems(
      bs4TabItem(
        tabName = "Waiter",
        plotOutput("plot")
      )
    )
  )
)

server <- function(input, output){
  Sys.sleep(3)
  output$plot <- renderPlot(plot(cars))
}

shinyApp(ui = ui, server = server)
```

Include `useWaiter` in the body of the dashboard.

```r {highlight: [16,17,22]}
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
      useWaiter(),
      showWaiterOnLoad(spin_3())
    )
  ),
  server = function(input, output) {
    Sys.sleep(3)
    hide_waiter()
  }
)
```

## shinyMobile

Place `useWaiter` inside `f7SingleLayout`.

```r {highlight: [7,13,20]}
library(shiny)
library(waiter)
library(shinyMobile)

ui <- f7Page(
  title = "waiter",
  useWaiter(),
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

## yonder

It's very easy with yonder, place the `useWaiter` anywhere really.

```r {highlight: [5,15,20,22]}
library(yonder)
library(waiter)

ui <- container(
  useWaiter(),
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

## shinydashboard

Place `useWaiter` in `dashboardBody`.

```r {highlight: ['5-8',14,15,22,26,29,31]}
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
    useWaiter(),
    waiterShowOnLoad(spinner), # will show on load
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

To display the waiter in shinydashboard's content section (excluding the menu to the left) a minor change is required. The content section does not have an id for waiter to reference, we therefore place a snippet of javascript which gives that `<section>` and id (`waiter-content`).

```r {highlight: ['8-12',28,54,70,78]}
## app.R ##
library(shiny)
library(waiter)
library(shinydashboard)

# add JavaScript to add an id to the <section> tag 
#so we can overlay waiter on top of it
add_id_to_section <- "
$( document ).ready(function() {
  var section = document.getElementsByClassName('content');
  section[0].setAttribute('id', 'waiter-content');
});"

ui <- dashboardPage(
  dashboardHeader(title = "Basic dashboard"),
  dashboardSidebar(
    sidebarMenu(
      id = "tabs", # add id to pick up events server side with input$tabs
      menuItem("Dashboard", tabName = "dashboard", icon = icon("dashboard")),
      menuItem("Widgets", tabName = "widgets", icon = icon("th"))
    )
  ),
  dashboardBody(
    # import our custom JavaScript
    tags$head(
      tags$script(add_id_to_section)
    ),
    useWaiter(),
    tabItems(
      # First tab content
      tabItem(
        tabName = "dashboard",
        div(
          # force minimum height of DIV otherwise overlayed waiter is too small
          # you should not need this
          style = "min-height: 100vh;", 
          uiOutput("tab1")
        )
      ),

      # Second tab content
      tabItem(
        tabName = "widgets",
        div(
          style = "min-height: 100vh;", 
          uiOutput("tab2")
        )
      )
    )
  )
)

server <- function(input, output) {
  w <- Waiter$new("waiter-content")

  # vector to track already loaded tabs
  loaded_tabs <- c()
  observeEvent(input$tabs, {
    # only show loading screen once
    if(!input$tabs %in% loaded_tabs){
      # add tab to loaded
      loaded_tabs <<- c(loaded_tabs, input$tabs)
      w$show()
    }
  })

  output$tab1 <- renderUI({
    Sys.sleep(3)

    w$hide()

    h2("Dashboard rendered!")
  })

  output$tab2 <- renderUI({
    Sys.sleep(3)

    w$hide()

    h2("Widgets rendered!")
  })
}

shinyApp(ui, server)
```

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
