default:
	Rscript -e "packer::bundle_prod()"
	Rscript -e "devtools::document()"
	Rscript -e "devtools::check()"
	Rscript -e "devtools::install()"