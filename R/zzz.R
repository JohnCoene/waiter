.onLoad <- function(libname, pkgname) {
  shiny::addResourcePath(
    "waiter-assets",
    system.file("assets", package = "waiter")
  )
}

.onUnload <- function(libpath){
  options(
    WAITER_HTML = NULL,
    WAITER_COLOR = NULL,
    WAITER_IMAGE = NULL
  )
}