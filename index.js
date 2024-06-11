window.onload = function(){
    // set colours
    var base_color = "#1f3968"
    var white = "#ffffff"
    var bg_color_elements = document.getElementsByClassName("base-color");
    for(var ele=0; ele< bg_color_elements.length; ele++){
        bg_color_elements[ele].style.background = base_color;
    }
    var title_elements = document.getElementsByClassName("title");
    for(var ele=0; ele< title_elements.length; ele++){
        title_elements[ele].style.color = base_color;
    }
    var colour_elements = document.getElementsByClassName("base-color-text");
    for(var ele=0; ele< colour_elements.length; ele++){
        colour_elements[ele].style.color = base_color;
    }

    document.getElementById("left-bar").style.background = base_color;

    document.getElementById("header").style.color = white;
    var white_elements = document.getElementsByClassName("white");
    for(var ele=0; ele< white_elements.length; ele++){
        white_elements[ele].style.color = white;
    }

    // set texts
    var my_name = "Sudha M S";
    var my_name_elements = document.getElementsByClassName("my-name");
    for(var ele=0; ele< my_name_elements.length; ele++){
        my_name_elements[ele].innerHTML = my_name;
        my_name_elements[ele].style.color = white;
    }
    var job_title = "Quality Assurance and Test Automation Engineer";
    var job_title_elements = document.getElementsByClassName("job-title");
    for(var ele=0; ele< job_title_elements.length; ele++){
        job_title_elements[ele].innerHTML = job_title;
        job_title_elements[ele].style.color = white;
    }
};

