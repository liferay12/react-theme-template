import logo from './logo.svg';
import './App.css';

import ThemeRender from './theme/component/ThemeRender';
import themeData from "./theme/theme.json"
// import {apexchart} from './theme/js';

function App() {

  

  return (
    // <body data-typography="poppins" data-theme-version="light" data-layout="vertical" data-nav-headerbg="color_4" data-headerbg="color_4" data-sidebar-style="full" data-sidebarbg="color_1" data-sidebar-position="fixed" data-header-position="fixed" data-container="wide" direction="ltr" data-primary="color_1" data-secondary="color_1">
    <div >

      <ThemeRender data={themeData}></ThemeRender>


      {/* <h1>hekk  k</h1>
      {
        themeData.section.map((data, j) => {

          return (

            <h1 key={j}>{data.title} jhsekjfh</h1>
          )
          {
            data.option.map((item, i) => {

              return (
                <div key={i}>
                  <h1>{item.component}</h1>
                </div>
              )

            })
          }

        })
      }
 */}


    </div>
    //  </body>
  );
}

export default App;
