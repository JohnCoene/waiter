# Attendant

<Badge type="warning">New</Badge> The attendant is not 
currently on CRAN

A new family of functions to display progress bars using 
Bootstrap's built-in progress bars; waiter allows easily
animating them.

<Note>
Works with both Bootstrap 3 and 4.
</Note>

Unlike other families of functions in the packer the attendant
is not overlayed on top of other elements, choose where you 
would like it to be displayed and dynamically control its
state from the server.

## Basic

Place `attendantBar` in your UI where you would like the progress
bar to be displayed. Then from the server control it's state.

Note that we give the progress bar in the UI an id and reference
it server-side, ensure these are unique.

```r
library(shiny)
library(waiter)

ui <- fluidPage(
  useAttendant(),
  attendantBar("progress-bar")
)

server <- function(input, output){
  att <- Attendant$new("progress-bar")

  for(i in 1:10){
    Sys.sleep(runif(1))
    att$set(i * 10)
  }
}

shinyApp(ui, server)
```

## Customise

The look of the progress bar is controled from the UI function.
Below we create a thin, striped, and animated progress bar that
goes up to 1000.

```r {highlight: ['6-14']}
library(shiny)
library(waiter)

ui <- fluidPage(
  useAttendant(),
  attendantBar(
		"progress-bar",
		max = 1000,
		height = 1,
		color = "success",
		striped = TRUE,
		animated = TRUE
	)
)

server <- function(input, output){
  att <- Attendant$new("progress-bar")

  for(i in 1:10){
    Sys.sleep(runif(1))
    att$set(i * 100)
  }
}

shinyApp(ui, server)
```

## Text

You can optionallly display text on the progress bar.
While an initial text value can be defined in the UI,
this text can be updated from the server dynamically,
e.g.: below to display the percentage. 

```r
library(shiny)
library(waiter)

ui <- fluidPage(
  useAttendant(),
  attendantBar("progress-bar")
)

server <- function(input, output){
  att <- Attendant$new("progress-bar")

  for(i in 1:10){
    Sys.sleep(runif(1))
    att$set(i * 10, text = sprintf("%s%%", i * 10))
  }
}

shinyApp(ui, server)
```