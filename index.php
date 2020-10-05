
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Text Animator</title>
    <style>
        body{
            background-image: url("video.gif");
            background-repeat: no-repeat;
            background-attachment: fixed;
            background-size: cover;
        }
        a{
            text-decoration: none;
        }
        #myVideo {
            position: fixed;
            right: 0;
            bottom: 0;
            min-width: 100%; 
            min-height: 100%;
        }
        .content {
            position: fixed;
            bottom: 0;
            background: rgba(255, 255, 255, 0.2);
            font-family : sans-serif;
            color: #000;
            width: 100%;
            padding: 20px;
        }

        /* Style the button used to pause/play the video */
        #myBtn {
            width: 200px;
            font-size: 18px;
            padding: 10px;
            border: none;
            background: #000;
            color: #fff;
            cursor: pointer;
            border-radius : 25px;
        }

        #myBtn:hover {
            background: #ddd;
            color: black;
          
        }
        
        .upload{
            border : 2px solid black;
            margin : 10px 0px;
            padding : 10px 0px;
        }

        .extra,input{
            border:0px;
            font-size : 20px;
            padding : 10px;
            border-radius : 30px;
        }

        #submit:hover{
            background : #000;
            color : #ffffff;
        }
        .glow {
  font-size: 80px;
  color: #fff;
  text-align: center;
  -webkit-animation: glow 1s ease-in-out infinite alternate;
  -moz-animation: glow 1s ease-in-out infinite alternate;
  animation: glow 1s ease-in-out infinite alternate;
}

@-webkit-keyframes glow {
  from {
     text-shadow: 0 0 10px #fff, 0 0 20px #fff, 0 0 30px #e60073, 0 0 40px #e60073, 0 0 50px #e60073, 0 0 60px #e60073, 0 0 70px #e60073;
  }
  to {
    text-shadow: 0 0 20px #fff, 0 0 30px #ff4da6, 0 0 40px #ff4da6, 0 0 50px #ff4da6, 0 0 60px #ff4da6, 0 0 70px #ff4da6, 0 0 80px #ff4da6;
  }
    </style>
</head>
<body>
<center>
    <div class="content">
        <h1 class="glow">GLOWING TEXT</h1>
            <h1>TEXT ANIMATOR</h1>
            <h2>Images brought to life</h2>
            <div class="upload"><p>Upload Your Image here</p>
            <form action="?" method="post" enctype="multipart/form-data">
                <input type="file" name="file" id="file" class="extra">
                <input type="submit" value="Upload Image" name="submit" id="submit" class="extra">
            </form></div>
            <!-- Use a button to pause/play the video with JavaScript -->
            <a href="Circle Parking/index.html"><button id="myBtn">Growing Heads</button></a>
            <a href="Steering behaviour/index.html"><button id="myBtn">Touch Me Not</button></a>
            <a href="Circle Parking Bubbling/index.html"><button id="myBtn">Boiling Rings</button></a>
            <a href="Waving Balls/index.html"><button id="myBtn">Waving Balls</button></a>
            <a href="Circle Parking Glowing/index.html"><button id="myBtn">Flashing Atoms</button></a>            
            <?php 
                if(isset($_POST['submit'])){
                    $file_name = $_FILES['file']['name'];  
                    $file_extension = explode(".", $_FILES["file"]["name"]);
                    $file_ext;
                    if($file_extension[sizeof($file_extension)-1]!=null){
                        $file_ext = $file_extension[sizeof($file_extension)-1];
                        $file_type = $_FILES['file']['type'];
                        $file_temp_loc = $_FILES['file']['tmp_name'];  
                        $file_store = "uploads/user.".$file_ext;
                        move_uploaded_file($file_temp_loc,$file_store);
                        chmod($file_store,0777);
                        echo "<script>sessionStorage.setItem(\"type\",\"$file_ext\");</script>";
                        echo "<script>alert(\"Image Uploaded\");</script>";
                        echo "<script>alert(\" Click on any of the effects to preview\");</script>";
                        echo "<script>sessionStorage.setItem(\"type\",\"$file_ext\");</script>";
                        echo "<script>alert(\"Image Uploaded\");</script>";
                        echo "<script>alert(\" Click on any of the effects to preview\");</script>";
                       
                    }
                    
                }
            ?>
    </div></center>
</body>
</html>
