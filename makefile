install: check
	Rscript -e "devtools::install()"

check: document
	Rscript -e "devtools::check()"

document: packer
	Rscript -e "devtools::document()"

packer:
	Rscript -e "packer::bundle_prod()"
