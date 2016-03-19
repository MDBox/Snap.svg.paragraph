/*
The MIT License (MIT)

Copyright (c) 2016 Michael Bawiec

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
*/
(function (Snap) {
    Snap.plugin(function (Snap, Element, Paper, glob, Fragment) {

      /*
        @param text - Text for paragraph
        @param x - x position
        @param y - y position
        @param width - width for the paragraph (optional)
        @param height - height for the paragraph (optional)
      */
      Paper.prototype.paragraph = function(text, x, y, width, height){
        var p = document.createElement("p");
        p.innerText = text;
        if(width){ p.style.width = width+"px"; }
        if(height){ p.style.height = width+"px"; }
        p.style.visibility = "hidden";

        if(!height){
          document.body.appendChild(p); //Temporary render hidden to find height
          height = p.clientHeight;
          document.body.removeChild(p);
        }
        p.style.visibility = "visible";

        var foreignObject = '<svg><foreignObject x="'+x+'" y="'+y+'" width="'+width+'" height="'+height+'">'+
                            '<body>' + p.outerHTML +
                            '</body></foreignObject></svg>';

        return Snap.parse(foreignObject);
      };
    });
})(Snap);
