import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
//import Profile from './Components/Profile/Profile';
import ClassComponet from './Components/ClassComponet';
//D:\React_class\RBT_Training_React\rbt_training\node_modules\bootstrap\dist\css\bootstrap.min.css
function App() {
  const student={
    sname:"John",
    class:'tenth',
    age:20
    
  }

  return (
    <div className='App'>
    <ClassComponet sname={student.sname} class={student.class} age={student.age}/>  

  {/*  <Profile sname={student.sname} class={student.class} age={student.age}/> */} 
    </div>
  );
}

export default App;
