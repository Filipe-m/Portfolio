<script>
  import linkedinLogo from 'C:/Users/aikad/Desktop/Projects/Portfolio/src/assets/linkedin.svg'
  import emailLogo from 'C:/Users/aikad/Desktop/Projects/Portfolio/src/assets/email.svg'
  import githubLogo from 'C:/Users/aikad/Desktop/Projects/Portfolio/src/assets/github.svg'
  import instagramLogo from 'C:/Users/aikad/Desktop/Projects/Portfolio/src/assets/instagram.svg'
  let contact = [
    {
      link: 'https://github.com/Filipe-m',
      icon: githubLogo,
      name: 'Github'
    },
    {
      link: 'mailto:liebeoxygen@gmail.com',
      icon: emailLogo,
      name: 'Email'
    },
    {
      link: 'https://www.linkedin.com/in/filipe-moreira-c',
      icon: linkedinLogo,
      name: 'Linkedin'
    },
    {
      link: 'https://www.instagram.com/filipe.m_/',
      icon: instagramLogo,
      name: 'Instragram'
    }
  ]
</script>

<div class="about">
  <img
    class="profilePic"
    src="https://avatars.githubusercontent.com/u/60034638?v=4"
    alt=""
  />
  <div class="icons">
    {#each contact as site}
      <span>
        <a class="icon" href={site.link}
          ><img src={site.icon} class="img" alt={site.name} /></a
        >
      </span>
    {/each}
  </div>
</div>
<div class="article">
  <h1>Hi, I'm Filipe Moreira</h1>
  <div class="text">
    <p>
      I'm currently a last-year highschool student who's trying to learn web
      development
    </p>
    <p>
      Tecnologies I'm able to use: <br />
      <code>React <br /> Svelte <br /> Javascript</code>
    </p>
  </div>
</div>

<style>
  code {
    color: rgb(255, 0, 0);
    font-size: 120%;
    font-family: 'Roboto mono';
    font-weight: bolder;
  }

  .text {
    font-size: 120%;
    font-family: 'Roboto';
  }

  .text p {
    margin: 3%;
    text-align: center;
  }

  .article {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 60%;
    height: 100%;
  }

  .article h1 {
    font-size: 300%;
    font-family: 'Permanent Marker', cursive;
  }

  .about {
    width: 40%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2%;
  }

  .profilePic {
    width: 50%;
    border-radius: 50%;
  }

  .icons {
    width: 50%;
    height: fit-content;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 7%;
  }

  .icons span {
    width: 90%;
    height: 90%;
  }

  .icons span a {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .img {
    max-width: 100%;
    min-height: 100%;
    border-radius: 11px;
    border: none;
  }

  .icon {
    background-color: transparent;
  }

  .img:hover {
    scale: 1.3;
  }

  @media only screen and (max-width: 600px) {
    .about {
      height: 40vh;
      width: 100vw;
      justify-content: flex-end;
    }
    .article {
      align-items: center;
      justify-content: center;
      height: 60vh;
      width: 100vw;
    }
    .article h1 {
      font-size: 180%;
    }
    .text {
      text-align: center;
      margin-left: 10%;
      margin-right: 10%;
    }
  }
</style>
