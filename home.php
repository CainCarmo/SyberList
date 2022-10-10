<?php

    use App\Control\Session\Login;

    require __DIR__."/Backend/vendor/autoload.php";

    include __DIR__."/Backend/app/View/header.php";

    is_null(Login::GetUserLogged())
        ? include __DIR__."/Backend/app/View/form_login.php" 
        : null;
    
    include __DIR__."/Backend/app/View/home.php";
    include __DIR__."/Backend/app/View/footer.php";