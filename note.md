<!DOCTYPE html>
<html lang="en">
You should always include the lang attribute inside the <html> tag, to declare the language of the Web page. This is meant to assist search engines and browsers.
The following example specifies English as the language:
<head>
<title>Page Title</title> <!-- Write your comments here -->
</head>
<body>
<body style="background-color:powderblue;">
The CSS background-color property defines the background color for an HTML element.
<h1 style="background-color:Tomato;">Tomato</h1>
<h1 style="background-color:Orange;">Orange</h1>
<h1 style="background-color:DodgerBlue;">DodgerBlue</h1>
<h1 style="background-color:MediumSeaGreen;">MediumSeaGreen</h1>
<h1 style="background-color:Gray;">Gray</h1>
<h1 style="background-color:SlateBlue;">SlateBlue</h1>
<h1 style="background-color:Violet;">Violet</h1>
<h1 style="background-color:LightGray;">LightGray</h1>
<h1 style="text-align:center;">Centered Heading</h1>
<p style="text-align:center;">Centered paragraph.</p>

<h1>This is heading 1</h1>
<p>This is some text.</p>
<hr>
<a href="https://www.w3schools.com" target="_blank">This is a link</a> 
target is to open the link in another page.

<img src="w3schools.jpg" alt="W3Schools.com" width="104" height="142">
There are two ways to specify the URL in the src attribute:
1. Absolute URL - Links to an external image that is hosted on another website. Example: src="https://www.w3schools.com/images/img_girl.jpg".
2. Relative URL - Links to an image that is hosted within the website. Here, the URL does not include the domain name. If the URL begins without a slash, it will be relative to the current page. Example: src="img_girl.jpg". If the URL begins with a slash, it will be relative to the domain. Example: src="/images/img_girl.jpg".
The required alt attribute for the <img> tag specifies an alternate text for an image, if the image for some reason cannot be displayed. This can be due to a slow connection, or an error in the src attribute, or if the user uses a screen reader.

<h2>This is heading 2</h2>
<p>This is some other text.</p>
<p style="color:red;">This is a red paragraph.</p>
<hr>

<h2>This is heading 2</h2>
<p>This is some other text.</p>
<p title="I'm a tooltip">This is a paragraph.</p>

</body>
</html>

The <hr> element is used to separate content (or define a change) in an HTML page:
Use <br> if you want a line break (a new line) without starting a new paragraph:
The text inside a <pre> element is displayed in a fixed-width font (usually Courier), and it preserves both spaces and line breaks:
<h1>This is heading 1</h1>
<h2>This is heading 2</h2>
<h3>This is heading 3</h3>
<h1> to <h6>

<strong>This text is important!</strong>
<b> - Bold text
<strong> - Important text
<i> - Italic text
<em> - Emphasized text
<mark> - Marked text
<small> - Smaller text
<del> - Deleted text
<ins> - Inserted text
<sub> - Subscript text
<sup> - Superscript text

Button as a Link
To use an HTML button as a link, you have to add some JavaScript code.
JavaScript allows you to specify what happens at certain events, such as a click of a button:
<button onclick="document.location='default.asp'">HTML Tutorial</button>

Create a Bookmark in HTML
Bookmarks can be useful if a web page is very long.
To create a bookmark - first create the bookmark, then add a link to it.
When the link is clicked, the page will scroll down or up to the location with the bookmark.
Example
First, use the id attribute to create a bookmark:
<h2 id="C4">Chapter 4</h2>
Then, add a link to the bookmark ("Jump to Chapter 4"), from within the same page:
<a href="#C4">Jump to Chapter 4</a>
You can also add a link to a bookmark on another page:
<a href="html_demo.html#C4">Jump to Chapter 4</a>

HTML Tables
<table>
  <tr>
    <th>Person 1</th>
    <th>Person 2</th>
    <th>Person 3</th>
  </tr>
  <tr>
    <td>Emil</td>
    <td>Tobias</td>
    <td>Linus</td>
  </tr>
  <tr>
    <td>16</td>
    <td>14</td>
    <td>10</td>
  </tr>
</table>
HTML Table Tags
Tag	Description
<table>	Defines a table
<th>	Defines a header cell in a table
<tr>	Defines a row in a table
<td>	Defines a cell in a table
<caption>	Defines a table caption
<colgroup>	Specifies a group of one or more columns in a table for formatting
<col>	Specifies column properties for each column within a <colgroup> element
<thead>	Groups the header content in a table
<tbody>	Groups the body content in a table
<tfoot>	Groups the footer content in a table

To make a cell span over multiple columns, use the colspan attribute:
<table>
  <tr>
    <th colspan="2">Name</th>
    <th>Age</th>
  </tr>
  <tr>
    <td>Jill</td>
    <td>Smith</td>
    <td>43</td>
  </tr>
  <tr>
    <td>Eve</td>
    <td>Jackson</td>
    <td>57</td>
  </tr>
</table>

To make a cell span over multiple rows, use the rowspan attribute:
<table>
  <tr>
    <th>Name</th>
    <td>Jill</td>
  </tr>
  <tr>
    <th rowspan="2">Phone</th>
    <td>555-1234</td>
  </tr>
  <tr>
    <td>555-8745</td>
</tr>
</table>

Unordered HTML List
<ul>
  <li>Coffee</li>
  <li>Tea</li>
  <li>Milk</li>
</ul>

Ordered HTML List
<ol>
  <li>Coffee</li>
  <li>Tea</li>
  <li>Milk</li>
</ol>

HTML Description Lists
<dl>
  <dt>Coffee</dt>
  <dd>- black hot drink</dd>
  <dt>Milk</dt>
  <dd>- white cold drink</dd>
</dl>

The HTML <script> Tag
The HTML <script> tag is used to define a client-side script (JavaScript).
The <script> element either contains script statements, or it points to an external script file through the src attribute.
Common uses for JavaScript are image manipulation, form validation, and dynamic changes of content.
To select an HTML element, JavaScript most often uses the document.getElementById() method.
This JavaScript example writes "Hello JavaScript!" into an HTML element with id="demo":
<script>
document.getElementById("demo").innerHTML = "Hello JavaScript!";
</script>

HTML File Paths
Path	Description
<img src="picture.jpg">	The "picture.jpg" file is located in the same folder as the current page
<img src="images/picture.jpg">	The "picture.jpg" file is located in the images folder in the current folder
<img src="/images/picture.jpg">	The "picture.jpg" file is located in the images folder at the root of the current web
<img src="../picture.jpg">	The "picture.jpg" file is located in the folder one level up from the current folder
Best Practice
It is best practice to use relative file paths (if possible).
When using relative file paths, your web pages will not be bound to your current base URL. All links will work on your own computer (localhost) as well as on your current public domain and your future public domains.

HTML Images
<img src="pic_trulli.jpg" alt="Italian Trulli">
<img src="img_girl.jpg" alt="Girl in a jacket" style="width:500px;height:600px;">
<img src="img_girl.jpg" alt="Girl in a jacket" width="500" height="600">
<img src="/images/html5.gif" alt="HTML5 Icon" style="width:128px;height:128px;">
<img src="https://www.w3schools.com/images/w3schools_green.jpg" alt="W3Schools.com">
<img src="programming.gif" alt="Computer Man" style="width:48px;height:48px;">
<a href="default.asp">
  <img src="smiley.gif" alt="HTML tutorial" style="width:42px;height:42px;">
</a>
<p><img src="smiley.gif" alt="Smiley face" style="float:right;width:42px;height:42px;">
The image will float to the right of the text.</p>

<p><img src="smiley.gif" alt="Smiley face" style="float:left;width:42px;height:42px;">
The image will float to the left of the text.</p>
<figure>
  <img src="../src/image/图1.jpg" alt="图1" style="width:400px;height:600px;">
  <figcaption>图1</figcaption>
</figure>

