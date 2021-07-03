# Contribute

This is just a quick guide to help you contribute shall
you want to do so.

The packages uses [packer](https://github.com/JohnCoene/packer)
to ease the bundling of the JavaScript with webpack, so install
that package.

```r
install.packages('packer')
```

All the code the JavaScript and CSS sits in the `srcjs` directory.
Within that directory you will find the waiter and waitress 
directories in exts.

Very little code is shared between the two modules (see `dimensions.js` and `recalculate.js` files).

Make the modifications you want then run:

```r
packer::bundle()
```

This will bundle the files and place the `inst` directory.

