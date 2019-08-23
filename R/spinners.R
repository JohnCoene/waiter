#' Spinners
#'
#' Spinkit spinners to use with \code{\link{show_waiter}}.
#'
#' @details You can browse the spinners with \code{browse_spinners}.
#'
#' @examples if(interactive()) browse_spinners()
#' 
#' @name spinners
#' @export
spin_rotating_plane <- function(){
  div(class = "rotating-plane")
}

#' @rdname spinners
#' @export
spin_fading_circles <- function(){
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
}

#' @rdname spinners
#' @export
spin_folding_cube <- function(){
  div(
    class = "sk-folding-cube",
    div(class = "sk-cube1 sk-cube"),
    div(class = "sk-cube2 sk-cube"),
    div(class = "sk-cube3 sk-cube"),
    div(class = "sk-cube4 sk-cube")
  )
}

#' @rdname spinners
#' @export
spin_double_bounce <- function(){
  div(
    class = "double-bouncer",
    div(class = "double-bounce1"),
    div(class = "double-bounce2")
  )
}

#' @rdname spinners
#' @export
spin_wave <- function(){
  div(
    class = "waver",
    div(class = "rect1"),
    div(class = "rect2"),
    div(class = "rect3"),
    div(class = "rect4"),
    div(class = "rect5")
  )
}

#' @rdname spinners
#' @export
spin_wandering_cubes <- function(){
  div(
    class = "wandering-cubes",
    div(class = "cube1"),
    div(class = "cube2")
  )
}

#' @rdname spinners
#' @export
spin_pulse <- function(){
  div(class = "pulser")
}

#' @rdname spinners
#' @export
spin_chasing_dots <- function(){
  div(
    class = "chasing-dots",
    div(class = "dot1"),
    div(class = "dot2")
  )
}

#' @rdname spinners
#' @export
spin_three_bounce <- function(){
  div(
    class = "three-bounce",
    div(class = "bounce1"),
    div(class = "bounce2"),
    div(class = "bounce3")
  ) 
}

#' @rdname spinners
#' @export
spin_circle <- function(){
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
}

#' @rdname spinners
#' @export
spin_rotate <- function(){
  div(
    class = "spinner-box",
    div(
      class = "circle-border",
      div(class = "circle-core")
    )
  )
}

#' @rdname spinners
#' @export
spin_solar <- function(){
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
}

#' @rdname spinners
#' @export
spin_orbit <- function(){
  div(
    class = "spinner-box",
    div(class = "blue-orbit leo"),
    div(class = "green-orbit leo"),
    div(class = "red-orbit leo"),
    div(class = "white-orbit w1 leo"),
    div(class = "white-orbit w2 leo"),
    div(class = "white-orbit w3 leo")
  )
}

#' @rdname spinners
#' @export
spin_squares <- function(){
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
}

#' @rdname spinners
#' @export
spin_cube_grid <- function(){
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
}

#' @rdname spinners
#' @export
spin_circles <- function(){
	div(class = "lds-circle")
}

#' @rdname spinners
#' @export
spin_dual_ring <- function(){
	div(class = "lds-dual-ring")
}

#' @rdname spinners
#' @export
spin_heart <- function(){
	div(
    class = "lds-heart",
		div()
	)
}

#' @rdname spinners
#' @export
spin_ellipsis <- function(){
	div(
    class = "lds-ellipsis",
		div(),
		div(),
		div(),
		div()
	)
}

#' @rdname spinners
#' @export
spin_facebook <- function(){
	div(
    class = "lds-facebook",
		div(),
		div(),
		div()
	)
}

#' @rdname spinners
#' @export
spin_hourglass <- function(){
	div(class = "lds-hourglass")
}

#' @rdname spinners
#' @export
spin_ring <- function(){
	div(
    class = "lds-ring",
		div(),
		div(),
		div(),
		div()
	)
}

#' @rdname spinners
#' @export
spin_ripple <- function(){
	div(
    class = "lds-ripple",
		div(),
		div()
	)
}

#' @rdname spinners
#' @export
browse_spinners <- function() {
	.Deprecated("browse_waiters")
	shiny::runApp(appDir = system.file("waiter", package = 'waiter', mustWork = TRUE))
}

#' @rdname spinners
#' @export
browse_waiters <- function() {
	shiny::runApp(appDir = system.file("waiter", package = 'waiter', mustWork = TRUE))
}
