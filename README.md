# The React Router Cat API app
19 December 2022
The deployed web app is on [link](https://charming-cheesecake-90a078.netlify.app/catbreeds/amau)

## OBJECTIVE
The web-app perfoms a React Router app that uses [Cat API](https://thecatapi.com/). The app uses Cat API data to create **Router NavLinks** for navigation on the Cat Breeds. React **Bootstrap** is used for styling. **Axios** is used as HTTP client.

## BACKGROUND
The React Router Cat API app has three pages, the naviagation between them are guaranteed by The React Router libtary. 
On the Home page there are the Cat API data full-screen random images. On the page Cat Breeds there are the Cat Api breeds titles data. On the Breed Page there are the Cat API breed information data: the breed name, the breed cat random image, the basic information.


## TECHNICAL DESIGN
The app uses:

- React;
- React Router;
- React Bootstrap;
- Cat API;
- Axios;

The app spreadly uses **{useState}** and **{useEffect}** for geting the information from the API. React Router's navigation helps to create the easy navigation berween the Cat Breed list page and the page with the Breed information. 
To get the information for the certain breed from the Api data **{useParams}** is used. 
For the visualisation of the breed specification the Bootstrap **<ProgressBar />** is used (the data information is multiplied on 10).
The app uses the Bootstarp grid **ClassNames**. Also the Bootstrap **Carousel** is used.

## CAVEATS
All images from the Cat API data have diffrent image formats and diffrent image sizes. That's why the images on the Home page in carousel can have diffrent height size, there is no image unifacation. As all cat images are nice and their uniqueness should be saved.
