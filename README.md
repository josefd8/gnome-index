# gnome-index
A full featured gnome search engine

Very basic, single-page app for viewing and filtering gnomes.

The gnome list is pulled once and used from memory, so it should be fast enough when filtering and getting gnome's info.
The only "library" is the $http embeded library for making the initial GET request. For this simple app, I wanted to all be
visible and available in a single page (why more would be needed?). so no need for routing library
