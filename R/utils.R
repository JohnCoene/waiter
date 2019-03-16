#' return random string
.random_name <- function() {
	letters <- LETTERS %>% 
		tolower() %>% 
		sample()

	numbers <- 1:20 %>% 
		sample() 

	paste0(letters, numbers, collapse = "")
}

# construct waitress object
.construct_waitress <- function(l) {
	structure(l, class = c("waitress", "list"))
}
