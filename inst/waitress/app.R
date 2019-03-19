
library(shiny)
library(waiter)

ui <-  fluidPage(
	title = "waitress",
	br(),
	use_waitress(),
	fluidRow(
		column(3, h2(code("waitress"), "themes")),
		column(
			3, actionButton("render", "Render plots", class = "btn-primary")
		),
		column(
			3, actionButton("fullpage", "Render page", class = "btn-primary")
		)
	),
	fluidRow(
		column(
			6,
			h4(code("line")),
			plotOutput("line")
		),
		column(
			6, 
			h4(code("overlay")),
			plotOutput("overlay")
		)
	),
	fluidRow(
		column(
			6, 
			h4(code("overlay-percent")),
			plotOutput("percent")
		),
		column(
			6, 
			h4(code("overlay-opacity")),
			plotOutput("opacity")
		)
	)
)

server <- function(input, output, session){

	w <- Waitress$new(theme = "overlay-percent")

	observeEvent(input$fullpage, {
		w$start() 
		w$auto(5, 150)

		Sys.sleep(3.5)

		w$hide()
	})

	w_line <- call_waitress("#line", theme = "line")
	w_overlay <- call_waitress("#overlay", theme = "overlay")
	w_opacity <- call_waitress("#opacity", theme = "overlay-opacity")
	w_percent <- call_waitress("#percent", theme = "overlay-percent")

	data <- eventReactive(input$render, {
		w_overlay$start()
		w_overlay$auto(5, 150)

		w_line$start()
		w_line$auto(5, 150)

		w_opacity$start()
		w_opacity$auto(5, 150)

		w_percent$start()
		w_percent$auto(5, 150)

		Sys.sleep(3.5)
		w_overlay$hide()
		w_line$hide()
		w_opacity$hide()
		w_percent$hide()

		return(runif(50))
	})

	output$overlay <- renderPlot({
		hist(data())
	})

	output$line <- renderPlot({
		hist(data())
	})

	output$opacity <- renderPlot({
		hist(data())
	})

	output$percent <- renderPlot({
		hist(data())
	})
}

if(interactive()) shinyApp(ui, server)