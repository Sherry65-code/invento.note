window.addEventListener('load', retrive_data , false);
function addheader()
{

    head = prompt("Type header","Type here");
    document.getElementById('main').innerHTML += `<h1>`+head+`</h1>`;
}
function aligntext(side)
{
    if (side == "center"){
        document.getElementById('main').style = "text-align:center;";
    }
    else if (side == "left"){
        document.getElementById('main').style = "text-align:left;";
    }
    else if (side == "right"){
        document.getElementById('main').style = "text-align:right;";
    }
}
function insertlink()
{
    ltext = prompt("Type name of link's cover","here");
    link = prompt("Type web link","here");
    document.getElementById('main').innerHTML += `<span class="link" onclick="window.open('`+link+`')">`+ltext+`</span>`;
}
function popup_open()
{
    document.getElementById('popup').style.visibility = "visible";
    
}

function set_back_color()
{
    document.getElementById('main').style.backgroundColor =  document.getElementById('backcolor').value;
}
function popup_close()
{
    document.getElementById('popup').style.visibility = "hidden";
}


function set_text_color()
{
    document.getElementById('main').style.color = document.getElementById('textcolor').value;
}
function change_font(font_name)
{
    if (font_name == "monospace")
    {
        document.getElementById('main').style.fontFamily = "'Courier New', Courier, monospace";
    }
    else if (font_name == "seoge")
    {
        document.getElementById('main').style.fontFamily = "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif";
    }
    else if (font_name == "orignal")
    {
        document.getElementById('main').style.fontFamily = "'PT Mono', monospace";

    }
    else if (font_name == "apple")
    {
        document.getElementById('main').style.fontFamily = "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif";

    }
    else if (font_name == "roman")
    {
        document.getElementById('main').style.fontFamily = "Georgia, 'Times New Roman', Times, serif";
    }
    else if (font_name == "ms")
    {
        document.getElementById('main').style.fontFamily = "'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif";
    }
    else
    {
        console.log("Wrong Command");
    }
}
function change_style(style_name)
{
    if (style_name == "cursive")
    {
        document.getElementById('main').style.fontStyle = "italic";
    }
    else if (style_name == "bold")
    {
        document.getElementById('main').style.fontWeight = "bold";
    }
    else if (style_name == "normal")
    {
        document.getElementById('main').style = "";
    }
}
function save_text()
{
    localStorage.setItem('file_text' , document.getElementById('main').innerHTML);
}
function retrive_data()
{
    document.getElementById('main').innerHTML = localStorage.getItem('file_text');
    document.getElementById('splash').style.visibility = "hidden";
 }

function set_font_size()
{
    document.getElementById('main').style.fontSize =  document.getElementById('font_size').value+"px";
}
function print_text()
{
    var divContents = document.getElementById("main").innerHTML;
    var a = window.open('', '', 'height=500, width=500');
    a.document.write('<html>');
    a.document.write('<body >');
    a.document.write(divContents);
    a.document.write('</body></html>');
    a.document.close();
    a.print();
}