<img src="" style="margin: 0;">

# Destination Date Night 

## Aim

To create an interactive front end website that responds accordingly to the users actions. This website is designed so users can select dropdown criteria to create their perfect date.

## Purpose

The owner of Destination Date Night wants to create website that allows users to select criteria from a dropdown that presents an outcome for them to review in order to make decisions on where to go on their date.

It is hoped that the users will find ideas using the search criteria offered and the results the site returns.

## UX

## User stories

### Owner

The owner would like users of the website to - 

-  Interact with the site to find their perfect date location.


The owner would like the website design - 

- To be sultry looking with colors to portay this.

- To be one page with two easy to navigate sections. Section 1 - The Dating Game and Section 2 - Create A Date.

- To have a Navigation Bar that links to the sections when clicked.

- To house criteria dropdowns that can be selected.

- To use Google Maps API to place a marker in locations based on the users criteria.

- To have a footer containing social media icons.

- To include contact details.

The site will -

1. Have three main sections, the first a hero image with text enticing the user to look further, the second will be a querky narrative explaining the site, the third will house the interactivity.
2. Explain the websites outcome by instructing how it is to be used.
3. Based on criteria selected link to Google Maps where markers will pop up based on user selection. 
4. Link to external social media sites.
5. Will have a contact details - location and email address of Destination Date Night HQ.

## 5 Planes

### Strategy

### Scope 

### Structure

### Skeleton

#### Wireframes

Desktop and Mobile wireframes were created to demonstrate the initial idea for the site. They were created using [Balsamiq](https://balsamiq.com/wireframes/).

#### Mobile

The [Mobile](assets/wireframes/destination-date-night-mobile.png) wireframe shows a view were all of the features sit on top of each other in a responsive manner. For example the navbar utilises the hamburger icon add is positioned on the right, the criteria dropdowns and Google Map is central and the footer information sits underneath.

#### Desktop

The [Desktop](assets/wireframes/destination-date-night-desktop.png) wireframe gives a more spaced look, the navbar here sits across the top of the page, text, interactivity dropdowns and Google Map all sit on top as the design is the sme as mobile.

*Wireframes note: The wireframes use the owners company name as vixwebmedia.co.uk whereas the actual site uses vixwebdesigns.co.uk an error on the designers side.*


### Surface 

## Features 

### Existing Features

One webpage page: The site uses just one page. 

Navbar: The navbar is responsive and links to only two of the main sections The Dating Game and Create A Date.

Dropdowns: The two dropdowns are defined with an individual title, Date Type, Date Location. The dropdown when clicked reveals specified criteria to select.

Google Maps:  xxxxxxx

Social Media Links: Social Media icons are positioned in the footer information so to allow users to visit other Destination Date Night media.


### Future Features

It is hoped in the future the website can add more Date Criteria such as additonal scenarios (ie Date Mood - romantic, thrilling, no pressure)


## Technologies Used 

- html5
- css3
- Git
- [Bootstrap](https://getbootstrap.com/)
- [Github](https://github.com/)
- [Gitpod](https://gitpod.io/)
- [Balsamiq](https://balsamiq.com/)
- [Google Fonts](https://google.fonts.com/)
- [W3C Markup Validation](https://validator.w3.org/)


## Testing

Various testing was undertaken during the creation of this site including using the W3C Markup Validator. This validation check was ongoing throughout the project development.

#### Issue 1

Footer 
- I struggled to get the positioning right in footer finally managed after testing a few different scenarios. Realised I should have done the testing in a branch to show the workings.
- Font Awesome Instragam icon square would not load, all other social icons in square format worked just this one, I eventually tried the alternative non square icon and this displayed correctly, therefore kept this icon on the site.

#### Issue 2

Navbar
- The Navbar was built following Bootstrap Navbar Documentation, however I wanted the navbar hamburger on the right instead of left on mobiles. After reviewing Bootstrap again I realised I had not added 'navbar-brand' to the nav html so I added this in. I also moved the entire 'a class' to above the 'button', this changed the position of the hamburger on mobiles.

#### Issue 3

Background image
- After adding a container to my background image, the image moved and I ended up with a offset margin to the left .........

#### Issue 4

IPAD
- During the creation of this project getting it to be responsive on an IPAD proved challenging. ..............

#### Issue 5

I realised by background image wasnt responding well to responsive design. Not sure why I didnt notice this earlier. I googled and realised I needed to have a Hero Image instead. .......

### Browsers tested

- Chrome, using Google Developer Tools


## Deployment

In order to deploy the project to [GitHub](https://github.com/) Pages from its GitHub repository, follow the below steps:

1. On menu bar, select the 'Settings' tab.
2. Here, Scroll down to the GitHub Pages section.
3. In 'Source' click the drop-down menu labelled None, click and select Master Branch.
4. Once selected, Master Branch page will automatically refresh, the website will now be deployed.
5. Head back to the GitHub Pages section here you can retrieve the link of the deployed website.

If you want to run this project locally, we must clone the project for Github:

1. Under the repository name, click the green "Clone or download" button on the right.
2. A dropdown 'Clone with HTTPs' section appears, here copy the clone URL for the repository.
3. In your local IDE open Git Bash.
4. Change the current working directory to the location where you want the cloned directory to be made.
6. Type 'git clone' and paste the URL you copied.

- Example: git clone  = ENTER YOUR DEPLOYED LINK HERE

7. Press Enter. Your local clone is now created.


## Credits

#### Websites reviewed

Websites reviewed and used during the creation of this project.

- [Markdownguide](https://www.markdownguide.org/basic-syntax/)
  - Used this website to refresh knowledge on how to use Markdown

- [Google Fonts](https://www.fonts.google.com/basic-syntax/)
  - Used for choosing inital font for css @import

- [W3Schools](https://www.w3schools.com/basic-syntax/)
  - Reviewed and used frequently throughout the design of this project. Specifically for the styling of the text over image.

- [W3C Markup Validation](https://validator.w3.org/)
  - Validation testing

 

## Acknowledgements

The Slack community for assisting me on my journey through this website.

My mentor for providing excellent guidance and expertise to allow me to be confident i creating this site.

*created for education purposes only*



