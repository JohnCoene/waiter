#' Attendant
#' 
#' Create and attendant.
#' 
#' @param template Htmltools tags to shine while content is loading.
#' @param start If \code{TRUE} starts on load.
#' 
#' @name attendant
#' @export
use_attendant <- function(template = attendant_template, start = TRUE){
  tagList(
    singleton(
      tags$head(
        tags$link(
          href = "waiter-assets/attendant/attendant.css",
          rel="stylesheet",
          type="text/css"
        ),
        tags$script(
          src = "waiter-assets/attendant/attendant.js"
        ),
        tags$script(
          src = "waiter-assets/attendant/custom.js"
        )
      ),
      tags$script("var window.instance;")
    ),
    div(
      id = "attendant-template",
      template
    ),
    if(start)
      tags$script("window.instance = $('#attendant-template').scheletrone();")
  )
}

para <- "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"

#' @rdname attendant
#' @export
attendant_template <- div(
  h1("Heading"),
  style = "height:100vh",
  fluidRow(
    style = "height:50vh",
    column(4, h1("Heading"), h2("Subheading"), p(para)),
    column(4, h1("Heading"), h2("Subheading"), p(para)),
    column(4, h1("Heading"), h2("Subheading"), p(para))
  ),
  div(
    fluidRow(
      column(3, p(substring(para, 1, 400))),
      column(9, h3("Heading"), p(para))
    )
  )
)

#' @rdname attendant
#' @export
Attendant <- R6::R6Class(
  "Attendant",
  public = list(
#' @details
#' Start the attendant.
#' 
#' @examples
#' \dontrun{Attendant$new()$start()}
    start = function(){
      session <- shiny::getDefaultReactiveDomain()
      .check_session(session)
      session$sendCustomMessage("attendant-start", list(selector = private$.selector))
      invisible(self)
    },
#' @details
#' print the attendant
		print = function(){
      cat("An attendant\n")
		},
#' @details
#' Stop the attendant.
#' 
#' @examples
#' \dontrun{Attendant$new()$stop()}
    stop = function(){
      session <- shiny::getDefaultReactiveDomain()
      .check_session(session)
      session$sendCustomMessage("attendant-stop", list(selector = private$.selector))
      invisible(self)
    }
  ),
  private = list(
    .selector = "#attendant-template"
  )
)
