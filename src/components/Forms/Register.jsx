import Select from 'react-select'

import { useForm, Controller } from "react-hook-form";

function Register() {

  const { register, handleSubmit, control, watch, formState: { errors } } = useForm();

  const onFormSubmit = (data) => {
    console.log(data)

  }
  console.log(errors)

  const age = [
    { value: '12-18', label: '12-18' },
    { value: '19-29', label: '19-29' },
    { value: '30-44 ', label: '30-44' },
    { value: '45-64', label: '45-64' },
    { value: '45 and above', label: '45 and above' },
  ]

  const hobbies = [
    { value: 'Reading', label: 'Reading' },
    { value: 'Journaling', label: 'Journaling' },
    { value: 'Hiking', label: 'Hiking' },
    { value: 'Camping', label: 'Camping' },
    { value: 'Origami ', label: 'Origami ' },
    { value: 'Running ', label: 'Running ' },
    { value: 'Yoga ', label: 'Yoga ' },

  ]


  return (

    <form onSubmit={handleSubmit(onFormSubmit)}>
      <div className="container">


        <div className="py-3 ">
          <label htmlFor="">User Name</label>
          <input type="text" className=" w-100 border-0 p-2"
            {...register('username', { required: true }
            )}
          />
          {errors?.username?.type === 'required' &&
            <p className="form-text text-danger" >This field is required</p>}
        </div>

        <div className="py-3 ">
          <label htmlFor="">Email</label>
          <input type="text" className=" w-100 border-0 p-2"
            {...register('email', { required: true, pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/ })}
          />
          {errors?.email?.type === 'required' &&
            <p className="form-text text-danger">This field is required</p>}
          {errors?.email?.type === 'pattern' &&
            <p className="form-text text-danger">Email is invalid</p>}
        </div>

        <div className="py-3">
          <label htmlFor="">Password</label>
          <input type="password" className=" w-100 border-0 p-2" {...register("password", {
            required: true,
            pattern: /(?=^.{6,}$)(?=.*[0-9])(?=.*[A-Z])(?=.*[a-z])(?=.*[^A-Za-z0-9]).*/

          })} />
          {errors?.password?.type === 'required' &&
            <p className="form-text text-danger">This field is required</p>}
          {errors?.password?.type === 'pattern' &&
            <p className="form-text text-danger">Password is invalid</p>}
        </div>

        <div className="py-3">
          <label htmlFor="">Confirm Password</label>
          <input type="password" className=" w-100 border-0 p-2" {...register("confirm_password", {
            required: true,
            validate: (val) => {
              if (watch('password') != val) {
                return "confirm password not match password";
              }
            },
          })} />
          {errors?.confirm_password?.type === 'required' &&
            <p className="form-text text-danger">This field is required</p>}
          {errors.confirm_password &&
            <p className="form-text text-danger">{errors.confirm_password.message}</p>}
        </div>

        <div className="mb-3" >
          <label>Age</label>
          <Controller
            control={control}
            name="age"
            render={({ field: { onChange, value } }) => (
              <Select 
                options={age}
                onChange={onChange}
                value={value ? value : ""} />)} />
        </div>
        
        <div className="mb-3" >
          <label>Hobbies</label>
          <Controller
            control={control}
            name="hobbies"
            render={({ field: { onChange, value } }) => (
              <Select
                isMulti
                options={hobbies}
                onChange={onChange}
                value={value ? value : []} />)} />
        </div>

        <div className="py-3">
          <input {...register("checkbox")} type="checkbox" value="" />
          By checking this box, you are agreeing to our terms of service.</div>


        <button className="btn btn-primary">Submit</button>

      </div>
    </form>
  );
}

export default Register;



