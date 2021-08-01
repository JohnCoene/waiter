#' @export
print.waitress <- function(x, ...) {

	if(is.null(x$id))
		x <- "A waitress on the whole screen."
	else
		x <- paste("A waitress applied to an object of id:", x$id)

	print(x, ...)
}
