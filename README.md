<img src="" style="margin: 0;">

# Destination Date Night 

## Aim

To create a fun interactive front end website that responds accordingly to the users actions. This website is designed so users can create thier 'perfect date' by selecting specified dropdown criteria and clicking the button. The outcome will reveal their chosen perfect date.

## Purpose

The owner of Destination Date Night wants to create fun website that allows users to interact with differing functionlity. The user will select specified criteria from the two dropdown then click a button, this will in turn produce and outcome. The user can review this outcome in order to make a decision on where to go on their date.

It is hoped that the users will find the website to be a fun and interesting way to gather ideas for a date. By using the search criteria offered and the results the site returns the user can plan a date that will suit their individual needs.

## UX

## User stories

### Owner

The owner would like users of the website to - 

-  Interact with the site to find their perfect date.

-  Enjoy the site and use it as a useful tool to find ideas.

-  Find the site is fun and simple to use.


The owner would like the website design - 

- To be sultry looking with colors and a theme that portrays this.

- To have a hero image that creates mystery and excitment.

- To be one page with two easy to navigate sections. Section 1 - The Dating Game and Section 2 - Create A Date.

- To have a navigation bar that links to the sections when clicked.

- To house dropdowns with specified criteria that can be selected.

- To have a button that when clicked reveals and output.

- To use the Google Maps JS API to place a marker in locations based on the users criteria.

- To have a footer containing social media icons.

- To include company contact details.

The site will -

1. Have three main sections, the first a hero image with text enticing the user to look further, the second will be a querky narrative explaining the site, the third will house the interactivity.
2. Explain the websites outcome by instructing how it is to be used.
3. Based on criteria selected, link to the Google Maps JS API where markers will pop up based on user selection. 
4. Link to external social media sites.
5. Will have contact details - location and email address of Destination Date Night HQ.

### Potential client

As a potential user would of this site, the user would -

 - Discover what Destination Date Night is, how it works and what it reveals.
 - See a brand that is draws users in and then after interacting entices users to find out more.
 - Find its USP (unique selling point) is its uniqueness. During research I was unaware of a site like this.
 - Understand what service it offers
 - Be encouraged to find out more about the brand and company by clicking links to socia media pages.
 - Be able to contact Destination Date Night with questions (via a contact form direct from site, via a link to social media, or telephone).

Future features of Destination Date Night could include - 

- Have a larger criteria and more diverse date ideas.
- To view a gallery of past dates at various locations.
- Read testimonials and success stories from users of the site.
- To read a Destination Date Night blog.
- To be able to call the chosen date location direct from the site.
- Check the weather at the chosen locotion, with 1 day or 10 day outlook.
- Order branded Destination Date Night merchandise via an e commerce shop.

## 5 Planes

### Strategy

- Destination Date Night is 

### Scope 

### Structure

### Skeleton

#### Wireframes

Desktop and Mobile wireframes were created to demonstrate the initial idea for the site. They were created using [Balsamiq](https://balsamiq.com/wireframes/).
There are a few slight adjustments from the wireframes but that was due to styling aesthetics.

#### Mobile

The [Mobile](assets/wireframes/destination-date-night-mobile.png) wireframe shows a view were all of the features sit on top of each other in a responsive manner. For example the navbar utilises the hamburger icon add is positioned on the right, the criteria dropdowns and Google Map is central and the footer information sits underneath.

#### Desktop

The [Desktop](assets/wireframes/destination-date-night-desktop.png) wireframe gives a more spaced look, the navbar here sits across the top of the page, text, interactivity dropdowns and Google Map all sit on top as the design is the same as mobile.


### Surface 






## Features 

### Existing Features


One webpage page: The site uses just one page. 

Navbar: The navbar is responsive and links to only two of the main sections The Dating Game and Create A Date.

Dropdowns: The two dropdowns are defined with an individual title, Date Type, Date Location. The dropdown when clicked reveals specified criteria to select.

Google Maps:  xxxxxxx

Social Media Links: Social Media icons are positioned in the footer information so to allow users to visit other Destination Date Night media.



### Future Features


It is hoped in the future the website can add more date critera, for example  - adding more cities and more date types ie clubbing, walking ect.

Owner would like to add a gallery page to the site showcasing people on various dates.




## Technologies Used 

- html5
- css3
- Git
- Javascript
- [Bootstrap](https://getbootstrap.com/)
- [Github](https://github.com/)
- [Gitpod](https://gitpod.io/)
- [Balsamiq](https://balsamiq.com/)
- [Google Fonts](https://google.fonts.com/)
- [W3C Markup Validation](https://validator.w3.org/)



## Testing

Various testing was undertaken during the creation of this site including different browser usage, various devices checks. Also the W3C Markup Validator, validation check was ongoing throughout the project development.

Below are a few various issues and bugs I found during the creation.


#### Issue 1

Footer 
- I struggled to get the positioning right in footer finally managed after testing a few different scenarios. Realised I should have done the testing in a branch to show the workings.
- Font Awesome Instragam icon square would not load, all other social icons in square format worked just this one, I eventually tried the alternative non square icon and this displayed correctly, therefore kept this icon on the site.

#### Issue 2

Navbar
- The Navbar was built following Bootstrap Navbar Documentation, however I wanted the navbar hamburger on the right instead of left on mobiles. After reviewing Bootstrap again I realised I had not added 'navbar-brand' to the nav html so I added this in. I also moved the entire 'a' class to above the 'button', this changed the position of the hamburger on mobiles.
- The .navbar-brand then gave me issues I couldnt get it to line up correctly after a few tests in Google Dev tools, I figured out that the marging needed a fix. I added a 0px margin-right and margin-left to the CSS class and that fixed the issue.

#### Issue 3

IPAD
- The challenge was getting the IPAD to be responsive. In Google Dev Tools when I used the size markers and the responsive dropdown at the top, my tablet at 768 x 768 worked and was aligned. However when I used the IPAD template the size changed and was out of line.
I tried to fix this but was unable to rectify. However by the end of the project this somehow fixed itself.

#### Issue 4

- I realised my background image wasnt responding well to responsive design. Not sure why I didnt notice this earlier. I googled and realised I needed to have a Hero Image instead. So I changed the code. However I still have a padding space down the left side that I cannot fix.

#### Issue 5

If statement 
- My first attempt at writing my if statement didnt work. I initially wrote using ==. After googling the difference between == and === operators, I realised this was my error. I needed the === operator so it would return true as both Dinner and Leeds needed to be true. However it still didnt work.

#### Issue 6

Google Map API 
- Setting up the Google Map created errors in the console. After trying to correct it by re reading Google Maps JS API documentation it was founf the issue was with the HTTP Referrer in the credentials section of the Google Cloud Platform.
In order to rectify this I had to add various links to my github projects. My github live site link, the gitpod workspace link and two wildcard links. Finally the map worked.



### Browsers tested

- Chrome, using Google Developer Tools

### Devices tested

Mobile:
- Android - Samsung Galaxy A40
- Android - Samsung Galaxy A20
- Android - Samsung Galaxy S10
- IOS - Iphone - xxxxx

Laptop:
- Toshiba Satellite C850

Tablet:
- xxxxxxx



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

- Example: git clone  = https://vmblakelock.github.io/destination-date-night/

7. Press Enter. Your local clone is now created.



## Credits and References

Personal credits go out to the following 
- Spencer Barriball for the assistance in building Javascript functions, commented accordingly within the code.

Web References
- [codeahoy](https://codeahoy.com/javascript/2019/10/12/==-vs-===-in-javascript/#:~:text=The%20difference%20between%20%3D%3D%20and%20%3D%3D%3D%20is%20that%3A,the%20two%20variables%20being%20compared)
    - The Codahoy website 2019 references: *' === does not do any type conversion (coercion) and returns true only if both values and types are identical for the two variables being compared.'*

Tutor Support
- Tim from tutor support advised on a security issue I had during the creation of my Google Map JS Api. I was getting emails from Google saying my site was possible being comprimised. This was due to the API key being visable.
Tim recommended that this maybe something to try to stop the emails and sent me a link to the "keyHelper" created my Matt Rudge of Code Institute that would obfuscate my API key. I thought this was a great thing due to the added security to my site - therefore I decided to add it into my JS file on the project. [githubkeyhelper](https://github.com/Code-Institute-Org/key-helper)



#### Websites reviewed

Websites reviewed and used during the creation of this project.

- [Markdownguide](https://www.markdownguide.org/basic-syntax/)
  - Used this website to refresh knowledge on how to use Markdown.

- [Google Fonts](https://www.fonts.google.com/basic-syntax/)
  - Used for choosing inital font for css @import

- [W3Schools](https://www.w3schools.com/basic-syntax/)
  - Reviewed and used frequently throughout the design of this project. Specifically for the styling of the text over image.

- [W3C Markup Validation](https://validator.w3.org/)
  - Validation testing.
  
- [StackOverflow](https://stackoverflow.com/)
  - Various research throughout.

- [Bootstrap](https://getbootstrap.com/)
  - Documentaton on Navabar and Modals.

 


## Acknowledgements

The Slack community for assisting me on my journey through this website.

My mentor for providing excellent guidance and expertise to allow me to be confident in developing this site.

Tutor support for my questions when I need a little extra assistance.


*created for education purposes only*



