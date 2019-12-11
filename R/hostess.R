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
#' @param svg Either an svg path e.g.: \code{M10 10L90 10} or the path to a \code{.svg}
#' file. Note that if passing the latter it must be made available to Shiny by
#' placing it either in the \code{www} folder or using \link[shiny]{addResourcePath}.
#' @param progress_type The progress type, either \code{stroke} or \code{fill}.
#' Ther former traces the path of the \code{svg} while the latter fills it progressively.
#' @param fill_direction,stroke_direction The direction which the progress bar should
#' take. Wether \code{fill_direction} or \code{stroke_direction} is used depends on
#' \code{progress_type}.
#' @param fill_color,stroke_color The color to use for the progress bar. 
#' Wether \code{fill_color} or \code{stroke_color} is used depends on 
#' \code{progress_type}.
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
  center_page = FALSE, class = "", min = 0, max = 100, svg = NULL, 
  progress_type = c("stroke", "fill"), fill_direction = c("ttb", "btt", "ltr", "rtl"),
  stroke_direction = c("normal", "reverse"), fill_color = NULL, stroke_color = NULL, 
  ..., with_waiter){

  progress_type <- match.arg(progress_type)
  fill_direction <- match.arg(fill_direction)
  stroke_direction <- match.arg(stroke_direction)

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

  if(!is.null(svg)){
    # check if ends in .svg
    # if .svg use data-img otherwise use data-path
    is_img <- grepl("\\.svg", svg)

    opts <- list()

    if(is_img)
      opts[["data-img"]] <- svg
    else
      opts[["data-path"]] <- svg

    # set direction based on progress_type: stroke or fill
    if(progress_type == "fill")
      opts[["data-fill-dir"]] <- fill_direction
    else
      opts[["data-stroke-dir"]] <- stroke_direction

    # set color based on progress_type: stroke or fill
    if(progress_type == "fill" && !is.null(fill_color))
      opts[["data-fill"]] <- fill_color
    else if(progress_type == "stroke" && !is.null(stroke_color))
      opts[["data-stroke"]] <- stroke_color

    # add fill type
    opts[["data-type"]] <- progress_type
    opts$tag <- loader
    loader <- do.call(tagAppendAttributes, opts) 
  }

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
#' @param svg Either an svg path e.g.: \code{M10 10L90 10} or the path to a \code{.svg}
#' file. Note that if passing the latter it must be made available to Shiny by
#' placing it either in the \code{www} folder or using \link[shiny]{addResourcePath}.
#' @param progress_type The progress type, either \code{stroke} or \code{fill}.
#' Ther former traces the path of the \code{svg} while the latter fills it progressively.
#' @param fill_direction,stroke_direction The direction which the progress bar should
#' take. Wether \code{fill_direction} or \code{stroke_direction} is used depends on
#' \code{progress_type}.
#' @param fill_color,stroke_color The color to use for the progress bar. 
#' Wether \code{fill_color} or \code{stroke_color} is used depends on 
#' \code{progress_type}.
#' @param ... Any other other advanced options to pass to the loaded
#' see the \href{https://loading.io/progress/}{official documentation}.
    loader = function(preset = NULL, text_color = "#FFFFFF", center_page = FALSE, 
      class = "", min = NULL, max = NULL, svg = NULL, progress_type = c("stroke", "fill"), 
      fill_direction = c("ttb", "btt", "ltr", "rtl"), stroke_direction = c("normal", "reverse"), 
      fill_color = NULL, stroke_color = NULL, ...){

      if(!is.null(private$.loader))
        return(private$.loader)
      
      # allow overriding min and max
      if(!is.null(min))
        private$.min <- min

      if(!is.null(max))
        private$.max <- max

      hostess_loader(id = private$.id, preset = preset, text_color = text_color, 
        center_page = center_page, class = class, 
        min = private$.min, max = private$.max, svg = svg, progress_type = progress_type,
        fill_direction = fill_direction, stroke_direction = stroke_direction, 
        stroke_color = stroke_color, ...)
    }
  ),
  active = list(
#' @field set_loader Set a loader as created by \code{\link{hostess_loader}}.
    set_loader = function(value){
      if(missing(value)){
        return(private$.loader)
      } else {
        # change id, min and max to match class
        value$attribs$id <- private$.id
        value$attribs[["data-min"]] <- private$.min
        value$attribs[["data-max"]] <- private$.max
        private$.loader <- value
      }
        
      invisible(self)
    }
  ),
  private = list(
    .id = NULL,
    .session = NULL,
    .started = FALSE,
    .min = 0,
    .max = 100,
    .current_value = 0,
    .loader = NULL
  )
)