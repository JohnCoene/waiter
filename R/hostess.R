#' Hostess
#' 
#' Add hostess dependencies.
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
#' @param n Number of loaders to generate.
#' @param infinite Set to \code{TRUE} to create a never ending loading bar, ideal
#' when you cannot compute increments or assess the time it might take before the
#' loading bar should be removed.
#' 
#' @examples
#' \dontrun{Hostess$new()}
    initialize = function(id = NULL, min = 0, max = 100, n = 1, infinite = FALSE){
      if(is.null(id))
        id <- .random_name()

      if(!inherits(id, "character"))
        stop("`id` must be of class character", call. = FALSE)

      # add additional ids
      if(n > 1){
        n <- n - 1
        id2 <- sapply(1:n, function(x) .random_name())
        id <- c(id, id2) 
      }
      
      # override min/max if infinite
      if (infinite) {
        min <- 0
        max <- 100
      }

      session <- shiny::getDefaultReactiveDomain()
      .check_session(session)
      private$.session <- session
      private$.id <- id
      private$.min <- min
      private$.max <- max
      private$.infinite <- infinite
    },
#' @details
#' Start the hostess
    start = function(){
      private$.started <- TRUE
      opts <- list(infinite = private$.infinite)
      for(i in 1:length(private$.id)){
        opts$id <- private$.id[i]
        private$.session$sendCustomMessage("hostess-init", opts)
      }
      invisible(self)
    },
#' @details
#' Print the hostess
		print = function(){
      ids <- paste0(private$.id, collapse = ", ")
      cat("A hostess on", ids, "\n")
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

      # reset initialisation
      if(value == private$.max)
        private$.started <- FALSE

      opts <- list(value = value)
      for(i in 1:length(private$.id)){
        opts$id <- private$.id[i]
        private$.session$sendCustomMessage("hostess-set", opts)
      }
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

      # reset initialisation
      if(value == private$.max)
        private$.started <- FALSE

      opts <- list(value = value)
      for(i in 1:length(private$.id)){
        opts$id <- private$.id[i]
        private$.session$sendCustomMessage("hostess-set", opts)
      }
      invisible(self)
    },
#' @details
#' Close the hostess
#' 
#' @examples
#' \dontrun{Waitress$new("#plot")$close()}
    close = function() {
      # get id
      opts <- list(infinite = private$.infinite)
      # reset the started
      private$.started <- FALSE
      # loop for the ids
      for(i in 1:length(private$.id)){
        opts$id <- private$.id[i]
        private$.session$sendCustomMessage("hostess-end", opts)
      }
      invisible(self)
    },
#' @details
#' Create a hostess loading bar.
#' @param preset A loading bar preset, see section below.
#' @param text_color The color of the loading text.
#' @param class CSS class.
#' @param center_page By default the hostess is centered in the middle
#' of the screen, ideal when using it with waiter full screen, set to 
#' \code{FALSE} to prevent that.
#' @param min,max Minimum and maximum representing the starting and ending
#' points of the progress bar.
#' @param svg Either an svg path e.g.: \code{M10 10L90 10} or the path to a \code{.svg}
#' file. Note that if passing the latter it must be made available to Shiny by
#' placing it either in the \code{www} folder or using [shiny::addResourcePath()].
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
#' @examples 
#' \dontrun{Hostess$new()$get_loader()}
    get_loader = function(preset = NULL, text_color = "#FFFFFF", center_page = FALSE, 
      class = "", min = NULL, max = NULL, svg = NULL, progress_type = c("stroke", "fill"), 
      fill_direction = c("btt", "ttb", "ltr", "rtl"), stroke_direction = c("normal", "reverse"), 
      fill_color = NULL, stroke_color = NULL, ...){

      if(!is.null(private$.loader))
        return(private$.loader)
      
      # allow overriding min and max
      if(!is.null(min))
        private$.min <- min

      if(!is.null(max))
        private$.max <- max
      
      if(length(private$.id) > 1){
        loader <- list()
        for(i in 1:length(private$.id)){
          load <- hostess_loader(id = private$.id[i], preset = preset, text_color = text_color, 
            center_page = center_page, class = class, 
            min = private$.min, max = private$.max, svg = svg, progress_type = progress_type,
            fill_direction = fill_direction, stroke_direction = stroke_direction, 
            fill_color = fill_color, stroke_color = stroke_color, ...)
          
          loader <- append(loader, list(load))
        }
      } else {
        loader <- hostess_loader(id = private$.id, preset = preset, text_color = text_color, 
          center_page = center_page, class = class, 
          min = private$.min, max = private$.max, svg = svg, progress_type = progress_type,
          fill_direction = fill_direction, stroke_direction = stroke_direction, 
          fill_color = fill_color, stroke_color = stroke_color, ...)
      }

      return(loader) 
    },
#' @details
#' Set a hostess loader as defined by [hostess_loader()].
#' 
#' @param loader Loader as defined by [hostess_loader()].
#' 
#' @examples 
#' \dontrun{
#' loader <- hostess_loader()
#' Hostess$new()$set_loader(loader)
#' }
    set_loader = function(loader){
      # change id, min and max to match class
      loader$attribs$id <- private$.id
      loader$attribs[["data-min"]] <- private$.min
      loader$attribs[["data-max"]] <- private$.max
      private$.loader <- loader
        
      invisible(self)
    },
#' @details
#' Use the hostess as a notification. It is hidden when \code{set} tpo \code{100}.
#' 
#' @param html Additional HTML content of the tag or a character string.
#' @param background_color Background color of the notification.
#' @param text_color Color of text of \code{html}.
#' @param position Position of the notification on the screen.
#' Where \code{br} is the bottom-right, \code{tr} is the top-right,
#' \code{bl} is bottom-left, and \code{tl} is the top-left.
#' 
#' @examples 
#' \dontrun{Hostess$new()$notify()}
    notify = function(html = NULL, background_color = "transparent", 
			text_color = "black", position = c("br", "tr", "bl", "tl")){

      position <- match.arg(position)

      # process html
      if(!is.null(html)){
        if(is.character(html))
          html <- span(html)
      } else {
        html <- span()
      }

      html <- div(private$.loader, html)
      html <- as.character(html)

      private$.started <- TRUE
      private$.is_notification <- TRUE

      opts <- list(
        html = html, 
        id = private$.id, 
        position = position,
        background_color = background_color,
        text_color = text_color,
        infinite = private$.infinite
      )

      private$.session$sendCustomMessage("hostess-notify", opts)
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
    .loader = NULL,
    .is_notification = FALSE,
    .infinite = FALSE
  )
)

#' Loader
#' 
#' Customise the Hostess laoding bar.
#' 
#' @param id Id of hostess (valid CSS).
#' @param preset A loading bar preset, see section below.
#' @param text_color The color of the loading text.
#' @param class CSS class.
#' @param center_page By default the hostess is \emph{not} centered in the middle
#' of the screen, centering in the middle of the page is however ideal when using 
#' it with waiter full screen, for the latter set to \code{TRUE}.
#' @param min,max Minimum and maximum representing the starting and ending
#' points of the progress bar.
#' @param svg Either an svg path e.g.: \code{M10 10L90 10} or the path to a \code{.svg}
#' file. Note that if passing the latter it must be made available to Shiny by
#' placing it either in the \code{www} folder or using [shiny::addResourcePath()].
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
#' @param angle Angle of gradient.
#' @param duration Duration of the loop.
#' @param colors Color vectors composing the gradient.
#' @param color_background The background of the color.
#' @param color_bubble The color of the bubbles contour.
#' @param count The number of bubbles.
#' @param color1,color2 Colors of stripes.
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
#' @examples
#' library(shiny)
#' library(waiter)
#' 
#' # diagonal line
#' path <- "M10 10L90 30"
#' 
#' ui <- fluidPage(
#'  use_waiter(),
#'  use_hostess(),
#'  actionButton("draw", "redraw"),
#'  plotOutput("plot")
#' )
#' 
#' server <- function(input, output) {
#' 
#'  dataset <- reactive({
#'    input$draw
#' 
#'    hostess <- Hostess$new(min = 0, max = 10)
#'    hostess$set_loader <- hostess_loader(
#'      progress_type = "stroke",
#'      stroke_color = hostess_stripe()
#'    )
#'    waiter <- Waiter$new(
#'      "plot", 
#'      hostess$loader()
#'    )
#' 
#'    waiter$show()
#' 
#'    for(i in 1:10){
#'      Sys.sleep(.2)
#'      hostess$inc(1)
#'    }
#' 
#'    runif(100)
#' 
#'  })
#' 
#' output$plot <- renderPlot(plot(dataset()))
#' 
#' }
#'
#' if(interactive()) shinyApp(ui, server)
#' 
#' @name hostessLoader
#' @export
hostess_loader <- function(id = "hostess", preset = NULL, text_color = "#FFFFFF", 
  center_page = FALSE, class = "", min = 0, max = 100, svg = NULL, 
  progress_type = c("stroke", "fill"), fill_direction = c("btt", "ttb", "ltr", "rtl"),
  stroke_direction = c("normal", "reverse"), fill_color = NULL, stroke_color = NULL, 
  ...){

  progress_type <- match.arg(progress_type)
  fill_direction <- match.arg(fill_direction)
  stroke_direction <- match.arg(stroke_direction)

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

  opts <- list()
  if(!is.null(svg)){
    # check if ends in .svg
    # if .svg use data-img otherwise use data-path
    is_img <- grepl("\\.svg", svg)

    if(is_img)
      opts[["data-img"]] <- svg
    else
      opts[["data-path"]] <- svg
  }

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

  return(loader)
}

#' @rdname hostessLoader
#' @export
hostess_gradient <- function(angle = 0, duration = 1, colors = c("red", "white", "blue")) {
  stopifnot(length(colors) > 1)
  colors <- paste0(colors, collapse = ",")
  paste0("data:ldbar/res,gradient(", angle, ",", duration, ",", colors, ")")
}

#' @rdname hostessLoader
#' @export
hostess_bubble <- function(color_background = "#697682", color_bubble = "#f7fff7", 
  count = 25, duration = 1) {
  paste0("data:ldbar/res,bubble(", color_background, ", ", color_bubble, 
    ", ", count, ", ", duration, ")")
}

#' @rdname hostessLoader
#' @export
hostess_stripe <- function(color1 = "#697682", color2 = "#f7fff7", duration = 1) {
  paste0("data:ldbar/res,stripe(", color1, ", ", color2, ", ", duration, ")")
}
