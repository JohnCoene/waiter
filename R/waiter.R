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
#'  \item{\code{show_waiter}: Show waiting screen.}
#'  \item{\code{hide_waiter}: Hide any waiting screen.}
#' }
#' 
#' @section Class:
#' Arguments passed to \code{show_waiter} are passed to the initialisation method \code{new}.
#' \itemize{
#'   \item{\code{Waiter}: initiatlise a Waiter.} 
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
        href = "waiter-assets/waiter/please-wait.css",
        rel="stylesheet",
        type="text/css"
      ),
      tags$script("window.loading_screen;"),
      tags$link(
        href = "waiter-assets/waiter/spinkit.css",
        rel="stylesheet",
        type="text/css"
      ),
      tags$link(
        href = "waiter-assets/waiter/css-spinners.css",
        rel="stylesheet",
        type="text/css"
      ),
      tags$script(
        src = "waiter-assets/waiter/please-wait.min.js"
      ),
      tags$script(
        src = "waiter-assets/waiter/custom.js"
      )
    )
  )
}

#' @rdname waiter
#' @export
show_waiter <- function(html = "", color = "#333e48", logo = ""){
  html <- as.character(html)
  html <- gsub("\n", "", html)

  opts <- list(
    html = html,
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

#' @rdname waiter
#' @export
Waiter <- R6::R6Class(
  "waiter",
  public = list(
    initialize = function(html = "", color = "#333e48", logo = ""){
      html <- as.character(html)
      html <- gsub("\n", "", html)

      private$.html <- html
      private$.color <- color
      private$.logo <- logo
    },
    finalize = function(){
      public$hide()
    },
    show = function(){
      opts <- list(
        html = private$.html,
        color = private$.color,
        logo = private$.logo
      )
      private$get_session()
      private$.session$sendCustomMessage("waiter-show", opts)
    },
    hide = function(){
      private$get_session()
      private$.session$sendCustomMessage("waiter-hide", list())
    },
		print = function(...){
		  print("A waiter")
		}
  ),
  private = list(
    .html = "",
    .color = "#333e48",
    .logo = "",
    .session = NULL,
		get_session = function(){
			private$.session <- shiny::getDefaultReactiveDomain()
			.check_session(private$.session)
		}
  )
)
