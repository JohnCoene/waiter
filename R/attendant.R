#' Attendant Progress Dependencies
#' 
#' Include in anywhere your shiny UI to import the
#' dependencies required to run attendant progress.
#' 
#' @export 
useAttendant <- function(){
  htmltools::htmlDependency(
    name = "attendant",
    version = utils::packageVersion("waiter"),
    src = "packer",
    package = "waiter",
    script = "attendant.js"
  )
}

#' Bootstrap 4 Loading Bar
#' 
#' Create a Bootstrap 4 progress bar.
#' 
#' @param id A unique identifier for the progress bar.
#' Used in `Attendant` class for handling.
#' @param value,min,max Initial value, minimum, and maximum
#' values the progress bar can take.
#' @param text Optional text to display on the progress bar.
#' This can then be dynamically modified with `Attendant`.
#' @param bg_color,color Color, and background color 
#' of the progress bar.
#' @param striped Whether the progress bar should be striped.
#' @param animated Whether to animate the stripe on the progress
#' bar.
#' @param height Height of the progress bar, numerical values
#' are converted to pixels (`px` CSS), any other valid CSS size
#' is valid too.
#' @param width Width of the bar, defaults to `100%`, numerical
#' values (e.g.: `42`) are converted to pixels (`px`).
#' @param class,style Additional style and class to pass to the
#' parent wrapper of the progress bar.
#' 
#' @export 
attendantBar <- function(
	id, 
	value = 0, 
	min = 0, 
	max = 100,
	text = NULL,
	color = c("primary", "info", "success", "danger", "warning"),
	striped = FALSE,
	animated = FALSE,
	height = 20,
	width = "100%",
	class = "",
	style = "",
	bg_color = "#f5f5f5"
){

	if(missing(id))
		stop("Missing `id`", call. = FALSE)

	if(is.numeric(height))
		height <- sprintf("%spx", height)
	
	if(is.numeric(width))
		width <- sprintf("%spx", width)
	
	height <- sprintf("height: %s;width:%s;background-color:%s;", height, width, bg_color)
	style <- paste(style, height)

	color <- match.arg(color)
	class_inner <- sprintf("progress-bar bg-%s", color)

	if(striped)
		class_inner <- paste(class_inner, "progress-bar-striped")

	if(animated)
		class_inner <- paste(class_inner, "progress-bar-animated")

	class_outer <- paste("progress", class)

	shiny::tags$div(
		class = class_outer,
		id = id,
		style = style,
		shiny::tags$div(
			class = class_inner,
			role = "progressbar",
			`aria-valuenow` = as.character(value),
			`aria-valuemin` = as.character(min),
			`aria-valuemax` = as.character(max),
			text
		)
	)
}

#' Attendant
#' 
#' Manage the attendant loading bar with bootstrap 4.
#' 
#' @export 
Attendant <- R6::R6Class(
	"Attendant",
	public = list(
#' @details Initialise a progress bar
#' @param id Id of progress bar set with [attendantBar].
#' @param session A valid shiny session.
#' @param hide_on_max Whether to hide the progress bar when
#' it reaches its maximum value (defined in [attendantBar]).
#' The progress bar automatically becomes visible again when
#' it is set to a value below the maximum.
#' @param min,max Minimum and maximum value of the progress bar.
		initialize = function(
			id, 
			min = NULL,
			max = NULL,
			session = shiny::getDefaultReactiveDomain(),
			hide_on_max = FALSE
		){

			if(missing(id))
				stop("Missing `id`", call. = FALSE)

			private$.min <- min
			private$.max <- max

			private$.id <- id
			private$.session <- session
			private$.hideOnEnd <- hide_on_max
			
			if(!is.null(min))
				private$.sendMessage('attendant-set-min', min = min)
			
			if(!is.null(max))
				private$.sendMessage('attendant-set-max', max = max)
		},
#' @details Increase
#' @param value Value to increase the progress bar.
#' @param text Text to display on the progress bar.
		inc = function(value = 1, text = NULL){
			private$.value = private$.value + value;
			self$set(private$.value, text = text)
			invisible(self)
		},
#' @details Decrease
#' @param value Value to decrease the progress bar.
#' @param text Text to display on the progress bar.
		dec = function(value = 1, text = NULL){
			private$.value = private$.value - value;
			self$set(private$.value, text = text)
			invisible(self)
		},
#' @details Set
#' @param value Value to set the progress bar.
#' @param text Text to display on the progress bar.
		set = function(value, text = NULL){
			if(missing(value))
				stop("Missing `value`", call. = FALSE)
			
			private$.value = value;

			private$.sendMessage("attendant-set", value = value, text = text)
			invisible(self)
		},
#' @details Done with progress
#' @param text Text to display on the progress bar.
		done = function(text = NULL){
			private$.sendMessage("attendant-done", text = text)
		},
#' @details Done with progress
#' @param text Text to display on the progress bar.
		close = function(text = NULL){
			private$.sendMessage("attendant-done", text = text)
		},
#' @details Automatically increase the progress bar until done
#' @param ms Milliseconds between increment of `value`.
#' @param value Value to increment by at every `ms`.
		auto = function(ms = 400, value = 1){
			private$.sendMessage("attendant-auto", ms = ms, value = 1)
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
		}
	),
	private = list(
		.value = 0,
		.min = NULL,
		.max = NULL,
		.id = NULL,
		.session = NULL,
		.hideOnEnd = FALSE,
		.sendMessage = function(type, ...){
			private$.session$sendCustomMessage(
				type,
				list(
					...,
					hideOnEnd = private$.hideOnEnd,
					id = private$.id
				)
			)
		}
	)
)