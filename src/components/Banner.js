import React from 'react'
import Typist from 'react-typist';

const Banner = (props) => (
    <section id="banner" className="major">
        <div className="inner">
            <header className="major">
                <h1>ㄱㅇㄱㅇ | 여기 저기, 기웃 기웃, 웃기웃기</h1>
            </header>
            <div>
              <Typist
                avgTypingSpeed={40}
                startDelay={1000}
                cursor={{
                  hideWhenDone: true,
                  hideWhenDoneDelay: 0,
                }}
              >
                A responsive site template designed by HTML5 UP
                and released under the Creative Commons.
              </Typist>
            </div>
        </div>
    </section>
)

export default Banner
