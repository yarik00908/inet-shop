import React, { useState } from 'react'
import AuthLayout from '../layouts/AuthLayout'
import { Link, useNavigate } from 'react-router-dom'
import { Paths } from '../routes/paths'
import { SubmitHandler, useForm } from 'react-hook-form'
import { errorMess } from '../utils/errorMess'
import CustomInput from '../components/ui/CustomInput'
import { ILogin, IRegister } from '../types'
import { useLoginMutation } from '../services/user'
import CustomBtn from '../components/ui/CustomBtn'

// abd2
// abdulla12
const Login = () => {
    const [error, setError] = useState('');
    const loginMutation = useLoginMutation()
    const navigate = useNavigate()
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors, isValid },
        reset
    } = useForm<ILogin>({ mode: 'onChange' })
    // const pass = watch('password')
    const loginUser: SubmitHandler<ILogin> = async (data) => {
        try {
            await loginMutation.mutateAsync(data)
            navigate(Paths.menu)
            console.log('Авторизация прошла успешно!');
            setError('')
        } catch (error) {
            setError(errorMess(error, 'login'))
            console.log(error);
        }

    }
  return (
    <AuthLayout>
            <div className="enter">
                <h1 className="enter__title">Вход</h1>
                <form action="" className="enter__form" onSubmit={handleSubmit(loginUser)}>
                    <CustomInput
                        errors={errors.username}
                        label='Ваш логин'
                        holder='Логин'
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
                        errors={errors.password}
                        label='Ваш пароль'
                        holder='Пароль'
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
                    
                    <CustomBtn
                        width={248}
                        height={60}
                        text='Вход'
                        active={true}
                        disabled={!isValid}
                    />
                </form>
                <div className="enter__info">
                    {error && <h3 className='enter__error'>{error}</h3>}
                    <p className="enter__desc">Нет акканута? </p>
                    <Link className='enter__link' to={Paths.register}>Зарегистрироваться</Link>
                </div>
            </div>
        </AuthLayout>
  )
}

export default Login