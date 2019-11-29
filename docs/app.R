library(shiny)
library(waiter)

ui <- navbarPage(
	"waiter",
	theme = shinythemes::shinytheme("sandstone"),
	header = list(
		tags$style("nav{display:none;}")
	),
	id = "tabs",
	tabPanel(
		"home",
		use_waiter(),
		use_waitress(color = "#A98960", percent_color = "#333333"),
		use_butler(),
    use_hostess(),
		show_waiter_on_load(
			tagList(
				spin_wandering_cubes(),
				span(style = "color:white;", "Loading waiter...")
			)
		),
		div(
			class = "container",
			style = "margin-top:3%;text-align:center;",
			br(),
			br(),
			br(),
			br(),
			tags$img(
				src = "https://raw.githubusercontent.com/JohnCoene/waiter/master/man/figures/logo.png",
				style = "max-height:200px;",
				id = "logo"
			),
			br(),
			br(),
			br(),
			br(),
			p(
				"A waiter, a waitress, and a butler for your",
				tags$a(
					"Shiny",
					target = "_blank",
					href = "https://shiny.rstudio.com/"
				), 
				"apps."
			),
			br(),
			br(),
			fluidRow(
				column(
					3,
					div(
						class = "thumbnail",
						div(
							class = "caption",
							h3("The waiter"),
							p("Splash loading screens"),
							actionButton("waiter", "Go")
						)
					)
				),
				column(
					3,
					div(
						class = "thumbnail",
						div(
							class = "caption",
							h3("The waitress"),
							p("Loading bar"),
							actionButton("waitress", "Go")
						)
					)
				),
				column(
					3,
					div(
						class = "thumbnail",
						div(
							class = "caption",
							h3("The butler"),
							p("Colourful loading bar"),
							actionButton("butler", "Go")
						)
					)
				),
				column(
					3,
					div(
						class = "thumbnail",
						div(
							class = "caption",
							h3("The hostess"),
							p("Loading bars"),
							actionButton("hostess", "Go")
						)
					)
				)
			),
			br(),
			br(),
			tags$a(
				icon("code", class = "fa-3x"),
				target = "_blank",
				href = "https://github.com/JohnCoene/waiter"
			),
			br(),
			br(),
			br(),
			code(
				"install.packages('waiter')"
			),
			br()
		)
	),
	tabPanel(
		"waiter",
		br(),
		actionButton("waiter_back", "", icon("arrow-left"), class = "btn-danger"),
		div(
			class = "container",
			style = "margin-top:10%;",
			h2("waiter", style = "text-align:center;"),
			br(),
			br(),
			fluidRow(
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
							"Cube grid" = "spin_cube_grid",
							"Circles" = "spin_circles",
							"Dual Ring" = "spin_dual_ring",
							"Heart" = "spin_heart",
							"Ellipsis" = "spin_ellipsis",
							"Facebook" = "spin_hourglass",
							"Ring" = "spin_ring",
							"Ripple" = "spin_ripple",
              "Rotate" = "spin_rotate",
              "Squares" = "spin_squares",
              "Solar" = "spin_solar",
              "Orbit" = "spin_orbit",
              "Flower" = "spin_flower",
              "Pixel" = "spin_pixel",
              "Orbiter" = "spin_orbiter",
							"1" = "spin_1",
							"2" = "spin_2",
							"3" = "spin_3",
							"4" = "spin_4",
							"5" = "spin_5",
							"6" = "spin_6"
						)
					)
				),
				column(3, textInput("text", "Text", "Loading...", width = "100%")),
				column(3, br(), actionButton("trigger", "Show", width = "100%"))
			)
		)
	),
	tabPanel(
		"waitress",
		br(),
		fluidRow(
			column(
				5, 
				actionButton("waitress_back", "", icon("arrow-left"), class = "btn-danger")
			),
			column(3, h2("waitress themes")),
			column(
				2, actionButton("render", "Render plots", class = "btn-default")
			),
			column(
				2, actionButton("fullpage", "Render page", class = "btn-default")
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
	),
	tabPanel(
		"butler",
		br(),
		actionButton("butler_back", "", icon("arrow-left"), class = "btn-danger"),
		div(
			class = "container",
			style = "margin-top:10%;",
			h2("butler", style = "text-align:center;"),
			br(),
			br(),
			fluidRow(
				style = "text-align:center;",
				column(
					6, actionButton("show_butler", "Show butler")
				),
				column(
					6, actionButton("hide_butler", "Hide butler")
				)
			)
		)
	),
  tabPanel(
    "hostess",
    br(),
    actionButton("hostess_back", "", icon("arrow-left"), class = "btn-danger"),
    div(
			class = "container",
			style = "margin-top:20%;",
      fluidRow(
        column(
          4,
          selectInput(
            "hostess_preset",
            "Preset",
            choices = c(
              "line", "fan", "circle", "bubble", "rainbow",
              "energy", "stripe", "text"
            ),
            width = "100%"
          )
        ),
        column(4, br(), actionButton("go_hostess", "Go")),
        column(4, uiOutput("hostess_loader_output"))
      )
    )
  )
)

server <- function(input, output, session) {

	hide_waiter()

	observeEvent(input$waiter, {
    updateTabsetPanel(session, "tabs", selected = "waiter")
	})

	observeEvent(input$waitress, {
    updateTabsetPanel(session, "tabs", selected = "waitress")
	})

	observeEvent(input$butler, {
    updateTabsetPanel(session, "tabs", selected = "butler")
	})

	observeEvent(input$hostess, {
    updateTabsetPanel(session, "tabs", selected = "hostess")
	})

	# back buttons
	observeEvent(input$waiter_back, {
    updateTabsetPanel(session, "tabs", selected = "home")
	})

	observeEvent(input$waitress_back, {
    updateTabsetPanel(session, "tabs", selected = "home")
	})

	observeEvent(input$butler_back, {
    updateTabsetPanel(session, "tabs", selected = "home")
	})

	observeEvent(input$hostess_back, {
    updateTabsetPanel(session, "tabs", selected = "home")
	})

	# waiter
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

	# waitress
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

	# butler
	config_butler(
		thickness = 8,
		colors = list("0" = "#523C3D", ".3" = "#9A7858", "1" = "#373C49")
	)

	observeEvent(input$show_butler, {
		show_butler()
	})

	observeEvent(input$hide_butler, {
		hide_butler()
	})

  output$hostess_loader_output <- renderUI({
    hostess_loader("HOSTESS", preset = input$hostess_preset, text_color = "black", with_waiter = FALSE)
  })

  observeEvent(input$go_hostess, {
    hostess <- Hostess$new("HOSTESS")
    hostess$set(0)

    for(i in 1:5){
      Sys.sleep(runif(1) * 1.5)
      hostess$set(i * 20)
    }
  })
}

shinyApp(ui, server)