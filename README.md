<div align="center">

<img src="./man/figures/logo.png" height = "200px" />

# waiter

Loading screens for Shiny; programmatically show and hide partial or full page loading screens with spinners or loading bars.

[![Travis build status](https://travis-ci.org/JohnCoene/waiter.svg?branch=master)](https://travis-ci.org/JohnCoene/waiter)
[![AppVeyor build status](https://ci.appveyor.com/api/projects/status/github/JohnCoene/waiter?branch=master&svg=true)](https://ci.appveyor.com/project/JohnCoene/waiter)

[Website](https://waiter.john-coene.com) | [Demo](https://shiny.john-coene.com/waiter/) | [Get Started](https://waiter.john-coene.com/#/waiter)

</div>

## Example

Below is a simple example of an application that uses waiter, consult the [website](https://waiter.john-coene.com) for more.

1. Include `use_waiter` in your UI.
2. Trigger `show_waiter` to show the waiting screen.
3. Eventually trigger `hide_waiter` to hide the loading screen.

```r
library(shiny)
library(waiter)

ui <- fluidPage(
  use_waiter(), # include dependencies
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
