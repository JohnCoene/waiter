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
      "'\n, waiter may not work correctly in the viewer: upgrade to the latest version",
      "or open shiny applications in the browser."
    )

    if(!has_correct_version)
      packageStartupMessage(msg)
  }
}

.onUnload <- function(libpath){
  options(
    WAITER_HTML = NULL,
    WAITER_COLOR = NULL,
    WAITER_LOGO = NULL
  )
}