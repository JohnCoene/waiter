#' Butler
#'
#' Programmatically show and hide loading bar.
#'
#' @param thickness Thickness of the bar.
#' @param colors List of gradient color stops used to draw the progress bar.
#' @param shadow_blur Shadow blur size.
#' @param shadow_color Shadow color.
#' 
#' @section Functions:
#' \itemize{
#'  \item{\code{use_butler}: butler dependencies to include anywhere in your UI but ideally at the top.}
#'  \item{\code{show_butler}: Show a butler.}
#'  \item{\code{hide_butler}: Hide butler.}
#'  \item{\code{config_butler}: Configure the butler.}
#' }
#' 
#' @section Class:
#' Arguments passed to \code{config_butler} are passed to the initialisation method \code{new}.
#' \itemize{
#'   \item{\code{Butler}: initiatlise a Butler.} 
#' }
#'
#' @examples
#' library(shiny)
#' 
#' ui <- fluidPage(
#' 	use_butler(),
#' 	br(),
#' 	actionButton("show", "show butler"),
#' 	actionButton("hide", "hide butler")
#' )
#' 
#' server <- function(input, output){
#' 
#' 	observeEvent(input$show,{
#' 		show_butler()
#' 	})
#' 
#' 	observeEvent(input$hide,{
#' 		hide_butler()
#' 	})
#' 
#' }
#' 
#' if(interactive()) shinyApp(ui, server)
#' 
#' @name butler
#' @export
use_butler <- function(){
  singleton(
    tags$head(
      tags$script("window.butler;"),
      tags$script(
        src = "waiter-assets/butler/topbar.min.js"
      ),
      tags$script(
        src = "waiter-assets/butler/custom.js"
      )
    )
  )
}

#' @rdname butler
#' @export
show_butler <- function(){
  session <- shiny::getDefaultReactiveDomain()
  .check_session(session)
  session$sendCustomMessage("butler-show", list())
}

#' @rdname butler
#' @export
hide_butler <- function(){
  session <- shiny::getDefaultReactiveDomain()
  .check_session(session)
  session$sendCustomMessage("butler-hide", list())
}

#' @rdname butler
#' @export
config_butler <- function(thickness = 5, colors = list("0" = "red", ".3" = "blue", "1" = "green"),
	shadow_blur = 5, shadow_color = "rgba(0, 0, 0, .5)"){

	opts <- list(
		autoRun = TRUE,
		barThickness = thickness,
		barColors = colors,
		shadowBlur = shadow_blur,
		shadowColor = shadow_color
	)
  session <- shiny::getDefaultReactiveDomain()
  .check_session(session)
  session$sendCustomMessage("butler-config", opts)
}

#' @rdname butler
#' @export
Butler <- R6::R6Class(
  "butler",
  public = list(
    initialize = function(
      thickness = 5, 
      colors = list("0" = "red", ".3" = "blue", "1" = "green"),
	    shadow_blur = 5, 
      shadow_color = "rgba(0, 0, 0, .5)"){

      private$.thickness <- thickness
      private$.colors <- colors
      private$.shadow_blur <- shadow_blur
      private$.shadow_color <- shadow_color

      private$get_session()
      private$.session$sendCustomMessage("butler-config", opts)
    },
    finalize = function(){
      public$hide()
    },
    show = function(){
      private$get_session()
      private$.session$sendCustomMessage("butler-show", list())
    },
    hide = function(){
      private$get_session()
      private$.session$sendCustomMessage("butler-hide", list())
    }
  ),
  private = list(
    .thickness = 5,
    .colors = list("0" = "red", ".3" = "blue", "1" = "green"),
    .shadow_blur = 5,
    .shadow_color = "rgba(0, 0, 0, .5)",
    .session = NULL,
		get_session = function(){
			private$.session <- shiny::getDefaultReactiveDomain()
			.check_session(private$.session)
		}
  )
)