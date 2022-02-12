import { useMutation } from "@apollo/client";
import { CREATE_JOB } from "./ApolloClient";

const CreateJob = ()=> {

   const [createJobRequest] = useMutation(CREATE_JOB, {
       onCompleted: (response)=> { alert(`${response.postJob.title} is created successfully!`);},
       onError: ()=> {alert('Error in creating job');}
   });


   

    return (<div style={{ width: '100%', height: '100%', flexDirection: 'column', display: 'flex'}}>
        <h1 style={{marginBottom: '50px', marginLeft: '50px', marginTop: '50px'}}>Post A Job</h1>

<form name="jobForm" onSubmit={(e)=> {
 
    e.preventDefault();
    createJobRequest({
        variables: {
            title: document.jobForm.title.value,
            description: document.jobForm.description.value,
            locationNames: document.jobForm.location.value,
            userEmail: document.jobForm.email.value,
            applyUrl: document.jobForm.link.value,
        }
    });
}}>
    <div style={{  height: '100%', margin: '0px auto', flexDirection: 'column'}}>
        <h2 style={{marginBottm: '10px'}}>Title</h2>
        <input type = "text" name = "title"  style={{marginBottm: '50px'}} />
        <h2 style={{marginBottm: '10px'}}>Description</h2>
        <input type = "text" name = "description"  style={{marginBottm: '50px'}} />
        <h2 style={{marginBottm: '10px'}}>Location</h2>
        <input type = "text" name = "location"  style={{marginBottm: '50px'}} />
        <h2 style={{marginBottm: '10px'}}>Email</h2>
        <input type = "text" name = "email"  style={{marginBottm: '50px'}} />
        <h2 style={{marginBottm: '10px'}}>Apply Link</h2>
        <input type = "text" name = "link"  style={{marginBottm: '50px'}} />
        <div style={ {marginTop: '50px'}}><button type="submit">Submit</button></div>
        
        </div>
        </form>
         </div>);
}

export default CreateJob;