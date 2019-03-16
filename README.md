[![Travis build status](https://travis-ci.org/JohnCoene/waiter.svg?branch=master)](https://travis-ci.org/JohnCoene/waiter)

<img src="man/figures/logo.png" align = "right" height = "170px" />

# waiter

Loading screens for Shiny; programatically show and hide a full page loading screen, comes with multiple spinners.

## Installation

Stable version from CRAN:

```r
install.packages("waiter")
```

Development version from Github: 

``` r
# install.packages("remotes")
remotes::install_github("JohnCoene/waiter")
```

## How to

### Waiter

1. Place `use_waiter` anywhere in your UI.
2. Programatically call `show_waiter`.
3. Don't forget to programatically hide the loading screen with `hide_waiter`.

Since version `0.0.2` you can also place `show_waiter_on_load` in your UI, _below_ `use_waiter` in order to show a loading screen prior to the `session` loads, this splash screen is not programatically triggered but is also hidden with `hide_waiter`.

See `?spinners` for a list of all the spinners.

### Waitress

1. Place `use_waitress` anywhere in your UI.
2. Set up the waitress in your server with `call_waitress`.
3. Programatically call `set_waitress`, `increase_waitress`, and `auto_waitress`.
4. Don't forget to programatically hide the loading screen with `hide_waitress`.

## Demos

### Waiter

Browse the spinners locally with: `waiter::browse_waiters()`

![](man/figures/waiter.gif)

## Waitress

Browse waitresses locally with: `waiter::browse_waitresses()`

![](man/figures/waitress.gif)

## Examples

Basic example could be like this.

``` r
library(shiny)
library(waiter)
 
ui <- fluidPage(
  use_waiter(),
  actionButton("show", "Show loading for 3 seconds")
)

server <- function(input, output, session){
  observeEvent(input$show, {
    show_waiter(spin_fading_circles())
    Sys.sleep(3) # do something that takes time
    hide_waiter()
  })
}

if(interactive()) shinyApp(ui, server)
```

Since version `0.0.2` you can show on loading screen on app launch. The loading screen will launch prior to anything, even the Shiny session, thereby avoiding having content flash before the loading screen actually appears. See the example below.

Though this function is not programatically launched it still has to be hidden with `hide_waiter`. Ensure you place `show_waiter_on_load` _after_ `use_waiter`.

```r
library(shiny)
library(waiter)
 
ui <- fluidPage(
  use_waiter(),
  show_waiter_on_load(spin_fading_circles()), # show on load
  h3("Content you will only see after loading screen has disappeared")
)

server <- function(input, output, session){
  Sys.sleep(5) # do something that takes time
  hide_waiter()
}

if(interactive()) shinyApp(ui, server)
```

How it is used in [chirp.sh](https://chirp.sh), where it is combined with [pushbar](https://github.com/JohnCoene/pushbar) to get rid of the navbar alltogether.

```r
library(shiny)
library(waiter)

ui <- navbarPage(
  "example",
  id = "tabs",
    header = list(
        tags$style("nav{display:none;}") # hide navbar
    ),
  tabPanel(
    "home",
    use_waiter(),
    br(),
    actionButton("switch", "Go to networks tab")
  ),
  tabPanel(
    "networks",
    h3("Hello!")
  )
)

server <- function(input, output, session){
  observeEvent(input$switch, {

    # show loading
    show_waiter(
      tagList(
        spin_folding_cube(),
        span("Loading ...", style = "color:white;")
      )
    )
    # long~ish computation
    Sys.sleep(3)

    # send to "hidden" tab
    updateTabsetPanel(session = session, inputId = "tabs", selected = "networks")

    # hide loading
    hide_waiter()
  })
}

shinyApp(ui, server)
```
