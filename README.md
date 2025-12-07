# assignment-week3

A cookie clicker game using javascript

# Reflections

For this assignment I achieved all the standard requiredments and for stretch goals some basic animations, user feeback for clicking key items, managing all upgrades through 1 function and a pop-up menu for players to choose some options as stretch goals.

I struggled with a few specific aspects of this assignment, despite managing previous assignments relatively easily. Firstly, after creating an async function to fetch API upgrade data, understanding how to create a second async function in which to include the loop for creating upgrade buttons and add event listeners to them. Secondly, getting the game data to store and retreive properly. Working through these was a real struggle, even with some guidance from Bertie and Sam, although their help was invaluable! I think the issue with both of these areas was that my understanding of these specific processes and how they can/cannot work was not as complete as it needed to be, although this has helped me understand them better. Some of the ways I needed to use local storage and API data were outside of what was covered in our workshop, so needed a bit of a deeper understanding, which took a while for me to get, as most of my online research was less halpful than it has been in previous situations, partly due to change of syntax from common JS to ES6.

When starting the assignment, I took phone-first approach to the layout, which I found made responsive design a bit easier, particularly with wireframes sketched out for different screen formats. However, I would have liked to add a third layout between phone and fullscreen desktop styles, wiht score info and the clickable element in 1 row at the top and all upgrades below, thereby avoiding overflow issues in these in-between states.
When thinking through what I wanted to do in terms of design, I made notes on the various design principles we had been learning about and, apart form some more advanced ideas, managed to implement most of them effectively (I feel the option of a more readable font would be the most impactful change from those not yet implemented). I have included those notes below the reflections section of this file.

In terms of strech goals, I decided I wanted the user to have a basic game guide and to have some minor cosmetic control, so I added a button at the bottom of the screen that creates a new div, covering the game temporarily, in which they can read a short blurb to understand the concept, choose to have coloured text or white text only, and then exit the pop-up. I also considered adding the option for a cleaner font, but did not implement this due to time constraints, although this is definitely something I would do for accessibiity purposes. Toward the end of the build, I looked into adding CSS animations, as I have dabbled in this before, but had not triggered animations through Javascript. In the end I found that animations written in the JS might be a simpler way to achieve the desired effect and tried this out, with a flashing red animation on the upgrade buttons, triggered if the player's balance is too low to buy the one clicked, or a similar animation in green if the purchase is successful. I had also added a white shadow effect around the clickable element earlier in the process that activated on click but I'm not sure this would count as animation!

# Notes on design

Concept - cookie in space! cookie is on a spacewalk, building up clicks helps keep him going. RNG can cause alien attack, which lasts a shirt time, and can be countered with power-ups.

Purpose - Clean, simplistic design with a prominent title banner (header) and with a large "start game" button in a central position.

User Flow - The user will be guided to start a game and shown the aim of the game through context (but with a "help" link at the bottom of the page with basic guidance available). Information on less obvious interactions like how to buy a power-up can be shown at the top of the relevant sections, eg. "POWER-UPS <br/> buy with accumulated clicks"

Hierarchy - The clickable item will sit in a central position and will be the largest single item on the screen. The title header will remain at the top throughout, with relevant information and secondary interactable items to the sides and at a smaller size.

Consistency - A palette of darker background colour(s) with a simple palette of brighter colours for text and effects, as well as a highly readable sans serif font throughout will keep the look consistent and appealing.

Balance - Ample space around the clickable item (some of which for animated effect), and space between other elements should allow for more intuitive interaction, as sections are distinct.

Simplicity - Grouping relevant in-game information together and doing the same with secondary interactable elements will keep the page view clear and simple.

Contrast - a selection of brighter colours against a darker background should allow clear contrast for good visibility. Colourblind checks would also be a good idea.

Imagery - Cartoonish/pixel art visuals and branding will give the page a clear identity, with associations like "fun", "video game", "carefree".

Typography - large, clear fonts throughout will help with ease of use and avoid frustratingly poor readability. Use of a dyslexia checker will help avoid unsuitable fonts

User Feedback - a click counter will show the clicks being registered, but for improved engagement and readability, visual effects (simple css animations) around the clickable item may be used to confirm use of a power-up or similar event.
