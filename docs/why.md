# Why Waiter?

This is not meant to be a self-ingratiating piece (though judging by the length of it it's certainly pompous) on how great a package is, rather this delves into the reasons for its creation and the advantages waiter brings to both app users and shiny developers.

[My] Shiny apps can be slow. A combination of large computations, crappy servers, and poor code leads to applications that may take a long time to load. The end users of my apps tend to be used to the loading times of services such as Google's, so a 2 to 3 second delay seems like an eternity to them.

When running into this issue I face concretely two options: 1) buy more computing power with money I do not have or 2) spend more hours in the editor attempting to improve performances. The latter tends to be difficult. Either I have bashed my app together in a jiffy and some refactoring considerably improves performances or I wrote good code which is---to me---difficult to improve upon. Actually there is a third option, loading screens.

> The alternative to improving speed is to improve the perception of speed

As hinted at by [Rory Sutherland in Alchemy](https://www.amazon.co.uk/Alchemy-Surprising-Power-Ideas-Sense/dp/0753556502), waiting 9 seconds knowing it's going to take 9 seconds is not as bad as waiting 4 seconds in a state of complete uncertainty: a waiting screen keeps your users in the know.