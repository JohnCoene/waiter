#' Waiter
#' 
#' Programatically show and hide loading screens.
#' 
#' @param html HTML content of waiter, generally a spinner, see \code{\link{spinners}}.
#' @param color Background color of loading screen.
#' @param logo Logo to display.
#' 
#' @examples
#' library(shiny)
#' 
#' ui <- fluidPage(
#'   use_waiter(),
#'   actionButton("show", "Show loading for 5 seconds")
#' )
#' 
#' server <- function(input, output, session){
#'   observeEvent(input$show, {
#'     show_waiter(
#'       tagList(
#'         spin_fading_circles(),
#'         "Loading ..."
#'       )
#'     )
#'     Sys.sleep(3)
#'     hide_waiter()
#'   })
#' }
#' 
#' if(interactive()) shinyApp(ui, server)
#' 
#' @import shiny
#' @name waiter
#' @export
use_waiter <- function(){
  singleton(
    tags$head(
      tags$link(
        href = "waiter-assets/please-wait.css",
        rel="stylesheet",
        type="text/css"
      ),
      tags$link(
        href = "waiter-assets/spinkit.css",
        rel="stylesheet",
        type="text/css"
      ),
      tags$script(
        src = "waiter-assets/please-wait.min.js"
      ),
      tags$script(
        src = "waiter-assets/custom.js"
      )
    )
  )
}

#' @rdname waiter
#' @export
show_waiter <- function(html = "", color = "#f46d3b", logo = ""){
  opts <- list(
    html = as.character(html),
    color = color,
    logo = logo
  )
  session <- shiny::getDefaultReactiveDomain()
  .check_session(session)
  session$sendCustomMessage("waiter-show", opts)
}

#' @rdname waiter
#' @export
hide_waiter <- function(){
  session <- shiny::getDefaultReactiveDomain()
  .check_session(session)
  session$sendCustomMessage("waiter-hide", list())
}

.check_session <- function(x){
  if(is.null(x))
    stop("invalid session, run this function inside your Shiny server.")
}