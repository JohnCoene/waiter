.onLoad <- function(libname, pkgname) {
  shiny::addResourcePath(
    "waiter-assets",
    system.file("assets", package = "waiter")
  )
}

# warn if RStudio is running and below 1.2
.onAttach <- function(libname, pkgname) {
  has_rstudio <- rstudioapi::isAvailable()

  if(has_rstudio){
    has_correct_version <- rstudioapi::isAvailable("1.2")
    msg <- paste0("You are running RStudio version '", rstudioapi::getVersion(), 
      "', waiter may not work correctly in the viewer: upgrade to the latest version",
      "to ensure or open Shiny apps in your browser."
    )

    if(!has_correct_version)
      packageStartupMessage(msg)
  }
}
