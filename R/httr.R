#' Waitress with httr
#' 
#' Use a waitress progress bar with httr requests.
#' Simply use `httr_progress` where you would use
#' [httr::progress].
#' 
#' @param waitress The waitress object.
#' @param type Type of progress to display: either number of 
#' bytes uploaded or downloaded. Passed to [httr::progress].
#' @param pre,post Pre and callback functions to run before
#' the progress starts or once it is done.
#' 
#' @examples 
#' \dontrun{
#' cap_speed <- httr::config(max_recv_speed_large = 10000)
#' 
#' httr::GET(
#'   "http://httpbin.org/bytes/102400", 
#'   httr_progress(w), 
#'   cap_speed
#' )
#' }
#' 
#' @export 
httr_progress <- function(
	waitress, 
	type = c("down", "up"), 
	pre = NULL, 
	post = NULL
){
	type <- match.arg(type)

	if(missing(waitress))
		stop("Missing `waitress` object", call. = FALSE)
	
	httr_request <- utils::getFromNamespace("request", "httr")

  httr_request(
		options = list(
    	noprogress = FALSE,
    	progressfunction = progress_bar(waitress, type, pre, post)
  	)
	)
}

progress_bar <- function(w, type, pre = NULL, post = NULL) {

  show_progress <- function(down, up) {
    if (type == "down") {
      total <- down[[1]]
      now <- down[[2]]
    } else {
      total <- up[[1]]
      now <- up[[2]]
    }	

    if (total == 0 && now == 0) {
			if(!is.null(pre))
				pre()
      # Reset progress bar when seeing first byte
			w$start()
      w$set(0)
    }  else {
			w$max <- total

			# increment
			w$set(now)
			# close
      if(now == total) {
				w$close()
				
				if(!is.null(post))	
					post()
			}
    }

    TRUE
  }

  show_progress
}
