---
layout: post
title: 'Networks of Migration in the United States (Part 1)'
jsarr:
- graphs/migration_network.js
---

After working on my [City Clustering project](https://ashleyajohn.github.io/2018/06/30/city-clustering.html) project, I realize that I've been ignoring a total open source, rich, FREE data set since my first data experience back in sophomore year. The United States Census has tables on tables of data, for almost everything you can imagine related to population, geography, cities, planning, anything! The tables, in general, are also nicely cleaned which saves a ton of time. The only drawback is that there is a bit of a lag in reporting data, so the most recent tables are for 2011-2015.

At the same time, I recently learned about the fantastic [vis.js](http://visjs.org//) library which makes lovely, simple visualizations using javascript. The syntax is straightforward and intuitive while also leaving plenty of room for personalization. 

In particular, I wanted to try out the library's network graphs. To do so, I combined [migration data from the US Census](https://www.census.gov/topics/population/migration/guidance/metro-to-metro-migration-flows.html) with the capabilities of vis.js to have a little fun seeing how the population has shifted between major metropolitan areas in the United States. 

The inspiration for this project came from [a recent New York Times article](https://www.nytimes.com/2018/07/20/nyregion/philadelphia-new-york-migration-immigrants.html) praising my beloved Philadelphia as a place where New Yorkers are more frequently moving to, especially immigrants. The article piqued my interest in how other American cities experience migration. 


To start, I looked at some polar opposite cities. The trend of migration to southwestern cities is well documented, but I wanted to see exactly where these folks were coming from. Looking at Phoenix specifically, I looked at the cities with the top 10 highest net migration into Phoenix. The net migration means that I was interested in the cities where the number in to Phoenix from City X minus the number out of Phoenix into City X is the highest--not necessarily _just_ the flow into Phoenix.  
<br>
<div id="mynetworkPhx" style="height: 400px; width:400px"></div>
<br>
What is interesting about migration into Phoenix is that it is made up of a diverse cast. It is not only the neighboring states pouring into Phoenix, but also some cities from farther away like New York, Detroit, and Minneapolis. 

On the contrary, I wanted to see how one of the coldest cities faired in comparison to the desert. To do so, I looked at the migration flow out of Anchorage, Alaska. Again, I was interested in the net migration, but this time I wanted to look at the cities with the largest net negative migration, or the cities where the number of people leaving Anchorage to go to City X is largest compared to the number of people coming in from City X. 
<br>
<div id="mynetworkAnc" style="height: 400px; width:400px"></div>
<br>
In similar fashion, the destinations from Alaskans leaving are diverse. It almost looks people are making a concerted effort to escape the cold as three Floridian cities make the list of top 10. 

The weights on each of the arrows were determined by scaling the data using [scikitlearn's scale function](http://scikit-learn.org/stable/modules/generated/sklearn.preprocessing.scale.html#sklearn.preprocessing.scale). The data was then centered on a zero mean, so all these flows in and out of Phoenix and Alaska had a scaled value with an absolute value greater than zero. 

Next, I included some more back and forth data to get a feel for how people are moving between cities. Many of the cities I explored had a lot of true out of towners, but Texas seemed to have a fair amount of within the state movement. To see if that was true, I looked at the top four most populated metro areas in the state to see what the migration was like between the four. 

<br>
<div id="mynetworkTx" style="height: 600px; width:600px"></div>
<br>

Each of the four nodes is colored separately and the edges follow in suit of the color of its originating node. So, the blue edges of Houston show its flow into the other three metro areas. The connection between Houston and Dallas is strong and both are much larger than the flow between any of the other areas. 

Somewhat similarly, cities in the East coast follow a similar pattern. Philadelphia and New York have the strongest back and forth movement and the other cities have relatively little movement between them. 
<br>
<div id="mynetworkEast" style="height: 600px; width:600px"></div>
<br>

So, what do the patterns of movement look like across the country? Which cities are attracting the most people and the fewest? I explored that in [Part 2 of this analysis](https://ashleyajohn.github.io/2018/07/28/networks-part-2.html).
