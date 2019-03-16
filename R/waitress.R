#' Waitress
#' 
#' Programatically show and hide loading screens.
#' 
#' @param id Element id, if \code{NULL} then the waitress is applied to the whole screen.
#' @param percent Percentage to set or increase.
#' @param ms Milliseconds between each \code{percent} increase.
#' 
#' @section Functions:
#' \itemize{
#'  \item{\code{use_waitress}: Dependencies for waitress to include anywhere in your UI but ideally at the top.}
#'  \item{\code{init_waitress}: Initialise waitress.}
#'  \item{\code{hide_waiter}: Hide any waiting screen.}
#' }
#'  
#' @examples
#' library(shiny)
#' 
#' ui <- fluidPage(
#'   use_waitress(), # dependencies
#'   actionButton("init", "Initialise"),
#'   sliderInput("set", "percentage", 1, 100, step = 5, value = 1)
#' )
#' 
#' server <- function(input, output, session){
#'  
#'   observeEvent(input$init, {
#'     init_waitress() 
#'     start_waitress() 
#'   })
#' 
#'   observeEvent(input$set, {
#'     set_waitress(input$set)
#'   })
#' }
#' 
#' if(interactive()) shinyApp(ui, server)
#'  
#' @import shiny
#' @name waitress
#' @export
use_waitress <- function(){
  singleton(
    tags$head(
      tags$link(
        href = "waiter-assets/waitress/progress.min.css",
        rel="stylesheet",
        type="text/css"
      ),
      tags$script(
        src = "waiter-assets/waitress/progress.min.js"
      ),
      tags$script(
        src = "waiter-assets/waitress/custom.js"
      )
    )
  )
}

#' @rdname waitress
#' @export
init_waitress <- function(id = NULL){

	# create selector
	if(!is.null(id)) id <- paste0("#", id)
	
  opts <- list(
    id = id
  )
  session <- shiny::getDefaultReactiveDomain()
  .check_session(session)
  session$sendCustomMessage("waitress-init", opts)
}

#' @rdname waitress
#' @export
start_waitress <- function(){
	
  opts <- list()
  session <- shiny::getDefaultReactiveDomain()
  .check_session(session)
  session$sendCustomMessage("waitress-start", opts)
}

#' @rdname waitress
#' @export
set_waitress <- function(percent){

	if(missing(percent))
		stop("missing percent", call. = FALSE)
	
  opts <- list(
		percent = percent
	)

  session <- shiny::getDefaultReactiveDomain()
  .check_session(session)
  session$sendCustomMessage("waitress-set", opts)
}

#' @rdname waitress
#' @export
auto_waitress <- function(percent, ms){

	if(missing(percent) || missing(ms))
		stop("missing percent or ms", call. = FALSE)
	
  opts <- list(
		percent = percent,
		ms = ms
	)

  session <- shiny::getDefaultReactiveDomain()
  .check_session(session)
  session$sendCustomMessage("waitress-auto", opts)
}

#' @rdname waitress
#' @export
increase_waitress <- function(percent){

	if(missing(percent))
		stop("missing percent", call. = FALSE)
	
  opts <- list(
		percent = percent
	)

  session <- shiny::getDefaultReactiveDomain()
  .check_session(session)
  session$sendCustomMessage("waitress-increase", opts)
}

#' @rdname waitress
#' @export
end_waitress <- function(){
	
  opts <- list()

  session <- shiny::getDefaultReactiveDomain()
  .check_session(session)
  session$sendCustomMessage("waitress-end", opts)
}