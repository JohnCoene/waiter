#' Waitress
#' 
#' Programatically show and hide loading screens.
#' 
#' @param dom Element selector to apply the waitress to, if \code{NULL} then the waitress is applied to the whole screen.
#' @param percent Percentage to set or increase.
#' @param ms Milliseconds between each \code{percent} increase.
#' @param waitress An object of class waitress as returned by \code{call_waitress}
#' 
#' @section Functions:
#' \itemize{
#'  \item{\code{use_waitress}: Dependencies for waitress, to include anywhere in your UI but ideally at the top.}
#'  \item{\code{call_waitress}: Initialise.}
#'  \item{\code{start_waitress}: Start.}
#'  \item{\code{set_waitress}: Set at specific percentage.}
#'  \item{\code{auto_waitress}: Auto increment.}
#'  \item{\code{increase_waitress}: Increase.}
#'  \item{\code{end_waitress}: End.}
#' }
#'  
#' @examples
#' library(shiny)
#' 
#' ui <- fluidPage(
#'   use_waitress(), # dependencies
#'   sliderInput("set", "percentage", 1, 100, step = 5, value = 1)
#' )
#' 
#' server <- function(input, output, session){
#'  
#'   w1 <- call_waitress() # call a waitress
#' 
#'   observeEvent(input$set, {
#'     set_waitress(w, input$set)
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
			tags$script("window.waitress = [];"),
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
call_waitress <- function(dom = NULL){

	name <- .random_name()
	
  opts <- list(
    id = dom,
		name = name
  )
  session <- shiny::getDefaultReactiveDomain()
  .check_session(session)
  session$sendCustomMessage("waitress-init", opts)

	.construct_waitress(opts)
}

#' @rdname waitress
#' @export
start_waitress <- function(waitress){

	if(missing(waitress))
		stop("missing waitress")
	
  opts <- list(name = waitress$name)
  session <- shiny::getDefaultReactiveDomain()
  .check_session(session)
  session$sendCustomMessage("waitress-start", opts)
	invisible(waitress)
}

#' @rdname waitress
#' @export
set_waitress <- function(waitress, percent){

	if(missing(waitress))
		stop("missing waitress")

	if(missing(percent))
		stop("missing percent", call. = FALSE)
	
  opts <- list(
		percent = percent,
		name = waitress$name
	)

  session <- shiny::getDefaultReactiveDomain()
  .check_session(session)
  session$sendCustomMessage("waitress-set", opts)
	invisible(waitress)
}

#' @rdname waitress
#' @export
auto_waitress <- function(waitress, percent, ms){

	if(missing(waitress))
		stop("missing waitress")

	if(missing(percent) || missing(ms))
		stop("missing percent or ms", call. = FALSE)
	
  opts <- list(
		name = waitress$name,
		percent = percent,
		ms = ms
	)

  session <- shiny::getDefaultReactiveDomain()
  .check_session(session)
  session$sendCustomMessage("waitress-auto", opts)
	invisible(waitress)
}

#' @rdname waitress
#' @export
increase_waitress <- function(waitress, percent){

	if(missing(waitress))
		stop("missing waitress")

	if(missing(percent))
		stop("missing percent", call. = FALSE)
	
  opts <- list(
		name = waitress$name,
		percent = percent
	)

  session <- shiny::getDefaultReactiveDomain()
  .check_session(session)
  session$sendCustomMessage("waitress-increase", opts)
	invisible(waitress)
}

#' @rdname waitress
#' @export
end_waitress <- function(waitress){

	if(missing(waitress))
		stop("missing waitress")
	
  opts <- list(name = waitress$name)

  session <- shiny::getDefaultReactiveDomain()
  .check_session(session)
  session$sendCustomMessage("waitress-end", opts)
}

#' @rdname waitress
#' @export
options_waitress <- function(waitress, ...){

	if(missing(waitress))
		stop("missing waitress")
	
  opts <- list(name = waitress$name, options = list(...))

  session <- shiny::getDefaultReactiveDomain()
  .check_session(session)
  session$sendCustomMessage("waitress-options", opts)
	invisible(waitress)
}