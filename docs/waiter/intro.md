# The Waiter

The waiter package comes with a few members of staff but the core member is the waiter which will let you show full page or partial loading screens in your shiny application.

<Note type='danger'>
The long-term plan is to deprecate snake_case UI functions 
in favour of camelCase to align with the rest
of shiny UI code (it's `selectInput` not `select_input`).
e.g.: `use_waiter` will be deprecated in
favour  `useWaiter`.

This only applies to code used in the _Shiny UI._ 
Server-side functions will remain snake_case.
</Note>

## Preview

You can preview the spinners in the browser or RStudio viewer with the `preview_spinner` function like so:

```r
preview_spinner(spin_4())
```

![](_assets/img/waiter-preview.png)

## Automatic

Simply place `autoWaiter` in your UI.

```r
library(shiny)
library(waiter)

ui <- fluidPage(
	autoWaiter(),
	actionButton(
		"trigger",
		"Render"
	),
	plotOutput("plot"),
	plotOutput("plot2")
)

server <- function(input, output){
	output$plot <- renderPlot({
		input$trigger
		Sys.sleep(3)
		plot(cars)
	})

	output$plot2 <- renderPlot({
		input$trigger
		Sys.sleep(5)
		plot(runif(100))
	})
}

shinyApp(ui, server)
```

## How to

It's fairly straightforward

1. Place `useWaiter` anywhere in your UI.
2. Create a waiter
3. Show the waiter
4. Hide the waiter

<Note type='tip'>
Always make sure you include the dependencies with `useWaiter` or nothing will work.
</Note>


## Basic

A basic example could be like this, upon clicking a button we display a full page loading screen.

``` r
library(shiny)
library(waiter)
 
ui <- fluidPage(
  useWaiter(), # include dependencies
  actionButton("show", "Show loading for 3 seconds")
)

server <- function(input, output, session){
  # create a waiter
  w <- Waiter$new()

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

## Customise

By default the waiter will show a spinner, 1) you can choose from more than [100 spinners](https://shiny.john-coene.com/waiter/) 2) you are by no means limited to a spinner since the `html` argument takes any htmltools or shiny tag. Below we change the spinner, add some text and change the background color.

``` r
library(shiny)
library(waiter)

waiting_screen <- tagList(
  spin_flower(),
  h4("Cool stuff loading...")
) 

ui <- fluidPage(
  useWaiter(), # include dependencies
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

Visit the [full waiter documentation](/waiter) to learn how 
to further customise your waiting screen, have it appear 
on parts of the application, show loading bars, and more.
