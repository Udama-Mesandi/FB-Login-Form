import './Fb.css'

function Fb() {
    return (
        <div className='container'>

            <div className='row'>
                <div className='fb_desc col-lg-6  col-md-6 col-sm-12 p-5 '>
                    <h1 id='titel'>FaceBook</h1>
                    <p id ='desc'>Facebook helps you connect and share with the people in your life.</p>
                </div>



                <div className='fb-form  col-lg-6 col-md-6 col-sm-12'>
                    <form>
                        <fieldset>
                        <input type='text'  id="email-phone" className="form-control" placeholder='Email or Phone Number'></input><br></br>
                        <input type='text'  id="email-phone" className="form-control" placeholder='Password'></input><br></br>
                        <div className="d-grid gap-20 col-12 mx-auto">
                        <button className='btn btn-primary btn-lg'>Login</button><br></br>
                        
                            
    
                        </div>
                        <a href='#'>Forget Password</a><hr></hr>
                        
                        <div className="d-grid gap-20 col-6 mx-auto">
                        <button  id='create-account' className='btn btn-   btn-lg'>Create Account</button><br></br>
                        
                            
    
                        </div>
                        </fieldset>
                        


                    </form>

                </div>
            </div>





        </div>
    );
}

export default Fb