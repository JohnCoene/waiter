
<!-- README.md is generated from README.Rmd. Please edit that file -->

<div data-align="center">

<img src="./man/figures/logo.png" height = "200px" />

Loading screens for Shiny

<!-- badges: start -->

![R-CMD-check](https://github.com/JohnCoene/waiter/workflows/R-CMD-check/badge.svg)
[![CRAN
status](https://www.r-pkg.org/badges/version/waiter)](https://CRAN.R-project.org/package=waiter)
<!-- badges: end -->

[Website](https://waiter.john-coene.com) |
[Demo](https://shiny.john-coene.com/waiter/) | [Get
Started](https://waiter.john-coene.com/#/waiter/intro) | [Cheat
Sheet](https://waiter.john-coene.com/#/cheatsheet)

</div>

The waiter lets you programmatically show and hide partial or full page
loading screens with spinners or loading bars to keep your users
patiently waiting as you load or compute fancy things.

|      Feature      |           Waiter           |          Waitress          |          Hostess           |         Attendant          |
| :---------------: | :------------------------: | :------------------------: | :------------------------: | :------------------------: |
|   Progress Bar    |    :heavy\_check\_mark:    |    :heavy\_check\_mark:    |    :heavy\_check\_mark:    |    :heavy\_check\_mark:    |
|    Full Screen    |    :heavy\_check\_mark:    |    :heavy\_check\_mark:    | :heavy\_multiplication\_x: | :heavy\_multiplication\_x: |
| Works with waiter |    :heavy\_check\_mark:    | :heavy\_multiplication\_x: |    :heavy\_check\_mark:    |    :heavy\_check\_mark:    |
|      Spinner      |    :heavy\_check\_mark:    | :heavy\_multiplication\_x: | :heavy\_multiplication\_x: | :heavy\_multiplication\_x: |
|     Updatable     |    :heavy\_check\_mark:    | :heavy\_multiplication\_x: | :heavy\_multiplication\_x: |    :heavy\_check\_mark:    |
|   Notifications   | :heavy\_multiplication\_x: |    :heavy\_check\_mark:    | :heavy\_multiplication\_x: | :heavy\_multiplication\_x: |

## Examples

Below are examples of applications that use the package. Consult
the [website](https://waiter.john-coene.com) for more.

## Waiter

To use the waiter:

1.  Include `useWaiter` in your UI.
2.  Trigger `waiter_show` to show the waiting screen.
3.  Eventually trigger `waiter_hide` to hide the loading screen.

<!-- end list -->

``` r
library(shiny)
library(waiter)

ui <- fluidPage(
  useWaiter(), # include dependencies
  actionButton("show", "Show loading for 3 seconds")
)

server <- function(input, output, session){

  observeEvent(input$show, {

    waiter_show( # show the waiter
      html = spin_fading_circles() # use a spinner
    )

    Sys.sleep(3) # do something that takes time
    
    waiter_hide() # hide the waiter
  })
  
}

shinyApp(ui, server)
```

![](man/figures//waiter-basic.gif)

The waiter includes more options to customise the spinner, the
background, show the waiter on load, etc.

### Waitress

To use the waitress:

1.  Include `use_waitress` in your UI.
2.  Initialise a waitress from the `Waitress` object with the `new`
    method.
3.  You must then call the `start`.
4.  On the waitress object use the `increase` method to increase the
    progress bar.
5.  Use the `hide` method when done.

<!-- end list -->

``` r
library(shiny)
library(waiter)

ui <- fluidPage(
  useWaitress(),
  p("App content")
)

server <- function(input, output){

  # call the waitress
  waitress <- Waitress$
    new(theme = "overlay-percent")$
    start() # start

  for(i in 1:10){
    waitress$inc(10) # increase by 10%
    Sys.sleep(.3)
  }

  # hide when it's done
  waitress$close() 

}

shinyApp(ui, server)
```

![](man/figures//waitress-basic.gif)

There are more options to the waitress, you can have it overlay any
element (such as the navbar), automatically increment it, etc.

## Get it

You can install waiter from
[CRAN](https://CRAN.R-project.org/package=waiter).

``` r
install.packages("waiter")
```

Or the development version from Github with:

``` r
install.packages("remotes")
remotes::install_github("JohnCoene/waiter")
```

Please note that the ‘waiter’ project is released with a [Contributor
Code of Conduct](https://waiter.john-coene.com/#/coc). By contributing
to this project, you agree to abide by its terms.
