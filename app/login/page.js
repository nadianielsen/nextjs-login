"use client"
import { Formik, Form, Field } from "formik";
import { setCookie } from "cookies-next";

const Login = () => {

    return ( 
        <main className="">
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
                .then((response) => response.json())
                .then((result) => {
                    setCookie("token", result.accessToken)
                    setCookie("user", JSON.stringify(result.user))
                })
                .catch(err => console.log(err))
                .finally(() => setSubmitting(false))
                }}>
            {({isSubmitting}) => (                    
                    <Form className="w-60 mx-auto flex flex-col gap-y-2 p-4 border ">
                        <h2 className="text-xl font-bold">Log in</h2>
                        <Field name="email" type="email" className="text-black" placeholder="Your email"/>
                        <Field type="password" name="password" className="text-black" placeholder="Your password"/>
                        {/* vender den om med ! i stedet for at skrive "logging in" : "log in" */}
                        <button type="submit" disabled={isSubmitting} className="border">{!isSubmitting ? "Log in" : "Logging in..."}</button>
                    </Form>
                )
            }            
            </Formik>
        </main>
     );
}
 
export default Login;