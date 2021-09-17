import React from 'react'
import "./style.css"


export default function header() {
    return (
        <div>
            <ul>
                <li><a class="" ><i class=""></i></a></li>
                <a class="navbar-brand" >
                    <img src="./Images/img.jpg" alt="" width="35" height="35" />
                </a>
                <li><a class="active" ><i class="fas fa-home"></i></a></li>
                <li><a class="" ><i class="fas fa-folder-open"></i></a></li>
                <li><a class="" ><i class="fas fa-cloud"></i></a></li>
                <li><a class="" ><i class="fas fa-user-circle"></i></a></li>
                <li><a class="" ><i class="fas fa-sign-out-alt"></i></a></li>
                <li><a class="" ><i class="fa fa-gear"></i></a></li>
            </ul>

        </div>



    )
}
