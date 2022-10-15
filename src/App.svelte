<script>
  import HeaderContent from './lib/header.svelte'
</script>

<main>
  <header>
    <HeaderContent />
  </header>
  <article>
    <div class="custom-shape-divider-top-1665858180">
      <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" class="shape-fill"></path>
      </svg>
  </div>
    <section />
  </article>
</main>

<style>
  main{
    position: relative;
  }
  article{
    position: relative;
    background-color: rgb(12, 109, 119);
    height: 100vh;
  }
  header {
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
