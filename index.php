<!--**********************************************************
**************Version 2.1 :: Date 28/10/2016******************
*************************************************************-->
<?php 
    $page="";
    if(isset($_GET["page"])){
        $page = $_GET["page"];
    }
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <title>Transportation Engineering Laboratory</title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta content="Transportation Engineering Laboratory: IIT Kanpur" name="description">
	<meta content="Transportation Engineering Laboratory, IIT Kanpur, transEL, Civil IITK, IITK" name="keywords">
	<meta name="theme-color" content="#131317">
    <link rel="icon" type="img/jpg" href="./images/iitk-blue.jpg">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
    <link rel="stylesheet" href="transEL.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
    <script src="./js/navigator.json"></script>
    <script src="./js/main.js"></script>
</head>
<body>
    <div class="container-fluid header" id="top">
        <div class="container">
            <div class="row">
                <div class="col-xs-3 col-sm-2 text-right">
                    <img src="images/iitk-black.png" alt="IIT Kanpur" style="width:120px;height:120px">
                </div>
                <div class="col-xs-9 col-sm-10">
                    <div><h1>Transportation Engineering Laboratory</h1></div>
                    <div><h2>IIT Kanpur</h2></div>
                </div>
            </div>
        </div>
    </div>
    <nav class="navbar navbar-inverse" id="navigationBar">
        <div class="container">
            <div class="navbar-header" style="padding-left: 15px;">
                <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </button>
                <a class="navbar-brand" href="index.php" id="home"><span class="glyphicon glyphicon-home"></span> Home</a>
            </div>
            <div class="collapse navbar-collapse" id="myNavbar">
                <ul class="nav navbar-nav">
                    <li class="dropdown">
                        <a class="dropdown-toggle" data-toggle="dropdown" href="index.php?page=people" id="people">People <span class="caret"></span></a>
                        <ul class="dropdown-menu">
                            <li><a href="index.php?page=faculty">Faculty & Staff</a></li>
                            <li><a href="index.php?page=students">Students</a></li>
                            <li><a href="index.php?page=alumni">Alumni</a></li>
                        </ul>
                    </li>
                    <li><a href="index.php?page=facilities" id="facilities">Facilities</a></li>
                    <li><a href="index.php?page=activity" id="activity">Consultancy Activities</a></li>
                    <li><a href="index.php?page=courses" id="courses">Courses</a></li>
                    <li><a href="index.php?page=data" id="data">Data</a></li>
                    <li><a href="index.php?page=news" id="news">News</a></li>
                </ul>
                <ul class="nav navbar-nav navbar-right">
                    <li><a href="index.php?page=contact" id="contact"><span class="glyphicon glyphicon-envelope"></span> Contact Us</a></li>
                </ul>
            </div>
        </div>
    </nav>
    <div class="container-fluid">
        <div class="container">
            <div class="panel panel-default col-md-9">
                <div class="panel-body">
                    <?php 
                        switch ($page) {
                            case "faculty":
                                include "./assets/faculty.php";
                                break;
                            case "students":
                                include "./assets/students.php";
                                break;
                            case "alumni":
                                include "./assets/alumni.php";
                                break;
                            case "facilities":
                                include "./assets/facilities.php";
                                break;
                            case "activity":
                                include "./assets/activity.php";
                                break;
                            case "courses":
                                include "./assets/courses.php";
                                break;
                            case "data":
                                include "./assets/data.php";
                                break;
                            case "news":
                                include "./assets/news.php";
                                break;
                            case "contact":
                                include "./assets/contact.php";
                                break;
                            default:
                                include "./assets/home.php";
                        }
                    ?>
                </div>
            </div>
            <div class="col-md-3" id="sideNavbar">
                <div class="list-group" id="navigator">
                    <a href="#" class="list-group-item active">Navigator</a>
                </div>
                <div class="list-group" id="quick-links">
                    <a href="#" class="list-group-item active">Quick Links</a>
                    <a href="http://www.iitk.ac.in/civil/" class="list-group-item">Civil Engineering Department</a>
                    <a href="http://www.iitk.ac.in/" class="list-group-item">IIT Kanpur</a>
                </div>
                <div id="goToTop" href="#top">
                    <div class="text-center"><span class="glyphicon glyphicon-plane"></span></div>
                    <div class="text-center">TOP</div>
                </div>
            </div>
        </div>
    </div>
    <div class="container-fluid footer">
        <div class="container text-center">
            <div>All rights reserved to Transportation Engineering Laboratory, IIT Kanpur</div>
            <div class="update">Last updated: Oct 28<sup>th</sup>, 2016</div>
        </div>
    </div>
</body>
</html>

