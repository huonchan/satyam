



function make_header()
{
    const myMap = new Map();
        myMap.set("Root", "./index.htm");
        myMap.set("Dialy", 30);
        myMap.set("楽天", "");
        
        //var header_html = '<dir>';
        var header_html = '';
        myMap.forEach((value, key) => {
            console.log(`key: ${key}, value: ${value}`);

            header_html = header_html + `<dir class="menu item"><a href="${value}"> ${key}</a> </dir>`;
        });
        //header_html += '</dir>';
        document.getElementById('header').innerHTML = header_html;

}

make_header();