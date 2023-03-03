
import { useRouter } from "next/router"

import * as Yup from "yup"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"

import axios, { AxiosResponse } from "axios"
import { toast } from "react-toastify"

function LoginForm() {
  const router = useRouter()
  
  const validationSchema = Yup.object().shape({
    username: Yup.string()
      .required("Моля въведете потребителско име")
      .min(3, "Потребителското име трябва да е най-малко 3 символа")
      .max(20, "Потребителското име трябва да е най-много 20 символа"),
    password: Yup.string()
      .required("Моля въведете парола")
      .min(6, "Паролата трябва да е най-малко 6 символа")
      .max(40, "Паролата трябва да е най-много 40 символа"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors }
  }: any = useForm({ resolver: yupResolver(validationSchema) });

  const onSubmit = async(data: any) => {
    try {
      const resp: AxiosResponse<any, any> = await axios.post("/api/login", data)

      if(resp.data.isLogged) {
        window.localStorage.setItem("zita-user", JSON.stringify(resp.data))
        if(!window.localStorage.getItem("zita-user-results")) {
          window.localStorage.setItem("zita-user-results", JSON.stringify([]))
        }
      }
    } 
    catch (error) {
      console.log(error)
      toast("Грешни данни!")
    }
    finally {
      router.push('/home').then(() => router.reload())
    }
  };
  return (
    <div>
        <h2 className="center">Вход</h2>

        <div className="login-form">
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-group">
                    <label htmlFor="username">Потребителско име</label>
                    <br />
                    <input 
                        name="username" 
                        type="text" 
                        {...register('username')}
                        className={`form-control ${errors.username ? "is-invalid" : ""}`}
                    />
                    <div className="invalid-feedback">{errors.username?.message}</div>
                </div>
                <br />
                <div className="form-group">
                    <label htmlFor="password">Парола</label>
                    <br />
                    <input 
                        name="password" 
                        type="password"
                        {...register("password")}
                        className={`form-control ${errors.password ? "is-invalid" : ""}`}
                    />
                    <div className="invalid-feedback">{errors.password?.message}</div>
                </div>
                <br />
                <div className="form-group center">
                    <button type="submit" className="user-btn">Влез</button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default LoginForm
