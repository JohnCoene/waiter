# The Butler

The butler is ideal when you cannot assess loading time, the butler is technically infinite.

## How to

1. Place `use_butler` anywhere in your UI.
2. Call `show_butler` in your server.
3. Don't forget to programatically hide the loading screen with `hide_butler`.

You can, optionally, configure the butler with `config_butler`.

> [!TIP]
> Make sure you include the dependencies with `use_butler`.

## Examples

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

![](_assets/img/butler-basic.gif)

You can configure the butler to look differently.

```r
library(shiny)
library(butler)

ui <- fluidPage(
  use_butler(),
  br(), br(),
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

![](_assets/img/butler-custom.gif)
