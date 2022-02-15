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
    if (document.jobForm.title.value === "" || document.jobForm.description.value === "" || document.jobForm.location.value === "" || document.jobForm.email.value === "" || document.jobForm.link.value === "" ) {
        alert("Kindly fill all fields");
        return;
        }
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
        <input type = "text" placeholder="Enter Title" name = "title"  style={{marginBottm: '50px'}} />
        <h2 style={{marginBottm: '10px'}}>Description</h2>
        <input type = "text" placeholder="Enter Description" name = "description"  style={{marginBottm: '50px'}} />
        <h2 style={{marginBottm: '10px'}}>Location</h2>
        <input type = "text" placeholder="Enter Location" name = "location"  style={{marginBottm: '50px'}} />
        <h2 style={{marginBottm: '10px'}}>Email</h2>
        <input type = "email" placeholder="Enter Email" name = "email"  style={{marginBottm: '50px'}} />
        <h2 style={{marginBottm: '10px'}}>Apply Link</h2>
        <input type = "text" placeholder="Apply Link Here" name = "link"  style={{marginBottm: '50px'}} />
        <div style={ {marginTop: '50px'}}><button type="submit">Submit</button></div>
        
        </div>
        </form>
         </div>);
}

export default CreateJob;