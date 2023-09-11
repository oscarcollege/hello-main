<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM" crossorigin="anonymous">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-geWF76RCwLtnZ8qwWowPQNguL3RmwHVBC9FhGdlKrxdiJJigb/j/68SIy3Te4Bkz" crossorigin="anonymous"></script>
    <link href="booting.css" rel="stylesheet">
  </head>
  <body>
    <div class="container text-center">

      <div class="row">
        <div class="col">
          <nav class="navbar navbar-expand-sm bg-body-tertiary">
            <div class="container-fluid">
              <a class="navbar-brand" href="booting.php">Homepage</a>
              <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                  <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false"> Cats </a>
                    <ul class="dropdown-menu">
                      <li>
                        <a class="dropdown-item" href="#">Buy</a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="#">Sell</a>
                      </li>
                      <li>
                        <hr class="dropdown-divider">
                      </li>
                      <li>
                        <a class="dropdown-item" href="#">Search</a>
                      </li>
                    </ul>
                  </li>
                  <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false"> Cages </a>
                    <ul class="dropdown-menu">
                      <li>
                        <a class="dropdown-item" href="#">Buy</a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="#">Sell</a>
                      </li>
                      <li>
                        <hr class="dropdown-divider">
                      </li>
                      <li>
                        <a class="dropdown-item" href="#">Search</a>
                      </li>
                    </ul>
                  </li>
                  <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false"> Cages </a>
                    <ul class="dropdown-menu">
                      <li>
                        <a class="dropdown-item" href="#">Buy</a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="#">Sell</a>
                      </li>
                      <li>
                        <hr class="dropdown-divider">
                      </li>
                      <li>
                        <a class="dropdown-item" href="#">Search</a>
                      </li>
                    </ul>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="other-products.php">Other Products</a>
                  </li>
                </ul>
                <button class="btn btn-outline-success" type="submit">Sign in</button>
                <button class="btn btn-outline-success" type="submit">Sign up</button>
              </div>
            </div>
          </nav> 
          header!
        </div>
      </div>

      <div class="row">
        <div class="col-2"> 
          sidebar 
        </div>
        <div class="col-10"> 
          <!-- MAIN -->
          <div id="carouselExample" class="carousel slide carousel-fade">
            <div class="carousel-indicators">
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
            </div>
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img src="cat.jpg" class="d-block w-100" alt="...">
              </div>
              <div class="carousel-item">
                <img src="cage.jpg" class="d-block w-100" alt="...">
              </div>
              <div class="carousel-item">
                <img src="cage2.jpeg" class="d-block w-100" alt="...">
              </div>
              <div class="carousel-item">
                <img src="hardcore-gamer.jpg" class="d-block w-100" alt="...">
              </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
          <!-- END MAIN -->
        </div>
      </div>

      <div class="row">
        <div class="col"> 
          footer 
        </div>
      </div>
    </div>
  </body>
</html>
