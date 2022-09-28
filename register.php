<?php

    require __DIR__."/Backend/vendor/autoload.php";

    use App\Model\Entity\User;
    use App\Control\Session\Login;
    use App\Model\Enums\EnumsUser;
    use App\Control\Errors\Register_Errors;

    $pageType      = explode("=", $_SERVER["QUERY_STRING"])[1];
    $errorRegister = "";

    Login::RequireLogout($pageType);

    if (isset($_POST["enviar"])) {
        $oUser            = new User();
        $oVerifyReigister = Register_Errors::VerifyRegister($_POST["register__email"]);

        if ($oVerifyReigister[0]) {

            $oUser->Username   = $_POST["register__username"];
            $oUser->Surname    = $_POST["register__surname"];
            $oUser->Nickname   = $_POST["register__nickname"];
            $oUser->UserEmail  = $_POST["register__email"];
            $oUser->UserPass   = password_hash($_POST["register__password"], PASSWORD_DEFAULT);
            $oUser->BirthDate  = $_POST["register__birth"];
            $oUser->UserGender = EnumsUser::ToggleGender("POST", $_POST["register__gender"]);
            
            $oUser->Register();

            Login::Login(oUser: $oUser, pageType: $pageType);
        }
        else
            $errorRegister = $oVerifyReigister[1];
    }

    include __DIR__."/Backend/app/View/Includes/form_register.php";