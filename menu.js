let miMenu = function () {
    let template = /*html*/`
        <header class="navigation fixed sticky-header">
            <div class="container">
                <nav class="navbar navbar-expand-lg navbar-light px-0">
                    <div class="collapse navbar-collapse" id="navigation">
                        <ul class="navbar-nav ml-auto text-center">
                            
                            <li class="nav-item dropdown active show">
                                <a class="nav-link dropdown-toggle" href="#!" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                                    Categorias <i class="tf-ion-chevron-down"></i>
                                </a>
                                <ul class="dropdown-menu show" aria-labelledby="navbarDropdown">                                
                                    <li><a class="dropdown-item" href="">Tecnologia</a></li>
                                    <li><a class="dropdown-item" href="">Hogar y Jardin</a></li>
                                    <li><a class="dropdown-item" href="">Herramientas</a></li>
                                    <li><a class="dropdown-item" href="">Accesorios para Vehiculos</a></li>
                                    <li><a class="dropdown-item" href="">Moda</a></li>
                                    <li><a class="dropdown-item" href="">Juegos y Juguetes</a></li>   
                                    <li><a class="dropdown-item" href="">Bebes</a></li>
                                    <li><a class="dropdown-item" href="">Belleza y Cuidado Personal</a></li>
                                </ul>
                            </li>
                            <li class="nav-item ">
                                <a class="nav-link" href="">Ofertas</a>
                            </li>
                            <li class="nav-item ">
                                <a class="nav-link" href="">Historial</a>
                            </li>
                            <li class="nav-item ">
                                <a class="nav-link" target="_blank" href="">Vender en Correo Compras</a>
                            </li>
                            <li class="nav-item ">
                            <a class="nav-link" href="">Carrito</a>
                        </li>

                        </ul>
                    </div>
                </nav>
            </div>
        </header>
    `
    document.querySelector('header').innerHTML = template
  }
  
  miMenu()