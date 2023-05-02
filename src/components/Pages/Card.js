import React from 'react'

function Card(props) {
    return (
        <div>
            <div class="card" >
                <div class="card-body">
                    <h5 class="card-title">Card</h5>

                    <a class="btn btn-primary mb-3">My name is {props.name}</a>
                    <br />
                    <a class="btn btn-success mb-3">My email is {props.email}</a>
                    <br />
                    <a class="btn btn-success mb-3">I am an Alpha {props.gender}</a>
                    <br />
                    <a class="btn btn-danger mb-3">I belong to {props.country}</a>
                </div>
            </div>
        </div >
    )
}

export default Card