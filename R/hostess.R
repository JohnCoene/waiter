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
#' @param center_page By default the hostess is centered in the middle
#' of the screen, ideal when using it with waiter full screen, set to 
#' \code{FALSE} to prevent that.
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
hostess_loader <- function(id = "hostess", preset = NULL, text_color = "#FFFFFF", center_page = TRUE, class = "", ..., with_waiter){
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
  
  div(id = id, `data-preset` = preset, class = class, style = style, ...)
}

#' @rdname hostess
#' @export
hostess_init <- function(id = "hostess"){
  if(id == "hostess")
    warning("Using default `id`", call. = FALSE)

  session <- shiny::getDefaultReactiveDomain()
  .check_session(session)

  session$sendCustomMessage("hostess-init", list(id = id))
}

#' @rdname hostess
#' @export
hostess_set <- function(id = "hostess", value){
  if(id == "hostess")
    warning("Using default `id`", call. = FALSE)

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
#' @param id Id used in `hostess_loader`.
#' 
#' @examples
#' \dontrun{Hostess$new("mySpinner")}
    initialize = function(id = "hostess"){
      if(id == "hostess")
        warning("Using default `id`", call. = FALSE)

      session <- shiny::getDefaultReactiveDomain()
      .check_session(session)
      private$.session <- session

      session$sendCustomMessage("hostess-init", list(id = id))
      private$.id <- id
    },
#' @details
#' print the hostess
		print = function(){
      cat("A hostess on", private$.id, "\n")
		},
#' @details
#' Set the hostess loading bar.
#' 
#' @param value Value to set, between \code{0} and \code{100}.
#' 
#' @examples
#' \dontrun{Hostess$new()}
    set = function(value){
      if(missing(value))
        stop("Missing `value`", call. = FALSE)

      private$.session$sendCustomMessage("hostess-set", list(id = private$.id, value = value))
      invisible(self)
    }
  ),
  private = list(
    .id = NULL,
    .session = NULL
  )
)