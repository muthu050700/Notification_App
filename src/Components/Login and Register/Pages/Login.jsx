import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Col, Form, FormGroup, Input, Label } from "reactstrap";
import { addUser } from "../../../store/userSlice";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const [loginInfo, setLoginInfo] = useState({
        email: "",
        password: "",
        errorDetails: {
            isEmailError: false,
            isPasswordError: false,
            emailErrorMsg: "",
            passwordErrorMsg: ""
        }
    });

    const userData = JSON.parse(localStorage.getItem("User"));

    const navigate = useNavigate();

    const userInfo = useSelector((store) => store.user.userInfo);

    const dispatch = useDispatch();

    const handleChange = (e) => {
        e.preventDefault();

        let name = e.target.name;
        let value = e.target.value;

        setLoginInfo((state) => ({
            ...state,
            [name]: value
        }))
    }

    const handleLogin = (e) => {
        e.preventDefault();
        let emailRegex = /^[a-zA-Z0-9._]+@[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/;
        let passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#\$%\^&\*])(?=.{8,})/;
        let email = loginInfo?.email;
        let password = loginInfo?.password;

        if (loginInfo.email === "") {
            setLoginInfo((state) => ({
                ...state,
                errorDetails: { ...state.errorDetails, isEmailError: true, isPasswordError: false, emailErrorMsg: "Email Field can't be empty." }
            }));
            return;
        }

        if (loginInfo.password === "") {
            setLoginInfo((state) => ({
                ...state,
                errorDetails: { ...state.errorDetails, isEmailError: false, isPasswordError: true, passwordErrorMsg: "Password Field can't be empty." }
            }));
            return;
        }

        if (!(emailRegex.test(email))) {
            setLoginInfo((state) => ({
                ...state,
                errorDetails: { ...state.errorDetails, isEmailError: true, emailErrorMsg: "Please Enter valid email." }
            }));
            return;
        } else {
            setLoginInfo((state) => ({
                ...state,
                errorDetails: { ...state.errorDetails, isEmailError: false, emailErrorMsg: "" }
            }));
        }

        if (!(passwordRegex.test(password))) {
            setLoginInfo((state) => ({
                ...state,
                errorDetails: { ...state.errorDetails, isPasswordError: true, passwordErrorMsg: "Please Enter valid Password." }
            }));
            return;
        } else {
            setLoginInfo((state) => ({
                ...state,
                errorDetails: { ...state.errorDetails, isPasswordError: false, passwordErrorMsg: "" }
            }))
        }

        localStorage.setItem("User", JSON.stringify({ email, password }));

        navigate("/");

    }

    useEffect(() => {
        console.log("useEffect called");
        if (userInfo === null) {
            dispatch(addUser(userData || null));
        }
    }, [])

    return (
        <div className=" flex w-full h-[100vh] items-center justify-center bg-[#f1faee] ">
            <div className=" w-[500px] p-6 m-3 rounded-lg bg-[#fefae0]" style={{ boxShadow: " 1px 1px 10px 6px #457b9d" }}>
                <Form className="">
                    <div>
                        <h2 className=" font-bold text-3xl text-[#1d3557]">Hey, Welcome</h2>
                    </div>
                    <FormGroup row>
                        <Label for="exampleEmail" sm={2} className="text-[#1d3557] font-medium" >
                            Email
                        </Label>
                        <Col sm={10}>
                            <Input id="email" name="email" placeholder="Email" type="email" value={loginInfo.email} onChange={(e) => handleChange(e)} style={{ backgroundColor: "#e9edc9", color: "#123458", fontSize: "17px", fontWeight: "medium", border: loginInfo.errorDetails.isEmailError ? "2px solid red" : "" }} />
                            {loginInfo?.errorDetails?.isEmailError ? <span className=" text-[#e63946]">{loginInfo.errorDetails.emailErrorMsg}</span> : null}
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label for="examplePassword" sm={2} className="text-[#1d3557] font-medium" >
                            Password
                        </Label>
                        <Col sm={10}>
                            <Input id="password" name="password" placeholder="Password" type="password" value={loginInfo.password} onChange={(e) => handleChange(e)} style={{ backgroundColor: "#e9edc9", color: "#123458", fontSize: "17px", fontWeight: "medium", border: loginInfo.errorDetails.isPasswordError ? "2px solid red" : "" }} />
                            {loginInfo?.errorDetails?.isPasswordError ? <span className=" text-[#e63946]">{loginInfo.errorDetails.passwordErrorMsg}</span> : null}
                        </Col>
                    </FormGroup>

                    <div className=" flex justify-between">
                        <button className="bg-[#f77f00] text-[#1d3557] px-4 py-2 font-medium" style={{ borderRadius: "20px" }} onClick={(e) => handleLogin(e)}>Login</button>
                        <p className="mb-0 pt-2 text-[#415a77]">Forgot password?</p>
                    </div>

                    <div className=" pt-3">
                        <p className=" text-[#14213d]">Doesn't have an account yet? <span className=" text-[#415a77] border-b-2 font-bold">Sign Up</span></p>
                    </div>

                </Form>
            </div>
        </div >
    )
}

export default Login;