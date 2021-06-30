#' Steward
#' 
#' A colorful steward to work with the \code{\link{waiter}}.
#' 
#' @param colors Color palette forming gradient.
#' @param speed Seconds it takes to loop over colors.
#' @param angle Degrees at which colors slide.
#' 
#' @name steward
#' @export 
useSteward <- function(colors = c("#ee7752", "#e73c7e", "#23a6d5", "#23d5ab"), 
  speed = 30, angle = -45) {
  
  bg_size <- length(colors) * 200
  colors <- paste0(colors, collapse = ", ")
  
  css <- paste0("
.waiter-overlay{
	width: 100%;
	height: 100vh;
  background: linear-gradient(", angle, "deg, ", colors, ");
  background-size: ", bg_size, "% ", bg_size, "%;

  -webkit-animation: stewardAnimation ", speed, "s ease infinite;
  animation: stewardAnimation ", speed, "s ease infinite;
}

@-webkit-keyframes stewardAnimation {
  0%{background-position:0% 50%;}
  50%{background-position:100% 50%;}
  100%{background-position:0% 50%;}
}

@keyframes stewardAnimation {
  0%{background-position:0% 50%;}
  50%{background-position:100% 50%;}
  100%{background-position:0% 50%;}
}
")

  singleton(
    tags$head(
      tags$style(css)
    )
  )

}

#' @rdname steward
#' @export 
use_steward <- function(
  colors = c("#ee7752", "#e73c7e", "#23a6d5", "#23d5ab"), 
  speed = 30, 
  angle = -45
) {
  .Deprecated("useSteward", package = "waiter")
  useSteward(
    colors,
    speed,
    angle
  )
}