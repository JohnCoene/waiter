#' Lottie Dependency
#' 
#' Use [lottie](https://lottiefiles.com).
#' 
#' @export
useLottie <- function(){
  singleton(
    tags$head(
      tags$script(
        src = "https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js"
      )
    )
  )
}

#' Lottie
#'
#' Use [lottie](https://lottiefiles.com) animation.
#'
#' @param src Path to Lottie's JSON file.
#' @param direction Direction of animation.
#' @param loop Whether to loop the animation.
#' @param ... Any other options, e.g.: `style`.
#'
#' @export
lottie <- \(
  src,
  direction = 1L,
  loop = TRUE,
  ...
){
  if(missing(src))
    stop("Missing `src`")

  opts <- list(
    src = src,
    direction = direction,
    autoplay = NA,
    ...
  )

  if(loop)
    opts$loop <- NA

  htmltools::tag(
    "lottie-player",
    opts
  )
}
