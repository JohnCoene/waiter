#' Waiter
#' 
#' Programatically show and hide loading screens.
#' 
#' @param html HTML content of waiter, generally a spinner, see \code{\link{spinners}}.
#' @param color Background color of loading screen.
#' @param logo Logo to display.
#' 
#' @section Functions:
#' \itemize{
#'  \item{\code{use_waiter}: waiter dependencies to include anywhere in your UI but ideally at the top.}
#'  \item{\code{show_waiter_on_load}: Show a waiter on page load, before the session is even loaded, include in UI \emph{after} \code{use_waiter}.}
#'  \item{\code{show_waiter}: Show waiting screen}
#'  \item{\code{hide_waiter}: Hide any waiting screen}
#' }
#' 
#' @examples
#' library(shiny)
#' 
#' ui <- fluidPage(
#'   use_waiter(), # dependencies
#'   show_waiter_on_load(spin_fading_circles()), # shows before anything else 
#'   actionButton("show", "Show loading for 5 seconds")
#' )
#' 
#' server <- function(input, output, session){
#'   hide_waiter() # will hide *on_load waiter
#'  
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
      tags$script("var window.loading_screen;"),
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
show_waiter <- function(html = "", color = "#333e48", logo = ""){
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
show_waiter_on_load <- function(html = "", color = "#333e48", logo = ""){
  html <- as.character(html)
  html <- gsub("\n", "", html)

  script <- paste0(
    "window.loading_screen = pleaseWait({
      logo: '", as.character(logo), "',
      backgroundColor: '", color, "',
      loadingHtml: '", html, "'
    });"
  )

  singleton(
    tags$head(
      HTML(
        paste0("<script>document.addEventListener('DOMContentLoaded', function() {", script, "});</script>")
      )
    )
  )
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