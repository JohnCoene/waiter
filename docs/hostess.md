# The Hostess

The hostess is an addition of version `0.0.7` (currently only on Github).

The hostess can be used on its own but you likely will want to use it with the waiter. The hostess brings loading bars to the loading screen: reflect the progress made in the back end.

## How to

Note the hostess can work with the waiter, see examples.

1. Place `use_hostess` anywhere in your UI.
2. Place a `hostess_loader` where you want the bar to show.
3. Call `Hostess$new()` in your server to launch the hostess.
4. Increase the hostess with `Hostess$set`.

See `?hostess` for the documentation.

> [!WARNING]
> Make sure you include the dependencies with `use_hostess`.

## Examples

Initialise the hostess with `Hostess$new()` to which you pass the id of the `hostess_loader` you are using, then increment it with the `set` method. Note that when used without the waiter one should set `with_waiter` to `FALSE`.

```r
library(shiny)
library(waiter)

ui <- fluidPage(
  use_hostess(), # include dependencies
  hostess_loader("load", with_waiter = FALSE)
)

server <- function(input, output){
  
  # initialise
  hostess <- Hostess$new("load")
  
  # increment
  for(i in 1:10){
    Sys.sleep(runif(1)) # random sleep
    hostess$set(i * 10)
  }
}

shinyApp(ui, server)
```

![](_assets/img/hostess.gif)

You can of course use it together with `waiter` by playing the `hostess_spinner` in the `show_waiter*` function.

```r
library(shiny)
library(waiter)

ui <- fluidPage(
  use_waiter(),
  use_hostess(),
  show_waiter_on_load(
    color = "#f7fff7",
    hostess_loader(
      "loader", 
      preset = "circle", 
      text_color = "black",
      class = "label-center"
    )
  )
)

server <- function(input, output){
  hostess <- Hostess$new("loader")

  for(i in 1:10){
    Sys.sleep(runif(1) / 2)
    hostess$set(i * 10)
  }
  
  hide_waiter()
}

shinyApp(ui, server)
```

![](_assets/img/hostess-adv.gif)

The Hostess is powered by [loadinBar.js](https://loading.io/progress/) which comes with tons of styling options to pass to `hostess_loader`, check them out!
