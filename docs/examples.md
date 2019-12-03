# Examples

## bs4Dash

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

## Shinydashboard

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
    show_waiter_on_load(spinner), # will show on load
    actionButton("show", "Show loading")
  )
)

server <- function(input, output) {
  
  # give time for wait screen to show
  Sys.sleep(3) 
  hide_waiter()

  observeEvent(input$show, {
    show_waiter(spinner)
    Sys.sleep(3) # give time for wait screen to show
    hide_waiter()
  })

}

shinyApp(ui, server)
```