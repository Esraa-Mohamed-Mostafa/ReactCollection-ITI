import { useForm } from "react-hook-form";

function Signin() {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();

  const onFormSubmit = (data) => {
    console.log(data)

  }
  console.log(errors)

  return (
    <form onSubmit={handleSubmit(onFormSubmit)}
    className="py-5 mt-5 d-flex justify-content-center align-items-center flex-column">

    <div className=" col-6 border border-primary p-5">
      <div className="px-5 ">
        <label htmlFor="">Email</label>
        <input type="text"className=" w-100"
          {...register('email', { required: true }
          )}
        />
        {errors?.email?.type === 'required' &&
          <p className="form-text text-danger">Email is required</p>}
      </div>

      <div className="px-5">
        <label className="pt-5" htmlFor="">Password</label>
        <input type="password" className=" w-100"
          {...register('password', {
            required: true,
            minLength: 4
          }
          )}
        />
        {errors?.password?.type === 'minLength' &&
          <p className="form-text text-danger" >Min numbers is 4</p>}
        {errors?.password?.type === 'required' &&
          <p className="form-text text-danger" >Password is required</p>}
      </div>
      <div class=" p-5">
      <button className="btn btn-primary w-100 px-5">Submit</button>
      </div>

      </div>

    </form>
  );
}
export default Signin;

