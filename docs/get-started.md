# Get Started

The waiter package comes with a few members of staff but the core member is the waiter which will let you show full page or partial loading screens in your shiny application.

## How to

It's fairly straightforward

1. Place `use_waiter` anywhere in your UI.
2. Create a waiter
3. Show the waiter
4. Hide the waiter

> [!TIP]
> Make sure you include the dependencies with `use_waiter` or nothing will work.

## Examples

A basic example could be like this, upon clicking a button we display a full page loading screen.

``` r
library(shiny)
library(waiter)
 
ui <- fluidPage(
  use_waiter(), # include dependencies
  actionButton("show", "Show loading for 3 seconds")
)

server <- function(input, output, session){
  # create a waiter
  waiter <- Waiter$new()

  # on button click
  observeEvent(input$show, {
    w$show()
    Sys.sleep(3)
    w$hide()
  })
}

shinyApp(ui, server)
```

![](_assets/img/waiter.gif)

By default the waiter will show a spinner, 1) you can choose from more than [100 spinners](https://shiny.john-coene.com/waiter/) 2) you are by no means limited to a spinner since the `html` argument takes any htmltools or shiny tag. Below we change the spinner, add some text and change the background color.

``` r
library(shiny)
library(waiter)

waiting_screen <- tagList(
  spin_flower(),
  h4("Cool stuff loading...")
) 

ui <- fluidPage(
  use_waiter(), # include dependencies
  actionButton("show", "Show loading for 3 seconds")
)

server <- function(input, output, session){
  observeEvent(input$show, {
    waiter_show(html = waiting_screen, color = "black")
    Sys.sleep(3) # do something that takes time
    waiter_hide()
  })
}

shinyApp(ui, server)
```

![](_assets/img/waiter-text.gif)

Visit the [full waiter documentation](/waiter) to learn how to further customise your waiting screen, have it appear on parts of the application, show loading bars, and more.
