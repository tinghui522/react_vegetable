import logo from './logo.svg';
import './App.css';
import course_data from "./json/data.json";
import CourseElement from "./CourseElement"

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
          <div class="container-title">
            <div class="box-title">Vegetables</div>
            <img src="img/btn_facebook.png"  class="title-pic"/>
            <img src="img/btn_instagram.png"  class="title-pic"/>
            
            <div class="line"></div>
            <div class="login-box">LOGIN</div>
            <div class="join-box">JOIN</div>
          </div>
        </header>
        <nav>
          <div class= "nav-box">
            <ul>
                <li class= "home">Home</li>
                <li class= "about">About Us</li>
                <li class= "vege">Vegetables</li>
                <li class= "online">Online</li>
                <li class= "contact">Contact</li>
            </ul>
          </div>
        </nav>

        <div class="mainpic">
          {/* <img src="img/img_main_pumpkin.png" /> */}
          <CourseElement
             course_img={course_data[0].course_img}
          />
        </div>
        <div class="main-container">
            <aside>
                <div class="title-box">
                    Vegetables
                </div>

                <div class="pic-container">
                    {/* <img src="img/img_vegetables_pepper.png" />
                    <img src="img/img_vegetables_carrot.png" />
                    <img src="img/img_vegetables_corn.png" /> */}
                    <CourseElement
                      course_img={course_data[1].course_img}
                    />
                    <CourseElement
                      course_img={course_data[2].course_img}
                    />
                    <CourseElement
                      course_img={course_data[3].course_img}
                    />
                </div>
            </aside>

            <article >
                <div class="title-box">
                    Contact
                </div>

                <div class="text-box">
                    <div class="text1">
                        For any questions or suggestions about Vegetables, Vegetables Club or your 
                        online order you can contact Vegetables Customer Service by phone, email 
                        or post and we’ll be happy to help.
                    </div>
                    <div class="text-line"></div>
                    <div class="text2">
                        E-mail : Vegetables@aaabbccc.com <br/>
                        PHONE : +886-123-456-789
                    </div>
                </div>
                
            </article>
        </div>
        <footer>
          Copyrights 2017 Vegetables cise / Design by Vegetables
        </footer>
  </div>
  </div>
  );
}

export default App;
