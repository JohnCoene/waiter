<div align="center">

<img src="./man/figures/logo.png" height = "200px" />

# waiter

Loading screens for Shiny

[![Travis build status](https://travis-ci.org/JohnCoene/waiter.svg?branch=master)](https://travis-ci.org/JohnCoene/waiter)
[![AppVeyor build status](https://ci.appveyor.com/api/projects/status/github/JohnCoene/waiter?branch=master&svg=true)](https://ci.appveyor.com/project/JohnCoene/waiter)

[Website](https://waiter.john-coene.com) | [Demo](https://shiny.john-coene.com/waiter/) | [Get Started](https://waiter.john-coene.com/#/waiter)

</div>

The waiter lets you programmatically show and hide partial or full page loading screens with spinners or loading bars to keep your users patiently waiting as you load or compute fancy things.

## Example

Below are simple examples of an applications that use the package, consult the [website](https://waiter.john-coene.com) for more.

## Waiter

To use the waiter:

1. Include `use_waiter` in your UI.
2. Trigger `show_waiter` to show the waiting screen.
3. Eventually trigger `hide_waiter` to hide the loading screen.

```r
library(shiny)
library(waiter)

ui <- fluidPage(
  use_waiter(), # include dependencies
  show_waiter_on_load(),
  actionButton("show", "Show loading for 3 seconds")
)

server <- function(input, output, session){

  observeEvent(input$show, {

    show_waiter( # show the waiter
      spin_fading_circles() # use a spnner
    )

    Sys.sleep(3) # do something that takes time
    
    hide_waiter() # hide the waiter
  })
  
}

shinyApp(ui, server)
```

![](man/figures//waiter-basic.gif)

The waiter includes more options to customise the spinner, the background, show the waiter on load, etc.

### Waitress

To use the waitress:

1. Include `use_waitress` in your UI.
2. Initialise a waitress from the `Waitress` object with the `new` method.
3. You must then call the `start`.
4. On the waitress object use the `increase` method to increase the progress bar.
5. Use the `hide` method when done.

```r
library(shiny)
library(waiter)

ui <- fluidPage(
  use_waitress(),
  p("App content")
)

server <- function(input, output){

  # call the waitress
  waitress <- Waitress$
    new(theme = "overlay-percent")$
    start() # start

  for(i in 1:10){
    waitress$increase(10) # increase by 10%
    Sys.sleep(.3)
  }

  # hide when it's done
  waitress$hide() 

}

shinyApp(ui, server)
```

![](man/figures//waitress-basic.gif)

There are more options to the waitress, you can have it overlay any element (such as the navbar), automagically increment it, etc.

### Butler

If you want a loading bar similar to the waitress above but cannot determine wait time.

1. Include `use_butler` in your UI.
2. Start the progress bar with `show_butler`.
3. Hide the butler with `hide_waiter`.

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

You can further customise the butler.

![](man/figures//butler-basic.gif)

## Get it

You can install waiter from [CRAN](https://CRAN.R-project.org/package=waiter).

```r
install.packages("waiter")
```

Or the development version from Github with:

``` r
install.packages("remotes")
remotes::install_github("JohnCoene/waiter")
```
