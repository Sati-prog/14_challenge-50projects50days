$('document').ready(function() {

    loadProjects();
});

function loadProjects() {
    
    $.getJSON('projects.json', function(data) {

        var out = "";
        for (var key in data) {

            out+='<a href="'+data[key].path+'">';
                out+='<div class="box" style="background-color: yellow">';
                    out+='<div class="image-container">'
                        out+='<img src="'+data[key].img+'">';
                    out+='</div>';
                    out+='<div class="info">'
                        out+='<h3 class="name">'+data[key]['name']+'</h3>';
                        out+='<p class="descr">'+data[key]['descr']+'</p>';
                    out+='</div>';
                out+='</div>';
            out+='</a>';
        }
        $('.container').html(out);
    });
}
