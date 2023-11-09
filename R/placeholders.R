#' Placeholder Dependencies
#' 
#' Placeholder dependencies to place withing Shiny UI.
#' 
#' @export
usePlaceholder <- function(){ # nolint
  htmltools::htmlDependency(
    name = "placeholder",
    version = utils::packageVersion("waiter"),
    src = "packer",
    package = "waiter",
    script = "placeholder.js"
  )
}

#' Placeholder
#' 
#' Toggle placeholders.
#' 
#' @export
Placeholder <- R6::R6Class( # nolint
  "Placeholder",
  public = list(
    #' @details Initialize
    #' @param targets Vector or list of selectors to turn into placeholders.
    #' @param type Type of placeholder.
    #' @param session Valid shiny session.
    initialize = function(
      targets,
      type = c("glow", "wave", "default"),
      session = shiny::getDefaultReactiveDomain()
    ) {
      private$.type <- match.arg(type)
      private$.target <- as.list(targets)
      private$.session <- session
      invisible(self)
    },
    #' @details Show
    show = function(){
      private$.session$sendCustomMessage(
        "placeholder-show",
        list(
          target = private$.target,
          type = private$.type
        )
      )
      invisible(self)
    },
    #' @details Hide
    hide = function(){
      private$.session$sendCustomMessage(
        "placeholder-hide",
        list(
          target = private$.target,
          type = private$.type
        )
      )
      invisible(self)
    }
  ),
  private = list(
    .type = "default",
    .target = NULL,
    .session = NULL
  )
)
