<?php

    use App\Control\Session\Login;

    require __DIR__."/Backend/vendor/autoload.php";

    include __DIR__."/Backend/app/View/Includes/header.php";

    is_null(Login::GetUserLogged())
        ? include __DIR__."/Backend/app/View/Includes/form_login.php" 
        : null;
    
    include __DIR__."/Backend/app/View/Includes/home.php";
    include __DIR__."/Backend/app/View/Includes/footer.php";