% Generated by roxygen2: do not edit by hand
% Please edit documentation in R/waiter.R
\name{waiter}
\alias{waiter}
\alias{use_waiter}
\alias{useWaiter}
\alias{waiter_use}
\alias{waiter_show}
\alias{waiter_show_on_load}
\alias{waiterShowOnLoad}
\alias{waiter_preloader}
\alias{waiterPreloader}
\alias{waiter_hide_on_render}
\alias{waiterHideOnRender}
\alias{waiter_on_busy}
\alias{waiterOnBusy}
\alias{waiter_hide}
\alias{waiter_update}
\title{Waiter}
\usage{
use_waiter(spinners = NULL, include_js = TRUE)

useWaiter(spinners = NULL, include_js = TRUE)

waiter_use(spinners = 1:7, include_js = TRUE)

waiter_show(
  id = NULL,
  html = spin_1(),
  color = "#333e48",
  logo = "",
  image = "",
  hide_on_render = !is.null(id)
)

waiter_show_on_load(html = spin_1(), color = "#333e48", image = "", logo = "")

waiterShowOnLoad(html = spin_1(), color = "#333e48", image = "", logo = "")

waiter_preloader(
  html = spin_1(),
  color = "#333e48",
  image = "",
  fadeout = FALSE,
  logo = ""
)

waiterPreloader(
  html = spin_1(),
  color = "#333e48",
  image = "",
  fadeout = FALSE,
  logo = ""
)

waiter_hide_on_render(id)

waiterHideOnRender(id)

waiter_on_busy(
  html = spin_1(),
  color = "#333e48",
  logo = "",
  image = "",
  fadeout = FALSE
)

waiterOnBusy(
  html = spin_1(),
  color = "#333e48",
  logo = "",
  image = "",
  fadeout = FALSE
)

waiter_hide(id = NULL)

waiter_update(id = NULL, html = NULL)
}
\arguments{
\item{spinners}{Deprecated argument. Spinners to include. By default all the CSS files for
all spinners are included you can customise this only that which you
need in order to reduce the amount of CSS that needs to be loaded and
improve page loading speed. There are 7 spinner kits. The spinner kit
required for the spinner you use is printed in the R console when
using the spinner. You can specify a single spinner kit e.g.: \code{1}
or multiple spinner kits as a vector e.g.: \code{c(1,3,6)}.}

\item{include_js}{Deprecated argument, no longer needed.}

\item{id}{Id of element to hide or element on which to show waiter over.}

\item{html}{HTML content of waiter, generally a spinner, see \code{\link{spinners}}.}

\item{color}{Background color of loading screen.}

\item{logo}{Path to logo to display. Deprecated.}

\item{image}{Path to background image.}

\item{hide_on_render}{Set to \code{TRUE} to automatically hide the waiter
when the plot in \code{id} is drawn. Note the latter will only work with
shiny plots, tables, htmlwidgets, etc. but will not work with arbitrary
elements.}

\item{fadeout}{Use a fade out effect when the screen is removed.
Can be a boolean, or a numeric indicating the number of
milliseconds the effect should take.}
}
\description{
Programatically show and hide loading screens.
}
\section{Functions}{

\itemize{
\item{\code{use_waiter} and \code{waiter_use}: waiter dependencies to include anywhere in your UI but ideally at the top.}
\item{\code{waiter_show_on_load}: Show a waiter on page load, before the session is even loaded, include in UI \emph{after} \code{use_waiter}.}
\item{\code{waiter_show}: Show waiting screen.}
\item{\code{waiter_hide}: Hide any waiting screen.}
\item{\code{waiter_on_busy}: Automatically shows the waiting screen when the server is busy, and hides it when it goes back to idle.}
\item{\code{waiter_update}: Update the content \code{html} of the waiting screen.}
\item{\code{waiter_hide_on_render}: Hide any waiting screen when the output is drawn, useful for outputs that take a long time to draw, \emph{use in \code{ui}}.}
\item{\code{waiter_preloader}: Shows the waiter on load and automatically removes it once all the UI is rendered, only runs on the first load of the app.}
}
}

\examples{
library(shiny)

ui <- fluidPage(
  useWaiter(), # dependencies
  waiterShowOnLoad(spin_fading_circles()), # shows before anything else 
  actionButton("show", "Show loading for 5 seconds")
)

server <- function(input, output, session){
  waiter_hide() # will hide *on_load waiter
  
  observeEvent(input$show, {
    waiter_show(
      html = tagList(
        spin_fading_circles(),
        "Loading ..."
      )
    )
    Sys.sleep(3)
    waiter_hide()
  })
}

if(interactive()) shinyApp(ui, server)

}
