import React, { Component } from 'react'
import './style.css'
import ApexCharts from 'apexcharts'


export default function Body() {
    const names = ['Rosie Metts', 'James Scott', 'Jamie Laurenson', 'Elizabeth Hurton', 'Danny Watson']
    return (
        <div>
            <ul class="navbar justify-content-end">
                <li class="nav-item">
                    <a class="nav-link" aria-current="page" href="#"><i class="fas fa-bell"></i></a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Satyam Singh</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#"><img class="img" src="./Images/photo.jpg" alt="" width="30" height="30" /></a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#" tabindex="-1" aria-disabled="true">
                        <div class="dropdown">
                            <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">

                            </button>
                            <ul class="dropdown-menu px-1" aria-labelledby="dropdownMenuButton1">
                                <li><a class="dropdown-item" href="#">Action</a></li>
                                <li><a class="dropdown-item" href="#">Another action</a></li>
                                <li><a class="dropdown-item" href="#">Something else here</a></li>
                            </ul>
                        </div>
                    </a>
                </li>
            </ul>



            <div class="row justify=content-start">
                <div class="col-8">
                    <div className="allrows">
                        <div><h3>Dashboard </h3></div><div class="date"><h4 class="day">Monday, 02 July 2020</h4></div>
                    </div>
                </div>
                <div class="col-4">
                    <form class="d-flex">
                        <button class="btn btn-primary px-4" type="submit">+Add</button>
                        <button class="btn btn-link" type="submit"><i class="fas fa-search"></i></button>
                        <input class="form-control me-4" type="search" placeholder="Search Application here" aria-label="Search" />
                    </form>
                </div>


            </div>



            <div class="row">
                <div class="col-9">
                    <div class="allrows">
                        <div class="row">
                            <div class="col-sm-4">
                                <div class="card">
                                    <div class="card-body">
                                        <div class="row justify-content-start">
                                            <div class="row">
                                                <div class="col-10">
                                                    <h7 class="">Total Applications</h7>
                                                </div>
                                                <div class="col-2 text-right py-2">
                                                    <span class="dots">&#8943;</span>
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="col-6">
                                                    <h4>7956</h4><br /> <h6 id="pbvoilet"> &#8599; +3.59%</h6>
                                                </div>
                                                <div class="col-6">
                                                    <div class="progress voilet">
                                                        <span class="progress-left">
                                                            <span class="progress-bar"></span>
                                                        </span>
                                                        <span class="progress-right">
                                                            <span class="progress-bar"></span>
                                                        </span>
                                                        <div class="progress-value">+70%</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-sm-4">
                                <div class="card">
                                    <div class="card-body" id="middlecard">
                                        <div class="row justify-content-start">
                                            <div class="row">
                                                <div class="col-10">
                                                    <h7>Shortlisted Candidates</h7>
                                                </div>
                                                <div class="col-2 text-right py-2">
                                                    <span class="dots">&#8943;</span>
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="col-6">
                                                    <h4>4658</h4><br /> <h6 id="pbwhite" s> &#8599; +06%</h6>
                                                </div>
                                                <div class="col-6">
                                                    <div class="progress white">
                                                        <span class="progress-left">
                                                            <span class="progress-bar"></span>
                                                        </span>
                                                        <span class="progress-right">
                                                            <span class="progress-bar"></span>
                                                        </span>
                                                        <div class="progress-value">+60%</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-sm-4">
                                <div class="card">
                                    <div class="card-body">
                                        <div class="row justify-content-start">
                                            <div class="row">
                                                <div class="col-10">
                                                    <h7>Total Applications</h7>
                                                </div>
                                                <div class="col-2 text-right py-2">
                                                    <span class="dots">&#8943;</span>
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="col-6">
                                                    <h4>1501</h4><br /> <h6 id="pbred"> &#8600; -04%</h6>
                                                </div>
                                                <div class="col-6">
                                                    <div class="progress red">
                                                        <span class="progress-left">
                                                            <span class="progress-bar"></span>
                                                        </span>
                                                        <span class="progress-right">
                                                            <span class="progress-bar"></span>
                                                        </span>
                                                        <div class="progress-value">+40%</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="row">
                            <div class="col-sm-8">
                                <div class="card">
                                    <div class="card-body">
                                        <div class="row">
                                            <div class="col-2">
                                                <h11 class="card-title text-left">Applications Recieved</h11>
                                            </div>
                                            <div class="col-10">
                                                <ul class="navbar justify-content-end">
                                                    <li class="nav-item">
                                                        <a class="nav-link" href="#">This Year</a>
                                                    </li>
                                                    <li class="nav-item">
                                                        <a class="nav-link" href="#">This Week</a>
                                                    </li>
                                                    <li class="nav-item">
                                                        <a class="nav-link" href="#">Today</a>
                                                    </li>
                                                    <li class="nav-item">
                                                        <a class="nav-link"><h20><i class="fas fa-folder-plus px-1"></i>Download Report</h20></a>
                                                    </li>
                                                    <li class="nav-item">
                                                        <a class="nav-link" href="#"><span class="text-right">&#8942;</span></a>
                                                    </li>
                                                </ul>

                                            </div>

                                        </div>
                                        <div class="row">
                                            <h1 class="py-4">Area/Line Chart Here</h1>
                                        </div>
                                        <h5 class="card-title text-left"></h5>

                                    </div>
                                    <div>
                                        {

                                        }
                                    </div>
                                </div>
                            </div>
                            <div class="col-sm-4">
                                <div class="card">
                                    <div class="card-body" >
                                        <h5 class="card-title text-left">Total Applications</h5>
                                        <div className="progress-bar text-left px-2" id="bar1" >Applications </div>
                                        <div className="progress-bar text-left px-2" id="bar2">Short Listed</div>
                                        <div className="progress-bar text-left px-2" id="bar3">Rejected </div>
                                        <div className="progress-bar text-left px-2" id="bar4">On Hold</div>
                                        <div className="progress-bar text-left px-2" id="bar5">Positions</div>
                                    </div>

                                </div>
                            </div>
                        </div>


                        <div class="row">
                            <div class="col-sm-8">
                                <div class="card">
                                    <div class="card-body">
                                        <div class="row  px-2">
                                            <div class="col-5">
                                                <h6 class="card-title text-left">Referals And Campaing Stats</h6>
                                            </div>
                                            <div class="col-1 text-right">
                                                <a><i class="fab fa-telegram-plane"></i></a>
                                            </div>
                                            <div class="col-6 ">
                                                <h6 class="text-left">40 Campaings sent in Total</h6><h11 class="text-left">4 Campaings sent in last month</h11>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div className="col-6 col-sm-3 py-2">
                                                <h9>Users Reached</h9><br /><h11>&#8599; +3.59%</h11><br /><h5>7956</h5>

                                            </div>
                                            <div className="col-6 col-sm-3 py-2">
                                                <h9>Referals</h9><br /><h11> &#8599; +9.01%</h11><br /><h5>0662</h5>

                                            </div>
                                            <div className="col-6 col-sm-3 py-2">
                                                <h9>Shares</h9><br /><h11> &#8599; +39.16%</h11><br /><h5>1478</h5>

                                            </div>
                                            <div className="col-6 col-sm-3 py-2">
                                                <h9>Applications</h9><br /><h11>&#8599; +12.00%</h11><br /><h5>0564</h5>

                                            </div>

                                        </div>

                                        <div class="row">
                                            <div class="col-6">
                                                <a href="#" class="btn btn-primary">Start A New Campaing Now</a>
                                            </div>
                                            <div class="col-6">
                                                <a href="#" class="btn btn-danger">Pause All Running Campaings</a>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <div class="col-sm-4">
                                <div class="card">
                                    <div class="card-body">
                                        <div class="row">
                                            <div class="col-8">
                                                <h5 class="card-title text-left">Open Positions By Department</h5>
                                            </div>
                                            <div class="col-4">
                                                <span class="dots text-right">&#8943;</span>
                                            </div>

                                        </div>
                                        <div class="row">
                                            <h1 class="py-4">Donout Chart Here</h1>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-3">

                    <div class="card text-white">
                        <img src="./Images/bgimg.jpg" class="card-img" alt="Error" />
                        <div class="card-img-overlay">
                            <div><h5 class="card-title">Hello Satyam Singh, </h5><h5>You have 8 New Applications Today!</h5>
                            </div>
                        </div>
                    </div>
                    <div class="card" >

                        <div class="card-body">
                            <div class="row">
                                <div class="col-9">
                                    <h5 class="card-title text-left py-2">New Applicants</h5>
                                </div>
                                <div class="col-3">
                                    <button class="btn" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                    <a class="btn btn-secondary" ><i class="fas fa-caret-right"></i></a>

                                    </button>

                                </div>
                            </div>
                            <p class="card-text"><div >
                                {
                                    names.map(name => <h6 class="px-2 py-3">{name}</h6>)
                                }

                            </div></p>

                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
