        <!-- Banner de Destaque -->
        <section id="banner">
            <form method="POST" id="banner__save">
                <button type="submit" id="save__submit" name="salvar" title="Favoritar">
                    <i class="fa-star fa-solid" id="save__star"></i>
                </button>
            </form>
            <video src="" id="banner__video" autoplay muted loop></video>
        </section>

        <!-- Corpo da Página -->
        <main class="container" id="container__details"></main>

        <!-- Seção de Comentários -->
        <section id="comments">
            <div id="disqus_thread"></div>
            <script>
                (function() {
                    var d = document, s = d.createElement('script');
                    
                    s.src = 'https://syberlist.disqus.com/embed.js';
                    
                    s.setAttribute('data-timestamp', +new Date());
                    (d.head || d.body).appendChild(s);
                })();
            </script>
            <noscript>Please enable JavaScript to view the <a href="https://disqus.com/?ref_noscript" rel="nofollow">comments powered by Disqus.</a></noscript>
        </section>