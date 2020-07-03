#' Attendant
#' 
#' Imports dependencies for the attendant
#' 
#' @details Place anywhere in your shiny UI.
#' 
#' @import shiny
#' @name attendant
#' @export
use_attendant <- function(){
	singleton(
		tags$head(
			tags$script(
				src = "waiter-assets/attendant/attendant.js"
			),
			tags$script(
				src = "waiter-assets/attendant/custom.js"
			)
		)
	)
}

#' Attendant
#' 
#' Programatically show and hide infinite loading bars.
#' 
#' @export
Attendant <- R6::R6Class(
  "attendant",
  public = list(
#' @details
#' Initialise the attendant
#' @param id Id of element to apply attendant to.
    initialize = function(id = NULL){
      private$.id = .random_name()

      options <- list()
      
			private$.session <- shiny::getDefaultReactiveDomain()
			.check_session(private$.session)

      msg <- list(id = private$.id, options = options, container = id)

      private$.session$sendCustomMessage('attendant-init', msg)
    },
#' @details
#' Start the attendant
    start = function(){
      msg <- list(id = private$.id)
      private$.session$sendCustomMessage('attendant-start', msg)
      invisible(self)
    },
#' @details
#' Close the attendant
    close = function(){
      msg <- list(id = private$.id)
      private$.session$sendCustomMessage('attendant-end', msg)
      invisible(self)
    }
  ),
  private = list(
    .id = NULL,
    .session = NULL
  )
)