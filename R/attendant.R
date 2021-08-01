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
#' @param color Color of the progress bar.
#' @param striped Whether the progress bar should be striped.
#' @param animated Whether to animate the stripe on the progress
#' bar.
#' @param height Height of the progress bar, numerical values
#' are converted to pixels (`px` CSS).
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
	class = "",
	style = ""
){

	if(missing(id))
		stop("Missing `id`", call. = FALSE)

	if(is.numeric(height))
		height <- sprintf("%spx", height)
	
	height <- sprintf("height: %s;", height)
	height <- paste(height, style)

	color <- match.arg(color)
	cl <- sprintf("progress-bar bg-%s", color)

	if(striped)
		cl <- paste(cl, "progress-bar-striped")

	if(animated)
		cl <- paste(cl, "progress-bar-animated")

	cl <- paste(cl, class)

	shiny::tags$div(
		class = "progress",
		id = id,
		style = height,
		shiny::tags$div(
			class = "progress-bar",
			role = cl,
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
		initialize = function(
			id, 
			session = shiny::getDefaultReactiveDomain(),
			hide_on_max = FALSE
		){

			if(missing(id))
				stop("Missing `id`", call. = FALSE)

			private$.id <- id
			private$.session <- session
			private$.hideOnEnd <- hide_on_max
		},
#' @details Increase
#' @param value Value to increase the progress bar.
#' @param text Text to display on the progress bar.
		inc = function(value = 1, text = NULL){
			private$.value = private$.value + value;
			private$set(private$.value, text = text)
			invisible(self)
		},
#' @details Decrease
#' @param value Value to decrease the progress bar.
#' @param text Text to display on the progress bar.
		dec = function(value = 1, text = NULL){
			private$.value = private$.value - value;
			private$set(private$.value, text = text)
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
#' @details Automatically increase the progress bar until done
#' @param ms Milliseconds between increment of `value`.
#' @param value Value to increment by at every `ms`.
		auto = function(ms = 400){
			private$.sendMessage("attendant-auto", ms = ms, value = 1)
		}
	),
	private = list(
		.value = 0,
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