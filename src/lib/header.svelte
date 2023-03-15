<script>
  import linkedinLogo from '../assets/linkedin.svg'
  import emailLogo from '../assets/email.svg'
  import githubLogo from '../assets/github.svg'
  import instagramLogo from '../assets/instagram.svg'
  let Svelte =
    'https://upload.wikimedia.org/wikipedia/commons/1/1b/Svelte_Logo.svg'
  let Js =
    'https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg'
  let React =
    'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg'

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
      development.
    </p>
    <p>
      Tecnologies I'm able to use: <br />
      <code>React <br /> Typescript<br /> Node.js <br /> Express.js </code>
    </p>
  </div>
</div>

<style>
  code {
    color: rgb(109, 102, 0);
    font-size: 120%;
    font-family: 'Share Tech Mono', monospace;
    font-weight: bolder;
  }

  .text {
    font-size: 120%;
    font-family: 'Roboto';
    display: flex;
    flex-direction: column;
    gap: 5%;
    opacity: 0;
    transform: translateY(3rem);
    animation: fadeIn 2s calc(3s + 1s) ease forwards;
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
    font-family: 'Syne Mono', monospace;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    position: relative;
  }

  .article h1::before,
  .article h1::after {
    content: '';
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    position: absolute;
  }

  .article h1::before {
    background-color: #dadde2;
    animation: typewriter 3s steps(22) 1s forwards;
  }

  .article h1::after {
    width: 0.125rem;
    background: black;
    animation: typewriter 3s steps(22) 1s forwards,
      blink 750ms steps(22) infinite;
  }

  @keyframes fadeIn {
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes blink {
    to {
      background: transparent;
    }
  }

  @keyframes typewriter {
    to {
      left: 100%;
    }
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
    code {
      font-size: 110%;
    }
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
      font-size: 160%;
      padding: 0.7rem;
      flex-wrap: nowrap;
    }
    .text {
      text-align: center;
      margin-left: 10%;
      margin-right: 10%;
    }
  }
</style>
