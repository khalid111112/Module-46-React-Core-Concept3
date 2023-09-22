
import './App.css'
import Grandpa from './componerts/Grandpa/Grandpa'
// import ReusableForm from './componerts/ReusableForm/ReusableForm'
// import HookForm from './componerts/HookForm/HookForm'
// import RefForm from './componerts/RefForm/RefForm'
// import SimpleForm from './componerts/SimpleForm/SimpleForm'
// import StatefulForm from './componerts/StatefulForm/StatefulForm'

function App() {
  
  // const handleSingUpSubmit = data => {
  //   console.log('sign up data', data);
  // }
  // const handleUpdateProfile = data => {
  //   console.log('updata profile', data);
  // }

  return (
    <>
     
      <h1>Form Master</h1>

        <Grandpa></Grandpa>

      {/* <SimpleForm></SimpleForm> */}
      {/* <StatefulForm></StatefulForm> */}
      {/* <RefForm></RefForm> */}
      {/* <HookForm></HookForm> */}
      {/* <ReusableForm formTitle={'sign up'} 
      handleSubmit={handleSingUpSubmit}>
      <div>
         <h2>Sing Up</h2>
         <p>please sign up right now</p>
      </div>
      </ReusableForm>
      <ReusableForm formTitle={'profile Updata'} 
      handleSubmit={handleUpdateProfile} submitBtnText='Update'>
        <div>
          <h2>Update Profile</h2>
          <p>Always keep yor profile updated</p>
        </div>
      </ReusableForm> */}
      
    </>
  )
}

export default App
