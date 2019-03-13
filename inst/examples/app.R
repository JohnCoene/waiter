library(shiny)
library(waiter)

ui <- fluidPage(
	use_waiter(),
	div(
		class = "container",
		style = "margin-top:400px;",
		fluidPage(
			column(3, sliderInput("seconds", "Seconds", min = 3, max = 7, value = 4, width = "100%")),
			column(
				3,
				selectInput(
					"spinner",
					"Spinner",
					choices = c(
						"Fading circle" = "spin_fading_circles",
						"Folding cube" = "spin_folding_cube",
						"Double bounce" = "spin_double_bounce",
						"Wave" = "spin_wave",
						"Wandering Cubes" = "spin_wandering_cubes",
						"Pulse" = "spin_pulse",
						"Chasing dots" = "spin_chasing_dots",
						"3 bounce" = "spin_three_bounce",
						"Circle" = "spin_circle",
						"Cube grid" = "spin_cube_grid"
					)
				)
			),
			column(3, textInput("text", "Text", "Loading...", width = "100%")),
			column(3, br(), actionButton("trigger", "Show", class = "btn-primary", width = "100%"))
		)
	)
)

server <- function(input, output, session) {
  observeEvent(input$trigger, {

		spinner <- eval(parse(text = paste0(input$spinner, "()")))

    show_waiter(
			tagList(
				spinner,
				br(),
				span(input$text, style = "color:white;")
			)
		)
    Sys.sleep(input$seconds)
    hide_waiter()
  })
}

shinyApp(ui, server)

