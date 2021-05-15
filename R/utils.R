globalVariables("private")

#' Create random name
#' 
#' Random name generator to use as unique ids.
#' 
#' @keywords internal
.random_name <- function() {
	letters <- LETTERS %>% 
		tolower() %>% 
		sample()

	numbers <- 1:20 %>% 
		sample() 

	paste0(letters, numbers, collapse = "")
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
  if (x == "overlay"){
    "blueOverlay"
  } else if (x == "overlay-radius") {
    "blueOverlayRadius"
  } else if (x == "overlay-opacity") {
    "blueOverlayRadiusHalfOpacity"
  } else if (x == "overlay-percent") {
    "blueOverlayRadiusWithPercentBar"
  } else {
    "blue"
  } 
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
  opt <- .get_waiter_option(theme_var)

  rez <- value # default to theme

  if(is.null(value))
    rez <- opt

  return(rez)
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
    WAITER_LOGO = .get_logo(),
    WAITER_IMAGE = .get_image(),
    "" # default
  )
}

#' @rdname waiterOptionInternal
.get_html <- function() {
  html <- getOption("WAITER_HTML")
  if(is.null(html))
    html <- spin_1()
  return(html)
}

#' @rdname waiterOptionInternal
.get_color <- function() {
  color <- getOption("WAITER_COLOR")
  if(is.null(color))
    color <- "#333e48"
  return(color)
}

#' @rdname waiterOptionInternal
.get_logo <- function() {
  logo <- getOption("WAITER_LOGO")
  if(is.null(logo))
    logo <- ""
  return(logo)
}

#' @rdname waiterOptionInternal
.get_image <- function() {
  image <- getOption("WAITER_IMAGE")
  if(is.null(image))
    image <- ""
  return(image)
}
