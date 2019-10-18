#' Waiter
#' 
#' Programatically show and hide loading screens.
#' 
#' @param html HTML content of waiter, generally a spinner, see \code{\link{spinners}}.
#' @param color Background color of loading screen.
#' @param logo Logo to display.
#' @param id Id of element to hide.
#' @param include_js Whether to include the Javascript dependencies, only
#' set to \code{FALSE} if you use \code{\link{show_waiter_on_load}}.
#' 
#' @section Functions:
#' \itemize{
#'  \item{\code{use_waiter}: waiter dependencies to include anywhere in your UI but ideally at the top.}
#'  \item{\code{show_waiter_on_load}: Show a waiter on page load, before the session is even loaded, include in UI \emph{after} \code{use_waiter}.}
#'  \item{\code{show_waiter}: Show waiting screen.}
#'  \item{\code{hide_waiter}: Hide any waiting screen.}
#'  \item{\code{hide_waiter_on_drawn}: Hide any waiting screen when the output is drawn, useful for outputs that take a long time to draw, \emph{use in \code{ui}}.}
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
use_waiter <- function(include_js = TRUE){
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
      if(include_js)
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

  tagList(
    tags$script(
      src = "waiter-assets/waiter/please-wait.min.js"
    ),
    HTML(paste0("<script>", script, "</script>"))
  )
}

#' @rdname waiter
#' @export
hide_waiter_on_drawn <- function(id){
  if(missing(id))
    stop("Missing id", call. = FALSE)
  
  script <- paste0(
    '$(document).on("shiny:value", function(event) {
      if (event.target.id === "', id,'") {
        window.loading_screen.finish();
      }
    });'
  )

  singleton(
    tags$head(
      tags$script(script)
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
#' @details
#' Create a waiter.
#' 
#' @param html HTML content of waiter, generally a spinner, see \code{\link{spinners}}.
#' @param color Background color of loading screen.
#' @param logo Logo to display.
#' 
#' @examples
#' \dontrun{Waiter$new()}
    initialize = function(html = "", color = "#333e48", logo = ""){
      html <- as.character(html)
      html <- gsub("\n", "", html)

      private$.html <- html
      private$.color <- color
      private$.logo <- logo
    },
#' @details
#' Hide the waiter.
    finalize = function(){
      public$hide()
    },
#' @details
#' Show the waiter.
    show = function(){
      opts <- list(
        html = private$.html,
        color = private$.color,
        logo = private$.logo
      )
      private$get_session()
      private$.session$sendCustomMessage("waiter-show", opts)
    },
#' @details
#' Hide the waiter.
    hide = function(){
      private$get_session()
      private$.session$sendCustomMessage("waiter-hide", list())
    },
#' @details
#' print the waiter
		print = function(){
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
