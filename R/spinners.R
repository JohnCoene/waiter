#' Spinners
#'
#' Spinkit spinners to use with \code{\link{waiter_show}}.
#' 
#' @param id The spinner identifier, an integer between \code{1},
#' and \code{42}.
#' @param style CSS style to apply to spinner.
#' @param color Desired color of spinner.
#'
#' @details Much of the \code{CSS} used is to provide those spinners.
#' One can greatly reduce the load on the browser by only sourcing
#' the CSS for the spinners required. You can find out which CSS kits
#' are required to load by using the spinner in the R console as 
#' shown in the example. This prints the kit and instructions
#' to only source the required file.
#'
#' @examples spin_rotating_plane()
#' 
#' @return An object of class \code{spinner}.
#' 
#' @name spinners
#' @export
spin_rotating_plane <- function(){
  construct(div(class = "rotating-plane"), 1)
}

#' @rdname spinners
#' @export
spin_fading_circles <- function(){
  construct(
    div(
      class = "sk-fading-circle",
      div(class = "sk-circle1 sk-circle"),
      div(class = "sk-circle2 sk-circle"),
      div(class = "sk-circle3 sk-circle"),
      div(class = "sk-circle4 sk-circle"),
      div(class = "sk-circle5 sk-circle"),
      div(class = "sk-circle6 sk-circle"),
      div(class = "sk-circle7 sk-circle"),
      div(class = "sk-circle8 sk-circle"),
      div(class = "sk-circle9 sk-circle"),
      div(class = "sk-circle10 sk-circle"),
      div(class = "sk-circle11 sk-circle"),
      div(class = "sk-circle12 sk-circle")
    ),
    1
  )
}

#' @rdname spinners
#' @export
spin_folding_cube <- function(){
  construct(
    div(
      class = "sk-folding-cube",
      div(class = "sk-cube1 sk-cube"),
      div(class = "sk-cube2 sk-cube"),
      div(class = "sk-cube3 sk-cube"),
      div(class = "sk-cube4 sk-cube")
    ),
    1
  )
}

#' @rdname spinners
#' @export
spin_double_bounce <- function(){
  construct(
    div(
      class = "double-bouncer",
      div(class = "double-bounce1"),
      div(class = "double-bounce2")
    ),
    1
  )
}

#' @rdname spinners
#' @export
spin_wave <- function(){
  construct(
    div(
      class = "waver",
      div(class = "rect1"),
      div(class = "rect2"),
      div(class = "rect3"),
      div(class = "rect4"),
      div(class = "rect5")
    ),
    1
  )
}

#' @rdname spinners
#' @export
spin_wandering_cubes <- function(){
  construct(
    div(
      class = "wandering-cubes",
      div(class = "cube1"),
      div(class = "cube2")
    ),
    1
  )
}

#' @rdname spinners
#' @export
spin_pulse <- function(){
  construct(div(class = "pulser"), 1)
}

#' @rdname spinners
#' @export
spin_chasing_dots <- function(){
  construct(
    div(
      class = "chasing-dots",
      div(class = "dot1"),
      div(class = "dot2")
    ),
    1
  )
}

#' @rdname spinners
#' @export
spin_three_bounce <- function(){
  construct(
    div(
      class = "three-bounce",
      div(class = "bounce1"),
      div(class = "bounce2"),
      div(class = "bounce3")
    ),
    1
  )
}

#' @rdname spinners
#' @export
spin_circle <- function(){
  construct(
    div(
      class = "sk-circle",
      div(class = "sk-circle1 sk-child"),
      div(class = "sk-circle2 sk-child"),
      div(class = "sk-circle3 sk-child"),
      div(class = "sk-circle4 sk-child"),
      div(class = "sk-circle5 sk-child"),
      div(class = "sk-circle6 sk-child"),
      div(class = "sk-circle7 sk-child"),
      div(class = "sk-circle8 sk-child"),
      div(class = "sk-circle9 sk-child"),
      div(class = "sk-circle10 sk-child"),
      div(class = "sk-circle11 sk-child"),
      div(class = "sk-circle12 sk-child")
    ),
    1
  )
}

#' @rdname spinners
#' @export
spin_rotate <- function(){
  construct(
    div(
      class = "spinner-box",
      div(
        class = "circle-border",
        div(class = "circle-core")
      )
    ),
    1
  )
}

#' @rdname spinners
#' @export
spin_solar <- function(){
  construct(
    div(
      class = "spinner-box",
      div(
        class = "earth-orbit orbit",
        div(
          class = "planet earth"
        ),
        div(
          class = "venus-orbit orbit",
          div(
            class = "planet venus"
          ),
          div(
            class = "mercury-orbit orbit",
            div(
              class = "planet mercury"
            ),
            div(class = "sun")
          )
        )
      )
    ),
    1
  )
}

#' @rdname spinners
#' @export
spin_orbit <- function(){
  construct(
    div(
      class = "spinner-box",
      div(class = "blue-orbit leo"),
      div(class = "green-orbit leo"),
      div(class = "red-orbit leo"),
      div(class = "white-orbit w1 leo"),
      div(class = "white-orbit w2 leo"),
      div(class = "white-orbit w3 leo")
    ),
    1
  )
}

#' @rdname spinners
#' @export
spin_squares <- function(){
  construct(
    div(
      class = "spinner-box",
      div(
        class = "configure-border-1",
        div(class = "configure-core")
      ),
      div(
        class = "configure-border-2",
        div(class = "configure-core")
      )
    ),
    1
  )
}

#' @rdname spinners
#' @export
spin_cube_grid <- function(){
  construct(
    div(
      class = "sk-cube-grid",
      div(class = "sk-cube sk-cube1"),
      div(class = "sk-cube sk-cube2"),
      div(class = "sk-cube sk-cube3"),
      div(class = "sk-cube sk-cube4"),
      div(class = "sk-cube sk-cube5"),
      div(class = "sk-cube sk-cube6"),
      div(class = "sk-cube sk-cube7"),
      div(class = "sk-cube sk-cube8"),
      div(class = "sk-cube sk-cube9")
    ),
    1
  )
}

#' @rdname spinners
#' @export
spin_circles <- function(){
	construct(div(class = "lds-circle"), 1)
}

#' @rdname spinners
#' @export
spin_orbiter <- function(){
  construct(
    div(
      class = "orbiter-spinner",
      div(
        class = "orbiter",
        class = "orbiter",
        class = "orbiter"
      )
    ),
    1
  )
}

#' @rdname spinners
#' @export
spin_pixel <- function(){
	construct(div(class = "pixel-spinner", div(class = "pixel-spinner-inner")), 1)
}

#' @rdname spinners
#' @export
spin_flower <- function(){
  construct(
    div(
      class = "flower-spinner",
      div(
        class = "dots-container",
        div(
          class = "bigger-dot",
          div(
            class = "smaller-dot"
          )
        )
      )
    ),
    1
  )
}

#' @rdname spinners
#' @export
spin_dual_ring <- function(){
	construct(div(class = "lds-dual-ring"), 2)
}

#' @rdname spinners
#' @export
spin_heart <- function(){
  construct(div(class = "lds-heart", div()), 2)
}

#' @rdname spinners
#' @export
spin_ellipsis <- function(){
  construct(
    div(
      class = "lds-ellipsis",
      div(),
      div(),
      div(),
      div()
    ),
    2
  )
}

#' @rdname spinners
#' @export
spin_facebook <- function(){
  construct(
    div(
      class = "lds-facebook",
      div(),
      div(),
      div()
    ),
    2
  )
}

#' @rdname spinners
#' @export
spin_hourglass <- function(){
	construct(div(class = "lds-hourglass"), 2)
}

#' @rdname spinners
#' @export
spin_ring <- function(){
  construct(
    div(
      class = "lds-ring",
      div(),
      div(),
      div(),
      div()
    ),
    2
  )
}

#' @rdname spinners
#' @export
spin_ripple <- function(){
  construct(
    div(
      class = "lds-ripple",
      div(),
      div()
    ),
    2
  )
}

#' @rdname spinners
#' @export
spin_terminal <- function(){
  construct(div(class = "waiter-terminal"), 2)
}

#' @rdname spinners
#' @export
spin_loader <- function(){
  construct(div(class = "spinner-loader"), 4)
}

#' @rdname spinners
#' @export
spin_throbber <- function(){
  construct(div(class = "throbber-loader"), 4)
}

#' @rdname spinners
#' @export
spin_refresh <- function(){
  construct(div(class = "refreshing-loader"), 4)
}

#' @rdname spinners
#' @export
spin_heartbeat <- function(){
  construct(div(class = "heartbeat-loader"), 4)
}

#' @rdname spinners
#' @export
spin_gauge <- function(){
  construct(div(class = "gauge-loader"), 4)
}

#' @rdname spinners
#' @export
spin_3k <- function(){
  construct(div(class = "three-quarters-loader"), 4)
}

#' @rdname spinners
#' @export
spin_wobblebar <- function(){
  construct(div(class = "wobblebar-loader"), 4)
}

#' @rdname spinners
#' @export
spin_atebits <- function(){
  construct(div(class = "atebits-loader"), 4)
}

#' @rdname spinners
#' @export
spin_whirly <- function(){
  construct(div(class = "whirly-loader"), 4)
}

#' @rdname spinners
#' @export
spin_flowers <- function(){
  construct(div(class = "flower-loader"), 4)
}

#' @rdname spinners
#' @export
spin_dots <- function(){
  construct(div(class = "dots-loader"), 4)
}

#' @rdname spinners
#' @export
spin_3circles <- function(){
  construct(div(class = "circles-loader"), 4)
}

#' @rdname spinners
#' @export
spin_plus <- function(){
  construct(div(class = "plus-loader"), 4)
}

#' @rdname spinners
#' @export
spin_pulsar <- function(){
  construct(div(class = "pulse-loader"), 4)
}

#' @rdname spinners
#' @export
spin_hexdots <- function(){
  construct(div(class = "hexdots-loader"), 4)
}

#' @rdname spinners
#' @export
spin_inner_circles <- function(){
  construct(div(class = "inner-circles-loader"), 4)
}

#' @rdname spinners
#' @export
spin_pong <- function(){
  construct(div(class = "pong-loader"), 4)
}

#' @rdname spinners
#' @export
spin_timer <- function(){
  construct(div(class = "timer-loader"), 4)
}

#' @rdname spinners
#' @export
spin_ball <- function(){
  construct(div(class = "ball-loader"), 4)
}

#' @rdname spinners
#' @export
spin_dual_circle <- function(){
  construct(div(class = "sbl-circ-dual"), 5)
}

#' @rdname spinners
#' @export
spin_seven_circle <- function(){
  construct(
    div(
      class = "sbl-seven-circles",
      div(),
      div(),
      div(),
      div(),
      div(),
      div(),
      div()
    ),
    5
  )
}

#' @rdname spinners
#' @export
spin_clock <- function(){
  construct(div(class = "sbl-meter"), 5)
}

#' @rdname spinners
#' @export
spin_pushing_shapes <- function(){
  construct(
    div(
      class = "sbl-pushing-shapes",
      div(),
      div()
    ),
    5
  )
}

#' @rdname spinners
#' @export
spin_fill <- function(){
  construct(div(class = "sbl-rect-spin-fill"), 5)
}

#' @rdname spinners
#' @export
spin_rhombus <- function(){
  construct(div(class = "sbl-cirle-to-rhombus"), 5)
}

#' @rdname spinners
#' @export
spin_balance <- function(){
  construct(div(class = "sbl-cirle-balance"), 5)
}

#' @rdname spinners
#' @export
spin_square_circle <- function(){
  construct(
    div(
      class = "sbl-cirle-and-square",
      div(),
      div(),
      div(),
      div()
    ),
    5
  )
}

#' @rdname spinners
#' @export
spin_circle_square <- function(){
  construct(
    div(
      class = "sbl-square-to-circle",
      div(),
      div(),
      div()
    ),
    5
  )
}

#' @rdname spinners
#' @export
spin_puzzle <- function(){
  construct(
    div(
      class = "sbl-puzzle",
      div(),
      div(),
      div(),
      div(),
      div()
    ),
    5
  )
}

#' @rdname spinners
#' @export
spin_half <- function(){
  construct(
    div(
      class = "sbl-half-circle-spin",
      div()
    ),
    5
  )
}

#' @rdname spinners
#' @export
spin_loaders <- function(id = 1, color = "white", style = NULL){
  stopifnot(id > 0 && id < 43)
  if(id < 10)
    id <- paste0("0", id)

  color <- paste0("color:", color, ";")

  if(!is.null(style))
    style <- paste0(color, style)
  else
    style <- color
  
  construct(div(class = paste0("loaderz-", id), style = style), 6)
}

#' @rdname spinners
#' @export
spin_1 <- function(){
  construct(
    div(
      class = "container--box",
      div(
        class = "boxxy",
        div(
          class = "spinner spinner--1"
        )
      )
    ),
    3
  )
}

#' @rdname spinners
#' @export
spin_2 <- function(){
  construct(
    div(
      class = "container--box",
      div(
        class = "boxxy",
        div(
          class = "spinner spinner--2"
        )
      )
    ),
    3
  )
}

#' @rdname spinners
#' @export
spin_3 <- function(){
  construct(
    div(
      class = "container--box",
      div(
        class = "boxxy",
        div(
          class = "spinner spinner--3"
        )
      )
    ),
    3
  )
}

#' @rdname spinners
#' @export
spin_4 <- function(){
  construct(
    div(
      class = "container--box",
      div(
        class = "boxxy",
        div(
          class = "spinner spinner--4"
        )
      )
    ),
    3
  )
}

#' @rdname spinners
#' @export
spin_5 <- function(){
  construct(
    div(
      class = "container--box",
      div(
        class = "boxxy",
        div(
          class = "spinner spinner--5"
        )
      )
    ),
    3
  )
}

#' @rdname spinners
#' @export
spin_6 <- function(){
  construct(
    div(
      class = "container--box",
      div(
        class = "boxxy",
        div(
          class = "spinner spinner--6"
        )
      )
    ),
    3
  )
}

#' @rdname spinners
#' @export
spin_google <- function(){
  construct(div(class = "cm-spinner"), 7)
}

#' Preview spinner
#' 
#' Allows previewing spinners in web browser or RStudio Viewer.
#' 
#' @param spinner A waiter \code{link{spinner}}.
#' @param bg_color Background color.
#' 
#' @examples 
#' if(interactive()) preview_spinner(spin_1())
#' 
#' @export
preview_spinner <- function(spinner, bg_color = "black") UseMethod("preview_spinner")

#'@export
preview_spinner.spinner <- function(spinner, bg_color = "black"){

  if(missing(spinner))
    stop("Missing spinner", call. = FALSE)

  htmltools::browsable(
    tagList(
      tags$head(
        useWaiter(),
        tags$style(
          paste0("body{background: ", bg_color,";}")
        )
      ),
      div(
        style = "position: relative;height:90vh;",
        div(
          style = "position: absolute;top:50%;left:50%;",
          spinner
        )
      )
    )
  )

}

#' Spinner Constructor
#' 
#' Construct spinner class.
#' 
#' @param spinner Spinner object.
#' @param id Id of spinkit to use.
#' 
#' @keywords internal
construct <- function(spinner, id){
  structure(spinner, class = c("spinner", class(spinner)))
}