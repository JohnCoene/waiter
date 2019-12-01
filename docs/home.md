[![Travis build status](https://travis-ci.org/JohnCoene/waiter.svg?branch=master)](https://travis-ci.org/JohnCoene/waiter)

# waiter

Loading screens for Shiny; programmatically show and hide partial or full page loading screens with spinners or loading bars.

## The Staff

The package includes:

* A waiter - splash loading screens.
* A waitress - loading bars on on elements or whole screen.
* A butler - infinite loading bar.
* A hostess - customizable loading bars.
* A steward - animate the waiter's backgrounds. 

## Installation

Stable version from CRAN:

```r
install.packages("waiter")
```

Development version from Github: 

``` r
# install.packages("remotes")
remotes::install_github("JohnCoene/waiter")
```

## Credit

The underlying CSS and JavaScript libraries that enable waiter:

- [Please Wait](https://github.com/Pathgather/please-wait)
- [Spinkit CSS](https://tobiasahlin.com/spinkit/)
- [Topbar](https://github.com/buunguyen/topbar)
- [Progress.js](https://usablica.github.io/progress.js/)
- [loading.io](https://loading.io/progress/)
