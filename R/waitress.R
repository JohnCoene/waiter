#' Waitress
#' 
#' Programatically show and hide loading bars.
#' 
#' @param color,percent_color Color of waitress and color of percent text shown when 
#' \code{theme} is set to \code{overlay-percent}.
#' 
#' @details You can pipe the methods with \code{$}. 
#' \code{Waitress$new()} and \code{call_waitress()} are equivalent.
#' 
#' @examples
#' library(shiny)
#' 
#' ui <- fluidPage(
#'   useWaitress("red"), # dependencies
#'   sliderInput("set", "percentage", 1, 100, step = 5, value = 1)
#' )
#' 
#' server <- function(input, output, session){
#'  
#'   w <- Waitress$
#'    new()$  # call a waitress
#'   	start() # start waitress
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
useWaitress <- function(color = "#697682", percent_color = "#333333"){
  dep <- htmltools::htmlDependency(
    name = "waitress",
    version = utils::packageVersion("waiter"),
    src = "packer",
    package = "waiter",
    script = "waitress.js"
  )
	singleton(
		tags$head(
			tags$style(
				paste0(".progressjs-theme-blue .progressjs-inner{background-color:", color, ";}"),
				paste0(".progressjs-theme-blueOverlay .progressjs-inner{background-color:", color, ";}"),
				paste0(".progressjs-theme-blueOverlayRadius .progressjs-inner{background-color:", color, ";}"),
				paste0(".progressjs-theme-blueOverlayRadiusHalfOpacity .progressjs-inner{background-color:", color, ";}"),
				paste0(".progressjs-theme-blueOverlayRadiusWithPercentBar .progressjs-inner{background-color:", color, ";}"),
				paste0(".progressjs-percent{color:", percent_color, ";}")
			),
			dep
		)
	)
}

#' @rdname waitress
#' @export
use_waitress <- function(color = "#697682", percent_color = "#333333"){
  # to deprecate
	useWaitress(color, percent_color)
}

#' Waitress R6 Class
#' 
#' Create a waitress (progress bar) and programmatically set or increase 
#' its percentage, then hide it when done. 
#' 
#' @name waitressClass
#' @export
Waitress <- R6::R6Class(
	"waitress",
	public = list(
#' @details
#' Create a waitress.
#' 
#' @param selector Element selector to apply the waitress to, 
#' if \code{NULL} then the waitress is applied to the whole screen.
#' @param color,percent_color Color of waitress and color of percent text shown when 
#' \code{theme} is set to \code{overlay-percent}.
#' @param theme A valid theme, see function usage.
#' @param min,max Minimum and maximum representing the starting and ending
#' points of the progress bar.
#' @param infinite Set to \code{TRUE} to create a never ending loading bar, ideal
#' when you cannot compute increments or assess the time it might take before the
#' loading bar should be removed.
#' @param hide_on_render Set to \code{TRUE} to automatically hide the waitress
#' when the element in \code{id} is rendered. Note the latter will work with
#' shiny plots, tables, htmlwidgets, etc. but will not work with arbitrary
#' elements.
#' 
#' @examples
#' \dontrun{Waitress$new("#plot")}
		initialize = function(selector = NULL, theme = c("line", "overlay", "overlay-radius", "overlay-opacity", "overlay-percent"),
		min = 0, max = 100, infinite = FALSE, hide_on_render = FALSE){

			# create a random unique identifier
			name <- .random_name()

			# convert theme argument to JavaScript
			theme <- match.arg(theme)
			overlay <- ifelse(grepl("overlay", theme), TRUE, FALSE)
			theme <- themes_to_js(theme)

			# override min/max if infinite
			if(infinite){
				min <- 0
				max <- 100
			}

			if(!is.null(selector))
				if(!grepl("^#", selector) && hide_on_render)
					stop("`hide_on_render` will only work if the `selector` is an #id")

      private$.hide_on_render <- hide_on_render
			private$.name <- name
			private$.theme <- theme
			private$.overlay <- overlay
			private$.dom <- selector
			private$.min <- min
			private$.max <- max
      private$.infinite <- infinite

			invisible(self)
		},
#' @details
#' Start the waitress.
#' 
#' @param html HTML content to show over the waitress, 
#' accepts htmltools and shiny tags.
#' @param background_color The background color of the html.
#' @param text_color The color of the \code{html} content.
#' 
#' @examples
#' \dontrun{Waitress$new("#plot")$start()}
		start = function(html = NULL, background_color = "transparent", 
			text_color = "black"){
			id <- private$.dom

			# initialised if has not been done already
			if(!private$.initialised)
				private$.initialised <- private$init()

			# process html and id
			if(!is.null(html)){

				# check if selector is id
				if(!is.null(id))
					if(!grepl("^#", id))
						stop("`html` will only work when the `selector` is an #id.")

				# otherwise breaks .innerHTML
				if(is.character(html))
					html <- span(html)

				html <- as.character(html)
			}

      id <- gsub("^#", "", id)

			# no need to rerun start
			private$.started <- TRUE

			opts <- list(
        name = private$.name, 
        infinite = private$.infinite, 
        id = id, 
        html = html, 
        hideOnRender = private$.hide_on_render,
        backgroundColor = background_color,
        textColor = text_color,
				isNotification = FALSE
      )

			private$get_session()
			private$.session$sendCustomMessage("waitress-start", opts)
			invisible(self)
		},
#' @details
#' Show the waitress as a notification. 
#' 
#' @param html HTML content to show over the waitress, 
#' accepts htmltools and shiny tags.
#' @param background_color The background color of the html.
#' @param text_color The color of the \code{html} content.
#' @param position Position of the notification on the screen.
#' Where \code{br} is the bottom-right, \code{tr} is the top-right,
#' \code{bl} is bottom-left, and \code{tl} is the top-left.
#' 
#' @examples
#' \dontrun{Waitress$new()$notify()}
		notify = function(html = NULL, background_color = "white", 
			text_color = "black", position = c("br", "tr", "bl", "tl")){
			
			id <- private$.dom
			private$.is_notification <- TRUE

			# process html and id
			if(!is.null(html)){
				# force html tag otherwise breaks .innerHTML
				if(is.character(html))
					html <- p(html)
			} else {
				html <- p(style = "width:200px;")
			}

			# convert to html tags
			html <- as.character(html)

			# initialised if has not been done already
			if(!private$.initialised)
				private$.initialised <- private$init(
					id = private$.name, # will be id of notification DIV
					html = html,
					backgroundColor = background_color,
					textColor = text_color,
					position = match.arg(position),
					notify = TRUE # will trigger adding DIV JS side
				)

			if(!is.null(id))
				if(grepl("^#", id))
					id <- gsub("^#", "", id)

			# no need to rerun start
			private$.started <- TRUE

			opts <- list(
        name = private$.name, 
        infinite = private$.infinite, 
        id = id,
				hideOnRender = private$.hide_on_render,
				isNotification = TRUE
      )

			private$get_session()
			private$.session$sendCustomMessage("waitress-start", opts)
			invisible(self)
		},
#' @details
#' Set the waitress to a specific percentage.
#' 
#' @param value Value to set waitress to.
#' 
#' @examples
#' \dontrun{Waitress$new("#plot")$set(20)}
		set = function(value){
			if(missing(value))
				stop("Missing `value`", call. = FALSE)

			private$get_session()
			private$.value <- value

			if(!private$.started)
				self <- self$start()

			# rescale from min - max to 0 - 100
			value <- private$rescale(value)

			opts <- list(name = private$.name, percent = value)
			private$.session$sendCustomMessage("waitress-set", opts)
			invisible(self)
		},
#' @details
#' Automatically start and end the waitress.
#' 
#' @param value Value to set waitress to.
#' @param ms Number of Milliseconds
#' 
#' @examples
#' \dontrun{Waitress$new("#plot")$auto(20, 2000)}
		auto = function(value, ms){
			private$get_session()
			private$.value <- value

			if(!private$.started)
				self <- self$start()

			# rescale from min - max to 0 - 100
			value <- private$rescale(value)

			opts <- list(name = private$.name, percent = value, ms = ms)
			private$.session$sendCustomMessage("waitress-auto", opts)
			invisible(self)
		},
#' @details
#' Increase the waitress by a percentage.
#' 
#' @param value Value to increase waitress to.
#' 
#' @examples
#' \dontrun{Waitress$new("#plot")$inc(30)}
		inc = function(value){
			private$get_session()
			private$.value <- value
			
			if(!private$.started)
				self <- self$start()

			# rescale from min - max to 0 - 100
			value <- private$rescale(value)

			opts <- list(name = private$.name, percent = value)
			private$.session$sendCustomMessage("waitress-increase", opts)
			invisible(self)
		},
#' @details
#' Close the waitress.
#' 
#' @examples
#' \dontrun{Waitress$new("#plot")$close()}
		close = function(){
			opts <- list(
				name = private$.name, 
				infinite = private$.infinite,
				is_notification = private$.is_notification
			)

			if(!is.null(private$.dom))
				if(grepl("^#", private$.dom))
					opts$id <- gsub("^#", "", private$.dom)

			private$get_session()
			private$.session$sendCustomMessage("waitress-end", opts)
			invisible(self)
		},
#' @details Get minimum value
		getMin = function(){
			private$.min
		},
#' @details Get maximum value
		getMax = function(){
			private$.max
		},
#' @details Get current value
		getValue = function(){
			private$.value
		},
#' @details
#' Print the waitress.
#' 
#' @examples
#' \dontrun{Waitress$new("#plot")$hide()}
		print = function(){
			if(!is.null(private$.dom))
				cat("A waitress applied to", private$.dom, "\n")
			else if(!private$.is_notification)
				cat("A waitress applied to the whole page\n")
			else if (private$.is_notification)
				cat("A waitress notification\n")
		}
	),
	active = list(
#' @field max Maximum value of the bar.
		max = function(value) {
			if(missing(value))
				return(private$.max)

			private$.max <- value
		},
#' @field min Minimum value of the bar.
		min = function(value) {
			if(missing(value))
				return(private$.min)

			private$.min <- value
		}
	),
	private = list(
		.name = NULL,
		.theme = NULL,
		.overlay = NULL,
		.dom = NULL,
		.session = NULL,
		.started = FALSE,
		.initialised = FALSE,
		.min = 0,
		.max = 100,
		.value = 0,
    .infinite = FALSE,
    .hide_on_render = FALSE,
		.is_notification = FALSE,
		rescale = function(value){
			floor(((value-private$.min)/(private$.max - private$.min)) * 100)
		},
		get_session = function(){
			private$.session <- shiny::getDefaultReactiveDomain()
		},
		init = function(id = NULL, ...){

			if(is.null(id))
				id <- private$.dom
			
			opts <- list(
				id = id,
				name = private$.name,
				options = list(
					theme = private$.theme,
					overlayMode = private$.overlay
				)
			)

			# append additional options for notification
			# need to create dom BEFORE initialisation
			additional_options <- list(...)
			opts <- append(opts, additional_options)

			private$get_session()
			private$.session$sendCustomMessage("waitress-init", opts)
			return(TRUE)
		}
	)
)
