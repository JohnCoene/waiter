#' Waiter
#' 
#' Programatically show and hide loading screens.
#' 
#' @param html HTML content of waiter, generally a spinner, see \code{\link{spinners}}.
#' @param color Background color of loading screen.
#' @param logo Path to logo to display.
#' @param image Path to background image.
#' @param fadeout Use a fade out effect when the screen is removed.
#' Can be a boolean, or a numeric indicating the number of 
#' milliseconds the effect should take. 
#' @param id Id of element to hide or element on which to show waiter over.
#' @param hide_on_render Set to \code{TRUE} to automatically hide the waiter
#' when the plot in \code{id} is drawn. Note the latter will only work with
#' shiny plots, tables, htmlwidgets, etc. but will not work with arbitrary
#' elements.
#' @param spinners Spinners to include. By default all the CSS files for 
#' all spinners are included you can customise this only that which you 
#' need in order to reduce the amount of CSS that needs to be loaded and
#' improve page loading speed. There are 7 spinner kits. The spinner kit
#' required for the spinner you use is printed in the R console when 
#' using the spinner. You can specify a single spinner kit e.g.: \code{1}
#' or multiple spinner kits as a vector e.g.: \code{c(1,3,6)}.
#' @param include_js Deprecated argument, no longer needed.
#' 
#' @section Functions:
#' \itemize{
#'  \item{\code{use_waiter} and \code{waiter_use}: waiter dependencies to include anywhere in your UI but ideally at the top.}
#'  \item{\code{waiter_show_on_load}: Show a waiter on page load, before the session is even loaded, include in UI \emph{after} \code{use_waiter}.}
#'  \item{\code{waiter_show}: Show waiting screen.}
#'  \item{\code{waiter_hide}: Hide any waiting screen.}
#'  \item{\code{waiter_on_busy}: Automatically shows the waiting screen when the server is busy, and hides it when it goes back to idle.}
#'  \item{\code{waiter_update}: Update the content \code{html} of the waiting screen.}
#'  \item{\code{waiter_hide_on_render}: Hide any waiting screen when the output is drawn, useful for outputs that take a long time to draw, \emph{use in \code{ui}}.}
#'  \item{\code{waiter_preloader}: Shows the waiter on load and automatically removes it once all the UI is rendered, only runs on the first load of the app.}
#' }
#' 
#' @examples
#' library(shiny)
#' 
#' ui <- fluidPage(
#'   useWaiter(), # dependencies
#'   waiter_show_on_load(spin_fading_circles()), # shows before anything else 
#'   actionButton("show", "Show loading for 5 seconds")
#' )
#' 
#' server <- function(input, output, session){
#'   waiter_hide() # will hide *on_load waiter
#'   
#'   observeEvent(input$show, {
#'     waiter_show(
#'       html = tagList(
#'         spin_fading_circles(),
#'         "Loading ..."
#'       )
#'     )
#'     Sys.sleep(3)
#'     waiter_hide()
#'   })
#' }
#' 
#' if(interactive()) shinyApp(ui, server)
#' 
#' @import shiny
#' @name waiter
#' @export
use_waiter <- function(spinners = 1:7, include_js = TRUE){
  .Deprecated("useWaiter", "waiter")
  useWaiter(spinners, include_js)
}

#' @export 
#' @rdname waiter
useWaiter <- function(spinners = 1:7, include_js = TRUE){

  if(!isTRUE(include_js))
    warning("include_js argument is deprecated, it is no longer needed")

  # must haves
  header <- tags$head(
    tags$link(
      href = "waiter-assets/waiter/waiter.css",
      rel="stylesheet",
      type="text/css"
    )
  )

  # spinner kits
  if(1 %in% spinners)
    header <- shiny::tagAppendChildren(
      header,
      tags$link(
        href = "waiter-assets/waiter/spinkit.css",
        rel="stylesheet",
        type="text/css"
      )
    )

  if(2 %in% spinners)
    header <- shiny::tagAppendChildren(
      header,
      tags$link(
        href = "waiter-assets/waiter/css-spinners.css",
        rel="stylesheet",
        type="text/css"
      )
    )

  if(3 %in% spinners)
    header <- shiny::tagAppendChildren(
      header,
      tags$link(
        href = "waiter-assets/waiter/devloop.css",
        rel="stylesheet",
        type="text/css"
      )
    )

  if(4 %in% spinners)
    header <- shiny::tagAppendChildren(
      header,
      tags$link(
        href = "waiter-assets/waiter/spinners.css",
        rel="stylesheet",
        type="text/css"
      )
    )

  if(5 %in% spinners)
    header <- shiny::tagAppendChildren(
      header,
      tags$link(
        href = "waiter-assets/waiter/spinbolt.css",
        rel="stylesheet",
        type="text/css"
      )
    )

  if(6 %in% spinners)
    header <- shiny::tagAppendChildren(
      header,
      tags$link(
        href = "waiter-assets/waiter/loaders.css",
        rel="stylesheet",
        type="text/css"
      )
    )

  if(7 %in% spinners)
    header <- shiny::tagAppendChildren(
      header,
      tags$link(
        href = "waiter-assets/waiter/custom.css",
        rel="stylesheet",
        type="text/css"
      )
    )

  # add js
  header <- shiny::tagAppendChildren(
    header,
    tags$script(
      src = "waiter-assets/waiter/waiter.js"
    ),
    tags$script(
      src = "waiter-assets/waiter/custom.js"
    )
  )

  # singleton it
  singleton(header)

}

#' @rdname waiter
#' @export
waiter_use <- function(spinners = 1:7, include_js = TRUE){
  .Deprecated("useWaiter", "waiter")
  useWaiter(spinners, include_js)
}

#' @rdname waiter
#' @export
waiter_show <- function(
  id = NULL, 
  html = spin_1(), 
  color = "#333e48", 
  logo = "", 
  image = "",
  hide_on_render = !is.null(id)){
  
  html <- as.character(html)
  html <- gsub("\n", "", html)

  if(hide_on_render && is.null(id))
    stop("Cannot `hide_on_render` when `id` is not specified")

  opts <- list(
    id = id,
    html = html,
    color = color,
    logo = logo,
    image = image,
    hide_on_render = hide_on_render
  )
  session <- shiny::getDefaultReactiveDomain()
  .check_session(session)
  session$sendCustomMessage("waiter-show", opts)
}


#' @rdname waiter
#' @export
waiter_show_on_load <- function(
  html = spin_1(), 
  color = "#333e48",
  image = ""
){
  
  html <- as.character(html)
  html <- gsub("\n", "", html)

  show <- sprintf(
    "show_waiter(
      null,
      html = '%s', 
      color = '%s',
      image = '%s'
    );",
    html, color, image
  )

  HTML(sprintf("<script>%s</script>", show))

}

#' @rdname waiter
#' @export
waiter_preloader <- function(
  html = spin_1(), 
  color = "#333e48",
  image = "",
  fadeout = FALSE
){
  .Deprecated("waiterPreloader", package = "waiter")
  waiterPreloader(html, color, image, fadeout)
}

#' @rdname waiter
#' @export
waiterPreloader <- function(
  html = spin_1(), 
  color = "#333e48",
  image = "",
  fadeout = FALSE
){
  
  html <- as.character(html)
  html <- gsub("\n", "", html)
  
  fadeout <- ifelse(is.logical(fadeout), tolower(fadeout), fadeout)

  show <- sprintf(
    "show_waiter(
      null,
      html = '%s', 
      color = '%s',
      image = '%s',
      fade_out = %s
    );",
    html, color, image
  )

  hide <- paste0(
    "window.ran = false;",
    "$(document).on('shiny:idle', function(event){
      if(!window.ran)
        hide_waiter(id = null);

      window.ran = true;
    });"
  )

  list(
    tags$head(  
      HTML(
        sprintf("<script>%s</script>", hide)
      )
    ),
    HTML(
      sprintf("<script>%s</script>", show)
    )
  )
}

#' @rdname waiter
#' @export
waiter_hide_on_render <- function(id){
  .Deprecated("waiterHideOnRender", package = "waiter")
  waiterHideOnRender(id)
}

#' @rdname waiter
#' @export
waiterHideOnRender <- function(id){
  if(missing(id))
    stop("Missing id", call. = FALSE)
  
  script <- sprintf(
    "$(document).on('shiny:value', function(event) {
      if(event.name == '%s'){
        hide_waiter(null);
      }
    });",
    id
  )

  singleton(
    tags$head(
      tags$script(script)
    )
  )
}

#' @rdname waiter
#' @export
waiter_on_busy <- function(html = spin_1(), color = "#333e48", logo = "", image = "", fadeout = FALSE){
  .Deprecated("waiterOnBudy", package = "waiter")
}

#' @rdname waiter
#' @export
waiterOnBusy <- function(html = spin_1(), color = "#333e48", logo = "", image = "", fadeout = FALSE){

  html <- as.character(html)
  html <- gsub("\n", "", html)

  fadeout <- ifelse(is.logical(fadeout), tolower(fadeout), fadeout)

  script <- paste0(
    "$(document).on('shiny:busy', function(event) {
      show_waiter(
        id = null,
        html = '", html, "', 
        color = '", color, "',
        image = '", image, "',
        fade_out = ", fadeout, "
      );
    });
    
    $(document).on('shiny:idle', function(event) {
      hide_waiter(null);
    });"
  )

  singleton(HTML(paste0("<script>", script, "</script>")))
}

#' @rdname waiter
#' @export
waiter_hide <- function(id = NULL){
  session <- shiny::getDefaultReactiveDomain()
  .check_session(session)
  session$sendCustomMessage("waiter-hide", list(id = id))
}

#' @rdname waiter
#' @export
waiter_update <- function(id = NULL, html = NULL){
  # default to NULL clearer to the user
  if(is.null(html))
    html <- span()
  
  # wrap in a span if character string passed
  # otherwise breaks JavaScript.innerHTML
  if(is.character(html))
    html <- span(html)
  
  html <- as.character(html)
  html <- gsub("\n", "", html)
  session <- shiny::getDefaultReactiveDomain()
  .check_session(session)
  session$sendCustomMessage("waiter-update", list(html = html, id = id))
}

#' Waiter R6 Class
#' 
#' Create a waiter to then show, hide or update its content.
#' 
#' @details
#' Create an object to show a waiting screen on either the entire application
#' or just a portion of the app by specifying the \code{id}. Then \code{show},
#' then \code{hide} or meanwhile \code{update} the content of the waiter. 
#' 
#' @name waiterClass
#' @export
Waiter <- R6::R6Class(
  "waiter",
  public = list(
#' @details
#' Create a waiter.
#' 
#' @param html HTML content of waiter, generally a spinner, see \code{\link{spinners}} or a list of the latter.
#' @param color Background color of loading screen.
#' @param image Path to background image of loading screen.
#' @param fadeout Use a fade out effect when the screen is removed.
#' Can be a boolean, or a numeric indicating the number of 
#' milliseconds the effect should take. 
#' @param logo Logo to display.
#' @param id Id, or vector of ids, of element on which to overlay the waiter, if \code{NULL} the waiter is
#' applied to the entire body.
#' @param hide_on_render Set to \code{TRUE} to automatically hide the waiter
#' when the element in \code{id} is drawn. Note the latter will work with
#' shiny plots, tables, htmlwidgets, etc. but will not work with arbitrary
#' elements.
#' @param hide_on_error,hide_on_silent_error Whether to hide the waiter when the underlying element throws an error.
#' Silent error are thrown by \link[shiny]{req} and  \link[shiny]{validate}.
#' 
#' @examples
#' \dontrun{Waiter$new()}
    initialize = function(id = NULL, html = NULL, color = NULL, logo = NULL, 
      image = "", fadeout = FALSE, hide_on_render = !is.null(id), hide_on_error = !is.null(id),
      hide_on_silent_error = !is.null(id)){

      # get theme
      html <- .theme_or_value(html, "WAITER_HTML")
      color <- .theme_or_value(color, "WAITER_COLOR")
      logo <- .theme_or_value(logo, "WAITER_LOGO")
      image <- .theme_or_value(image, "WAITER_IMAGE")
      
      # process inputs
      if(inherits(html, "shiny.tag.list") || inherits(html, "shiny.tag"))
        html <- list(html)
      
      if(inherits(html, "list"))
        html <- lapply(html, as.character)

      if(!is.null(id))
        if(!is.character(id))
          stop("`id` must be of class `character`", call. = FALSE)

      if(hide_on_render && is.null(id))
        stop("Cannot `hide_on_render` when `id` is not specified")

      if(length(id) > 0)
        if(length(html) != length(id))
          html <- as.list(rep(html, length(id)))

      if(is.null(id))
        id <- list(NULL)
      else
        id <- as.list(id)

      private$.id <- id
      private$.html <- html
      private$.color <- color
      private$.image <- image
      private$.logo <- logo
      private$.fadeout <- fadeout
      private$.hide_on_render <- hide_on_render
      private$.hide_on_silent_error <- hide_on_silent_error
      private$.hide_on_error <- hide_on_error
    },
#' @details
#' Show the waiter.
    show = function(){
      private$get_session()
      for(i in 1:length(private$.id)){
        opts <- list(
          id = private$.id[[i]],
          html = private$.html[[i]],
          color = private$.color,
          logo = private$.logo,
          image = private$.image,
          hide_on_render = private$.hide_on_render,
          hide_on_silent_error = private$.hide_on_silent_error,
          hide_on_error = private$.hide_on_error,
          fade_out = private$.fadeout
        )
        private$.session$sendCustomMessage("waiter-show", opts)
      }
      invisible(self)
    },
#' @details
#' Hide the waiter.
    hide = function(){
      private$get_session()
      for(i in 1:length(private$.id)){
        private$.session$sendCustomMessage("waiter-hide", list(id = private$.id[[i]]))
      }
      invisible(self)
    },
#' @details
#' Update the waiter's html content.
#' @param html HTML content of waiter, generally a spinner, see \code{\link{spinners}}.
    update = function(html = NULL){

      private$get_session()

      # force span to ensure JavaScript.innerHTML does not break
      if(is.null(html))
        html <- span()

      html <- as.character(html)
      html <- gsub("\n", "", html)
     
      for(i in 1:length(private$.id)){
        private$.session$sendCustomMessage("waiter-update", list(html = html, id = private$.id[[i]]))
      }
      invisible(self)
    },
#' @details
#' print the waiter
		print = function(){
      if(!is.null(private$.id))
		    cat("A waiter on", paste0(private$.id, collapse = ","), "\n")
      else
        cat("A full-screen waiter\n")
		}
  ),
  active = list(
#' @field fadeout Set or get the fade out
    fadeout = function(value) {
      if(missing(value))
        return(private$.fadeout)
      
      private$.fadeout <- value
    },
#' @field color Set or get the background color
    color = function(value) {
      if(missing(value))
        return(private$.color)
      
      private$.color <- value
    },
#' @field image Set of get the background image
    image = function(value) {
      if(missing(value))
        return(private$.image)
      
      private$.image <- value
    },
#' @field session Set or get the shiny session
    session = function(value) {
      if(missing(value))
        return(private$.session)
      
      private$.session <- value
    },
#' @field html Set or get the html content
    html = function(value) {
      if(missing(value))
        return(private$.html)
      
      private$.html <- value
    }
  ),
  private = list(
    .html = list(),
    .color = "#333e48",
    .logo = "",
    .image = "",
    .id = NULL,
    .session = NULL,
    .fadeout = FALSE,
    .hide_on_render = FALSE,
    .hide_on_silent_error = FALSE,
    .hide_on_error = FALSE,
		get_session = function(){
			private$.session <- shiny::getDefaultReactiveDomain()
			.check_session(private$.session)
		}
  )
)

#' Define a Theme
#' 
#' Define a theme to be used by all waiter loading screens. 
#' These can be overriden in individual loading screens.
#' 
#' @inheritParams waiter
#' 
#' @name waiterTheme
#' @export
waiter_set_theme <- function(html = spin_1(), color = "#333e48", logo = "", image = ""){
  options(
    WAITER_HTML = html,
    WAITER_COLOR = color,
    WAITER_LOGO = logo,
    WAITER_IMAGE = image
  )
  invisible()
}

#' @rdname waiterTheme
#' @export
waiter_get_theme <- function(){
  list(
    html = .get_html(),
    color = .get_color(),
    logo = .get_logo(),
    image = .get_image()
  )
}

#' @rdname waiterTheme
#' @export
waiter_unset_theme <- function(){
  options(
    WAITER_HTML = NULL,
    WAITER_COLOR = NULL,
    WAITER_LOGO = NULL,
    WAITER_IMAGE = NULL
  )
  invisible()
}

#' Transparency 
#' 
#' A convenience function to create a waiter with transparent background.
#' 
#' @param alpha Alpha channel where \code{0} is completely transparent
#' and \code{1} is opaque.
#' 
#' @examples transparent()
#' 
#' @export
transparent <- function(alpha = 0){
  correct <- alpha >= 0 && alpha <= 1
  if(!correct)
    stop("`alpha` must be between 0 and 1", call. = FALSE)
  
  invisible(paste0("rgba(255,255,255,", alpha, ")"))
}