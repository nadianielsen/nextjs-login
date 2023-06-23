"use client"
import { Formik, Form, Field } from "formik";
import { setCookie } from "cookies-next";
import { useRouter } from "next/navigation";
import { useState } from "react";


const LoginForm = () => {

    const [errors, setErrors] = useState(null);

    const router = useRouter()

    return ( 
        <Formik initialValues={{
            email: '', password: '',
        }} onSubmit={(values, {setSubmitting}) => {
            // post til api...
            fetch("http://localhost:4000/login",{
                "method": "POST",
                "headers": { 
                    "Content-Type": "application/json"
                    //serveren skal vide at der kommer noget json
                },
                "body": JSON.stringify(values)
            })
            .then((response) => {
                if (!response.ok) {
                    //                   -- tager imod --
                    return response.text().then(text => {throw Error(text)})
                } else {
                   return response.json()
                }
            })
            .then((result) => {
                setCookie("token", result.accessToken)
                setCookie("user", JSON.stringify(result.user))
                setErrors(null) //fjerner error efter man har skrevet password forkert
                router.push("/secrets")
            })
            .catch(error => setErrors({status: JSON.parse(error.message)}))
            .finally(() => setSubmitting(false))
            }}>
        {({isSubmitting}) => (                    
                <Form className="w-60 mx-auto flex flex-col gap-y-2 p-4 border ">
                    <h2 className="text-xl font-bold">Log in</h2>
                    <Field name="email" type="email" className="text-black" placeholder="Your email"/>
                    <Field type="password" name="password" className="text-black" placeholder="Your password"/>
                    {/* vender den om med ! i stedet for at skrive "logging in" : "log in" */}
                    <button type="submit" disabled={isSubmitting} className="border">{!isSubmitting ? "Log in" : "Logging in..."}</button>
                    {/* tjekker om der er noget error eller ej, hvis der er så dukker errors.status op*/}
                    {errors?.status && <p className="text-red-600">{errors.status}</p>}
                </Form>
            )
        }            
        </Formik>

     );
}
 
export default LoginForm;