![R-CMD-check](https://github.com/JohnCoene/waiter/workflows/R-CMD-check/badge.svg) ![CRAN status](https://www.r-pkg.org/badges/version/waiter)

<img height=250 src="_assets/img/logo.png" />

# waiter

Loading screens for Shiny; programmatically show and hide partial or full page loading screens with spinners or loading bars, see the [demo](https://shiny.john-coene.com/waiter) and the [cheat sheet](https://waiter.john-coene.com/#/cheatsheet).

Introduction by [Veerle](https://www.youtube.com/@HypebrightBV)

<iframe style="aspect-ratio: 16 / 9; width:100%;" src="https://www.youtube.com/embed/YrCX0FlXsW0?si=vNun7sG3Tm5VRBQc&amp;start=241" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

## The Staff

The following staff members will help you keep your clients waiting:

* A wait<strong>er</strong> is ideal for a spinn<strong>er</strong>
* The waitr<strong>ess</strong> and the host<strong>ess</strong> are great to show progr<strong>ess</strong>

## Example

Simply place `autoWaiter` in your UI.

```r {highlight: [5]}
library(shiny)
library(waiter)

ui <- fluidPage(
	autoWaiter(),
	actionButton(
		"trigger",
		"Render"
	),
	plotOutput("plot"),
	plotOutput("plot2")
)

server <- function(input, output){
	output$plot <- renderPlot({
		input$trigger
		Sys.sleep(3)
		plot(cars)
	})

	output$plot2 <- renderPlot({
		input$trigger
		Sys.sleep(5)
		plot(runif(100))
	})
}

shinyApp(ui, server)
```

## Installation

Install the stable version from 
[CRAN](https://CRAN.R-project.org/package=waiter)
or development version from Github with `remotes` or
`devtools`.

<!-- tabs:start -->

#### **CRAN**

```r
install.packages("waiter")
```

#### **remotes**

``` r
install.packages("remotes")
remotes::install_github("JohnCoene/waiter")
```

#### **devtools**

``` r
install.packages("devtools")
devtools::install_github("JohnCoene/waiter")
```

<!-- tabs:end -->

<Note type = "tip">
You can learn how to build packages such as waiter
with the book <a href='https://javascript-for-r.com/'>JavaScript for R</a>
</Note>

## Support

If you find this useful, please consider supporting waiter on Github, and do not hesitate to report any issue you may come across. 

<!-- Place this tag in your head or just before your close body tag. -->
<script async defer src="https://buttons.github.io/buttons.js"></script>

<a class="github-button" href="https://github.com/sponsors/JohnCoene" data-icon="octicon-heart" aria-label="Sponsor @JohnCoene on GitHub">Sponsor</a> <a class="github-button" href="https://github.com/JohnCoene/waiter/issues" data-icon="octicon-issue-opened" aria-label="Issue JohnCoene/waiter on GitHub">Issue</a> <a class="github-button" href="https://github.com/JohnCoene/waiter" data-icon="octicon-star" data-show-count="true" aria-label="Star JohnCoene/waiter on GitHub">Star</a>
[![Twitter Follow](https://img.shields.io/twitter/follow/jdatap?style=social)](https://twitter.com/jdatap)

Please note that the 'waiter' project is released with a [Contributor Code of Conduct](https://github.com/JohnCoene/waiter/blob/master/CODE_OF_CONDUCT.md). By contributing to this project, you agree to abide by its terms.

## Credit

The underlying CSS and JavaScript libraries that enable waiter:

- [Spinkit CSS](https://tobiasahlin.com/spinkit/)
- [Progress.js](https://usablica.github.io/progress.js/)
- [loading.io](https://loading.io/progress/)
- [loadGo](http://franverona.com/loadgo/)
