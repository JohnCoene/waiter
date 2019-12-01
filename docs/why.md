# Why Waiter?

This is not meant to be a self-ingratiating piece on how great a package waiter is, rather this delves into the reasons for its creation and the advantages waiter brings both the user and developers.

The first advantage that waiter brings to Shiny is fairly simple, there is currently no other package that provides these functionalities.

[My] Shiny apps can be slow. A combination of large computation, crappy servers, and poor code leads to applications that may take a long time to load. The end users of the applications tend to be used to other services such as that of Google which load in a fraction of a second, so a 2 to 3 second delay to load my application seem like an eternity to the user.

When running into this issue I face, concretely, two options: 1) buy more computing power with money I do not have or 2) spend more hours in the editor attempting to improve performances. The former would be easy to fix if had money to scale up my servers, the second tends to be much more difficult. Either I have bashed my app together in a jiffy and some refactoring considerably improves performances or I wrote good code which I is---to me---difficult to improve upon. But there actually is a third option, loading screens.

> The alternative to improving speed is to improve the perception of speed

The above may sounds pompous but it genuinely true. Not only that it is also much cheaper: show a "waiting screen." As hinted at by [Rory Sutherland in Alchemy](https://www.amazon.co.uk/Alchemy-Surprising-Power-Ideas-Sense/dp/0753556502), waiting 9 seconds knowing it's going to take 9 seconds is not as bas as waiting 4 seconds in a state of uncertainty.

Indirectly, waiter improves the performances of your application: it will feel more performant even though it is not.
