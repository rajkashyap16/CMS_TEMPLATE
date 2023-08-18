function boilerPlate(title){
    document.write(`<!DOCTYPE html>
    <html lang="en">
        
        <head>
            <meta charset="utf-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1">
            
            <title>${title}</title>
            <link href="css/bootstrap.min.css" rel="stylesheet">
            <link href="css/style.css" rel="stylesheet">
        </head>
        
        <body>
    
    `);
}

function nav(logo){
    document.write(`
    <!-- Navigation -->
                <nav class="navbar navbar-inverse navbar-fixed-top  nav" role="navigation">
                                    <div class="container">
                                        <!-- Logo and responsive toggle -->
                                                        <div class="navbar-header">

                                                            <a class="navbar-brand " href="https://github.com/rajkashyap16" target =" _blanl">
                                                                <!-- <span class="glyphicon glyphicon-fire"></span>  -->
                                                               ${logo}
                                                            </a>
                                                        </div>
                                        <!-- Navbar links -->
                                                        <div class="collapse navbar-collapse" id="navbar">
                                                            <ul class="nav navbar-nav">
                                                                <li class="active">
                                                                    <a href="index.html">Home</a>
                                                                </li>
                                                                <li>
                                                                    <a href="about.html">About</a>
                                                                </li>
                                                                <li>
                                                                    <a href="products.html">Products</a>
                                                                </li>
                                                               
                                                            </ul>
                                                        </div>
                                        <!-- /.navbar-collapse -->
                                    </div>
                    <!-- /.container -->
                </nav>

    `);

}

function jumbotron(heading ,para ,btn,btn_link ){
    document.write(`
    <div class="jumbotron feature">
        <div class="container">
            <h1>${heading}</h1>
            <p>${para}</p>
            <p><a class="btn btn-primary" target=_blanl; href="${btn_link}">${btn}</a></p>
        </div>
    </div>

    
    `);
}

function intro(heading ,small , para){
    document.write(`
    <div class="row page-intro">
    <div class="col-lg-12">
        <h1>${heading}
            <small>${small}</small>
        </h1>
        <p>${para}</p>
    </div>
</div>
    `);
}

function row(img1 , heading , para){
    document.write(`
    <article class="col-md-4 article-intro">
        <a href="#">
            <img class="img-responsive img-rounded img" src="${img1}" alt="">
        </a>
        <h3>
            <a href="/">${heading}</a>
        </h3>
        <p>${para}</p>
    </article>
    
  
`);
}

function footer(img , heading ,para){
    document.write(`
 
                    <div class="col-sm-4 footer-blurb-item">
                        <img class="img-circle" src="${img}" alt="" width="100" height="100">
                        <h3>${heading}</h3>
                        <p>${para}</p>
                        <p><a class="btn btn-default" href="#">Procrastinate</a></p>
                    </div>
  `);}

  function boilerPlateBottom(name ,year){
    document.write(`
    </div>
    <!-- /.row -->
</div>
</div>

<div class="small-print">
<div class="container">
    <h3>${name}</h3>

    <p>Copyright &copy; ${year} </p>
</div>
</div>
</footer>


</body>

</html>
  
    `);
  }