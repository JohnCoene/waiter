#' Waitress
#' 
#' Programatically show and hide loading screens.
#' 
#' @param dom Element selector to apply the waitress to, if \code{NULL} then the waitress is applied to the whole screen.
#' @param color,percent_color Color of waitress and color of percent text shown when 
#' \code{theme} is set to \code{overlay-percentß}.
#' @param theme A valid theme, see function usage.
#' 
#' @section Functions:
#' \itemize{
#'  \item{\code{use_waitress}: Dependencies for waitress, to include anywhere in your UI but ideally at the top.}
#'  \item{\code{call_waitress}: Initialise, returns an object of class waitress.}
#'  \item{\code{browse_waitresses}: Browse waitresses.}
#' }
#' 
#' @section Methods:
#' \itemize{
#'  \item{\code{start}: Start.}
#'  \item{\code{set}: Set at specific percentage, takes \code{percent} parameter.}
#'  \item{\code{auto}: Auto increment at given intervals, takes \code{percent} and \code{ms} parameters.}
#'  \item{\code{increase}: Increase by a certain percentage, takes \code{percent} parameter.}
#'  \item{\code{hide}: Hide the waitress.}
#' }
#' 
#' @section Parameters:
#' \itemize{
#'   \item{\code{percent}: Percentage to set or increase.}
#'   \item{\code{ms}: Milliseconds between each \code{percent} increase.}
#' }
#' 
#' @details You can pipe the methods with \code{$}. 
#' \code{Waitress$new()} and \code{call_waitress()} are equivalent.
#' 
#' @examples
#' library(shiny)
#' 
#' ui <- fluidPage(
#'   use_waitress("red"), # dependencies
#'   sliderInput("set", "percentage", 1, 100, step = 5, value = 1)
#' )
#' 
#' server <- function(input, output, session){
#'  
#'   w <- Waitress$
#'    new()$  # call a waitress
#'   	start() # start waitress
#' 	 
#'   observeEvent(input$set, {
#'     w$set(input$set) # set at percentage
#'   })
#' }
#' 
#' if(interactive()) shinyApp(ui, server)
#'  
#' @import shiny
#' @name waitress
#' @export
use_waitress <- function(color = "#b84f3e", percent_color = "#333333"){
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
			tags$style(
				paste0(".progressjs-theme-blue .progressjs-inner{background-color:", color, ";}"),
				paste0(".progressjs-theme-blueOverlay .progressjs-inner{background-color:", color, ";}"),
				paste0(".progressjs-theme-blueOverlayRadius .progressjs-inner{background-color:", color, ";}"),
				paste0(".progressjs-theme-blueOverlayRadiusHalfOpacity .progressjs-inner{background-color:", color, ";}"),
				paste0(".progressjs-theme-blueOverlayRadiusWithPercentBar .progressjs-inner{background-color:", color, ";}"),
				paste0(".progressjs-percent{color:", percent_color, ";}")
			),
      tags$script(
        src = "waiter-assets/waitress/custom.js"
      )
    )
  )
}

#' @rdname waitress
#' @export
Waitress <- R6::R6Class(
	"waitress",
	public = list(
		initialize = function(dom = NULL, theme = c("line", "overlay", "overlay-radius", "overlay-opacity", "overlay-percent")){

			name <- .random_name()

			theme <- match.arg(theme)
			overlay <- ifelse(grepl("overlay", theme), TRUE, FALSE)
			theme <- themes_to_js(theme)

			private$.name <- name
			private$.theme <- theme
			private$.overlay <- overlay
			private$.dom <- dom

			opts <- list(
				id = dom,
				name = name,
				options = list(
					theme = theme,
					overlayMode = overlay
				)
			)

			private$get_session()
			private$.session$sendCustomMessage("waitress-init", opts)
		},
		finalize = function(){
			opts <- list(name = private$.name)
			private$get_session()
			private$.session$sendCustomMessage("waitress-end", opts)
		},
		start = function(){
			opts <- list(name = private$.name)
			private$get_session()
			private$.session$sendCustomMessage("waitress-start", opts)
			invisible(self)
		},
		set = function(percent){
			opts <- list(name = private$.name, percent = percent)
			private$get_session()
			private$.session$sendCustomMessage("waitress-set", opts)
			invisible(self)
		},
		auto = function(percent, ms){
			opts <- list(name = private$.name, percent = percent, ms = ms)
			private$get_session()
			private$.session$sendCustomMessage("waitress-auto", opts)
			invisible(self)
		},
		increase = function(percent){
			opts <- list(name = private$.name, percent = percent)
			private$get_session()
			private$.session$sendCustomMessage("waitress-increase", opts)
			invisible(self)
		},
		hide = function(){
			opts <- list(name = private$.name)
			private$get_session()
			private$.session$sendCustomMessage("waitress-end", opts)
			invisible(self)
		},
		print = function(...){
			if(!is.null(private$.dom))
				print(paste("A waitress applied to", private$.dom))
			else
				print("A waitress applied to the whole page")
		}
	),
	private = list(
		.name = NULL,
		.theme = NULL,
		.overlay = NULL,
		.dom = NULL,
		.session = NULL,
		get_session = function(){
			private$.session <- shiny::getDefaultReactiveDomain()
			.check_session(private$.session)
		}
	)
)

#' @rdname waitress
#' @export
call_waitress <- function(dom = NULL, theme = c("line", "overlay", "overlay-radius", "overlay-opacity", "overlay-percent")){
	Waitress$new(dom, theme)
}

#' @rdname waitress
#' @export
browse_waitresses <- function() {
	shiny::runApp(appDir = system.file("waitress", package = 'waiter', mustWork = TRUE))
}