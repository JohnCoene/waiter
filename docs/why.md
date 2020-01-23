# Why Waiter?

This is not meant to be a self-ingratiating piece (though judging by the length of it it's certainly pompous) on how great a package is, rather this delves into the reasons for its creation and the advantages waiter brings to both app users and shiny developers.

[My] Shiny apps can be slow. A combination of large computations, crappy servers, and poor code leads to applications that may some time to load. The end users of my apps are accustomed to the loading times of services such as Google's, so a 2 to 3 second waiting time seems like an eternity to them.

When running into this issue I face concretely two options: 1) buy more computing power with money I do not have (which rarely solves the issue anyways) or 2) spend more hours in the editor attempting to improve performances. This is difficult regardless of your proficiency with R or Shiny; the code that runs your app is the code that you can write and improving upon it is difficult. 

I actually now see a third option; loading screens.

As observed by [Rory Sutherland in Alchemy](https://www.amazon.co.uk/Alchemy-Surprising-Power-Ideas-Sense/dp/0753556502), the single thing that improved passenger satisfaction on the London Underground is not faster more frequent trains but rather dot display matrix on the platforms. This is because we'd quite happily wait for a train 9 minutes knowing it's coming in 9 minutes whereas we dread waiting 4 minutes in a state of complete uncertainty. 

Waiter can be the dot display matrix of your platform. It will not make the app load faster but make it feel faster as it induces patience in your users and make the app feel slicker.

Waiting screens or improving the code is of course a false dichotomy; by all means, do both.
