#' Waiter
#' 
#' Programatically show and hide loading screens.
#' 
#' @param html HTML content of waiter, generally a spinner, see \code{\link{spinners}}.
#' @param color Background color of loading screen.
#' @param logo Logo to display.
#' @param id Id of element to hide or element on which to show waiter over.
#' @param hide_on_render Set to \code{TRUE} to automatically hide the waiter
#' when the plot in \code{id} is drawn. Note the latter will only work with
#' shiny plots, tables, htmlwidgets, etc. but will not work with arbitrary
#' elements.
#' @param include_js Whether to include the Javascript dependencies, only
#' set to \code{FALSE} if you use \code{\link{show_waiter_on_load}}.
#' 
#' @section Functions:
#' \itemize{
#'  \item{\code{use_waiter} and \code{waiter_use}: waiter dependencies to include anywhere in your UI but ideally at the top.}
#'  \item{\code{waiter_show_on_load}: Show a waiter on page load, before the session is even loaded, include in UI \emph{after} \code{use_waiter}.}
#'  \item{\code{waiter_show}: Show waiting screen.}
#'  \item{\code{waiter_hide}: Hide any waiting screen.}
#'  \item{\code{waiter_update}: Update the content \code{html} of the waiting screen.}
#'  \item{\code{waiter_hide_on_render}: Hide any waiting screen when the output is drawn, useful for outputs that take a long time to draw, \emph{use in \code{ui}}.}
#' }
#' 
#' @examples
#' library(shiny)
#' 
#' ui <- fluidPage(
#'   use_waiter(), # dependencies
#'   waiter_show_on_load(spin_fading_circles()), # shows before anything else 
#'   actionButton("show", "Show loading for 5 seconds")
#' )
#' 
#' server <- function(input, output, session){
#'   waiter_hide() # will hide *on_load waiter
#'   
#'   observeEvent(input$show, {
#'     waiter_show(
#'       tagList(
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
use_waiter <- function(include_js = TRUE){
  singleton(
    tags$head(
      tags$link(
        href = "waiter-assets/waiter/please-wait.css",
        rel="stylesheet",
        type="text/css"
      ),
      tags$script("window.loading_screen;"),
      tags$link(
        href = "waiter-assets/waiter/spinkit.css",
        rel="stylesheet",
        type="text/css"
      ),
      tags$link(
        href = "waiter-assets/waiter/css-spinners.css",
        rel="stylesheet",
        type="text/css"
      ),
      tags$link(
        href = "waiter-assets/waiter/devloop.css",
        rel="stylesheet",
        type="text/css"
      ),
      tags$link(
        href = "waiter-assets/waiter/spinners.css",
        rel="stylesheet",
        type="text/css"
      ),
      tags$link(
        href = "waiter-assets/waiter/spinbolt.css",
        rel="stylesheet",
        type="text/css"
      ),
      tags$link(
        href = "waiter-assets/waiter/loaders.css",
        rel="stylesheet",
        type="text/css"
      ),
      tags$link(
        href = "waiter-assets/waiter/custom.css",
        rel="stylesheet",
        type="text/css"
      ),
      if(include_js)
        tags$script(
          src = "waiter-assets/waiter/please-wait.min.js"
        ),
      tags$script(
        src = "waiter-assets/waiter/waiter.js"
      ),
      tags$script(
        src = "waiter-assets/waiter/custom.js"
      )
    )
  )
}

#' @rdname waiter
#' @export
waiter_use <- use_waiter

#' @rdname waiter
#' @export
show_waiter <- function(html = "", color = "#333e48", logo = "", id = NULL, 
  hide_on_render = FALSE){
  .Deprecated("waiter_show", package = "waiter")

  html <- as.character(html)
  html <- gsub("\n", "", html)

  if(hide_on_render && is.null(id))
    stop("Cannot `hide_on_render` when `id` is not specified")

  opts <- list(
    id = id,
    html = html,
    color = color,
    logo = logo,
    hide_on_render = hide_on_render
  )
  session <- shiny::getDefaultReactiveDomain()
  .check_session(session)
  session$sendCustomMessage("waiter-show", opts)
}

#' @rdname waiter
#' @export
waiter_show <- function(id = NULL, html = spin_1(), color = "#333e48", logo = "", 
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
    hide_on_render = hide_on_render
  )
  session <- shiny::getDefaultReactiveDomain()
  .check_session(session)
  session$sendCustomMessage("waiter-show", opts)
}

#' @rdname waiter
#' @export
show_waiter_on_load <- function(html = "", color = "#333e48", logo = ""){
  .Deprecated("waiter_show_on_load", package = "waiter")

  html <- as.character(html)
  html <- gsub("\n", "", html)

  script <- paste0(
    "window.loading_screen = pleaseWait({
      logo: '", as.character(logo), "',
      backgroundColor: '", color, "',
      loadingHtml: '", html, "'
    });"
  )

  tagList(
    tags$script(
      src = "waiter-assets/waiter/please-wait.min.js"
    ),
    HTML(paste0("<script>", script, "</script>"))
  )
}

#' @rdname waiter
#' @export
waiter_show_on_load <- function(html = spin_1(), color = "#333e48", logo = ""){
  
  html <- as.character(html)
  html <- gsub("\n", "", html)

  script <- paste0(
    "window.loading_screen = pleaseWait({
      logo: '", as.character(logo), "',
      backgroundColor: '", color, "',
      loadingHtml: '", html, "'
    });"
  )

  tagList(
    tags$script(
      src = "waiter-assets/waiter/please-wait.min.js"
    ),
    HTML(paste0("<script>", script, "</script>"))
  )
}

#' @rdname waiter
#' @export
hide_waiter_on_drawn <- function(id){
  .Deprecated("waiter_hide_on_render", package = "waiter")

  if(missing(id))
    stop("Missing id", call. = FALSE)
  
  script <- paste0(
    '$(document).on("shiny:value", function(event) {
      if (event.target.id === "', id,'") {
        window.loading_screen.finish();
      }
    });'
  )

  singleton(
    tags$head(
      tags$script(script)
    )
  )
}

#' @rdname waiter
#' @export
waiter_hide_on_render <- function(id){
  if(missing(id))
    stop("Missing id", call. = FALSE)
  
  script <- paste0(
    '$(document).on("shiny:value shiny:error", function(event) {
      if (event.target.id === "', id,'") {
        window.loading_screen.finish();
      }
    });'
  )

  singleton(
    tags$head(
      tags$script(script)
    )
  )
}

#' @rdname waiter
#' @export
hide_waiter <- function(id = NULL){
  .Deprecated("waiter_hide", package = "waiter")
  session <- shiny::getDefaultReactiveDomain()
  .check_session(session)
  session$sendCustomMessage("waiter-hide", list(id = id))
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
update_waiter <- function(html = "", id = NULL){
  .Deprecated("waiter_update", package = "waiter")
  if(is.character(html))
    html <- span(html)
  html <- as.character(html)
  html <- gsub("\n", "", html)
  session <- shiny::getDefaultReactiveDomain()
  .check_session(session)
  session$sendCustomMessage("waiter-update", list(html = html, id = id))
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
#' @param logo Logo to display.
#' @param id Id, or vector of ids, of element on which to overlay the waiter, if \code{NULL} the waiter is
#' applied to the entire body.
#' @param hide_on_render Set to \code{TRUE} to automatically hide the waiter
#' when the element in \code{id} is drawn. Note the latter will work with
#' shiny plots, tables, htmlwidgets, etc. but will not work with arbitrary
#' elements.
#' 
#' @examples
#' \dontrun{Waiter$new()}
    initialize = function(id = NULL, html = NULL, color = NULL, logo = NULL, 
      hide_on_render = !is.null(id)){

      # get theme
      html <- .theme_or_value(html, "WAITER_HTML")
      color <- .theme_or_value(color, "WAITER_COLOR")
      logo <- .theme_or_value(logo, "WAITER_LOGO")
      
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
      private$.logo <- logo
      private$.hide_on_render <- hide_on_render
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
          hide_on_render = private$.hide_on_render
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
        cat("A waiter\n")
		}
  ),
  private = list(
    .html = list(),
    .color = "#333e48",
    .logo = "",
    .id = NULL,
    .session = NULL,
    .hide_on_render = FALSE,
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
waiter_set_theme <- function(html = spin_1(), color = "#333e48", logo = ""){
  options(
    WAITER_HTML = html,
    WAITER_COLOR = color,
    WAITER_LOGO = logo
  )
  invisible()
}

#' @rdname waiterTheme
#' @export
waiter_get_theme <- function(){
  list(
    html = .get_html(),
    color = .get_color(),
    logo = .get_logo()
  )
}

#' @rdname waiterTheme
#' @export
waiter_unset_theme <- function(){
  options(
    WAITER_HTML = NULL,
    WAITER_COLOR = NULL,
    WAITER_LOGO = NULL
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
#' @export
transparent <- function(alpha = 0){
  correct <- alpha >= 0 & alpha <= 1
  if(!correct)
    stop("`alpha` must be between 0 and 1", call. = FALSE)
  paste0("rgba(255,255,255,", alpha, ")")
}