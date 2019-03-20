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

.check_session <- function(x){
  if(is.null(x))
    stop("invalid session, run this function inside your Shiny server.", call. = FALSE)
}
