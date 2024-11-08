import React, { useState } from 'react'
import AuthLayout from '../layouts/AuthLayout'
import { Link, useNavigate } from 'react-router-dom'
import { Paths } from '../routes/paths'
import { useForm, SubmitHandler } from "react-hook-form"
import CustomInput from '../components/ui/CustomInput'
import { IRegister } from '../types'
import { useRegisterMutation } from '../services/user'
import { errorMess } from '../utils/errorMess'
import CustomBtn from '../components/ui/CustomBtn'

// abd2
// abdulla12
// abd2@abd.ru
const Register = () => {
    const [error, setError] = useState('');
    const registerMutation = useRegisterMutation()
    const navigate = useNavigate()
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors, isValid },
        reset
    } = useForm<IRegister>({ mode: 'onChange' })
    const pass = watch('password')
    const registerUser: SubmitHandler<IRegister> = async (data) => {
        try {
            await registerMutation.mutateAsync(data)
            navigate(Paths.login)
            console.log('Регистрация прошла успешно!');
            setError('')
        } catch (error) {
            setError(errorMess(error))
            console.log(error);
        }

    }
    return (
        <AuthLayout>
            <div className="enter">
                <h1 className="enter__title">Регистрация</h1>
                <form action="" className="enter__form" onSubmit={handleSubmit(registerUser)}>
                    <CustomInput
                        errors={errors.username}
                        label='Ваше имя'
                        holder='Имя'
                        type='text'
                        register={
                            register('username', {
                                required: 'Это поле обязательное для заполнения',
                                minLength: {
                                    value: 3,
                                    message: 'Минимум 3 символа'
                                }
                            })
                        } />
                    <CustomInput
                        errors={errors.email}
                        label='Ваша почта'
                        holder='Почта'
                        type='email'
                        register={
                            register('email', {
                                required: 'Это поле обязательное для заполнения',
                                minLength: {
                                    value: 3,
                                    message: 'Минимум 3 символа'
                                }
                            })
                        } />
                    <CustomInput
                        errors={errors.password}
                        label='Ваш пароль'
                        holder='Ваш пароль'
                        type='password'
                        register={
                            register('password', {
                                required: 'Это поле обязательное для заполнения',
                                minLength: {
                                    value: 8,
                                    message: 'Минимум 8 символов'
                                }
                            })
                        } />
                    <CustomInput
                        errors={errors.password2}
                        label='Повторите пароль'
                        holder='Повторите пароль'
                        type='password'
                        register={
                            register('password2', {
                                required: 'Это поле обязательное для заполнения',
                                validate: (val) => val == pass || 'Пароли не совпадают',
                                minLength: {
                                    value: 8,
                                    message: 'Минимум 8 символов'
                                }
                            })
                        } />

                    <CustomBtn
                        width={248}
                        height={60}
                        text='Зарегистрироваться'
                        active={true}
                        disabled={!isValid}
                    />
                </form>
                <div className="enter__info">
                    {error && <h3 className='enter__error'>{error}</h3>}
                    <p className="enter__desc">Есть акканут?</p>
                    <Link className='enter__link' to={Paths.login}>Войти</Link>
                </div>
            </div>
        </AuthLayout>
    )
}

export default Register