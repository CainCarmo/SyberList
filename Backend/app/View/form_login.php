        <!-- Background do Formulário -->
        <section class="form--hidden" id="login--hidden">
            <!-- Formulário de Login -->
            <form method="POST" class="form" id="login">
                <i class="fas fa-times" id="login__times"></i>
                <header id="login__header">
                    <!-- Logo -->
                    <img src="https://cdn.discordapp.com/attachments/1000527265303642194/1006613565182054470/Logo-image.png" alt="Imagem da Logo" />
                </header>
                <main id="login__fields">
                    <!-- Campo Email -->
                    <div class="form__field">
                        <div class="form__icon--wrapper">
                            <i class="fa-solid fa-user"></i>
                        </div>
                        <div class="form__input--wrapper">
                            <input type="email" name="login__email" id="login__email" class="form__input" placeholder="Digite seu email. . ." required>
                            <div class="underline"></div>
                        </div>
                    </div>
                    <!-- Campo da Senha -->
                    <div class="form__field">
                        <div class="form__icon--wrapper">
                            <i class="fa-solid fa-lock"></i>
                        </div>
                        <div class="form__input--wrapper">
                            <input type="password" name="login__password" id="login__password" class="form__input" placeholder="Digite sua senha. . ." required>
                            <div id="password__icon--wrapper">
                                <i class="fa-solid fa-eye"></i>
                                <div id="password__line"></div>
                            </div>
                            <div class="underline"></div>
                        </div>
                    </div>
                </main>
                <!-- Rodapé do Formulário -->
                <footer id="login__footer">
                    <button type="submit" name="enviar" value="login" class="form__submit">Enviar</button>
                    <small id="login__alt">Ou crie sua conta</small>
                    <span>
                        <a href="register.php?type=<?=$pageType?>">Registre-se aqui</a>
                    </span>
                </footer>
            </form>
        </section>
