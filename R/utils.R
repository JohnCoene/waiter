globalVariables("private")

#' Create random name
#' 
#' Random name generator to use as unique ids.
#' 
#' @keywords internal
.random_name <- function() {
	rand <- sample(c(letters, 1:20))

	paste0(rand, collapse = "")
}

#' Check Session
#' 
#' Check whether session is valid.
#' 
#' @param x A session.
#' 
#' @keywords internal
.check_session <- function(x){
  if(is.null(x))
    stop("invalid session, run this function inside your Shiny server.", call. = FALSE)
}

#' Waitress Themes
#' 
#' Changes waitress themes from R input to js as expected by JS library.
#' 
#' @param x Theme to convert.
#' 
#' @keywords internal
themes_to_js <- function(x) {
  switch(
    x,
    "overlay" = "blueOverlay",
    "overlay-radius" = "blueOverlayRadius",
    "overlay-opacity" = "blueOverlayRadiusHalfOpacity",
    "overlay-percent" = "blueOverlayRadiusWithPercentBar",
    "blue" 
  )
}

# valid presets for checks
hostess_presets <- c(
  "line", "fan", "circle", "bubble", "rainbow",
  "energy", "stripe", "text"
)

#' Theme or Value
#' 
#' Returns value or theme.
#' 
#' @param value Value set by user.
#' @param theme_var Theme value to fetch.
#' 
#' @keywords internal
.theme_or_value <- function(value, theme_var) {
  if(!is.null(value))
    return(value)
  
  .get_waiter_option(theme_var)
}

#' Get Waiter Option
#' 
#' Returns default waiter value for specific option.
#' 
#' @param theme_var Name of option to fetch.
#' 
#' @name waiterOptionInternal
#' @keywords internal
.get_waiter_option <- function(theme_var){
  switch(
    theme_var,
    WAITER_HTML = .get_html(),
    WAITER_COLOR = .get_color(),
    WAITER_IMAGE = .get_image(),
    "" # default
  )
}

#' @rdname waiterOptionInternal
.get_html <- function() {
  getOption("WAITER_HTML", spin_1())
}

#' @rdname waiterOptionInternal
.get_color <- function() {
  getOption("WAITER_COLOR", "#333e48")
}

#' @rdname waiterOptionInternal
.get_image <- function() {
  getOption("WAITER_IMAGE", "")
}
