#' Report Progress
#' 
#' Report progress with waitress.
#' 
#' @param ... Passed to the Waitress constructor (`Waitress$new()`).
#' @param expr The work to be done. 
#' This expression should contain calls to
#' setProgressWaitress` or `incProgressWaitress`.
#' @param session The Shiny session object, as provided by 
#' `shinyServer` to the server function. The default is to 
#' automatically find the session by using the current 
#' reactive domain.
#' @param env The environment in which `expr` should be evaluated.
#' @param quoted Whether `expr` is a quoted expression 
#' (this is not common). 
#' @param value Value to set the waitress to or increase it by.
#' 
#' @name withProgressWaitress
#' @export 
withProgressWaitress <- function(
	expr, 
	...,
  session = getDefaultReactiveDomain(),
  env = parent.frame(), 
	quoted = FALSE
){

  if (!quoted)
    expr <- substitute(expr)

  if (is.null(session$progressStack))
    stop("'session' is not a ShinySession object.")

  p <- Waitress$new(...)

  session$progressStack$push(p)
  on.exit({
    session$progressStack$pop()
    p$close()
  })

  eval(expr, env)
}

#' @rdname withProgressWaitress
#' @export
setProgressWaiter <- function(
	value = 1,
  session = getDefaultReactiveDomain()
){

  if (is.null(session$progressStack))
    stop("'session' is not a ShinySession object.")

  if (session$progressStack$size() == 0) {
    warning('setProgress was called outside of withProgress; ignoring')
    return()
  }

  session$progressStack$peek()$set(value)
  invisible()
}

#' @rdname withProgressWaitress
#' @export
incProgressWaitress <- function(
	value = 1,
  session = getDefaultReactiveDomain()
){
  if (is.null(session$progressStack))
    stop("'session' is not a ShinySession object.")

  if (session$progressStack$size() == 0) {
    warning('incProgress was called outside of withProgress; ignoring')
    return()
  }

  p <- session$progressStack$peek()
  p$inc(value)
  invisible()
}
