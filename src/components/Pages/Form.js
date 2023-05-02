import { useState } from "react";
import Card from "./Card";

function Profile() {
    const [name, setName] = useState('');

    const [gender, setGender] = useState('');
    const [email, setEmail] = useState('');
    const [country, setCountry] = useState('');

    let profileObject = {
        name: '',
        email: '',
        gender: '',
        country: ''
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        profileObject.name = name;
        profileObject.email = email;
        profileObject.gender = gender;
        profileObject.country = country;

        console.log(profileObject);

        // alert(`The name you entered was: ${name}`);
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-6 mt-4 mr-3">
                    <Card name={name} email={email} gender={gender} country={country} />
                </div>
                <div className="col-6">
                    <h1 className="heading">Profile</h1>
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label for="name">Name</label>
                            <input value={name}
                                onChange={(e) => setName(e.target.value)} type="name" className="form-control" id="name" aria-describedby="emailHelp" placeholder="Enter Name" />
                        </div>
                        <br />
                        <div className="form-group">
                            <label for="exampleInputEmail1">Email address</label>
                            <input value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                            <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                        </div>
                        <br />
                        <div className="form-group">
                            <div className="form-check form-check-inline">
                                <input
                                    onClick={(e) => setGender(e.target.value)}
                                    className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="Male" />
                                <label className="form-check-label" for="exampleRadios1">
                                    Male
                                </label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input onClick={(e) => setGender(e.target.value)} className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="Female" />
                                <label className="form-check-label" for="exampleRadios2">
                                    Female
                                </label>
                            </div>

                        </div>
                        <br />
                        <div className="form-group">
                            <div class="form-group">
                                <label for="country-select">Select a country:</label>
                                <select value={country} onChange={(e) => setCountry(e.target.value)}
                                    class="form-control" id="country-select" name="country">
                                    <option value="pakistan">Pakistan</option>
                                    <option value="usa">USA</option>
                                    <option value="china">China</option>
                                    <option value="canada">Canada</option>
                                </select>
                            </div>

                        </div>
                        <br />

                        <div className="form-group">
                            <div id="date-picker-example" className="md-form md-outline input-with-post-icon datepicker" inline="true">
                                <label for="example">Date-of-Birth</label>
                                <input placeholder="Select date" type="date" id="example" className="form-control" />
                            </div>
                        </div>
                        <br />
                        <div className="form-group">
                            <label for="exampleInputPassword1">Password</label>
                            <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
                        </div>
                        <br />
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Profile;