#' Spinners
#'
#' Spinkit spinners to use with \code{\link{show_waiter}}.
#' 
#' @name spinners
#' @export
spin_rotating_plane <- function(){
  div(class = "spinner")
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
    class = "spinner",
    div(class = "double-bounce1"),
    div(class = "double-bounce2")
  )
}

#' @rdname spinners
#' @export
spin_wave <- function(){
  div(
    class = "spinner",
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
    class = "spinner",
    div(class = "cube1"),
    div(class = "cube2")
  )
}

#' @rdname spinners
#' @export
spin_pulse <- function(){
  div(class = "spinner")
}

#' @rdname spinners
#' @export
spin_chasing_dots <- function(){
  div(
    class = "spinner",
    div(class = "dot1"),
    div(class = "dot2")
  )
}

#' @rdname spinners
#' @export
spin_three_bounce <- function(){
  div(
    class = "spinner",
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

