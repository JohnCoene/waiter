globalVariables("private")

#' return random string
.random_name <- function() {
	letters <- LETTERS %>% 
		tolower() %>% 
		sample()

	numbers <- 1:20 %>% 
		sample() 

	paste0(letters, numbers, collapse = "")
}

.theme2js <- function(x){
	if(x == "line")
		"blue"
	else if(x == "overlay")
		"blueOverlay"
	else if(x == "overlay-radius")
		"blueOverlayRadius"
	else if(x == "overlay-opacity")
		"blueOverlayRadiusHalfOpacity"
	else if(x == "overlay-percent")
		"blueOverlayRadiusWithPercentBar"
}

.check_session <- function(x){
  if(is.null(x))
    stop("invalid session, run this function inside your Shiny server.")
}
