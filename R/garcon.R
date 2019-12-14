#' Garcon
#' 
#' Create a garcon to aniamte images on the waiter.
#' 
#' @name garcon
#' @export
use_garcon <- function(){
  singleton(
    tags$head(
      tags$script(
        src = "waiter-assets/garcon/garcon.min.js"
      ),
      tags$script(
        src = "waiter-assets/garcon/custom.js"
      )
    )
  )
}

#' @export
#' @rdname garcon
Garcon <- R6::R6Class(
  "Garcon",
  public = list(
#' @details
#' Initialise the garçon.
#' 
#' @param image The CSS id of the image tag.
#' @param bg_color Background overlay color in hexadecimal or RGB.
#' @param opacity Overlay transparency.
#' @param direction Animation direction. Possible values: `lr` (left to right), 
#' `rl` (right to left), `bt` (bottom to top), `tb` (top to bottom).
#' @param filter Filter to apply, options are `blur`, `grayscale`, `sepia`, 
#' `hue-rotate`, `invert`, `opacity`.
#' 
#' @examples
#' \dontrun{Garcon$new("img")$set(30)}
    initialize = function(image, bg_color = "#FFFFFF", opacity = .5, direction = c("bt", "tb", "lr", "rl"), filter = NULL) {
      if(missing(image))
        stop("Missing `image`", call. = FALSE)

      session <- shiny::getDefaultReactiveDomain()
      .check_session(session)

      msg <- list(
        image = image, 
        options = list(
          bgcolor = bg_color,
          opacity = opacity,
          direction = match.arg(direction),
          filter = filter
        )
      )
      session$sendCustomMessage("garcon-init", msg)
      private$.image <- image
      private$.session <- session
    },
#' @details
#' Value to set the garçon to.
#' 
#' @param value Percentage to set to.
#' 
#' @examples
#' \dontrun{Garcon$new("img")$set(30)}
    set = function(value) {
      if(missing(value))
        stop("Missing `value`", call. = FALSE)

      private$.current_value <- value
      private$.session$sendCustomMessage("garcon-set", list(image = private$.image, value = value))
      invisible(self)
    },
#' @details
#' Value to increase the garçon to.
#' 
#' @param value Percentage to increase to.
#' 
#' @examples
#' \dontrun{Garcon$new("img")$inc(30)}
    inc = function(value) {
      if(missing(value))
        stop("Missing `value`", call. = FALSE)

      private$.current_value <- private$.current_value + value
      private$.session$sendCustomMessage("garcon-set", list(image = private$.image, value = private$.current_value))
      invisible(self)
    },
#' @details
#' Reset the garçon to.
#' 
#' @param value Percentage to set to.
#' 
#' @examples
#' \dontrun{Garcon$new("img")$set(30)$reset()}
    reset = function(value) {
      private$.session$sendCustomMessage("garcon-reset", list(image = private$.image))
    },
#' @details
#' Kill the garçon to.
#' 
#' @examples
#' \dontrun{Garcon$new("img")$set(30)$destroy()}
    destroy = function() {
      private$.session$sendCustomMessage("garcon-destroy", list(image = private$.image))
    },
#' @details
#' print the garcon
		print = function(){
      cat("A garcon\n")
		},
#' @details
#' Stop the garçon.
#' 
#' @examples
#' \dontrun{Garcon$new("img")$set(30)$stop()}
    stop = function() {
      .Deprecated("close", package = "waiter", "`stop` is deprecated in favour of `close`")
      private$.session$sendCustomMessage("garcon-stop", list(image = private$.image))
    },
#' @details
#' Close the garçon.
#' 
#' @examples
#' \dontrun{Garcon$new("img")$set(30)$close()}
    close = function() {
      private$.session$sendCustomMessage("garcon-stop", list(image = private$.image))
    }
  ),
  private = list(
    .image = NULL,
    .session = NULL,
    .current_value = 0
  )
)