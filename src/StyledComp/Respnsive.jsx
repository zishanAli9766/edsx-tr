import React from 'react'
// import './Responsive.css'

function Respnsive() {
    const height = window.innerWidth;
    return (
      <>
            <div id='zsihan'>Respnsive</div>
            <p>{height}</p>
            <div>
                <div class="wrapper">
                    <div id="leftsidebar">
                        <ul id="menulist">
                            <li class="menuitem"id='id1'>Menu-item 1</li>
                            <li class="menuitem"id='id2'>Menu-item 2</li>
                            <li class="menuitem"id='id3'>Menu-item 3</li>
                            <li class="menuitem"id='id4'>Menu-item 4</li>
                            <li class="menuitem"id='id5'>Menu-item 5</li>
                        </ul>
                    </div>
                    </div>
                </div>
            </>
            )
}

            export default Respnsive