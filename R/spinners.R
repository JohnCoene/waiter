#' Spinners
#'
#' Spinkit spinners to use with \code{\link{show_waiter}}.
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
#' @name spinners
#' @export
spin_rotating_plane <- function(){
  kit(1)
  invisible(div(class = "rotating-plane"))
}

#' @rdname spinners
#' @export
spin_fading_circles <- function(){
  kit(1)
  invisible(
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
    )
  )
}

#' @rdname spinners
#' @export
spin_folding_cube <- function(){
  kit(1)
  invisible(
    div(
      class = "sk-folding-cube",
      div(class = "sk-cube1 sk-cube"),
      div(class = "sk-cube2 sk-cube"),
      div(class = "sk-cube3 sk-cube"),
      div(class = "sk-cube4 sk-cube")
    )
  )
}

#' @rdname spinners
#' @export
spin_double_bounce <- function(){
  kit(1)
  invisible(
    div(
      class = "double-bouncer",
      div(class = "double-bounce1"),
      div(class = "double-bounce2")
    )
  )
}

#' @rdname spinners
#' @export
spin_wave <- function(){
  kit(1)
  invisible(
    div(
      class = "waver",
      div(class = "rect1"),
      div(class = "rect2"),
      div(class = "rect3"),
      div(class = "rect4"),
      div(class = "rect5")
    )
  )
}

#' @rdname spinners
#' @export
spin_wandering_cubes <- function(){
  kit(1)
  invisible(
    div(
      class = "wandering-cubes",
      div(class = "cube1"),
      div(class = "cube2")
    )
  )
}

#' @rdname spinners
#' @export
spin_pulse <- function(){
  kit(1)
  invisible(div(class = "pulser"))
}

#' @rdname spinners
#' @export
spin_chasing_dots <- function(){
  kit(1)
  invisible(
    div(
      class = "chasing-dots",
      div(class = "dot1"),
      div(class = "dot2")
    )
  )
}

#' @rdname spinners
#' @export
spin_three_bounce <- function(){
  kit(1)
  invisible(
    div(
      class = "three-bounce",
      div(class = "bounce1"),
      div(class = "bounce2"),
      div(class = "bounce3")
    )
  )
}

#' @rdname spinners
#' @export
spin_circle <- function(){
  kit(1)
  invisible(
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
    )
  )
}

#' @rdname spinners
#' @export
spin_rotate <- function(){
  kit(1)
  invisible(
    div(
      class = "spinner-box",
      div(
        class = "circle-border",
        div(class = "circle-core")
      )
    )
  )
}

#' @rdname spinners
#' @export
spin_solar <- function(){
  kit(1)
  invisible(
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
    )
  )
}

#' @rdname spinners
#' @export
spin_orbit <- function(){
  kit(1)
  invisible(
    div(
      class = "spinner-box",
      div(class = "blue-orbit leo"),
      div(class = "green-orbit leo"),
      div(class = "red-orbit leo"),
      div(class = "white-orbit w1 leo"),
      div(class = "white-orbit w2 leo"),
      div(class = "white-orbit w3 leo")
    )
  )
}

#' @rdname spinners
#' @export
spin_squares <- function(){
  kit(1)
  invisible(
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
    )
  )
}

#' @rdname spinners
#' @export
spin_cube_grid <- function(){
  kit(1)
  invisible(
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
    )
  )
}

#' @rdname spinners
#' @export
spin_circles <- function(){
  kit(2)
	invisible(div(class = "lds-circle"))
}

#' @rdname spinners
#' @export
spin_orbiter <- function(){
  kit(1)
  invisible(
    div(
      class = "orbiter-spinner",
      div(
        class = "orbiter",
        class = "orbiter",
        class = "orbiter"
      )
    )
  )
}

#' @rdname spinners
#' @export
spin_pixel <- function(){
  kit(1)
	invisible(div(class = "pixel-spinner", div(class = "pixel-spinner-inner")))
}

#' @rdname spinners
#' @export
spin_flower <- function(){
  kit(1)
  invisible(
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
    )
  )
}

#' @rdname spinners
#' @export
spin_dual_ring <- function(){
  kit(2)
	invisible(div(class = "lds-dual-ring"))
}

#' @rdname spinners
#' @export
spin_heart <- function(){
  kit(2)
  invisible(div(class = "lds-heart", div()))
}

#' @rdname spinners
#' @export
spin_ellipsis <- function(){
  kit(2)
  invisible(
    div(
      class = "lds-ellipsis",
      div(),
      div(),
      div(),
      div()
    )
  )
}

#' @rdname spinners
#' @export
spin_facebook <- function(){
  kit(2)
  invisible(
    div(
      class = "lds-facebook",
      div(),
      div(),
      div()
    )
  )
}

#' @rdname spinners
#' @export
spin_hourglass <- function(){
  kit(2)
	invisible(div(class = "lds-hourglass"))
}

#' @rdname spinners
#' @export
spin_ring <- function(){
  kit(2)
  invisible(
    div(
      class = "lds-ring",
      div(),
      div(),
      div(),
      div()
    )
  )
}

#' @rdname spinners
#' @export
spin_ripple <- function(){
  kit(2)
  invisible(
    div(
      class = "lds-ripple",
      div(),
      div()
    )
  )
}

#' @rdname spinners
#' @export
spin_terminal <- function(){
  kit(2)
  invisible(div(class = "waiter-terminal"))
}

#' @rdname spinners
#' @export
spin_loader <- function(){
  kit(4)
  invisible(div(class = "spinner-loader"))
}

#' @rdname spinners
#' @export
spin_throbber <- function(){
  kit(4)
  invisible(div(class = "throbber-loader"))
}

#' @rdname spinners
#' @export
spin_refresh <- function(){
  kit(4)
  invisible(div(class = "refreshing-loader"))
}

#' @rdname spinners
#' @export
spin_heartbeat <- function(){
  kit(4)
  invisible(div(class = "heartbeat-loader"))
}

#' @rdname spinners
#' @export
spin_gauge <- function(){
  kit(4)
  invisible(div(class = "gauge-loader"))
}

#' @rdname spinners
#' @export
spin_3k <- function(){
  kit(4)
  invisible(div(class = "three-quarters-loader"))
}

#' @rdname spinners
#' @export
spin_wobblebar <- function(){
  kit(4)
  invisible(div(class = "wobblebar-loader"))
}

#' @rdname spinners
#' @export
spin_atebits <- function(){
  kit(4)
  invisible(div(class = "atebits-loader"))
}

#' @rdname spinners
#' @export
spin_whirly <- function(){
  kit(4)
  invisible(div(class = "whirly-loader"))
}

#' @rdname spinners
#' @export
spin_flowers <- function(){
  kit(4)
  invisible(div(class = "flower-loader"))
}

#' @rdname spinners
#' @export
spin_dots <- function(){
  kit(4)
  invisible(div(class = "dots-loader"))
}

#' @rdname spinners
#' @export
spin_3circles <- function(){
  kit(4)
  invisible(div(class = "circles-loader"))
}

#' @rdname spinners
#' @export
spin_plus <- function(){
  kit(4)
  invisible(div(class = "plus-loader"))
}

#' @rdname spinners
#' @export
spin_pulsar <- function(){
  kit(4)
  invisible(div(class = "pulse-loader"))
}

#' @rdname spinners
#' @export
spin_hexdots <- function(){
  kit(4)
  invisible(div(class = "hexdots-loader"))
}

#' @rdname spinners
#' @export
spin_inner_circles <- function(){
  kit(4)
  invisible(div(class = "inner-circles-loader"))
}

#' @rdname spinners
#' @export
spin_pong <- function(){
  kit(4)
  invisible(div(class = "pong-loader"))
}

#' @rdname spinners
#' @export
spin_timer <- function(){
  kit(4)
  invisible(div(class = "timer-loader"))
}

#' @rdname spinners
#' @export
spin_ball <- function(){
  kit(4)
  invisible(div(class = "ball-loader"))
}

#' @rdname spinners
#' @export
spin_dual_circle <- function(){
  kit(5)
  invisible(div(class = "sbl-circ-dual"))
}

#' @rdname spinners
#' @export
spin_seven_circle <- function(){
  kit(5)
  invisible(
    div(
      class = "sbl-seven-circles",
      div(),
      div(),
      div(),
      div(),
      div(),
      div(),
      div()
    )
  )
}

#' @rdname spinners
#' @export
spin_clock <- function(){
  kit(5)
  invisible(div(class = "sbl-meter"))
}

#' @rdname spinners
#' @export
spin_pushing_shapes <- function(){
  kit(5)
  invisible(
    div(
      class = "sbl-pushing-shapes",
      div(),
      div()
    )
  )
}

#' @rdname spinners
#' @export
spin_fill <- function(){
  kit(5)
  invisible(div(class = "sbl-rect-spin-fill"))
}

#' @rdname spinners
#' @export
spin_rhombus <- function(){
  kit(5)
  invisible(div(class = "sbl-cirle-to-rhombus"))
}

#' @rdname spinners
#' @export
spin_balance <- function(){
  kit(5)
  invisible(div(class = "sbl-cirle-balance"))
}

#' @rdname spinners
#' @export
spin_square_circle <- function(){
  kit(5)
  invisible(
    div(
      class = "sbl-cirle-and-square",
      div(),
      div(),
      div(),
      div()
    )
  )
}

#' @rdname spinners
#' @export
spin_circle_square <- function(){
  kit(5)
  invisible(
    div(
      class = "sbl-square-to-circle",
      div(),
      div(),
      div()
    )
  )
}

#' @rdname spinners
#' @export
spin_puzzle <- function(){
  kit(5)
  invisible(
    div(
      class = "sbl-puzzle",
      div(),
      div(),
      div(),
      div(),
      div()
    )
  )
}

#' @rdname spinners
#' @export
spin_half <- function(){
  kit(5)
  invisible(
    div(
      class = "sbl-half-circle-spin",
      div()
    )
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
  
  kit(6)
  invisible(div(class = paste0("loaderz-", id), style = style))
}

#' @rdname spinners
#' @export
spin_1 <- function(){
  kit(3)
  invisible(
    div(
      class = "container--box",
      div(
        class = "boxxy",
        div(
          class = "spinner spinner--1"
        )
      )
    )
  )
}

#' @rdname spinners
#' @export
spin_2 <- function(){
  kit(3)
  invisible(
    div(
      class = "container--box",
      div(
        class = "boxxy",
        div(
          class = "spinner spinner--2"
        )
      )
    )
  )
}

#' @rdname spinners
#' @export
spin_3 <- function(){
  kit(3)
  invisible(
    div(
      class = "container--box",
      div(
        class = "boxxy",
        div(
          class = "spinner spinner--3"
        )
      )
    )
  )
}

#' @rdname spinners
#' @export
spin_4 <- function(){
  kit(3)
  invisible(
    div(
      class = "container--box",
      div(
        class = "boxxy",
        div(
          class = "spinner spinner--4"
        )
      )
    )
  )
}

#' @rdname spinners
#' @export
spin_5 <- function(){
  kit(3)
  invisible(
    div(
      class = "container--box",
      div(
        class = "boxxy",
        div(
          class = "spinner spinner--5"
        )
      )
    )
  )
}

#' @rdname spinners
#' @export
spin_6 <- function(){
  kit(3)
  invisible(
    div(
      class = "container--box",
      div(
        class = "boxxy",
        div(
          class = "spinner spinner--6"
        )
      )
    )
  )
}

#' @rdname spinners
#' @export
spin_google <- function(){
  kit(7)
  invisible(div(class = "cm-spinner"))
}

#' @rdname spinners
#' @export
browse_waiters <- function() {
  .Deprecated("", package = "waiter", msg = "This function is no longer supported; see the package website.")
	#shiny::runApp(appDir = system.file("waiter", package = 'waiter', mustWork = TRUE))
  invisible()
}
