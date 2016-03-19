# Snap.svg.paragraph
Plugin for Snap.svg to allow paragraph foreign elements.  

##Install 
````
  bower install --save snap.svg.paragraph
````

````
<script src="snap.svg.js"></script>
<script src="snap.svg.paragraph.js"></script>
````

##Usage

````
  var paper = Snap();
  var root = snap.group();
  var p = paper.paragraph('You can \n or use p element word wrap.', 5, 5, 200);
  root.append(p);
````



  
