import { useRouter } from "next/router"
import { useRef } from "react"
import { toast } from "react-toastify"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as Yup from "yup"
import axios, { AxiosResponse } from "axios"

export default function ReserveLessonForm({ date, time }: any) {
  const router = useRouter()

  const gradeRef = useRef<HTMLSelectElement>(null)
  const subjectRef = useRef<HTMLSelectElement>(null)
  const typeRef = useRef<HTMLSelectElement>(null)
  
  const validationSchema = Yup.object().shape({
    studentname: Yup.string()
      .required("Моля, въведете име на ученика")
      .min(1, "Името трябва да е дълго поне 1 символ")
      .max(22, "Името трябва да е дълго най-много 22 символа"),
    tel: Yup.string()
      .required("Моля, въведете телефон или e-mail")
  })

  const {
    register,
    handleSubmit,
    formState: { errors }
  }: any = useForm({ resolver: yupResolver(validationSchema) })

  const onSubmit = async(data: any) => {
    data.date = date
    data.time = time
    data.grade = Number(gradeRef.current?.value) || 1
    data.subject = subjectRef.current?.value
    data.type = typeRef.current?.value

    try {
      const resp: AxiosResponse<any, any> = await axios.post("/api/business", data)
      alert(resp.data)
    } 
    catch (AxiosError) {
      console.log(AxiosError)
      toast(`Грешни данни! ${AxiosError}`)
    }
    finally {
      router.push("/")
      router.reload()
    }
  }

  return (
    <div className="login-form ">
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-group">
                <label htmlFor="tel">Телефон или e-mail за връзка</label>
                <br />
                <input 
                    name="tel" 
                    type="text"
                    {...register("tel")}
                    className={`form-control ${errors.tel ? "is-invalid" : ""}`}
                />
                <div className="invalid-feedback">{errors.tel?.message}</div>
            </div>
            <br />
            <div className="form-group">
                <label htmlFor="username">Име на ученика</label>
                <br />
                <input 
                    name="studentname" 
                    type="text" 
                    {...register("studentname")}
                    className={`form-control ${errors.studentname? "is-invalid" : ''}`}
                />
                <div className="invalid-feedback">{errors.studentname?.message}</div>
            </div>
            <br />
            <div className="container-flex-row">
              <div className="form-group flex-item-1">
                  <label htmlFor="grade">Клас на ученика</label>
                  <br />
                  <select ref={gradeRef} name="grade">
                    {
                      [...Array(12)].map((g, i) => {
                        return <option key={i} value={i+1}>{i+1} клас</option>
                      })
                    }
                  </select>
                  <div className="invalid-feedback">{errors.grade?.message}</div>
              </div>
              <div className="form-group flex-item-1">
                  <label htmlFor="subject">Предмет</label>
                  <br />
                  <select ref={subjectRef} name="subject" className="form-control">
                    <option value="Математика">Математика</option>
                    <option value="Програмиране">Програмиране</option>
                    <option value="Уеб технологии">Уеб технологии</option>
                  </select>
              </div>
            </div>
            <br />
            <div className="form-group">
                <label htmlFor="subject">Форма на преподаване</label>
                <br />
                <select ref={typeRef} name="subject" className="form-control">
                  <option value="присъствено">присъствено</option>
                  <option value="онлайн">онлайн</option>
                </select>
            </div>
            <br />
            <br />
            <div className="form-group center">
                <button type="submit" className="user-btn">Изпрати</button>
            </div>
            <br />
        </form>
    </div>
  )
}
