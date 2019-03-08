# waiter

Loading screens for Shiny; programatically show and hide a full page loading screen, comes with multiple spinners.

## Installation

``` r
# install.packages("remotes")
remotes::install_github("JohnCoene/chirp")
```

## Example

``` r
library(shiny)
library(waiter)
 
ui <- fluidPage(
  use_waiter(),
  actionButton("show", "Show loading for 5 seconds")
)

server <- function(input, output, session){
  observeEvent(input$show, {
    show_waiter(
      tagList(
        spin_fading_circles(),
        "Loading ..."
      )
    )
    Sys.sleep(3)
    hide_waiter()
  })
}

if(interactive()) shinyApp(ui, server)
```

