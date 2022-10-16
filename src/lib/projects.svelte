<script>
  import NLW from 'C:/Users/aikad/Desktop/Projects/Portfolio/src/assets/NLW HEAT.png'
  import Caesar from 'C:/Users/aikad/Desktop/Projects/Portfolio/src/assets/Caesar.png'
  import Calculator from 'C:/Users/aikad/Desktop/Projects/Portfolio/src/assets/Calculator.png'
  import NewTab from 'C:/Users/aikad/Desktop/Projects/Portfolio/src/assets/New Tab.png'
  let Svelte =
    'https://upload.wikimedia.org/wikipedia/commons/1/1b/Svelte_Logo.svg'
  let Js =
    'https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg'
  let React =
    'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg'

  let projects = [
    {
      name: 'Cracha NLW ',
      color: 'rgb(12, 109, 119)',
      lastColor: '#dadde2',
      nextColor: 'rgb(40, 37, 37)',
      image: NLW,
      link: 'https://filipe-m.github.io/Cracha_NLW/',
      repositorie: 'https://github.com/Filipe-m/Cracha_NLW',
      language: Js,
      text: "This banner site was the first website, created in the Origin trail at NLW Heat 2021, it's a static page made for PC"
    },
    {
      name: 'Caesar Cipher',
      color: 'rgb(40, 37, 37)',
      lastColor: 'rgb(12, 109, 119)',
      nextColor: '#F5A623',
      image: Caesar,
      link: 'https://filipe-m.github.io/Caesar-cipher/',
      repositorie: 'https://github.com/Filipe-m/Caesar-cipher',
      language: Js,
      text: 'This was a JS challange to myself to test my knowledge and creat a site that can Incript and Decrypt Caesar Cipher.'
    },
    {
      name: 'Calculator',
      color: '#f5a623',
      lastColor: 'rgb(40, 37, 37)',
      nextColor: '#D0021B',
      image: Calculator,
      link: 'https://filipe-m.github.io/Calculator/',
      repositorie: 'https://github.com/Filipe-m/Calculator',
      language: Js,
      text: "Another JS challange but this time to make a simple but funcional calculator, although it doesn't support different and complex operations it still work perfetcly by it's means."
    },
    {
      name: 'New Tab',
      color: '#c25450',
      lastColor: '#F5A623',
      nextColor: '#dadde2',
      image: NewTab,
      link: 'https://filipe-m.github.io/NewTab/',
      repositorie: 'https://github.com/Filipe-m/NewTab',
      language: Svelte,
      text: "A project to myself to build a new Start Page to my browser, this time using API's and a clock creating a minimalistic but clear home page that can be simple customizable in it's em."
    }
  ]
</script>

{#each projects as project}
  <section style:background-color={project.color}>
    <div
      class="custom-shape-divider-top-1665881071"
      style:fill={project.lastColor}
    >
      <svg
        data-name="Layer 1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
      >
        <path
          d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
          opacity=".25"
          class="shape-fill"
        />
        <path
          d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
          opacity=".5"
          class="shape-fill"
        />
        <path
          d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
          class="shape-fill"
        />
      </svg>
    </div>
    <div class="text">
      <h2 style:color={project.nextColor}>{project.name}</h2>
      <p style:color={project.lastColor}>{project.text}</p>
      <em style:color={project.nextColor}
        >Made using: <span
          ><img class="icon" src={project.language} alt="" /></span
        ></em
      >
    </div>
    <div class="images">
      <img
        src={project.image}
        alt={project.name}
        class="img"
        style:box-shadow="0px 0px 33px 10px {project.nextColor}"
      />
      <div class="textWrapper" style:fill={project.lastColor}>
        <a href={project.link}
          ><p style:color={project.nextColor}>
            Visit the site <span style:color={project.lastColor}> ↗</span>
          </p></a
        >
        <p class="or" style:color={project.nextColor}>Or</p>
        <a href={project.repositorie} style:color={project.nextColor}
          ><p>
            See the project repositorie <span
              ><svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
                ><path fill="none" d="M0 0h24v24H0z" /><path
                  d="M13 21v2.5l-3-2-3 2V21h-.5A3.5 3.5 0 0 1 3 17.5V5a3 3 0 0 1 3-3h14a1 1 0 0 1 1 1v17a1 1 0 0 1-1 1h-7zm0-2h6v-3H6.5a1.5 1.5 0 0 0 0 3H7v-2h6v2zm6-5V4H6v10.035A3.53 3.53 0 0 1 6.5 14H19zM7 5h2v2H7V5zm0 3h2v2H7V8zm0 3h2v2H7v-2z"
                  fill={project.lastColor}
                /></svg
              >
            </span>
          </p></a
        >
      </div>
    </div>
  </section>
{/each}

<style>
  .or {
    margin-top: 3%;
  }

  .textWrapper {
    text-align: center;
  }
  .img {
    width: 60%;
    height: 45%;
    border-radius: 10px;
  }

  .img:hover{
    scale: 1.2;
  }

  .images {
    width: 60vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 5%;
  }

  .images a {
    text-decoration: none;
  }

  .images a span {
    font-size: 160%;
  }

  .images p {
    font-size: 120%;
    font-family: 'Roboto mono';
    font-weight: bold;
  }

  .text {
    width: 40vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
  }

  .text em {
    font-family: 'Oxygen', sans-serif;
    font-size: 150%;
    margin-left: 5%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    margin-top: 10%;
  }

  .text em span {
    display: block;
    width: 10%;
    height: 50%;
  }

  .icon {
    width: 100%;
    height: 100%;
  }

  .text p {
    font-family: 'Oxygen Mono', monospace;
    font-size: 150%;
    margin-left: 10%;
  }

  .text h2 {
    font-family: 'Permanent Marker', cursive;
    font-size: 400%;
    margin-left: 10%;
  }
  section {
    display: flex;
    flex-direction: row;
    position: relative;
    height: 100vh;
    scroll-snap-align: start;
    /*  background-color: rgb(12, 109, 119); */
  }

  .custom-shape-divider-top-1665881071 {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    overflow: hidden;
    line-height: 0;
    z-index: 1;
  }

  .custom-shape-divider-top-1665881071 svg {
    position: relative;
    display: block;
    width: calc(111% + 1.3px);
    height: 87px;
  }

  @media only screen and (max-width: 600px) {
    .text {
      width: 100vw;
      height: 30vh;
      margin-top: auto;
      z-index: 2;
    }
    .text h2 {
      font-size: 260%;
      margin: 0;
    }
    section {
      flex-direction: column;
    }
    .images {
      width: 100vw;
      height: 60vh;
    }
    .img {
      width: 80%;
      height: 40%;
    }
    .images p {
      font-size: 100%;
    }
    .text em {
      font-size: 100%;
      margin-left: 5%;
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: flex-end;
      margin:0;
     }

    .text em span {
      display: block;
      width: 10%;
      height: 50%;
    }

    .icon {
      width: 100%;
      height: 100%;
    }

    .text p {
      font-family: 'Oxygen Mono', monospace;
      font-size: 100%;
      margin-left: 5%;
      margin-right: 5%;
    }
  }
</style>
