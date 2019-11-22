/*************************************************************/
/**************Version 2.1 :: Date 28/10/2016*****************/
/*************************************************************/
$(document).ready(function(){
    var pos = $('#navigationBar').offset();
    $(window).scroll(function(){
        if($(this).scrollTop() > pos.top){
            $("#navigationBar").addClass("affix");
            $("#goToTop").show("slow");
         } 
        else{
            $("#navigationBar").removeClass("affix");
            $("#goToTop").hide("slow");
        }
    });
    
    var page = getUrlParameter("page") ;
    if(page == "faculty"){
        setFaculties("faculty");
        setFaculties("staff");
    }else if(page == "students"){
        setStudents("phd");
        setStudents("mtech_final");
        setStudents("mtech_first");
        setStudents("ms");
    }else if(page == "alumni"){
        setAlumni("phd");
        setAlumni("mtech");
    }else if(page == "facilities"){
        setFacilities("traffic");
        setFacilities("mix");
        setFacilities("pavement");
        setFacilities("bit_binder");
        setFacilities("aggregates");
        setFacilities("bit_mix");
        setFacilities("basic");
        $("#traffic0, #mix0, #pavement0, #bit_binder0, #aggregates0, #bit_mix0, #basic0").addClass("in");
    }else if(page == "courses"){
        setCourses("ug");
        setCourses("pg");
        $("#pg0, #ug0").addClass("in");
    }else if(page == "news"){
        setNews("current");
        setNews("past");
    }else if(page == "data"){
        setDataPage("dataPage");
    }
    
    if(page == undefined){
        $("#navigator").hide();
        $("#home").addClass("active-link");
    }else if(page == "faculty" || page == "students" || page == "alumni"){
        setNavigator(page);
        $("#people").addClass("active-link");
    }else{
        setNavigator(page);
        $("#"+page).addClass("active-link");
    }
    
    $("#goToTop, .main-link, .sub-link").click(function () {
        var linkValue = $(this).attr('href');
        $('html, body').animate({
            'scrollTop' : $(linkValue).offset().top - 72
        });
        return false;
    });
});

var getUrlParameter = function getUrlParameter(sParam) {
    var sPageURL = decodeURIComponent(window.location.search.substring(1)),
        sURLVariables = sPageURL.split('&'),
        sParameterName,
        i;

    for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');
        if (sParameterName[0] === sParam) {
            return sParameterName[1] === undefined ? true : sParameterName[1];
        }
    }
};

function setFaculties(parameter){
    var data = faculties[parameter];
    var string = "";
    $.each(data, function(i){
        string += '<div class="well row">'+
                        '<div class="text-left col-sm-9">'+
                            '<h3>' + data[i].name + '</h3>' +
                            '<div>' + data[i].title + '</div>' + 
                        '</div>'+
                        '<div class="text-right col-sm-3">'+
                            '<img src="./images/' + data[i].imageSRC + '" class="img-thumbnail" alt="' + data[i].name +'" width="120" height="160">'+
                        '</div>'+
                  '</div>';
    });
    $("#" + parameter).append(string);
};

function setStudents(parameter){
    var data = students[parameter];
    var string = "";
    $.each(data, function(i){
        string += '<div class="well row">'+
                        '<div class="text-left col-sm-9">'+
                            '<h3>' + data[i].name + '</h3>' +
                            '<div class="row"><div class="col-sm-4">Thesis Topic: </div><div class="col-sm-8">' + data[i].topic + '</div></div>'+
                            '<div class="row">';
        if(parameter != "ms"){
            if(data[i].supervisor[2]==undefined){
                string +=  '<div class="col-sm-4">Thesis supervisor: </div><div class="col-sm-8"><a href="' + data[i].supervisor[1] + '">' + data[i].supervisor[0] + '</a></div>';
            }else{
                string +=   '<div class="col-sm-4">Thesis supervisors: </div>'+
                            '<div class="col-sm-8">'+
                                '<a href="' + data[i].supervisor[1] + '">' + data[i].supervisor[0] + '</a> and ' +
                                '<a href="' + data[i].supervisor[3] + '">' + data[i].supervisor[2] + '</a>'+
                            '</div>';
            }
        }
        
        string +=       '</div></div>'+
                        '<div class="text-right col-sm-3"><img src="./images/' + data[i].imageSRC + '" class="img-thumbnail" alt="' + data[i].name +'" width="120" height="160"></div>'+
                  '</div>';
    });
    $("#" + parameter).append(string);
};

function setAlumni(parameter){
    var data = alumni[parameter];
    $.each(data, function(i){
        var string = "";
        string += '<div class="well">'+
                        '<div class="text-left row">'+
                            '<h3 class="h3-people">' + data[i].name + '</h3>';
            if(data[i].thesis_link!=""){
                string +=   '<div class="col-sm-3">Thesis Topic: </div>'+
                            '<div class="col-sm-9"><a href="' + data[i].thesis_link + '">' + data[i].title + '</a></div>';    
            }else{
                string += '<div class="col-sm-3">Thesis Topic: </div><div class="col-sm-9">' +  data[i].title + '</div>';
            }

            if(data[i].supervisor[2]==''){
                if(data[i].supervisor[1]==''){
                    string +=  '<div class="col-sm-3">Thesis supervisor: </div><div class="col-sm-9">' + data[i].supervisor[0] + '</div>';    
                }else{
                    string +=  '<div class="col-sm-3">Thesis supervisors: </div>'+
                               '<div class="col-sm-9"><a href="' + data[i].supervisor[1] + '">' + data[i].supervisor[0] + '</a></div>';
                }
            }else{
                string +=  '<div class="col-sm-3">Thesis supervisors: </div>';
                    if(data[i].supervisor[1]==''){
                        string +=  '<div class="col-sm-9">'+data[i].supervisor[0] + ' and ';
                    }else{
                        string +=  '<div class="col-sm-9"><a href="' + data[i].supervisor[1] + '">' + data[i].supervisor[0] + '</a> and ';
                    }
                    if(data[i].supervisor[3]==''){
                        string +=  data[i].supervisor[2] + '</div>';
                    }else{
                        string +=  '<a href="' + data[i].supervisor[3] + '">' + data[i].supervisor[2] + '</a></div>';
                    }
            }
        
        if(parameter=="phd"){
           string += '<div class="col-sm-3">Year of completion: </div><div class="col-sm-9">'+ data[i].year +'</div>' 
        }
        
        string +=    '<div class="col-sm-3">Email-ID: </div>';
            if(data[i].email==''){
                string +=   '<div class="col-sm-9">Not Available</div>';
            }else{
                string += '<div class="col-sm-9"><a href="mailto:'+ data[i].email +'">'+ data[i].email +'</a></div>';
            }
    
        string += '</div>'+
            '</div>';
        
        if(parameter=="phd"){
            $("#" + parameter).append(string);
        }else{
            $("#" + parameter + "_"+ data[i].year).append(string);
        }
    });    
};

function setFacilities(parameter){
    var data = facilities[parameter];
    var string = "";
    $.each(data, function(i){
       string +=   '<div class="panel panel-default">'+
                        '<div class="panel-heading">'+
                            '<h4 class="panel-title">'+
                                '<a data-toggle="collapse" data-parent="#'+ parameter +'"href="#'+ parameter + i + '">'+
                                    data[i].itemName+
                                '</a>'+
                            '</h4>'+
                        '</div>'+
                        '<div id="'+ parameter + i +'" class="panel-collapse collapse">'+
                            '<div class="panel-body row">';
        if(data[i].imageSRC==''){
            string +=   '<div class="col-md-12">'+ data[i].description + '</div>';
        }else{
            if(data[i].imageSRC2==undefined){
                string +=   '<div class="col-md-8">'+ data[i].description + '</div>'+
                            '<div class="col-md-4">'+
                                '<img src="./images/'+ data[i].imageSRC +'" class="img-thumbnail" alt="'+ data[i].caption +'">'+
                                '<div class="text-center">'+ data[i].caption +'</div>'+
                            '</div>';
            }else{
                string += '<div class="col-md-12">'+ data[i].description + '</div>';
                if(data[i].imageSRC3==undefined){
                    string +=   '<div class="col-md-2"></div>'+
                                '<div class="col-md-4">'+
                                    '<img src="./images/'+ data[i].imageSRC +'" class="img-thumbnail" alt="'+ data[i].caption +'">'+
                                    '<div class="text-center">'+ data[i].caption +'</div>'+
                                '</div>'+
                                '<div class="col-md-4">'+
                                    '<img src="./images/'+ data[i].imageSRC2 +'" class="img-thumbnail" alt="'+ data[i].caption2 +'">'+
                                    '<div class="text-center">'+ data[i].caption2 +'</div>'+
                                '</div>';   
                }else{
                    string +=   '<div class="col-md-4">'+
                                    '<img src="./images/'+ data[i].imageSRC +'" class="img-thumbnail" alt="'+ data[i].caption +'">'+
                                    '<div class="text-center">'+ data[i].caption +'</div>'+
                                '</div>'+
                                '<div class="col-md-4">'+
                                    '<img src="./images/'+ data[i].imageSRC2 +'" class="img-thumbnail" alt="'+ data[i].caption2 +'">'+
                                    '<div class="text-center">'+ data[i].caption2 +'</div>'+
                                '</div>'+
                                '<div class="col-md-4">'+
                                    '<img src="./images/'+ data[i].imageSRC3 +'" class="img-thumbnail" alt="'+ data[i].caption3 +'">'+
                                    '<div class="text-center">'+ data[i].caption3 +'</div>'+
                                '</div>';
                }
            }
        } 
        string +=           '</div>'+
                        '</div>'+
                    '</div>';
    });
    $("#" + parameter).append(string);
};

function setCourses(parameter){
    var data = courses[parameter];
    var string = "";
    $.each(data, function(i){
        string +=   '<div class="panel panel-default">'+
                        '<div class="panel-heading">'+
                            '<h4 class="panel-title">'+
                                '<a data-toggle="collapse" data-parent="#'+ parameter +'Courses" href="#'+ parameter + i + '">'+
                                    data[i].courseName+
                                '</a>'+
                            '</h4>'+
                        '</div>'+
                        '<div id="'+ parameter + i +'" class="panel-collapse collapse">'+
                            '<div class="panel-body">'+
                                data[i].content +
                            '</div>'+
                        '</div>'+
                    '</div>';
    });
    $("#" + parameter + "Courses").append(string);
};

function setNews(parameter){
    var data = news[parameter];
    var string = "";
    $.each(data, function(i){
        string += '<tr>';
        if(parameter=="past"){
            string +=   '<td><a href="'+ data[i].link +'">'+ data[i].activity +'</a></td>'+
                        '<td>'+ data[i].coordinator +'</td>'+
                        '<td>'+ data[i].duration +'</td>'; 
        }else if(parameter=="current"){
            string +=   '<td>'+ data[i].date +'</td>'+
                        '<td>'+ data[i].topic +'</td>'+
                        '<td>'+ data[i].speaker +'</td>';
        }
        string += '</tr>';
    });
    $("#" + parameter).append(string);
};

function setDataPage(parameter){
    var data = data1[parameter];
    var string = "";
    $.each(data, function(i){
       string +=    '<div class="panel panel-default" id="data'+ i +'">'+
                        '<div class="panel-heading">'+ 
                            '<h3>'+ data[i].dataType +'</h3>'+
                            '<span>Developed/collected by : '+ data[i].collectedBy + '</span>'+
                            '<span style="float:right">Year : '+ data[i].year + '</span>'+
                        '</div>'+
                        '<div class="panel-body">';
        var tempFileName = data[i].dataFileName;
        var tempFileLink = data[i].dataFileLink;
        $.each(tempFileName, function(j){
            string += '<div><a href="'+ tempFileLink[j] +'">'+ tempFileName[j] +'</a></div>';
        });
        string +=       '</div>'+
                    '</div>';
    });
    $("#" + parameter).append(string);
};

function setNavigator(parameter){
    var data = navigation[parameter];
    var string = "";
    $.each(data, function(i){
        if(data[i].class=="sub-link"){
            string +=  '<a href="'+ data[i].linkAddress +'" class="list-group-item '+ data[i].class +'">'+
                            '<span class="glyphicon glyphicon-forward"></span> '+ data[i].linkName + '</a>';
        }else{
            string +=  '<a href="'+ data[i].linkAddress +'" class="list-group-item '+ data[i].class +'">'+ data[i].linkName + '</a>';
        }
    });
    $("#navigator").append(string);
};