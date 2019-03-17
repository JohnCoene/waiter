[![Travis build status](https://travis-ci.org/JohnCoene/waiter.svg?branch=master)](https://travis-ci.org/JohnCoene/waiter)

<img src="man/figures/logo.png" align = "right" height = "170px" />

# waiter

Loading screens for Shiny; programatically show and hide partial or full page loading screens, comes with multiple spinners.

* [Features](#features)
* [Installation](#installation)
* [How-to](#how-to)
* [Demos](#demos)
* [Examples](#examples)

## Features

The {waiter} package has evolved since version `0.0.1` and now includes:

* A waiter, splash loading screens.
* A waitress, loading bars on on elements or whole screen.
* A butler, configurable loading bar.

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

See `?waitress` for the documentation.

### butler

1. Place `use_butler` anywhere in your UI.
2. Call `show_butler` in your server.
3. Don't forget to programatically hide the loading screen with `hide_butler`.

You can, optionally, configure the butler with `config_butler`.

## Demos

The demos below are also on the [website](https://shiny.john-coene.com/waiter/).

### waiter

Browse the spinners locally with `waiter::browse_waiters()`

![](man/figures/waiter.gif)

### waitress

Browse waitresses locally with `waiter::browse_waitresses()`

![](man/figures/waitress.gif)

### butler

![](man/figures/butler.gif)

## Examples

### waiter

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

### waitress

The waitress can be applied to a specific element or the whole page. Note that `call_waitress` takes a CSS selector, so if you want to apply it to a plot use `#plotId`.

```r
library(shiny)
library(waiter)

ui <- fluidPage(
	use_waitress(),
	plotOutput("plot", width = 400)
)

server <- function(input, output){

	waitress <- call_waitress("#plot") # call the waitress

	output$plot <- renderPlot({
		start_waitress(waitress) # start the waitress

		dat <- vector()

		for(i in 1:10){
			increase_waitress(waitress, 10) # increase by 10%
			Sys.sleep(.5)
			dat <- c(dat, sample(1:100, 1))
		}

		hist(dat)
		hide_waitress(waitress) # hide when done
	})

}

shinyApp(ui, server)
```

Because the waitress takes a seclector, we can apply it to different parts of the page, using a class or any other selector, like the `nav`.

```r
library(shiny)
library(waiter)

ui <- navbarPage(
	"Waitress on nav",
	tabPanel(
		"home",
		use_waitress(),
		plotOutput("plot")
	)
)

server <- function(input, output){

	waitress <- call_waitress("nav", theme = "overlay") # call the waitress

	output$plot <- renderPlot({
		start_waitress(waitress) # start the waitress

		dat <- vector()

		for(i in 1:10){
			increase_waitress(waitress, 10) # increase by 10%
			Sys.sleep(.5)
			dat <- c(dat, sample(1:100, 1))
		}

		hist(dat)
		hide_waitress(waitress) # hide when done
	})

}

shinyApp(ui, server)
```

If you do not specify a selector to `call_waitress` then it is applied to the whole page. Note that you can change the color of the waitress in `use_waitress`.

```r
library(shiny)
library(waiter)

ui <- fluidPage(
	use_waitress(color = "#7F7FFF"),
	h2("waitress on entire page"),
	actionButton("load", "load")
)

server <- function(input, output){

	waitress <- call_waitress(theme = "overlay-percent") # call the waitress

	observeEvent(input$load, {
		waitress %>%
			start_waitress() %>%  
			auto_waitress(percent = 5, ms = 150) # increase by 5 percent every 150 milliseconds
		Sys.sleep(3.5)
		hide_waitress(waitress)
	})

}

shinyApp(ui, server)
```

### butler

Basic example.

```r
library(shiny)
library(butler)

ui <- fluidPage(
	use_butler(),
	br(),
	actionButton("show", "show butler"),
	actionButton("hide", "hide butler")
)

server <- function(input, output){

	observeEvent(input$show,{
		show_butler()
	})

	observeEvent(input$hide,{
		hide_butler()
	})

}

shinyApp(ui, server)
```

You can configure the butler to look differently.

```r
library(shiny)
library(butler)

ui <- fluidPage(
	use_butler(),
	br(),
	br(),
	actionButton("show", "show butler"),
	actionButton("hide", "hide butler")
)

server <- function(input, output){

	config_butler(
		thickness = 10,
		colors = list(
			"0" = "red",
			".4" = "white",
			"1" = "blue"
		)
	)

	observeEvent(input$show,{
		show_butler()
	})

	observeEvent(input$hide,{
		hide_butler()
	})

}

shinyApp(ui, server)
```