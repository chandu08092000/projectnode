import React from 'react'
import loginn from './loginn.jpg'
import { Link,Outlet } from 'react-router-dom'
import { useFormik } from 'formik'

function Login() {
  const formik=useFormik({
    initialValues:{
      uname:'',
      pws:''
    },
    onSubmit:(values)=>{
      console.log('Values are ', values)
    },
    validate:(values)=>{
      let errors={}
      if(!values.uname){
        errors.uname='Please Enter UserName'
      }
      if(!values.pws){
        errors.pws='Please Enter Password'
      }
      return errors;
    }
  })
  return (
    <div>
      <marquee direction="left" width='100%' height='30px'>Welcome to High-Q Labs web page. Designed by Chandu.</marquee>
      <img src={loginn} alt='' width={'100%'} height='400px' />

      <div>
        <center>
              <form className='login_form' autoComplete='off' onSubmit={formik.handleSubmit}>

                  <input className='input' type={'text'} placeholder='User Name' name='uname' id='uname' value={formik.values.uname} onChange={formik.handleChange}/>
                  {formik.errors.uname?<div className='errors'>{formik.errors.uname}</div>:null}<br/>
                  
                  <input className='input' type={'password'} placeholder='Password' name='pws' id='pws' values={formik.values.pws} onChange={formik.handleChange}/>
                  {formik.errors.pws?<div className='errors'>{formik.errors.pws}</div>:null}<br/>


                  <input className='input' type={'submit'} placeholder='LOGIN'/><br/>
                      <div className='input'>
                        <Link to='/Register' >
                          Sign up for new Account?
                        </Link>
                        <Outlet/>
                      </div>

              </form>
        </center>
      </div>
      
      
    </div>
  )
}

export default Login
