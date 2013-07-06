# GraemeMaciver.com

I've open sourced my own personal website. The website is hosted on Github Pages, visit 
the live site here: [www.graememaciver.com](http://graememaciver.com), and find out how it 
works below. 

## Fun stuff

### Setup
The project source contains a bunch of partial views created as swig templates. These 
are compiled to create one single static html page.

### Git
When i started building this I wanted to be able to deploy via Git to save any hassle with 
other methods. The original plan was to use heroku, but that's a bit overkill for one html page. 
I discovered I could host static sites on Github, so that's what I'm doing!

### Grunt
The project makes use of grunt to automate some tasks.

	grunt watch

While developing I can turn on grunt watch, which constantly watches the source directory 
for changes and rebuilds the project into the /build folder when there is an update. 
This automatically compiles the swig template, scss and JS.

I can also run ``grunt build`` to run the build tasks once.

	grunt github

This is the fun one, it uses [grunt-gh-pages](https://github.com/tschaub/grunt-gh-pages) 
to move the contents of the build directory into the gh-pages branch, then pushed. One command 
and the site is updated!

## Why is this here?


