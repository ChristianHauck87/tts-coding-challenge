# This is how it went ....

After getting my task I started looking for some online tutorials and websites that were recommended by colleges. With nearly zero experience in Node.js and D3.js, I started to rebuild some of the tutorial examples in order to understand the patterns and relations.
Then I started with the project. First, I created a repository and used express to create a server. After that I installed ejs to create the table. Even though I didn’t use it for partial templates, it was a good way to use data and JavaScript in html. Therefore, I had to create a filter function to prepare the JSON data for ejs and later on for appending classes for click functions.
The bar chart was created with d3.js, which was the hardest part of the task. Due to syntax changes from d3.js v3 to v5 most of the tutorials were deprecated. Furthermore, I had to find an efficient pattern for charts. Especially the positioning of labels and axes and bars was a problem at the start. Define the width and height and directly subtracting the margins helped a lot for a cleaner code. Last but not least I decided to use both d3.js for coloring the charts and jQuery for the table.

What`s next? Ejs doesn’t works on outsourced JavaScript.     
