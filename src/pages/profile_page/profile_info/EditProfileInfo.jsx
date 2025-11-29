
export function EditProfileInfo(){
    return(<>
        <div className="profile-info-form">
            <div>
                <label htmlFor=""></label> First name<input type="text" name="first-name" id="" />
            </div>
            <div>
                <label htmlFor="">Last Name</label> <input type="text" name="last-name" id="" />
            </div>
           
            <div>
                <label htmlFor="">phone no</label> <input type="text" name="phone-number" />
            </div>
            <div>
                <label htmlFor="l">profile image</label>
                <input type="image"  alt="" />
            </div>

        </div>

        <div>
            <div>
                change email
            </div>
        </div>
        <div>
            reset password
        </div>
        <div>
            delete account
        </div>
    
    
    </>)
}