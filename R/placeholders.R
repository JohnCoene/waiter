usePlaceholder <- function(){
  htmltools::htmlDependency(
    name = "placeholder",
    version = utils::packageVersion("waiter"),
    src = "packer",
    package = "waiter",
    script = "placeholder.js"
  )
}

#' Placeholders
#' @keywords internal
Placeholder <- R6::R6Class(
  "Placeholder",
  public = list(
    initialize = function(
      target = ".waiter-placeholder",
      type = c("glow", "wave", "default"),
      session = shiny::getDefaultReactiveDomain()
    ) {
      private$.type <- match.arg(type)
      private$.target <- paste0(target, collapse = ",")
      private$.session <- session
      invisible(self)
    },
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

withPlaceholder <- function(el){
  htmltools::tagAppendAttributes(
    el,
    class = "waiter-placeholder"
  )
}
