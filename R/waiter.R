#' Waiter
#' 
#' Programatically show and hide loading screens.
#' 
#' @param html HTML content of waiter, generally a spinner, see \code{\link{spinners}}.
#' @param color Background color of loading screen.
#' @param logo Logo to display.
#' @param id Id of element to hide or element on which to show waiter over.
#' @param hide_on_drawn Set to \code{TRUE} to automatically hide the waiter
#' when the plot in \code{id} is drawn. Note the latter will only work with
#' shiny plots, tables, htmlwidgets, etc. but will not work with arbitrary
#' elements.
#' @param include_js Whether to include the Javascript dependencies, only
#' set to \code{FALSE} if you use \code{\link{show_waiter_on_load}}.
#' 
#' @section Functions:
#' \itemize{
#'  \item{\code{use_waiter} and \code{waiter_use}: waiter dependencies to include anywhere in your UI but ideally at the top.}
#'  \item{\code{waiter_show_on_load}: Show a waiter on page load, before the session is even loaded, include in UI \emph{after} \code{use_waiter}.}
#'  \item{\code{waiter_show}: Show waiting screen.}
#'  \item{\code{waiter_hide}: Hide any waiting screen.}
#'  \item{\code{waiter_hide_on_drawn}: Hide any waiting screen when the output is drawn, useful for outputs that take a long time to draw, \emph{use in \code{ui}}.}
#' }
#' 
#' @examples
#' library(shiny)
#' 
#' ui <- fluidPage(
#'   use_waiter(), # dependencies
#'   waiter_show_on_load(spin_fading_circles()), # shows before anything else 
#'   actionButton("show", "Show loading for 5 seconds")
#' )
#' 
#' server <- function(input, output, session){
#'   waiter_hide() # will hide *on_load waiter
#'   
#'   observeEvent(input$show, {
#'     waiter_show(
#'       tagList(
#'         spin_fading_circles(),
#'         "Loading ..."
#'       )
#'     )
#'     Sys.sleep(3)
#'     waiter_hide()
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
      tags$link(
        href = "waiter-assets/waiter/devloop.css",
        rel="stylesheet",
        type="text/css"
      ),
      if(include_js)
        tags$script(
          src = "waiter-assets/waiter/please-wait.min.js"
        ),
      tags$script(
        src = "waiter-assets/waiter/waiter.js"
      ),
      tags$script(
        src = "waiter-assets/waiter/custom.js"
      )
    )
  )
}

#' @rdname waiter
#' @export
waiter_use <- use_waiter

#' @rdname waiter
#' @export
show_waiter <- function(html = "", color = "#333e48", logo = "", id = NULL, 
  hide_on_drawn = FALSE){
  .Deprecated("waiter_show", package = "waiter")

  html <- as.character(html)
  html <- gsub("\n", "", html)

  if(hide_on_drawn && is.null(id))
    stop("Cannot `hide_on_drawn` when `id` is not specified")

  opts <- list(
    id = id,
    html = html,
    color = color,
    logo = logo,
    hide_on_drawn
  )
  session <- shiny::getDefaultReactiveDomain()
  .check_session(session)
  session$sendCustomMessage("waiter-show", opts)
}

#' @rdname waiter
#' @export
waiter_show <- function(html = "", color = "#333e48", logo = "", id = NULL, 
  hide_on_drawn = FALSE){
  
  html <- as.character(html)
  html <- gsub("\n", "", html)

  if(hide_on_drawn && is.null(id))
    stop("Cannot `hide_on_drawn` when `id` is not specified")

  opts <- list(
    id = id,
    html = html,
    color = color,
    logo = logo,
    hide_on_drawn
  )
  session <- shiny::getDefaultReactiveDomain()
  .check_session(session)
  session$sendCustomMessage("waiter-show", opts)
}

#' @rdname waiter
#' @export
show_waiter_on_load <- function(html = "", color = "#333e48", logo = ""){
  .Deprecated("waiter_show_on_load", package = "waiter")

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
waiter_show_on_load <- function(html = "", color = "#333e48", logo = ""){
  
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
  .Deprecated("waiter_hide_on_drawn", package = "waiter")

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
waiter_hide_on_drawn <- function(id){
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
hide_waiter <- function(id = NULL){
  .Deprecated("waiter_hide", package = "waiter")
  session <- shiny::getDefaultReactiveDomain()
  .check_session(session)
  session$sendCustomMessage("waiter-hide", list(id = id))
}

#' @rdname waiter
#' @export
waiter_hide <- function(id = NULL){
  session <- shiny::getDefaultReactiveDomain()
  .check_session(session)
  session$sendCustomMessage("waiter-hide", list(id = id))
}

#' @rdname waiter
#' @export
update_waiter <- function(html = "", id = NULL){
  .Deprecated("waiter_update", package = "waiter")
  if(is.character(html))
    html <- span(html)
  html <- as.character(html)
  html <- gsub("\n", "", html)
  session <- shiny::getDefaultReactiveDomain()
  .check_session(session)
  session$sendCustomMessage("waiter-update", list(html = html, id = id))
}

#' @rdname waiter
#' @export
waiter_update <- function(html = "", id = NULL){
  if(is.character(html))
    html <- span(html)
  html <- as.character(html)
  html <- gsub("\n", "", html)
  session <- shiny::getDefaultReactiveDomain()
  .check_session(session)
  session$sendCustomMessage("waiter-update", list(html = html, id = id))
}

#' Waiter R6 Class
#' 
#' Create a waiter to then show, hide or update its content.
#' 
#' @details
#' Create an object to show a waiting screen on either the entire application
#' or just a portion of the app by specifying the \code{id}. Then \code{show},
#' then \code{hide} or meanwhile \code{update} the content of the waiter. 
#' 
#' @name waiterClass
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
#' @param id Id of element on which to overlay the waiter, if \code{NULL} the waiter is
#' applied to the entire body.
#' @param hide_on_drawn Set to \code{TRUE} to automatically hide the waiter
#' when the plot in \code{id} is drawn. Note the latter will only work with
#' shiny plots, tables, htmlwidgets, etc. but will not work with arbitrary
#' elements.
#' 
#' @examples
#' \dontrun{Waiter$new()}
    initialize = function(html = "", color = "#333e48", logo = "", id = NULL, 
      hide_on_drawn = FALSE){
      html <- as.character(html)
      html <- gsub("\n", "", html)

      if(hide_on_drawn && is.null(id))
        stop("Cannot `hide_on_drawn` when `id` is not specified")

      private$.id <- id
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
        id = private$.id,
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
      private$.session$sendCustomMessage("waiter-hide", list(id = private$.id))
    },
#' @details
#' Update the waiter's html content.
#' @param html HTML content of waiter, generally a spinner, see \code{\link{spinners}}.
    update_waiter = function(html = ""){
      html <- as.character(html)
      html <- gsub("\n", "", html)
      private$get_session()
      private$.session$sendCustomMessage("waiter-update", list(html = html, id = private$.id))
    },
#' @details
#' print the waiter
		print = function(){
      if(!is.null(private$.id))
		    cat("A waiter on", private$.id, "\n")
      else
        cat("A waiter\n")
		}
  ),
  private = list(
    .html = "",
    .color = "#333e48",
    .logo = "",
    .id = NULL,
    .session = NULL,
		get_session = function(){
			private$.session <- shiny::getDefaultReactiveDomain()
			.check_session(private$.session)
		}
  )
)
