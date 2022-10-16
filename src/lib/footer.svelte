<script>
  let BgColor = '#c25450'
</script>

<section>
  <div class="custom-shape-divider-top-1665881071" style:fill={BgColor}>
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
  <div class="content">
    <div class="text">
      <h1 class="tittle">Like what you've see?</h1>
      <p class="subtittle">You can contact me at:</p>
    </div>
    <ul>
      <li>
        <a href="https://www.instagram.com/filipe.m_/" rel="noreferrer" target="_blank"><img src="https://img.shields.io/badge/-Instagram-%23E4405F?style=for-the-badge&logo=instagram&logoColor=white" alt="Instagram" target="_blank"></a>
      </li>
      <li>
        <a href = "mailto:liebeoxygen@gmail.com" rel="noreferrer" ><img src="https://img.shields.io/badge/-Gmail-%23333?style=for-the-badge&logo=gmail&logoColor=white" alt="E-mail" target="_blank"></a>
      </li>
      <li>
        <a href="https://www.linkedin.com/in/filipe-moreira-c/" rel="noreferrer" target="_blank"><img src="https://img.shields.io/badge/-LinkedIn-%230077B5?style=for-the-badge&logo=linkedin&logoColor=white" alt="Linkedin" target="_blank"></a> 
      </li>
      <li>
        <a href="https://github.com/Filipe-m" rel="noreferrer" target="_blank"><img src="https://img.shields.io/badge/-GitHub-%23333?style=for-the-badge&logo=Github&logoColor=white" alt="Linkedin" target="_blank"></a> 
      </li>
    </ul>
  </div>
</section>

<style>
  .text{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  ul{
    list-style: none;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0;
    width: 50vw;
    height: 10%;
    gap: 1%;
  }

  li{
    width: 10vw;
    height: 60%;
  }

  a{
    width: 100%;
    height: 100%;
  }

  a img{
    width: 100%;
    height: 100%;
    border-radius: 10px;
    box-shadow: 0px 0px 35px -3px rgba(0,0,0,0.75);
  }

  img:hover{
    scale: 1.2;
    box-shadow: 0px 0px 10px 2px #f06;
  }

  .content{
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1;
    height: 100vh;
    width: 100vw;
    flex-direction: column;
  }
  
  .subtittle{
    font-family: 'Share Tech Mono', monospace;
    font-size: 250%;
    padding: 3%;
  }

  .tittle{
    font-family: 'Share Tech Mono', monospace;
    font-size: 350%;
  }

  section {
    width: 100vw;
    height: 100vh;
    background-color: #dadde2;
  }
  .custom-shape-divider-top-1665881071 {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    overflow: hidden;
    line-height: 0;
    z-index: 0;
  }

  .custom-shape-divider-top-1665881071 svg {
    position: relative;
    display: block;
    width: calc(111% + 1.3px);
    height: 87px;
  }

  @media only screen and (max-width: 600px){
    .text{
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-end;
      gap: 2rem;
      padding-bottom: 1rem;
      padding-left: 1rem;
      padding-right: 1rem;
    }

    ul{
    display: flex;
    flex-direction: column;
    width: 40vw;
    height: 40vh;
    gap: 3%;
  }

  li{
    width: 40vw;
    height: 8vh;
  }

  a{
    width: 40vw;
    height: 7vh;
  }

  a img{
    width: 100%;
    height: 100%;
    border-radius: 10px;
    box-shadow: 0px 0px 35px -3px rgba(0,0,0,0.75);
  }
  .subtittle{
    font-size: 250%;
    padding: 0%;
    text-align: center;
  }

  .tittle{
    text-align: center;
    font-size: 350%;
  }
  }
</style>
