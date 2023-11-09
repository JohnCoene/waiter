install: check
	R -s -e "devtools::install()"

check: document
	R -s -e "devtools::check()"

document: packer
	R -s -e "devtools::document()"

packer:
	R -s -e "packer::bundle_prod()"

dev:
	Rscript test.R
