<!DOCTYPE html>
<html lang="pt-br">
    <head>
        <!-- Meta Tags -->
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <!-- CSS -->
        <link rel="stylesheet" href="./CSS/form_register.css">
        <link rel="stylesheet" href="./CSS/fields.css">

        <!-- Icons -->
        <script src="https://kit.fontawesome.com/a39dd60c9e.js" crossorigin="anonymous"></script>

        <title id="page__title">Registre-se | SyberList</title>
    </head>
    <body>
        <!-- Background -->
        <section id="register--background">

            <!-- Voltar para página Home -->
            <a id="return">
                <i class="fa-solid fa-arrow-left"></i>
            </a>
            <!-- Formulário -->
            <form method="POST" id="register">
                <!-- Lado Direito -->
                <section id="register__left">
                    <video src="./Resources/Video/mylivewallpapers.com-Sasuke-Studying.mp4" autoplay muted loop></video>
                </section>
                <!--  -->
                <svg id="register__curves" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                    <path fill="#ededed" viewbox="0 0 512 512" d="M0,32L60,42.7C120,53,240,75,360,117.3C480,160,600,224,720,224C840,224,960,160,1080,160C1200,160,1320,224,1380,256L1440,288L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
                </svg>
                <!-- Lado Esquerdo -->
                <section id="register__right">
                    <header id="register__header">
                        <!-- Logo -->
                        <img class="form__logo" src="https://cdn.discordapp.com/attachments/1000527265303642194/1006613565182054470/Logo-image.png" alt="Imagem da Logo" />
                        <!-- Mensagem de Erro -->
                        <span class="form__error"></span>
                    </header>
                    <main id="register__fields">
                        <!-- Área Icon do Usuário -->
                        <div id="form__photo--wrapper">
                            <label for="form__photo">Escolha o Perfil</label>
                            <input type="file" name="form__photo" id="form__photo">
                        </div>
                        <!-- Campo do Nome -->
                        <div class="form__field" id="field__username">
                            <div class="form__icon--wrapper">
                                <i class="fa-solid fa-user"></i>
                            </div>
                            <div class="form__input--wrapper">
                                <input type="text" name="register__username" id="register__username" class="form__input" placeholder="Digite seu nome. . ." required>
                                <div class="underline"></div>
                            </div>
                        </div>
                        <!-- Campo do Sobrenome -->
                        <div class="form__field" id="field__surname">
                            <div class="form__icon--wrapper">
                                <i class="fa-regular fa-user"></i>
                            </div>
                            <div class="form__input--wrapper">
                                <input type="text" name="register__surname" id="register__surname" class="form__input" placeholder="Digite seu sobrenome. . ." required>
                                <div class="underline"></div>
                            </div>
                        </div>
                        <!-- Campo do Nickname -->
                        <div class="form__field" id="field__nickname">
                            <div class="form__icon--wrapper">
                                <i class="fa-solid fa-tag"></i>
                            </div>
                            <div class="form__input--wrapper">
                                <input type="text" name="register__nickname" id="register__nickname" class="form__input" placeholder="Digite seu nickname. . ." required>
                                <div class="underline"></div>
                            </div>
                        </div>
                        <!-- Campo do Email -->
                        <div class="form__field" id="field__email">
                            <div class="form__icon--wrapper">
                                <i class="fa-solid fa-envelope"></i>
                            </div>
                            <div class="form__input--wrapper">
                                <input type="email" name="register__email" id="register__email" class="form__input" placeholder="Digite seu email. . ." required>
                                <div class="underline"></div>
                            </div>
                        </div>
                        <!-- Campo do Senha -->
                        <div class="form__field" id="field__password">
                            <div class="form__icon--wrapper">
                                <i class="fa-solid fa-lock"></i>
                            </div>
                            <div class="form__input--wrapper">
                                <input type="password" name="register__password" id="register__password" class="form__input" placeholder="Digite sua senha. . ." required>
                                <div id="password__icon--wrapper">
                                    <i class="fa-solid fa-eye"></i>
                                    <div id="password__line"></div>
                                </div>
                                <div class="underline"></div>
                            </div>
                        </div>
                        <!-- Campo da Data de Nascimento -->
                        <div class="form__field" id="field__birth">
                            <div class="form__icon--wrapper">
                                <i class="fa-solid fa-calendar-days"></i>
                            </div>
                            <div class="form__input--wrapper">
                                <input type="date" id="register__birth" class="form__input" name="register__birth" required>
                                <div class="underline"></div>
                            </div>
                        </div>
                        <!-- Campo de Gênero -->
                        <div class="form__field" id="field__gender">
                            <div class="form__icon--wrapper">
                                <i class="fa-solid fa-venus-mars"></i>
                            </div>
                            <div class="form__input--wrapper">
                                <select id="register__gender" name="register__gender" class="form__input">
                                    <option value="" selected disabled>Escolha o gênero:</option>
                                    <option value="M">Masculino</option>
                                    <option value="F">Femino</option>
                                </select>
                                <div class="underline"></div>
                            </div>
                        </div>
                    </main>
                    <footer id="register__footer">
                        <button type="submit" name="enviar" value="login" class="form__submit">Enviar</button>
                    </footer>
                </section>
            </form>

        </section>
        <!-- Script -->
        <script type="module" src="./JS/events.js"></script>
    </body>
</html>