<script>
  import HeaderContent from './lib/header.svelte'
  import Projects from './lib/projects.svelte'
</script>

<main>
  <header>
    <HeaderContent />
  </header>
  <article>
    <Projects/>
  </article>
</main>

<style>
  main{
    position: relative;
  }
  article{
    position: relative;
  }
  header {
    scroll-snap-align: start;
    display: flex;
    flex-direction: row-reverse;
    height: 100vh;
    width: 100vw;
    align-items: center;
    justify-content: space-between;
    background-image: url(./assets/headerBackground.svg);
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }

  @media only screen and (max-width: 600px) {
    header {
      flex-direction: column;
      justify-content: space-around;
      background-image: url(./assets/headerBackgroundMobile.svg);
    }
  }
</style>
