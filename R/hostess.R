#' Hostess
#' 
#' Add hostess dependencies.
#' 
#' @param id Id of hostess (valid CSS).
#' @param value Value to set, between \code{0} and \code{100}.
#' @param preset A loading bar preset, see section below.
#' @param text_color The color of the loading text.
#' @param class CSS class.
#' @param with_waiter Deprecate in favour of \code{center_page}.
#' @param center_page By default the hostess is \emph{not} centered in the middle
#' of the screen, centering in the middle of the page is however ideal when using 
#' it with waiter full screen, for the latter set to \code{TRUE}.
#' @param min,max Minimum and maximum representing the starting and ending
#' points of the progress bar.
#' @param ... Any other other advanced options to pass to the loaded
#' see the \href{https://loading.io/progress/}{official documentation}.
#' 
#' @section Presets:
#' \itemize{
#'   \item{\code{line}}
#'   \item{\code{fan}}
#'   \item{\code{circle}}
#'   \item{\code{bubble}}
#'   \item{\code{rainbow}}
#'   \item{\code{energy}}
#'   \item{\code{stripe}}
#'   \item{\code{text}}
#' }
#' 
#' @import shiny
#' @name hostess
#' @export
use_hostess <- function(){
  singleton(
    tags$head(
      tags$link(
        href = "waiter-assets/hostess/loading-bar.min.css",
        rel="stylesheet",
        type="text/css"
      ),
      tags$link(
        href = "waiter-assets/hostess/custom-style.css",
        rel="stylesheet",
        type="text/css"
      ),
      tags$script(
        src = "waiter-assets/hostess/loading-bar.min.js"
      ),
      tags$script(
        src = "waiter-assets/hostess/custom.js"
      )
    )
  )
}

#' @rdname hostess
#' @export
hostess_loader <- function(id = "hostess", preset = NULL, text_color = "#FFFFFF", 
  center_page = FALSE, class = "", min = 0, max = 100, ..., with_waiter){

  if(id == "hostess")
    warning("Using default `id`", call. = FALSE)

  # will remove at > 0.1.0
  if(!missing(with_waiter)){
    .Deprecated("center_page", package = "waiter", "The `with_waiter` argument is deprecated in favour of `center_page`.")
    
    # don't break stuff...
    if(is.logical(with_waiter))
      center_page <- with_waiter
  }

  if(!is.null(preset))
    if(!preset %in% hostess_presets)
      stop("Invalid preset, see `?hostess_spinner` for valid values", call. = FALSE)

  if(center_page)
    class <- paste(class, "hostess-center")

  style <- paste0("color:", text_color, ";")
  
  loader <- div(
    id = id, 
    `data-preset` = preset, 
    class = class, 
    style = style, 
    `data-min` = min,
    `data-max` = max,
    ...
  )

  return(loader)
}

#' @rdname hostess
#' @export
hostess_init <- function(id = "hostess"){
  if(id == "hostess")
    warning("Using default `id`", call. = FALSE)

  .Deprecated("Hostess", package = "waiter", "Deprecated in favour of R6Class <Waitress>")

  session <- shiny::getDefaultReactiveDomain()
  .check_session(session)

  session$sendCustomMessage("hostess-init", list(id = id))
}

#' @rdname hostess
#' @export
hostess_set <- function(id = "hostess", value){
  if(id == "hostess")
    warning("Using default `id`", call. = FALSE)

  .Deprecated("Hostess", package = "waiter", "Deprecated in favour of R6Class <Waitress>")

  session <- shiny::getDefaultReactiveDomain()
  .check_session(session)

  session$sendCustomMessage("hostess-set", list(id = id, value = value))
}

#' @rdname hostess
#' @export
Hostess <- R6::R6Class(
  "Hostess",
  public = list(
#' @details
#' Create a hostess.
#' 
#' @param id Id used in `hostess_loader` if you generate the loader with 
#' the \code{loader} method you may leave this \code{NULL}.
#' @param min,max Minimum and maximum representing the starting and ending
#' points of the progress bar.
#' 
#' @examples
#' \dontrun{Hostess$new()}
    initialize = function(id = NULL, min = 0, max = 100){
      if(is.null(id))
        id <- .random_name()

      session <- shiny::getDefaultReactiveDomain()
      .check_session(session)
      private$.session <- session
      private$.id <- id
      private$.min <- min
      private$.max <- max
    },
#' @details
#' Start the hostess
    start = function(){
      private$.started <- TRUE
      private$.session$sendCustomMessage("hostess-init", list(id = private$.id))
      invisible(self)
    },
#' @details
#' Print the hostess
		print = function(){
      cat("A hostess on", private$.id, "\n")
		},
#' @details
#' Set the hostess loading bar.
#' 
#' @param value Value to set, between \code{0} and \code{100}.
#' 
#' @examples
#' \dontrun{Hostess$new()$set(20)}
    set = function(value){
      if(missing(value))
        stop("Missing `value`", call. = FALSE)

      # start the hostess if has not been done
      if(!private$.started)
        self <- self$start()

      # keep track for inc mthod
      private$.current_value <- value

      opts <- list(id = private$.id, value = value)
      private$.session$sendCustomMessage("hostess-set", opts)
      invisible(self)
    },
#' @details
#' Increase the hostess loading bar.
#' 
#' @param value Value to set, between \code{0} and \code{100}.
#' 
#' @examples
#' \dontrun{Hostess$new()$inc(10)}
    inc = function(value){
      if(missing(value))
        stop("Missing `value`", call. = FALSE)

      # start the hostess if has not been done
      if(!private$.started)
        self <- self$start()

      # increment
      value <- private$.current_value + value
      private$.current_value <- value

      opts <- list(id = private$.id, value = value)
      private$.session$sendCustomMessage("hostess-set", opts)
      invisible(self)
    },
#' @details
#' Create a hostess loading bar.
#' @param value Value to set, between \code{0} and \code{100}.
#' @param preset A loading bar preset, see section below.
#' @param text_color The color of the loading text.
#' @param class CSS class.
#' @param with_waiter Deprecate in favour of \code{center_page}.
#' @param center_page By default the hostess is centered in the middle
#' of the screen, ideal when using it with waiter full screen, set to 
#' \code{FALSE} to prevent that.
#' @param min,max Minimum and maximum representing the starting and ending
#' points of the progress bar.
#' @param ... Any other other advanced options to pass to the loaded
#' see the \href{https://loading.io/progress/}{official documentation}.
    loader = function(preset = NULL, text_color = "#FFFFFF", center_page = FALSE, 
      class = "", min = NULL, max = NULL, ...){
      
      # allow overriding min and max
      if(!is.null(min))
        private$.min <- min

      if(!is.null(max))
        private$.max <- max

      hostess_loader(id = private$.id, preset = preset, text_color = text_color, 
        center_page = center_page, class = class, 
        min = private$.min, max = private$.max, ...)
    }
  ),
  private = list(
    .id = NULL,
    .session = NULL,
    .started = FALSE,
    .min = 0,
    .max = 100,
    .current_value = 0
  )
)