import React from 'react';

const Textarea = ({ name, label, error, ...rest}) => {
    return (
          <div class="form-group">
          <label htmlFor={name}>{ label }</label>
          <textarea  {...rest} name={name} id={name} className="form-control" rows="3"></textarea>
          {error &&  
               <div className="alert alert-danger">
               {error}
                </div>
               }  
        </div>
    )
}

 
  
  export default Textarea;