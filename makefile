install: check
	R -s -e "devtools::install()"

check: document
	R -s -e "devtools::check()"

document: packer
	R -s -e "devtools::document()"

packer:
	R -s -e "packer::bundle_prod()"

packer_dev:
	R -s -e "packer::bundle_dev()"

dev: packer_dev
	Rscript test.R
