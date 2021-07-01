# The Waiter

The waiter lets you show splash loading screens. 

## Combos

The waiter works hand-in-hand with the `steward` and the `hostess`. The former will let you animate the background of your loading screen while the latter will let you show loading bars on the loading screen.

---

There is an online demo with a list of all [100+ spinners](https://shiny.john-coene.com/waiter/) available, you can also see the list of available spinners in R with `?spinners`.

## Preview

Note that in the latest version you can also preview the spinners in the browser or RStudio viewer with the `preview_spinner` function like so:

```r
preview_spinner(spin_4())
```

![](_assets/img/waiter-preview.png)

## On Load

You can show a loading screen on app launch. The loading screen will launch prior to everything else, even the Shiny session. 

Though this function is not programmatically launched it still has to be hidden with `waiter_hide`. Ensure you place `waiter_show_on_load` after `use_waiter`.

```r
library(shiny)
library(waiter)
 
ui <- fluidPage(
  useWaiter(), 
  waiter_show_on_load(html = spin_fading_circles()),
  h3("Content you will only see after loading screen has disappeared")
)

server <- function(input, output, session){
  Sys.sleep(3) # do something that takes time
  waiter_hide()
}

shinyApp(ui, server)
```

## Preloader

The `waiter_preloader` function shows the full page loading screen when the app is loaded and automatically removes it when all the UI is rendered: only runs once. Thanks to [David Granjon](https://github.com/JohnCoene/waiter/issues/82) for the suggestion.

```r
library(shiny)
library(waiter)

ui <- fluidPage(
  useWaiter(), 
  waiterPreloader(),
  uiOutput("hello")
)

server <- function(input, output, session){
  Sys.sleep(3) 

  output$hello <- renderUI({
    h1("World")
  })
}

shinyApp(ui, server)
```

## On busy

In the development version, not yet on CRAN, one can use `waiter_on_busy` to automatically display the loading screen when the server is busy computing things and automatically remove it when it goes back to idle.

```r
library(shiny)
library(waiter)

ui <- fluidPage(
  useWaiter(),
  waiterOnBusy(),
  actionButton("render", "render"),
  plotOutput("plot")
)

server <- function(input, output){

  output$plot <- renderPlot({
    input$render
    Sys.sleep(2)
    plot(cars)
  })

}

shinyApp(ui, server)
```

![](_assets/img/waiter-busy.gif)

## Dynamic Updates

You can also update the `html` of the waiting screen while it's loading, useful if you want to give users more detailed updates.

```r
library(shiny)
library(waiter)
 
ui <- fluidPage(
  useWaiter(),
  actionButton("show", "Show loading with updates")
)

server <- function(input, output, session){
  # create the waiter
  w <- Waiter$new(html = span("Initialising"))

  msgs <- c("Loading data", "Running model", "Drawing plots")

  observeEvent(input$show, {
    w$show()

    Sys.sleep(2)
    
    for(i in 1:3){
      w$update(html = msgs[i])
      Sys.sleep(2)
    }

    w$hide()
  })
}

shinyApp(ui, server)
```

![](_assets/img/waiter-dynamic.gif)

## Partial

Since version `0.1.0` you are no longer limited to full page loading screens and can show the waiter only only part of the application, whichever part you desire. 

> [!NOTE]
> All the features of the full screen are also available on partial loading screens

Let us demonstrate with a basic Shiny application that includes a single plot which is updated upon clicking an action button. The way we layer the waiter on top of an element is simply by specifying the `id` of said element when we initialise the waiter.

```r
library(shiny)
library(waiter)

ui <- fluidPage(
  useWaiter(),
  actionButton("draw", "draw plot"),
  plotOutput("plot")
)

server <- function(input, output){

  # specify the id 
  w <- Waiter$new(id = "plot")

  dataset <- reactive({
    input$draw

    w$show()

    on.exit({
      w$hide()
    })

    Sys.sleep(3)   

    runif(100)
  })

  output$plot <- renderPlot(plot(dataset()))

}

shinyApp(ui, server)
```

![](_assets/img/waiter-layer1.gif)

## On Render

We can actually further simplify the application above: we do not in fact need to use the `hide` method. By default when specifying an `id` waiter will hide the waiting screen when the element, in our case a plot, is rendered. This applies to plots, tables, htmlwidgets, etc. Below we simplify the app, removing the `hide` method and demonstrate that it works on a `tableOutput` and `htmlwidgets` (a [highcharter](http://jkunst.com/highcharter/) chart in this case). We also show that we can pass multiple ids to the waiter to have it show over multiple elements at once.

```r
library(shiny)
library(waiter)
library(highcharter)

ui <- fluidPage(
  useWaiter(),
  actionButton("draw", "render stuff"),
  fluidRow(
    column(3, tableOutput("table")),
    column(9, highchartOutput("hc"))
  )
)

server <- function(input, output){

  # specify the id 
  w <- Waiter$new(id = c("hc", "table"))

  dataset <- reactive({
    input$draw

    w$show()

    Sys.sleep(3)

    head(cars)
  })

  output$table <- renderTable(dataset())
  output$hc <- renderHighchart({
    hchart(dataset(), "scatter", hcaes(speed, dist))
  })

}

shinyApp(ui, server)
```

![](_assets/img/waiter-layer2.gif)

Note that one might still want to use the `hide` method if one does not layer the waiting screen over a rendered element (if it is not dynamically rendered there is no way for the waiter to know its content has changed).

```r
library(shiny)
library(waiter)

ui <- fluidPage(
  useWaiter(),
  fluidRow(
    column(3, actionButton("draw", "render table")),
    column(
      9, 
      id = "waiter",
      style = "height:100vh;",
      h1("The plot"),
      plotOutput("plot")
    )
  )
)

server <- function(input, output){

  # specify the id 
  w <- Waiter$new(id = "waiter")

  dataset <- reactive({
    input$draw

    w$show()

    Sys.sleep(3) 

    w$hide()

    runif(150)
  })

  output$plot <- renderPlot(plot(dataset()))

}

shinyApp(ui, server)
```

![](_assets/img/waiter-layer3.gif)

## Color

Waiter sets the `color` argument in CSS, therefore hex values (e.g.: `#ffffff`), rgb (e.g.: `rgb(255, 255, 255)`), a string (e.g.: `white`) as well as rgba (e.g.: `rgb(255, 255, 255, .5)`) are valid and must be passed as string, e.g.: `"rgba(255,255,255,.5)"`. There is a convenience function called `transparent` which sets the background as transparent but can be set to a more opaque white~ish color with the `alpha` parameter.

```r
library(shiny)
library(waiter)

ui <- fluidPage(
  useWaiter(),
  actionButton("draw", "draw plot"),
  plotOutput("plot")
)

server <- function(input, output){

  # transparent~ish background
  w <- Waiter$new(
    id = "plot",
    html = spin_3(), 
    color = transparent(.5)
  )

  dataset <- reactive({
    input$draw

    w$show()

    Sys.sleep(3)   

    runif(100)
  })

  output$plot <- renderPlot(plot(dataset()))

}

shinyApp(ui, server)
```

![](_assets/img/waiter-transparent.gif)

## Custom Content

Thus far we have been using built-in spinners but you are by no means restricted to them. Waiter will let you use any HTML content you like, either as a string (e.g.: `<p>Loading...</p>`) and more conveniently [htmltools](https://cran.r-project.org/web/packages/htmltools/index.html) or shiny tags such e.g.(`shiny::p("Loading...")`). You may thus use those to provide richer messages with images, gif, whatever you fancy.

```r
library(shiny)
library(waiter)

# a notorious gif
gif <- paste0("https://media1.tenor.com/images",
  "/cb27704982766b4f02691ea975d9a259/tenor.gif?itemid=11365139")

loading_screen <- tagList(
  h3("Bear with Hadley a second", style = "color:gray;"),
  img(src = gif, height = "200px")
)
 
ui <- fluidPage(
  useWaiter(), # include dependencies
  actionButton("show", "Show loading for 4 seconds")
)

server <- function(input, output, session){
  # create a waiter
  w <- Waiter$new(html = loading_screen, color = "white")

  # on button click
  observeEvent(input$show, {
    w$show()
    Sys.sleep(4)
    w$hide()
  })
}

shinyApp(ui, server)
```

![](_assets/img/waiter-content.gif)

## Image

The latest development version (not on CRAN) allows using a background image by passing the path to said image to the `image`. 

> [!NOTE]
> If using a local image make sure it is served; place it in the `www` directory.

```r
library(shiny)
library(waiter)

url <- "https://www.freecodecamp.org/news/content/images/size/w2000/2020/04/w-qjCHPZbeXCQ-unsplash.jpg"

ui <- fluidPage(
	useWaiter(),
	h1("Can you see me?")
)

server <- function(input, output, session){
	w <- Waiter$new(
		html = h1("Wait!"),
		image = url
	)$show()

	Sys.sleep(10)
	w$hide()
}

shinyApp(ui, server)

```

![](_assets/img/waiter-image.png)

## No server

_This feature was added in version 0.2.3._

Most examples have made use of the R server to some degree. 
I prefer such code, though there is more of it, it seems 
much clearer; UI code tends to be dirtier than server-side 
code.

However, the server itself is often not needed for what waiter
wants to achieve. The function `triggerWaiter` does this 
(in my opinion, at the expense of more readable code).

```r
library(shiny)
library(waiter)

ui <- fluidPage(
  useWaiter(),
  triggerWaiter(
    actionButton(
      "generate",
      "Generate Plot"
    ),
    id = "plot" # hide when plot renders
  ),
  plotOutput("plot")
)

server <- function(input, output){

  output$plot <- renderPlot({
    input$generate
    Sys.sleep(3)
    plot(runif(50))
  })

}

shinyApp(ui, server)
```

## Theming

In the development version (from Github) you can now easily create themes for your loading screens. You can also override that in individual waiter if needed.

```r
library(shiny)
library(waiter)

# set a theme
waiter_set_theme(html = spin_3(), color = "darkblue")

ui <- fluidPage(
  useWaiter(),
  actionButton("show", "Show loading with updates"),
  plotOutput("plot1"),
  plotOutput("plot2")
)

server <- function(input, output, session){
  
  # the theme is automatically applied
  w <- Waiter$new(c("plot1", "plot2"))

  dataset <- reactive({
    input$show
    w$show()
    Sys.sleep(3)
    hist(runif(100))
  })

  output$plot1 <- renderPlot({plot(dataset())})
  output$plot2 <- renderPlot({plot(dataset())})
}

shinyApp(ui, server)
```

![](_assets/img/waiter-theme.gif)

## With Hostess

The API of the hostess has been somewhat improved since its initial release; the "loader" can be created from the R6Class itself, which is the recommended approach as it simplifies much of the workflow.

> [!TIP]
> Make sure you include the dependencies with `use_hostess`.

The hostess-waiter team will work as layers over parts of the application.

```r
library(shiny)
library(waiter)
 
ui <- fluidPage(
  useWaiter(), 
  useHostess(),
  actionButton("draw", "plot"),
  plotOutput("plot")
)

server <- function(input, output, session){
  # create the waitress
  hostess <- Hostess$new()

  # set the loader as html
  waiter <- Waiter$
    new(
      "plot", 
      html = hostess$get_loader(stroke_color = "#ffffff")
    )

  dataset <- reactive({
    input$draw
    waiter$show()

    for(i in 1:10){
      hostess$set(i * 10)
      Sys.sleep(.3)
    }

    runif(50)
  })

  output$plot <- renderPlot(plot(dataset()))
}

shinyApp(ui, server)
```

![](_assets/img/hostess-waiter.gif)

The approach above might get too wordy when one wants to use a hostess on multiple waiting screens. Take for instance the application above but with more than one plot.

```r
library(shiny)
library(waiter)

ui <- fluidPage(
  useWaiter(), 
  useHostess(),
  actionButton("draw", "plot"),
  fluidRow(
    column(4, plotOutput("plot1")),
    column(4, plotOutput("plot2")),
    column(4, plotOutput("plot3"))
  )
)

server <- function(input, output, session){
  # create a common loader
  loader <- hostess_loader(stroke_color = "red")

  # create the waitress and set loader
  hostess1 <- Hostess$new()$set_loader(loader)
  hostess2 <- Hostess$new()$set_loader(loader)
  hostess3 <- Hostess$new()$set_loader(loader)

  # set the loader as html
  waiter <- Waiter$new(
    c("plot1", "plot2", "plot3"),
    html = list(
      hostess1$get_loader(),
      hostess2$get_loader(),
      hostess3$get_loader()
    )
  )

  dataset <- reactive({
    input$draw
    waiter$show()

    for(i in 1:10){
      hostess1$set(i * 10)
      hostess2$set(i * 10)
      hostess3$set(i * 10)
      Sys.sleep(.3)
    }

    runif(50)
  })

  output$plot1 <- renderPlot(plot(dataset()))
  output$plot2 <- renderPlot(plot(dataset()))
  output$plot3 <- renderPlot(plot(dataset()))
}

shinyApp(ui, server)
```

![](_assets/img/hostess-common.gif)

## With Steward

To use the steward, simply add `use_steward`, it takes a few arguments to customise its look and feel.

> [!TIP]
> Make sure you include the dependencies with `use_steward`.

```r
library(shiny)
library(waiter)
 
ui <- fluidPage(
  useWaiter(), 
  useSteward(),
  h3("Content you will only see after loading screen has disappeared"),
  waiterShowOnLoad(spin_fading_circles()) 
)

server <- function(input, output, session){
  Sys.sleep(10) # do something that takes time
  waiter_hide()
}

shinyApp(ui, server)
```

![](_assets/img/waiter-steward.gif)

## With Garçon

Then again don't forget to add the dependency by placing `use_garcon` in the UI. Initialise the garçon then add progress by setting the percentage with the `set` method where you select the image to animate by passing its id.

> [!TIP]
> Make sure you include the dependencies with `use_garcon`.

```r
library(shiny)
library(waiter)

ui <- fluidPage(
  useGarcon(),
  useWaiter(),
  waiterShowOnLoad(
    tags$img(
      src="https://waiter.john-coene.com/_assets/img/logo.png", 
      height=200, 
      id = "myImage" # set id
    )
  )
)

server <- function(input, output){
  g <- Garcon$new("myImage", filter = "opacity")

  for(i in 1:10){
    Sys.sleep(runif(1))
    g$set(i * 10)
  }

  waiter_hide()
}

shinyApp(ui, server)
```

![](_assets/img/waiter-garcon.gif)

There are a number of filters available.

## Events

The waiter also fires events in shiny when:

1. The loading screen is _shown_
2. The loading screen is _hidden_

These events are set to `id` that the waiter overlays followed by `_waiter_shown` or `_waiter_hidden`.

```r
library(shiny)
library(waiter)

ui <- fluidPage(
  useWaiter(),
  actionButton("draw", "draw plot"),
  plotOutput("plot")
)

server <- function(input, output){

  # sets: 
  # input$plot_waiter_shown
  # input$plot_waiter_hidden
  w <- Waiter$new(id = "plot")

  dataset <- reactive({
    input$draw

    w$show()

    on.exit({
      w$hide()
    })

    Sys.sleep(3)  

    runif(100)
  })

  output$plot <- renderPlot(plot(dataset()))

  observeEvent(input$plot_waiter_hidden, {
    print(input$plot_waiter_hidden)
  })

  observeEvent(input$plot_waiter_shown, {
    print(input$plot_waiter_shown)
  })

}

shinyApp(ui, server)
```

If the waiter is not overlayed upon any element and is used full screen then the events `waiter_shown` and `waiter_hidden` are fired.

## CSS

The overlay that waiter places (with background color) bears the `waiter-overlay` class, the content (spinner and/or text) is placed within it in a `<div>` with class `waiter-overlay-content`.

This is useful to know if you want to customise the default appearance, e.g.: placement of the spinner.

```r
library(shiny)
library(waiter)

ui <- fluidPage(
  useWaiter(), # include dependencies
  tags$style(
    ".waiter-overlay-content{
      position: absolute;
      top: 30px; /*30 pixels from the top*/
      left: 48%; /*48% from the left*/
    }"
  ),
  actionButton("showFull", "Show full screen"),
  actionButton("showPartial", "Show partial"),
  div(
    id = "hello", 
    style = "width:400px;height:500px;",
    h4("This could be a chart of whatever")
  )
)

server <- function(input, output, session){
  # partial
  w1 <- Waiter$new("hello")

  observeEvent(input$showPartial, {
    w1$show()
    Sys.sleep(4)
    w1$hide()
  })

  # full screen
  w2 <- Waiter$new()

  observeEvent(input$showFull, {
    w2$show()
    Sys.sleep(4)
    w2$hide()
  })
}

shinyApp(ui, server)
```

![](_assets/img/waiter-css.png)

## JavaScript

You can also directly use the JavaScript if you want, this may
allow you to avoid going through the websocket and the server.

The function `waiter.showWaiter` takes the arguments below, if `id = null` then a full-screen waiter is used.

```js
const showWaiter = (
  id = null, 
  html, 
  color = '#333e48', 
  hideOnRender = false, 
  hideOnError = false, 
  hideOnSilentError = false, 
  image = null,
  onSHown = setWaiterShownInput // callback
) => {
  ...
}
```

The callback function should accept the `id` argument, it is called once the waiter is shown.

To hide the waiter use `waiter.hideWaiter(id, callback)` and pass it the `id` of the element from which you want to removed the waiter, if `null` it removes the full-screen waiter.

The callback function should accept the `id` argument, it is called once the waiter is hidden.

```r
library(shiny)
library(waiter)

ui <- fluidPage(
  tags$head(
    useWaiter(),
    tags$script(
      "function show(){
        waiter.showWaiter(
          id = 'contentBox',
          html = 'LOADING',
          color = 'black'
        );
      }
      function hide(){
        waiter.hideWaiter('contentBox');
      }"
    )
  ),
  br(),
  tags$button(
    onclick = "show();",
    class = "btn btn-success",
    "Show waiter"
  ),
  tags$button(
    onclick = 'hide();',
    class = "btn btn-warning",
    "Hide waiter"
  ),
  div(
    id = "contentBox",
    style = "min-height:300px;",
    h1("Hello")
  )
)

server <- function(input, output) {}

shinyApp(ui, server)
```
