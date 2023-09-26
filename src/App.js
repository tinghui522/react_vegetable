import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <div class="container">
        <header>
            <div class="container_vegetables">
                    <h1>Vegetables</h1>
            </div> 
            <div class="container_headerrightside">
                
              <img src="/img/btn_facebook.png" class="btn_facebook"/>
              <img src="/img/btn_instagram.png" class="btn_instagram"/>

                <div class="line_header"></div>
                <a herf="" class="box_user login">
                    <p>LOGIN</p>
                </a>
                <a herf="" class="box_user join">
                        <p>JOIN</p>
                </a>
            </div>
        </header>
        <nav>
            <ul class="nav_list">
                <li><a href="#">Home</a></li>
                <li><a href="#">About Us</a></li>
                <li><a href="#">Vegetables</a></li>
                <li><a href="#">Online</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
        </nav>
        <main>
           
            <img src="/img/img_main_pumpkin.png" class="img_main_pumpkin"/>
        </main>
        <article>
            <section>
                <div class="box_section_header">
                    <h3>Vegetables</h3>
                </div>
                <div class="img_vegetable">
                    
                    <img src="/img/img_vegetables_pepper.png" class="img_vegetables_pepper"/>
                    <img src="/img/img_vegetables_carrot.png" class="img_vegetables_carrot"/>
                    <img src="/img/img_vegetables_corn.png" class="img_vegetables_corn"/>

                </div>
            </section>
            <section>
                <div class="box_section_header">
                    <h3>Contact</h3>
                </div>
                <div class="bg_contact_content">
                    <p class="contact_content_first">For any questions or suggestions about Vegetables, Vegetables Club or your 
                        online order you can contact Vegetables Customer Service by phone, email 
                        or post and we’ll be happy to help.</p>
                    <div class="line_contact_text"></div>
                    <p class="contact_content_second">E-mail : Vegetables@aaabbccc.com <br/>PHONE : +886-123-456-789</p>
                </div>
            </section>
        </article>
        <div>
        <footer>
            <p class="footer">Copyrights 2017 Vegetables cise / Design by Vegetables</p>
        </footer>
      </div>
    </div>
  </div>
  );
}

export default App;
