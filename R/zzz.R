.onLoad <- function(libname, pkgname) {
  shiny::addResourcePath(
    "waiter-assets",
    system.file("assets", package = "waiter")
  )
}