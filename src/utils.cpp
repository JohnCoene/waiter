#include <Rcpp.h>
using namespace Rcpp;

// This is a simple example of exporting a C++ function to R. You can
// source this function into an R session using the Rcpp::sourceCpp 
// function (or via the Source button on the editor toolbar). Learn
// more about Rcpp at:
//
//   http://www.rcpp.org/
//   http://adv-r.had.co.nz/Rcpp.html
//   http://gallery.rcpp.org/
//

// [[Rcpp::export]]
String themes_to_js(String x) {
  String y;
  if(x == "line"){
    y = "blue";
  } else if(x == "overlay"){
    y = "blueOverlay";
  } else if(x == "overlay-radius"){
    y = "blueOverlayRadius";
  } else if(x == "overlay-opacity"){
    y = "blueOverlayRadiusHalfOpacity";
  } else if(x == "overlay-percent"){
    y = "blueOverlayRadiusWithPercentBar";
  }
  return y;
}


// You can include R code blocks in C++ files processed with sourceCpp
// (useful for testing and development). The R code will be automatically 
// run after the compilation.
//

/*** R
themes_to_js("line")
*/
