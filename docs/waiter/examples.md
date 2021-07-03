# Examples

## Automatic

The function `autoWaiter` is there for convenience to easily 
add waiters to dynamically rendered Shiny content where
"dynamic" means `render*` and `*output` function pair.

This will display the waiter when the element is being 
recalculated and hide it when it receives new data.

You can place multiple `autoWaiter` functions in your UI.

By default `autoWaiter` will be applied to all dynamically-rendered elements.

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

Otherwise you can restrict the showing of waiting screens to 
some elements by passing their `id` as first argument to the
function.

```r
library(shiny)
library(waiter)

ui <- fluidPage(
	autoWaiter(c("plot1", "plot3")),
	actionButton(
		"trigger",
		"Render"
	),
	plotOutput("plot1"),
	plotOutput("plot2"),
	plotOutput("plot3")
)

server <- function(input, output){
	output$plot1 <- renderPlot({
		input$trigger
		Sys.sleep(2)
		plot(cars)
	})

	output$plot2 <- renderPlot({
		input$trigger
		Sys.sleep(2)
		plot(runif(100))
	})
	
	output$plot3 <- renderPlot({
		input$trigger
		Sys.sleep(2)
		plot(runif(100))
	})
}

shinyApp(ui, server)
```

## On Load

You can show a loading screen on app launch. The loading screen will launch prior to everything else, even the Shiny session. 

Though this function is not programmatically launched it still has to be hidden with `waiter_hide`. Ensure you place `waiterShowOnLoad` after `useWaiter`.

```r
library(shiny)
library(waiter)
 
ui <- fluidPage(
  useWaiter(), 
  waiterShowOnLoad(html = spin_fading_circles()),
  h3("Content you will only see after loading screen has disappeared")
)

server <- function(input, output, session){
  Sys.sleep(3) # do something that takes time
  waiter_hide()
}

shinyApp(ui, server)
```

## Preloader

The `waiterPreloader` function shows the full page loading screen when the app is loaded and automatically removes it when all the UI is rendered: only runs once. Thanks to [David Granjon](https://github.com/JohnCoene/waiter/issues/82) for the suggestion.

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

One can use `waiterOnBusy` to automatically display the loading screen when the server is busy computing things and automatically remove it when it goes back to idle.

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

<Note type='tip'>
All the features of the full screen are also available on partial loading screens
</Note>

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
    on.exit({
      w$hide()
    })

    Sys.sleep(3) 

    runif(150)
  })

  output$plot <- renderPlot(plot(dataset()))

}

shinyApp(ui, server)
```

![](_assets/img/waiter-layer3.gif)

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

<Note type='tip'>
If using a local image make sure it is served; place it in 
the `www` directory.
</Note>

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
