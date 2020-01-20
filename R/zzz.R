.onLoad <- function(libname, pkgname) {
  shiny::addResourcePath(
    "waiter-assets",
    system.file("assets", package = "waiter")
  )
}

.onAttach <- function(libname, pkgname) {
  has_rstudio <- rstudioapi::isAvailable()

  if(has_rstudio){
    has_correct_version <- rstudioapi::isAvailable("1.2")
    msg <- paste("You are running RStudio version", rstudioapi::getVersion(), 
      ", waiter may not work in the viewer, upgrade to 1.2+ to ensure it does."
    )

    if(!has_correct_version)
      packageStartupMessage(msg)
  }
}
