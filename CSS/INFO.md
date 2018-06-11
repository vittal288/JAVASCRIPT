# ABOUT CSS:  CASCADED STYLE SHEET 
* [to clip the bg image to any shape ](https://bennettfeely.com/clippy/)

### What is cascade ?
Process of combining different stylesheets and resolving conflicts between two CSS rules and declarations, when more than one rules applies to certain elements 

* CSS animations can be implemented using @keyframe and the **animation** property 
* CSS animation can achieved using two methods like **animation** property and **transition** property 
    * In **animations** we can animate to full flexible way including delay,duration and functions but as in **transition** we have to predefined methods and limited to low 
* There are three category of CSS for each element 
    * **Author CSS**: CSS written by developer 
    * **User CSS**: CSS rules will update in the developer tool by the user called User CSS
    * **Browser(User Agent CSS)**: Default style from the browser(for example anchor tag has color blue and other stuffs)
* Style Guide or CSS tips [see here](../Screen-shots/CSS-style-guides.png)
* All units of values finally CSS parser will convert to pixel (%,px,rm,vh, vh ---> pixel) as 
    * [shown here 1](../Screen-shots/css-values-process.png)
    * [shown here 2](../Screen-shots/css-values-process-1.png)
    * [shown here 3](../Screen-shots/css-values-process-2.png)
    * [shown here 4](../Screen-shots/css-values-process-3.png)
* HOW CSS parser will convert relative values(%,em,rem,vh) to pixels, [see here](../Screen-shots/css-values-conversion-pixel.png)
* CSS parse does following thing while converting all units to pixel 
    * Each property has an initial value, used if nothing is declared (based on the inheritance)
    * Browser specify a root font-size for each page (i.e **16px**)
    * **percentage** and relatives values are always convert into to pixels 
    * **percentage** are measured relative to their **parent's font size**, if used to specify **font size** 
    * **percentage** are measured relative to their **parent's width** , if used to specify **length** 
    * **em** are measured to relative to their **parent's font-size**, if used to specify **font-size**
    * **em** are measured to relative to their **current's font-size**, if used to specify **lengths** 
    * **rem** are measured to relative to the **document root's font size**
    * **vh** and **vw** are simply  **percentage measurement** of device or screen **viewport's height and width** 
    * [see table here](../Screen-shots/pixel-conversion-rules.png)

* **CSS Inheritance**
    * Inheritance just passed the values of specific properties from parent to children 
    * [see here](../Screen-shots/css-inheritance.png)
    * [points to remember on inheritance](../Screen-shots/CSS-inheritnace-points.png)

* **Whats is CSS Specificity ({!important style}, {inline styles},{#ids},{classes and pseudo classes} and {elements and pseudo elements})?**
* CSS specificity is the rule that which CSS is will apply to the rendered component and it has following priorities 
    * !important styling -->P1
    * Inline Styles --> P2
    * IDs(#idName)  --> P3
    * CSS class names,pseudo class(hover,active,visited) names and attributes --> P4
    * Elements(div,a) and Pseudo Elements(::after,::before) -->P5


### HOW CSS resolves it conflicts (so called cascade)
IMPORTANTANCE --> CSS SPECIFICITY --> Order Of Code Written 
[For information see here](../Screen-shots/CSS-Resolving-Conflicts.png)

### what are pseudo elements and pseudo classes 
#### pseudo classes (hover,visited,link,last-child,checked)
* pseudo classes are just a special states of the component like or selector(hover,visited,link,last-child,checked)
* pseudo classes are used to style element on some conditions 

#### pseudo elements (after,before) css-selector :: after 
* these element to add some extra content after and before and are used to animate it and style it 
* this is the exact child of the selector which you have defined 
* *example* .class-name::after { }

### Three building block of WEB 
[Three Building Block](../Screen-shots/building-block-of-web.png)
* RWD(Responsive Web Design)
    * Fluid Layouts 
    * Media Queries 
    * Responsive Images(Huge topic)
    * Correct Units 
    * Desktop First Vs Mobile First 
* Maintainable and scalable code 
    * Clean 
    * Easy to understand 
    * Growth 
    * Reusable
    * How to organize files 
    * How to name css classes 
    * Hot to structure HTML

* Web Performance 
    * Less HTTP requests 
    * Less code 
    * Compress code 
    * Use a CSS preprocessor 
    * Less images 
    * Compress Images 


[HOW HTML AND CSS LOADS in the Browser](../Screen-shots/how-webpage-loads.png)

### RESPONSIVE WEB DESIGN 
*  Better to use rem instead of pixel while designing the RWD, because the page scales with root document font size 

### BOX MODEL 
* Content(width and height) + Padding+Border ...+ Margin together called box model [see here](../Screen-shots/box-model.png) 
* TOTAL WIDTH of Element = Left Border+Right Order +specified width of element + Left padding + right padding 
* HEIGHT = Top border + bottom border + specified height of element + top padding + bottom padding 
* If you define **box-sizing:border-box** globally  , then padding and border will not include while calculating the width of the element [for more info see here](../Screen-shots/box-model-1.png)
* See here different box-types(block,inline and inline-block) [for more info](../Screen-shots/box-types.png)
* Different flow of the element (Normal flow, float{left and right} and Positioning flow{absolute and relative}) [for more info](../Screen-shots/different-flow-of-element.png)


### SASS (CSS Preprocessor)
What all features are available in SASS
* **Variables :** we can create reusable variables for colors,width and height and font sizes 
* **Nesting :**  we can nest the CSS selectors to write less code
* **Operators :**  for mathematical operations in sass code 
* **Partials and Imports :**  this is most beauty of SASS and which helps to modularise the code and segregate into different files and collate it into one file 
* **Mixins :** We can write reusable peace of CSS code 
* **Functions :** this is similar to mixins but which returns an value from block of code 
* **Extends :** to make different selectors which inherit the declarations that all are common to all of them 
* **Control Directives :** for writing complex code which includes loops and if conditions 

*Difference between SASS and SCSS* there is no difference at all, SASS which will not use flower brackets and semi colons which works on indentations but SCSS uses flower brackets [see here](../Screen-shots/sass-scss.png)




